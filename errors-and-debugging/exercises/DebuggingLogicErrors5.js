// The value of launchReady assigned in the first if/else block gets changed in the second if/else block. Dangerous waters...
// Since the issue is with launchReady, ONE way to fix the logic error is to use a different variable to store the fuel check result. 
// Refactor the code to do this. Verify that your change works by updating the console.log statements.

let fuelStatus = false;
let launchReady = false;
let fuelLevel = 24000;
let crewStatus = true;
let computerStatus = 'green';

if (fuelLevel >= 20000) {
   console.log('Fuel level cleared.');
   fuelStatus = true;
} else {
   console.log('WARNING: Insufficient fuel!');
   fuelStatus = false;
}

console.log("fuelStatus = ", fuelStatus);

if (crewStatus && computerStatus === 'green'){
   console.log('Crew & computer cleared.');
   launchReady = true;
} else {
   console.log('WARNING: Crew or computer not ready!');
   launchReady = false;
}

console.log("launchReady = ", launchReady);

if (fuelStatus === true && launchReady === true) {
   console.log("Liftoff!");
} else {
   console.log("Launch scrubbed");
}