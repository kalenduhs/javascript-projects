const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.

let newStr = str.slice(0,3);
let newStr2= str.slice(3, 10) + newStr;
console.log(newStr2);

//Use a template literal to print the original and modified string in a descriptive phrase.

console.log(`The original string was "${str}", the new string with the first 3 characters moved to the end is "${newStr2}".`);

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.

let userChoice = input.question(`Enter a number to shift the number of characters of "${str}" to the end of the string. `);

//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.

let newStr3 = str.slice(0, userChoice);
let newStr4 = str.slice(userChoice, str.length) + newStr3;

if (userChoice > str.length + 1) {
    console.log(`You entered a number that exceeds the length of "${str}." By default 3 characters are shifted to the end to print "${newStr2}".`);
} else {
    console.log(`Your new shifted string is "${newStr4}"`);
}