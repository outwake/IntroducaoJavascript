const leia = require("readline-sync")

console.log("================================================");
console.log("===================CÓDIGO E CARGO===============");
console.log("================================================");
console.log("\n |1| GERENTE       || % 10");
console.log("\n |2| VENDEDOR      || % 7");
console.log("\n |3| SUPERVISOR    || % 9");
console.log("\n |4| MOTORISTA     || % 6");
console.log("\n |5| ESTOQUISTA    || % 5");
console.log("\n |6| TÉCNICO de TI || % 8");
console.log("================================================");

let nome= leia.question("Digite o nome do funcionario:")
let salario= leia.questionFloat("Digite o salário:")
let cargo= leia.questionInt("Diga o numero do cargo:")
let novoSalario;
let funcao;

switch(cargo){

    case 1: novoSalario= (salario + (0.1*salario));
            funcao="Gerente";
    break;

    case 2: novoSalario= (salario + (0.07*salario));
            funcao="Vendedor";
    break;

    case 3: novoSalario= (salario + (0.09*salario));
            funcao="Supervisor";
    break;

    case 4: novoSalario= (salario + (0.06*salario));
            funcao="Motorista";
    break;

    case 5: novoSalario= (salario + (0.05*salario));
            funcao="Estoquista";
    break;

    case 6: novoSalario= salario + ((0.08*salario));
            funcao="Técnico de TI";
    break;

}

console.log("=============================\n ");
console.log(`Nome do funcionário: ${nome}`)

console.log(`Cargo: ${funcao}`)

console.log("Salário atual:", 
    new Intl.NumberFormat('pt-BR',{
        style: 'currency',
        currency: 'BRL'
    }) .format(novoSalario)
)
console.log("===============================\n ");