// length of initiative[].
var len = initiative.length;

// amount to change the movesRemaining by when an ability is used.
var turnUnitsUsed = 0;

// holds the actor targeted by the most recently used ability
var targeted;

// used as a crude way of tracking if the everard specific ability buttons were clicked (similar below for other chars)
var everardStab = 0,
    everardShoot = 0,
    everardFired = 0,
    everardReload = 0;

var stanvolmMissile = 0,
    stanvolmShield = 0,
    stanvolmShielded = 0;

var victahanaShield = 0,
    victahanaDefense = 0,
    victahanaDefended = 0;

var quxharneProtect = 0,
    quxharneProtected = 0;
    quxharneHarm = 0;

var koboldDragonUnhindered = 0,
    koboldDragonArmourDown = 0;
    koboldDragonShield = 0;

var koboldSlingerSkirmishing = 0,
    koboldSlingerSling = 0;

var koboldMageMissile = 0,
    koboldMageDraconic = 0,
    koboldMageIncanted = 0;

var goblinWarriorGods = 0,
    goblinWarriorBlind = 0;

function postActionUpdate() {

    //sets stab back to zero to stop this function from being called again unless the button has been clicked first.
    everardStab = 0;
    everardShoot = 0;
    everardReload = 0;
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
    koboldMageMissile = 0;
    koboldMageDraconic = 0;
    goblinWarriorGods = 0;
    movesRemaining = movesRemaining - turnUnitsUsed;
    document.getElementById("uiMovesRemaining").innerHTML = "Turn Units: "+movesRemaining+"/"+ currentActive.tu;
    drawMap();
    highlightRemaining();
    turnUnitsUsed = 0;
}

function hpUpdate() {

    if (targeted.name === "Everard") {
        document.getElementById("everardHp").innerHTML = "HP: " + everard.hpcur + "/" + everard.hpmax;
        document.getElementById("everardArmour").innerHTML = "Armour: " + everard.arm;
    } else if (targeted.name === "Stanvolm") {
        document.getElementById("stanvolmHp").innerHTML = "HP: " + stanvolm.hpcur + "/" + stanvolm.hpmax;
        document.getElementById("stanvolmArmour").innerHTML = "Armour: " + stanvolm.arm;
    } else if (targeted.name === "Victahana") {
        document.getElementById("victahanaHp").innerHTML = "HP: " + victahana.hpcur + "/" + victahana.hpmax;
        document.getElementById("victahanaArmour").innerHTML = "Armour: " + victahana.arm;
    } else if (targeted.name === "Quxharne") {
        document.getElementById("quxharneHp").innerHTML = "HP: " + quxharne.hpcur + "/" + quxharne.hpmax;
        document.getElementById("quxharneArmour").innerHTML = "Armour: " + quxharne.arm;
    } else if (targeted.name === "Goblin Warrior") {
        document.getElementById("goblinWarriorHp").innerHTML = "HP: " + goblinWarrior.hpcur + "/" + goblinWarrior.hpmax;
        document.getElementById("goblinWarriorArmour").innerHTML = "Armour: " + goblinWarrior.arm;
    } else if (targeted.name === "Kobold Dragonshield") {
        document.getElementById("koboldDragonshieldHp").innerHTML = "HP: " + koboldDragonshield.hpcur + "/" + koboldDragonshield.hpmax;
        document.getElementById("koboldDragonshieldArmour").innerHTML = "Armour: " + koboldDragonshield.arm;
    } else if (targeted.name === "Kobold Slinger") {
        document.getElementById("koboldSlingerHp").innerHTML = "HP: " + koboldSlinger.hpcur + "/" + koboldSlinger.hpmax;
        document.getElementById("koboldSlingerArmour").innerHTML = "Armour: " + koboldSlinger.arm;
    } else if (targeted.name === "Kobold Mage") {
        alert(koboldMage.hpcur);
        document.getElementById("koboldMageHp").innerHTMl = "HP: " + koboldMage.hpcur + "/" + koboldMage.hpmax;
        document.getElementById("koboldMageArmour").innerHTML = "Armour: " + koboldMage.arm;
    }

    targeted = "";
}

