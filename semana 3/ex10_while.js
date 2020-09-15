/*Faça um algoritimo que imprima numero inteiros de N a 1
por exemplo o usuário digita 10 e aparece
10
9 
8
7 6... 1*/

const read = require('readline-sync')

let num = parseInt(read.question('Digite um numero: '))

while(num >= 1)
{
    --num
    console.log(num)
}



