var btnstart = document.querySelector("#btnstart");
var btn1 = document.querySelector("#btn1");
var btn2 = document.querySelector("#btn2");
var btn3 = document.querySelector("#btn3");
var btn4 = document.querySelector("#btn4");
var btnback = document.querySelector("#btnback");
var btnclear = document.querySelector("#btnclear");
var endplay = document.querySelector("#end");
var title = document.querySelector("#question");
var result = document.querySelector("#result");
var answer = 0;

var codepart = document.querySelector("#codepart");
var timedisplay = document.getElementById("timedisplay");
var secondsLeft = 120;
var gameplaystatus = "start";
var randomquestionarray = [];
var playcount = -1;

//array needed to store text entered in textboxes
var textEntered = localStorage.getItem("textEntered") || [];

function randomquestionselected() {

    while (randomquestionarray.length < 5) {
        var randomnumber = Math.floor(Math.random() * 50) + 1;
        if(randomquestionarray.indexOf(randomnumber) === -1) randomquestionarray.push(randomnumber);
    }
    console.log(randomquestionarray);
}

    function setTime() {
        // Sets interval in variable
        var timerInterval = setInterval(function() {
        secondsLeft--;
        timedisplay.textContent = secondsLeft;
    
        if(secondsLeft < 1) {
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
    if (answer == 1) {
        result.textContent = "Correct!"
    } else {
        result.textContent = "Wrong"
        timedisplay.textContent = secondsLeft - 10;
    }
    result.setAttribute("class", "");
    gamePlay();

});
document.querySelector("#btn2").addEventListener("click", function(event) {
    event.preventDefault();
    if (answer == 2) {
        result.textContent = "Correct!"
    } else {
        result.textContent = "Wrong"
        timedisplay.textContent = secondsLeft - 10;
    }
    result.setAttribute("class", "");
    gamePlay();
});
document.querySelector("#btn3").addEventListener("click", function(event) {
    event.preventDefault();
    if (answer == 3) {
        result.textContent = "Correct!"
    } else {
        result.textContent = "Wrong"
        timedisplay.textContent = secondsLeft - 10;
    }
    result.setAttribute("class", "");
    gamePlay();
});
document.querySelector("#btn4").addEventListener("click", function(event) {
    event.preventDefault();
    if (answer == 4) {
        result.textContent = "Correct!"
    } else {
        result.textContent = "Wrong"
        timedisplay.textContent = secondsLeft - 10;
    }
    result.setAttribute("class", "");
    gamePlay();
});
document.querySelector("#btnSubmit").addEventListener("click", function(event) {
    event.preventDefault();
    // secondsLeft = 120;
    // playcount = -1;
    // timedisplay.textContent = secondsLeft;
    // setTime();
    btnstart.setAttribute("class", "hidden");
    endplay.setAttribute("class", "hidden");
    
    textEntered = textEntered.push(secondsLeft + " - " + document.querySelector(`#scoreresult`).value);
    localStorage.setItem("textEntered", JSON.stringify(textEntered));

    window.location.href = "./highscore.html";
});

function gamePlay(){

    playcount++;
    randomquestionselected();
    if (playcount + 1 < randomquestionarray.length) {

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

        answer = randomquestionlist[randomquestionarray[playcount]][6];
        console.log(answer);
    } else {
        randomquestionarray = [];
        endplay.setAttribute("class", "");
        title.textContent = `All done!`;
        codepart.textContent = `Your final score is ${secondsLeft}.`;
        btnstart.setAttribute("class", "hidden");
        btn1.setAttribute("class", "hidden");
        btn2.setAttribute("class", "hidden");
        btn3.setAttribute("class", "hidden");
        btn4.setAttribute("class", "hidden");
        secondsLeft = 1;
    }
}
//   btnsave.setAttribute("id", "btn1");