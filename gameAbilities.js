// length of initiative[].
len = initiative.length;

// used as a crude way of tracking if the everard specific ability buttons were clicked (similar below for other chars)
var everardStab = 0,
    everardShoot = 0;

var stanvolmMissile = 0;

function postActionUpdate() {


    //sets stab back to zero to stop this function from being called again unless the button has been clicked first.
    everardStab = 0;
    everardShoot = 0;
    movesRemaining = movesRemaining - 2;
    document.getElementById("uiMovesRemaining").innerHTML = "Turn Units: "+movesRemaining+"/"+ currentActive.tu;
    drawMap();
    highlightRemaining();
}

// when the button Stab It Inna Face button is clicked, it just sets the stab variable to 1. This allows for the
// canvas onclick function to call the stabItInnaFace() below.
function everardStabButton() {

    if (movesRemaining >= 2) {

        drawMap();

        everardStab = 1;

        var ctx = document.getElementById("map").getContext("2d");

        var i = currentActive.xPos,
            j = currentActive.yPos;

            ctx.drawImage(highlights[0], i * 64, (j * 64) - 64, 64, 64);
            ctx.drawImage(highlights[1], (i * 64) - 64, j * 64, 192, 64);
            ctx.drawImage(highlights[0], i * 64, (j * 64) + 64, 64, 64);

    } else {
        alert("You have insufficient Turn Units to perform this action.")
    }
}

function everardShootButton() {

    if (movesRemaining >= 2) {

        drawMap();

        everardShoot = 1;

        var ctx = document.getElementById("map").getContext("2d");

        var currentX = currentActive.xPos,
            currentY = currentActive.yPos;

        var leftX1 = currentX - 1,
            leftX2 = currentX - 2,
            leftX3 = currentX - 3,
            leftX4 = currentX - 4,
            leftX5 = currentX - 5,
            upY1 = currentY -1,
            upY2 = currentY -2,
            upY3 = currentY -3,
            upY4 = currentY -4,
            upY5 = currentY - 5,
            downY1 = currentY + 1,
            downY2 = currentY + 2,
            downY3 = currentY + 3,
            downY4 = currentY + 4,
            downY5 = currentY + 5;

        ctx.drawImage(highlights[0], currentX * 64, upY5 * 64, 64, 64);
        ctx.drawImage(highlights[1], leftX1 * 64, upY4 * 64, 192, 64);
        ctx.drawImage(highlights[2], leftX2 * 64, upY3 * 64, 320, 64);
        ctx.drawImage(highlights[3], leftX3 * 64, upY2 * 64, 448, 64);
        ctx.drawImage(highlights[4], leftX4 * 64, upY1 * 64, 576, 64);
        ctx.drawImage(highlights[5], leftX5 * 64, currentY * 64, 704, 64);
        ctx.drawImage(highlights[4], leftX4 * 64, downY1 *64, 576, 64);
        ctx.drawImage(highlights[3], leftX3 * 64, downY2 * 64, 448, 64);
        ctx.drawImage(highlights[2], leftX2 * 64, downY3 * 64, 320, 64);
        ctx.drawImage(highlights[1], leftX1 * 64, downY4 * 64, 192, 64);
        ctx.drawImage(highlights[0], currentX * 64, downY5 * 64, 64, 64);
    } else {
        alert("You have insufficient Turn Units to perform this action.")
    }
}

function stanvolmMissileButton() {

    if (movesRemaining > 3) {

        drawMap();

        stanvolmMissile = 1;

        var ctx = document.getElementById("map").getContext("2d");

        var currentX = currentActive.xPos,
            currentY = currentActive.yPos;

        var leftX1 = currentX - 1,
            leftX2 = currentX - 2,
            leftX3 = currentX - 3,
            leftX4 = currentX - 4,
            leftX5 = currentX - 5,
            leftX6 = currentX - 6,
            leftX7 = currentX - 7,
            leftX8 = currentX - 8,
            upY1 = currentY - 1,
            upY2 = currentY - 2,
            upY3 = currentY - 3,
            upY4 = currentY - 4,
            upY5 = currentY - 5,
            upY6 = currentY - 6,
            upY7 = currentY - 7,
            upY8 = currentY - 8,
            downY1 = currentY + 1,
            downY2 = currentY + 2,
            downY3 = currentY + 3,
            downY4 = currentY + 4,
            downY5 = currentY + 5,
            downY6 = currentY + 6,
            downY7 = currentY + 7,
            downY8 = currentY + 8;

        ctx.drawImage(highlights[0], currentX * 64, upY8 * 64, 64, 64);
        ctx.drawImage(highlights[1], leftX1 * 64, upY7 * 64, 192, 64);
        ctx.drawImage(highlights[2], leftX2 * 64, upY6 * 64, 320, 64);
        ctx.drawImage(highlights[3], leftX3 * 64, upY5 * 64, 448, 64);
        ctx.drawImage(highlights[4], leftX4 * 64, upY4 * 64, 576, 64);
        ctx.drawImage(highlights[5], leftX5 * 64, upY3 * 64, 704, 64);
        ctx.drawImage(highlights[6], leftX6 * 64, upY2 * 64, 832, 64);
        ctx.drawImage(highlights[7], leftX7 * 64, upY1 * 64, 960, 64);
        ctx.drawImage(highlights[8], leftX8 * 64, currentY * 64, 1088, 64);
        ctx.drawImage(highlights[7], leftX7 * 64, downY1 * 64, 960, 64);
        ctx.drawImage(highlights[6], leftX6 * 64, downY2 * 64, 832, 64);
        ctx.drawImage(highlights[5], leftX5 * 64, downY3 * 64, 704, 64);
        ctx.drawImage(highlights[4], leftX4 * 64, downY4 * 64, 576, 64);
        ctx.drawImage(highlights[3], leftX3 * 64, downY5 * 64, 448, 64);
        ctx.drawImage(highlights[2], leftX2 * 64, downY6 * 64, 320, 64);
        ctx.drawImage(highlights[1], leftX1 * 64, downY7 * 64, 192, 64);
        ctx.drawImage(highlights[0], currentX * 64, downY8 * 64, 64, 64);
    } else {
        alert("You have insufficient Turn Units to perform this action.")
    }
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
        if (xClick === leftX && yClick === currentY || xClick === rightX && yClick === currentY ||
            xClick === currentX && yClick === upY || xClick === currentX && yClick === downY) {
            if (initiative[i].xPos === xClick && initiative[i].yPos === yClick) {
                alert(initiative[i].name);
                postActionUpdate();
            }
        }
    }
}

