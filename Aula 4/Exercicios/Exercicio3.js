const leia = require("readline-sync")

let contMenor = 0, contMaior = 0, idade=0;

  while( idade >= 0){
   idade=leia.questionInt("Digite uma idade:")
    if(idade<21 && idade>0){
      contMenor++;
    }
    else if(idade>50){
       contMaior++;
    }
  }
  console.log("================================================\n ")
  console.log(`Total de pessoas menores de 21 anos: ${contMenor} \n`)
  console.log(`Total de pessoas maiores de 50 anos: ${contMaior}`)
  console.log("================================================\n ")
