//Programa para apresentar numeros impares

const read = require('readline-sync')

let num = parseInt(read.question('Digite um numero: '))

for(let contador = num; contador >=1; contador --){
    if(contador % 2 === 1)
    console.log(contador)
}