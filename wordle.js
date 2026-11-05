const height = 6; // number of guesses
const width = 5; // length of word

let row = 0; // current attempt
let col = 0; // current letter for that attempt

let gameOver = false;
const word = "Squid";

// window.onload runs after the whole page (HTML, CSS, images, scripts) is fully loaded.
window.onload = function(){
    initialise ();
}

function initialise (){
    // create the game board
    for (let r=0; r < height; r++) {
        for (let c=0; c < width; c++) {
            let tile = document.createElement("span"); // creates <span>
            tile.id = r.toString() + "-" + c.toString();
            tile.classList.add("tile");
            tile.innerText = "P";
            document.getElementById("board").appendChild(tile)
        }
    }

}