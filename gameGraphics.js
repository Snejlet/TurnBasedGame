/*
    This is the array that holds the tile positions in the map grid
    in this array:
    1 = Can't move up
    2 = Can't move right
    3 = Can't move down
    4 = Can't move left
    5 = Collision object (in case I find a better way of doing this
    find a better way of doing this. I miss when this was readable at a glance.
    */
var mapGrid = [
    [5,5,0,0,0,5,5,0,5,0,0,0,0,0,0,0,0,5],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,5,5,5,5,0,0,0,0,0],
    [0,0,0,0,0,0,0,5,0,5,5,5,5,5,5,5,5,0],
    [0,0,0,0,0,0,0,0,0,5,5,5,5,5,5,5,5,0],
    [0,0,5,5,0,0,0,0,0,0,0,0,5,5,5,0,0,0],
    [0,0,5,5,0,0,0,0,0,0,0,0,5,5,0,0,0,0],
    [0,0,0,0,0,0,0,0,5,5,0,0,5,0,0,0,0,0],
    [5,5,0,0,0,0,0,5,5,5,0,0,0,0,0,0,0,0]
];

// this array will hold the images loaded by loadImg()
var graphics = [];
var highlights = [];

function loadImg() {
    // the assets I want to load
    var graphicsToLoad = ["Assets/map577x321.png", "Assets/tileHighlight.png", "Assets/everard.png",
        "Assets/stanvolm.png", "Assets/victahana.png", "Assets/quxharne.png", "Assets/goblinWarrior.png",
        "Assets/koboldDragonshield.png", "Assets/koboldSlinger.png", "Assets/koboldMage.png",
        "Assets/tileHighlight.png"];
    var highlightsToLoad = ["Assets/tileAttackHighlight.png", "Assets/tileAttackHighlight3.png",
        "Assets/tileAttackHighlight5.png", "Assets/tileAttackHighlight7.png", "Assets/tileAttackHighlight9.png",
        "Assets/tileAttackHighlight11.png", "Assets/tileAttackHighlight13.png", "Assets/tileAttackHighlight15.png",
        "Assets/tileAttackHighlight17.png"];
    // this will be incremented when an image is loaded, and is used to stop the for loop when all images are loaded.
    var graphicsLoaded = 0;
    var highlightsLoaded = 0;
    var highlightsLoadedCheck = 0;

    for (var j = 0; j < highlightsToLoad.length; j++) {
        highlights[j] = new Image();
        highlights[j].src = highlightsToLoad[j];
        highlights[j].onload = function() {
            highlightsLoaded++;
            if (highlightsLoaded === highlightsToLoad.length) {
                highlightsLoadedCheck = 1;
            }
        }
    }

    // loops through graphicsToLoad and loads the images, increments graphicsLoaded, and stores the images in graphics[],
    // then calls drawMap() once everything is loaded.
    for (var i = 0; i < graphicsToLoad.length; i++) {
        graphics[i] = new Image();
        graphics[i].src = graphicsToLoad[i];
        graphics[i].onload = function() {
            graphicsLoaded++;
            if (graphicsLoaded === graphicsToLoad.length && highlightsLoadedCheck === 1) {
                drawMap()
            }
        }
    }
}

function drawMap() {

    // gets the canvas HTML element and sets the context
    var ctx = document.getElementById("map").getContext("2d");
    // clears everything when drawMap() is called
    ctx.clearRect(0,0,1154,642);

    //draws in the entire map (doubled base resolution. looks like crap now. fix this later)
    ctx.drawImage(graphics[0], 0, 0, 1154, 642);

    for (var j = 0; j < mapGrid.length; j++) {
        for (var i = 0; i < mapGrid[j].length; i++) {
            //this is to highlight tiles I want to have collision on
            /*
            if (mapGrid[i][j] === 5) {
                ctx.drawImage(graphics[1], j * 64, i * 64, 64, 64)
            }*/
            // places sprites at the starting position defined in gameActors.js
            if (everard.xPos === i && everard.yPos === j) {
                if (everard.hpcur > 0) {
                    ctx.drawImage(graphics[2], i * 64, j * 64, 64, 64)
                }
            }
            if (stanvolm.xPos === i && stanvolm.yPos === j) {
                if (stanvolm.hpcur > 0) {
                    ctx.drawImage(graphics[3], i * 64, j * 64, 64, 64)
                }
            }
            if (victahana.xPos === i && victahana.yPos === j) {
                if (victahana.hpcur > 0) {
                    ctx.drawImage(graphics[4], i * 64, j * 64, 64, 64)
                }
            }
            if (quxharne.xPos === i && quxharne.yPos === j) {
                if (quxharne.hpcur > 0) {
                    ctx.drawImage(graphics[5], i * 64, j * 64, 64, 64)
                }
            }
            if (goblinWarrior.xPos === i && goblinWarrior.yPos === j) {
                if (goblinWarrior.hpcur > 0) {
                    ctx.drawImage(graphics[6], i * 64, j * 64, 64, 64)
                }
            }
            if (koboldDragonshield.xPos === i && koboldDragonshield.yPos === j) {
                if (koboldDragonshield.hpcur > 0) {
                    ctx.drawImage(graphics[7], i * 64, j * 64, 64, 64)
                }
            }
            if (koboldSlinger.xPos === i && koboldSlinger.yPos === j) {
                if (koboldSlinger.hpcur > 0) {
                    ctx.drawImage(graphics[8], i * 64, j * 64, 64, 64)
                }
            }
            if (koboldMage.xPos === i && koboldMage.yPos === j) {
                if (koboldMage.hpcur > 0) {
                    ctx.drawImage(graphics[9], i * 64, j * 64, 64, 64)
                }
            }
        }
    }
}