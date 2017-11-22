// length of initiative[].
len = initiative.length;

// used as a crude way of tracking if the everard specific ability buttons were clicked (similar below for other chars)
var everardStab = 0,
    everardShoot = 0;

var stanvolmMissile = 0;

// when the button Stab It Inna Face button is clicked, it just sets the stab variable to 1. This allows for the
// canvas onclick function to call the stabItInnaFace() below.
function everardStabButton() {

    everardStab = 1;
}

function everardShootButton() {

    everardShoot = 1;
}

function stanvolmMissileButton() {

    stanvolmMissile = 1;
}

function everardStabItInnaFace() {

    // stores the current position of the current actor for use in calculations below.
    var currentX = currentActive.xPos,
        currentY = currentActive.yPos;

    var leftX = currentX - 1,
        rightX = currentX + 1,
        upY = currentY - 1,
        downY = currentY + 1;

    for (var i = 0; i < len; i++) {
        if (xClick === leftX && yClick === currentY) {
            if (initiative[i].xPos === xClick && initiative[i].yPos === yClick) {
                alert("Left " + initiative[i].name)
            }
        } else if (xClick === rightX && yClick === currentY) {
            if (initiative[i].xPos === rightX && initiative[i].yPos === yClick) {
                alert("Right " + initiative[i].name)
            }
        } else if (xClick === currentX && yClick === upY) {
            if (initiative[i].xPos === xClick && initiative[i].yPos === yClick) {
                alert("Up " + initiative[i].name)
            }
        } else if (xClick === currentX && yClick === downY) {
            if (initiative[i].xPos === xClick && initiative[i].yPos === yClick) {
                alert("Down " + initiative[i].name)
            }
        }
    }

    //sets stab back to zero to stop this function from being called again unless the button has been clicked first.
    everardStab = 0;
}

function everardShootItInnaFace() {

    var currentX = currentActive.xPos,
        currentY = currentActive.yPos;

    var leftX = currentX - 5,
        rightX = currentX + 5,
        upY = currentY - 5,
        downY = currentY + 5;

    for (var i = 0; i < len; i++) {
        if (xClick >= leftX && xClick < currentX && yClick === currentY ||
            xClick >= leftX && xClick < currentX && yClick >= upY && yClick >= currentY ||
            xClick >= leftX && xClick < currentX && yClick <= downY && yClick <= currentY) {
            if (initiative[i].xPos === xClick && initiative[i].yPos === yClick) {
                alert("Left " + initiative[i].name)
            }
        } else if (xClick <= rightX && xClick > currentX && yClick === currentY) {
            if (initiative[i].xPos === xClick && initiative[i].yPos === yClick) {
                alert("Right " + initiative[i].name)
            }
        } else if (xClick === currentX && yClick >= upY && yClick < currentY) {
            if (initiative[i].xPos === xClick && initiative[i].yPos === yClick) {
                alert("Up " + initiative[i].name)
            }
        } else if (xClick === currentX && yClick <= downY && yClick > currentY) {
            if (initiative[i].xPos === xClick && initiative[i].yPos === yClick) {
                alert("Down " + initiative[i].name)
            }
        }
    }

    everardShoot = 0;
}

function stanvolmMagicMissile() {

    var currentX = currentActive.xPos,
        currentY = currentActive.yPos;

    var leftX = currentX - 8,
        rightX = currentX + 8,
        upY = currentY - 8,
        downY = currentY + 8;

    for (var i = 0; i < len; i++) {
        if (xClick >= leftX && xClick < currentX && yClick == currentY) {

        }
    }

    stanvolmMissile = 0;
}