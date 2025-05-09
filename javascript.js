// jacob made this //////////////////////////
// defines canvs variables
const canvas = document.getElementById('playboard');
const ctx = canvas.getContext("2d");
const width = canvas.width; //størrelsen af canvas
const height = canvas.height; //størrelsen af canvas
const size = 20; //størrelsen af figur

let start = 0; // is game loop on, kinda dump implementation

let PieceList = []; //next pices in row
let Playplate = []; //the place where all is contained

let CurrentScore = 0; //current score

let interval = 1000 //time to update and move pices in miliseconds

const colourObj = { //list of piece colours to draw
    9: "#555555", //empty space
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
        [9,9,9,9],
        [1,1,1,1],
        [9,9,9,9],
        [9,9,9,9],
    ],
    "O": [ // O piece
        [2,2],
        [2,2],
    ],
    "T": [ // T piece
        [9,3,9],
        [3,3,3],
        [9,9,9],
    ],
    "S": [ // S piece
        [9,4,4],
        [4,4,9],
        [9,9,9],
    ],
    "Z": [ // Z piece
        [5,5,9],
        [9,5,5],
        [9,9,9],
    ],
    "J": [ // J piece
        [6,9,9],
        [6,6,6],
        [9,9,9],
    ],
    "L": [ // L piece
        [9,9,7],
        [7,7,7],
        [9,9,9],
    ]
};


function getRandomInt(min, max) { //funktion to get random variable
    return Math.floor(Math.random()*(max-min+1))+min;
}

//random array til brug af valg af figurer
function ChosePiece() {
    for (i = (PieceList.length); i < 7; i++) { //swtich to convert number to correct string
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
        while (PieceList.includes(addToList)) //do while to start so no empty
        PieceList.push(addToList); //add to end
    }
}

