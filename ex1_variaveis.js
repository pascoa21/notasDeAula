const idade = 29
const nome = "Jessyca"
const dataDeNascimento = "21/05/1991"
const email = "jessyca_pascoa@hotmail.com"
const profissao = "desenvolvedora"
const adress = "recife"
// input = entrada de dados
//Console é a saída de dados = output
console.log (nome + " tem " + idade, dataDeNascimento)
console.log (email)
console.log (profissao)
console.log (adress)

//Nomes de variaveis que não funcionam
// const 3nome = "isa"
// const nome-sobrenome = "Isa galvao"
// const nome sobrenome = "isa galvao"


// Reatribuido valores de variáveis

//quando eu tenho uma valor fixo ou imutável, usasse const
const titulo = "Monitora"

// quando tem-se um valor variável ou mutável que é necessário reatribuir, usasse let
let nomeUsuario = "galvaoIsabelle"
console.log(nomeUsuario)
nomeUsuario = "pamelaSouza"
console.log(nomeUsuario)

// Se substituir uma váriavel que foi declarada como "const" 
//titulo = "professora"
// apresentará o seguinte TypeError: Assignment to constant variable.