//Select needed parts of the html dom
var scores = document.querySelector("#scores");
var title  = document.querySelector("#title");

//array needed to store text entered in textboxes
let textEntered = JSON.parse(localStorage.getItem("textEntered")) || [];

//make the buttons active and able to function
document.querySelector("#btnback").addEventListener("click", function(event) {
    event.preventDefault();
    window.location.href = "./index.html";
});
document.querySelector("#btnclear").addEventListener("click", function(event) {
    event.preventDefault();

    //clears the local storage
    localStorage.clear();
    function removeAllChildNodes(parent) {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
          }
        }
    //clears the dom created off the local storage
    removeAllChildNodes(scores);
});

//builds the dom for X number of instances in local storage.
for (let i=0; i < textEntered.length; i++) {
    let section =  document.createElement("section");
    scores.append(section);
    section.setAttribute("id", i);
    section.setAttribute("class", "lightpurple");
    section.textContent = i+1 + ". " + textEntered[i];
    console.log(textEntered[i]);
}

