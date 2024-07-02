
let startGameButton = document.getElementById("start-button");
startGameButton.addEventListener("click", function () { 
    displayWindow("game-screen")
});

let instructionsButton = document.getElementById("how-to-play-button");
instructionsButton.addEventListener("click", function () { 
    displayWindow("instructions-screen")
});

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

function createBoard() {
    let gameBoard = document.getElementById("boxes")
    let gameCode = "";

    gameCode += `<div class="hide" id="hacker-data">-1</div><div class="row">`;

    for (let x=0; x<16; x++) {
        if (x % 4 == 0) {
            gameCode +=`</div><div class="row d-flex justify-content-center">`;
        }
        gameCode +=`<div id="box${x}" class="hackerbox col-3"><img id="image${x}" class="img-fluid" alt="Desktop Tile Image" src="assets/images/desktop.png"></div>`;
    }

    gameCode +="</div>";
    gameBoard.innerHTML += gameCode;
}

function setUpListeners() {
    for (let x=0; x<16; x++) {
        let selectedImage = document.getElementById("image" + x);
        selectedImage.addEventListener("click", checkAnswer);
    }
}

function checkAnswer(eventAction) {
    let targetBox = (eventAction.target.id).substring(5);
    if (targetBox == document.getElementById("hacker-data").innerText) {
        alert("You got me!");
    } else {
        alert("Missed me!");
    }
}

function removeHacker(hackerPosition) {
    document.getElementById("image" + hackerPosition).src = "assets/images/desktop.png";
}

function placeHacker(hackerPosition) {
    document.getElementById("image" + hackerPosition).src = "assets/images/hacker_skull.png";
}

function gameRun(passedGameRounds) {

    let currentHackerLocation = document.getElementById("hacker-data");

    if (currentHackerLocation.innerText != -1) {
        removeHacker(currentHackerLocation.innerText);
    }

    const newHackerLocation = Math.floor(Math.random() * 16);
    placeHacker(newHackerLocation);
    currentHackerLocation.innerText = newHackerLocation.toString();
    
}

function gameStart() {
    const gameRounds = 120; // Number of iterations the game will go through
    const timeInterval = 1000; // Number of miliseconds per iteration

    createBoard();
    setUpListeners();

    let gameThread = setInterval(gameRun, timeInterval, gameRounds);

}

gameStart();