function GeneratePlayplate(){ //make a new playplate function
    for (let Y = 0; Y < 20; Y++){
        Playplate[Y] = []; // create new collum, Y variable
        for (let X = 0; X < 10; X++){
            Playplate[Y][X] = 9; // fill with X variable, E because empty
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

class UsedPiece { //current piece thats being played
    constructor(type){
        this.PieceCornerX = 4; //top x on playplate of piece matrix
        this.PieceCornerY = 0; //top y on playplate of piece matrix
        this.PieceMatrix = structuredClone(shapeObj[type]); //get a copy of correct matrix from type
    }

    ValidMove(Matrix = this.PieceMatrix){ // to check if move was invalid
        let compX; //variable to test relative position of piece
        let compY; //variable to test relative position of piece
        let n = Matrix.length; //size of piece matrix

        for(let Y = 0; Y < n; Y++){ //go through every line in matrix
            for(let X = 0; X < n; X++){ //go through everye cell
                compX = (this.PieceCornerX + X); //get relative x
                compY = (this.PieceCornerY + Y); //get relative y
                if(Matrix[Y][X] != 9){ //is the piece matrix cell empty
                    if(compX < 0 || compX > 10 || compY > 19 || Playplate[compY][compX] != 9){ //is it a valid position
                        return 1;  //returns 1 if move was invalid
                    }
                }
            }
        }
        return; // returns empty/NaN/0
    }

    MoveDownStop(){
        this.PieceCornerY++; //test move 1 down
        
        if (this.ValidMove() > 0){ //is valid
            this.PieceCornerY--; //if no revers
            return;
        }
        return 1; //return 1 to check for stopping later
    }

    MoveRight(){
        this.PieceCornerX++; //test move 1 reight
        if (this.ValidMove() > 0){ // if invalid reverse
            this.PieceCornerX--;
        }
    }

    MoveLeft(){
        this.PieceCornerX--; //test move 1 left
        if (this.ValidMove() > 0){ //if invalid reverse
            this.PieceCornerX++;
        }
    }

    RotateRight(){ //to rotate the piece
        let tempMatrix = structuredClone(this.PieceMatrix); // temporay storage for turning matrix, is copy to prevent errors
        let n = this.PieceMatrix.length // variable to shorten test length

        for (let Y = 0; Y < n; Y++){ // go through all rows
            for (let X = 0; X < n; X++){ //  trough all cells
                tempMatrix[Y][X] = this.PieceMatrix[n-X-1][Y]; // fill tempt with coresponding turned
            }
        }

        if (this.ValidMove(tempMatrix) > 0){ //check valid
            return;
        }

        this.PieceMatrix = tempMatrix; //set matrix same as temp if valid
    }

    RotateLeft(){
        let tempMatrix = structuredClone(this.PieceMatrix); // temporay storage for turning matrix
        let temp2Matrix = structuredClone(this.PieceMatrix); //second storage to work

        let n = this.PieceMatrix.length // variable to shorten test length

        for (let i = 0; i < 3; i++){ // repeat 3 times
            temp2Matrix = structuredClone(tempMatrix); //sets temp 2 to copy of 1
            for (let Y = 0; Y < n; Y++){ // go through all rows
                for (let X = 0; X < n; X++){ //  trough all cells
                    tempMatrix[Y][X] = temp2Matrix[n-X-1][Y]; // fill tempt with coresponding turned
                }
            }
        } /////this repeats 3 times with the temps to stimulate turning left
        /// this was because turn left dindt want to work so made it work with dumb solutions

        if (this.ValidMove(tempMatrix) > 0){ //is the turned valid
            return;
        }
        
        this.PieceMatrix = tempMatrix; //set temp 
    }

    PieceEmpty(){
        let compX = 0; // giant block to remove old piece position run before moving
        let compY = 0; // similair to chk valid but dosent check only delete ocupied
        let n = this.PieceMatrix.length;

        for(let Y = 0; Y < n; Y++){
            for(let X = 0; X < n; X++){
                compX = (this.PieceCornerX + X);
                compY = (this.PieceCornerY + Y);

                if(this.PieceMatrix[Y][X] != 9){
                    Playplate[compY][compX] = 9; //makes all fieds thats fillid with this piece empty
                }
            }
        }
    }

    PieceInsert(){
        let compX = 0; // giant block to add new piece position run after moving
        let compY = 0; 
        let n = this.PieceMatrix.length;

        for(let Y = 0; Y < n; Y++){ //reoeat of PieceEmpty only fils instead of empties
            for(let X = 0; X < n; X++){ // this was done to make checking for cleared easier and less to draw playfield
                compX = (this.PieceCornerX + X);
                compY = (this.PieceCornerY + Y);

                if(this.PieceMatrix[Y][X] != 9){
                    Playplate[compY][compX] = this.PieceMatrix[Y][X];
                }
            }
        }
    }
}


function ClearLine(line) { //to clear line, variable is line to be cleared
    for (let Y = line; Y > 0; Y--){ // for every x
        Playplate[Y] = Playplate[Y-1]; // make top line empty
    }
    Playplate[0] = [9,9,9,9,9,9,9,9,9,9]; //fills to top line with empties to prevent double, dumb implement but works
}

ChosePiece() //make first figurer array

let currentPiece = new UsedPiece(PieceList.shift()); //variables with current piece used


function PlayerDead(){ // what to do when player dies
    start = 0; //stops game
    GeneratePlayplate(); //reset playplate
    PieceList = []; //reset piece list
    ChosePiece(); //make new piecelist
    interval = 1000; //reset movment timer
    CurrentScore = 0; //reset score
    currentPiece = new UsedPiece(PieceList.shift()); //choose new piece
}

function PieceMoverStopper(){ //code to move down and stoop piece if moving in to filled bottom

    if(currentPiece.MoveDownStop() != 1){//moves down and cheecks result
        currentPiece.PieceInsert() //inserts old to save and fill
        currentPiece = new UsedPiece(PieceList.shift()); //starts with new piece
        if (currentPiece.ValidMove() > 0){ //checks valid to see id player dead
            PlayerDead(); // is player dead
        }
    }
}

function whichButton(event) { //to detect player input
    if (start == 1){ //is game on
        currentPiece.PieceEmpty() //remove current position
        switch(event.keyCode){ //use corect movement 
            case 65: // a key
                currentPiece.MoveLeft();
                break;
            case 83: // s key
                currentPiece.MoveDownStop();
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
        currentPiece.PieceInsert() //inset new position
        DrawPlayplate() //draw new playplate
    }
}


//// code to run at start
GeneratePlayplate() //make a new playplate
currentPiece.PieceInsert() //inserts piece to work with start

DrawPlayplate() //draw grid


function GameLoop(){ //the function which calls the others to do the game loop
    start = 1; //set game to be on
    currentPiece.PieceEmpty(); //removels old postion

    for (let Y = 0; Y < 20; Y++){     // for evrery Y collum
        if (!(Playplate[Y].includes(9))){ //check if full
            ClearLine(Y); //if yes clear line
            interval -= Math.ceil(interval/80); //shorten movement time
            CurrentScore++; //increase score by 1
        }
    }

    PieceMoverStopper(); //move pice down

    currentPiece.PieceInsert(); //inset new position

    DrawPlayplate(); //draw

    if (PieceList.length < 3){ //makes new list of pieces to use next if short
        ChosePiece()
    }

    document.getElementById("score").innerHTML = "score: " + CurrentScore; //update score displayed

    if (start == 1){ //if the game is on
        setTimeout(GameLoop, interval); //set next game tick update
    }
}