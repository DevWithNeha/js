const email = []

// if(email){
//     console.log("got user email")
// } else {
//     console.log("don't have user email")
// }

// falsy values

// false, 0 ,-1, BigInt, 0n, "", null, undefined, NaN

// truthy values

// "0", 'false', " ", [], {}, function(){}


if (email.length === 0){
    console.log("Array is Empty")
}

const emptyObj = {}

if(Object.keys(emptyObj).length === 0) {
    console.log("Object is empty")
}

/*
    false == 0 // true
    false == ''// true
    0 == '' // true
*/