// create the Actor prototype, or class, or constructor or whatever the hell this actually is.
function Actor(xPos, yPos, name, hp, dmg, arm, spd) {
    this.xPos = xPos;
    this.yPos = yPos;
    this.name = name;
    this.hp = hp;
    this.dmg = dmg;
    this.arm = arm;
    this.spd = spd;
}

// create the Player1 whatever, and inherit the attributes of Actor. This will eventually be relevant.
function Player1(xPos, yPos, name, hp, dmg, arm, spd) {
    Actor.call(this, xPos, yPos, name, hp, dmg, arm, spd);
}

// create the Player2 thingy, and inherit the attributes of Actor.
function Player2(xPos, yPos, name, hp, dmg, arm, spd) {
    Actor.call(this, xPos, yPos, name, hp, dmg, arm, spd);
}

// create new Player1 Actors.
var everard = new Player1(2, 4, "Everard", 0, 0, 0, 8);
var stanvolm = new Player1(4, 0, "Stanvolm", 0, 0, 0, 4);
var victahana = new Player1(3, 2, "Victahana", 0, 0, 0, 2);
var quxharne = new Player1(5, 0, "Quxharne", 0, 0, 0, 1);

// create new Player2 Actors.
var goblinWarrior = new Player2(4, 17, "Goblin Warrior", 0, 0, 0, 5);
var koboldDragonshield = new Player2(6, 16, "Kobold Dragonshield", 0, 0, 0, 6);
var koboldSlinger = new Player2(8, 13, "Kobold Slinger", 0, 0, 0, 7);
var koboldMage = new Player2(7, 14, "Kobold Mage", 0, 0, 0, 3);
