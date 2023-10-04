// Code your orbitCircumference function here:
let radius = 2000;

function orbitCircumference (radius) {
  let c = 2 * Math.PI * radius;
  return Math.round(c);
}

//console.log(orbitCircumference(2000))

// Code your missionDuration function here:

function missionDuration (numOrbits, radius = 2000, orbitalSpeed = 28000) {
  let time = orbitCircumference(radius) / orbitalSpeed * numOrbits;
  return Math.round(time*100) / 100;
}

//logging this with 7 trips. 
//console.log(`The mission will travel ${orbitCircumference(2000) * 7} km around the planet, and it will take ${missionDuration(7)} hours to complete.`)



// Candidate data & crew array.
let candidateA = {
   'name':'Gordon Shumway',
   'species':'alf',
   'mass':90,
   'o2Used':function(hrs){return 0.035*hrs},
   'astronautID':414
 };
 let candidateB = {
   'name':'Lassie',
   'species':'dog',
   'mass':19.1,
   'o2Used':function(hrs){return 0.030*hrs},
   'astronautID':503
 };
 let candidateC = {
   'name':'Jonsey',
   'species':'cat',
   'mass':3.6,
   'o2Used':function(hrs){return 0.022*hrs},
   'astronautID':796
 };
 let candidateD = {
   'name':'Paddington',
   'species':'bear',
   'mass':31.8,
   'o2Used':function(hrs){return 0.047*hrs},
   'astronautID':291
 };
 let candidateE = {
   'name':'Pete',
   'species':'tortoise',
   'mass':417,
   'o2Used':function(hrs){return 0.010*hrs},
   'astronautID':599
 };
 let candidateF = {
   'name':'Hugs',
   'species':'ball python',
   'mass':2.3,
   'o2Used':function(hrs){return 0.018*hrs},
   'astronautID':890
 };
 
 let crew = [candidateA,candidateC,candidateE];
 

 // Copy/paste your selectRandomEntry function here:



// Code your oxygenExpended function here:
 function selectRandomEntry (array) {
  return array [Math.floor(Math.random()*array.length)]
}

function oxygenExpended(candObj, orbitalRadius = 2000, orbitalSpeed = 28000) {
  let oxygenUsed = candObj.o2Used(missionDuration(3, orbitalRadius, orbitalSpeed));
  return `${candObj.name} will perform the spacewalk, which will last ${missionDuration(3, orbitalRadius, orbitalSpeed)} hours and require ${Math.round(oxygenUsed * 1000)/ 1000} kg of oxygen.`
}

//console.log(oxygenExpended(selectRandomEntry(crew), 3000, 50000));

function lowestOxygen (crew) {
  let selection;
  let oxygenUsed = crew[0].o2Used(1);
  for (let i = 0; i < crew.length; i++) {
    if (crew[i].o2Used(1) < oxygenUsed) {
      selection = crew[i]
      oxygenUsed = crew[i].o2Used(1);
    }
  }
  return selection;
}

console.log(oxygenExpended(lowestOxygen(crew), 3000, 50000));
