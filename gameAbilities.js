// length of initiative[].
var len = initiative.length;

// amount to change the movesRemaining by when an ability is used.
var turnUnitsUsed = 0;

// used as a crude way of tracking if the everard specific ability buttons were clicked (similar below for other chars)
var everardStab = 0,
    everardShoot = 0;

var stanvolmMissile = 0,
    stanvolmShield = 0;

var victahanaShield = 0,
    victahanaDefense = 0;

var quxharneProtect = 0,
    quxharneHarm = 0;

var koboldDragonUnhindered = 0,
    koboldDragonShield = 0;

var koboldSlingerSkirmishing = 0,
    koboldSlingerSling = 0;

var koboldMageMissile = 0;

function postActionUpdate() {


    //sets stab back to zero to stop this function from being called again unless the button has been clicked first.
    everardStab = 0;
    everardShoot = 0;
    stanvolmMissile = 0;
    stanvolmShield = 0;
    victahanaShield = 0;
    victahanaDefense = 0;
    quxharneProtect = 0;
    quxharneHarm = 0;
    koboldDragonUnhindered = 0;
    koboldDragonShield = 0;
    koboldSlingerSkirmishing = 0;
    koboldSlingerSling = 0;
    movesRemaining = movesRemaining - turnUnitsUsed;
    document.getElementById("uiMovesRemaining").innerHTML = "Turn Units: "+movesRemaining+"/"+ currentActive.tu;
    drawMap();
    highlightRemaining();
    turnUnitsUsed = 0;
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

    if (movesRemaining >= 3) {

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

function stanvolmShieldButton() {

    if (movesRemaining >= 2) {

        drawMap();

        stanvolmShield = 1;

        var ctx = document.getElementById("map").getContext("2d");

        var currentX = currentActive.xPos,
            currentY = currentActive.yPos;

        ctx.drawImage(highlights[0], currentX * 64, currentY * 64, 64, 64);
    } else {
        alert("You have insufficient Turn Units to perform this action.")
    }
}

function victahanaShieldButton() {

    if (movesRemaining >= 2) {

        drawMap();

        victahanaShield = 1;

        var ctx = document.getElementById("map").getContext("2d");

        var currentX = currentActive.xPos,
            currentY = currentActive.yPos;

        var leftX = currentX - 1,
            upY = currentY - 1,
            downY = currentY + 1;

        ctx.drawImage(highlights[0], currentX * 64, upY * 64, 64, 64);
        ctx.drawImage(highlights[1], leftX * 64, currentY * 64, 192, 64);
        ctx.drawImage(highlights[0], currentX * 64, downY * 64, 64, 64);
    } else {
        alert("You have insufficient Turn Units to perform this action.")
    }
}

function victahanaDefenseButton() {

    if (movesRemaining >= 2) {

        drawMap();

        victahanaDefense = 1;

        var ctx = document.getElementById("map").getContext("2d");

        var currentX = currentActive.xPos,
            currentY = currentActive.yPos;

        ctx.drawImage(highlights[0], currentX * 64, currentY * 64, 64, 64);
    } else {
        alert("You have insufficient Turn Units to perform this action.")
    }
}

function quxharneProtectButton() {

    if (movesRemaining >= 2) {

        drawMap();

        quxharneProtect = 1;

        var ctx = document.getElementById("map").getContext("2d");

        var currentX = currentActive.xPos,
            currentY = currentActive.yPos;

        ctx.drawImage(highlights[0], currentX * 64, currentY * 64, 64, 64);
    } else {
        alert("You have insufficient Turn Units to perform this action.")
    }
}

function quxharneHarmButton() {

    if (movesRemaining >= 2) {

        drawMap();

        quxharneHarm = 1;

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

function koboldDragonUnhinderedButton() {

    if (movesRemaining >= 2) {

        drawMap();

        koboldDragonUnhindered = 1;

        var ctx = document.getElementById("map").getContext("2d");

        var currentX = currentActive.xPos,
            currentY = currentActive.yPos;

        var leftX = currentX - 1,
            upY = currentY - 1,
            downY = currentY + 1;

        ctx.drawImage(highlights[0], currentX * 64, upY * 64, 64, 64);
        ctx.drawImage(highlights[1], leftX * 64, currentY * 64, 192, 64);
        ctx.drawImage(highlights[0], currentX * 64, downY * 64, 64, 64);
    } else {
        alert("You have insufficient Turn Units to perform this action.")
    }
}

function koboldDragonShieldButton() {

    if (movesRemaining >= 2) {

        drawMap();

        koboldDragonShield = 1;

        var ctx = document.getElementById("map").getContext("2d");

        var currentX = currentActive.xPos,
            currentY = currentActive.yPos;

        ctx.drawImage(highlights[0], currentX * 64, currentY * 64, 64, 64);
    } else {
        alert("You have insufficient Turn Units to perform this action.")
    }
}

function koboldSlingerSkirmishButton() {

    if (movesRemaining >= 3) {

        drawMap();

        koboldSlingerSkirmishing = 1;

        var ctx = document.getElementById("map").getContext("2d");

        var currentX = currentActive.xPos,
            currentY = currentActive.yPos;

        var leftX1 = currentX - 1,
            leftX2 = currentX - 2,
            leftX3 = currentX - 3,
            leftX4 = currentX - 4,
            leftX5 = currentX - 5,
            leftX6 = currentX - 6,
            upY1 = currentY - 1,
            upY2 = currentY - 2,
            upY3 = currentY - 3,
            upY4 = currentY - 4,
            upY5 = currentY - 5,
            upY6 = currentY - 6,
            downY1 = currentY + 1,
            downY2 = currentY + 2,
            downY3 = currentY + 3,
            downY4 = currentY + 4,
            downY5 = currentY + 5,
            downY6 = currentY + 6;


        ctx.drawImage(highlights[0], currentX * 64, upY6 * 64, 64, 64);
        ctx.drawImage(highlights[1], leftX1 * 64, upY5 * 64, 192, 64);
        ctx.drawImage(highlights[2], leftX2 * 64, upY4 * 64, 320, 64);
        ctx.drawImage(highlights[3], leftX3 * 64, upY3 * 64, 448, 64);
        ctx.drawImage(highlights[4], leftX4 * 64, upY2 * 64, 576, 64);
        ctx.drawImage(highlights[5], leftX5 * 64, upY1 * 64, 704, 64);
        ctx.drawImage(highlights[6], leftX6 * 64, currentY * 64, 832, 64);
        ctx.drawImage(highlights[5], leftX5 * 64, downY1 * 64, 704, 64);
        ctx.drawImage(highlights[4], leftX4 * 64, downY2 * 64, 576, 64);
        ctx.drawImage(highlights[3], leftX3 * 64, downY3 * 64, 448, 64);
        ctx.drawImage(highlights[2], leftX2 * 64, downY4 * 64, 320, 64);
        ctx.drawImage(highlights[1], leftX1 * 64, downY5 * 64, 192, 64);
        ctx.drawImage(highlights[0], currentX * 64, downY6 * 64, 64, 64);
    } else {
        alert("You have insufficient Turn Units to perform this action.")
    }
}

function koboldSlingerSlingButton() {

    if (movesRemaining >= 2) {

        drawMap();

        koboldSlingerSling = 1;

        var ctx = document.getElementById("map").getContext("2d");

        var currentX = currentActive.xPos,
            currentY = currentActive.yPos;

        var leftX1 = currentX - 1,
            leftX2 = currentX - 2,
            leftX3 = currentX - 3,
            leftX4 = currentX - 4,
            leftX5 = currentX - 5,
            leftX6 = currentX - 6,
            upY1 = currentY - 1,
            upY2 = currentY - 2,
            upY3 = currentY - 3,
            upY4 = currentY - 4,
            upY5 = currentY - 5,
            upY6 = currentY - 6,
            downY1 = currentY + 1,
            downY2 = currentY + 2,
            downY3 = currentY + 3,
            downY4 = currentY + 4,
            downY5 = currentY + 5,
            downY6 = currentY + 6;


        ctx.drawImage(highlights[0], currentX * 64, upY6 * 64, 64, 64);
        ctx.drawImage(highlights[1], leftX1 * 64, upY5 * 64, 192, 64);
        ctx.drawImage(highlights[2], leftX2 * 64, upY4 * 64, 320, 64);
        ctx.drawImage(highlights[3], leftX3 * 64, upY3 * 64, 448, 64);
        ctx.drawImage(highlights[4], leftX4 * 64, upY2 * 64, 576, 64);
        ctx.drawImage(highlights[5], leftX5 * 64, upY1 * 64, 704, 64);
        ctx.drawImage(highlights[6], leftX6 * 64, currentY * 64, 832, 64);
        ctx.drawImage(highlights[5], leftX5 * 64, downY1 * 64, 704, 64);
        ctx.drawImage(highlights[4], leftX4 * 64, downY2 * 64, 576, 64);
        ctx.drawImage(highlights[3], leftX3 * 64, downY3 * 64, 448, 64);
        ctx.drawImage(highlights[2], leftX2 * 64, downY4 * 64, 320, 64);
        ctx.drawImage(highlights[1], leftX1 * 64, downY5 * 64, 192, 64);
        ctx.drawImage(highlights[0], currentX * 64, downY6 * 64, 64, 64);
    } else {
        alert("You have insufficient Turn Units to perform this action.")
    }
}

function koboldMageMissileButton() {

    if (movesRemaining >= 2) {

        drawMap();

        koboldMageMissile = 1;

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
                turnUnitsUsed = 2;
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
                turnUnitsUsed = 2;
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
                turnUnitsUsed = 3;
                postActionUpdate();
            }
        }
    }
}

function stanvolmMageShield() {

    var currentX = currentActive.xPos,
        currentY = currentActive.yPos;

    if (xClick === currentX && yClick === currentY) {
        alert(currentActive.name);
        turnUnitsUsed = 2;
        postActionUpdate();
    }
}

function victahanaShieldBash() {

    var currentX = currentActive.xPos,
        currentY = currentActive.yPos;

    var leftX = currentX - 1,
        rightX = currentX + 1,
        upY = currentY - 1,
        downY = currentY + 1;

    for (var i = 0; i < len; i++) {
        if (xClick === currentX && yClick === upY || xClick === currentX && yClick === downY ||
            xClick === leftX && yClick === currentY || xClick === rightX && yClick === currentY) {
            if (currentX === xClick && currentY === yClick) {

            } else if (initiative[i].xPos === xClick && initiative[i].yPos === yClick) {
                alert(initiative[i].name);
                turnUnitsUsed = 2;
                postActionUpdate();
            }
        }
    }
}

function victahanaStoicDefense() {

    var currentX = currentActive.xPos,
        currentY = currentActive.yPos;

    if (xClick === currentX && yClick === currentY) {
        alert(currentActive.name);
        turnUnitsUsed = 2;
        postActionUpdate();
    }
}

function quxharneSpiritsProtect() {

    var currentX = currentActive.xPos,
        currentY = currentActive.yPos;

    if (xClick === currentX && yClick === currentY) {
        alert(currentActive.name);
        turnUnitsUsed = 2;
        postActionUpdate();
    }
}

function quxharneSpiritsHarm() {

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
                turnUnitsUsed = 2;
                postActionUpdate();
            }
        }
    }
}

