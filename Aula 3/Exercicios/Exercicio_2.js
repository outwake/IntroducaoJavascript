const leia = require("readline-sync")

let n1= leia.questionFloat("Digite o numero: ")



if(n1>=0 && n1%2 === 0){

    console.log(`O numero ${n1} é par e positivo`)
}

else if(n1>=0 && n1 % 2 !== 0){

    console.log(`O numero ${n1} é impar e positivo`)
}

else if(n1<=0 && n1 % 2 === 0){

    console.log(`O numero ${n1} é par e negativo`)
}

else if(n1<0 && n1 % 2 !== 0){

    console.log(`O numero ${n1} é impar e negativo`)
}