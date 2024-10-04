import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { Readable } from "stream";

export async function POST(request) {
  try {
    const formData = await request.formData();
    const files = [];
    for (let i = 0; formData.get(`file${i}`); i++) {
      files.push(formData.get(`file${i}`));
    }

    if (files.length === 0) {
      return NextResponse.json(
        { message: "No files uploaded" },
        { status: 400 },
      );
    }

    // Create a transporter using SMTP
    let transporter = nodemailer.createTransport({
      host: process.env.NEXT_PUBLIC_SMTP_HOST,
      port: parseInt(process.env.NEXT_PUBLIC_SMTP_PORT),
      auth: {
        user: process.env.NEXT_PUBLIC_SMTP_USER,
        pass: process.env.NEXT_PUBLIC_SMTP_PASS,
      },
    });

    // Prepare email attachments
    const attachments = files.map((file) => ({
      filename: file.name,
      content: Readable.from(file.stream()),
    }));

    // Send mail with defined transport object
    let info = await transporter.sendMail({
      from: `"Your Name" <${process.env.NEXT_PUBLIC_SMTP_USER}>`,
      to: process.env.NEXT_PUBLIC_SMTP_USER, // sending to the same email as the 'from' email
      subject: "Uploaded PDF Files",
      text: "Please find the attached PDF files.",
      attachments: attachments,
    });

    console.log("Email sent:", info);

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

export const config = {
  api: {
    bodyParser: false,
  },
};
