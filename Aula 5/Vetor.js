const leia=require("readline-sync");
let numero=[10, 25, 5, 45, 85];

let cores = Array(5);

for(let indice=0; indice<5; indice++){
  console.log(`numeros[${indice}]= ${numero[indice]}`);
}
//ordem crescente
console.table(numero.sort((a,b)=> a - b));

for (let indice = 0; indice < 5; indice++) {
  cores[indice]= leia.question("Digite o nome de uma cor:")
}
console.table(cores);



