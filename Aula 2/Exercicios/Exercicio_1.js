
const leia= require("readline-sync");

let salario= leia.question("Qual é o salario:");

let abono= leia.question("Qual é o abono:");

let novoSalario = Number(salario)+ Number(abono);

console.log ("O novo salario é", novoSalario)