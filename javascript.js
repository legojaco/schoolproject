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
                this.xKoorBlock1 = 0; //koord of piece block 1
                this.yKoorBlock1 = 0;
        
                this.xKoorBlock2 = 0; //koord of piece block 2
                this.yKoorBlock2 = 0;
        
                this.xKoorBlock3 = 0; //koord of piece block 3
                this.yKoorBlock3 = 0;
        
                this.xKoorBlock4 = 0; //koord of piece block 4
                this.yKoorBlock4 = 0;
                this.colour = rgb(0, 200, 255); //colour of piece might get deleted/ changed
                break;
            case 2: //O piece
                this.xKoorBlock1 = 0; //koord of piece block 1
                this.yKoorBlock1 = 0;
        
                this.xKoorBlock2 = 0; //koord of piece block 2
                this.yKoorBlock2 = 0;
        
                this.xKoorBlock3 = 0; //koord of piece block 3
                this.yKoorBlock3 = 0;
        
                this.xKoorBlock4 = 0; //koord of piece block 4
                this.yKoorBlock4 = 0;
                this.colour = rgb(225, 255, 0);
                break;
            case 3: //T piece
                this.xKoorBlock1 = 0; //koord of piece block 1
                this.yKoorBlock1 = 0;
        
                this.xKoorBlock2 = 0; //koord of piece block 2
                this.yKoorBlock2 = 0;
        
                this.xKoorBlock3 = 0; //koord of piece block 3
                this.yKoorBlock3 = 0;
        
                this.xKoorBlock4 = 0; //koord of piece block 4
                this.yKoorBlock4 = 0;
                this.colour = rgb(255, 0, 225);
                break;
            case 4: //S piece
                this.xKoorBlock1 = 0; //koord of piece block 1
                this.yKoorBlock1 = 0;
        
                this.xKoorBlock2 = 0; //koord of piece block 2
                this.yKoorBlock2 = 0;
        
                this.xKoorBlock3 = 0; //koord of piece block 3
                this.yKoorBlock3 = 0;
        
                this.xKoorBlock4 = 0; //koord of piece block 4
                this.yKoorBlock4 = 0;
                this.colour = rgb(0, 255, 40);
                break;
            case 5: //Z piece
                this.xKoorBlock1 = 0; //koord of piece block 1
                this.yKoorBlock1 = 0;
        
                this.xKoorBlock2 = 0; //koord of piece block 2
                this.yKoorBlock2 = 0;
        
                this.xKoorBlock3 = 0; //koord of piece block 3
                this.yKoorBlock3 = 0;
        
                this.xKoorBlock4 = 0; //koord of piece block 4
                this.yKoorBlock4 = 0;
                this.colour = rgb(255, 0, 0);
                break;
            case 6: //J piece
                this.xKoorBlock1 = 0; //koord of piece block 1
                this.yKoorBlock1 = 0;
        
                this.xKoorBlock2 = 0; //koord of piece block 2
                this.yKoorBlock2 = 0;
        
                this.xKoorBlock3 = 0; //koord of piece block 3
                this.yKoorBlock3 = 0;
        
                this.xKoorBlock4 = 0; //koord of piece block 4
                this.yKoorBlock4 = 0;
                this.colour = rgb(0, 0, 255);
                break;
            case 7: //L piece
                this.xKoorBlock1 = 0; //koord of piece block 1
                this.yKoorBlock1 = 0;
        
                this.xKoorBlock2 = 0; //koord of piece block 2
                this.yKoorBlock2 = 0;
        
                this.xKoorBlock3 = 0; //koord of piece block 3
                this.yKoorBlock3 = 0;
        
                this.xKoorBlock4 = 0; //koord of piece block 4
                this.yKoorBlock4 = 0;
                this.colour = rgb(255, 120, 0);
                break;
            default: //in case of error make 

        }
        this.piece = type;
        this.name = name;
        
        this.xKoorBlock1 = 0; //koord of piece block 1
        this.yKoorBlock1 = 0;

        this.xKoorBlock2 = 0; //koord of piece block 2
        this.yKoorBlock2 = 0;

        this.xKoorBlock3 = 0; //koord of piece block 3
        this.yKoorBlock3 = 0;

        this.xKoorBlock4 = 0; //koord of piece block 4
        this.yKoorBlock4 = 0;
    }
}
//funktions to start
drawBorderLines() //draw grid
randomArray() //make first figurer array

