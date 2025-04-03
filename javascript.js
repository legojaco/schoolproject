// jacob makes this //////////////////////////
// defines canvs variables
const canvas = document.getElementById('playboard');
const ctx = canvas.getContext("2d");
const width = canvas.width; //størrelsen af canvas
const height = canvas.height; //størrelsen af canvas
const size = 20; //størrelsen af figur

var pieceList = [];
var addToList = 0;

function getRandomInt(min, max) { //funktion to get random variable
    return Math.floor(Math.random()*(max-min+1))+min;
}

// funktion to drawlines on borders
function drawBorderLines() {
    ctx.beginPath(); // Define a new path

    for (var i = 1; i < 10; i++) { //vertical lines
        ctx.moveTo(((width/10)*i), 0); //start at point
        ctx.lineTo(((width/10)*i), height); //end at point
        ctx.stroke(); //draw
    }
    for (var i = 1; i < 20; i++) { //horizontal lines
        ctx.moveTo(0, ((height/20)*i)); //start at point
        ctx.lineTo(width, ((height/20)*i)); //end at point
        ctx.stroke(); //draw
    }
    ctx.stroke(); //draw
}

//random array til brug af valg af figurer
function randomArray() {
    for (i = (pieceList.length); i < 7; i++) {
        do {
            addToList = getRandomInt(1, 7)
        }
        while (pieceList.includes(addToList))
        pieceList.push(addToList);
    }
}

class MainPiece { //main class for pieces, bruger inheritance
    constructor(){ //laver koordinaterne til ny figur
        this.orientation = 0; //rotation 0 is default
        this.xKoord = 0;      //place of rotation axes
        this.yKoord = 0;      //might change

        this.colour = "#000000"; //colur of piece in hex
    }
    moveDown(){ //add check to collision
        this.yKoord += 2;
    }

    moveLEFT(){ //add check to collision
        this.xKoord -= 2;
    }

    moveRIGHT(){ //add check to collision
        this.xKoord += 2;
    }

    rotateBlockLEFT(){ //add check to collision
        if(this.orientation == 1){
            this.orientation = 4;
        }
        if(this.orientation == 2){
            this.orientation = 1;
        }
        if(this.orientation == 3){
            this.orientation = 2;
        }
        if(this.orientation == 4){
            this.orientation = 3;
        }
    }

    rotateBlockRIGHT(){ //add check to collision
        if(this.orientation == 1){
            this.orientation = 2;
        }
        if(this.orientation == 2){
            ithis.orientation = 3;
        }
        if(this.orientation == 3){
            this.orientation = 4;
        }
        if(this.orientation == 4){
            this.orientation = 1;
        }
    }
}

class IPiece extends MainPiece{
    constructor(){
        super();
        this.xKoord = 4;          //place of rotation axes
        this.yKoord = 4;          //one cube is 2 wide, to avoid decimals
        this.colour = "#00ffff";  //cyan   hex
    }
}

class OPiece extends MainPiece{
    constructor(){
        super();
        this.xKoord = 2;          //place of rotation axes
        this.yKoord = 2;          //one cube is 2 wide, to avoid decimals
        this.colour = "#ffff00";  //yellow  hex
    }
}

class TPiece extends MainPiece{
    constructor(){
        super();
        this.xKoord = 3;          //place of rotation axes
        this.yKoord = 3;          //one cube is 2 wide, to avoid decimals
        this.colour = "#ff00ff";  //magenta hex
    }
}

class SPiece extends MainPiece{
    constructor(){
        super();
        this.xKoord = 3;          //place of rotation axes
        this.yKoord = 3;          //one cube is 2 wide, to avoid decimals
        this.colour = "#00ff00";  //green hex
    }
}

class ZPiece extends MainPiece{
    constructor(){
        super();
        this.xKoord = 3;          //place of rotation axes
        this.yKoord = 3;          //one cube is 2 wide, to avoid decimals
        this.colour = "#ff0000";  //red hex
    }
}

class JPiece extends MainPiece{
    constructor(){
        super();
        this.xKoord = 3;          //place of rotation axes
        this.yKoord = 3;          //one cube is 2 wide, to avoid decimals
        this.colour = "#0000ff";  //blue hex
    }
}

class LPiece extends MainPiece{
    constructor(){
        super();
        this.xKoord = 3;          //place of rotation axes
        this.yKoord = 3;          //one cube is 2 wide, to avoid decimals
        this.colour = "#ff8000";  //orange hex
    }
}


//funktions to start
drawBorderLines() //draw grid
randomArray() //make first figurer array

