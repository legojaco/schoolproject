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

function GeneratePlayplate(){ //make a new playplate function
    for (let X = 0; X < 10; X++){
        Playplate[X] = []; // create new collum, x variable
        for (let Y = 0; Y < 20; Y++){
            Playplate[X][Y] = "E"; // fill with y variable, E because empty
        }
    }
}

// funktion to draw playplate
function DrawPlayplate() { 
    for (let X = 0; X < 10; X++){     // for evrery x collum
        for (let Y = 0; Y < 20; Y++){ // axes every y koord
            ctx.fillStyle = colourObj[Playplate[X][Y]];   //get type to determin colour
            ctx.fillRect(X*size, Y*size, size-1, size-1); //draw rektangle
        }
    }
}



GeneratePlayplate() //make a new playplate

DrawPlayplate() //draw grid

ChosePiece() //make first figurer array