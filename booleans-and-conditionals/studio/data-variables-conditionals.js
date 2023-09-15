// Initialize Variables below

let date = "Monday 2019-03-18";
let time = "10:05:34 AM";
let astronautCount = 8;
let astronautStatus = "ready";
let averageAstronautMassKilogram = 80.7;
let crewMassKilogram = astronautCount * averageAstronautMassKilogram;
let fuelMassKilogram = 760000;
let shuttleMassKilogram = 74842.31;
let totalMassKilogram = crewMassKilogram + fuelMassKilogram + shuttleMassKilogram;
let maximumMassLImit = 850000;
let fuelTempCelsius = -225;
let minimumFuelTemp = -300;
let maximumFuelTemp = -150;
let fuelLevel = "100%";
let weatherStatus = "clear";
let preparedForLiftOff = true;


// add logic below to verify total number of astronauts for shuttle launch does not exceed 7

/*if (astronautCount <= 7) {
    console.log("The number of astronauts does not exceed 7.");
} else {
    console.log("The number of astronauts is over 7.");
}*/

// add logic below to verify all astronauts are ready

/*if (astronautStatus === "ready") {
    console.log("All astronauts are ready.");
} else {
    console.log("The astronauts are NOT ready.");
}*/

// add logic below to verify the total mass does not exceed the maximum limit of 850000

/*if (totalMassKilogram <= 850000) {
    console.log("The total mass is within the limit.");
} else {
    console.log("The mass limit has been exceeded.");
}*/

// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300

/*if (fuelTempCelsius >= minimumFuelTemp && fuelTempCelsius <= maximumFuelTemp) {
    console.log("The fuel temperature is within range.");
} else {
    console.log("WARNING, fuel temperature is outside of the operational range.");
}/*

// add logic below to verify the fuel level is at 100%

/*if (fuelLevel === "100%") {
    console.log("Fuel tank is full.");
} else {
    console.log("WARNING, fuel tank is not full. Fill the fuel tank to 100%.");
}*/

// add logic below to verify the weather status is clear

/*if (weatherStatus === "clear") {
    console.log("Weather is clear today.");
} else {
    console.log("Weather conditions are not okay to launch.");
} */

// Verify shuttle launch can proceed based on above conditions

if (astronautCount <= 7 && totalMassKilogram <= 850000 && fuelTempCelsius >= minimumFuelTemp && fuelTempCelsius <= maximumFuelTemp && fuelLevel === "100%" && weatherStatus === "clear") {
    preparedForLiftOff = true;
} else {
    preparedForLiftOff = false;
}

//console.log(preparedForLiftOff);

if (preparedForLiftOff === true) {
    console.log("All systems ready to go! Initiating space shuttle launch sequence.")
    console.log("------------------------------------------------------------------")
    console.log("Date: " + date);
    console.log("Time: " + time);
    console.log("Astronaut Count: " + astronautCount);
    console.log("Crew Mass: " + crewMassKilogram + " kg");
    console.log("Fuel Mass: " + fuelMassKilogram + " kg");
    console.log("Shuttle Mass: " + shuttleMassKilogram + " kg");
    console.log("Total Mass: " + totalMassKilogram + " kg");
    console.log("Fuel Temperature: " + fuelTempCelsius + " °C");
    console.log("Weather Status: " + weatherStatus);
    console.log("------------------------------------------------------------------")
    console.log("Have a safe trip astronauts!");
} else {
    console.log("WARNING, something is wrong.");
    console.log("------------------------------------------------------------------")
    console.log("Date: " + date);
    console.log("Time: " + time);
    console.log("Astronaut Count: " + astronautCount);
    console.log("Crew Mass: " + crewMassKilogram + " kg");
    console.log("Fuel Mass: " + fuelMassKilogram + " kg");
    console.log("Shuttle Mass: " + shuttleMassKilogram + " kg");
    console.log("Total Mass: " + totalMassKilogram + " kg");
    console.log("Fuel Temperature: " + fuelTempCelsius + " °C");
    console.log("Weather Status: " + weatherStatus);
    console.log("------------------------------------------------------------------")
    console.log("Launch has been scrubbed.");
}   