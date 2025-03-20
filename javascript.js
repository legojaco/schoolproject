// jacob makes this //////////////////////////
// defines canvs variables
const canvas = document.getElementById('playboard');
const ctx = canvas.getContext("2d");
const width = canvas.width;
const height = canvas.height;

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

//funktions to start
drawBorderLines() //draw grid
randomArray() //make first figurer array