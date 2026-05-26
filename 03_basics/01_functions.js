// console.log("N")
// console.log("E")
// console.log("H")
// console.log("A")

function sayMyname(){
    console.log("N")
    console.log("E")
    console.log("H")
    console.log("A")
}
 

function addTwoNumber(num1 , num2){

    // console.log(num1+num2)

    return (num1+num2) 
}

// addTwoNumber(2,6)
const result = addTwoNumber(3,5)

 console.log("Result: ",result); // result = 8

function Loginuser(username){
    return `${username} just logged in`
}

console.log(Loginuser("neha"))

function loginuser(username){
    if(username === undefined){
        console.log("please enter username");
        return
    }
    return `${username} just logged in`
}

console.log(loginuser("neha"))


function calculateCartPrice(val1,val2,...num1){
    return num1
}

console.log(calculateCartPrice(76,8365,214,846,856))

const user = {
    username: "neha",
    price: 199
}

function handleObject(saveuser){ // yha dono tarike se kr sakte h
    console.log(`username is ${saveuser.username} and price is ${saveuser.price}`);
}

handleObject(user) // username is neha and price is 199

handleObject({
    username: "neha",
    price: 2745
}) // username is neha and price is 2745

const myArray = [200,400,100,600]

function returnSecondvalue(getArray){
    return getArray[1]
}

console.log(returnSecondvalue(myArray))
console.log(returnSecondvalue([200,400,500,1000]))



