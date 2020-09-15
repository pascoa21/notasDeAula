const tempo = "Sol"

const tempoFormatado = tempo.toLowerCase()

console.log(tempoFormatado)

/* Ao invés de fazer isso
if(tempo ==='sol || tempo === "Sol"){
    console.log('ensolarado')
}
*/

if(tempoFormatado === "sol")
{
    console.log("ensolorado")
}