function  dizerOlaParaUsuario(){
    return 'Olá'
}
console.log(dizerOlaParaUsuario())
function resultadoDoisMaisDois(){
    return 2+2
}

console.log(resultadoDoisMaisDois())
console.log(resultadoDoisMaisDois()*6)
console.log(resultadoDoisMaisDois() >= 4 )
console.log(resultadoDoisMaisDois() > 5 )

function resultado3mais3(){
    return 3+3
}

console.log(resultado3mais3())
console.log(resultado3mais3() > resultadoDoisMaisDois())

function calcularMedia(nota1, nota2, nota3){
    return(nota1+nota2+nota3) /3
}

console.log(calcularMedia(10,8,6))
console.log(calcularMedia(9,8,6).toFixed(1))