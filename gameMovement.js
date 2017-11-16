// stores the maximum movement value for the character
var movesRemaining;

// stores the length of the actorArray[]. Saves every function and check having to check that, which should aid
// performance. Need to check if this will update when something is removed from the array at a later date.
var actLen = actorArray.length;

// arrays to store the positions of all of the actors on the map for the purpose of collision
var actPosX = [];
var actPosY = [];
var actName = [];

// variables to store the length of the above arrays. Saves on loops through the array.
var actPosXLen = actPosX.length;
var actPosYLen = actPosY.length;

// loops through the actorArray and adds the X and Y co-ordinates to the relevant arrays above (i.e. actPosX[] and
// actPosY[]) on load in order to provide collision based on starting position.
for (var i = 0; i < actLen; i++) {
    actPosX[i] = initiative[i].xPos;
    actPosY[i] = initiative[i].yPos;
    actName[i] = initiative[i].name;
}

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
                movesRemaining++;
                //console.log("Returned to tile " + actorArray[i].xPos + "," + actorArray[i].yPos)
            }
        }
        /*
        if (active.xPos === actPosX[i] && active.yPos === actPosY[i] && active.name !== actName[i]) {
            active.xPos++;
            movesRemaining++;
        }
        */
    }
}

function checkCollisionDown() {
    for (var i = 0; i < actLen; i ++) {
        if (actorArray[i].name === currentActive) {
            var active = actorArray[i];
            if (mapGrid[active.xPos][active.yPos] === 5) {
                active.xPos--;
                movesRemaining++;
            }
        }
        /*
        if (active.xPos === actPosX[i] && active.yPos === actPosY[i] && active.name !== actName[i]) {

            active.xPos--;
            movesRemaining++;
        }
        */
    }
}

function checkCollisionLeft() {
    for (var i = 0; i < actLen; i ++) {
        if (actorArray[i].name === currentActive) {
            var active = actorArray[i];
            if (mapGrid[active.xPos][active.yPos] === 5) {
                active.yPos++;
                movesRemaining++;
            }
        }
        /*
        if (active.xPos === actPosX[i] && active.yPos === actPosY[i] && active.name !== actName[i]) {
            active.yPos++;
            movesRemaining++;
        }
        */
    }
}

function checkCollisionRight() {
    for (var i = 0; i < actLen; i ++) {
        if (actorArray[i].name === currentActive) {
            var active = actorArray[i];
            if (mapGrid[active.xPos][active.yPos] === 5) {
                active.yPos--;
                movesRemaining++;
            }
        }
        /*
        if (active.xPos === actPosX[i] && active.yPos === actPosY[i] && active.name !== actName[i]) {
            active.yPos--;
            movesRemaining++;
        }
        */
    }
}