function everardShootItInnaFace() {

    var currentX = currentActive.xPos,
        currentY = currentActive.yPos;

    var leftX1 = currentX - 1,
        leftX2 = currentX - 2,
        leftX3 = currentX - 3,
        leftX4 = currentX - 4,
        leftX5 = currentX - 5,
        rightX1 = currentX + 1,
        rightX2 = currentX + 2,
        rightX3 = currentX + 3,
        rightX4 = currentX + 4,
        rightX5 = currentX + 5,
        upY1 = currentY -1,
        upY2 = currentY -2,
        upY3 = currentY -3,
        upY4 = currentY -4,
        upY5 = currentY - 5,
        downY1 = currentY + 1,
        downY2 = currentY + 2,
        downY3 = currentY + 3,
        downY4 = currentY + 4,
        downY5 = currentY + 5;

    for (var i = 0; i < len; i++) {
        if (xClick >= leftX5 && xClick <= rightX5 && yClick === currentY ||
            xClick >= leftX4 && xClick <= rightX4 && yClick === upY1 ||
            xClick >= leftX4 && xClick <= rightX4 && yClick === downY1 ||
            xClick >= leftX3 && xClick <= rightX3 && yClick === upY2 ||
            xClick >= leftX3 && xClick <= rightX3 && yClick === downY2 ||
            xClick >= leftX2 && xClick <= rightX2 && yClick === upY3 ||
            xClick >= leftX2 && xClick <= rightX2 && yClick === downY3 ||
            xClick >= leftX1 && xClick <= rightX1 && yClick === upY4 ||
            xClick >= leftX1 && xClick <= rightX1 && yClick === downY4 ||
            xClick === currentX && yClick >= upY5 && yClick <= downY5) {
            if (currentX === xClick && currentY === yClick) {

            } else if (initiative[i].xPos === xClick && initiative[i].yPos === yClick) {
                alert(initiative[i].name);
                postActionUpdate();
            }
        }
    }

    everardShoot = 0;
}

function stanvolmMagicMissile() {


    var currentX = currentActive.xPos,
        currentY = currentActive.yPos;

    var leftX1 = currentX - 1,
        leftX2 = currentX - 2,
        leftX3 = currentX - 3,
        leftX4 = currentX - 4,
        leftX5 = currentX - 5,
        leftX6 = currentX - 6,
        leftX7 = currentX - 7,
        leftX8 = currentX - 8,
        rightX1 = currentX + 1,
        rightX2 = currentX + 2,
        rightX3 = currentX + 3,
        rightX4 = currentX + 4,
        rightX5 = currentX + 5,
        rightX6 = currentX + 6,
        rightX7 = currentX + 7,
        rightX8 = currentX + 8,
        upY1 = currentY -1,
        upY2 = currentY -2,
        upY3 = currentY -3,
        upY4 = currentY -4,
        upY5 = currentY - 5,
        upY6 = currentY - 6,
        upY7 = currentY - 7,
        upY8 = currentY - 8,
        downY1 = currentY + 1,
        downY2 = currentY + 2,
        downY3 = currentY + 3,
        downY4 = currentY + 4,
        downY5 = currentY + 5,
        downY6 = currentY + 6,
        downY7 = currentY + 7,
        downY8 = currentY + 8;

    for (var i = 0; i < len; i++) {
        if (xClick === currentX && yClick >= upY8 && yClick <= downY8 ||
            xClick >= leftX1 && xClick <= rightX1 && yClick === upY7 ||
            xClick >= leftX1 && xClick <= rightX1 && yClick === downY7 ||
            xClick >= leftX2 && xClick <= rightX2 && yClick === upY6 ||
            xClick >= leftX2 && xClick <= rightX2 && yClick === downY6 ||
            xClick >= leftX3 && xClick <= rightX3 && yClick === upY5 ||
            xClick >= leftX3 && xClick <= rightX3 && yClick === downY5 ||
            xClick >= leftX4 && xClick <= rightX4 && yClick === upY4 ||
            xClick >= leftX4 && xClick <= rightX4 && yClick === downY4 ||
            xClick >= leftX5 && xClick <= rightX5 && yClick === upY3 ||
            xClick >= leftX5 && xClick <= rightX5 && yClick === downY3 ||
            xClick >= leftX6 && xClick <= rightX6 && yClick === upY2 ||
            xClick >= leftX6 && xClick <= rightX6 && yClick === downY2 ||
            xClick >= leftX7 && xClick <= rightX7 && yClick === upY1 ||
            xClick >= leftX7 && xClick <= rightX7 && yClick === downY1 ||
            xClick >= leftX8 && xClick <= rightX8 && yClick === currentY) {
            if (currentX === xClick && currentY === yClick) {

            } else if (initiative[i].xPos === xClick && initiative[i].yPos === yClick) {
                alert(initiative[i].name);
                postActionUpdate();
            }
        }
    }
}