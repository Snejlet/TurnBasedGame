// The checkCollision functions check which tile the character is on AFTER they move, and if it is a collision tile,
// moves them back to the tile they just left (so it appears as if they haven't moved.)
function checkCollisionUp() {
    if (currentActive === "Everard") {
        if (mapGrid[everard.xPos][everard.yPos] === 5) {
            console.log("Move to tile " + everard.xPos + "," + everard.yPos);
            everard.xPos++;
            console.log("Returned to tile " + everard.xPos + "," + everard.yPos)
        }
    } else if (currentActive === "Stanvolm") {
        if (mapGrid[stanvolm.xPos][stanvolm.yPos] === 5) {
            stanvolm.xPos++;
        }
    } else if (currentActive === "Victahana") {
        if (mapGrid[victahana.xPos][victahana.yPos] === 5) {
            victahana.xPos++;
        }
    } else if (currentActive === "Quxharne") {
        if (mapGrid[quxharne.xPos][quxharne.yPos] === 5) {
            quxharne.xPos++;
        }
    } else if (currentActive === "Goblin Warrior") {
        if (mapGrid[goblinWarrior.xPos][goblinWarrior.yPos] === 5) {
            goblinWarrior.xPos++;
        }
    } else if (currentActive === "Kobold Dragonshield") {
        if (mapGrid[koboldDragonshield.xPos][koboldDragonshield.yPos] === 5) {
            koboldDragonshield.xPos++;
        }
    } else if (currentActive === "Kobold Slinger") {
        if (mapGrid[koboldSlinger.xPos][koboldSlinger.yPos] === 5) {
            koboldSlinger.xPos++;
        }
    } else if (currentActive === "Kobold Mage") {
        if (mapGrid[koboldMage.xPos][koboldMage.yPos] === 5) {
            koboldMage.xPos++;
        }
    }
}

function checkCollisionDown() {
    if (currentActive === "Everard") {
        if (mapGrid[everard.xPos][everard.yPos] === 5) {
            everard.xPos--;
        }
    } else if (currentActive === "Stanvolm") {
        if (mapGrid[stanvolm.xPos][stanvolm.yPos] === 5) {
            stanvolm.xPos--;
        }
    } else if (currentActive === "Victahana") {
        if (mapGrid[victahana.xPos][victahana.yPos] === 5) {
            victahana.xPos--;
        }
    } else if (currentActive === "Quxharne") {
        if (mapGrid[quxharne.xPos][quxharne.yPos] === 5) {
            quxharne.xPos--;
        }
    } else if (currentActive === "Goblin Warrior") {
        if (mapGrid[goblinWarrior.xPos][goblinWarrior.yPos] === 5) {
            goblinWarrior.xPos--;
        }
    } else if (currentActive === "Kobold Dragonshield") {
        if (mapGrid[koboldDragonshield.xPos][koboldDragonshield.yPos] === 5) {
            koboldDragonshield.xPos--;
        }
    } else if (currentActive === "Kobold Slinger") {
        if (mapGrid[koboldSlinger.xPos][koboldSlinger.yPos] === 5) {
            koboldSlinger.xPos--;
        }
    } else if (currentActive === "Kobold Mage") {
        if (mapGrid[koboldMage.xPos][koboldMage.yPos] === 5) {
            koboldMage.xPos--;
        }
    }
}

function checkCollisionLeft() {
    if (currentActive === "Everard") {
        if (mapGrid[everard.xPos][everard.yPos] === 5) {
            everard.yPos++;
        }
    } else if (currentActive === "Stanvolm") {
        if (mapGrid[stanvolm.xPos][stanvolm.yPos] === 5) {
            stanvolm.yPos++;
        }
    } else if (currentActive === "Victahana") {
        if (mapGrid[victahana.xPos][victahana.yPos] === 5) {
            victahana.yPos++;
        }
    } else if (currentActive === "Quxharne") {
        if (mapGrid[quxharne.xPos][quxharne.yPos] === 5) {
            quxharne.yPos++;
        }
    } else if (currentActive === "Goblin Warrior") {
        if (mapGrid[goblinWarrior.xPos][goblinWarrior.yPos] === 5) {
            goblinWarrior.yPos++;
        }
    } else if (currentActive === "Kobold Dragonshield") {
        if (mapGrid[koboldDragonshield.xPos][koboldDragonshield.yPos] === 5) {
            koboldDragonshield.yPos++;
        }
    } else if (currentActive === "Kobold Slinger") {
        if (mapGrid[koboldSlinger.xPos][koboldSlinger.yPos] === 5) {
            koboldSlinger.yPos++;
        }
    } else if (currentActive === "Kobold Mage") {
        if (mapGrid[koboldMage.xPos][koboldMage.yPos] === 5) {
            koboldMage.yPos++;
        }
    }
}

