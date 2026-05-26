const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "spiderman", "ironman"]

marvel_heros.push(dc_heros) // array ke andr array aa gya
console.log(marvel_heros) // [ 'thor', 'Ironman', 'spiderman',[ 'superman', 'spiderman', 'ironman' ] ]


const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros) // [ 'thor', 'Ironman', 'spiderman', 'superman', 'spiderman', 'ironman' ]

// // spread operator

const all_heros = [...marvel_heros, ...dc_heros]
console.log(all_heros) // [ 'thor', 'Ironman', 'spiderman', 'superman', 'spiderman', 'ironman' ]

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const anotherArray = another_array.flat(Infinity)
console.log(anotherArray)

console.log(Array.isArray("neha")) // btata h ki array h ki ni // false
console.log(Array.from("neha")) // convert into arryay // [ 'n', 'e', 'h', 'a' ]

console.log(Array.from({name: "neha"})) // []

let score1 = 100;
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))