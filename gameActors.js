// create the Actor prototype, or class, or constructor or whatever the hell this actually is.
function Actor(xPos, yPos, dmg, arm, spd) {
    this.xPos = xPos;
    this.yPos = yPos;
    this.dmg = dmg;
    this.arm = arm;
    this.spd = spd;
}

// create the Player1 whatever, and inherit the attributes of Actor. This will eventually be relevant.
function Player1(xPos, yPos, dmg, arm, spd) {
    Actor.call(this, xPos, yPos, dmg, arm, spd);
}

// create the Player2 thingy, and inherit the attributes of Actor.
function Player2(xPos, yPos, dmg, arm, spd) {
    Actor.call(this, xPos, yPos, dmg, arm, spd);
}

// create new Player1 Actors.
var everard = new Player1(2, 4, 0, 0, 0);
var stanvolm = new Player1(4, 0, 0, 0, 0);
var victahana = new Player1(3, 2, 0, 0, 0);
var quxharne = new Player1(5, 0, 0, 0, 0);

// create new Player2 Actors.
var goblinWarrior = new Player2(4, 17, 0, 0, 0);
var koboldDragonshield = new Player2(6, 16, 0, 0, 0);
var koboldSlinger = new Player2(8, 13, 0, 0, 0);
var koboldMage = new Player2(7, 14, 0, 0, 0);