function knockback() {

    if (targeted.xPos === currentActive.xPos + 1) {
        targeted.xPos++;
        targeted.xPos++;
        drawMap();
    }
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
        everardFired = 1;

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

function everardReloadButton() {

    if (movesRemaining >= 4) {

        drawMap();

        everardReload = 1;

        var ctx = document.getElementById("map").getContext("2d");

        var currentX = currentActive.xPos,
            currentY = currentActive.yPos;

        ctx.drawImage(highlights[0], currentX * 64, currentY * 64, 64, 64);
    } else {
        alert("You have insufficient Turn Units to perform this action")
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

    if (stanvolmShielded === 0) {
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
    } else if (stanvolmShielded === 1) {
        alert("You have already cast that on yourself");
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

    if (quxharneProtected === 0) {
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
    } else if (quxharneProtected === 1) {
        alert("You have already cast that on yourself");
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

    if (movesRemaining >= 3) {

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

function koboldMageDraconicButton() {

    if (koboldMageIncanted === 0) {
        if (movesRemaining >= 2) {

            drawMap();

            koboldMageDraconic = 1;

            var ctx = document.getElementById("map").getContext("2d");

            var currentX = currentActive.xPos,
                currentY = currentActive.yPos;

            ctx.drawImage(highlights[0], currentX * 64, currentY * 64, 64, 64);
        }
    } else if (koboldMageIncanted === 1) {
        alert("You have already cast that on yourself.")
    }
}

function goblinWarriorGodsButton() {

    if (movesRemaining >= 4) {

        drawMap();

        goblinWarriorGods = 1;

        var ctx = document.getElementById("map").getContext("2d");

        var currentX = currentActive.xPos,
            currentY = currentActive.yPos;

        var leftX1 = currentX - 1,
            upY1 = currentY - 1,
            downY1 = currentY + 1;

        ctx.drawImage(highlights[0], currentX * 64, upY1 * 64, 64, 64);
        ctx.drawImage(highlights[1], leftX1 * 64, currentY * 64, 192, 64);
        ctx.drawImage(highlights[0], currentX * 64, downY1 * 64, 64, 64);
    }
}

function goblinWarriorBlindButton() {

    if (movesRemaining >= 2) {

        drawMap();

        goblinWarriorBlind = 1;

        var ctx = document.getElementById("map").getContext("2d");

        var currentX = currentActive.xPos,
            currentY = currentActive.yPos;

        var leftX1 = currentX - 1,
            leftX2 = currentX - 2,
            leftX3 = currentX - 3,
            leftX4 = currentX - 4,
            upY1 = currentY - 1,
            upY2 = currentY - 2,
            upY3 = currentY - 3,
            upY4 = currentY - 4,
            downY1 = currentY + 1,
            downY2 = currentY + 2,
            downY3 = currentY + 3,
            downY4 = currentY + 4;

        ctx.drawImage(highlights[0], currentX * 64, upY4 * 64, 64, 64);
        ctx.drawImage(highlights[1], leftX1 * 64, upY3 * 64, 192, 64);
        ctx.drawImage(highlights[2], leftX2 * 64, upY2 * 64, 320, 64);
        ctx.drawImage(highlights[3], leftX3 * 64, upY1 * 64, 448, 64);
        ctx.drawImage(highlights[4], leftX4 * 64, currentY * 64, 576, 64);
        ctx.drawImage(highlights[3], leftX3 * 64, downY1 * 64, 448, 64);
        ctx.drawImage(highlights[2], leftX2 * 64, downY2 * 64, 320, 64);
        ctx.drawImage(highlights[1], leftX1 * 64, downY3 * 64, 192, 64);
        ctx.drawImage(highlights[0], currentX * 64, downY4 * 64, 64, 64);
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
                initiative[i].hpcur = initiative[i].hpcur + initiative[i].arm - 2;
                targeted = initiative[i];
                turnUnitsUsed = 2;
                postActionUpdate();
                hpUpdate();
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
                var armour = initiative[i].arm - 1;
                if (armour < 0) {armour = 0}
                initiative[i].hpcur = initiative[i].hpcur + armour - 2;
                targeted = initiative[i];
                turnUnitsUsed = 2;
                postActionUpdate();
                hpUpdate();
                everardFired = 1;
            }
        }
    }
}

function everardReloadCrossbow() {

    if (everardFired === 1) {
        var currentX = currentActive.xPos,
            currentY = currentActive.yPos;

        if (currentX === xClick && currentY === yClick) {
            everardFired = 0;
            turnUnitsUsed = 4;
            postActionUpdate();
        }
    } else {
        alert("You haven't fired the crossbow.");
        postActionUpdate();
    }
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
                var armour = initiative[i].arm - 3;
                if (armour < 0) {armour = 0}
                initiative[i].hpcur = initiative[i].hpcur + armour - 1;
                targeted = initiative[i];
                turnUnitsUsed = 3;
                postActionUpdate();
                hpUpdate();
            }
        }
    }
}

function stanvolmMageShield() {

    var currentX = currentActive.xPos,
        currentY = currentActive.yPos;

    if (xClick === currentX && yClick === currentY) {
        stanvolm.arm = stanvolm.arm + 1;
        stanvolmShielded = 1;
        targeted = stanvolm;
        turnUnitsUsed = 2;
        postActionUpdate();
        hpUpdate();
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
                initiative[i].hpcur = initiative[i].hpcur + initiative[i].arm - 1;
                targeted = initiative[i];
                turnUnitsUsed = 2;
                knockback();
                postActionUpdate();
                hpUpdate();
            }
        }
    }
}

