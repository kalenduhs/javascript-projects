const input = require('readline-sync');

//Define three variables for the LaunchCode shuttle - one for the starting fuel level, another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.

let fuelLevel = 0;
let numberOfAstronauts = 0;
let altitudeKilometers = 0;



/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000. */

while (fuelLevel <= 5000 || fuelLevel > 30000 || isNaN(fuelLevel)) {
  fuelLevel = input.question("Enter the starting fuel level. ");
}




//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.
  
while (numberOfAstronauts <=1 || numberOfAstronauts > 7 || isNaN(numberOfAstronauts)) {
  numberOfAstronauts = input.question("Enter the number of astronauts. ")
}

console.log(numberOfAstronauts);
  
  
//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.

while (fuelLevel-100*numberOfAstronauts >= 0) {
  altitudeKilometers = altitudeKilometers + 50;
  fuelLevel = fuelLevel-100*numberOfAstronauts;
  console.log(`Altitude is ${altitudeKilometers}`);
  console.log(`Fuel level is ${fuelLevel}`);
}

/*Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”

If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/

console.log(`The shuttle gained an altitude of ${altitudeKilometers} kilometers.`)

if (altitudeKilometers > 2000) {
  console.log("Orbit achieved!");
} else {
  console.log("Failed to reach orbit.");
}