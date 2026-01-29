const leia = require("readline-sync")

console.log("================================================")
console.log("============CALCULADORA SWITCH CASE=============")
console.log("================================================")
console.log("\n |+| SOMA")
console.log("\n |-| SUBTRAÇÃO")
console.log("\n |*| MULTIPLICAÇÃO")
console.log("\n |/| DIVISÃO")
console.log("=================================================\n ")

let contador= "Y";
while(contador ==="Y"){
let n1= leia.questionFloat("Digite a primeiro numero: ")
let n2= leia.questionFloat("Digite a segundo numero: ")
let operacao= leia.keyIn("Digite um numero da operação:" )


switch (operacao) {
  case "+":
    console.log(`${n1} + ${n2} = ${n1 + n2} `)
    break

  case "-":
    console.log(`${n1} - ${n2} = ${n1 - n2} `)
    break

  case "*":
    console.log(`${n1} * ${n2} = ${n1 * n2} `)
    break

  case "/":
    console.log(`${n1} / ${n2} = ${n1 / n2} `)
    break

  default:
    console.log("Operação inválida")
}
contador= leia.keyIn("Deseja fazer mais uma operação? (Y)Yes  (N)No \n").toUpperCase();
if (contador === "N") {
  console.log("OPERAÇÃO FINALIZADA!")
}
}