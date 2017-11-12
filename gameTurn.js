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

    // changes who is currently active in the currentlyActive variable, which is used to control sprite movement.
    // breaks out of the loop after one pass, the turnOrderReset variable holds the position in the loop that
    // it will start from when the End Turn button is next clicked. Every time the turnOrderReset variable value hits
    // 8 (current number of characters being tracked), it is reset to zero and the roundNumber variable is incremented
    // by 1 for the purpose of the UI element.
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