/*Crie uma função que:
1- A função deve receber 3 parametros
2- Se qualquer um dos três parâmetros não estiverem preenchidos, a função deve retornar "Preencha os valores corretamente"
3- O retorno da função deve ser multiplicação dos 3, somando 2 ao resultado da multiplicação.*/

function calculo(n1, n2, n3)
{
    return ((n1+n2+n3)+2)
}

const readline = require('readline-sync')

var n1 = parseFloat(readline.question('Digite um numero? '))
var n2 = parseFloat(readline.question('Digite um numero? '))
var n3 = parseFloat(readline.question('Digite um numero? '))

if ( !n1  || !n2  || !n3 ){
    console.log ("Preencha os valores corretamente.")
}
else console.log(calculo(n1,n2,n3))

