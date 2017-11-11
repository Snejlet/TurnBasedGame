//tried many, many things to get the bloody sort function working using attributes from the Actors.
//could not get it working. Got frustrated, deleted it all.
//going to do this manually instead. Remember to ask Andrew about this annoying shit on Monday.

var initiative = [
    {name: "Everard", speed: 8, text: "Player One:" },
    {name: "Kobold Slinger", speed: 7, text: "Player Two:"},
    {name: "Kobold Dragonshield", speed: 6, text: "Player Two:"},
    {name: "Goblin Warrior", speed: 5, text: "Player Two:"},
    {name: "Stanvolm", speed: 4, text: "Player One:"},
    {name: "Kobold Mage", speed: 3, text: "Player Two:"},
    {name: "Victahana", speed: 2, text: "Player One:"},
    {name: "Quxharne", speed: 1, text: "Player One:"}
];

// used to reset the turn order to the first value in the initiative array
var turnOrderReset = 0;
var roundNumber = 1;

// keeps track of who is currently active for the purpose of moving the correct sprite.
var currentActive = "";

function endTurn() {

    for (var i = turnOrderReset; i < initiative.length; i++) {
        document.getElementById("playerTurnTracker").innerHTML = initiative[i].text;
        document.getElementById("playerCharacterName").innerHTML = initiative[i].name;
        currentActive = initiative[i].name;
        turnOrderReset++;
        console.log(currentActive);
        if (turnOrderReset === 8) {
            turnOrderReset = 0;
            roundNumber++;
            document.getElementById("turnNumber").innerHTML = "Round " + roundNumber;
        }
        break;
    }
}