function highlightRemaining() {
    for (var k = 0; k < actLen; k++) {
        if (actorArray[k].name === currentActive) {
            // stores the currently active actor (i.e. actorArray[i]
            var active = actorArray[k];

            var j = active.yPos;
            var i = active.xPos;

            // sets the map context for the purpose of this function
            var ctx = document.getElementById("map").getContext("2d");

            if (movesRemaining === 5) {
                ctx.drawImage(graphics[10], j * 64, (i * 64) - (64 * 5), 64, 64);
                ctx.drawImage(graphics[10], (j * 64) + 64, (i * 64) - (64 * 4), 64, 64);
                ctx.drawImage(graphics[10], (j * 64) + (64 * 2), (i * 64) - (64 * 3), 64, 64);
                ctx.drawImage(graphics[10], (j * 64) + (64 * 3), (i * 64) - (64 * 2), 64, 64);
                ctx.drawImage(graphics[10], (j * 64) + (64 * 4), (i * 64) - 64, 64, 64);
                ctx.drawImage(graphics[10], (j * 64) + (64 * 5), i * 64, 64, 64);
                ctx.drawImage(graphics[10], (j * 64) + (64 * 4), (i * 64) + 64, 64, 64);
                ctx.drawImage(graphics[10], (j * 64) + (64 * 3), (i * 64) + (64 * 2), 64, 64);
                ctx.drawImage(graphics[10], (j * 64) + (64 * 2), (i * 64) + (64 * 3), 64, 64);
                ctx.drawImage(graphics[10], (j * 64) + 64, (i * 64) + (64 * 4), 64, 64);
                ctx.drawImage(graphics[10], j * 64, (i * 64) + (64 * 5), 64, 64);
                ctx.drawImage(graphics[10], (j * 64) - 64, (i * 64) - (64 * 4), 64, 64);
                ctx.drawImage(graphics[10], (j * 64) - (64 * 2), (i * 64) - (64 * 3), 64, 64);
                ctx.drawImage(graphics[10], (j * 64) - (64 * 3), (i * 64) - (64 * 2), 64, 64);
                ctx.drawImage(graphics[10], (j * 64) - (64 * 4), (i * 64) - 64, 64, 64);
                ctx.drawImage(graphics[10], (j * 64) - (64 * 5), i * 64, 64, 64);
                ctx.drawImage(graphics[10], (j * 64) - (64 * 4), (i * 64) + 64, 64, 64);
                ctx.drawImage(graphics[10], (j * 64) - (64 * 3), (i * 64) + (64 * 2), 64, 64);
                ctx.drawImage(graphics[10], (j * 64) - (64 * 2), (i * 64) + (64 * 3), 64, 64);
                ctx.drawImage(graphics[10], (j * 64) - 64, (i * 64) + (64 * 4), 64, 64);

                ctx.drawImage(graphics[10], j * 64, (i * 64) + (64 * 4), 64, 64);
                ctx.drawImage(graphics[10], (j * 64) + (64 * 4), i * 64, 64, 64);
                ctx.drawImage(graphics[10], j * 64, (i * 64) - (64 * 4), 64, 64);
                ctx.drawImage(graphics[10], (j * 64) - (64 * 4), i * 64, 64, 64);
                ctx.drawImage(graphics[10], (j * 64) + 64, (i * 64) + (64 * 3), 64, 64);
                ctx.drawImage(graphics[10], (j * 64) + (64 * 2), (i * 64) + (64 * 2), 64, 64);
                ctx.drawImage(graphics[10], (j * 64) + (64 * 3), (i * 64) + 64, 64, 64);
                ctx.drawImage(graphics[10], (j * 64) - 64, (i * 64) + (64 * 3), 64, 64);
                ctx.drawImage(graphics[10], (j * 64) - (64 * 2), (i * 64) + (64 * 2), 64, 64);
                ctx.drawImage(graphics[10], (j * 64) - (64 * 3), (i * 64) + 64, 64, 64);
                ctx.drawImage(graphics[10], (j * 64) - (64 * 3), (i * 64) - 64, 64, 64);
                ctx.drawImage(graphics[10], (j * 64) - (64 * 2), (i * 64) - (64 * 2), 64, 64);
                ctx.drawImage(graphics[10], (j * 64) - 64, (i * 64) - (64 * 3), 64, 64);
                ctx.drawImage(graphics[10], (j * 64) + 64, (i * 64) - (64 * 3), 64, 64);
                ctx.drawImage(graphics[10], (j * 64) + (64 * 2), (i * 64) - (64 * 2), 64, 64);
                ctx.drawImage(graphics[10], (j * 64) + (64 * 3), (i * 64) - 64, 64, 64);

                ctx.drawImage(graphics[10], j * 64, (i * 64) + (64 * 3), 64, 64);
                ctx.drawImage(graphics[10], j * 64, (i * 64) - (64 * 3), 64, 64);
                ctx.drawImage(graphics[10], (j * 64) + (64 * 3), i * 64, 64, 64);
                ctx.drawImage(graphics[10], (j * 64) - (64 * 3), i * 64, 64, 64);
                ctx.drawImage(graphics[10], (j * 64) + 64, (i * 64) + (64 * 2), 64, 64);
                ctx.drawImage(graphics[10], (j * 64) + (64 * 2), (i * 64) + 64, 64, 64);
                ctx.drawImage(graphics[10], (j * 64) - 64, (i * 64) + ( 64 * 2), 64, 64);
                ctx.drawImage(graphics[10], (j * 64) - (64 * 2), (i * 64) + 64, 64, 64);
                ctx.drawImage(graphics[10], (j * 64) - (64 * 2), (i * 64) - 64, 64, 64);
                ctx.drawImage(graphics[10], (j * 64) - 64, (i * 64) - (64 * 2), 64, 64);
                ctx.drawImage(graphics[10], (j * 64) + 64, (i * 64) - (64 * 2), 64, 64);
                ctx.drawImage(graphics[10], (j * 64) + (64 * 2), (i * 64) - 64, 64, 64);

                ctx.drawImage(graphics[10], (j * 64) - 64, (i * 64) + 64, 64, 64);
                ctx.drawImage(graphics[10], (j * 64) + 64, (i * 64) - 64, 64, 64);
                ctx.drawImage(graphics[10], j * 64, (i * 64) + (64 * 2), 64, 64);
                ctx.drawImage(graphics[10], j * 64, (i * 64) - (64 * 2), 64, 64);
                ctx.drawImage(graphics[10], (j * 64) + (64 * 2), i * 64, 64, 64);
                ctx.drawImage(graphics[10], (j * 64) - (64 * 2), i * 64, 64, 64);
                ctx.drawImage(graphics[10], (j * 64) + 64, (i * 64) + 64, 64, 64);
                ctx.drawImage(graphics[10], (j * 64) - 64, (i * 64) - 64, 64, 64);

                ctx.drawImage(graphics[10], j * 64, i * 64, 64, 64);
                ctx.drawImage(graphics[10], j * 64, (i * 64) + 64, 64, 64);
                ctx.drawImage(graphics[10], (j * 64) + 64, i * 64, 64, 64);
                ctx.drawImage(graphics[10], j * 64, (i * 64) - 64, 64, 64);
                ctx.drawImage(graphics[10], (j * 64) - 64, i * 64, 64, 64);
            } else if (movesRemaining === 4) {
                ctx.drawImage(graphics[10], j * 64, (i * 64) + (64 * 4), 64, 64);
                ctx.drawImage(graphics[10], (j * 64) + (64 * 4), i * 64, 64, 64);
                ctx.drawImage(graphics[10], j * 64, (i * 64) - (64 * 4), 64, 64);
                ctx.drawImage(graphics[10], (j * 64) - (64 * 4), i * 64, 64, 64);
                ctx.drawImage(graphics[10], (j * 64) + 64, (i * 64) + (64 * 3), 64, 64);
                ctx.drawImage(graphics[10], (j * 64) + (64 * 2), (i * 64) + (64 * 2), 64, 64);
                ctx.drawImage(graphics[10], (j * 64) + (64 * 3), (i * 64) + 64, 64, 64);
                ctx.drawImage(graphics[10], (j * 64) - 64, (i * 64) + (64 * 3), 64, 64);
                ctx.drawImage(graphics[10], (j * 64) - (64 * 2), (i * 64) + (64 * 2), 64, 64);
                ctx.drawImage(graphics[10], (j * 64) - (64 * 3), (i * 64) + 64, 64, 64);
                ctx.drawImage(graphics[10], (j * 64) - (64 * 3), (i * 64) - 64, 64, 64);
                ctx.drawImage(graphics[10], (j * 64) - (64 * 2), (i * 64) - (64 * 2), 64, 64);
                ctx.drawImage(graphics[10], (j * 64) - 64, (i * 64) - (64 * 3), 64, 64);
                ctx.drawImage(graphics[10], (j * 64) + 64, (i * 64) - (64 * 3), 64, 64);
                ctx.drawImage(graphics[10], (j * 64) + (64 * 2), (i * 64) - (64 * 2), 64, 64);
                ctx.drawImage(graphics[10], (j * 64) + (64 * 3), (i * 64) - 64, 64, 64);

                ctx.drawImage(graphics[10], j * 64, (i * 64) + (64 * 3), 64, 64);
                ctx.drawImage(graphics[10], j * 64, (i * 64) - (64 * 3), 64, 64);
                ctx.drawImage(graphics[10], (j * 64) + (64 * 3), i * 64, 64, 64);
                ctx.drawImage(graphics[10], (j * 64) - (64 * 3), i * 64, 64, 64);
                ctx.drawImage(graphics[10], (j * 64) + 64, (i * 64) + (64 * 2), 64, 64);
                ctx.drawImage(graphics[10], (j * 64) + (64 * 2), (i * 64) + 64, 64, 64);
                ctx.drawImage(graphics[10], (j * 64) - 64, (i * 64) + ( 64 * 2), 64, 64);
                ctx.drawImage(graphics[10], (j * 64) - (64 * 2), (i * 64) + 64, 64, 64);
                ctx.drawImage(graphics[10], (j * 64) - (64 * 2), (i * 64) - 64, 64, 64);
                ctx.drawImage(graphics[10], (j * 64) - 64, (i * 64) - (64 * 2), 64, 64);
                ctx.drawImage(graphics[10], (j * 64) + 64, (i * 64) - (64 * 2), 64, 64);
                ctx.drawImage(graphics[10], (j * 64) + (64 * 2), (i * 64) - 64, 64, 64);

                ctx.drawImage(graphics[10], (j * 64) - 64, (i * 64) + 64, 64, 64);
                ctx.drawImage(graphics[10], (j * 64) + 64, (i * 64) - 64, 64, 64);
                ctx.drawImage(graphics[10], j * 64, (i * 64) + (64 * 2), 64, 64);
                ctx.drawImage(graphics[10], j * 64, (i * 64) - (64 * 2), 64, 64);
                ctx.drawImage(graphics[10], (j * 64) + (64 * 2), i * 64, 64, 64);
                ctx.drawImage(graphics[10], (j * 64) - (64 * 2), i * 64, 64, 64);
                ctx.drawImage(graphics[10], (j * 64) + 64, (i * 64) + 64, 64, 64);
                ctx.drawImage(graphics[10], (j * 64) - 64, (i * 64) - 64, 64, 64);

                ctx.drawImage(graphics[10], j * 64, i * 64, 64, 64);
                ctx.drawImage(graphics[10], j * 64, (i * 64) + 64, 64, 64);
                ctx.drawImage(graphics[10], (j * 64) + 64, i * 64, 64, 64);
                ctx.drawImage(graphics[10], j * 64, (i * 64) - 64, 64, 64);
                ctx.drawImage(graphics[10], (j * 64) - 64, i * 64, 64, 64);
            } else if (movesRemaining === 3) {
                ctx.drawImage(graphics[10], j * 64, (i * 64) + (64 * 3), 64, 64);
                ctx.drawImage(graphics[10], j * 64, (i * 64) - (64 * 3), 64, 64);
                ctx.drawImage(graphics[10], (j * 64) + (64 * 3), i * 64, 64, 64);
                ctx.drawImage(graphics[10], (j * 64) - (64 * 3), i * 64, 64, 64);
                ctx.drawImage(graphics[10], (j * 64) + 64, (i * 64) + (64 * 2), 64, 64);
                ctx.drawImage(graphics[10], (j * 64) + (64 * 2), (i * 64) + 64, 64, 64);
                ctx.drawImage(graphics[10], (j * 64) - 64, (i * 64) + ( 64 * 2), 64, 64);
                ctx.drawImage(graphics[10], (j * 64) - (64 * 2), (i * 64) + 64, 64, 64);
                ctx.drawImage(graphics[10], (j * 64) - (64 * 2), (i * 64) - 64, 64, 64);
                ctx.drawImage(graphics[10], (j * 64) - 64, (i * 64) - (64 * 2), 64, 64);
                ctx.drawImage(graphics[10], (j * 64) + 64, (i * 64) - (64 * 2), 64, 64);
                ctx.drawImage(graphics[10], (j * 64) + (64 * 2), (i * 64) - 64, 64, 64);

                ctx.drawImage(graphics[10], (j * 64) - 64, (i * 64) + 64, 64, 64);
                ctx.drawImage(graphics[10], (j * 64) + 64, (i * 64) - 64, 64, 64);
                ctx.drawImage(graphics[10], j * 64, (i * 64) + (64 * 2), 64, 64);
                ctx.drawImage(graphics[10], j * 64, (i * 64) - (64 * 2), 64, 64);
                ctx.drawImage(graphics[10], (j * 64) + (64 * 2), i * 64, 64, 64);
                ctx.drawImage(graphics[10], (j * 64) - (64 * 2), i * 64, 64, 64);
                ctx.drawImage(graphics[10], (j * 64) + 64, (i * 64) + 64, 64, 64);
                ctx.drawImage(graphics[10], (j * 64) - 64, (i * 64) - 64, 64, 64);

                ctx.drawImage(graphics[10], j * 64, i * 64, 64, 64);
                ctx.drawImage(graphics[10], j * 64, (i * 64) + 64, 64, 64);
                ctx.drawImage(graphics[10], (j * 64) + 64, i * 64, 64, 64);
                ctx.drawImage(graphics[10], j * 64, (i * 64) - 64, 64, 64);
                ctx.drawImage(graphics[10], (j * 64) - 64, i * 64, 64, 64);
            } else if (movesRemaining === 2) {
                ctx.drawImage(graphics[10], (j * 64) - 64, (i * 64) + 64, 64, 64);
                ctx.drawImage(graphics[10], (j * 64) + 64, (i * 64) - 64, 64, 64);
                ctx.drawImage(graphics[10], j * 64, (i * 64) + (64 * 2), 64, 64);
                ctx.drawImage(graphics[10], j * 64, (i * 64) - (64 * 2), 64, 64);
                ctx.drawImage(graphics[10], (j * 64) + (64 * 2), i * 64, 64, 64);
                ctx.drawImage(graphics[10], (j * 64) - (64 * 2), i * 64, 64, 64);
                ctx.drawImage(graphics[10], (j * 64) + 64, (i * 64) + 64, 64, 64);
                ctx.drawImage(graphics[10], (j * 64) - 64, (i * 64) - 64, 64, 64);

                ctx.drawImage(graphics[10], j * 64, i * 64, 64, 64);
                ctx.drawImage(graphics[10], j * 64, (i * 64) + 64, 64, 64);
                ctx.drawImage(graphics[10], (j * 64) + 64, i * 64, 64, 64);
                ctx.drawImage(graphics[10], j * 64, (i * 64) - 64, 64, 64);
                ctx.drawImage(graphics[10], (j * 64) - 64, i * 64, 64, 64);
            } else if (movesRemaining === 1) {
                ctx.drawImage(graphics[10], j * 64, i * 64, 64, 64);
                ctx.drawImage(graphics[10], j * 64, (i * 64) + 64, 64, 64);
                ctx.drawImage(graphics[10], (j * 64) + 64, i * 64, 64, 64);
                ctx.drawImage(graphics[10], j * 64, (i * 64) - 64, 64, 64);
                ctx.drawImage(graphics[10], (j * 64) - 64, i * 64, 64, 64);
            } else {
                drawMap();
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
            //console.log(event.keyCode+" "+active.name);
            switch (event.keyCode) {
                case 82:
                    resetMove();
            }
            //stops the sprite from moving when movesRemaining == 0. Need to update some kind of feedback for the
            // player eventually.
            if (movesRemaining > 0) {
                switch (event.keyCode) {
                    case 87:
                        //checks if the player is about to move off of the map, and prevents the movement if so.
                        if (active.xPos > 0) {
                            active.xPos--;
                            checkCollisionUp();
                            movesRemaining--;
                            drawMap();
                            highlightRemaining();
                            document.getElementById("uiMovesRemaining").innerHTML = "Turn Units: "+movesRemaining+"/"+active.tu;
                            break;
                        } else {
                            break;
                        }
                    case 83:
                        if (active.xPos < 9) {
                            active.xPos++;
                            checkCollisionDown();
                            movesRemaining--;
                            drawMap();
                            highlightRemaining();
                            document.getElementById("uiMovesRemaining").innerHTML = "Turn Units: "+movesRemaining+"/"+active.tu;
                            break;
                        } else {
                            break;
                        }
                    case 65:
                        if (active.yPos > 0) {
                            active.yPos--;
                            checkCollisionLeft();
                            movesRemaining--;
                            drawMap();
                            highlightRemaining();
                            document.getElementById("uiMovesRemaining").innerHTML = "Turn Units: "+movesRemaining+"/"+active.tu;
                            break;
                        } else {
                            break;
                        }
                    case 68:
                        if (active.yPos < 17) {
                            active.yPos++;
                            checkCollisionRight();
                            movesRemaining--;
                            drawMap();
                            highlightRemaining();
                            document.getElementById("uiMovesRemaining").innerHTML = "Turn Units: "+movesRemaining+"/"+active.tu;
                            break;
                        } else {
                            break;
                        }
                }
            } else {
                console.log("You're out of moves.")
            }
        }
    }
});
