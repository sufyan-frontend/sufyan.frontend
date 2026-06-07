import nodemailer from "nodemailer";
import { NextRequest } from "next/server";

const OWNER_EMAIL = "sufyantechsolutions@gmail.com";
const LOGO_URL = "https://sufyan-frontend.vercel.app/favicon.png";
const SITE_URL = "https://sufyan-frontend.vercel.app";
const WHATSAPP_NUMBER = "923227479636";

type GeoInfo = {
  ip: string;
  city: string;
  region: string;
  country: string;
  isp: string;
  lat: number;
  lon: number;
};

async function getLocation(ip: string): Promise<GeoInfo | null> {
  try {
    const res = await fetch(`http://ip-api.com/json/${ip}?fields=status,city,regionName,country,isp,lat,lon`, {
      signal: AbortSignal.timeout(3000),
    });
    const data = await res.json();
    if (data.status !== "success") return null;
    return { ip, city: data.city, region: data.regionName, country: data.country, isp: data.isp, lat: data.lat, lon: data.lon };
  } catch {
    return null;
  }
}

function makeTransporter() {
  return nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });
}

function ownerEmailHtml(name: string, email: string, phone: string, address: string, emailSubject: string, message: string, geo: GeoInfo | null) {
  const initial = name.charAt(0).toUpperCase();
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1"/>
<title>New Contact Message</title>
</head>
<body style="margin:0;padding:0;background-color:#f3f4f6;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial,sans-serif;">

<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f3f4f6;padding:48px 20px;">
  <tr><td align="center">

    <!-- Logo above card -->
    <table role="presentation" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
      <tr>
        <td align="center">
          <img src="${LOGO_URL}" alt="Muhammad Sufyan" width="52" height="52"
            style=""/>
          <p style="margin:8px 0 0;color:#6b7280;font-size:13px;font-weight:500;">Muhammad Sufyan</p>
        </td>
      </tr>
    </table>

    <!-- Card -->
    <table role="presentation" width="560" cellpadding="0" cellspacing="0"
      style="max-width:560px;width:100%;background-color:#ffffff;border-radius:14px;
             border:1px solid #e5e7eb;overflow:hidden;
             box-shadow:0 4px 24px rgba(0,0,0,0.06);">

      <!-- Top accent bar -->
      <tr>
        <td style="height:4px;background:linear-gradient(90deg,#7c3aed,#a78bfa);font-size:0;line-height:0;">&nbsp;</td>
      </tr>

      <!-- Header -->
      <tr>
        <td style="padding:32px 40px 24px;border-bottom:1px solid #f3f4f6;">
          <p style="margin:0 0 4px;color:#7c3aed;font-size:11px;letter-spacing:2px;text-transform:uppercase;font-weight:700;">New Message</p>
          <h1 style="margin:0;color:#111827;font-size:22px;font-weight:700;letter-spacing:-0.3px;">You received a contact form submission</h1>
        </td>
      </tr>

      <!-- Body -->
      <tr>
        <td style="padding:28px 40px;">

          <!-- Sender card -->
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0"
            style="background:#f9fafb;border:1px solid #e5e7eb;border-radius:10px;
                   margin-bottom:24px;overflow:hidden;">
            <tr>
              <td style="padding:16px 20px;border-bottom:1px solid #e5e7eb;">
                <table role="presentation" cellpadding="0" cellspacing="0">
                  <tr>
                    <td width="38" valign="middle">
                      <div style="width:36px;height:36px;border-radius:50%;
                                  background:linear-gradient(135deg,#7c3aed,#a78bfa);
                                  text-align:center;line-height:36px;
                                  color:#fff;font-size:15px;font-weight:700;">
                        ${initial}
                      </div>
                    </td>
                    <td style="padding-left:12px;" valign="middle">
                      <p style="margin:0 0 1px;color:#111827;font-size:14px;font-weight:600;">${name}</p>
                      <a href="mailto:${email}" style="color:#7c3aed;font-size:13px;text-decoration:none;">${email}</a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:12px 20px;border-bottom:${phone ? "1px solid #e5e7eb" : "none"};">
                <p style="margin:0;color:#6b7280;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:1px;margin-bottom:3px;">Subject</p>
                <p style="margin:0;color:#374151;font-size:14px;font-weight:500;">${emailSubject}</p>
              </td>
            </tr>
            ${phone ? `<tr>
              <td style="padding:12px 20px;border-bottom:${address ? "1px solid #e5e7eb" : "none"};">
                <p style="margin:0;color:#6b7280;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:1px;margin-bottom:3px;">Phone</p>
                <p style="margin:0;color:#374151;font-size:14px;font-weight:500;">${phone}</p>
              </td>
            </tr>` : ""}
            ${address ? `<tr>
              <td style="padding:12px 20px;">
                <p style="margin:0;color:#6b7280;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:1px;margin-bottom:3px;">Address</p>
                <p style="margin:0;color:#374151;font-size:14px;font-weight:500;">${address}</p>
              </td>
            </tr>` : ""}
          </table>

          <!-- Message label -->
          <p style="margin:0 0 8px;color:#6b7280;font-size:11px;letter-spacing:1.5px;text-transform:uppercase;font-weight:700;">Message</p>

          <!-- Message box -->
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
            <tr>
              <td width="3" style="background:#7c3aed;border-radius:3px 0 0 3px;">&nbsp;</td>
              <td style="background:#fafafa;border:1px solid #e5e7eb;border-left:none;
                          border-radius:0 10px 10px 0;padding:16px 20px;">
                <p style="margin:0;color:#374151;font-size:14px;line-height:1.85;white-space:pre-wrap;">${message}</p>
              </td>
            </tr>
          </table>

          ${geo ? `<!-- Location info -->
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
            <tr>
              <td style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:10px;padding:14px 18px;">
                <p style="margin:0 0 6px;color:#6b7280;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:1.5px;">Sender Location</p>
                <p style="margin:0 0 3px;color:#111827;font-size:14px;font-weight:500;">&#128205; ${geo.city}, ${geo.region}, ${geo.country}</p>
                <p style="margin:0 0 3px;color:#6b7280;font-size:13px;">ISP: ${geo.isp}</p>
                <p style="margin:0 0 3px;color:#6b7280;font-size:13px;">IP: ${geo.ip}</p>
                <a href="https://www.google.com/maps?q=${geo.lat},${geo.lon}" style="color:#059669;font-size:12px;text-decoration:none;">View on map &rarr;</a>
              </td>
            </tr>
          </table>` : ""}

          <!-- Reply button -->
          <table role="presentation" cellpadding="0" cellspacing="0">
            <tr>
              <td style="border-radius:8px;background:#7c3aed;
                         box-shadow:0 2px 12px rgba(124,58,237,0.3);">
                <a href="mailto:${email}?subject=Re%3A%20${encodeURIComponent(emailSubject)}"
                  style="display:inline-block;padding:12px 30px;color:#ffffff;
                         font-size:14px;font-weight:600;text-decoration:none;">
                  Reply to ${name} &rarr;
                </a>
              </td>
            </tr>
          </table>

        </td>
      </tr>

      <!-- Footer -->
      <tr>
        <td style="padding:18px 40px;background:#f9fafb;border-top:1px solid #f3f4f6;text-align:center;">
          <p style="margin:0;color:#9ca3af;font-size:12px;">
            Sent from your portfolio &middot;
            <a href="${SITE_URL}" style="color:#7c3aed;text-decoration:none;">sufyan-frontend.vercel.app</a>
          </p>
        </td>
      </tr>

    </table>

    <p style="margin-top:20px;color:#9ca3af;font-size:11px;text-align:center;">
      &copy; 2025 Muhammad Sufyan &middot; Lahore, Pakistan
    </p>

  </td></tr>
</table>

</body>
</html>`;
}

function userEmailHtml(name: string, message: string) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1"/>
<title>Message Received</title>
</head>
<body style="margin:0;padding:0;background-color:#f3f4f6;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial,sans-serif;">

<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f3f4f6;padding:48px 20px;">
  <tr><td align="center">

    <!-- Logo above card -->
    <table role="presentation" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
      <tr>
        <td align="center">
          <img src="${LOGO_URL}" alt="Muhammad Sufyan" width="52" height="52"
            style=""/>
          <p style="margin:8px 0 0;color:#6b7280;font-size:13px;font-weight:500;">Muhammad Sufyan</p>
        </td>
      </tr>
    </table>

    <!-- Card -->
    <table role="presentation" width="560" cellpadding="0" cellspacing="0"
      style="max-width:560px;width:100%;background-color:#ffffff;border-radius:14px;
             border:1px solid #e5e7eb;overflow:hidden;
             box-shadow:0 4px 24px rgba(0,0,0,0.06);">

      <!-- Top accent bar -->
      <tr>
        <td style="height:4px;background:linear-gradient(90deg,#059669,#34d399);font-size:0;line-height:0;">&nbsp;</td>
      </tr>

      <!-- Header -->
      <tr>
        <td style="padding:36px 40px 28px;text-align:center;border-bottom:1px solid #f3f4f6;">
          <!-- Check circle -->
          <div style="display:inline-block;width:52px;height:52px;border-radius:50%;
                      background:#ecfdf5;border:2px solid #6ee7b7;
                      text-align:center;line-height:50px;margin-bottom:18px;">
            <span style="color:#059669;font-size:22px;font-weight:700;">&#10003;</span>
          </div>
          <h1 style="margin:0 0 6px;color:#111827;font-size:22px;font-weight:700;letter-spacing:-0.3px;">Message Received!</h1>
          <p style="margin:0;color:#6b7280;font-size:14px;">I&apos;ll get back to you within 24 hours.</p>
        </td>
      </tr>

      <!-- Body -->
      <tr>
        <td style="padding:28px 40px;">

          <p style="margin:0 0 6px;color:#111827;font-size:16px;font-weight:600;">Hi ${name},</p>
          <p style="margin:0 0 26px;color:#6b7280;font-size:14px;line-height:1.8;">
            Thanks for getting in touch! I&apos;ve received your message and will reply
            as soon as possible &mdash; usually within <strong style="color:#111827;">24 hours</strong>.
          </p>

          <!-- Divider -->
          <hr style="border:none;border-top:1px solid #f3f4f6;margin:0 0 24px;"/>

          <!-- Message label -->
          <p style="margin:0 0 8px;color:#6b7280;font-size:11px;letter-spacing:1.5px;text-transform:uppercase;font-weight:700;">Your Message</p>

          <!-- Message box -->
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
            <tr>
              <td width="3" style="background:#059669;border-radius:3px 0 0 3px;">&nbsp;</td>
              <td style="background:#f9fafb;border:1px solid #e5e7eb;border-left:none;
                          border-radius:0 10px 10px 0;padding:16px 20px;">
                <p style="margin:0;color:#6b7280;font-size:14px;line-height:1.85;white-space:pre-wrap;">${message}</p>
              </td>
            </tr>
          </table>

          <!-- CTA buttons -->
          <table role="presentation" cellpadding="0" cellspacing="0">
            <tr>
              <td style="border-radius:8px;border:1px solid #e5e7eb;margin-right:12px;">
                <a href="${SITE_URL}"
                  style="display:inline-block;padding:12px 24px;color:#374151;
                         font-size:14px;font-weight:600;text-decoration:none;">
                  View My Portfolio &#8594;
                </a>
              </td>
              <td width="12"></td>
              <td style="border-radius:8px;background:#25d366;">
                <a href="https://wa.me/${WHATSAPP_NUMBER}"
                  style="display:inline-block;padding:12px 24px;color:#ffffff;
                         font-size:14px;font-weight:600;text-decoration:none;">
                  Chat on WhatsApp
                </a>
              </td>
            </tr>
          </table>

        </td>
      </tr>

      <!-- Footer -->
      <tr>
        <td style="padding:20px 40px;background:#f9fafb;border-top:1px solid #f3f4f6;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td valign="middle">
                <p style="margin:0 0 1px;color:#374151;font-size:13px;font-weight:600;">Muhammad Sufyan</p>
                <p style="margin:0;color:#9ca3af;font-size:12px;">Frontend Developer &middot; Lahore, Pakistan</p>
              </td>
              <td align="right" valign="middle">
                <img src="${LOGO_URL}" alt="MS" width="30" height="30"/>
              </td>
            </tr>
          </table>
        </td>
      </tr>

    </table>

    <p style="margin-top:20px;color:#9ca3af;font-size:11px;text-align:center;">
      &copy; 2025 Muhammad Sufyan &middot; Lahore, Pakistan
    </p>

  </td></tr>
</table>

</body>
</html>`;
}

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, address, subject, message } = await request.json();

    if (!name || !email || !message) {
      return Response.json({ error: "Name, email, and message are required." }, { status: 400 });
    }

    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      console.error("[contact] Missing GMAIL_USER or GMAIL_APP_PASSWORD env vars");
      return Response.json({ error: "Email service not configured." }, { status: 500 });
    }

    const emailSubject = subject || "Portfolio Inquiry";

    const rawIp =
      request.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
      request.headers.get("x-real-ip") ||
      "unknown";
    const geo = rawIp !== "unknown" && rawIp !== "127.0.0.1" && rawIp !== "::1"
      ? await getLocation(rawIp)
      : null;

    const [ownerResult, userResult] = await Promise.allSettled([
      makeTransporter().sendMail({
        from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
        to: OWNER_EMAIL,
        replyTo: email,
        subject: `New message from ${name}: ${emailSubject}`,
        html: ownerEmailHtml(name, email, phone || "", address || "", emailSubject, message, geo),
      }),
      makeTransporter().sendMail({
        from: `"Muhammad Sufyan" <${process.env.GMAIL_USER}>`,
        to: email,
        replyTo: process.env.GMAIL_USER,
        subject: `Got your message, ${name}!`,
        html: userEmailHtml(name, message),
      }),
    ]);

    if (ownerResult.status === "rejected") {
      const msg = ownerResult.reason instanceof Error ? ownerResult.reason.message : String(ownerResult.reason);
      console.error("[contact] owner email failed:", msg);
      return Response.json({ error: msg }, { status: 500 });
    }

    if (userResult.status === "rejected") {
      const msg = userResult.reason instanceof Error ? userResult.reason.message : String(userResult.reason);
      console.error("[contact] confirmation email failed:", msg);
    } else {
      console.log("[contact] confirmation sent to:", email);
    }

    return Response.json({ success: true });
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error("[contact] unexpected error:", msg);
    return Response.json({ error: msg }, { status: 500 });
  }
}