function koboldDragonUnhinderedSlash() {

    var currentX = currentActive.xPos,
        currentY = currentActive.yPos;

    var leftX = currentX - 1,
        rightX = currentX + 1,
        upY = currentY - 1,
        downY = currentY + 1;

    for (var i = 0; i < len; i++) {
        if (xClick === currentX && yClick === upY || xClick === currentX && yClick === downY ||
            xClick === leftX && yClick === currentY || xClick === rightX && yClick === currentY) {
            if (currentX === xClick && currentY === yClick) {

            } else if (initiative[i].xPos === xClick && initiative[i].yPos === yClick) {
                alert(initiative[i].name);
                turnUnitsUsed = 2;
                postActionUpdate();
            }
        }
    }
}

function koboldDragonShieldUp() {

    var currentX = currentActive.xPos,
        currentY = currentActive.yPos;

    if (xClick === currentX && yClick === currentY) {
        alert(currentActive.name);
        turnUnitsUsed = 2;
        postActionUpdate();
    }
}

function koboldSlingerSkirmish() {

    var currentX = currentActive.xPos,
        currentY = currentActive.yPos;

    var leftX1 = currentX - 1,
        leftX2 = currentX - 2,
        leftX3 = currentX - 3,
        leftX4 = currentX - 4,
        leftX5 = currentX - 5,
        leftX6 = currentX - 6,
        rightX1 = currentX + 1,
        rightX2 = currentX + 2,
        rightX3 = currentX + 3,
        rightX4 = currentX + 4,
        rightX5 = currentX + 5,
        rightX6 = currentX + 6,
        upY1 = currentY - 1,
        upY2 = currentY - 2,
        upY3 = currentY - 3,
        upY4 = currentY - 4,
        upY5 = currentY - 5,
        upY6 = currentY - 6,
        downY1 = currentY + 1,
        downY2 = currentY + 2,
        downY3 = currentY + 3,
        downY4 = currentY + 4,
        downY5 = currentY + 5,
        downY6 = currentY + 6;

    for (var i = 0; i < len; i++) {
        if (xClick === currentX && yClick >= upY6 && yClick <= downY6 ||
            xClick >= leftX1 && xClick <= rightX1 && yClick === upY5 ||
            xClick >= leftX1 && xClick <= rightX1 && yClick === downY5 ||
            xClick >= leftX2 && xClick <= rightX2 && yClick === upY4 ||
            xClick >= leftX2 && xClick <= rightX2 && yClick === downY4 ||
            xClick >= leftX3 && xClick <= rightX3 && yClick === upY3 ||
            xClick >= leftX3 && xClick <= rightX3 && yClick === downY3 ||
            xClick >= leftX4 && xClick <= rightX4 && yClick === upY2 ||
            xClick >= leftX4 && xClick <= rightX4 && yClick === downY2 ||
            xClick >= leftX5 && xClick <= rightX5 && yClick === upY1 ||
            xClick >= leftX5 && xClick <= rightX5 && yClick === downY1 ||
            xClick >= leftX6 && xClick <= rightX6 && yClick === currentY)
            if (currentX === xClick && currentY === yClick) {

            } else if (initiative[i].xPos === xClick && initiative[i].yPos === yClick) {
                alert(initiative[i].name);
                turnUnitsUsed = 3;
                postActionUpdate();
            }
    }
}

