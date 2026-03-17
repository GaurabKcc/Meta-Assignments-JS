//  Find the second largest number in the array.
const numbers = [10,5,20,8,15];
const sorted = [...numbers].sort((a,b)=>b-a)
console.log(sorted[1])

// Write a function that counts how many vowels exist in a string.

function countVowels(word) {
    let count = 0;
    let z = word.toLowerCase();
    for (let i = 0; i < z.length; i++) {
        if ('aeiou'.includes(z[i])) {
            count++;
        }
    }
    return count;
}

console.log(countVowels("Hello"))

let myVariable = 2

// Remove Duplicates from an Array
const n = [1,2,2,3,4,4,5]
let new_n = new Set(n)
console.log(...new_n)

// Total Price of Products

const products = [
 {name:"Book", price:100},
 {name:"Pen", price:20},
 {name:"Bag", price:500}
]
let sum = products.reduce((x,y) => x + y.price, 0)
console.log(sum)

// Return names of users whose age is 18 or above.
const users = [
 {name:"Ali", age:17},
 {name:"Sara", age:22},
 {name:"John", age:19}
]
for (let i = 0; i<users.length; i++){
    if (users[i].age>=18){
        console.log(users[i].name)
    }
}

// Find the longest word in the array.
const words = ["apple","banana","grape","watermelon"]
let longest = ''
for (let i = 0; i<words.length; i++){
    if(words[i].length>longest.length){
        longest = words[i]
    }
}
console.log(longest)

// Convert each name so that the first letter is capitalized.

let names = ["ali","sara","john"]
for (let i =0; i<names.length;i++){
    names[i] = names[i].toUpperCase()
}
console.log(names)

// Count how many even numbers exist in the array.  
let nums = [1,2,3,4,5,6,7,8]
let count = 0
for (let i = 0; i<nums.length; i++){
    if (nums[i] % 2 == 0){
        count++;
    }
}
console.log(count)

// Find the average value of numbers in the array.
const values = [10,20,30,40]
let avg = 0
for (let i=0; i<values.length; i++){
    avg += ((values[i])/values.length)
}
console.log(avg)

// Separate students into passed and failed groups.

const students = [
    { name: "Ali", marks: 80 },
    { name: "Sara", marks: 40 },
    { name: "John", marks: 70 },
    { name: "Adam", marks: 30 }
]

const passed = []

for (let i = 0; i < students.length; i++) {
    if (students[i].marks >= 50) {
        passed.push(students[i].name)
    } else {
        console.log("Failed: " + students[i].name + " Marks: " + students[i].marks)
    }
}

console.log("Passed:", passed)
