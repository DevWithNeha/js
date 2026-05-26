// // dates

// let mydate = new Date()
// console.log(mydate)

// console.log(mydate.toString())
// console.log(mydate.toLocaleString())

// console.log(typeof mydate)

// let myCreatedDate = new Date(2026,0,26)
// let myCreatedDate = new Date(2026,0,26,5,3)

let myCreatedDate = new Date("2026-01-14")
// // console.log(myCreatedDate)
// console.log(myCreatedDate.toLocaleString()) // 14/1/2026, 5:30:00 am
// console.log(myCreatedDate.toLocaleDateString()) // 14/1/2026

// // console.log(myCreatedDate.toDateString())

let myTimeStamp = Date.now()

// console.log(myTimeStamp) // millisecond aata h

// console.log(myCreatedDate.getTime())

// console.log(Math.floor(Date.now()/1000)) // convert millisecond to second // remove decimal value from floor

let newDate = new Date()
console.log(newDate) // 2026-05-26T04:09:24.920Z

console.log(newDate.getMonth() + 1) // 5 exact month mil jayega
console.log(newDate.getDay())

newDate.toLocaleString('default' , {
    weekday: "long",

})

// print current month

let d = new Date()

console.log(d.getMonth() + 1)

// print current year

console.log(d.getFullYear())

// print 7 days later days

console.log(d.getDate() + 7)




