const calcSalesTax = require('./salesTax')
const calcFH = require('./calcFH')

const tesla = 10000
const audi = 1299
const ford = 800

console.log(calcSalesTax(tesla))
console.log(calcSalesTax(audi))
console.log(calcSalesTax(ford))

console.log(calcFH(0))
console.log(calcFH(36))
console.log(calcFH(100))