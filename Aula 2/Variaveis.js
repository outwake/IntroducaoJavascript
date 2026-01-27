
//modo strict assim o código fica mais chato e limita alguns comenandos que
//antes seria possivel

let nome= "Larissa";
//entre aspas é string

let num1= 48658;
//sem aspas é number, boolean etc

let profissao ="Pessoa desenvolvedora"
let salarioBruto = 3500.90;

//var mostra a "variavel" dentro e fora do escorpo
//let mostra dentro do escorpo apenas, ex: dentro do if
// if salarioBruto>1000{
//let mensagem= "SALÁRIO MAIOR QUE 1000"
// console.log(mensagem); se coloccar esse fora, ele nao vai funcionar
//                      }
const bonus = 0.05;


console.log ("Tipo da variavel nome é:", typeof(nome))
console.log ("Tipo da variavel nome é:", typeof(num1))



console.log("Salario Liquido", 
    new Intl.NumberFormat('pt-BR',{
        style: 'currency',
        currency: 'BRL'
    }) .format(salarioBruto + (bonus*salarioBruto))
)