function koboldSlingerSlingShot() {

    var currentX = currentActive.xPos,
        currentY = currentActive.yPos;

    var leftX1 = currentX - 1,
        leftX2 = currentX - 2,
        leftX3 = currentX - 3,
        leftX4 = currentX - 4,
        leftX5 = currentX - 5,
        leftX6 = currentX - 6,
        rightX1 = currentX + 1,
        rightX2 = currentX + 2,
        rightX3 = currentX + 3,
        rightX4 = currentX + 4,
        rightX5 = currentX + 5,
        rightX6 = currentX + 6,
        upY1 = currentY - 1,
        upY2 = currentY - 2,
        upY3 = currentY - 3,
        upY4 = currentY - 4,
        upY5 = currentY - 5,
        upY6 = currentY - 6,
        downY1 = currentY + 1,
        downY2 = currentY + 2,
        downY3 = currentY + 3,
        downY4 = currentY + 4,
        downY5 = currentY + 5,
        downY6 = currentY + 6;

    for (var i = 0; i < len; i++) {
        if (xClick === currentX && yClick >= upY6 && yClick <= downY6 ||
            xClick >= leftX1 && xClick <= rightX1 && yClick === upY5 ||
            xClick >= leftX1 && xClick <= rightX1 && yClick === downY5 ||
            xClick >= leftX2 && xClick <= rightX2 && yClick === upY4 ||
            xClick >= leftX2 && xClick <= rightX2 && yClick === downY4 ||
            xClick >= leftX3 && xClick <= rightX3 && yClick === upY3 ||
            xClick >= leftX3 && xClick <= rightX3 && yClick === downY3 ||
            xClick >= leftX4 && xClick <= rightX4 && yClick === upY2 ||
            xClick >= leftX4 && xClick <= rightX4 && yClick === downY2 ||
            xClick >= leftX5 && xClick <= rightX5 && yClick === upY1 ||
            xClick >= leftX5 && xClick <= rightX5 && yClick === downY1 ||
            xClick >= leftX6 && xClick <= rightX6 && yClick === currentY)
            if (currentX === xClick && currentY === yClick) {

            } else if (initiative[i].xPos === xClick && initiative[i].yPos === yClick) {
                alert(initiative[i].name);
                turnUnitsUsed = 2;
                postActionUpdate();
            }
    }
}

function koboldMageMagicMissile() {

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
                turnUnitsUsed = 3;
                postActionUpdate();
            }
        }
    }
}