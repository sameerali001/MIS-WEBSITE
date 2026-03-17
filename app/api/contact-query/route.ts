import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { name, email, phone, message } = await request.json();

    if (!name || !email || !message) {
      return Response.json({ error: "Name, email and message are required." }, { status: 400 });
    }

    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const ownerEmail = process.env.OWNER_EMAIL || process.env.PRIMARY_EMAIL || smtpUser;

    if (!smtpUser || !smtpPass || !ownerEmail) {
      return Response.json({ error: "Email configuration missing." }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: parseInt(process.env.SMTP_PORT || "587", 10),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const ownerEmailContent = `
      <h2>New Query Generated</h2>
      <p>A new query has been submitted from the MIS contact form.</p>
      <h3>Query Details:</h3>
      <ul>
        <li><strong>Name:</strong> ${name}</li>
        <li><strong>Email:</strong> ${email}</li>
        <li><strong>Phone:</strong> ${phone || "Not provided"}</li>
        <li><strong>Message:</strong> ${message}</li>
      </ul>
      <p><strong>Submitted At:</strong> ${new Date().toLocaleString()}</p>
    `;

    await transporter.sendMail({
      from: process.env.SMTP_FROM || smtpUser,
      to: ownerEmail,
      subject: `New Query Generated - ${name}`,
      html: ownerEmailContent,
      replyTo: email,
    });

    return Response.json({ success: true, message: "Query submitted successfully." }, { status: 200 });
  } catch (error) {
    console.error("Contact query submission error:", error);
    return Response.json({ error: "Failed to submit query." }, { status: 500 });
  }
}
