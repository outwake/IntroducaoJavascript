const leia = require("readline-sync")

let n1= leia.questionFloat("Digite a primeiro numero: ")
let n2= leia.questionFloat("Digite a segundo numero: ")
let n3= leia.questionFloat("Digite a terceiro numero: ")

let soma= n1+n2;

if(soma > n3){
    console.log(`A soma de A+B é Maior que C`)
}
else if(soma < n3){
    console.log(`A soma de A+B é menor que C`)
}
else if(soma == n3){
    console.log(`A soma de A+B é igual que C`)
}