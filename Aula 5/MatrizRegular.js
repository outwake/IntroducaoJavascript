const leia= require("readline-sync")
let a,b;
let matriz =[
  [1, 7, 9],
  [2, 6, 4],
  [3, 5, 8]  
]

console.table(matriz);

let matriz1 = [
  [1, 7, 9],
  [2, 6, 4],
  [3, 5, 8],
]

for (let linha = 0; linha < matriz1.length; linha++){
  for (let coluna = 0; coluna < matriz.length; coluna++){
    console.log(`matriz [${linha}][${coluna}]= ${matriz1[linha][coluna]}`)
  }
}