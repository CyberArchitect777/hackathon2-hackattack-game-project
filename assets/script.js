
// Button event listener set up area

let startGameButton = document.getElementById("start-button");
startGameButton.addEventListener("click", function () { 
    displayWindow("game-screen")
});

let instructionsButton = document.getElementById("how-to-play-button");
instructionsButton.addEventListener("click", function () { 
    displayWindow("instructions-screen")
});

/**
* Displays the required div frame after being activated by an event or call.
**/
function displayWindow(windowName) {
    const allSitePages = document.querySelectorAll(".sitepage");

    for (oneSitePage of allSitePages) {
        if (oneSitePage.id == windowName) {
            oneSitePage.classList.remove("hide");
        } else {
            oneSitePage.classList.add("hide");
        }
    }
}

/**
* Creates the HTML code and embeds it in the page to display the initial play board
**/
function createBoard() {
    let gameBoard = document.getElementById("boxes")
    let gameCode = "";

    gameCode += `<div class="hide" id="hacker-pos">-1</div><div class="row">`;

    for (let x=0; x<16; x++) {
        if (x % 4 == 0) {
            gameCode +=`</div><div class="row d-flex justify-content-center">`;
        }
        gameCode +=`<div id="box${x}" class="hackerbox col-3"><img id="image${x}" class="img-fluid" alt="Desktop Tile Image" src="assets/images/desktop.png"></div>`;
    }

    gameCode +="</div>";
    gameBoard.innerHTML += gameCode;
}

/**
* Sets up event listeners for all created boxes on the play board
**/
function setUpListeners() {
    for (let x=0; x<16; x++) {
        let selectedImage = document.getElementById("image" + x);
        selectedImage.addEventListener("click", checkAnswer);
    }
}

/**
* Checks the location of the user action against the actual location of the hacker and adjusts the score apropriately
**/
function checkAnswer(eventAction) {
    let targetBox = (eventAction.target.id).substring(5);
    if (targetBox == document.getElementById("hacker-pos").innerText) {
        changeScore(5)
    } else {
        changeScore(-10);
    }
}

/**
* Removes the hacker image from a given box
**/
function removeHacker(hackerPosition) {
    document.getElementById("image" + hackerPosition).src = "assets/images/desktop.png";
}

/**
* Places the hacker image on a given box
**/
function placeHacker(hackerPosition) {
    document.getElementById("image" + hackerPosition).src = "assets/images/hacker_skull.png";
}

/**
* The main function that runs the game by calling other functions.
**/
function gameStart() {
    const gameRounds = 60; // Number of iterations the game will go through
    const timeInterval = 1; // Number of seconds per iteration

    setTimeLeft(gameRounds);
    createBoard();
    setUpListeners();

    // Starts the new game thread which runs every timeInterval for gameRounds
    const gameRun = setInterval(function() {
    
        let currentHackerLocation = document.getElementById("hacker-pos");
    
        if (currentHackerLocation.innerText != -1) {
            removeHacker(currentHackerLocation.innerText);
        }
    
        const newHackerLocation = Math.floor(Math.random() * 16);
        placeHacker(newHackerLocation);
        currentHackerLocation.innerText = newHackerLocation.toString();
        if (getTimeLeft() == 0) {
            clearInterval(gameRun);
            alert("Time is up");
        }
        changeTimeLeft(-timeInterval);
        

    }, (timeInterval*1000), gameRounds);

}

/**
* Gets the score from the display on the HTML code
**/
const getScore = () => (document.getElementById("score-display").innerText).substring(6);

/**
* Updates the change on the HTML page using the difference supplied
**/
const changeScore = scoreDifference => document.getElementById("score-display").innerText = "Score: " + (Number(getScore()) + Number(scoreDifference));

/**
* Gets the time left from the display on the HTML code
**/
const getTimeLeft = () => (document.getElementById("time-display").innerText).substring(5);

/**
* Updates the time on the HTML page using the difference supplied
**/
const changeTimeLeft = timeDifference => document.getElementById("time-display").innerText = "Time: " + (Number(getTimeLeft()) + Number(timeDifference));

/**
* Sets the time left with an absolute value
**/
const setTimeLeft = absoluteTimeLeft => document.getElementById("time-display").innerText = "Time: " + absoluteTimeLeft;

// Starts the main game function
gameStart();
