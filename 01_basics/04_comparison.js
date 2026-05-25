// avoid this type of conversion

console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true // comparison convert null to a number, treating it as 0. that's why null >= 0 is true and null > 0 is false

console.log(undefined == 0); // false
console.log(undefined > 0); // false
console.log(undefined < 0); // false

// === strict check

console.log("2" === 2) // false