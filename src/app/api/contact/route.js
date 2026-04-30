import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

const escapeHtml = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

export async function POST(request) {
  let body;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 },
    );
  }

  const { name, email, message } = body;

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const smtpUser =
    process.env.GMAIL_USER || process.env.EMAIL_USER || process.env.SMTP_USER;
  const smtpPass =
    process.env.GMAIL_PASS || process.env.EMAIL_PASS || process.env.SMTP_PASS;
  const contactReceiver =
    process.env.CONTACT_RECEIVER_EMAIL || "wasifhasancse@gmail.com";

  if (!smtpUser || !smtpPass) {
    if (process.env.NODE_ENV !== "production") {
      console.warn(
        "SMTP credentials are missing. Returning success in development mode.",
      );
      return NextResponse.json(
        { success: true, message: "Message received in development mode" },
        { status: 200 },
      );
    }

    console.error("Contact route is missing SMTP credentials.");
    return NextResponse.json(
      { error: "Email service is not configured correctly." },
      { status: 500 },
    );
  }

  const senderName = "Portfolio Contact";
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br>");

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  try {
    await transporter.verify();

    // Email to Wasif
    await transporter.sendMail({
      from: `"${senderName}" <${smtpUser}>`,
      to: contactReceiver,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Message:</strong></p>
        <p>${safeMessage}</p>
        <hr>
        <p><small>This is an automated message from the portfolio contact form.</small></p>
      `,
      replyTo: email,
    });

    // Do not fail the main request if only the confirmation email fails.
    try {
      await transporter.sendMail({
        from: `"${senderName}" <${smtpUser}>`,
        to: email,
        subject: "We received your message - Wasif Hasan",
        html: `
          <h2>Thank you for reaching out!</h2>
          <p>Hi ${safeName},</p>
          <p>I've received your message and will get back to you as soon as possible.</p>
          <p>In the meantime, feel free to connect with me on:</p>
          <ul>
            <li><a href="https://github.com/wasifhasancse">GitHub</a></li>
            <li><a href="https://linkedin.com/in/wasif-hasan">LinkedIn</a></li>
          </ul>
          <p>Best regards,<br>Wasif Hasan</p>
        `,
      });
    } catch (confirmationError) {
      console.warn("User confirmation email failed:", confirmationError);
    }

    return NextResponse.json(
      { success: true, message: "Email sent successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json(
      { error: "Failed to send email. Please try again later." },
      { status: 500 },
    );
  }
}
