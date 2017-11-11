function checkCollisionUp() {

    if (mapGrid[playerOneX][playerOneY] === 5) {
        playerOneX++;
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

window.addEventListener("keyup", function(event) {

    if (playerTurn === 1) {
        console.log(event.keyCode + "(Player 1)");
        switch (event.keyCode) {
            case 87:
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