//Armazenando uma função em uma variavel
const imprimirSoma = function (a, b){
    console.log(a+b)
}
imprimirSoma(4,6)

//Armazenando uma funcao arrow em uma variavel
const imprimirSubt = (a, b) => {
    return a-b
}
console.log(imprimirSubt(5, 2))

//Returno implicito
const imprimirMult = (a, b) => (a*b)
console.log(imprimirMult(3,3))

