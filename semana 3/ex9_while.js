const read = require('readline-sync')

let num
do{
    num = read.question('Digite um numero? ')
}while(num < 10)

/*Faça um programa que peça um valor, entre 0 e 10. Mostre
uma mensagem caso o valor seja inválido e continue pedindo até
o usuário informe um valor válido*/

let valor = read.question('Digite um valor? ')
while( valor < 0 || valor < 10){
    valor = read.question('Digite uma valor novamente: ')
}
