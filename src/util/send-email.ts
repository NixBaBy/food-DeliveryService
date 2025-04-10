import nodemailer from "nodemailer";
export const sendEmail = async (email: string, token: string) => {
  const mailSecret = process.env.MAIL_SECRET;
  const mail = process.env.MAIL;

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    secure: true,
    port: 465,
    auth: {
      user: mail,
      pass: mailSecret,
    },
  });

  const mailOption = {
    from: "Tuguldur foods",
    to: email,
    subject: "Reset your password",
    html: `
  <h1>Your password reset link</h1>
  <a href="http://localhost:3000/reset-password?id=${token}">click here</a> 
  `,
  };
  await transporter.sendMail(mailOption);
};
