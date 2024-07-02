
let startGameButton = document.getElementById("start-button");
startGameButton.addEventListener("click", function () { 
    displayWindow("game-screen") 
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

