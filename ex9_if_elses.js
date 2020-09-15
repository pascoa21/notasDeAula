const readline = require('readline-sync')
const tempo = readline.question('Qual o tempo para hoje?')

if(tempo === 'sol'){
    console.log('Uma prainha pra repor a vitamina D.')
}else if (tempo === 'nublado'){
    console.log ('Um dia lindo, para andar de bicicleta.')
}else if (tempo === 'chuva'){
    console.log ('Um ótimo dia para maratonar aquela série, fica em casa')
}else console.log('Não encontrada a atividade')

