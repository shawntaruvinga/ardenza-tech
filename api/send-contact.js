import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      error: "Method not allowed",
    });
  }

  try {
    const {
      name = "",
      email = "",
      company = "",
      phone = "",
      service = "",
      description = "",
      urgency = "",
    } = req.body || {};

    const recipient =
      process.env.CONTACT_RECIPIENT || "info@ardenzatech.com";

    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = process.env.SMTP_PORT
      ? Number(process.env.SMTP_PORT)
      : 587;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    console.log("HOST:", smtpHost);
    console.log("PORT:", smtpPort);
    console.log("USER:", smtpUser);
    console.log("PASS LENGTH:", smtpPass?.length);

    if (!smtpHost || !smtpUser || !smtpPass) {
      return res.status(500).json({
        success: false,
        error: "SMTP not configured on the server.",
      });
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    await transporter.verify();

    const subject = `Website inquiry from ${name || "Anonymous"}`;

    const text = `
Name: ${name}
Email: ${email}
Company: ${company}
Phone: ${phone}
Service: ${service}
Urgency: ${urgency}

${description}
`;

    const info = await transporter.sendMail({
      from: `"ArdenzaTech" <www.info@ardenzatech.com>`,
      to: recipient,
      subject,
      text,
      html: `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:auto;">
        <h2 style="color:#0B5ED7;">New Website Inquiry</h2>

        <table style="width:100%;border-collapse:collapse;">
          <tr><td><strong>Name</strong></td><td>${name}</td></tr>
          <tr><td><strong>Email</strong></td><td>${email}</td></tr>
          <tr><td><strong>Company</strong></td><td>${company || "N/A"}</td></tr>
          <tr><td><strong>Phone</strong></td><td>${phone || "N/A"}</td></tr>
          <tr><td><strong>Service</strong></td><td>${service}</td></tr>
          <tr><td><strong>Urgency</strong></td><td>${urgency}</td></tr>
        </table>

        <h3>Project Description</h3>
        <p>${description}</p>

        <hr>

        <p><strong>ArdenzaTech LeadHub</strong></p>
      </div>
      `,
    });

    console.log("Message ID:", info.messageId);

    if (email) {
      await transporter.sendMail({
        from: `"ArdenzaTech" <info@ardenzatech.com>`,
        to: email,
        subject: "We've received your inquiry",
        html: `
          <h2>Thank you for contacting ArdenzaTech!</h2>
          <p>Hello ${name},</p>
          <p>We have received your inquiry and will get back to you shortly.</p>
          <p><strong>ArdenzaTech Team</strong></p>
        `,
      });
    }

    return res.status(200).json({
      success: true,
      message: "Message sent successfully.",
    });
  } catch (err) {
    console.error("send-contact error:", err);

    return res.status(500).json({
      success: false,
      error: err.message || String(err),
    });
  }
}