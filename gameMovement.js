// The checkCollision functions check which tile the character is on AFTER they move, and if it is a collision tile,
// moves them back to the tile they just left (so it appears as if they haven't moved.)
function checkCollisionUp() {
    if (mapGrid[everard.xPos][everard.yPos] === 5) {
        console.log("Move to tile " + everard.xPos + "," + everard.yPos);
        everard.xPos++;
        console.log("Returned to tile " + everard.xPos + "," + everard.yPos)
    }
}

function checkCollisionDown() {
    if (mapGrid[everard.xPos][everard.yPos] === 5) {
        everard.xPos--;
    }
}

function checkCollisionLeft() {
    if (mapGrid[everard.xPos][everard.yPos] === 5) {
        everard.yPos++;
    }
}

function checkCollisionRight() {
    if (mapGrid[everard.xPos][everard.yPos] === 5) {
        everard.yPos--;
    }
}

// looks for a keyup event
window.addEventListener("keyup", function(event) {
// checks which player's turn it is, and moves the appropriate sprite
    if (playerTurn === 1) {
        //console.log(event.keyCode + "(Player 1)");
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
    }
    drawMap()
});