function checkCollisionRight() {
    if (currentActive === "Everard") {
        if (mapGrid[everard.xPos][everard.yPos] === 5) {
            everard.yPos--;
        }
    } else if (currentActive === "Stanvolm") {
        if (mapGrid[stanvolm.xPos][stanvolm.yPos] === 5) {
            stanvolm.yPos--;
        }
    } else if (currentActive === "Victahana") {
        if (mapGrid[victahana.xPos][victahana.yPos] === 5) {
            victahana.yPos--;
        }
    } else if (currentActive === "Quxharne") {
        if (mapGrid[quxharne.xPos][quxharne.yPos] === 5) {
            quxharne.yPos--;
        }
    } else if (currentActive === "Goblin Warrior") {
        if (mapGrid[goblinWarrior.xPos][goblinWarrior.yPos] === 5) {
            goblinWarrior.yPos--;
        }
    } else if (currentActive === "Kobold Dragonshield") {
        if (mapGrid[koboldDragonshield.xPos][koboldDragonshield.yPos] === 5) {
            koboldDragonshield.yPos--;
        }
    } else if (currentActive === "Kobold Slinger") {
        if (mapGrid[koboldSlinger.xPos][koboldSlinger.yPos] === 5) {
            koboldSlinger.yPos--;
        }
    } else if (currentActive === "Kobold Mage") {
        if (mapGrid[koboldMage.xPos][koboldMage.yPos] === 5) {
            koboldMage.yPos--;
        }
    }
}

