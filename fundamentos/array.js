const valores = [5.2, 7.8, 2.6, 9.1]
console.log(valores[0], valores[3], valores[4])

valores[4] = 10
console.log(valores)

valores.push({id:3}, false, null, 'teste')
console.log(valores)

console.log(valores.pop())
console.log(valores.length)

delete valores[0]
console.log(valores)
console.log(typeof valores)