// // Loops
// // For Loop
// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }

// // While Loop

// let j = 0;
// while (j < 5) {
//     console.log(j);
//     j++;
// }

// // Do-While Loop
// let k = 0;

// do {

//     console.log(k);
//     k++;
// }
// while (k < 5);

// for each Loop
let numbers = [1, 2, 3, 1, 5];

numbers.forEach(function(number) {

    console.log(number/100);

});


let fruits = ["apple", "banana", "cherry"];

for (let fruit of fruits) {
    console.log(fruit);
}   

// for in Loop
let person = {
    name: "Alice",
    age: 25,
    city: "New York"
};

for (let key in person) {
    console.log(key + ": " + person[key]);
}


