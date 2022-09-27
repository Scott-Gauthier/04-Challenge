//Select needed parts of the html dom
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
var codepart = document.querySelector("#codepart");
var timedisplay = document.getElementById("timedisplay");

//variables needed to store game play
var answer = 0;
var secondsLeft = 120;
var playcount = -1;

//function to create an array of random numbers for the random number of questions
function randomquestionselected() {
    var randomquestionarray = [];
    while (randomquestionarray.length < 5) {
        var randomnumber = Math.floor(Math.random() * 5);
        if(randomquestionarray.indexOf(randomnumber) === -1) randomquestionarray.push(randomnumber);
    }
    return randomquestionarray;
}
//function to start the timer
function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
    secondsLeft--;
    timedisplay.textContent = secondsLeft;

    if(secondsLeft < 1) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        gamePlay();
    }
    }, 1000);
}

//make the buttons active and able to function
document.querySelector("#btnstart").addEventListener("click", function(event) {
    event.preventDefault();
    timedisplay.textContent = secondsLeft;
    setTime();
    gamePlay();
    btnstart.setAttribute("class", "hidden");
    codepart.setAttribute("class", "lightgray");
});
document.querySelector("#btn1").addEventListener("click", function(event) {
    event.preventDefault();
    if (answer == 1) {
        result.textContent = "Correct!"
    } else {
        result.textContent = "Wrong"
        timedisplay.textContent = secondsLeft - 10;
        secondsLeft = secondsLeft - 10;
    }
    result.setAttribute("class", "border-top");
    gamePlay();
});
document.querySelector("#btn2").addEventListener("click", function(event) {
    event.preventDefault();
    if (answer == 2) {
        result.textContent = "Correct!"
    } else {
        result.textContent = "Wrong"
        timedisplay.textContent = secondsLeft - 10;
        secondsLeft = secondsLeft - 10;
    }
    result.setAttribute("class", "border-top");
    gamePlay();
});
document.querySelector("#btn3").addEventListener("click", function(event) {
    event.preventDefault();
    if (answer == 3) {
        result.textContent = "Correct!"
    } else {
        result.textContent = "Wrong"
        timedisplay.textContent = secondsLeft - 10;
        secondsLeft = secondsLeft - 10;
    }
    result.setAttribute("class", "border-top");
    gamePlay();
});
document.querySelector("#btn4").addEventListener("click", function(event) {
    event.preventDefault();
    if (answer == 4) {
        result.textContent = "Correct!"
    } else {
        result.textContent = "Wrong"
        timedisplay.textContent = secondsLeft - 10;
        secondsLeft = secondsLeft - 10;
    }
    result.setAttribute("class", "border-top");
    gamePlay();
});
document.querySelector("#btnSubmit").addEventListener("click", function(event) {
    event.preventDefault();
    btnstart.setAttribute("class", "hidden");
    endplay.setAttribute("class", "hidden");
    
    //array needed to store text entered in textboxes
    let textEntered = JSON.parse(localStorage.getItem("textEntered")) || [];
    //set initials and score to local storage.
    textEntered.push(finalscore + " - " + document.querySelector(`#scoreresult`).value);
    localStorage.setItem("textEntered", JSON.stringify(textEntered));
    
    //set time to 0. If used 0 it would display 1.
    secondsLeft = 1;
    window.location.href = "./highscore.html";
});

//this is what runs the game.
function gamePlay(){
    var finalscore = 0;
    playcount++;
    let randomquestionarray = randomquestionselected();
    if (playcount + 1 <= randomquestionarray.length && secondsLeft > 0) {

        //diplay buttons and text with correct text
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

        //set global variable so clicking a button can compare the answer
        answer = randomquestionlist[randomquestionarray[playcount]][6];

    } else {
        //set the dom after game play ends.
        finalscore = secondsLeft;
        randomquestionarray = [];
        endplay.setAttribute("class", "");
        title.textContent = `All done!`;
        codepart.textContent = `Your final score is ${secondsLeft}.`;
        btnstart.setAttribute("class", "hidden");
        btn1.setAttribute("class", "hidden");
        btn2.setAttribute("class", "hidden");
        btn3.setAttribute("class", "hidden");
        btn4.setAttribute("class", "hidden");
    }
}