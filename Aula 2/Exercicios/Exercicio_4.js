const leia= require("readline-sync");

let n1= leia.question("Digite a primeiro numero: ")
let n2= leia.question("Digite a segundo numero: ")
let n3= leia.question("Digite a terceiro numero: ")
let n4= leia.question("Digite a quarto numero: ")

let calculo= (Number(n1)* Number(n2)) - (Number(n3) * Number(n4))

console.log("O valor do calculo é ", calculo);
