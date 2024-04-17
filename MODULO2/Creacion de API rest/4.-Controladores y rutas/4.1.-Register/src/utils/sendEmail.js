const dotenv = require("dotenv");
dotenv.config();
const nodemailer = require("nodemailer");
const { setTestEmailSend } = require("../state/state.data");

const sendEmail = (userEmail, name, confirmationCode) => {
  //esta función gestiona el envío del código

  /**^reseteo el estado a false ---> es el estado inicial */
  setTestEmailSend(false); //lo primero que hacemos con los estados que son funcionales es resetearlos al inicio
  const email = process.env.EMAIL;
  const password = process.env.PASSWORD;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: email,
      pass: password,
    },
  });

  const mailOptions = {
    from: email,
    to: userEmail,
    subject: "Confirmation code",
    text: `tu codigo es ${confirmationCode}, gracias por confiar en nosotros ${name}`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      setTestEmailSend(false);
      return;
    }
    console.log("Email sent: " + info.response);
    setTestEmailSend(true);
  });
};

module.exports = sendEmail;
