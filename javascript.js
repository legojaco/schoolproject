// jacob makes this //////////////////////////
// defines canvs variables
const canvas = document.getElementById('playboard');
const ctx = canvas.getContext("2d");
const width = canvas.width; //størrelsen af canvas
const height = canvas.height; //størrelsen af canvas
const size = 20; //størrelsen af figur

var PieceList = [];
var Playplate = [];

var ScoreList = [];
var CurrentScore = 0;
var PlayerDead = 0;

const colourObj = {
    "E": "#555555",
    "I": "#00ffff",
    "O": "#ffff00",
    "T": "#ff00ff",
    "S": "#00ff00",
    "Z": "#ff0000",
    "J": "#0000ff",
    "L": "#ff8000"
};


function getRandomInt(min, max) { //funktion to get random variable
    return Math.floor(Math.random()*(max-min+1))+min;
}

//random array til brug af valg af figurer
function ChosePiece() {
    for (i = (PieceList.length); i < 7; i++) {
        do {
            addToList = getRandomInt(1, 7)
        }
        while (PieceList.includes(addToList))
        PieceList.push(addToList);
    }
}

function GeneratePlayplate(){
    for (let col = 0; col < 10; col++){
        Playplate[col] = [];
        for (let row = 0; row < 20; row++){
            Playplate[col][row] = "E";
        }
    }
}

// funktion to drawlines on borders
function DrawPlayplate() {
    for (let col = 0; col < 10; col++){
        for (let row = 0; row < 20; row++){
            ctx.fillStyle = colourObj[Playplate[col][row]];
            ctx.fillRect(col*size, row*size, size-1, size-1);
        }
    }
}

GeneratePlayplate()

console.log(Playplate[1][1])

DrawPlayplate() //draw grid
ChosePiece() //make first figurer array