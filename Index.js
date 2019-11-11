
let userPoints = 50;

function updateUserPoints() {
    let toChange = document.querySelector('#userPoints');
    userPoints += 5;
    toChange.textContent = "Points: " + userPoints;
}

function startTimer(duration, display, name) {
    // updateUserPoints();
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        let toChange = document.querySelector('#machine' + display + "Time");
        toChange.textContent = "In use: " + name + " " + minutes + ":" + seconds;

        let toChangeButton = document.querySelector("#btn-" + display);
        toChangeButton.classList.add("disabled");
        toChangeButton.innerHTML = "In use";

        if (--timer < 0) {
            toChangeButton.classList.remove("disabled");
            // toChangeButton.innerHTML = "Start Cycle";
            // timer = duration;
        }
    }, 1000);
}

window.onload = function () {
    startTimer(1132, "Two", "Katie");
    startTimer(728, "Four", "Andy");
};