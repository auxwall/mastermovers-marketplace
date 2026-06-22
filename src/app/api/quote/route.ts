import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, secondName, email, mobile, serviceType, movingType, villaSize, message, } = body;

    // Server-side basic validation
    if (!firstName || !email || !mobile || !serviceType) {
      return NextResponse.json({ success: false, message: "Missing required fields." }, { status: 400 });
    }

    // Configure SMTP transport
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: process.env.SMTP_SECURE === "true", // true for 465, false for 587
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    });

    const emailSubject = `New Quote Request from ${firstName} ${secondName || ""}`.trim();

    const emailMessage = `
New Quote Request Details:
-------------------------
Name: ${firstName} ${secondName || ""}
Email: ${email}
Mobile: ${mobile}
Service Type: ${serviceType}
${serviceType === "Domestic Move" ? `Moving Type: ${movingType || "N/A"}` : ""}
${serviceType === "Domestic Move" && movingType?.toLowerCase().includes("villa") ? `Villa Size: ${villaSize || "N/A"}` : ""}

Additional Message:
${message || "No additional message."}
`.trim();

    // Send the email
    await transporter.sendMail({ from: process.env.SMTP_FROM, to: process.env.SMTP_TO, subject: emailSubject, text: emailMessage, });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Nodemailer service error:", error);
    return NextResponse.json(
      { success: false, message: error.message || "An error occurred while sending the email." },
      { status: 500 }
    );
  }
}
