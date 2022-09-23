var btnstart = document.querySelector("#btnstart");
var btn1 = document.querySelector("#btn1");
var btn2 = document.querySelector("#btn2");
var btn3 = document.querySelector("#btn3");
var btn4 = document.querySelector("#btn4");
var title = document.querySelector("#question");
var codepart = document.querySelector("#codepart");
var timedisplay = document.getElementById("timedisplay");
var secondsLeft = 30;
var gameplaystatus = "start";
var randomquestionarray = [];
var playcount = -1;

function randomquestionselected() {

    while (randomquestionarray.length < 10) {
        var randomnumber = Math.floor(Math.random() * 10) + 1;
        if(randomquestionarray.indexOf(randomnumber) === -1) randomquestionarray.push(randomnumber);
    }
    console.log(randomquestionarray);
}

    function setTime() {
        // Sets interval in variable
        var timerInterval = setInterval(function() {
        secondsLeft--;
        timedisplay.textContent = secondsLeft;
    
        if(secondsLeft === 0) {
            // Stops execution of action at set interval
            clearInterval(timerInterval);
        }
        }, 1000);
    }

document.querySelector("#btnstart").addEventListener("click", function(event) {
    event.preventDefault();
    timedisplay.textContent = secondsLeft;
    setTime();
    gamePlay();
    btnstart.setAttribute("class", "hidden");
});

document.querySelector("#btn1").addEventListener("click", function(event) {
    event.preventDefault();
    gamePlay();
});
document.querySelector("#btn2").addEventListener("click", function(event) {
    event.preventDefault();
    gamePlay();
});
document.querySelector("#btn3").addEventListener("click", function(event) {
    event.preventDefault();
    gamePlay();
});
document.querySelector("#btn4").addEventListener("click", function(event) {
    event.preventDefault();
    gamePlay();
});
function gamePlay(){
    randomquestionselected();
    playcount++;
    title.textContent = randomquestionlist[randomquestionarray[playcount]][0];
    codepart.textContent = randomquestionlist[randomquestionarray[playcount]][1];
    btn1.setAttribute("class", "");
    btn1.textContent = randomquestionlist[randomquestionarray[playcount]][2];
    btn2.setAttribute("class", "");
    btn2.textContent = randomquestionlist[randomquestionarray[playcount]][3];
    btn3.setAttribute("class", "");
    btn3.textContent = randomquestionlist[randomquestionarray[playcount]][4];
    btn4.setAttribute("class", "");
    btn4.textContent = randomquestionlist[randomquestionarray[playcount]][5];

    console.log(randomquestionarray[playcount]);
}
//   btnsave.setAttribute("id", "btn1");