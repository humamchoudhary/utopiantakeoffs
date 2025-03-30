import { NextResponse } from "next/server";
import { Readable } from "stream";
import nodemailer from "nodemailer";
import { google } from "googleapis";

const keyFile = JSON.parse(
  Buffer.from(process.env.GOOGLE_KEY_FILE, "base64").toString("utf-8"),
);

const auth = new google.auth.GoogleAuth({
  credentials: keyFile,
  scopes: ["https://www.googleapis.com/auth/drive"],
});

const drive = google.drive({ version: "v3", auth });

async function uploadToDrive(file) {
  try {
    const buffer = Buffer.from(await file.arrayBuffer());
    const response = await drive.files.create({
      requestBody: {
        name: file.name,
        parents: [process.env.GOOGLE_DRIVE_FOLDER_ID],
      },
      media: {
        mimeType: file.type,
        body: Readable.from(buffer),
      },
      fields: "id",
    });

    const fileId = response.data.id;

    await drive.permissions.create({
      fileId,
      requestBody: { role: "reader", type: "anyone" },
    });

    return `https://drive.google.com/file/d/${fileId}/view`;
  } catch (error) {
    console.error("Google Drive Upload Error:", error);
    throw new Error("Failed to upload to Google Drive");
  }
}

export async function POST(request) {
  try {
    const formData = await request.formData();

    // Extract all form fields
    const companyName = formData.get("companyName") || "Not provided";
    const companyEmail = formData.get("companyEmail") || "Not provided";
    const phoneNumber = formData.get("phoneNumber") || "Not provided";
    const projectDescription =
      formData.get("projectDescription") || "Not provided";

    // Process files
    const files = [];
    for (let i = 0; formData.get(`file${i}`); i++) {
      files.push(formData.get(`file${i}`));
    }

    let attachments = [];
    let driveLinks = [];

    // Upload files to drive or prepare as attachments
    if (files.length > 0) {
      for (const file of files) {
        if (file.size > 20 * 1024 * 1024) {
          driveLinks.push(`${file.name}: ${await uploadToDrive(file)}`);
        } else {
          attachments.push({
            filename: file.name,
            content: Buffer.from(await file.arrayBuffer()),
          });
        }
      }
    }

    // Create email body with all form data
    let emailBody = `
      New Contact Form Submission:
      
      Company Name: ${companyName}
      Company Email: ${companyEmail}
      Phone Number: ${phoneNumber}
      
      Project Description:
      ${projectDescription}
      
    `;

    // Add file information if any
    if (attachments.length || driveLinks.length) {
      emailBody += "\n\nFiles:\n";

      if (attachments.length) {
        emailBody += `${attachments.length} file(s) attached to this email.\n`;
      }

      if (driveLinks.length) {
        emailBody +=
          "\nFiles uploaded to Google Drive:\n" + driveLinks.join("\n");
      }
    }

    // Send email
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: "hashimest16@gmail.com",
      subject: `New Contact Inquiry from ${companyName}`,
      text: emailBody,
      attachments,
    });

    // Send confirmation email to customer
    // if (companyEmail && companyEmail !== "Not provided") {
    //   await transporter.sendMail({
    //     from: process.env.SMTP_USER,
    //     to: companyEmail,
    //     subject: "Thank you for contacting us",
    //     text: `
    //       Dear ${companyName},
    //
    //       Thank you for reaching out to us. We have received your inquiry and will get back to you as soon as possible.
    //
    //       Your request details:
    //       - Project Description: ${projectDescription.substring(0, 100)}${projectDescription.length > 100 ? "..." : ""}
    //       ${files.length > 0 ? `- Files: ${files.length} file(s) submitted` : ""}
    //
    //       Our team will review your information and contact you within 24 hours.
    //
    //       Best regards,
    //       The Estimating Team
    //     `,
    //   });
    // }

    return NextResponse.json(
      { message: "Contact form submitted successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error in API route:", error);
    return NextResponse.json(
      { message: "Error processing your request", error: error.message },
      { status: 500 },
    );
  }
}
