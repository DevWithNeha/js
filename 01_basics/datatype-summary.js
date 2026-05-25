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

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// stack(primitive) , heap(non-primitive)


// primitive stack

let myname = "neha Singh"

let anothername = myname
anothername = "rani singh"

// yha copy bnta h original affect ni hota

console.log(myname) // neha singh
console.log(anothername) // rani singh



// non primitive  heap

// yha dono ka same obj j h ik bhi cange hua toh dono change ho jayega

let userOne = {
    email: "neha@gmail.com",
    upi: "neha@ybl"
}

userTwo = userOne 

userTwo.email = "riya@gmail.com"

console.table(userOne) // email = "riya@gmail.com"