// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them
document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "startGame") {
                let selectedPlayers = document.getElementsByTagName("input");
                if (selectedPlayers.length < 1){
                    alert("You have not yet selected the number of players");
                }
                
            } else if (this.getAttribute("data-type") !== "rules") {
                let numberPlayers = this.getAttribute("data-type");
                enterNames(numberPlayers);
            }
        });
    }
});

/**
 * Remove the buttons to enter the number of players for the game and enters the number of textboxes so the players can enter there names.
 * @param {*} numberPlayers
 */
function enterNames(numberPlayers){
    let div = document.getElementById("enterNames");
    let playerBtn = document.getElementById("players-form");
    playerBtn.remove();
  	var inputBoxes =``;

    if (numberPlayers === "2players"){ 
        inputBoxes = `
        <form action='theboard.html' method='get' id='players-form'>
        <p> Please enter the name of the players below </p>
        <input type="text" id="player1" name="player1" placeholder="Player 1" autofocus><br>
        <input type="text" id="player2" name="player2" placeholder="Player 2"><br>
        <button data-type="startGame"  id="runGame" class="btn-start"> Start the game</button>
        </form>`;
        
        div.innerHTML = inputBoxes;
    } else if(numberPlayers === "3players"){
        inputBoxes = `
        <form action='theboard.html' method='get' id='players-form'>
        <p> Please enter the name of the players below </p>
        <input type="text" id="player1" name="player1" placeholder="Player 1" autofocus><br>
        <input type="text" id="player2" name="player2" placeholder="Player 2"><br>
        <input type="text" id="player3" name="player3" placeholder="Player 3"><br>
        <button data-type="startGame"  id="runGame" class="btn-start"> Start the game</button>
        </form>`;

        div.innerHTML = inputBoxes;
    } else if (numberPlayers === "4players"){
        inputBoxes = `
        <form action='theboard.html' method='get' id='players-form'>
        <p> Please enter the name of the players below </p>
        <input type="text" id="player1" name="player1" placeholder="Player 1" autofocus><br>
        <input type="text" id="player2" name="player2" placeholder="Player 2"><br>
        <input type="text" id="player3" name="player3" placeholder="Player 3"><br>
        <input type="text" id="player4" name="player4" placeholder="Player 4"><br>
        <button data-type="startGame"  id="runGame" class="btn-start"> Start the game</button>
        </form>`;
        

        div.innerHTML = inputBoxes;
    } else {
        alert ("Error: The number of players does not exist");
    }
}


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("RulesBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
};

// 
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};