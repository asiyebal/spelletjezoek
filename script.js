console.log("hello");

var startscherm = document.getElementsByClassName("startscherm")[0];
var hond = document.getElementsByClassName("hond")[0];
var papegaai = document.getElementsByClassName("papegaai")[0];
var bal = document.getElementsByClassName("bal")[0];
var timerElement = document.getElementById("timer");
var melding = document.getElementById("melding");
// hulp van mijn neef bij het if else het krijgen van img die omstebeurt gaat
function startSpel() {
  startscherm.style.display = "none";
  hond.style.display = "block";
  papegaai.style.display = "none";
  bal.style.display = "none";
  timerElement.style.display = "block";
  melding.style.display = "none";
  // chat gpt "How do i set timer when 60 sec ends "
  var tijd = 60;
  timerElement.textContent = `${tijd} seconds`;

  var timerInterval = setInterval(() => {
    tijd--;
    timerElement.textContent = `${tijd} seconds`;

    if (tijd <= 0) {
      clearInterval(timerInterval);
      melding.style.display = "block";
      hond.style.display = "none";
      papegaai.style.display = "none";
      bal.style.display = "none";
    }
  }, 1000);
}

function verdwijn(event) {
  if (event.target.classList.contains("hond")) {
    hond.style.display = "none";
    bal.style.display = "block";
  } else if (event.target.classList.contains("bal")) {
    bal.style.display = "none";
    papegaai.style.display = "block";
  } else if (event.target.classList.contains("papegaai")) {
    papegaai.style.display = "none";
  }
}

startscherm.addEventListener("click", startSpel);
hond.addEventListener("click", verdwijn);
papegaai.addEventListener("click", verdwijn);
bal.addEventListener("click", verdwijn);
