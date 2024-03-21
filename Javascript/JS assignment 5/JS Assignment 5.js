console.log("Hello world!");
let inp1 = document.getElementById("inp1");
let inp2 = document.getElementById("inp2");
let inp3 = document.getElementById("inp3");
let inp4 = document.getElementById("inp4");
let container = document.getElementById("container");
let nameForm = document.getElementById("nameForm");
nameForm.addEventListener("submit", function (event) {
  event.preventDefault();
  container.innerHTML =
    "<h1>Name: " +
    inp1.value +
    " " +
    inp2.value +
    "</h1>" +
    "<br/><br/><h1>Email: " +
    inp3.value +
    "</h1>" +
    "<br/><br/><h1>Age: " +
    inp4.value +
    "</h1>";

  // +  inp3.value + inp4.value
});
