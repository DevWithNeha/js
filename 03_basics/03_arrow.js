const user = {
    username: "neha",
    price: 756,

    greet: function(){
        console.log(`${this.username} , welcome to website`)
        console.log(this) // yaha this pura current object print karega
    }
}
user.greet()
user.username = "sam"
user.greet()


console.log(this) // {} // browser me output Window {...} aisa aata h // aur node.js me global this empty object hota h

//we cannot use this in function , we use this in object because this refer to current object

function name(){
    let username = "neha"
    console.log(this.username)
}
name()

const name = function(){
    let username = "neha"
    console.log(this.username)
}

name()

//arrow function

const name = () => {
    let username = "neha"
    console.log(this.username)
}

name()

const addTwo = (nums1,nums2) => {
    return nums1 + nums2
} 

console.log(addTwo(3,4))

//implicit return

const addTwo = (nums1,nums2) => (nums1 + nums)
console.log(addTwo(3,4))

const addTwo = (nums1,nums2) => ({username: "neha"}) // object aise return hota h
console.log(addTwo(3,4))