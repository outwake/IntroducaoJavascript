
const leia= require("readline-sync");

let salario= leia.questionFloat("Qual é o salario:");

let abono= leia.questionFloat("Qual é o abono:");

let novoSalario = Number(salario)+ Number(abono);

console.log ("O novo salario é", novoSalario)