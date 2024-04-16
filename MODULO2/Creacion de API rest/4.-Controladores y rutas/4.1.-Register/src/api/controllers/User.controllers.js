//! -----------------------------------------------------------------------
//? ------------------------------librerias--------------------------------
//! -----------------------------------------------------------------------
const nodemailer = require("nodemailer");
const validator = require("validator");
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");

dotenv.config();

//! -----------------------------------------------------------------------
//? ------------------------------modelos----------------------------------
//! -----------------------------------------------------------------------
const User = require("../models/User.model");

//! -----------------------------------------------------------------------
//? ------------------------------utils - middlewares----------------------
//! -----------------------------------------------------------------------
const { deleteImgCloudinary } = require("../../middleware/files.middleware");
const randomCode = require("../../utils/randomCode");

//------------------->CRUD es el acrónimo de "Crear, Leer, Actualizar y Borrar"
/**+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 * +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 * +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 */
//! -----------------------------------------------------------------------------
//? ----------------------------REGISTER LARGO EN CODIGO ------------------------
//! -----------------------------------------------------------------------------
const registerLargo = async (req, res, next) => {
  /**hago funcion asincrona, porque hago peticion a mongodb y no va a ser inmediata, 
voy a tener que hacer una llamada a mongo y esperar. */
  /**REQUEST es la petición http; si es la creación de un usuario me vendrá
toda la info del usuario, y aparte mucha + info adicional. La RES es la repsuesta que le vamos a dar al cliente (éxito, error, lo que queramos decir)
 Y el NEXT es para que ejecute el sgte midelware */

  // capturamos la imagen nueva subida a cloudinary

  //-------------------return res.status(200).json("Soy Eve. Hello"); PRUEBA DEL CONTROLADOR!!

  let catchImg = req.file?.path;
  try {
    //--------------------------return res.status(200).json(catchImg); PRUEBA DEL CONTROLADOR!!

    // actualizamos los elementos unique del modelo
    await User.syncIndexes(); //primero el modelo, después el método.

    const { email, name } = req.body; // lo que enviamos por la parte del body de la request
    //notas
    // vamos a buscsar al usuario
    const userExist = await User.findOne(
      { email: req.body.email },
      { name: req.body.name }
    );

    if (!userExist) {
      let confirmationCode = randomCode();
      const newUser = new User({ ...req.body, confirmationCode });
      if (req.file) {
        newUser.image = req.file.path;
      } else {
        newUser.image = "https://pic.onlinewebfonts.com/svg/img_181369.png";
      }

      try {
        const userSave = await newUser.save();
        if (userSave) {
          // ---------------------------> ENVIAR EL CODIGO CON NODEMAILER --------------------
          const emailEnv = process.env.EMAIL;
          const password = process.env.PASSWORD;

          const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
              user: emailEnv,
              pass: password,
            },
          });

          const mailOptions = {
            from: emailEnv,
            to: email,
            subject: "Confirmation code",
            text: `tu codigo es ${confirmationCode}, gracias por confiar en nosotros ${name}`,
          };

          transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
              console.log(error);
              return res.status(404).json({
                user: userSave,
                confirmationCode: "error, resend code",
              });
            }
            console.log("Email sent: " + info.response);
            return res.status(200).json({
              user: userSave,
              confirmationCode,
            });
          });
        } else {
          return res.status(404).json("error save user");
        }
      } catch (error) {
        return res.status(404).json(error.message);
      }
    } else {
      if (req.file) deleteImgCloudinary(catchImg);
      return res.status(409).json("this user already exist");
    }
  } catch (error) {
    // SIEMPRE QUE HAY UN ERROR GENERAL TENEMOS QUE BORRAR LA IMAGEN QUE HA SUBIDO EL MIDDLEWARE
    if (req.file) deleteImgCloudinary(catchImg);
    return next(error); // cuando lo envío por el next y no por la respuesta es porque lo quiero guardar!
  }
};

module.exports = {
  registerLargo,
};
