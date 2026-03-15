import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { name, email, topic, message } = await req.json();

  if (!topic || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: "Forin Contact <onboarding@resend.dev>",
    to: process.env.CONTACT_EMAIL!,
    subject: `Survey suggestion: ${topic}`,
    text: [
      `Topic: ${topic}`,
      `From: ${name || "Anonymous"}${email ? ` <${email}>` : ""}`,
      "",
      message,
    ].join("\n"),
  });

  if (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
