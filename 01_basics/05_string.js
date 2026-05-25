// primitive string

const name = "neha"
const repoCount = 20

// console.log(name + repoCount + "value");

console.log(`Hello my name is ${name} and my repo is ${repoCount}`) 

// this is a string object
const gameName = new String('nehasi')

console.log(typeof name) // string
console.log(typeof gameName) // object

console.log(gameName[0]) // n
console.log(gameName.__proto__) //{}

console.log(gameName.length)// 6
console.log(gameName.toUpperCase()) // NEHASI

console.log(gameName.charAt(2)) // h
console.log(gameName.indexOf('a')) // 4


const newString = gameName.substring(0,4) // neha
console.log(newString);

const anotherString = gameName.slice(-6,2) // ne
console.log(anotherString)

const newStringOne = "   neha  " //    neha  
console.log(newStringOne)
console.log(newStringOne.trim()) // neha

const url = "https://neha.com/neha%20singh" 
console.log(url.replace('%20','-')) // https://neha.com/neha-singh

console.log(url.includes('kumari')) // false

console.log(gameName.split('-')) // [ 'nehasi' ]