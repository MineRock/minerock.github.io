var colors = generateRandomNumber(6);

var colorSquares = document.querySelectorAll(".square");

var pickedColor = colors[randomColorIndex(6)];

var rgbColorSpan = document.querySelector("#rgbColor");

var gameStateMessage = document.querySelector("#gamecheck");

var h1 = document.querySelector("h1");

var resetButton = document.querySelector("#reset");

var easyButton = document.querySelector("#easyB");

var hardModeOn = true;

var easyModeOn = false;

var gameActive = true;

easyButton.addEventListener("click", function () {
    if (!easyModeOn) {
        hardButton.classList.toggle("button-selected");
        easyButton.classList.toggle("button-selected");
        easyModeOn = true;
        hardModeOn = false;
    }
    console.log("GameActive is " + gameActive);
    console.log("Hard mode is " + hardModeOn);
    console.log("Easy mode is " + easyModeOn);
    easyMode();
});

var hardButton = document.querySelector("#hardB");

hardButton.addEventListener("click", function () {
    if (!hardModeOn) {
        // hardButton.classList.toggle("button-selected");
        // easyButton.classList.toggle("button-selected");
        easyButton.classList.toggle("button-selected");
        hardButton.classList.toggle("button-selected");
        hardModeOn = true;
        easyModeOn = false;
    }
    console.log("GameActive is " + gameActive);
    console.log("Hard mode is " + hardModeOn);
    console.log("Easy mode is " + easyModeOn);
    hardMode();
});

rgbColorSpan.textContent = pickedColor;

for (var i = 0; i < colorSquares.length; i++) {
    colorSquares[i].style.backgroundColor = colors[i];

    colorSquares[i].addEventListener("click", function () {
        var clickedColor = this.style.backgroundColor;
        if (clickedColor === pickedColor) {
            console.log("GameActive is " + gameActive);
            if (gameActive) {
                hardButton.disabled = "true";
                hardButton.classList.toggle("disabled");
                easyButton.disabled = "true";
                easyButton.classList.toggle("disabled");
                gameActive = false;
            }
            console.log("GameActive is " + gameActive);
            gameStateMessage.textContent = "Correct!";
            for (var j = 0; j < colorSquares.length; j++) {
                colorSquares[j].style.backgroundColor = pickedColor;
            }
            h1.style.backgroundColor = pickedColor;
            resetButton.textContent = "NEW GAME?";
        } else {
            gameStateMessage.textContent = "Try again!";
            this.style.backgroundColor = "#232323";
            if (gameActive) {
                hardButton.disabled = "false";
                easyButton.disabled = "false";
            }
        }
    });
}

function randomColorIndex(amount) {
    return Math.floor(Math.random() * amount);
}

function generateRandomNumber(amount) {
    var arr = [];
    for (var i = 0; i < amount; i++) {
        arr.push(rgbGenerator());
    }
    return arr;
}

function rgbGenerator() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

function refresh() {
    var amount;
    if (hardModeOn) {
        amount = 6;
        for (var i = 3; i < 6; i++) {
            colorSquares[i].style.display = "block";
        }
    } else if (easyModeOn) {
        amount = 3;
        for (var i = 3; i < 6; i++) {
            colorSquares[i].style.display = "none";
        }
    }
    if (!gameActive) {
        hardButton.disabled = !hardButton.disabled;
        hardButton.classList.toggle("disabled");
        easyButton.disabled = !easyButton.disabled;
        easyButton.classList.toggle("disabled");
        gameActive = true;
    }

    console.log(amount);
    colors = generateRandomNumber(amount);
    pickedColor = colors[randomColorIndex(amount)];
    rgbColorSpan.textContent = pickedColor;
    for (var i = 0; i < colorSquares.length; i++) {
        colorSquares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "steelblue";
    resetButton.textContent = "NEW COLORS";
    gameStateMessage.textContent = "";
}

function easyMode() {
    colors = generateRandomNumber(3);
    pickedColor = colors[randomColorIndex(3)];
    rgbColorSpan.textContent = pickedColor;
    for (var i = 3; i < 6; i++) {
        colorSquares[i].style.display = "none";
    }
    for (var i = 0; i < colorSquares.length - 3; i++) {
        colorSquares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "steelblue";
    resetButton.textContent = "NEW COLORS";
    gameStateMessage.textContent = "";
}

function hardMode() {
    colors = generateRandomNumber(6);
    pickedColor = colors[randomColorIndex(6)];
    for (var i = 3; i < 6; i++) {
        colorSquares[i].style.display = "block";
    }
    rgbColorSpan.textContent = pickedColor;
    for (var i = 0; i < colorSquares.length; i++) {
        colorSquares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "steelblue";
    resetButton.textContent = "NEW COLORS";
    gameStateMessage.textContent = "";
}