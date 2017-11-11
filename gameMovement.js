// The checkCollision functions check which tile the character is on AFTER they move, and if it is a collision tile,
// moves them back to the tile they just left (so it appears as if they haven't moved.)
function checkCollisionUp() {

    if (mapGrid[playerOneX][playerOneY] === 5) {
        //console.log("Ended movement on "+playerOneX+","+playerOneY);
        playerOneX++;
        //console.log("Moved back to "+playerOneX+","+playerOneY)
    }
}

function checkCollisionDown() {
    if (mapGrid[playerOneX][playerOneY] === 5) {
        playerOneX--;
    }
}

function checkCollisionLeft() {
    if (mapGrid[playerOneX][playerOneY] === 5) {
        playerOneY++;
    }
}

function checkCollisionRight() {
    if (mapGrid[playerOneX][playerOneY] === 5) {
        playerOneY--;
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
                if (playerOneX > 0) {
                    playerOneX--;
                    checkCollisionUp();
                    break;
                } else {
                    break;
                }
            case 83:
                if (playerOneX < 9) {
                    playerOneX++;
                    checkCollisionDown();
                    break;
                } else {
                    break;
                }
            case 65:
                if (playerOneY > 0) {
                    playerOneY--;
                    checkCollisionLeft();
                    break;
                } else {
                    break;
                }
            case 68:
                if (playerOneY < 17) {
                    playerOneY++;
                    checkCollisionRight();
                    break;
                } else {
                    break;
                }
        }
    }
    drawMap()
});