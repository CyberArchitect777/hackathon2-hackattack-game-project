
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
        gameCode +=`<div id="box${x}" class="hackerbox col-3"><img class="img-fluid" alt="Desktop Tile Image" src="assets/images/desktop.png"></div>`;
    }

    gameCode +="</div>";
    alert(gameCode);
    gameBoard.innerHTML += gameCode;
}

function setUpListeners() {
    for (let x=0; x<16; x++) {
        let selectedBox = document.getElementById("box" + x);
        selectedBox.addEventListener("click", checkAnswer);
    }
}

function gameStart() {
    const gameRounds = 120; // Number of iterations the game will go through
    const timeInterval = 1000; // Number of miliseconds per iteration

    createBoard();

}

gameStart();
