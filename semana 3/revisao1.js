//Faça um programa que peça dois números inteiros e imprima a soma desses dois números

const read = require('readline-sync')

num1 = parseInt(read.question('Digite um numero?'))
num2 = parseInt(read.question('Digite o segundo numero? '))

function soma(num1, num2) { return num1+num2 }

console.log(soma(num1,num2))

console.log('-------------------------------------------------------------------')

//Escreva um programa que leia a quantidade de dias, horas, minutos e segundos do usuário. 
//Calcule o total em segundos.

dias = parseInt(read.question('Digite a quantidade de dias? '))
horas = parseInt(read.question('Digite a quantidade de horas? '))
minutos = parseInt(read.question('Digite a quantidade de minutos? '))
segundos = parseInt(read.question('Digite a quantidade de segundos? '))

function QuantSegundos(num1, num2, num3, num4) { return ((((num1*24+num2)*60)+num3)*60+num4) }

console.log(QuantSegundos(dias, horas, minutos, segundos) + "segundos.")

console.log('-------------------------------------------------------------------')
//Faça um programa que calcule o aumento de um salário.
// Ele deve solicitar o valor do salário e a porcentagem do aumento. Exiba o valor do aumento e do novo salário.

salario = parseFloat(read.question('Digite seu salário atual: '))
percentual = parseFloat(read.question('Digite quanto sera o percentual de aumento: '))

function NewSalario(num1,num2){
    return num1+(num1)*num2/100
}

console.log('O aumento foi de ' + (NewSalario(salario,percentual)-salario) + ". Sendo o novo salário de R$ " + NewSalario(salario,percentual))