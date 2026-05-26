// singleton  // means obj constructor se object bnta h

const tinderUser = new Object()

tinderUser.id = "1234ff"
tinderUser.name = "neha"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

// nestedobject access

const regularuser = {
    fullname: {
        username: {
            firstname: "neha",
            lastname: "singh"
        }
    }
}

// console.log(regularuser.fullname.username.lastname)

// assign

const obj1 = {1: "a" , 2: "b"}
const obj2 = {3: "c" , 4: "d"}

//Object.assign(target, source) 
/*
    target → jis object me copy karna hai
    source → jiska data copy karna hai
*/

const obj3 = Object.assign({},obj1,obj2) 
console.log(obj3)

// console.log(obj1 === obj3) // false

// spread function

const obj4 = {...obj1, ...obj2}
console.log(obj4)

const users = [
    {
        id: 1,
        email: "n@gmail.com"
    },
    {
        id: 1,
        email: "n@gmail.com"
    },
    {
        id: 1,
        email: "n@gmail.com"
    },
]

users[1].email
console.log(tinderUser)

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('name'))