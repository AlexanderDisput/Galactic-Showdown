// run game funtion that will execute the game once the button start game or start new game has been clicked

/**
 * The rulebook will provide the comparison table to evaluate a winner in the round
 */
var rulebook = {
  Satellite: ["Spaceship", "Alien"],
  Meteorite: ["Satallite", "Laser"],
  Spaceship: ["Meteorite", "Laser"],
  Laser: ["Alien", "Satellite"],
  Alien: ["Meteorite", "Spaceship"],
};

/**
 * This function gives every button in the DOM the eventlistener and makes sure that buttons that are generated
 * dynamically also have the same event listener attached to them
 */
document.addEventListener("DOMContentLoaded", function () {
  // let buttons = document.getElementsByTagName("button");

  document.addEventListener("click", function (event) {
    if (
      event.target.tagName === "BUTTON" &&
      event.target.getAttribute("data-type") === "submit-name"
    ) {
      storeName();
      showRules();
    } else if (
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
  });
});

/**
 * This function collects the name from the userinput in the welcome screen and replaces YOU with the players name
 */
var userName;
function storeName() {
  userName = document.getElementById("player-name").value;
  let playerName = document.getElementById("player-name-headline");
  playerName.textContent = userName.toUpperCase();
}

// function to use the storeName and change Name function once the Next submit button
// is clicked which will also bring show the rules
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
    console.log(container)
    document.body.appendChild(container.firstElementChild)
}

// function that will increment player score
// function that will increment computer score

// funtion to reset scores

// function to choose an image from the image array for computer and add it to the DOM
// function to compare images and determine winner through dictionary


function runGame() {
    // removes the overlay if it is there
    let toRemove = document.getElementById("blur-cover");
    if (toRemove){
        toRemove.remove();
    }
  let html = `
  <div id="blur-cover">
    <div id="player-pick-outer">
        <h2>Make your choice</h2>
        <div class="player-pick-inner">
        <a href="#"><img data-type="alien" src="assets/images/alien.webp" alt="Image of an alien"></a>
        <a href="#"><img data-type="spaceship" src="assets/images/spaceship.webp" alt="Image of a spaceship"></a>
        <a href="#"><img data-type="meteor" src="assets/images/meteor.webp" alt="Image of a meteor"></a>
        <a href="#"><img data-type="satellite" src="assets/images/satellite.webp" alt="Image of a satellite"></a>
        <a href="#"><img data-type="laser" src="assets/images/laser.webp" alt="Image of a laser"></a>
        </div>
    </div>
    </div>
    `;
    let container = document.createElement("div");
    container.innerHTML = html;
    console.log(container)
    document.body.appendChild(container.firstElementChild)

//   Computer chooses the image
    

document.addEventListener("click", function(event){
    if(event.target.tagName === "IMG" && event.target.getAttribute("data-type") === "alien") {
        event.preventDefault();

    }
})
}

// pseudo code:

// function create choices:
//     create html element with images
//     add event listeners to the images
//     save the choice to the var player choice

// // How to insert HTMl into DOM:
// let html = `
//   <table>
//     <thead>
//       <tr>
//         <th>Fruit</th>
//         <th>Image</th>
//       </tr>
//     </thead>
//     <tbody>
// `;
// Set the document body's innerHTML to the html string above
// document.body.innerHTML = html;
