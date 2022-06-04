const userChoiceImg = document.getElementById("user-choice-img");
const compChoiceImg = document.getElementById("computer-choice-img");
const resultText = document.getElementById("result");
const rockDiv = document.getElementById("r");
const paperDiv = document.getElementById("p");
const scissorsDiv = document.getElementById("s");
const tryAgainButton = document.getElementById("try-again");
const userSpan = document.getElementById("user");
const compSpan = document.getElementById("computer");

const  chociesType1 =document.getElementById("type-1");
const  chociesType2 =document.getElementById("type-2");
const choicesGroup1 =document.getElementById("choices-group-1");
const choicesGroup2 =document.getElementById("choices-group-2");

const fireDiv = document.getElementById("f");
const waterDiv = document.getElementById("w");
const woodDiv = document.getElementById("o");

// _________________________________ Type 1 Functions _________________________________
// -------------------Clear win-lose-equal effects -------------------
function clearEff(){
    userSpan.classList.remove("result-win","result-equal","result-lose");
    compSpan.classList.remove("result-win" ,"result-lose" ,"result-equal");

    userChoiceImg.style.removeProperty("width","height");
    compChoiceImg.style.removeProperty("width","height");

}

// ------------------- Random Choice Function -------------------
function getcomputerChoice() {
  const choices = ["r", "p", "s"];
  let random = Math.floor(Math.random() * 3);
  return choices[random];
}
// ------------------- Convert To Full Word -------------------

function convertToWord(character) {
  switch (character) {
    case "r":
      return "rock";
      break;
    case "p":
      return "paper";
      break;
    case "s":
      return "scissors";
      break;
  }
}
// ------------------- Win Function -------------------
function win(userChoice, computerChoice) {
  resultText.innerHTML =
    convertToWord(userChoice) +
    " beats " +
    convertToWord(computerChoice) +
    ". You win! 💪";
  userSpan.classList.add("result-win");
  compSpan.classList.add("result-lose");
}

// ------------------- Lose Function -------------------
function lose(userChoice, computerChoice) {
  resultText.innerHTML =
    convertToWord(computerChoice) +
    " beats " +
    convertToWord(userChoice) +
    ". You lost 🥲 ";
  userSpan.classList.add("result-lose");
  compSpan.classList.add("result-win");
}

// ------------------- Draw -------------------
function draw(userChoice, computerChoice) {
  resultText.innerHTML =
    convertToWord(computerChoice) +
    " equals " +
    convertToWord(userChoice) +
    ". It's a draw 👽";

    userSpan.classList.add("result-equal");
    compSpan.classList.add("result-equal");
}
// ------------------- Reset Game -------------------
function resetGame() {
    clearEff();
    resultText.innerHTML = "-- Choose one to start game --";
    userChoiceImg.src="";
    compChoiceImg.src="";

}

// -------------------Main Function -------------------
function rpsGame(userChoice) {
  clearEff();  
  userChoiceImg.src = "images/" + convertToWord(userChoice) + ".svg";
  let computerChoice = getcomputerChoice();
  compChoiceImg.src = "images/" + convertToWord(computerChoice) + ".svg";
  switch (userChoice + computerChoice) {
    case "sp":
    case "rs":
    case "pr":
      win(userChoice, computerChoice);
      break;
    case "rp":
    case "sr":
    case "ps":
      lose(userChoice, computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, computerChoice);
      break;
  }
}

// ------------------- Events Functions
rockDiv.addEventListener("click", () => rpsGame("r"));
paperDiv.addEventListener("click", () => rpsGame("p"));
scissorsDiv.addEventListener("click", () => rpsGame("s"));
tryAgainButton.addEventListener("click", () => resetGame());

// _________________________________ Type 2 Functions _________________________________



// ------------------- Random Choice Function -------------------
function getcomputerChoice2() {
  const choices = ["f", "w", "o"];
  let random = Math.floor(Math.random() * 3);
  return choices[random];
}
// ------------------- Convert To Full Word -------------------

function convertToWord2(character) {
  switch (character) {
    case "f":
      return "fire";
      break;
    case "w":
      return "water";
      break;
    case "o":
      return "wood";
      break;
  }
}
// ------------------- Win Function -------------------
function win2(userChoice, computerChoice) {
  resultText.innerHTML =
    convertToWord2(userChoice) +
    " beats " +
    convertToWord2(computerChoice) +
    ". You win! 💪";
  userSpan.classList.add("result-win");
  compSpan.classList.add("result-lose");
}

// ------------------- Lose Function -------------------
function lose2(userChoice, computerChoice) {
  resultText.innerHTML =
    convertToWord2(computerChoice) +
    " beats " +
    convertToWord2(userChoice) +
    ". You lost 🥲 ";
  userSpan.classList.add("result-lose");
  compSpan.classList.add("result-win");
}

// ------------------- Draw -------------------
function draw2(userChoice, computerChoice) {
  resultText.innerHTML =
    convertToWord2(computerChoice) +
    " equals " +
    convertToWord2(userChoice) +
    ". It's a draw 👽";

    userSpan.classList.add("result-equal");
    compSpan.classList.add("result-equal");
}

// -------------------Main Function -------------------
function rpsGame2(userChoice) {
  clearEff();  
  userChoiceImg.src = "images/" + convertToWord2(userChoice) + ".png";
  userChoiceImg.style.width = "135px";
  userChoiceImg.style.height = "135px";
  let computerChoice = getcomputerChoice2();
  compChoiceImg.src = "images/" + convertToWord2(computerChoice) + ".png";
  compChoiceImg.style.width = "135px";
  compChoiceImg.style.height = "135px";
  switch (userChoice + computerChoice) {
    case "wf":
    case "fo":
    case "ow":
      win2(userChoice, computerChoice);
      break;
    case "fw":
    case "of":
    case "wo":
      lose2(userChoice, computerChoice);
      break;
    case "ff":
    case "ww":
    case "oo":
      draw2(userChoice, computerChoice);
      break;
  }
}

fireDiv.addEventListener("click", () => rpsGame2("f"));
waterDiv.addEventListener("click", () => rpsGame2("w"));
woodDiv.addEventListener("click", () => rpsGame2("o"));

chociesType1.addEventListener("click" , function(){
  choicesGroup1.style.display="block";
    choicesGroup2.style.display="none";
});
chociesType2.addEventListener("click" , function(){
    choicesGroup2.style.display="block";
    choicesGroup1.style.display="none";
});