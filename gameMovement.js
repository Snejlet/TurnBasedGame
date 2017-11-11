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
    }
    drawMap()
});