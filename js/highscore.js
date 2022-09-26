var scores = document.querySelector("#scores");
var title  = document.querySelector("#title");

//array needed to store text entered in textboxes
let textEntered = JSON.parse(localStorage.getItem("textEntered")) || [];

document.querySelector("#btnback").addEventListener("click", function(event) {
    event.preventDefault();
    window.location.href = "./index.html";
});
document.querySelector("#btnclear").addEventListener("click", function(event) {
    event.preventDefault();

    localStorage.clear();
    function removeAllChildNodes(parent) {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
          }
        }
    removeAllChildNodes(scores);
});

for (let i=0; i < textEntered.length; i++) {
    let section =  document.createElement("section");
    scores.append(section);
    section.setAttribute("id", i);
    section.setAttribute("class", "lightpurple");
    section.textContent = i+1 + ". " + textEntered[i];
    console.log(textEntered[i]);
}

