// Immediately Invoked Function Expression (IIFE)

(function IIFE(){
    console.log(`JS SERIES`)
})(); // JS SERIES

( (name) => {
    console.log(`JS SERIES WITH ${name}`)
})("NEHA"); // dusra function start karne ke liye semi colon dena hoga

( function name(){
    console.log(`JS SERIES `)
})()