// looks for a keyup event
window.addEventListener("keyup", function(event) {
// checks which player's turn it is, and moves the appropriate sprite
        //console.log(event.keyCode + "(Player 1)");
    if (currentActive === "Everard") {
        switch (event.keyCode) {
            case 87:
                // checks if the player is about to move off the map. If not: allows move. if so: prevents move.
                if (everard.xPos > 0) {
                    everard.xPos--;
                    checkCollisionUp();
                    break;
                } else {
                    break;
                }
            case 83:
                if (everard.xPos < 9) {
                    everard.xPos++;
                    checkCollisionDown();
                    break;
                } else {
                    break;
                }
            case 65:
                if (everard.yPos > 0) {
                    everard.yPos--;
                    checkCollisionLeft();
                    break;
                } else {
                    break;
                }
            case 68:
                if (everard.yPos < 17) {
                    everard.yPos++;
                    checkCollisionRight();
                    break;
                } else {
                    break;
                }
        }
    } else if (currentActive === "Stanvolm") {
        switch (event.keyCode) {
            case 87:
                // checks if the player is about to move off the map. If not: allows move. if so: prevents move.
                if (stanvolm.xPos > 0) {
                    stanvolm.xPos--;
                    checkCollisionUp();
                    break;
                } else {
                    break;
                }
            case 83:
                if (stanvolm.xPos < 9) {
                    stanvolm.xPos++;
                    checkCollisionDown();
                    break;
                } else {
                    break;
                }
            case 65:
                if (stanvolm.yPos > 0) {
                    stanvolm.yPos--;
                    checkCollisionLeft();
                    break;
                } else {
                    break;
                }
            case 68:
                if (stanvolm.yPos < 17) {
                    stanvolm.yPos++;
                    checkCollisionRight();
                    break;
                } else {
                    break;
                }
        }
    } else if (currentActive === "Victahana") {
        switch (event.keyCode) {
            case 87:
                // checks if the player is about to move off the map. If not: allows move. if so: prevents move.
                if (victahana.xPos > 0) {
                    victahana.xPos--;
                    checkCollisionUp();
                    break;
                } else {
                    break;
                }
            case 83:
                if (victahana.xPos < 9) {
                    victahana.xPos++;
                    checkCollisionDown();
                    break;
                } else {
                    break;
                }
            case 65:
                if (victahana.yPos > 0) {
                    victahana.yPos--;
                    checkCollisionLeft();
                    break;
                } else {
                    break;
                }
            case 68:
                if (victahana.yPos < 17) {
                    victahana.yPos++;
                    checkCollisionRight();
                    break;
                } else {
                    break;
                }
        }
    } else if (currentActive === "Quxharne") {
        switch(event.keyCode) {
            case 87:
                if (quxharne.xPos > 0) {
                    quxharne.xPos--;
                    checkCollisionUp();
                    break;
                } else {
                    break;
                }
            case 83:
                if (quxharne.xPos < 9) {
                    quxharne.xPos++;
                    checkCollisionDown();
                    break;
                } else {
                    break;
                }
            case 65:
                if (quxharne.yPos > 0) {
                    quxharne.yPos--;
                    checkCollisionLeft();
                    break;
                } else {
                    break;
                }
            case 68:
                if (quxharne.yPos < 17) {
                    quxharne.yPos++;
                    checkCollisionRight();
                    break;
                } else {
                    break;
                }
        }
    } else if (currentActive === "Goblin Warrior") {
        switch(event.keyCode) {
            case 87:
                if (goblinWarrior.xPos > 0) {
                    goblinWarrior.xPos--;
                    checkCollisionUp();
                    break;
                } else {
                    break;
                }
            case 83:
                if (goblinWarrior.xPos < 9) {
                    goblinWarrior.xPos++;
                    checkCollisionDown();
                    break;
                } else {
                    break;
                }
            case 65:
                if (goblinWarrior.yPos > 0) {
                    goblinWarrior.yPos--;
                    checkCollisionLeft();
                    break;
                } else {
                    break;
                }
            case 68:
                if (goblinWarrior.yPos < 17) {
                    goblinWarrior.yPos++;
                    checkCollisionRight();
                    break;
                } else {
                    break;
                }
        }
    } else if (currentActive === "Kobold Dragonshield") {
        switch(event.keyCode) {
            case 87:
                if (koboldDragonshield.xPos > 0) {
                    koboldDragonshield.xPos--;
                    checkCollisionUp();
                    break;
                } else {
                    break;
                }
            case 83:
                if (koboldDragonshield.xPos < 9) {
                    koboldDragonshield.xPos++;
                    checkCollisionDown();
                    break;
                } else {
                    break;
                }
            case 65:
                if (koboldDragonshield.yPos > 0) {
                    koboldDragonshield.yPos--;
                    checkCollisionLeft();
                    break;
                } else {
                    break;
                }
            case 68:
                if (koboldDragonshield.yPos < 17) {
                    koboldDragonshield.yPos++;
                    checkCollisionRight();
                    break;
                } else {
                    break;
                }
        }
    } else if (currentActive === "Kobold Slinger") {
        switch(event.keyCode) {
            case 87:
                if (koboldSlinger.xPos > 0) {
                    koboldSlinger.xPos--;
                    checkCollisionUp();
                    break;
                } else {
                    break;
                }
            case 83:
                if (koboldSlinger.xPos < 9) {
                    koboldSlinger.xPos++;
                    checkCollisionDown();
                    break;
                } else {
                    break;
                }
            case 65:
                if (koboldSlinger.yPos > 0) {
                    koboldSlinger.yPos--;
                    checkCollisionLeft();
                    break;
                } else {
                    break;
                }
            case 68:
                if (koboldSlinger.yPos < 17) {
                    koboldSlinger.yPos++;
                    checkCollisionRight();
                    break;
                } else {
                    break;
                }
        }
    } else if (currentActive === "Kobold Mage") {
        switch(event.keyCode) {
            case 87:
                if (koboldMage.xPos > 0) {
                    koboldMage.xPos--;
                    checkCollisionUp();
                    break;
                } else {
                    break;
                }
            case 83:
                if (koboldMage.xPos < 9) {
                    koboldMage.xPos++;
                    checkCollisionDown();
                    break;
                } else {
                    break;
                }
            case 65:
                if (koboldMage.yPos > 0) {
                    koboldMage.yPos--;
                    checkCollisionLeft();
                    break;
                } else {
                    break;
                }
            case 68:
                if (koboldMage.yPos < 17) {
                    koboldMage.yPos++;
                    checkCollisionRight();
                    break;
                } else {
                    break;
                }
        }
    }
    drawMap()
});