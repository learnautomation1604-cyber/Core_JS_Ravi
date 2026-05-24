// Conditional statements in JavaScript

// 1. If statement
let age = 18;

if (age >= 18) {    
    console.log("You are an adult.");
}
// 2. If-else statement
let score = 85;

if (score >= 90) {
    console.log("Grade: A");
}
else if (score >= 80) {
    console.log("Grade: B");
}

// 3. Switch statement

let day = "Monday";
switch (day) {
    case "Monday":
        console.log("Start of the week.");
        break;
    case "Friday":
        console.log("End of the week.");
        break;
    default:
        console.log("Midweek day.");
        break;
}
