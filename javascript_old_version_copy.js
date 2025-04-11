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
    0: "#555555",
    1: "#00ffff",
    2: "#ffff00",
    3: "#ff00ff",
    4: "#00ff00",
    5: "#ff0000",
    6: "#0000ff",
    7: "#ff8000"
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
    for (let row = 0; row < 20; row++){
        Playplate[row] = [];
        for (let col = 0; col < 10; col++){
            Playplate[row][col] = E;
        }
    }
}

// funktion to drawlines on borders
function DrawPlayplate() {
    for (let row = 0; row < 20; row++){
        for (let col = 0; col < 10; col++){
            ctx.fillRect
        }
    }
}



class MainPiece { //main class for pieces, bruger inheritance
    constructor(){ //laver koordinaterne til ny figur

        this.orientation = 0; //rotation 0 is default
        this.xKoord = 5;      //place of rotation axes
        this.yKoord = 0;      


        this.colour = "#000000"; //colur of piece in hex


        this.A1 = 0; //coordinats of block 1
        this.B1 = 0; //coordinats of block 1

        this.A2 = 0; //coordinats of block 2
        this.B2 = 0; //coordinats of block 2

        this.A3 = 0; //coordinats of block 3
        this.B3 = 0; //coordinats of block 3

        this.A4 = 0; //coordinats of block 4
        this.B4 = 0; //coordinats of block 4
    }
    moveDown(){ //add check to collision
        this.yKoord += 1;
    }

    moveLEFT(){ //add check to collision
        this.xKoord -= 1;
    }

    moveRIGHT(){ //add check to collision
        this.xKoord += 1;
    }

    rotateBlockLEFT(){ //add check to collision
        if(this.orientation == 0){
            this.orientation = 3;
        }
        if(this.orientation == 1){
            this.orientation = 0;
        }
        if(this.orientation == 2){
            this.orientation = 1;
        }
        if(this.orientation == 3){
            this.orientation = 2;
        }
    }

    rotateBlockRIGHT(){ //add check to collision
        if(this.orientation == 0){
            this.orientation = 1;
        }
        if(this.orientation == 1){
            ithis.orientation = 2;
        }
        if(this.orientation == 2){
            this.orientation = 3;
        }
        if(this.orientation == 3){
            this.orientation = 0;
        }
    }
}

class IPiece extends MainPiece{
    constructor(){
        super();
        this.colour = "#00ffff";  //cyan   hex
    }
    

}

class OPiece extends MainPiece{
    constructor(){
        super();
        this.colour = "#ffff00";  //yellow  hex
    }
}

class TPiece extends MainPiece{
    constructor(){
        super();
        this.colour = "#ff00ff";  //magenta hex
    }
}

class SPiece extends MainPiece{
    constructor(){
        super();
        this.colour = "#00ff00";  //green hex
    }
    

}

class ZPiece extends MainPiece{
    constructor(){
        super();
        this.colour = "#ff0000";  //red hex
    }
}

class JPiece extends MainPiece{
    constructor(){
        super();
        this.colour = "#0000ff";  //blue hex
    }
}

class LPiece extends MainPiece{
    constructor(){
        super();
        this.colour = "#ff8000";  //orange hex
    }
}


//funktions to start
drawBorderLines() //draw grid
randomArray() //make first figurer array

