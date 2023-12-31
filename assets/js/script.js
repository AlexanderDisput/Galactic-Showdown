/**
 * This dictionary will provide the comparison table to evaluate a winner in the round
 */
 const rulebook = {
  Satellite: ["Spaceship", "Alien"],
  Meteor: ["Satellite", "Laser"],
  Spaceship: ["Meteor", "Laser"],
  Laser: ["Alien", "Satellite"],
  Alien: ["Meteor", "Spaceship"],
};
/**
 * This dictionary is used to assign an image source to the corresponding key
 */
const imageSources = {
  Alien: "assets/images/alien.webp",
  Meteor: "assets/images/meteor.webp",
  Spaceship: "assets/images/spaceship.webp",
  Laser: "assets/images/laser.webp",
  Satellite: "assets/images/satellite.webp"
};
/**
 * This function gives every button in the DOM the eventlistener and makes sure that buttons that are generated
 * dynamically also have the same event listener attached to them
 */
document.addEventListener("DOMContentLoaded", function () {
  document.addEventListener("click", function (event) {
    if (
      event.target.tagName === "BUTTON" &&
      event.target.getAttribute("data-type") === "submit-name"
    ) {
      storeName();
      showRules();
    } if (
      event.target.tagName === "BUTTON" &&
      event.target.getAttribute("data-type") === "start-game"
    ) {
      event.preventDefault();
      runGame();
    } else if (
      event.target.tagName === "BUTTON" &&
      event.target.getAttribute("data-type") === "show-rules"
    ) {
      event.preventDefault();
      showRules();
    }
    else if (
      event.target.tagName === "BUTTON" &&
      event.target.getAttribute("data-type") === "reset"
    ) {
      resetScore();
    }
  });
});
/**
 * This function collects the name from the userinput in the welcome screen and replaces YOU with the players name
 */
function storeName() {
  let userName = document.getElementById("player-name-choice").value;
  // Checks if the user has given no Input. If so, the username is changed to YOU
  if (userName == "") {
    userName = "YOU";
  }
  let displayName = document.getElementById("display-player-name");
  displayName.textContent = userName.toUpperCase();
}
/**
 * This function displays the game rules and handles
 *  removal of the blur cover
 */
function showRules() {
    let toRemove = document.getElementById("blur-cover");
    if (toRemove){
        toRemove.remove();
    }
    let html = `
    <div id="blur-cover">
    <div id="game-rules">
        <h1>The Rules</h1>
        <h2>This game is a variation of the popular game Rock Paper Scissors with the following setup:</h2>
        <p><span>Satellite</span> defeats Spaceship and Alien.</p>
        <p><span>Meteorite</span> defeats Satellite and Laser.</p>
        <p><span>Spaceship</span> defeats Meteorite and Laser.</p>
        <p><span>Laser</span> defeats Alien and Satellite.</p>
        <p><span>Alien</span> defeats Meteorite and Spaceship.</p>
        <button data-type="start-game">Let's Go!</button>
    </div>
    </div>
    `;
    let container = document.createElement("div");
    container.innerHTML = html;
    document.body.appendChild(container.firstElementChild);
}
/**
 * This function runs the game and handles the
 *  display of player choices
 */
function runGame() {
  removeBlurCover();
  let html = `
  <div id="blur-cover">
    <div id="player-pick-outer">
        <h2>Make your choice</h2>
        <div class="player-pick-inner">
        <a class="hover-image" href="#"><img data-type="Alien" src="assets/images/alien.webp" alt="Image of an alien"></a>
        <a class="hover-image" href="#"><img data-type="Spaceship" src="assets/images/spaceship.webp" alt="Image of a spaceship"></a>
        <a class="hover-image" href="#"><img data-type="Meteor" src="assets/images/meteor.webp" alt="Image of a meteor"></a>
        <a class="hover-image" href="#"><img data-type="Satellite" src="assets/images/satellite.webp" alt="Image of a satellite"></a>
        <a class="hover-image" href="#"><img data-type="Laser" src="assets/images/laser.webp" alt="Image of a laser"></a>
        </div>
    </div>
    </div>
    `;
    let container = document.createElement("div");
    container.innerHTML = html;
    document.body.appendChild(container.firstElementChild);
    let images = document.querySelectorAll(".hover-image img");
    images.forEach(function(image){
      image.addEventListener("click", function(event){
        event.preventDefault();
        let computerChoice1 = computerChoice(rulebook);
        let playerChoice = event.target.getAttribute("data-type");
        let playerImage = document.getElementById("player-image");
        let computerImage = document.getElementById("computer-image");
        playerImage.src = imageSources[playerChoice];
        computerImage.src = imageSources[computerChoice1];
        compareChoices(playerChoice, computerChoice1, rulebook);
        removeBlurCover();
      });
    });
}
/**
 * This function compares the choice of the computer agains the choice of the player and determines
 * the winner using the const rulebook.
 */
function compareChoices(playerChoice, computerChoice, rulebook) {
  if (playerChoice == computerChoice) {
    showMessage("IT'S A DRAW");
  }
  else if (rulebook[playerChoice].includes(computerChoice)) {
    console.log("Player Wins!");
    showMessage("YOU WIN");
    incrementScore("player");
  }
  else {
    console.log("Computer Wins!");
    showMessage("YOU LOSE");
    incrementScore("computer")
  }
}
/**
 * This function lets the computer choose a random key within
 * the rulebook dictionary and returns the key as string that we will use for comparison
 */
 function computerChoice(rulebook) {
  let choices = Object.keys(rulebook);
  let random = Math.floor(Math.random()*5);
  let choice = choices[random];
  return choice;
}
/**
 * This function increments the score of the player/computer and changes the value in the DOM
 */
function incrementScore(playerType) {
  let scoreSpan = document.getElementById(`${playerType}-score`);
  let score = parseInt(scoreSpan.textContent);
  score += 1;
  scoreSpan.innerHTML = score;
}
/**
 * This function removes the div with the #blur-cover to make sure that we do not add
 * additional event listeners to the images and bring the user back to the overview
 */
function removeBlurCover() {
  let toRemove = document.getElementById("blur-cover");
  if (toRemove){
      toRemove.remove();
  }
}
/**
 * This function resets the score board to 0 
 */
function resetScore() {
  let playerScore = document.getElementById("player-score");
  let computerScore = document.getElementById("computer-score");
  playerScore.textContent = 0;
  computerScore.textContent = 0;
}
/**
 * This function gives the user a visual queue
 *  to communicate the result of the game
 */
function showMessage(message) {
  let html = `
    <div id="blur-cover">
      <div>
        <h1>${message}</h1>
      </div>
    </div>
  `;
  let container = document.createElement("div");
  container.innerHTML = html;
  document.body.appendChild(container.firstElementChild);
  setTimeout(removeBlurCover, 2000);
}