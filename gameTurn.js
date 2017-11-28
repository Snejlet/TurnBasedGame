// stores the array of actors, sorted by speed.
var initiative = [];
//stores the length of the actorArray[]
var len = actorArray.length;
// used to reset the turn order to the first value in the initiative array
var turnOrderReset = 0;
// tracks the current round number
var roundNumber = 1;

// keeps track of who is currently active for the purpose of moving the correct sprite.
var currentActive;
// stores the remaining movement points an actor has this turn.
var movesRemaining;
// stores the currently active actor object for use in the endTurn() and resetMove()
var active;
// stores the integer which will be used in the incrementRound() For Loop.
var delay = 0;

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

function startGame() {
    var end = document.getElementById("endTurnButton");
    var undo = document.getElementById("resetMove");
    var begin = document.getElementById("startGame");

    end.style.display = "block";
    undo.style.display = "block";
    begin.style.display = "none";

    endTurn();
}

function endTurn() {
    // clears any lingering tileHighlight's from unspent movement points from the previous actor.
    drawMap();

    // loops through the initiative
    for (var i = turnOrderReset; i < len; i++) {
        active = initiative[i];
        xStartPos = active.xPos;
        yStartPos = active.yPos;
        console.log(active.spd);
        currentActive = active;
        turnOrderReset++;
        movesRemaining = active.tu;
        console.log(active.name);
        document.getElementById("playerTurnTracker").innerHTML = active.player;
        document.getElementById("playerCharacterName").innerHTML = active.name;
        document.getElementById("uiMovesRemaining").innerHTML = "Turn Units: " + movesRemaining + "/" + active.tu;
        if (turnOrderReset === len) {
            turnOrderReset = 0;
            document.getElementById("turnNumber").innerHTML = "Round " + roundNumber;
        }
        // checks if Victahana has used Stoic Defense on herself.
        if (initiative[i] === victahana && victahanaDefended === 1) {
            victahana.arm = victahana.arm - 1;
            victahanaDefended = 0;
            targeted = victahana;
            hpUpdate();
        }
        break;
    }

    // highlights the maximum remaining moves the actor can make this turn.
    highlightRemaining();

    // couldn't find a better way of doing this that worked. Think about this later.
    if (active.name === "Everard") {
        $(".everard").show();
        $(".stanvolm").hide();
        $(".victahana").hide();
        $(".quxharne").hide();
        $(".koboldDragonshield").hide();
        $(".koboldSlinger").hide();
        $(".koboldMage").hide();
        $(".goblinWarrior").hide();
    } else if (active.name === "Stanvolm") {
        $(".everard").hide();
        $(".stanvolm").show();
        $(".victahana").hide();
        $(".quxharne").hide();
        $(".koboldDragonshield").hide();
        $(".koboldSlinger").hide();
        $(".koboldMage").hide();
        $(".goblinWarrior").hide();
    } else if (active.name === "Victahana") {
        $(".everard").hide();
        $(".stanvolm").hide();
        $(".victahana").show();
        $(".quxharne").hide();
        $(".koboldDragonshield").hide();
        $(".koboldSlinger").hide();
        $(".koboldMage").hide();
        $(".goblinWarrior").hide();
    } else if (active.name === "Quxharne") {
        $(".everard").hide();
        $(".stanvolm").hide();
        $(".victahana").hide();
        $(".quxharne").show();
        $(".koboldDragonshield").hide();
        $(".koboldSlinger").hide();
        $(".koboldMage").hide();
        $(".goblinWarrior").hide();
    } else if (active.name === "Kobold Dragonshield") {
        $(".everard").hide();
        $(".stanvolm").hide();
        $(".victahana").hide();
        $(".quxharne").hide();
        $(".koboldDragonshield").show();
        $(".koboldSlinger").hide();
        $(".koboldMage").hide();
        $(".goblinWarrior").hide();
    } else if (active.name === "Kobold Slinger") {
        $(".everard").hide();
        $(".stanvolm").hide();
        $(".victahana").hide();
        $(".quxharne").hide();
        $(".koboldDragonshield").hide();
        $(".koboldSlinger").show();
        $(".koboldMage").hide();
        $(".goblinWarrior").hide();
    } else if (active.name === "Kobold Mage") {
        $(".everard").hide();
        $(".stanvolm").hide();
        $(".victahana").hide();
        $(".quxharne").hide();
        $(".koboldDragonshield").hide();
        $(".koboldSlinger").hide();
        $(".koboldMage").show();
        $(".goblinWarrior").hide();
    } else if (active.name === "Goblin Warrior") {
        $(".everard").hide();
        $(".stanvolm").hide();
        $(".victahana").hide();
        $(".quxharne").hide();
        $(".koboldDragonshield").hide();
        $(".koboldSlinger").hide();
        $(".koboldMage").hide();
        $(".goblinWarrior").show();
    }
}

function resetMove() {

    movesRemaining = active.tu;
    active.xPos = xStartPos;
    active.yPos = yStartPos;
    drawMap();
    highlightRemaining();
    document.getElementById("uiMovesRemaining").innerHTML = "Turn Units: " + movesRemaining + "/" + active.tu;
}