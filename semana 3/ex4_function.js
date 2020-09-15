//Declaração da minha função --> nada accontece no momento
function dizerOlaParaUsuario (nomeUser,profissao){
    console.log(`Olá ${nomeUser} - ${profissao}`)
}
const readline = require('readline-sync')

let nomeUser = readline.question('Digite seu nome:')
let profissao = readline.question('Digite sua profissão:')

dizerOlaParaUsuario(nomeUser,profissao)