function victahanaStoicDefense() {

    var currentX = currentActive.xPos,
        currentY = currentActive.yPos;

    if (xClick === currentX && yClick === currentY) {
        victahana.arm = victahana.arm + 1;
        targeted = victahana;
        turnUnitsUsed = 2;
        victahanaDefended = 1;
        postActionUpdate();
        hpUpdate();
        // go to gameTurn line 66 for update.
    }
}

function quxharneSpiritsProtect() {

    var currentX = currentActive.xPos,
        currentY = currentActive.yPos;

    if (xClick === currentX && yClick === currentY) {
        quxharne.arm = quxharne.arm + 1;
        quxharneProtected = 1;
        targeted = quxharne;
        turnUnitsUsed = 2;
        postActionUpdate();
        hpUpdate();
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
                var armour = initiative[i].arm - 1;
                if (armour < 0) {armour = 0}
                initiative[i].hpcur = initiative[i].hpcur + armour - 1;
                initiative[i].arm--;
                targeted = initiative[i];
                turnUnitsUsed = 3;
                postActionUpdate();
                hpUpdate();
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
                if (koboldDragonArmourDown === 0) {
                    koboldDragonshield.arm = 0;
                    document.getElementById("koboldDragonshieldArmour").innerHTML = "Armour: " + koboldDragonshield.arm;
                    koboldDragonArmourDown = 1;}
                initiative[i].hpcur = initiative[i].hpcur + initiative[i].arm - 4;
                targeted = initiative[i];
                turnUnitsUsed = 3;
                postActionUpdate();
                hpUpdate();
            }
        }
    }
}

function koboldDragonShieldUp() {

    var currentX = currentActive.xPos,
        currentY = currentActive.yPos;

    if (xClick === currentX && yClick === currentY) {
        if (koboldDragonArmourDown === 1) {
            koboldDragonshield.arm = 2;
            document.getElementById("koboldDragonshieldArmour").innerHTML = "Armour: " + koboldDragonshield.arm;
            koboldDragonArmourDown = 0;
        }
        targeted = koboldDragonshield;
        turnUnitsUsed = 2;
        postActionUpdate();
        hpUpdate();
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
                initiative[i].hpcur = initiative[i].hpcur - 1;
                targeted = initiative[i];
                turnUnitsUsed = 3;
                postActionUpdate();
                hpUpdate();
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
                initiative[i].hpcur = initiative[i].hpcur + initiative[i].arm - 2;
                targeted = initiative[i];
                turnUnitsUsed = 2;
                postActionUpdate();
                hpUpdate();
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
                var armour = initiative[i].arm - 3;
                if (armour < 0) {armour = 0}
                initiative[i].hpcur = initiative[i].hpcur + armour - 1;
                targeted = initiative[i];
                turnUnitsUsed = 3;
                postActionUpdate();
                hpUpdate();
            }
        }
    }
}

