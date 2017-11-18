// length of initiative[].
len = initiative.length;



// used as a crude way of tracking if the button id="stabItInnaFace" was clicked
var stab = 0;

// when the button Stab It Inna Face button is clicked, it just sets the stab variable to 1. This allows for the
// canvas onclick function to called the stabItInnaFace() below.
function stabButton() {

    stab = 1;
}

function stabItInnaFace() {

    // stores the current position of the current actor for use in calculations below.
    var currentX = currentActive.xPos,
        currentY = currentActive.yPos;

    var leftX = currentX - 1,
        rightX = currentX + 1,
        upY = currentY - 1,
        downY = currentY + 1;

    //This code doesn't actually check if there is another actor in the clicked tile. Should probably fix that.
    if (xClick === leftX && yClick === currentY) {
        alert("Yay")
    } else if (xClick === rightX && yClick === currentY) {
        alert("Yay")
    } else if (xClick === currentX && yClick === upY) {
        alert("Yay")
    } else if (xClick === currentX && yClick === downY) {
        alert("Yay")
    }


    /*
    if (xClick === currentX - 1 && yClick === currentY) {
        console.log(currentActive.name+" "+xClick+", "+yClick);
    }
    */

    //sets stab back to zero to stop this function from being called again unless the button has been clicked first.
    stab = 0;
}