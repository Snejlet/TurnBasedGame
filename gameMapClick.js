// stores the calculated X and Y co-ordinate of the click event, as translated to the mapGrid[]
var xClick;
var yClick;

var canvasClicked = function(event) {
    var elem = document.getElementById("map"),
        // variables to hold the offset from the edge of the screen to the top and left edges of the canvas
        elemLeft = elem.offsetLeft,
        elemTop = elem.offsetTop;

        // subtracts the elemLeft and elemTop from the mouse click x and y co-ordinates on the page to determine the
        // x and y co-ordinates on the canvas.
        var generalx = event.pageX - elemLeft,
            generaly = event.pageY - elemTop;

        // math to determine positions within the array based on pixel values.
        // numbers!
        if (generalx <= 64) {
            xClick = 0
        } else if (generalx <= 128) {
            xClick = 1
        } else if (generalx <= 192) {
            xClick = 2
        } else if (generalx <= 256) {
            xClick = 3
        } else if (generalx <= 320) {
            xClick = 4
        } else if (generalx <= 384) {
            xClick = 5
        } else if (generalx <= 448) {
            xClick = 6
        } else if (generalx <= 512) {
            xClick = 7
        } else if (generalx <= 576) {
            xClick = 8
        } else if (generalx <= 640) {
            xClick = 9
        } else if (generalx <= 704) {
            xClick = 10
        } else if (generalx <= 768) {
            xClick = 11
        } else if (generalx <= 832) {
            xClick = 12
        } else if (generalx <= 896) {
            xClick = 13
        } else if (generalx <= 960) {
            xClick = 14
        } else if (generalx <= 1024) {
            xClick = 15
        } else if (generalx <= 1088) {
            xClick = 16
        } else if (generalx <= 1154) {
            xClick = 17
        }

        if (generaly <= 64) {
            yClick = 0
        } else if (generaly <= 128) {
            yClick = 1
        } else if (generaly <= 192) {
            yClick = 2
        } else if (generaly <= 256) {
            yClick = 3
        } else if (generaly <= 320) {
            yClick = 4
        } else if (generaly <= 384) {
            yClick = 5
        } else if (generaly <= 448) {
            yClick = 6
        } else if (generaly <= 512) {
            yClick = 7
        } else if (generaly <= 576) {
            yClick = 8
        } else if (generaly <= 642) {
            yClick = 9
        }

        //console.log(xClick+" "+yClick);
    // calls the relevant character ability function if the associated HTML button has been clicked
    if (everardStab === 1) {
        everardStabItInnaFace()
    }

    if (everardShoot === 1) {
        everardShootItInnaFace()
    }

    if (stanvolmMissile === 1) {
        stanvolmMagicMissile();
    }
};

window.addEventListener('click', canvasClicked, true);