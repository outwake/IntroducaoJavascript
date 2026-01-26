
const leia= require("readline-sync");
//para ler a mensagem
let mensagem= leia.question("Digite uma mensagem:");

const data= "26/01/2026";

//Const não pode reatribuir valor, let pode
//mensagem="Javascript 13 top";

console.log(mensagem , data);

let num1= leia("Digite o primeiro numero:");
let num2= leia("Digite o segundo numero:");