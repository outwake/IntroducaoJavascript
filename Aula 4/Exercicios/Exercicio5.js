const leia = require("readline-sync")

let contMaior=0,contMenor=0, posit=0, negat=0, numero;
      do{
        numero=leia.questionInt("Digite um número:")
         if(numero>0){   
              posit=posit+numero;
              contMaior++;}
              
          else if (numero<0){
              negat= negat + numero;
              contMenor++; }

        }while(numero!==0)

console.log(`A soma dos números positivos é: ${posit} \n`)
console.log(`Quantidade de numeros positivos contados: ${contMaior} \n`)

console.log(`A soma dos números negativos é: ${negat} \n`)
console.log(`Quantidade de numeros negativo contados: ${contMenor} \n`)