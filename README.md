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
8. [Technical Facts](#technical-facts)
9. [Repository and Project Board](#repository)
10. [Credits](#credits)

## Introduction

Welcome to Hacker Whacker, a themed whack-a-mole style game about stopping hackers from penetrating your security. The aim is to click quickly on appearing hackers to make them disappear and earn points for doing so. Making incorrect decisions will lead to a loss of points. The user will receive a final score at the end of the game showing how well they did.

This website was created during Hackathon 2 of the "16-Week High-Performance Full Stack Skills Bootcamp" which ranged from 02/07/2024 (from 9am) to 04/07/2024 (up to 1.30pm). Planning and preparation for the Hackathon was conducted over the four days surrounding the weekend before (28-06-2024 to 01-07-2024). The following requirements were given for this project:-  

* The main goal is the creation of an interactive front-end web application using HTML, CSS and JavaScript.
* The site should meet the purpose it was designed for.
* Navigation from page to page should be clear and obvious to the user.
* Any CSS animations used should not be overwhelming.
* Appropriate feedback should be given to user actions.
* The site must work responsively on all screen sizes, including mobile, tablet and desktop.
* Error handling should be implemented as required. This also includes ensuring that the site does not break if the user behaves unexpectedly.
* All images should have the correct aspect ratio and be of an appropriate size.
* The HTML, CSS and JavaScript code should pass W3C and JSHint validation.
* Semantic HTML should be used as appropriate.
* No commented-out code should be left in the project by the end.
* The project should be fully documented in a Markdown format (as in this document).
* Full credits should be given for all material used from external sources. This includes frameworks, code and images etc.
* All code should be appropriately commented.
* A standard file/folder convention should be used to store all content.
* File and variable names should be appropriately chosen according to their function.
* The site should be fully tested to ensure everything works as expected.
* There should be no console errors found in the browser developer tools.
* The project should be managed using a project board.
* The game should be as accessible as possible. This involves the following steps:-
    * Making sure colour contrast is clearly well-defined throughout the site.
    * Ensuring all images have an appropriate alt tag.

<a id="instructions"></a>
## Instructions and Features

Hacker Whacker is designed to be a fun, themed whack-a-mole style game that is clear to use from the outset and also interactively engage the user. It is simple to operate and can be easily navigated. The whole site is based on a single HTML page split into four main sections, all of which are displayed in the full browser window. Three of these are hidden at all times while one remains visible. The page shown is dependent on user decisions as they navigate the site.

### General Styling and Main Screen

As can be seen in the following, Hacker Whacker utilised a themed style to present the content. The background is a Matrix like image with an additional distorted, neon logo to show the site name. This is further supported by a branded image depicting the team. These elements as a header are shown on all pages throughout the site. Two large buttons provide access to the game screen or to the instructions as the user requires. Most of the site looks very similar when the size of the browser window is taken into account and so screenshots are typically shown at only one size here.

Main menu screen:

![Main menu screen](/assets/images/docs/mainmenu.png "Main menu screen")

The buttons used on the site are all interactive and glow a neon colour when hovered over. This is largely to invest the user in the theme of the site and also provide some interactive feedback.

Interactive buttons on mouse-over:

![Interactive buttons](/assets/images/docs/buttons.png "Interactive buttons")

### Instruction Screen

If the user selects the instructions page, a very simple idea of how to play the game is shown. Hacker Whacker is not a difficult game to play and the instructions are therefore limited. A single button is provided to exit back to the main menu.

Instruction screen:

![Instruction screen](/assets/images/docs/instructions.png "Instruction screen")

### Game Screen

From the main menu, the user can select to start a game. Once they have done so, the following screen appears. It should be noted that the term "click" will be used interchangeably throughout this document for mobile and traditional computer devices. In this context, it describes pressing on a touch-screen device or clicking a button on a more traditional mouse or trackpad.

![Game screen before game start](/assets/images/docs/gamescreen1.png "Game screen before game start")

This is the game screen before the user has started playing. It shows a score on the top left and the time left on the top right. The user receives 5 points for correctly clicking on a hacker and loses 10 for clicking on a monitor without one. No points are lost or gained from missing a hacker. The game can be started on the bottom left and ended at any time on the bottom right. It can also be ended by clicking on the Hacker Whacker logo to get back to the main menu. If a game is started and is allowed to run to the end, the final score page will be shown and the game screen closed.

![Game screen before game start](/assets/images/docs/gamescreen2.png "Game screen before game start")

The screen above shows a game in motion and the button on the bottom left shows "Started". A hacker has appeared and a user can score points by clicking on it. If the user is successful, the hacker will glow green and disappear. Clicking on a monitor icon will cause it to glow red. These are user feedback cues for how they are being scored in the game. The game continues for 30 seconds before the user is shown the final score screen.

### Final Score Screen

![Final score screen](/assets/images/docs/scorescreen.png "Final score screen")

The final score screen appears if the user ends the game manually or runs out of time playing. It can be seen that the page is very simplistic with a final score and two buttons. The latter two buttons allow the user to play again or return to the main menu. If the user chooses to play again, the game screen will return and the game will immediately begin without requiring the user to press "Start Game". If the user chooses to return to the main menu and then start a new game, they will be required to start the game manually again using the "Start Game" button. This decision has been made to enhance the user interface. A new user of the game may wish to see the design before playing. However, any individual who wishes to play again is unlikely to require the same consideration.

### Responsiveness

As documented earlier, the interface is largely similar if viewed on a very small or very large device apart from the amount of space that is available. The following screenshot shows the interface on a mobile screen of 320x480 in pixels.

![Game view on a small mobile](/assets/images/docs/mobileview.png "Game view on a small mobile")

The following is on a laptop screen of 1024x768:-

![Game view on a laptop](/assets/images/docs/desktopview.png "Game view on a laptop")

The space available is greater on a bigger device and the interface is generally scaled up to support this, but the content is virtually the same and looks very similar on any device.

<a id="development"></a>
## Development Considerations

Upon finding out the members of the team, we were directed to choose a team name and a repository owner. We choose HackAttack from a list of suggestions made by ChatGPT. The project brief given to us suggested three ideas for a project, a game, a quiz application and finally an API based reporting website. We decided collectively that we liked the idea of making a game and shortlisted three ideas ChatGPT suggested based on the project brief. From these, we eventually chose Whack-a-mole. It was decided early on that this would be a themed project to provide more interest and a hacker-based concept was chosen. At this early stage, the details were not firm and the wireframes were loosely designed. The initial abstract design idea is shown below:-

![Initial menu idea](/assets/images/docs/bm-menu.png "Initial menu idea")

The above shows a menu structure similar to that seen in the finished game, although a settings menu was never implemented due to the time available. A game concept wireframe was also drawn up, although the idea was more about the structure than the actual design and still focused on original Whack-a-mole style thinking. The idea was also that space on a mobile device might be very limited and thus utilising a great deal of the screen might be required, a concept that turned out to be less of an issue than anticipated.

![Initial game concept idea](/assets/images/docs/bm-gameconcept.png "Initial game concept idea")

Later on, some more detailed concepts were introduced based on these initial ideas. Ultimately, not all of these thoughts were utilised in the project, most notably those that were feature based and could not be included in the scope. However, these designs closely resembled the product that was built:-

![Detailed ideas on design](/assets/images/docs/sa-full.png "Detailed ideas on design")

Once the time had come to start the hackathon, a project board was set up using GitHub Projects and initially populated with tasks. As the project progressed, these items were moved from "Todo" to "In Progress" and then to "Completed".

Attempts were made to ensure the site met accessibility standards where possible, although the very nature of whack-a-mole does place limits on what can be done. All images have alternative textual information. The code is well commented throughout and all site images are of a reasonable size for display given the way they are used. A semantic HTML structure was used to implement the site.

## Testing

A wide variety of testing was carried out on the website after it was completed. This includes the following:-

- Page responsiveness was tested at mobile, tablet, laptop and desktop sizes
- All site links work as expected
- The game logic was tested and seems to be free of bugs. This was extended to include the behaviour of the application beyond just the game and into the site features.
- All images load as expected.
- Every HTML and CSS page on the site was checked with the W3C validator. All pages are error free and have no warnings. The JavaScript code was also checked with JSHint and all errors eliminated.

## Team

The team worked cooperatively to take the project from design to final implementation and testing.

* Ahmed Alvi - (https://github.com/coder-alvi)

* Sunita Arora - (https://github.com/AroraSunita)

* Barrie Millar - (https://github.com/CyberArchitect777)

<a id="future"></a>
## Future Wishlist

There are numerous improvements that could be made to this website given more available time. A selection of these are shown below. 

* A high score feature.
* Different game modes, perhaps ethical hackers that cost you points if you click on them for instance.
* Different difficulty levels, including changes in speed. 
* A better utilisation of space to create bigger game boards and more boxes. These could also be tailored to the device the game is being used on.
* Slightly better design by utilising screen space better.

<a id="deployment"></a>
## Project Deployment

The deployed website can be found [here](https://cyberarchitect777.github.io/hackathon2-hackattack-game-project/)

<a id="technical"></a>
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
* ChatGPT (mainly for code technique advice and name/project ideas)
* Websites Online, like Stack Overflow and Mozilla's JavaScript MDN (for code advice/reference)

<a id="repository"></a>
## Repository and Project Board

- GitHub repository - https://github.com/CyberArchitect777/hackathon2-hackattack-game-project
- GitHub project board - https://github.com/users/CyberArchitect777/projects/7
- GitHub deployed website - https://cyberarchitect777.github.io/hackathon2-hackattack-game-project/

## Credits

* Canva for all image resources used in creating the website