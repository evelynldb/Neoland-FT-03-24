const User = require("../api/models/User.model");
const { verifyToken } = require("../utils/token");
const dotenv = require("dotenv");
dotenv.config();

/** esto es el midd de autentificación, y es para comprobar que seas un usuario autenticado.
 * Y vamos a ver dos ejemplos:
 * isAuth para ver su tienes token
 * isAuthAdmin para ver si eres administrador
 */

const isAuth = async (req, res, next) => {
  //vamos a recibir un tokek por el header. ver insomnia bearer.
  const token = req.headers.authorization?.replace("Bearer ", "");

  if (!token) {
    //si no enviamos token, no estás autorizado porque no hay token
    return next(new Error("Unauthorized"));
  }

  try {
    /**si hay token hago una funcion asincrona que es una decodificacion con la funcion verifyTOken, que
     * lo que le envío es el token y jwtsecret, para decodificarlo en los 2 elementos con los que
     * construye el token que es el id y el email.
     */
    const decoded = verifyToken(token, process.env.JWT_SECRET);

    /// solo se crea req.user cuando es un endpoint authenticado ---> tiene como middleware el auth
    req.user = await User.findById(
      decoded.id
    ); /** busco el usuario con el findById y lo guardo en una
    clave nueva de la request  que será  req.user */
    next(); // una vez hecho lo anterior continúo
  } catch (error) {
    return next(error);
  }
};

const isAuthAdmin = async (req, res, next) => {
  const token = req.headers.authorization?.replace("Bearer ", "");
  if (!token) {
    return next(new Error("Unauthorized"));
  }

  try {
    const decoded = verifyToken(token, process.env.JWT_SECRET);
    // cuando decodifico el token saco el id y el email
    console.log(decoded);
    req.user = await User.findById(decoded.id);

    // pongo un requisito mas y es que sea admin
    if (req.user.rol !== "admin") {
      return next(new Error("Unauthorized, not admin"));
    }
    next();
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  isAuth,
  isAuthAdmin,
};
