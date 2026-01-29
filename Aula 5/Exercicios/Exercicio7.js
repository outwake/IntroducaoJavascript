const leia = require("readline-sync")

let numero = Array(10);
let numPosicao;
let i, cont;

for (i = 0; i < 10; i++) {
  numero[i]= leia.question("Digite o numero:")
}
numPosicao = leia.questionInt("Qual número você está procurando?")
for( i = 0; i < 10; i++){
  if(numero[i]==numPosicao){
  console.log(`O número ${numPosicao} está localizado na posição: ${i}`)
  cont = true;
  }   
} 
  if(!cont){
    console.log(`O número ${numPosicao} não foi localizado!!`)
  }