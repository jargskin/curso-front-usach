// // a. Mostrar en consola los números del 1 al 100 de 1 en 1.
// const Numeros1al100 = () => {
//   for (let i = 1; i <= 100; i++) {
//     console.log(i);
//   }
// }
// // Numeros1al100();

// // b. Mostrar en consola los números del 1000 al 500 de 2 en 2
// const Numeros1000al500 = () => {
//   for (let i = 1000; i >= 500; i--) {
//     if (i % 2 === 0) {
//       console.log(i);
//     }
//   }
// }

// // Numeros1000al500();

// // Obtener el promedio de notas de un alumno considerando que la suma
// //  de notas debe ser el retorno de una función y el promedio el retorno 
// //  de otra función. Las notas son: 6,8,9,2,5,10.
// const notas = [6,8,9,2,5,10];
// const sumaDeNotas = (notas) => {
//   let sumaNotas = 0;
//   for (let i = 0; i < notas.length; i++) {
//     sumaNotas += notas[i];
//   }
//   return sumaNotas;
// }
// const promedio = (sumaDeNotas) => {
//   let promedio = sumaDeNotas / notas.length;
//   return promedio;
// }
// const promedioAlumno = promedio(sumaDeNotas(notas));
// console.log({promedioAlumno});

// const promedioAlumnoRedondeado2 = promedio(sumaDeNotas(notas)).toFixed(2);
// console.log({promedioAlumnoRedondeado2});


// const promedioAlumnoRedondeado0 = promedio(sumaDeNotas(notas)).toFixed(0);
// console.log({promedioAlumnoRedondeado0});


