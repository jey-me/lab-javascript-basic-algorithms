// Iteration 1: Names and Input
let hacker1 = "Jey";
console.log("The driver's name is ",hacker1);
let hacker2 = "Elia"
console.log("The navigator's name is ",hacker2);
// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}
// Iteration 3: Loops
let driverNameWithSpaces = hacker1.toUpperCase().split('').join(' ');
console.log(driverNameWithSpaces);

let navigatorNameReversed = hacker2.split('').reverse().join('');
console.log(navigatorNameReversed);

if (hacker1 < hacker2) {
    console.log("The driver's name goes first.");
} else if (hacker1 > hacker2) {
    console.log("Yo, the navigator goes first, definitely.");
} else {
    console.log("What?! You both have the same name?");
}