function koboldMageDraconicIncantation() {

    var currentX = currentActive.xPos,
        currentY = currentActive.yPos;

    if (xClick === currentX && yClick === currentY) {
        koboldMage.tu++;
        targeted = koboldMage;
        turnUnitsUsed = 2;
        koboldMageIncanted = 1;
        postActionUpdate();
        hpUpdate();
    }
}

function goblinWarriorTheGodsAwaitMe() {

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
                initiative[i].arm--;
                if (initiative[i].arm < 0) {initiative[i].arm = 0}
                initiative[i].hpcur = initiative[i].hpcur + initiative[i].arm - 4;
                goblinWarrior.arm -=2;
                if (goblinWarrior.arm < 0) {goblinWarrior.arm = 0}
                document.getElementById("goblinWarriorArmour").innerHTML = "Armour: " + goblinWarrior.arm;
                targeted = initiative[i];
                turnUnitsUsed = 4;
                postActionUpdate();
                hpUpdate();
            }
        }
    }
}

function goblinWarriorBlindCharge() {

    var currentX = currentActive.xPos,
        currentY = currentActive.yPos;

    var leftX1 = currentX - 1,
        leftX2 = currentX - 2,
        leftX3 = currentX - 3,
        leftX4 = currentX - 4,
        rightX1 = currentX + 1,
        rightX2 = currentX + 2,
        rightX3 = currentX + 3,
        rightX4 = currentX + 4,
        upY1 = currentY - 1,
        upY2 = currentY - 2,
        upY3 = currentY - 3,
        upY4 = currentY - 4,
        downY1 = currentY + 1,
        downY2 = currentY + 2,
        downY3 = currentY + 3,
        downY4 = currentY + 4;



    for (var i = 0; i < len; i++) {
        if (xClick === currentX && yClick === upY4 ||
            xClick === currentX && yClick === downY4||
            xClick >= leftX1 && xClick <= rightX1 && yClick === upY3||
            xClick >= leftX1 && xClick <= rightX1 && yClick === downY3||
            xClick >= leftX2 && xClick <= rightX2 && yClick === upY2||
            xClick >= leftX2 && xClick <= rightX2 && yClick === downY2||
            xClick >= leftX3 && xClick <= rightX3 && yClick === upY1||
            xClick >= leftX3 && xClick <= rightX3 && yClick === downY1||
            xClick >= leftX4 && xClick <= rightX4 && yClick === currentY) {
            if (currentX === xClick && currentY === yClick) {

            } else if (initiative[i].xPos === xClick && initiative[i].yPos === yClick) {

                var ctx = document.getElementById("map").getContext("2d");

                var targetX = initiative[i].xPos,
                    targetY = initiative[i].yPos;

                var targetLeftX = targetX - 1,
                    targetRightX = targetX + 1,
                    targetUpY = targetY - 1,
                    targetDownY = targetY + 1;

                if (initiative[i].xPos < currentX && initiative[i].yPos === currentY) {
                } else if (initiative[i].xPos < currentX && initiative[i].yPos > currentY) {
                    drawMap();
                    ctx.drawImage(highlights[0], targetRightX * 64, targetY * 64, 64, 64);
                    ctx.drawImage(highlights[0], targetX * 64, targetUpY * 64, 64, 64);
                    if (targetX < xClick) {
                        alert("Well, the click is working");
                    }
                }
            }
        }
    }
}