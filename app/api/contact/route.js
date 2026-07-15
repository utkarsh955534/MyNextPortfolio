import { Resend } from "resend";
import connectDB from "@/lib/mongodb";
import Message from "@/models/Message";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    await connectDB();

    const body = await req.json();

    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return Response.json(
        {
          success: false,
          message: "All fields are required.",
        },
        {
          status: 400,
        }
      );
    }

    // Save to MongoDB
    await Message.create({
      name,
      email,
      subject,
      message,
    });

    // Send Email
    await resend.emails.send({
      from: "Utkarsh <onboarding@resend.dev>",
      to: "utkarshmishra1012005@gmail.com",
      subject: `📩 New Portfolio Contact: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>📩 New Portfolio Contact</h2>

          <p><strong>Name:</strong> ${name}</p>

          <p><strong>Email:</strong> ${email}</p>

          <p><strong>Subject:</strong> ${subject}</p>

          <hr>

          <p><strong>Message:</strong></p>

          <p>${message}</p>
        </div>
      `,
    });

    return Response.json({
      success: true,
      message: "Message sent successfully.",
    });
  } catch (error) {
    console.error(error);

    return Response.json(
      {
        success: false,
        message: "Something went wrong.",
      },
      {
        status: 500,
      }
    );
  }
}