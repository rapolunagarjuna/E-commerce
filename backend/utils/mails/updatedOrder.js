import nodemailer from "nodemailer";
import Mailgen from "mailgen";

export default async function sendUpdationMail(
  to,
  firstName,
  lastName,
  order,
  items,
  subTotal,
  total
) {
  let config = {
    service: "gmail",
    auth: {
      user: "parglobaltest1@gmail.com",
      pass: "mserppbtuqzpfimc",
    },
  };

  let transporter = nodemailer.createTransport(config);

  let mailGenerator = new Mailgen({
    theme: "salted",
    product: {
      name: "PAR-Global US",
      link: process.env.FRONTEND_URL
    },
  });

  // Prepare email contents
  let mail = {
    body: {
      name: `${firstName} ${lastName}`,
      intro: `Your order ${order._id} has been updated.`,
      table: {
        data: [
          ...items.map((item) => ({
            item: item.name,
            dimensions: item.dimensions,
            quantity: `${item.quantity}` ,
            price: `$${item.price}`,
            total: `$${item.price * item.quantity}` ,
          })),
          {
            item: "Subtotal",
            dimensions: "",
            quantity: "" ,
            price: "",
            total: `$${subTotal}`
          },
          {
            item: "Discount",
            dimensions: "",
            quantity: "" ,
            price: "",
            total: `${order.discount}%`
          },
          {
            item: "Tax",
            dimensions: "",
            quantity: "" ,
            price: "",
            total: `${order.tax}%`
          },
          {
            item: "Total",
            dimensions: "",
            quantity: "" ,
            price: "",
            total: `$${total}`
          },
        ],
        columns: {
        //   customWidth: {
        //     item: "50%",
        //     price: "25%",
        //   },
        //   customAlignment: {
        //     price: "right",
        //   },
        },
      },
      action: {
        instructions:
          "You can check the status of your order and more in your dashboard:",
        button: {
          color: "#3869D4",
          text: "Go to Dashboard",
          link: process.env.FRONTEND_URL + '/login'
        },
      },
      outro: "We thank you for your purchase.",
    },
  };

  let message = {
    from: "csc682cpms@gmail.com",
    to: to,
    subject: `Order ${order._id} updated succesfully`,
    html: mailGenerator.generate(mail),
  };

  try {
    await transporter.sendMail(message);
    console.log({ msg: "Email sent successfully!" });
  } catch (error) {
    console.error({ error });
    throw error;
  }
}
