

// let age = 99
// if ( age >= 10 && age <= 20) {
//     console.log(`Мне ${age} лет`)
// } else if ( age % 10 === 1) {
//     console.log(`Мне ${age} год`)
// } else if ( age % 10 >= 2 && age % 10 <=4) {
//     console.log(`Мне ${age} года`)
// } else {
//     console.log(`Мне ${age} лет`)
// }

//
// let num = 13
// if ( num % 2 === 0) {
//     console.log("Четное")
// } else {
//     console.log("Нечетное")
// }




// let numbers = [34,45,43,43,21]
// let emptyArray = []
//
// let users = ["Azamat","Aigerim", "Dilshat", "Jora", "Azamat",]
// users[4] = "Ivan"
// users[1] = "Dima"
// console.log(users)
// console.log(users.length)
// console.log(users[0])


let str = "Lorem ipsum dolor sit amet"

console.log(str)
console.log(str. length)
console.log(str.toLowerCase())
console.log(str.toUpperCase())
console.log(str.split(""))
console.log(str.split(" "))
console.log(str.split("s"))
console.log(str.substr(2, 9))
console.log(str.substring(2, 4))
console.log(str.concat("Misha","Dima"))
console.log(str .indexOf("e"))
console.log(str .indexOf("E"))
console.log(str .lastIndexOf("e"))
console.log(str .indexOf(","))
console.log(str .lastIndexOf(","))
console.log(str.slice(2, 4))
console.log(str.includes("amet"))


let example = " Ivanov "
console.log(example.trim().length)

let letter = "lorem ipsum dolor"
console.log(letter.replace("o", "&"))
console.log(letter.replace(/o/gi, "&"))