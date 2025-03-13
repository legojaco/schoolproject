// jacob makes this //////////////////////////
// defines canvs variables
const canvas = document.getElementById('playboard');
const ctx = canvas.getContext("2d");
var width = canvas.width;
var height = canvas.height;

// funktion to drawlines on borders
function drawBorderLines() {
    ctx.beginPath(); // Define a new path

    for (var i = 1; i < 10; i++) {
        ctx.moveTo((width/(10-i)), 0); //start at point
        ctx.lineTo((width/(10-i)), height); //end at point
        ctx.stroke(); //draw
    }
    ctx.stroke(); //draw
}

drawBorderLines()