

const readline = require('readline-sync')

let n1 = parseFloat(readline.question('Digite um numero? '))
let n2 = parseFloat(readline.question('Digite um numero? '))
let n3 = parseFloat(readline.question('Digite um numero? '))

while ( !n1  || !n2  || !n3 ){
    console.log ('Preencha os valores corretamente.')

    n1 = parseFloat(readline.question('Digite um numero? '))
    n2 = parseFloat(readline.question('Digite um numero? '))
    n3 = parseFloat(readline.question('Digite um numero? '))
}