// stores the array of actors, sorted by speed.
var initiative = [];
//stores the length of the actorArray[]
var len = actorArray.length;
// used to reset the turn order to the first value in the initiative array
var turnOrderReset = 0;
// tracks the current round number
var roundNumber = 1;
// keeps track of who is currently active for the purpose of moving the correct sprite.
var currentActive = "";
// stores the remaining movement points an actor has this turn.
var movesRemaining;
// stores the currently active actor object for use in the endTurn() and resetMove()
var active;

// adds the actors from actorArray and sorts them based on initiative.
for (var i = 0; i < len; i++){
    initiative[i] = actorArray[i];
}

// sorts the initiative array in descending order (i.e. highest speed to lowest speed).
initiative.sort(function(a, b){
    return b.spd - a.spd;
});

// variables to store the starting X and Y co-ordinates of the actor, for use in the resetMove()
var xStartPos;
var yStartPos;

function endTurn() {
    // clears any lingering tileHighlight's from unspent movement points from the previous actor.
    drawMap();

    // loops through the initiative
    for (var i = turnOrderReset; i < len; i++) {
        console.log(actPosX[i]+" "+actPosY[i]);
        active = initiative[i];
        xStartPos = active.xPos;
        yStartPos = active.yPos;
        console.log(active.spd);
        currentActive = active.name;
        turnOrderReset++;
        movesRemaining = active.tu;
        console.log(active.name);
        document.getElementById("playerTurnTracker").innerHTML = active.player;
        document.getElementById("playerCharacterName").innerHTML = active.name;
        document.getElementById("uiMovesRemaining").innerHTML = "Turn Units: "+movesRemaining+"/"+active.tu;
        if (turnOrderReset === len) {
            turnOrderReset = 0;
            roundNumber++;
            document.getElementById("turnNumber").innerHTML = "Round " + roundNumber;
        }
        break;
    }

    // highlights the maximum remaining moves the actor can make this turn.
    highlightRemaining();
}

function resetMove() {

    movesRemaining = active.tu;
    active.xPos = xStartPos;
    active.yPos = yStartPos;
    drawMap();
    highlightRemaining();
}