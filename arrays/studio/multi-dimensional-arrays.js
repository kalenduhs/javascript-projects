const input = require('readline-sync');

let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

//1) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.

let cabinetZero = food.split(",").sort();
let cabinetOne = equipment.split(",").sort();
let cabinetTwo = pets.split(",").sort();
let cabinetThree = sleepAids.split(",").sort();

//2) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.

let cargoHold = [cabinetZero, cabinetOne, cabinetTwo, cabinetThree];
console.log(cargoHold);

//3) Query the user to select a cabinet (0 - 3) in the cargoHold.

//let userCabinet = input.question("Please select a cabinet from the cargo hold. Please input a number between 0 and 3. ");

//4) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.

/* if (userCabinet > 3) {
    console.log("You did not input a number between 0 and 3.")
} else {
    console.log(`You selected cabinet number ${userCabinet}. The contents are ${cargoHold[userCabinet]}.`);
} */

//5) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”

let userCabinet = input.question("Please select a cabinet from the cargo hold. Please input a number between 0 and 3. ");
let userItem = input.question(`Please guess the name of an item in cabinet ${userCabinet}. `);

if (userCabinet > 3) {
    console.log("You did not input a number between 0 and 3.")
} else if (cargoHold[userCabinet].indexOf(userItem.toLowerCase()) > 0) {
    console.log(`Cabinet ${userCabinet} DOES contain ${userItem}.`);
} else {
    console.log(`Cabinet ${userCabinet} DOES NOT contain ${userItem}.`);
}