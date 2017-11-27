// stores the maximum movement value for the character
var movesRemaining;

// stores the length of the initiative[]. Saves every function and check having to check that, which should aid
// performance. Need to check if this will update when something is removed from the array at a later date.
var len = initiative.length;

// The checkCollision functions check which tile the character is on AFTER they move, and if it is a collision tile,
// moves them back to the tile they just left (so it appears as if they haven't moved.)
function checkCollisionUp() {
    for (var i = 0; i < len; i ++) {
        if (initiative[i].name === currentActive.name) {
            // stores currently active actor
            var active = initiative[i];
            // checks if the tile the actor just moved onto was marked as a 5 in the map array
            if (mapGrid[active.yPos][active.xPos] === 5) {
                //console.log("Move to tile " + initiative[i].xPos + "," + initiative[i].yPos);
                active.yPos++;
                movesRemaining++;
                //console.log("Returned to tile " + initiative[i].xPos + "," + initiative[i].yPos)
            }
        }
        // checks the currently active actor's X and Y co-ordinates against the X and Y co-ordintes of every other
        // actor within the initiative[]. It does not check its own position, as that would prevent it from moving
        // through the tile it began the turn on.
        if (initiative[i].name !== currentActive.name && currentActive.xPos === initiative[i].xPos &&
            currentActive.yPos === initiative[i].yPos) {
            currentActive.yPos++;
            movesRemaining++;
        }
    }
}

function checkCollisionDown() {
    for (var i = 0; i < len; i ++) {
        if (initiative[i].name === currentActive.name) {
            var active = initiative[i];
            if (mapGrid[active.yPos][active.xPos] === 5) {
                active.yPos--;
                movesRemaining++;
            }
        }
        if (initiative[i].name !== currentActive.name && currentActive.xPos === initiative[i].xPos &&
            currentActive.yPos === initiative[i].yPos) {
            currentActive.yPos--;
            movesRemaining++;
        }
    }
}

function checkCollisionLeft() {
    for (var i = 0; i < len; i ++) {
        if (initiative[i].name === currentActive.name) {
            var active = initiative[i];
            if (mapGrid[active.yPos][active.xPos] === 5) {
                active.xPos++;
                movesRemaining++;
            }
        }
        if (initiative[i].name !== currentActive.name && currentActive.xPos === initiative[i].xPos &&
            currentActive.yPos === initiative[i].yPos) {
            currentActive.xPos++;
            movesRemaining++;
        }
    }
}

function checkCollisionRight() {
    for (var i = 0; i < len; i ++) {
        if (initiative[i].name === currentActive.name) {
            var active = initiative[i];
            if (mapGrid[active.yPos][active.xPos] === 5) {
                active.xPos--;
                movesRemaining++;
            }
        }
        if (initiative[i].name !== currentActive.name && currentActive.xPos === initiative[i].xPos &&
            currentActive.yPos === initiative[i].yPos) {
            currentActive.xPos--;
            movesRemaining++;
        }
    }
}

