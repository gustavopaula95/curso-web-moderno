let isAtivo = true

console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)

console.log('Os verdadeiros....')
console.log(!!' ')
console.log(!!{ })
console.log(!![ ])
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('Os falsos....')
console.log(!!0)

console.log('Pra Finalizar....')
console.log(!!('' || null || 0 || ' '))
