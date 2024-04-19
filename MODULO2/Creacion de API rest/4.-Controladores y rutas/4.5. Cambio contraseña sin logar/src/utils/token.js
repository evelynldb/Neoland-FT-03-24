const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const generateToken = (id, email) => {
  if (!id || !email) {
    //si no viene un id o no viene un email, entones no puedes crear el token! Esto es una validación de datos de entrada
    throw new Error("Email or id are missing");
  }

  return jwt.sign({ id, email }, process.env.JWT_SECRET, { expiresIn: "1d" }); //firma el toke, creando el token con el id, el email y la fecha de expiración
};

const verifyToken = (token) => {
  if (!token) {
    throw new Error("Token is missing");
  }

  return jwt.verify(token, process.env.JWT_SECRET);
};

module.exports = {
  generateToken,
  verifyToken,
};
