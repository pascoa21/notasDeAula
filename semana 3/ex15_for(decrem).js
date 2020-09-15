/* Um programa que exiba somente os numeros multiplos de 3 e 
de 5 de N a 1 */

const read = require('readline-sync')

let num = parseInt(read.question('Digite um numero: '))

for (let contador = num ; contador > 0; contador--) {
    if (contador % 3 === 0 && contador % 5 === 0) {

        console.log("Multiplo de 3 e 5 " + contador)
    }
    else if (contador % 3 === 0) {
        console.log("Multiplo de 3 " + contador)
    }
    else if (contador % 5 === 0)
    
    console.log("Multiplo de 5 " + contador)
}