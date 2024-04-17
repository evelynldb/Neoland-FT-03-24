const setError = (code, message) => {
  // este helper genera un error. envia un codigo y un mensaje
  const error = new Error();
  error.code = code;
  error.message = message;
  return error; // retornamos ese error. y cogemos esto y lo usamos en el next de usercontroller
};
module.exports = setError;
