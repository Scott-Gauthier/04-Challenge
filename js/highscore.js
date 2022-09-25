var scores = document.querySelector("#scores");

//array needed to store text entered in textboxes
var textEntered = localStorage.getItem("textEntered") || ['a','b','c','d'];

document.querySelector("#btnback").addEventListener("click", function(event) {
    event.preventDefault();
    window.location.href = "./index.html";
});
document.querySelector("#btnclear").addEventListener("click", function(event) {
    event.preventDefault();
    highscore.textContent = "Not a test";
});

for (let i=0; i < textEntered.length; i++) {
    let section =  document.createElement("section");
    scores.append(section);
    section.setAttribute("id", i);
    section.setAttribute("class", "lightpurple");
    section.textContent = i+1 + ". " + textEntered[i];
}

