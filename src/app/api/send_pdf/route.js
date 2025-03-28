import { NextResponse } from "next/server";
import { Readable } from "stream";
import path from "path";
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
    const files = [];
    for (let i = 0; formData.get(`file${i}`); i++) {
      files.push(formData.get(`file${i}`));
    }

    if (!files.length) {
      return NextResponse.json(
        { message: "No files uploaded" },
        { status: 400 },
      );
    }

    let attachments = [];
    let driveLinks = [];

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

    let emailBody = `Please find the attached files.\n\nUser Email: ${formData.get("email")}\n\n`;
    if (driveLinks.length) {
      emailBody += "Files uploaded to Google Drive:\n" + driveLinks.join("\n");
    }

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
      subject: "Uploaded Files",
      text: emailBody,
      attachments,
    });

    return NextResponse.json(
      { message: "Files sent successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error in API route:", error);
    return NextResponse.json(
      { message: "Error sending files", error: error.message },
      { status: 500 },
    );
  }
}
