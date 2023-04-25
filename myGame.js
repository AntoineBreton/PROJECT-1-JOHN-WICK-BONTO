// importing from other file
import cards from "./cards.js";
console.log(cards);

import Gameplay from "./myRulesGame.js";
console.log(Gameplay);

// From Homepage to Gamepage

const gamePage = document.getElementById("Gamepage");

const homePage = document.getElementById("Homepage");

const enterButton = document.querySelector(".enter-button-homepage");
console.log(enterButton);
enterButton.addEventListener("click", (event) => {
  event.preventDefault();
  //   console.log("coucou");
  homePage.style.display = "none";
  gamePage.style.display = "block";
});

// From "return to Homepage" button to Homepage (when GAMEOVER)

// Cliking on mistery cards

const clickableCards = document.querySelectorAll("#cards-game div");
// console.log(clickableCards);

for (let i = 0; i < clickableCards.length; i++) {
  clickableCards[i].addEventListener("click", (event) => {
    console.log("coucou");
  });
}

// Set the timer (countdown)

const startTimer = 1;
let time = startTimer * 30;

const countdownTimer = document.getElementById("timer");

setInterval(updateCountdown, 250);

function updateCountdown() {
  const minute = Math.floor(time / 60);
  let seconds = time % 60;

  countdownTimer.innerHTML = `0${minute}: ${seconds}`;
  time--;

  clearInterval(seconds);
}
