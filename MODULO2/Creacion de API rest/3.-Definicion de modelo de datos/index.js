const express = require("express");
const dotenv = require("dotenv");
const { connect } = require("./src/utils/db");
//! ----------------------------------------------------------
//?------------------ creamos el servidor web------------------
//! ----------------------------------------------------------
const app =
  express(); /*le decimos que app es el servidor express y cada vez que quiero hacer algo sobre el servidor
utilizo app*/

// vamos a configurar dotenv para poder utilizar las variables d entorno del .env
dotenv.config();
//! ----------------------------------------------------------
//? ------------conectamos con la base de datos---------------
//! ----------------------------------------------------------
connect(); /**función para conectar a la bbdd (en este MongoDB). Dentro de esa función usamos la libreria moongose para 
conectarnos a la bbdd */

//! -----------------VARIABLES CONSTANTES --> PORT

const PORT = process.env.PORT;

//! ----------------------------------------------------------
//?- ------------------- CORS -------------------------------
//! ----------------------------------------------------------
const cors = require("cors"); // con las CORS configuramos el acceso a la API desde el navegador

app.use(cors()); // esta es la forma de configurar el servidor: le estamos diciendo que use CORS

//! ----------------- ----------------------------------------
//? -----------------ROUTAS ---------------------------------
//! ----------------- ----------------------------------------

//! --------------------------------------------------------------
//? ------------------ limitaciones de cantidad en el back end-----
//! ---------------------------------------------------------------
app.use(
  express.json({ limit: "5mb" })
); /*hacemos el uso del back y le decimos va  a haber Json y url, que son formas
de envío diferentes, y va a tener un limite de 5mb*/
app.use(
  express.urlencoded({ limit: "5mb", extended: false })
); /*el true es una forma dif de enviar los datos.
permite parsear los objetos de forma + optimizada, pero es más lento, por lo que provoca más problemas de asincronía.
En false es más rápido, y hay dos formas de enviarlo: qs y querystring*, y aquí vamos a usar el querystring */

//! ----------------------------------------------------------
//? -----------------  ERRORES GENERALES Y RUTA NO ENCONTRADA
//! ----------------------------------------------------------

app.use("*", (req, res, next) => {
  const error = new Error("Route not found");
  error.status = 404;
  return next(error);
});

// ----- en este caso como gestionamos un error la callback lleva de parametros error, req, res
// cuando es un controlador normal llevaria siempre como para parametros REQ, RES, NEXT ---> en este orden siemppre
app.use((error, req, res) => {
  return res
    .status(error.status || 500)
    .json(error.message || "unexpected error");
});

//! ------------------------------------------------------------------
//? ------------------ ESCUCHAMOS EN EL PUERTO EL SERVIDOR WEB--------
//! ------------------------------------------------------------------
app.disable("x-powered-by");
app.listen(PORT, () =>
  console.log(`Server listening on port 👌🔍 http://localhost:${PORT}`)
);
