let idNumbers = [291, 414, 503, 599, 796, 890];

// Code your selectRandomEntry function here:

function selectRandomEntry (idNumbers) {
  return idNumbers [Math.floor(Math.random()*idNumbers.length)]
}

let arrID = [];

while (arrID.length < 3) {
  let chosenForLaunch = selectRandomEntry(idNumbers);
  if(!arrID.includes(chosenForLaunch)) {
    arrID.push(chosenForLaunch)
  }
}

//console.log(arrID);

// Code your buildCrewArray function here:

/* function buildCrewArray (selectedIDs, candidates) {
  let crew = [];
  for (let i = 0; i < selectedIDs.length; i++) {
  for (let j = 0; j < candidates.length; i++ ){
    if(selectedIDs === candidates[j].astronautID) {
      crew.push(candidates[j].name())
    }
  }
}
  return crew;
} */

//let idNumbers = [291, 414, 503, 599, 796, 890];

// Here are the candidates and the 'animals' array:
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

let animals = [candidateA,candidateB,candidateC,candidateD,candidateE,candidateF];

// Code your template literal and console.log statements:

function buildCrewArray (selectedIDs, candidates) {
  let crew = [];
  for (let i = 0; i < selectedIDs.length; i++) {
  for (let j = 0; j < candidates.length; j++ ){
    if(selectedIDs[i] === candidates[j].astronautID) {
      crew.push(candidates[j].name)
    }
  }
}
  return `${crew[0]}, ${crew[1]}, and ${crew[2]} are going to space!`;
}

console.log(buildCrewArray(arrID, animals));