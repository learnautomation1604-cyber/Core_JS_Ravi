// Strings.js
let greeting = "Hello, World!";
console.log(greeting);
let name = "Alice";
let message = `Hello, ${name}!`;
console.log(message);
let multiLineString = `This is a multi-line
string.`;
console.log(multiLineString);   
let str1 = "Hello";
let str2 = "World";
let combined = str1 + " " + str2;
console.log(combined); // Output: Hello World

// JavaScript String Methods
let text = "JavaScript is awesome!";
console.log(text.length); // Output: 22
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.includes("awesome")); // Output: true
console.log(text.indexOf("is")); // Output: 11
console.log(text.slice(0, 10)); // Output: JavaScript
console.log(text.replace("awesome", "great")); // Output: JavaScript is great!

// joining strings
let firstName = "John";

let lastName = "Doe";

let fullName = firstName + " " + lastName;
console.log(fullName); // Output: John Doe

// Concat method
let fullName2 = firstName.concat(" ", lastName);
console.log(fullName2); // Output: John Doe
// replace method
let newText = text.replace("awesome", "fantastic");
c/ onsole.log(newText); // Output: JavaScript is fantastic!
// trim method
let paddedString = "   Hello, World!   ";
let trimmedString = paddedString.trim();
console.log(trimmedString); // Output: Hello, World!
// split method
let csv = "John,Doe,30,Engineer";
let parts = csv.split(",");
console.log(parts); // Output: ["John", "Doe", "30", "Engineer"]


let xx = "I love JavaScript!";  
let yy = xx.split(" ");

console.log(yy); // Output: ["I", "love", "JavaScript!"]    

//