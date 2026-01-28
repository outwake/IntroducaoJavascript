const leia = require("readline-sync")

let nomeProd;
let total=0;


console.log("================================================");
console.log("===================CARDÁPIO=====================");
console.log("================================================");
console.log("\n |1| CACHORRO-QUENTE || R$10,00");
console.log("\n |2| X-SALADA        || R$15,00");
console.log("\n |3| X-BACON         || R$18,00");
console.log("\n |4| BAURU           || R$12,00");
console.log("\n |5| REFRIGERANTE    || R$8,00");
console.log("\n |6| SUCO DE LARANJA || R$13,00");
let num1 = leia.questionInt("============Escolha seu lanche:================== \n");
console.log("=================================================\n ");


let quant= leia.questionInt("Diga a quantidade:")

switch(num1){
    case 1: total= quant * 10;
            nomeProd="Cachorro-quente";
    break;

    case 2: total= quant * 12;
          nomeProd="X-SALADA";
    break;

    case 3: total= quant * 18;
          nomeProd="X-BACON";  
    break;

    case 4: total= quant * 12;
           nomeProd="BAURU"; 
    break;

    case 5: total= quant * 8;
           nomeProd="REFRIGERANTE"; 
    break;

    case 6: total= quant * 13;
           nomeProd="SUCO DE LARANJA";
    break;
}

console.log("=============================\n ");
console.log(`Produto: ${nomeProd}`)
console.log("VALOR TOTAL", 
    new Intl.NumberFormat('pt-BR',{
        style: 'currency',
        currency: 'BRL'
    }) .format(total)
)
console.log("OBRIGADO PELA PREFERENCIA ^^ \n ");
console.log("===============================\n ");


