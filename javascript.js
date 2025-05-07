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
    0: "#555555", //empty space
    1: "#00ffff", // I peice
    2: "#ffff00", // O peice
    3: "#ff00ff", // T peice
    4: "#00ff00", // S peice
    5: "#ff0000", // Z peice
    6: "#0000ff", // J peice
    7: "#ff8000"  // L peice
};

const shapeObj = {
    "I": [ // I piece
        [0,0,0,0],
        [1,1,1,1],
        [0,0,0,0],
        [0,0,0,0],
    ],
    "O": [ // O piece
        [2,2],
        [2,2],
    ],
    "T": [ // T piece
        [0,3,0],
        [3,3,3],
        [0,0,0],
    ],
    "S": [ // S piece
        [0,4,4],
        [4,4,0],
        [0,0,0],
    ],
    "Z": [ // Z piece
        [5,5,0],
        [0,5,5],
        [0,0,0],
    ],
    "J": [ // J piece
        [6,0,0],
        [6,6,6],
        [0,0,0],
    ],
    "L": [ // L piece
        [0,0,7],
        [7,7,7],
        [0,0,0],
    ]
};


function getRandomInt(min, max) { //funktion to get random variable
    return Math.floor(Math.random()*(max-min+1))+min;
}

//random array til brug af valg af figurer
function ChosePiece() {
    for (i = (PieceList.length); i < 7; i++) {
        do {
            switch(getRandomInt(1, 7)){
                case 1:
                    addToList = "I";
                    break;
                case 2:
                    addToList = "O";
                    break;
                case 3:
                    addToList = "T";
                    break;
                case 4:
                    addToList = "S";
                    break;
                case 5:
                    addToList = "Z";
                    break;
                case 6:
                    addToList = "J";
                    break;
                case 7:
                    addToList = "L";
                    break;
                default:
                    addToList = "I";
            }
        }
        while (PieceList.includes(addToList))
        PieceList.push(addToList);
    }
}

function GeneratePlayplate(){ //make a new playplate function
    for (let Y = 0; Y < 20; Y++){
        Playplate[Y] = []; // create new collum, Y variable
        for (let X = 0; X < 10; X++){
            Playplate[Y][X] = 0; // fill with X variable, E because empty
        }
    }
}

// funktion to draw playplate
function DrawPlayplate() { 
    for (let Y = 0; Y < 20; Y++){     // for evrery Y collum
        for (let X = 0; X < 10; X++){ // axes every x koord
            ctx.fillStyle = colourObj[Playplate[Y][X]];   //get type to determin colour
            ctx.fillRect(X*size, Y*size, size-1, size-1); //draw rektangle
        }
    }
}

class UsedPiece {
    constructor(type){
        this.PieceCenter_xKoord = 5;
        this.PieceCenter_yKoord = 1;

        this.PieceMatrix = shapeObj[type];
    }

    MoveDown(){
        let compX = 0;      // giant block to chck valid move
        let compY = 0;
        for(let Y = 0; Y < this.PieceMatrix.length; Y++){
            for(let X = 0; X < this.PieceMatrix.length; X++){
                compX = (this.PieceCenter_xKoord + X - 1)
                compY = (this.PieceCenter_yKoord + Y - 1)
                if(this.PieceMatrix[Y][X] != 0){
                    if(Playplate[compY + 1][compX] != 0){
                        return;
                    }
                }

            }
        }
        
        this.PieceCenter_yKoord++;
    }

    MoveRight(){
        let compX = 0;      // giant block to chck valid move
        let compY = 0;
        for(let Y = 0; Y < this.PieceMatrix.length; Y++){
            for(let X = 0; X < this.PieceMatrix.length; X++){
                compX = (this.PieceCenter_xKoord + X - 1)
                compY = (this.PieceCenter_yKoord + Y - 1)
                if((compX+1) > 10){
                    return;
                } else 
                if(this.PieceMatrix[Y][X] != 0){
                    if(Playplate[compY][compX + 1] != 0){
                        return;
                    }
                }

            }
        }
        
        this.PieceCenter_xKoord++;
    }

    MoveLeft(){
        let compX = 0;      // giant block to chck valid move
        let compY = 0;
        for(let Y = 0; Y < this.PieceMatrix.length; Y++){
            for(let X = 0; X < this.PieceMatrix.length; X++){
                compX = (this.PieceCenter_xKoord + X - 1)
                compY = (this.PieceCenter_yKoord + Y - 1)
                if((compX-1) < 0){
                    return;
                } else 
                if(this.PieceMatrix[Y][X] != 0){
                    if(Playplate[compY][compX - 1] != 0){
                        return;
                    }
                }

            }
        }
        
        this.PieceCenter_xKoord--;
    }

