import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const { name, email, message, recaptchaToken } = req.body;
  if (!name || !email || !message || !recaptchaToken)
    return res.status(400).json({ error: "Missing required fields." });

  const recaptchaRes = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
    { method: "POST" }
  );
  const recaptchaJson = await recaptchaRes.json();
  if (!recaptchaJson.success) {
    return res.status(400).json({ error: "reCAPTCHA failed." });
  }

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: email,
      to: process.env.RECEIVER_EMAIL,
      subject: `New contact from ${name}`,
      text: message,
    });

    res.status(200).json({ message: "Email sent." });
  } catch (error) {
    console.error("Email error:", error);
    res.status(500).json({ error: "Email failed to send." });
  }
}
