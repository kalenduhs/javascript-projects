// Write your JavaScript code here.
// Remember to pay attention to page loading!

function init () {
    const takeOff = document.getElementById("takeoff");
    const land = document.getElementById("landing");
    const abort = document.getElementById("missionAbort");
    const flightStatus = document.getElementById("flightStatus");
    const shuttleBackground = document.getElementById("shuttleBackground");
    const spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    const rocket = document.getElementById("rocket");
    const up = document.getElementById("up");
    const down = document.getElementById("down");
    const right = document.getElementById("right");
    const left = document.getElementById("left");
    rocket.style.position = absolute;

    takeOff.addEventListener('click', function () {
        let response = window.confirm('Confirm that the shuttle is ready for takeoff.');
        if (response === true) {
            flightStatus.innerHTML = 'Shuttle in flight';
            shuttleBackground.style.backgroundColor = 'Blue';
            spaceShuttleHeight.innerHTML = '10000';
        }
    });

    land.addEventListener('click', function (){
        window.alert('The shuttle is landing. Landing gear engaged.');
        flightStatus.innerHTML = 'The shuttle has landed.';
        shuttleBackground.style.backgroundColor = 'Green';
        spaceShuttleHeight.innerHTML = '0';
    });

    abort.addEventListener('click', function (){
        let response = window.confirm('Confirm that you want to abort the mission.');
        if (response === true) {
            flightStatus.innerHTML = 'Mission aborted';
            shuttleBackground.style.backgroundColor = 'Green';
            spaceShuttleHeight.innerHTML = '0';
        }
    });

    up.addEventListener('click', function (){
        let position = parseInt(rocket.style.bottom) + 10 + 'px';
        rocket.style.bottom = position;
    });

    down.addEventListener('click', function (){

    });

    right.addEventListener('click', function (){

    });

    left.addEventListener('click', function (){

    });

}



window.addEventListener('load', init);