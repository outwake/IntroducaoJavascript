 const leia = require("readline-sync")

 //let matriz= new Array(2);

// for(let indice =0; indice< matriz.length; indice++){
// matriz[indice]= Array(3);
// }

 //Entrada da matriz via teclado
//for (let linha = 0; linha < matriz.length; linha++) {
 // for (let coluna = 0; coluna < matriz[linha].length; coluna++) {
//    matriz[linha][coluna]= leia.questionInt(`Posição da matriz [${linha}] [${coluna}]: 5`);
//  }
//}//

let matriz = Array.from({ length: 2 }, () =>
  Array.from({ length: 3 }, () => leia.questionInt("Digite um numero: ")),
)
 
//Exibir dados
 console.table(matriz)