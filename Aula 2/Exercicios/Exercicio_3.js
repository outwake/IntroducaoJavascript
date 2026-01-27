const leia= require("readline-sync");

let salarioBruto= leia.question("Digite o salario bruto: ")
let salarioNoturno= leia.question("Digite o salario noturno: ")
let horasExtras= leia.question("Digite as horas extras: ")
let descontos= leia.question("Digite o descontos: ")

let salarioLiquido= Number(salarioBruto)+ Number(salarioNoturno) +(Number(horasExtras)*5)- Number(descontos)

console.log("O salario liquido é: ", salarioLiquido)