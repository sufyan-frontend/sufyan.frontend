import nodemailer from "nodemailer";
import { NextRequest } from "next/server";

const OWNER_EMAIL = "sufyan.frontend@gmail.com";

export async function POST(request: NextRequest) {
  try {
  const { name, email, subject, message } = await request.json();

  if (!name || !email || !message) {
    return Response.json({ error: "Name, email, and message are required." }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  const emailSubject = subject || "Portfolio Inquiry";

  // Email to owner
  await transporter.sendMail({
    from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
    to: OWNER_EMAIL,
    replyTo: email,
    subject: `New message: ${emailSubject}`,
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:auto;padding:24px;background:#111;color:#f0f0f0;border-radius:12px">
        <h2 style="color:#a78bfa;margin-bottom:8px">New Contact Form Submission</h2>
        <hr style="border-color:#333;margin-bottom:20px"/>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}" style="color:#a78bfa">${email}</a></p>
        <p><strong>Subject:</strong> ${emailSubject}</p>
        <p style="margin-top:16px"><strong>Message:</strong></p>
        <p style="background:#1a1a1a;padding:16px;border-radius:8px;white-space:pre-wrap">${message}</p>
      </div>
    `,
  });

  // Confirmation email to user
  await transporter.sendMail({
    from: `"Muhammad Sufyan" <${process.env.GMAIL_USER}>`,
    to: email,
    subject: `Thanks for reaching out, ${name}!`,
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:auto;padding:24px;background:#111;color:#f0f0f0;border-radius:12px">
        <h2 style="color:#a78bfa;margin-bottom:8px">Message Received!</h2>
        <hr style="border-color:#333;margin-bottom:20px"/>
        <p>Hi <strong>${name}</strong>,</p>
        <p>Thanks for getting in touch. I've received your message and will get back to you as soon as possible, usually within 24 hours.</p>
        <p style="margin-top:16px"><strong>Your message:</strong></p>
        <p style="background:#1a1a1a;padding:16px;border-radius:8px;white-space:pre-wrap">${message}</p>
        <hr style="border-color:#333;margin-top:24px"/>
        <p style="color:#888;font-size:13px">Muhammad Sufyan · Frontend Developer · Lahore, Pakistan</p>
      </div>
    `,
  });

  return Response.json({ success: true });
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error("[contact] sendMail error:", msg);
    return Response.json({ error: msg }, { status: 500 });
  }
}
