//criar um programa que verifica qual é a comida preferida
//se for batata frita exibir no console o texto acompanha refrigerante
//caso contrario exiba no console "sinto muito por vc!"


const readline = require('readline-sync')

//perguntar para pessoa qual a comida preferida dela
// e o texto que ela escrever  no campo ficará
const comidaPreferida = readline.question("Qual sua comida preferida?")

if(comidaPreferida == "batata-frita")
{
    console.log('Acompanha refrigerante')
}else if(comidaPreferida == 'bolo')
{
    console.log('Chocolate ou doce de leite?')
}else if (comidaPreferida == 'Pizza'){
    console.log ('Acompanha um suco')
}else if (comidaPreferida === 'Sushi'){
    console.log('Você que shoyo')
}else console.log('Sinto muito por você')

