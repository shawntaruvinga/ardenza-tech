import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();

console.log("SMTP_USER:", process.env.SMTP_USER);
console.log("SMTP_PASS length:", process.env.SMTP_PASS?.length);

const app = express();
const PORT = process.env.SERVER_PORT || 4000;

app.use(cors());
app.use(express.json());

app.post('/send-contact', async (req, res) => {
  try {
    const {
      name = '',
      email = '',
      company = '',
      phone = '',
      service = '',
      description = '',
      urgency = '',
    } = req.body || {};

    const recipient = process.env.CONTACT_RECIPIENT || 'info@ardenzatech.com';

    // Prefer configured SMTP transporter
   const smtpHost = process.env.SMTP_HOST;
const smtpPort = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : 587;
const smtpUser = process.env.SMTP_USER;
const smtpPass = process.env.SMTP_PASS;

console.log("HOST:", smtpHost);
console.log("PORT:", smtpPort);
console.log("USER:", smtpUser);
console.log("PASS LENGTH:", smtpPass?.length);

    if (!smtpHost || !smtpUser || !smtpPass) {
      return res.status(500).json({ success: false, error: 'SMTP not configured on the server.' });
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      },
    });

    try {
    await transporter.verify();
    console.log("SMTP VERIFIED!");
} catch (err) {
    console.error("BREVO ERROR:", err);
}
console.log("SMTP OK");

    const subject = `Website inquiry from ${name || 'Anonymous'}`;
    const text = `Name: ${name}
    \nEmail: ${email}
    \nCompany: ${company}
    \nPhone: ${phone}
    \nService: ${service}
    \nUrgency: ${urgency}
    \n\n${description}`;

   const info = await transporter.sendMail({
  from: '"ArdenzaTech" <www.info@ardenzatech.com>',
  to: recipient,
  subject,
  text,
  html: `
    <div style="font-family: Arial, sans-serif; max-width:600px; margin:auto;">
      <h2 style="color:#0B5ED7;">New Website Inquiry</h2>

      <table style="width:100%; border-collapse:collapse;">
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
  `
});

console.log("Message ID:", info.messageId);
console.log("Response:", info.response);

await transporter.sendMail({
    from: '"ArdenzaTech" <www.info@ardenzatech.com>',
    to: email,
    subject: "We've received your inquiry",
    html: `
        <h2>Thank you for contacting ArdenzaTech!</h2>
        <p>Hello ${name},</p>
        <p>We have received your inquiry and will get back to you shortly.</p>
        <p><strong>ArdenzaTech Team</strong></p>
    `
});

    return res.json({ success: true });
  } catch (err) {
    console.error('send-contact error', err);
    return res.status(500).json({ success: false, error: String(err) });
  }
});

app.listen(PORT, () => {
  console.log(`Contact server listening on port ${PORT}`);
});
