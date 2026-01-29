const leia= require("readline-sync")

let contpar=0, contimpar=0;

for(let contador=1; contador <=10; contador++){
let numero = leia.questionFloat(`Digite o ${contador} numero: `)
if(numero % 2== 0){
  contpar++;
}
else{
  contimpar++;
}
}
console.log(`Quantidade de numeros pares: ${contpar} \n`)
console.log(`Quantidade de numeros impares: ${contimpar}`)