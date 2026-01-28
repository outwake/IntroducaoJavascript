
const leia= require("readline-sync");

let nome= leia.question("Digite o nome do aluno:");
let media= leia.questionFloat("Digite a média do aluno:");

if (media >= 7){

    console.log (`Aluno ${nome} aprovado`);
} //if simples
else if(media >=5 && media <= 7){
console.log (`Aluno ${nome} de exame`); 
}//if composto
else{
    console.log (`Aluno ${nome} reprovado`); 
}