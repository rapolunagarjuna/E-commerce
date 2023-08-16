import nodemailer from 'nodemailer';
import Mailgen from 'mailgen';

export default async function sendPassword(to, firstName, lastName, password) {
  let config = {
    service: 'gmail',
    auth: {
      user: "parglobaltest1@gmail.com",
      pass: "mserppbtuqzpfimc"
    }
  }

  let transporter = nodemailer.createTransport(config);

  let MailGenerator = new Mailgen({
    theme: "default",
    product: {
      name: "PAR-Global US",
      link: process.env.FRONTEND_URL
    }
  });

  let mail = MailGenerator.generate({ 
    body: {
      name: `User for ${firstName} ${lastName} created succesfully`,
      intro: 'User login credentials are as follows:' ,
      outro: 'Email:' + to + " , Password: " + password
    }
  });

  let message = {
    from: "csc682cpms@gmail.com",
    to: to,
    subject: "User credentials for PAR-Global US created successfully",
    html: mail
  };

  try {
    await transporter.sendMail(message);
    console.log({ msg: "Email sent successfully!" });
  } catch (error) {
    console.error({ error });
    throw error;
  }
}

