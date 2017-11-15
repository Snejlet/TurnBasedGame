var actorArray = [];

// create the Actor prototype, or class, or constructor or whatever the hell this actually is.
function Actor(xPos, yPos, player, name, hp, dmg, arm, spd, mv) {
    this.xPos = xPos;
    this.yPos = yPos;
    this.player = player;
    this.name = name;
    this.hp = hp;
    this.dmg = dmg;
    this.arm = arm;
    this.spd = spd;
    this.mv = mv;
}

// create the Player1 whatever, and inherit the attributes of Actor. This will eventually be relevant.
function Player1(xPos, yPos, player, name, hp, dmg, arm, spd, mv) {
    Actor.call(this, xPos, yPos, player, name, hp, dmg, arm, spd, mv);
    // push each actor into the actorArray[] when they are created.
    actorArray.push(this);
}

// create the Player2 thingy, and inherit the attributes of Actor.
function Player2(xPos, yPos, player, name, hp, dmg, arm, spd, mv) {
    Actor.call(this, xPos, yPos, player, name, hp, dmg, arm, spd, mv);
    actorArray.push(this);
}

// create new Player1 Actors.
var everard = new Player1(3, 3, "Player 1", "Everard", 0, 0, 0, 8, 3);
var stanvolm = new Player1(4, 0, "Player 1", "Stanvolm", 0, 0, 0, 4, 3);
var victahana = new Player1(3, 2, "Player 1", "Victahana", 0, 0, 0, 2, 3);
var quxharne = new Player1(5, 0, "Player 1", "Quxharne", 0, 0, 0, 1, 3);

// create new Player2 Actors.
var goblinWarrior = new Player2(4, 17, "Player 2", "Goblin Warrior", 0, 0, 0, 5, 3);
var koboldDragonshield = new Player2(6, 16, "Player 2", "Kobold Dragonshield", 0, 0, 0, 6, 3);
var koboldSlinger = new Player2(8, 13, "Player 2", "Kobold Slinger", 0, 0, 0, 7, 3);
var koboldMage = new Player2(7, 14, "Player 2", "Kobold Mage", 0, 0, 0, 3, 3);
