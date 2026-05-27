

if(true){
    let a = 10
    const b = 20
    var c = 30
}

// console.log(a)
// console.log(b)
console.log(c)

// global scope

let name = "neha"

function greet(){
    console.log(name)
}

console.log(name)
greet()

// local scope

function test(){
    var age = 20
    console.log(age)
}

// console.log(age) // error
test()

// let and const are block scope

{
    let city = "Patna"
    const state = "bihar"

    console.log(city)
    console.log(state)

}

// console.log(city) // error

// nested scope

// inner variable access outer variable

function one(){
    let username = "neha"

    function two(){
        let website = "youtube"
        console.log(username)
    }
    two() 
}
one()

// but outer variable does not access inner variable

function one(){
    let username = "neha"

    function two(){
        let website = "youtube"
    }
    // console.log(website) // error
}
one() // error


if(true){
    const username = "neha"
    if(username === "neha"){
        const website = " github"
        console.log(username + website); // neha github
    }
    // console.log(website) // error 
}
// console.log(username) // error

// ++++++++++++++++++++++++ intresting ++++++++++++++++++++

// function declaration
// ye hosting support karta h means function ko declaration se pehle bhi call kar sakte h

console.log(addone(5))

function addone(num){
    return num + 1
}

// function expression

// ye variable ki trh behave karta h
// yha variable intialization se pehle access ni hota

console.log(addTwo(4)) // error because we store it in variable
const addTwo = function(num){
    return num + 2
}

console.log(addTwo(5))  