# Hacker Whacker
## By HackAttack
### A Themed Whack-A-Mole Style Game

# Table of Contents

1. [Introduction](#introduction)
2. [Instructions and Features](#instructions)
3. [Development Considerations](#development)
4. [Testing](#testing)
5. [Team](#team)
6. [Future Wishlist](#future)
7. [Project Deployment](#deployment)
8. [Technical Fact](#technical-facts)
9. [Repository and Project Board](#repository)
10. [Credits](#credits)

## Introduction

Welcome to Hacker Whacker, a themed whack-a-mole style game about stopping hackers from penetrating your security. The aim is to click quickly on appearing hackers to make them disappear and earn points for doing so. Making incorrect decisions will lead to a loss of points. The user will receive a final score at the end of the game showing how well they did.

This website was created during Hackathon 2 of the "16-Week High-Performance Full Stack Skills Bootcamp" which ranged from 02/07/2024 to 04/07/2024 (1.30pm). Planning and preparation for the Hackathon was conducted over the four days surrounding the weekend before (28-06-2024 to 01-07-2024). The following requirements were given as to what was required by the end.

* The main goal is the creation of an interactive front-end web application using HTML, CSS and JavaScript
* The site should meet the purpose it was designed for.
* Navigation from page to page should be clear and obvious to the user.
* Any CSS animations used should not be overwhelming or over the top.
* Apropriate feedback should be given to user interaction as required.
* The site must work responsively on all screen sizes, including mobile, tablet and desktop.
* Error handling should be implemented as required. This also includes ensuring that the site does not break if the user behaves unexpectedly.
* All images should have the correct aspect ratio and be of an apropriate size.
* The HTML, CSS and JavaScript code should pass W3C and JSHint validation.
* Semantic HTML should be used as apropriate.
* No commented-out code should be left in the project at the end.
* The project should be fully documented in a Markdown format (as in this document)
* Full credits should be given for all material used from external sources. This includes frameworks, code and images etc.
* All code should be apropriately commented.
* A standard file/folder structure should be used to store all content.
* File and variable names should be apropriately chosen according to their function.
* The site should be tested fully to ensure everything works as expected.
* There should be no developer console errors.
* The project should be managed using a project board.
* The game should be as accessible as possible. This involves the following steps:-
    * Making sure colour contrast is clearly well-defined throughout the site.
    * Ensuring all images have an apropriate alt text

## Instructions and Features

Hacker Whacker is designed to be a fun, themed whack-a-mole style game that is clear to use from the outset and also interactively engage the user. It is simple to use and can be easily navigate through the interface. The whole site is based on a single HTML page split into four main sections, all of which are displayed in the full browser window. Three of these are hidden at all times while one remains visible. The page selected is dependent on user decisions as they navigate the site.

### General Styling and Main Screen

As can be seen in the following, Hacker Whacker utilised a themed style to present the content. The background is a Matrix like image with a distorted, neon logo supported by an branded image for the team. This header is shown on all pages throughout the site. Two large buttons provide access to the game screen or to the instructions as the user wants. Most of the site looks very similiar when the size of the browser window is taken into account and so screenshots are typically shown at only one size here.

Main menu screen:

![Main menu screen](/assets/images/docs/mainmenu.png "Main menu screen")

The buttons used on the site are all interactive and glow a neon colour when hovered over. This is largely to invest the user in the theme of the user and also provide some interaction feedback.

Interactive buttons on mouse-over:

![Interactive buttons](/assets/images/docs/buttons.png "Interactive buttons")

### Instruction Screen

If the user selects the instructions page, a very simple idea of how to play the game is shown. Hacker Whacker is not a difficult game to play and the instructions are therefore limited. A single button is provided to exit back to the main menu.

Instruction screen:

![Instruction screen](/assets/images/docs/instructions.png "Instruction screen")

### Game Screen

From the main menu, the user can select to start a game. Once they have done so, the following screen appears. It should be noted that the term "click" will be used interchangably throughout this document for mobile and traditional computer devices. In this context, it describes pressing on a touch-screen device or clicking a button on a more traditional mouse or trackpad.

![Game screen before game start](/assets/images/docs/gamescreen1.png "Game screen before game start")

This is the game screen before the user has started playing. It shows a score on the top left and the time left in the top right. The user receives 5 points for correctly clicking on a hacker and loses 10 for clicking on a monitor without one. No points are lost or gained from missing a hacker. The game can be started in the bottom left and ended at any time in the bottom right. The game can also be ended by clicking on the Hacker Whacker logo to get back to the main menu. If a game is started and is allowed to run to the end, the final score page will be shown and the game screen closed.

![Game screen before game start](/assets/images/docs/gamescreen2.png "Game screen before game start")

The screen above shows a game in motion and the button on the bottom left shows "Started".  A hacker has appeared and a user can score points by clicking on it. If the user is successful, the hacker will glow green and disappear. Clicking on a monitor icon will cause it to glow red. These are user feedback cues for how they are being scored in the game. The game continues for 30 seconds before the user is shown the final score screen.

### Final Score Screen

![Final score screen](/assets/images/docs/scorescreen.png "Final score screen")

The final score screen appears if the user ends the game manually or runs out of time playing. It can be seen that the page is very simplistic with a final score and two buttons. The latter allows the user to play again or return to the main menu. If the user chooses to play again, the game screen will return and the game will immediately begin without requiring the user to press "Start Game". If the user chooses to return to the main menu and then start a new game, they will be required to start the game manually again using the "Start Game" button.

### Responsiveness

As documented earlier, the interface is largely similiar if viewed on a very small mobile or very large device apart from the amount of space that is available.




## Development Considerations

## Testing

## Team

The team worked cooperatively to take the project from design to final implementation and testing.

* Ahmed Alvi - (https://github.com/coder-alvi)

* Sunita Arora - (https://github.com/AroraSunita)

* Barrie Millar - (https://github.com/CyberArchitect777)

## Future Wishlist

## Project Deployment

## Technical Facts

### Technologies used:

* HTML
* CSS
* Bootstrap
* JavaScript

### Tools

* Slack (for communications)
* Balsamiq, Canva (for wireframing)
* Google Documents (for project planning)
* GitHub Projects (for project management)
* ChatGPT (for code technique advice)

## Repository and Project Board

## Credits

