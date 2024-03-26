// **Iteración #2: Condicionales avanzados**

// Comprueba en cada uno de los usuarios que tenga al menos dos trimestres aprobados
//y añade la propiedad ***isApproved*** a true o false en consecuencia.
//Una vez lo tengas compruébalo con un ***console.log***.

// Puedes usar este array para probar tu función:

const alumns = [
  { name: "Pepe Viruela", T1: false, T2: false, T3: true },
  { name: "Lucia Aranda", T1: true, T2: false, T3: true },
  { name: "Juan Miranda", T1: false, T2: true, T3: true },
  { name: "Alfredo Blanco", T1: false, T2: false, T3: false },
  { name: "Raquel Benito", T1: true, T2: true, T3: true },
];

const aprobadosCheck = (arrayAlumnos) => {
  arrayAlumnos.forEach((element) => {
    (element.T1 && element.T2) ||
    (element.T1 && element.T3) ||
    (element.T2 && element.T3)
      ? (element.isApproved = true)
      : false;
  });
  return arrayAlumnos;
};

const resultArrayAlumnos = aprobadosCheck(alumns);
console.log(resultArrayAlumnos);
