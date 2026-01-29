const leia = require("readline-sync")

let cont=0, contIdade=0, iGen, pDev, media;
let contMenor = 0, contMaior = 0;
let indice="S";
let


while(indice === "S"){
let idade=leia.questionInt("Digite sua idade:");
contIdade= contIdade + idade;
cont++;
console.log("==================================")
console.log("=======Identidade de Genero=======")
console.log("==================================")
console.log("\n |1| MULHER CIS")
console.log("\n |2| HOMEM CIS")
console.log("\n |3| NÃO BINÁRIO")
console.log("\n |4| MULHER TRANS")
console.log("\n |5| HOMEM")
console.log("\n |6| OUTROS")
console.log("==================================")

iGen=leia.questionInt("Qual é sua identificação de gênero:")
     switch(iGen){
      case 1:
     }
      if(iGen>=1 && iGen<=6 ){
          console.log("\n |1| Backend")
          console.log("\n |2| Frontend")
          console.log("\n |3| Mobile")
          console.log("\n |4| Fullstack")
          pDev= leia.questionInt("Qual é a sua profissão:")
      }
      if(iGen)




indice = leia.keyIn("Deseja Continua? (S) Sim  (N)Não \n").toUpperCase()
}




media= contIdade/cont;
console.log( `O número total de pessoas que responderam à pesquisa: ${cont} \n`,)
console.log(`A média de idade das pessoas que responderam à pesquisa:  ${media}`)
