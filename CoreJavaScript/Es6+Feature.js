// Es6+Feature.js   
// 1. let and const
let name = "John";
const PI = 3.14;
// 2. Arrow Functions
const greet = (name) => {
    console.log(`Hello, ${name}!`);
}
   
greet("Alice"); // Output: Hello, Alice!
// 3. Template Literals
const message = `My name is ${name} and I am learning ES6+ features.`;
console.log(message); // Output: My name is John and I am learning ES6+ features.
// 4. Destructuring Assignment
const person = {
    name: "Alice",
    age: 25,

}

const { name, age } = person;
console.log(name);
console.log(age);
// 5. Spread Operator
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5];
console.log(newNumbers); // Output: [1, 2, 3, 4, 5]
// 6. Classes
class Person {  
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }   

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

const person1 = new Person("Alice", 25);
person1.greet();


// 7. Promises
const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { name: "Alice", age: 25 };
            resolve(data);
        }
        , 2000);
    }
);
fetchData()
    .then(data => {
        console.log(data); // Output: { name: "Alice", age: 25 }
    })
    .catch(error => {
        console.error(error);
    });

// 8. Modules
// In file math.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;   

}

// import and Export
// In file main.js
import { add, subtract } from './math.js';  
console.log(add(5, 3)); // Output: 8
console.log(subtract(5, 3)); // Output: 2


