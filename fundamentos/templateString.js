const nome = 'Gustavo'
const altura = '1,83'
const concatenacao = nome + ' tem ' + altura + ' de altura'
const template = `${nome} tem ${altura} de altura`

console.log(concatenacao, template)

// Expressões

console.log(`3 + 7 = ${3+7}`)

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')} !`)
