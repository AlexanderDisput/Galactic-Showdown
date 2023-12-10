// run game funtion that will execute the game once the button start game or start new game has been clicked 

// function to give all buttons a job:
document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function (){
            if (this.getAttribute("data-type") == "submit-name") {
                storeName();
                changeName(userName);
                showRules();
            }
        })
    }
})

// Funtion that will collect the name once the screen is loaded and saved to a name = variable 
var userName;
function storeName(){ 
    userName = document.getElementById("player-name").value
}


// function that changes the name shown on the screen from that name = variable
function changeName(userName) {
    let playerName = document.getElementById("player-name-headline")
    playerName.textContent = userName.toUpperCase()
}

// function to use the storeName and change Name function once the Next submit button 
// is clicked which will also bring show the rules
function showRules() {
    let html = `
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
    `
    let div = document.getElementById("blur-cover")
    div.innerHTML = html
}



// function that will increment player score 
// function that will increment computer score 

// funtion to reset scores

// function to show rules 

// function to choose an image from the image array for computer and add it to the DOM 
// function to compare images and determine winner through dictionary

// funtion to create div with image choices and save the choice of player


// function welcomeScreen() {
//     let html = `

//     `
// }















// How to insert HTMl into DOM: 
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
