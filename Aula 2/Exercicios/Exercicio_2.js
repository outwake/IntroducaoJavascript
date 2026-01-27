const leia= require("readline-sync");

let nota1= leia.question("Digite a primeira nota ")
let nota2= leia.question("Digite a segunda nota ")
let nota3= leia.question("Digite a terceira nota ")
let nota4= leia.question("Digite a quarta nota ")

let media=(Number(nota1)+Number(nota2)+Number(nota3)+Number(nota4))/4


console.log("A média do aluno é:", media)