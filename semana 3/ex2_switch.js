//Criar um programa que receba o mês do ano, e indique se tem feriado.

const readline = require('readline-sync')

const mes = readline.question("Digite o mês:")

const mesFormatado = mes.toLocaleLowerCase()

switch (mes) {
    case "janeiro":
        console.log("01-Confraternização Universal")
        break
    case "fevereiro":
        console.log("16-carnaval")
        break
    case "março":
        console.log("07- Revolução Pernambucana de 1817")
    case "abril":
        console.log("02- sexta feira da paixão; 21- Tiradentes")
        break
    case "maio":  
        console.log ("01-Dia do Trabalhador")
        break
    case "junho":  
        console.log ("03-Corpus Christi, 24-São João")
        break
    case "julho":  
        console.log ("16-Nossa Senhora do Carmo")
        break
    case "setembro":
        console.log("07-Independência do Brasil")
        break
    case "outubro":
        console.log("12-Nossa senhora Aparecida, 28-Servidor Público")
        break
    case "novembro":
        console.log("02-Finados, 15-Proclamação da República")
        break
    case "dezembro":
        console.log("25-Natal")
        break
    default:
         console.log("Esse mês não é válido")
}

