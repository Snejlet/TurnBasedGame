// this array will hold the images loaded by loadImg()
var graphics = [];

// this keeps track of the player turn
playerTurn = 1;

function loadImg() {
    // the assets I want to load
    var graphicsToLoad = ["Assets/map577x321.png", "Assets/everard.png", "Assets/stanvolm.png", "Assets/tileHighlight.png"];
    // this will be incremented when an image is loaded, and is used to stop the for loop when all images are loaded.
    var graphicsLoaded = 0;

    // loops through graphicsToLoad and loads the images, increments graphicsLoaded, and stores the images in graphics[],
    // then calls drawMap() once everything is loaded.
    for (var i = 0; i < graphicsToLoad.length; i++) {
        graphics[i] = new Image();
        graphics[i].src = graphicsToLoad[i];
        graphics[i].onload = function() {
            graphicsLoaded++;
            if (graphicsLoaded === graphicsToLoad.length) {
                drawMap()
            }
        }
    }
}

// starting positions for the player sprites. Used in the drawMap()
playerOneX = 3;
playerOneY = 0;
playerTwoX = 5;
playerTwoY = 0;

function drawMap() {

    // gets the canvas HTML element and sets the context
    var ctx = document.getElementById("map").getContext("2d");
    // clears everything when drawMap() is called
    ctx.clearRect(0,0,577,321);

    //draws in the entire map (doubled base resolution. looks like crap now. fix this later)
    ctx.drawImage(graphics[0], 0, 0, 1154, 642);

    for (var i = 0; i < mapGrid.length; i++) {
        for (var j = 0; j < mapGrid[i].length; j++) {
            //this is to highlight tiles I want to have collision on
            if (mapGrid[i][j] === 5) {
                ctx.drawImage(graphics[3], j * 64, i * 64, 64, 64)
            }
            // places player one at the defined starting position
            if (playerOneX === i && playerOneY === j) {
                ctx.drawImage(graphics[1], j * 64, i * 64, 64, 64)
            }
            // places player two at the defined starting position
            if (playerTwoX === i && playerTwoY === j) {
                ctx.drawImage(graphics[2], j * 64, i * 64, 64, 64)
            }
        }
    }
}