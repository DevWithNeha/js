
//  this is a object literals

// structure of ob

 /* 
 let obj = {
    key: value
};
 */

// symbol declare

const mySym = Symbol("key1")


const jsUser = {
    name: "Neha",
    [mySym]: "mykey1", // symbol ko key ke andr square bracket se declare karte h
    "full name": "neha singh",
    age: 22,
    location: "kolkata",
    email: "neha@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["mon", "sat"]
};

// console.log(jsUser)

// // console.log(jsUser.email)
// console.log(jsUser["email"])

// console.log(jsUser.full name) // wrong 

// console.log(jsUser["full name"])

// console.log(jsUser[mySym])

jsUser.email = "neha@yahoo.com"
// Object.freeze(jsUser) // freeze karne ke baad jsUser me kch bhi aage change ni kr sakte ho
jsUser.emil = "neha@microsoft.com"
console.log(jsUser.email) // 'neha@yahoo.com'


jsUser.greeting = function(){
    console.log("Hello JS user");
}

jsUser.greetingTwo = function(){
    console.log(`hello js user ${this.name}`);
}

console.log(jsUser.greeting())
console.log(jsUser.greetingTwo())