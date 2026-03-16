import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function POST(request: Request) {
  try {
    const { name, email, phone, city, course, message } = await request.json();

    // Validate required fields
    if (!name || !email || !phone || !city || !course) {
      return Response.json(
        { error: 'All required fields must be filled' },
        { status: 400 }
      );
    }

    // Log the enrollment request (for development)
    console.log('New Enrollment Request:', {
      name,
      email,
      phone,
      city,
      course,
      message,
      timestamp: new Date().toISOString()
    });

    // Try to send emails if SMTP is configured
    const smtpConfigured = process.env.SMTP_USER && process.env.SMTP_PASS;
    
    if (smtpConfigured) {
      try {
        const userEmailContent = `
          <h2>Thank You for Your Interest!</h2>
          <p>Dear ${name},</p>
          <p>We have received your enrollment request for <strong>${course}</strong>.</p>
          <h3>Your Details:</h3>
          <ul>
            <li><strong>Name:</strong> ${name}</li>
            <li><strong>Email:</strong> ${email}</li>
            <li><strong>Phone:</strong> ${phone}</li>
            <li><strong>City:</strong> ${city}</li>
            <li><strong>Course:</strong> ${course}</li>
            ${message ? `<li><strong>Message:</strong> ${message}</li>` : ''}
          </ul>
          <p>Our team will contact you shortly with more details about the course and enrollment process.</p>
          <p>Best regards,<br/>Master Training Team</p>
        `;

        const ownerEmailContent = `
          <h2>New Course Enrollment Request</h2>
          <p>A new student has submitted an enrollment request.</p>
          <h3>Student Details:</h3>
          <ul>
            <li><strong>Name:</strong> ${name}</li>
            <li><strong>Email:</strong> ${email}</li>
            <li><strong>Phone:</strong> ${phone}</li>
            <li><strong>City:</strong> ${city}</li>
            <li><strong>Course:</strong> ${course}</li>
            ${message ? `<li><strong>Message:</strong> ${message}</li>` : ''}
          </ul>
          <p>Submission Date: ${new Date().toLocaleString()}</p>
        `;

        // Send email to user
        await transporter.sendMail({
          from: process.env.SMTP_FROM || process.env.SMTP_USER,
          to: email,
          subject: `Enrollment Confirmation - ${course}`,
          html: userEmailContent,
        });

        // Send email to owner
        await transporter.sendMail({
          from: process.env.SMTP_FROM || process.env.SMTP_USER,
          to: process.env.OWNER_EMAIL || process.env.SMTP_USER,
          subject: `New Course Enrollment Request - ${course}`,
          html: ownerEmailContent,
        });
      } catch (emailError) {
        console.error('Email sending failed (continuing anyway):', emailError);
      }
    } else {
      console.log('SMTP not configured - skipping email notifications');
    }

    return Response.json(
      { 
        message: 'Enrollment request submitted successfully. Check your email for confirmation.',
        success: true 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Enrollment submission error:', error);
    return Response.json(
      { error: 'Failed to process enrollment request. Please try again.' },
      { status: 500 }
    );
  }
}
