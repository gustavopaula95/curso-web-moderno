const peso1 = 1.0
const peso2 = Number(2.0)

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

total = avaliacao1 * peso1 + avaliacao2 * peso2
media = total/(peso1 + peso2)

console.log(media)
console.log(media.toFixed(2))
console.log(media.toString())
console.log(Number.isInteger(media))
console.log(typeof media)
console.log(typeof Number)