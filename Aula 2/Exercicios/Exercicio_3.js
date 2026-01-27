const leia= require("readline-sync");

let salarioBruto= leia.questionFloat("Digite o salario bruto: ")
let salarioNoturno= leia.questionFloat("Digite o salario noturno: ")
let horasExtras= leia.questionFloat("Digite as horas extras: ")
let descontos= leia.questionFloat("Digite o descontos: ")

let salarioLiquido= Number(salarioBruto)+ Number(salarioNoturno) +(Number(horasExtras)*5)- Number(descontos)

console.log("Salario Liquido é:", 
    new Intl.NumberFormat('pt-BR',{
        style: 'currency',
        currency: 'BRL'
    }) .format(salarioLiquido)
)