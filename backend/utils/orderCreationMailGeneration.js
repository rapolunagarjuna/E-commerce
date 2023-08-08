const nodemailer = require('nodemailer');
const Mailgen = require('mailgen');

async function sendEmail(to, orderNumber) {
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
      link: 'https://mailgen.js/'
    }
  });

  let mail = MailGenerator.generate({
    body: {
      name: 'Order Succesfully placed successfully.',
      intro: 'Your order number is: ' + orderNumber,
      outro: 'Thank you for choosing PAR-Global US for your order!'
    }
  });

  let message = {
    from: "csc682cpms@gmail.com",
    to: to,
    subject: "Order placed",
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

module.exports = {
  sendEmail
};