function highlightRemaining() {
    for (var k = 0; k < len; k++) {
        if (initiative[k].name === currentActive.name) {
            // stores the currently active actor (i.e. initiative[i]
            var active = initiative[k];

            var i = active.yPos;
            var j = active.xPos;

            // sets the map context for the purpose of this function
            var ctx = document.getElementById("map").getContext("2d");

            showMovement1(movesRemaining, i,j, ctx);
        }
    }
}
function showMovement1(mr,i,j,ctx) {
    console.log("in show movement "+mr);
    if (mr == 0){
        console.log("mr is 0"+mr);

        drawMap();
        return;
    }
    for (var ol = mr; ol>=1; ol--){
        var u=0;
        for (var d = ol; d>=1; d--){

            ctx.drawImage(graphics[10], (j * 64)+ (64*u), (i * 64) - (64 * d), 64, 64);
            ctx.drawImage(graphics[10], (j * 64) + (64 * d), (i * 64)+ (64*u), 64, 64);
            ctx.drawImage(graphics[10], (j * 64)- (64*u), (i * 64) + (64 * d), 64, 64);
            ctx.drawImage(graphics[10], (j * 64) - (64 * d), (i * 64)- (64*u), 64, 64);
            u++;
        }
    }
}
function showMovement(mr,i,j,ctx){
    if (movesRemaining === 5) {
        ctx.drawImage(graphics[10], (j * 64) + (64 * 0), (i * 64) - (64 * 5), 64, 64);
        ctx.drawImage(graphics[10], (j * 64) + (64 * 1), (i * 64) - (64 * 4), 64, 64);
        ctx.drawImage(graphics[10], (j * 64) + (64 * 2), (i * 64) - (64 * 3), 64, 64);
        ctx.drawImage(graphics[10], (j * 64) + (64 * 3), (i * 64) - (64 * 2), 64, 64);
        ctx.drawImage(graphics[10], (j * 64) + (64 * 4), (i * 64) - (64 * 1), 64, 64);

        ctx.drawImage(graphics[10], (j * 64) + (64 * 5), (i * 64) + (64 * 0), 64, 64);
        ctx.drawImage(graphics[10], (j * 64) + (64 * 4), (i * 64) + 64, 64, 64);
        ctx.drawImage(graphics[10], (j * 64) + (64 * 3), (i * 64) + (64 * 2), 64, 64);
        ctx.drawImage(graphics[10], (j * 64) + (64 * 2), (i * 64) + (64 * 3), 64, 64);
        ctx.drawImage(graphics[10], (j * 64) + (64 * 1), (i * 64) + (64 * 4), 64, 64);

        ctx.drawImage(graphics[10], (j * 64) - (64 * 0), (i * 64) - (64 * 5), 64, 64);
        ctx.drawImage(graphics[10], (j * 64) - (64 * 1), (i * 64) - (64 * 4), 64, 64);
        ctx.drawImage(graphics[10], (j * 64) - (64 * 2), (i * 64) - (64 * 3), 64, 64);
        ctx.drawImage(graphics[10], (j * 64) - (64 * 3), (i * 64) - (64 * 2), 64, 64);
        ctx.drawImage(graphics[10], (j * 64) - (64 * 4), (i * 64) - 64, 64, 64);

        ctx.drawImage(graphics[10], (j * 64) - (64 * 5), (i * 64) + (64 * 0), 64, 64);
        ctx.drawImage(graphics[10], (j * 64) - (64 * 4), (i * 64) + (64 * 1), 64, 64);
        ctx.drawImage(graphics[10], (j * 64) - (64 * 3), (i * 64) + (64 * 2), 64, 64);
        ctx.drawImage(graphics[10], (j * 64) - (64 * 2), (i * 64) + (64 * 3), 64, 64);
        ctx.drawImage(graphics[10], (j * 64) - (64 * 1), (i * 64) + (64 * 4), 64, 64);

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

// listens for a key up event.
window.addEventListener("keyup", function(event) {
    for (var i = 0; i < len; i++) {
        // compares initiative[i].name to the currentActive variable, and then moves the relevant sprite based on
        // the key up event.
        if (initiative[i].name === currentActive.name) {
            // stores the currently active actor
            var active = initiative[i];
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
                        if (active.yPos > 0) {
                            active.yPos--;
                            checkCollisionUp();
                            movesRemaining--;
                            drawMap();
                            highlightRemaining();
                            document.getElementById("uiMovesRemaining").innerHTML = "Turn Units: "+movesRemaining+"/"+active.tu;
                            //console.log(active.xPos+", "+active.yPos);
                            break;
                        } else {
                            break;
                        }
                    case 83:
                        if (active.yPos < 9) {
                            active.yPos++;
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
                        if (active.xPos > 0) {
                            active.xPos--;
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
                        if (active.xPos < 17) {
                            active.xPos++;
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
