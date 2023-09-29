let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   astronautID: 1,
   move: function () {return Math.floor(Math.random()*11)}
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   astronautID: 2,
   move: function () {return Math.floor(Math.random()*11)}
};

let superChimpTwo = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6,
   astronautID: 3,
   move: function () {return Math.floor(Math.random()*11)}
};

let beagleOne = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 6,
   astronautID: 4,
   move: function () {return Math.floor(Math.random()*11)}
};

let tardigradeOne = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1,
   astronautID: 5,
   move: function () {return Math.floor(Math.random()*11)}
};


// After you have created the other object literals, add the astronautID property to each one.

// Create an array to hold the animal objects.

let crew = [superChimpOne, salamander, superChimpTwo, beagleOne, tardigradeOne];

// Print out the relevant information about each animal.

function crewReports (array) {
   let animal = {}
   let statement = "";
   for (let i = 0; i < array.length; i++) {
   animal = array[i];
   statement += `${animal.name} is a ${animal.species}. They are ${animal.age} years old and ${animal.mass} kilograms. Their ID is ${animal.astronautID}.\n`
   }
   return statement;
}

//console.log(crewReports(crew));

// Start an animal race!

function fitnessTest(array){
   let results = [];
   let steps = 0;
   let turns = 0;
   for (let i = 0; i < array.length; i++) {
      steps = 0;
      turns = 0;
      while(steps < 20){
       steps += array[i].move();
       turns++;
       }
       results.push(`${array[i].name} took ${turns} turns to take 20 steps.`);
   }
   return results; 
 }

console.log(fitnessTest(crew));