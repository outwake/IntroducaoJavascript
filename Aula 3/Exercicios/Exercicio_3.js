const leia= require("readline-sync")

let nome= leia.question("Digite o nome do doador:")
let idade= leia.question("Digite a idade do doador:")
let doar = leia.keyIn("Primeira doação? (S)sim (N)não \n")
"\n"



if(idade<=17 || idade>=70){
   
console.log(`${nome} não está apto para doar sangue!`)
}

else if(idade>=18 && idade<60){
   
console.log(`${nome} está apto para doar sangue!`)
}

else if(idade>=60 && idade<=69 && doar==="S"){
   
console.log(`${nome} está apto para doar sangue!`)
}

else if(idade>=60 && idade<=69 && doar!=="S"){
   
console.log(`${nome} está apto para doar sangue!`)
}




