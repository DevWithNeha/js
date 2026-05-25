// primitive

// 7 types : string , number , boolean , null , undefined , symbol , BigInt

const score = 100;
const scoreValue = 100.3

const loggedIn = false
const otsideTemp = null

let userEmail; // undefined

const id = Symbol('1343')
const anotherid = Symbol("1343")

console.log(id === anotherid)

const bigNumber = 1287235n

// Reference (non primitive)

// Array , objects , functions 

const heroes = ["shaktiman","doga","nagraj"];
let myObj = {
    name: "neha",
    age: 22,
}

const myFunction = function(){
    console.log("hello world");
} 