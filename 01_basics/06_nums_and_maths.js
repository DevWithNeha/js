const score = 400
console.log(score) // 400

const balance = new Number(143.753)
console.log(balance) // [Number: 143.753]

console.log(balance.toString()) // convert value into string

console.log(balance.toString().length) // 7
console.log(balance.toFixed(2)) // 1143.75

const otherNum = 3237.9867
console.log(otherNum.toPrecision(3)) // 3.24e+3

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'))


// +++++++++++++++++++Maths++++++++++++++++++++++++++

console.log(Math)
console.log(Math.abs(-4))
console.log(Math.round(4.6))
console.log(Math.floor(4.2)) // 4
console.log(Math.ceil(4.2)) // 5
console.log(Math.min(4, 3, 6, 8))
console.log(Math.max(4, 3, 6, 8))

console.log(Math.random()) // random values always comes between 0 and 1
console.log((Math.random()*10) + 1) // between 1 to 11
console.log(Math.floor(Math.random()*10) + 1) // 0 to 9.999 but remove decimal 

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max-min+1)) + min) // random integer between min and max

