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

class Piece {

    constructor(type, name){ //laver koordinaterne til ny figur
        switch(type){
            case 1: //I piece
                this.piece = I;
                this.a1 = 0;
                this.b1 = 0;
                this.a2 = 0;
                this.b2 = 0;
                this.a3 = 0;
                this.b3 = 0;
                this.a4 = 0;
                this.b4 = 0;
                this.name = name;
                break;
            case 2: //O piece
                this.piece = O;
                this.a1 = 0;
                this.b1 = 0;
                this.a2 = 0;
                this.b2 = 0;
                this.a3 = 0;
                this.b3 = 0;
                this.a4 = 0;
                this.b4 = 0;
                this.name = name;
                break;
            case 3: //T piece
                this.piece = T;
                this.a1 = 0;
                this.b1 = 0;
                this.a2 = 0;
                this.b2 = 0;
                this.a3 = 0;
                this.b3 = 0;
                this.a4 = 0;
                this.b4 = 0;
                this.name = name;
                break;
            case 4: //S piece
                this.piece = S;
                this.a1 = 0;
                this.b1 = 0;
                this.a2 = 0;
                this.b2 = 0;
                this.a3 = 0;
                this.b3 = 0;
                this.a4 = 0;
                this.b4 = 0;
                this.name = name;
                break;
            case 5: //Z piece
                this.piece = Z;
                this.a1 = 0;
                this.b1 = 0;
                this.a2 = 0;
                this.b2 = 0;
                this.a3 = 0;
                this.b3 = 0;
                this.a4 = 0;
                this.b4 = 0;
                this.name = name;
                break;
            case 6: //J piece
                this.piece = J;
                this.a1 = 0;
                this.b1 = 0;
                this.a2 = 0;
                this.b2 = 0;
                this.a3 = 0;
                this.b3 = 0;
                this.a4 = 0;
                this.b4 = 0;
                this.name = name;
                break;
            case 7: //L piece
                this.piece = L;
                this.a1 = 0;
                this.b1 = 0;
                this.a2 = 0;
                this.b2 = 0;
                this.a3 = 0;
                this.b3 = 0;
                this.a4 = 0;
                this.b4 = 0;
                this.name = name;
                break;
            default:

        }
    }
}
//funktions to start
drawBorderLines() //draw grid
randomArray() //make first figurer array

