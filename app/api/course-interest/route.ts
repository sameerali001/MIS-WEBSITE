import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import prisma from "@/lib/prisma";

export async function POST(request: Request) {
  const session = await getServerSession(authOptions);
  const email = session?.user?.email;
  if (!email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();
  const courseName = (body?.courseName ?? "").trim();

  if (!courseName) {
    return NextResponse.json({ error: "Course name is required." }, { status: 400 });
  }

  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  const ownerEmail = process.env.OWNER_EMAIL;
  if (ownerEmail) {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: ownerEmail,
      subject: "Course Interest",
      text: `User selected a course:\n\nCourse: ${courseName}\n\nUser Details:\nName: ${user.name}\nEmail: ${user.email}\nPhone: ${user.phone}\nCity: ${user.city}`,
    });
  }

  return NextResponse.json({ ok: true });
}
