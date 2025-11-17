
//
// function saybye(name) {
//     console.log("Bye, " + name);
// }
// function add(x, y) {
//     return x + y;
// }
// Make the above functions into arrow functions below:

// Arrow function version:
const sayBye = (name) => {
    console.log("Bye, " + name);
}

const add = (x, y) => {
    return x + y;
}

console.log(add(5, 10));

sayBye("Farhan");

// CHALLENGE
// Buat arrow function yang menerima 2 argumen yaitu nama (string) dan umur (number).
// Function ini harus mengembalikan string dengan format: "__ adalah umur__"
// Jangan gunakan kurung kurawal dan kata kunci return.

const fullName = (name, age) => name + " adalah umur" + age;

console.log(fullName("Farhan Aziz", 24));