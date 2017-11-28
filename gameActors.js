var actorArray = [];

// create the Actor prototype, or class, or constructor or whatever the hell this actually is.
function Actor(xPos, yPos, player, name, hpmax, hpcur, dmg, arm, spd, tu) {
    this.xPos = xPos;
    this.yPos = yPos;
    this.player = player;
    this.name = name;
    this.hpmax = hpmax;
    this.hpcur = hpcur;
    this.dmg = dmg;
    this.arm = arm;
    this.spd = spd;
    this.tu = tu;
}

// create the Player1 whatever, and inherit the attributes of Actor. This will eventually be relevant.
function Player1(xPos, yPos, player, name, hpmax, hpcur, dmg, arm, spd, tu) {
    Actor.call(this, xPos, yPos, player, name, hpmax, hpcur, dmg, arm, spd, tu);
    // push each actor into the actorArray[] when they are created.
    actorArray.push(this);
}

// create the Player2 thingy, and inherit the attributes of Actor.
function Player2(xPos, yPos, player, name, hpmax, hpcur, dmg, arm, spd, tu) {
    Actor.call(this, xPos, yPos, player, name, hpmax, hpcur, dmg, arm, spd, tu);
    actorArray.push(this);
}

// create new Player1 Actors.
var everard = new Player1(3, 3, "Player 1", "Everard", 5, 5, 0, 1, 8, 5);
var stanvolm = new Player1(0, 4, "Player 1", "Stanvolm", 4, 4, 0, 0, 5, 4);
var victahana = new Player1(2, 3, "Player 1", "Victahana", 6, 6, 0, 2, 2, 3);
var quxharne = new Player1(0, 5, "Player 1", "Quxharne", 4, 4, 0, 0, 1, 3);

// create new Player2 Actors.
var goblinWarrior = new Player2(17, 4, "Player 2", "Goblin Warrior", 5, 5, 0, 1, 7, 5);
var koboldDragonshield = new Player2(16, 6, "Player 2", "Kobold Dragonshield", 6, 6, 0, 2, 3, 4);
var koboldSlinger = new Player2(13, 8, "Player 2", "Kobold Slinger", 4, 4, 0, 0, 6, 5);
var koboldMage = new Player2(14, 7, "Player 2", "Kobold Mage", 4, 4, 0, 0, 4, 4);