    RotateRight(){
        let tempMatrix = []; // temporay storage for turning matrix
        for (let Y = 0; Y < this.PieceMatrix.length; Y++){ // fill temp
            tempMatrix[Y] = [];
            for (let X = (this.PieceMatrix.length-1); X >= 0; X--){ // makes turn for every field
                tempMatrix[Y][this.PieceMatrix.length-X-1] = this.PieceMatrix[X][Y]; // fill tempt with coresponding turned
            }
        }

        let compX = 0;      // giant block to chck valid move
        let compY = 0;
        for(let Y = 0; Y < this.PieceMatrix.length; Y++){
            for(let X = 0; X < this.PieceMatrix.length; X++){
                compX = (this.PieceCenter_xKoord + X - 1)
                compY = (this.PieceCenter_yKoord + Y - 1)
                if(tempMatrix[Y][X] != 0){
                    if(Playplate[compY][compX - 1] != 0){
                        return;
                    }
                }
            }
        }
        this.PieceMatrix = tempMatrix; //set temp 
    }

    RotateLeft(){
        let tempMatrix = []; // temporay storage for turning matrix
        for (let Y = 0; Y < this.PieceMatrix.length; Y++){
            tempMatrix[Y] = [];
            for (let X = (this.PieceMatrix.length-1); X >= 0; X--){
                tempMatrix[Y][X] = this.PieceMatrix[X][Y]; // fill tempt with coresponding turned
            }
        }

        let compX = 0;      // giant block to chck valid move
        let compY = 0;
        for(let Y = 0; Y < this.PieceMatrix.length; Y++){
            for(let X = 0; X < this.PieceMatrix.length; X++){
                compX = (this.PieceCenter_xKoord + X - 1)
                compY = (this.PieceCenter_yKoord + Y - 1)
                if(tempMatrix[Y][X] != 0){
                    if(Playplate[compY][compX - 1] != 0){
                        return;
                    }
                }
            }
        }

        this.PieceMatrix = tempMatrix; //set temp 
    }

    PieceEmpty(){
        let compX = 0; // giant block to remove old piece position run before moving
        let compY = 0;
        for(let Y = 0; Y < this.PieceMatrix.length; Y++){
            for(let X = 0; X < this.PieceMatrix.length; X++){
                compX = (this.PieceCenter_xKoord + X - 1)
                compY = (this.PieceCenter_yKoord + Y - 1)
                if(this.PieceMatrix[Y][X] != 0){
                    Playplate[compY][compX] = 0
                }

            }
        }
    }

    PieceInsert(){
        let compX = 0; // giant block to add new piece position run after moving
        let compY = 0;
        for(let Y = 0; Y < this.PieceMatrix.length; Y++){
            for(let X = 0; X < this.PieceMatrix.length; X++){
                compX = (this.PieceCenter_xKoord + X - 1)
                compY = (this.PieceCenter_yKoord + Y - 1)
                if(this.PieceMatrix[Y][X] != 0){
                    Playplate[compY][compX] = this.PieceMatrix[Y][X];
                }
            }
        }
    }
}


function ClearLine(line) { //to clear line, variable is line to be cleared
    for (let Y = line; Y > 0; Y--){ // for every x
        for (let X = 0; X < 10; X++){ //count up and replace with previus, this is to prevent dobble
            Playplate[Y][X] = Playplate[Y][(X-1)]; 
        }
        Playplate[0][Y] = 0 // make top line empty
    }
}

function PlayerDied(){
    PlayerDead = 1

}


//// code to run at start
GeneratePlayplate() //make a new playplate

DrawPlayplate() //draw grid
ChosePiece() //make first figurer array

let currentPiece = new UsedPiece(PieceList.pop());


function whichButton(event) {
    switch(event.keyCode){
        case 65: // a key
            currentPiece.MoveLeft();
            break;
        case 83: // s key
            currentPiece.MoveDown();
            break;
        case 68: // d key
            currentPiece.MoveRight();
            break;
        case 81: // q key
            currentPiece.RotateLeft();
            break;
        case 69: // e key
            currentPiece.RotateRight();
            break;
        default:
            break;
    }
    currentPiece.PieceInsert()
    DrawPlayplate()
    currentPiece.PieceEmpty()
}

currentPiece.PieceInsert()
DrawPlayplate() //draw grid
setInterval(GameLoop, interval);

function GameLoop(){ //the function which calls the others to do the game loop
    currentPiece.PieceInsert()
    DrawPlayplate()
    currentPiece.PieceEmpty()
}