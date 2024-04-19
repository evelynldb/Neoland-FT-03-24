const express = require("express");
const UserRoutes = express.Router();

const {
  registerLargo,
  registerUtil,
  registerWithRedirect,
  sendMailRedirect,
  resendCode,
} = require("../controllers/User.controllers");
const { upload } = require("../../middleware/files.middleware");

//!------------------------------------------------------------------------
//?--------------------------------RUTAS SIN REDIRECT----------------------
//!------------------------------------------------------------------------

UserRoutes.post("/registerLargo", upload.single("image"), registerLargo);
UserRoutes.post("/registerUtil", upload.single("image"), registerUtil);
UserRoutes.post("/resend", resendCode);

//!------------------------------------------------------------------------
//?--------------------------------RUTAS CON REDIRECT----------------------
//!------------------------------------------------------------------------
UserRoutes.post("/register", upload.single("image"), registerWithRedirect); //enemos que meter lo de image, para usar multipart y que envie el body. sino, enviaba el email pero sin body.

//!---------------- REDIRECT-------------------------------
UserRoutes.post("/register/sendMail/:id", sendMailRedirect);
module.exports = UserRoutes;
