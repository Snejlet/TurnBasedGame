// stores the maximum movement value for the character
var movesRemaining;

// stores the length of the actorArray[]. Saves every function and check having to check that, which should aid
// performance. Need to check if this will update when something is removed from the array at a later date.
var actLen = actorArray.length;

// The checkCollision functions check which tile the character is on AFTER they move, and if it is a collision tile,
// moves them back to the tile they just left (so it appears as if they haven't moved.)
function checkCollisionUp() {
    for (var i = 0; i < actLen; i ++) {
        if (actorArray[i].name === currentActive) {
            // stores currently active actor
            var active = actorArray[i];
            // checks if the tile the actor just moved onto was marked as a 5 in the map array
            if (mapGrid[active.xPos][active.yPos] === 5) {
                //console.log("Move to tile " + actorArray[i].xPos + "," + actorArray[i].yPos);
                active.xPos++;
                //console.log("Returned to tile " + actorArray[i].xPos + "," + actorArray[i].yPos)
            }
        }
    }
}

function checkCollisionDown() {
    for (var i = 0; i < actLen; i ++) {
        if (actorArray[i].name === currentActive) {
            var active = actorArray[i];
            if (mapGrid[active.xPos][active.yPos] === 5) {
                active.xPos--;
            }
        }
    }
}

function checkCollisionLeft() {
    for (var i = 0; i < actLen; i ++) {
        if (actorArray[i].name === currentActive) {
            var active = actorArray[i];
            if (mapGrid[active.xPos][active.yPos] === 5) {
                active.yPos++;
            }
        }
    }
}

function checkCollisionRight() {
    for (var i = 0; i < actLen; i ++) {
        if (actorArray[i].name === currentActive) {
            var active = actorArray[i];
            if (mapGrid[active.xPos][active.yPos] === 5) {
                active.yPos--;
            }
        }
    }
}

// when the sprite makes a valid move, subtracts 1 from the movesRemaining var. When movesRemaining === 0, disables
// movement.
function calculateRemaining() {

    movesRemaining--;
    console.log("move remaining "+movesRemaining);
    if (movesRemaining === 0) {
        console.log("All gone");
    }
}

function highlightRemaining() {
    for (var k = 0; k < actLen; k++) {
        if (actorArray[k].name === currentActive) {
            // stores the currently active actor (i.e. actorArray[i]
            var active = actorArray[k];

            // sets the map context for the purpose of this function
            var ctx = document.getElementById("map").getContext("2d");

            for (var i = 0; i < mapGrid.length; i++) {
                for (var j = 0; j < mapGrid[i].length; j++) {
                    if (active.xPos === i && active.yPos === j) {
                        console.log("is it getting this far?");
                        ctx.drawImage(graphics[10], j * 64, i * 64, 64, 64);
                        ctx.drawImage(graphics[10], (j * 64) + 64, (i * 64) + 64, 64, 64);
                        ctx.drawImage(graphics[10], j * 64, (i * 64) + 64, 64, 64);
                        ctx.drawImage(graphics[10], (j * 64) + 64, i * 64, 64, 64);
                        ctx.drawImage(graphics[10], (j * 64) - 64, (i * 64) - 64, 64, 64);
                        ctx.drawImage(graphics[10], j * 64, (i * 64) - 64, 64, 64);
                        ctx.drawImage(graphics[10], (j * 64) - 64, i * 64, 64, 64);
                        ctx.drawImage(graphics[10], (j * 64) - 64, (i * 64) + 64, 64, 64);
                        ctx.drawImage(graphics[10], (j * 64) + 64, (i * 64) - 64, 64, 64);
                        ctx.drawImage(graphics[10], j * 64, (i * 64) + (64 * 2), 64, 64);
                        ctx.drawImage(graphics[10], j * 64, (i * 64) - (64 * 2), 64, 64);
                        ctx.drawImage(graphics[10], (j * 64) + (64 * 2), i * 64, 64, 64);
                        ctx.drawImage(graphics[10], (j * 64) - (64 * 2), i * 64, 64, 64);
                    }
                }
            }
        }
    }
}

// listens for a key up event.
window.addEventListener("keyup", function(event) {
    for (var i = 0; i < actLen; i++) {
        // compares actorArray[i].name to the currentActive variable, and then moves the relevant sprite based on
        // the key up event.
        if (actorArray[i].name === currentActive) {
            // stores the currently active actor
            var active = actorArray[i];
            //stops the sprite from moving when movesRemaining == 0. Need to update some kind of feedback for the
            // player eventually.
            if (movesRemaining > 0) {
                switch (event.keyCode) {
                    case 87:
                        //checks if the player is about to move off of the map, and prevents the movement if so.
                        if (active.xPos > 0) {
                            active.xPos--;
                            checkCollisionUp();
                            calculateRemaining();
                            highlightRemaining();
                            break;
                        } else {
                            break;
                        }
                    case 83:
                        if (active.xPos < 9) {
                            active.xPos++;
                            checkCollisionDown();
                            calculateRemaining();
                            break;
                        } else {
                            break;
                        }
                    case 65:
                        if (active.yPos > 0) {
                            active.yPos--;
                            checkCollisionLeft();
                            calculateRemaining();
                            break;
                        } else {
                            break;
                        }
                    case 68:
                        if (active.yPos < 17) {
                            active.yPos++;
                            checkCollisionRight();
                            calculateRemaining();
                            break;
                        } else {
                            break;
                        }
                }
            } else {
                alert("++Out of cheese error++Please reboot universe++Redo from start++");
            }
        }
    }
    drawMap()
});
