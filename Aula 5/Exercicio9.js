const leia = require("readline-sync")

let somaPrinc=0, somaSec=0;
let diagonalPrinc = [], diagonalSec = [];

let matriz = Array.from({ length: 3 }, () =>
  Array.from({ length: 3 }, () => leia.questionFloat("Digite o numero: ")),
)

console.log("Elementos da diagonal principal:")
for(let i=0; i<matriz.length; i++){
  somaPrinc= somaPrinc + matriz[i][i];
  diagonalPrinc.push(matriz[i][i]); 
}
console.log(diagonalPrinc.join(" "))
console.log("A soma da diagonal principal é:", somaPrinc);

console.log("\n Elementos da diagonal secundaria:")
for (let i = 0; i < matriz.length; i++) {
  somaSec = somaSec + matriz[i][matriz.length - 1 - i]
  diagonalSec.push(matriz[i][matriz.length - 1 - i])
}
console.log(diagonalSec.join(" "))
console.log("A soma da diagonal principal é:", somaSec);

