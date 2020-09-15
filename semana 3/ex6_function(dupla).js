/*Crie uma função para cada uma das operações básicas(soma, subtração, multiplicação e divisão), 
cada uma delas recebendo 2 números como parametros e retornando o resultado para esse exercicío, 
as funções de multiplicação e divisão não devem aceitar valores igual a 0. Adicione esta lógica nas funções*/

function multiplication(n1,n2){
    if (n1 === 0 || n2 === 0) return 'numero inválido'

    return n1*n2
}

function division(n1,n2){
    if (n1 === 0 || n2 === 0) return 'numero inválido' 

    return n1/n2
}
function soma(n1,n2){
    return n1+n2
}
function subtracao(n1,n2){
    return n1-n2
}


console.log(multiplication(0,5))
console.log(division(0,6))

const readline = require('readline-sync')

var n1 = parseFloat(readline.question('Digite um numero? '))
var n2 = parseFloat(readline.question('Digite um numero? '))

console.log("O resultado da soma é ", soma(n1,n2).toFixed(1)) 
console.log("O  resultado da subtração é ", subtracao(n1,n2).toFixed(1))
console.log("O resultado da multiplicação é ", multiplication(n1,n2).toFixed(1))
console.log("O resultado da divisão é ", division(n1,n2).toFixed(1))

