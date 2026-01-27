
const leia= require("readline-sync");

let nome= leia.question("Digite o nome do funcionário:")
let salario= leia.questionFloat("Qual é o salario:");
let abono= leia.questionFloat("Qual é o abono:");

let novoSalario = Number(salario)+ Number(abono);


//console.log ("O novo salario é ", novoSalario.toFixed(2))
//toofixed fixar casas decimais

console.log("O(a) funcionário(a)", nome,  " possui salario Liquido atualizado de:", 
    new Intl.NumberFormat('pt-BR',{
        style: 'currency',
        currency: 'BRL'
    }) .format(novoSalario)
)