//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.
class CrewCandidate {
    constructor(name, mass, scores) {
        this.name = name;
        this.mass = mass;
        this.scores = scores;
    }

    addScore(value) {
        this.scores.push(value);
    };

    average() {
        let average = 0;
        for (let i = 0; i < this.scores.length; i++) {
            average += this.scores[i];
        }
        return Math.round((average / this.scores.length)*10) / 10;
    };

    status() {
        if (this.average() > 90) {
            return 'Accepted';
        } else if (this.average() > 80 && this.average() < 90) {
            return 'Reserve';
        } else if (this.average() > 70 && this.average() < 80) {
            return 'Probationary';
        } else {
            return 'Rejected';
        }
    };
}

let candidateOne = new CrewCandidate('Bubba Bear', 135, [88, 85, 90]);
let candidateTwo = new CrewCandidate('Merry Maltese', 1.5, [93, 88, 97]);
let candidateThree = new CrewCandidate('Glad Gator', 225, [75, 78, 62]);

//candidateOne.addScore(83);
//console.log(candidateThree.status());


//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.

console.log(`${candidateOne.name} earned an average test score of ${candidateOne.average()}% and has a status of ${candidateOne.status()}.`);
console.log(`${candidateTwo.name} earned an average test score of ${candidateTwo.average()}% and has a status of ${candidateTwo.status()}.`);
console.log(`${candidateThree.name} earned an average test score of ${candidateThree.average()}% and has a status of ${candidateThree.status()}.`);

//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.

//candidateThree.addScore(99);
//candidateThree.addScore(99);


function upgradeToReserve(candidate) {
    let looped = 0;
    if (candidate.average() > 80) {
        return `${candidate.name} is already ${candidate.status()}, no need to boost their scores.`
    }
    while (candidate.status() !== 'Reserve') {
        candidate.addScore(99);
        looped ++;
    }
    return `${candidate.name} has reached the status of ${candidate.status()} after scoring a 99 on their next ${looped} test.`;
}

function upgradeToAccepted(candidate) {
    let looped = 0;
    if (candidate.average() > 90) {
        return `${candidate.name} is already ${candidate.status()}, no need to boost their scores.`
    }
    while (candidate.status() !== 'Accepted') {
        candidate.addScore(99);
        looped ++;
    }
    return `${candidate.name} has reached the status of ${candidate.status()} after scoring a 99 on their next ${looped} test.`;
}

console.log(upgradeToReserve(candidateThree));
console.log(upgradeToAccepted(candidateThree));