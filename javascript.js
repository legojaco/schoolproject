// jacob makes this //////////////////////////
// defines canvs variables
const canvas = document.getElementById('playboard');
const ctx = canvas.getContext("2d");
const width = canvas.width; //størrelsen af canvas
const height = canvas.height; //størrelsen af canvas
const size = 20; //størrelsen af figur

var PieceList = []; //next pices in row
var Playplate = []; //the place where all is contained

var ScoreList = []; //current list of highscores
var CurrentScore = 0; //current score
var PlayerDead = 0; // is player dead 

var interval = 1000 //time to update and move pices in miliseconds

const colourObj = { //list of piece colours to draw
    "E": "#555555", //empty space
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

class UsedPiece {
    constructor(){
        this.PieceCenter_xKoord = 0;
        this.PieceCenter_yKoord = 0;
    }

    MoveDown(){
        this.PieceCenter_yKoord++;
    }

    RotateRight(){

    }

    RotateLeft(){
        
    }

    PieceDraw(){
        for(){
            for(){
                
            }
        }
    }
}

function ClearLine(line) { //to clear line, variable is line to be cleared
    for (let X = 0; X < 10; X++){ // for every x
        for (let Y = line; Y > 0; Y--){ //count up and replace with previus, this is to prevent dobble
            Playplate[X][Y] = Playplate[X][(Y-1)]; 
        }
        Playplate[X][0] = "E" // make top line empty
    }
}

function PlayerDied(){
    PlayerDead = 1

}



GeneratePlayplate() //make a new playplate

DrawPlayplate() //draw grid
ChosePiece() //make first figurer array


ClearLine(4)
DrawPlayplate()



setInterval(GameLoop, interval);

function GameLoop(){ //the function which calls the others to do the game loop

}