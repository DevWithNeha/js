// array

const myArr = [0,1,2,3,4,5]

const myHeroes = ["shaktiman" , "naagraj"]

// console.log(myArr) // [ 0, 1, 2, 3, 4, 5 ]

// array methods

// myArr.push(3) 
// myArr.pop()

// myArr.unshift(6) // [ 6, 0, 1, 2, 3, 4, 5 ] 
// myArr.shift() // [ 0, 1, 2, 3, 4, 5 ]

// console.log(myArr) 

let data = [1, "neha", true, null]
// console.log(data)
// console.log(data.length)

// console.log(data.includes(3)) // false
// console.log(data.indexOf("neha")) // 1

const newArr= data.join()

// console.log(data) // array
// console.log(newArr) // convert array to string

// console.log(typeof newArr)

// slice,splice

// slice
/*
slice() returns a portion of an array.

It does not change the original array.
It returns a new array.

*/

console.log("A" , myArr)

const myn1 = myArr.slice(1,3)
console.log(myn1) //[ 1, 2 ]
console.log(myArr) // [ 0, 1, 2, 3, 4, 5 ]

// splice
/* splice() is used to:

remove elements
add elements
replace elements

It modifies the original array.

*/


console.log("B" , myArr)

const myn2 = myArr.splice(1,3) // 
console.log(myn2) // [ 1, 2, 3 ]
console.log(myArr) // [ 0, 4, 5 ]
