# Ludo Game
Ludo is a boardgame the you now with this websitw can play online with you friends.

## Features 
### Existing Features
The site is responsive to all screens and can also be played on a mobile.

#### Home page/Start page


#### Board


#### Players

#### Meetup Times section

#### The Footer 

##### Home page

##### Board game

### Features Left to Implement
- The number of Players the is choosen in the index page will change the dislpay of the gamebord. As it is now the pawn from the non selected player gets remove from the field but the field are the same.
- If not all the 4 players are selected the user can select if the remaining player sould be played bye the computer.
- The user can click and drag the pawn instead of just clicking.
- When hoovering over the pawn it displays the squer it will land on

## Design

### Wireframe

### Color/Images


## Technologies

- **HTML** <br>
 The structure of the Website was developed using HTML as the main language.
- **CSS** <br>
The website's styling was achieved through the use  CSS, which is located in an external file.
- **Javascript** <br>
The website was made interactive by using Javascript. 
- **Gitpod** <br>
The website was created by using Gitpod.
- **GitHub** <br>
The source code is hosted on GitHub and deployed using Git Pages.
- **Git** <br>
During the development of the website, Git was utilized to commit and push code.
- **Font Awesome** <br>
Icons from https://fontawesome.com/ are used as Home and restart icons the footer.
- **Covertio** <br>
To convert some images from jpg or png to web format, we used [Convertio](https://convertio.co/jpg-webp/).
- **Tinyjpg** <br>
Used https://tinyjpg.com/ to compress the size of the images.
- **[Favicon.io](https://favicon.io/favicon-converter/)** <br>
Favicon files were made at 
- **[balsamiq](https://balsamiq.com/wireframes/desktop/#)** <br>
Used balsamiq to create the wireframes.

## Testing
### Test
In the section the tests that have occur will be explained. The first part explains what is expected to occur and how the test has been performed. As the other part discribe what happpens under the test. 
#### Start page
##### Select number of players
The start page of the game allows the user to choose the number of players, whether it's two, three, or four. Once the number of players is selected, the buttons should disappear and the corresponding number of input text-boxes should appear. Additionally, a new button should appear that signals the start of the game. This was tested by clicking on the three different buttons and seeing the response.
###### What occur
The website functioned as intended and did not display any error messages.

##### Name entered
When entering the name in the input textboxes and clicking on "Start the game" the names should follow woth to the boargame page. If a namn isn't entered Player and the number of the player i enter as default. It was tested for two players where all boxes was entered and where some, no boxes was filled.
###### What occur
The website functioned as intended and did not display any error messages. However, if the user user eneter a space that will be the entered name.

##### Game Rules
Testing the preformes on the model that should apear when you click on "Rules for Ludo". When the user click on the button "Rules to Ludo" a model apears in the medel of the screen. This have been tested in diffrent times both when buttons for the number players are displayed and when the input-boxes are displayed. 
###### What occur
The website functioned as intended and did not display any error messages.

#### Footer
The Font Awesome icons in the footer were tested to ensure that they each open the home/start page and have a hover effect with a black border around the icon. This have been tested in diffrent times both when buttons for the number players are displayed and when the input-boxes are displayed. 
###### What occur
As expected, each item goes back to the home page when clicked, and the correct hover border apears when the user hovers over the icon.

#### Boardgame page
##### Rolling dice
To roll the die the user/users click on the dice icon that are placed underneth the text "Roll dice". When clicking on the dice a new dice will apear that chooses the number of steps the pawn can move. After a pawn has been selected and moved the dice will display the same icon as in the begining. The dice should not change before a pawn have been selected exept on the first round. This have been tested by clicking on the dice symbol in the begining of the users turn and after the die display the number of movment for the pawn.

##### Rolling dice on the firt round
On the first round all players have the oppertunety to roll the die three times to get a one or a six. When the dice is rolled the number are displayed for 2 secondes and then change back to the icon that was in the begining.

###### What occur
For both functions the website functioned as expexted and did not display any error message.

##### Movment on the first round
On the first round all players have the oppertunety to roll the die three times to get a one or a six. If a player receive a one or a six on the first or the second roll their turn is over and next player will start their turn. When a player gets a one or a six the code automaticlly moves the pawn with the number 1 the responing steps. The performents of this function have been tested with two, three and four players.
###### What occur
The website functioned as intended and did not display any error messages or crashed.

##### Movment after the first round and a corret movment
After the die have been rolled the user are able to select the pawn that it what to move by clicking on the pawn on the board. When a pawn is selected the pawn will move the number of squers that are displayed on the die. The user should not be able to select its opponent's pawn. To test this preformens a pawn on the field that is threi own have been selected and tryed to select the opponents pawn as well.
###### What occur
The website functioned as intended and the pawn moved the number that was displayed on the die. When a opponents pawn was selected nothing happen which has expected. The website did not display any error messages or crashed.

##### Movment when a pawn is at home is selected
If the dice does show a one or a six the user are not able to move a pawn that are at the home. If a pawn is selected an alert message apear saying that the user are not able to selcet this pawn or any pawn that are in the home and is referred to select a pawn on the field. This alert messange will apear everytime you select a pawn in the home if you have pawns on the field. This was tested by repetetly clicking on a pawn that was in the home eventhough a pawn was on the field. 
###### What occur
As expected the alert message apeared everytime until the pawn on the field was selected. The website did not display any error messages or crashed.

##### Movment when all pawns are at the homebase
If the dice does show a one or a six the user are not able to move a pawn that are at the home. If all the pawns are at the homebase the user need to click one of the pawns and an alert message apear saying that this is the end of their turn because they are not able to move any of their pawns. After the user have click ok the turn is ended and the next player can roll the dice. This was tested by clicking on the pawns in the homebase and on the opponent's pawns. 
###### What occur
The website functioned as intended and did not display any error messages.

##### Push an opponent pawn
When a users pawn lands on the squer that is already occupied by opponets pawn is send back the oppponents pawn to their homebase. To test this an number of test games have been made with two, three and four players. When a pawn is push it should apear on its homebaseplate as in the picture below.
###### What occur
The website functioned as intended and did not display any error messages.


### Accessibility

[Wave Accessibility](https://wave.webaim.org/) tool was used throughout development and for final testing of the deployed website to check for any aid accessibility testing.

Testing was focused to ensure the following criteria were met:

- All forms have associated labels or aria-labels so that this is read out on a screen reader to users who tab to form inputs
- Color contrasts meet a minimum ratio as specified in [WCAG 2.1 Contrast Guidelines](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html)
- Heading levels are not missed or skipped to ensure the importance of content is relayed correctly to the end user
- All content is contained within landmarks to ensure ease of use for assistive technology, allowing the user to navigate by page regions
- All not textual content had alternative text or titles so descriptions are read out to screen readers
- HTML page lang attribute has been set
- Aria properties have been implemented correctly
- WCAG 2.1 Coding best practices being followed

### Validator Testing 

- HTML
  - No errors were returned when passing through the official [W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fcode-institute-org.github.io%2Flove-running-2.0%2Findex.html)
- CSS
  - No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fvalidator.w3.org%2Fnu%2F%3Fdoc%3Dhttps%253A%252F%252Fcode-institute-org.github.io%252Flove-running-2.0%252Findex.html&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en#css)

### Fixed Bugs
- when rolling a 6 the second roll wantn´t a 6 the player was able to select a pawn but it didnt move.
- when you roll two 6 after eachother the second time the selected moved 12 steps insted of 6.
- when a player had all is pawn in the nest the game didnt end.
- When a player last pawn enter the nest on a 6 the cod got stuck on the next line.

### Unfixed Bugs
- When a player have all the pawn in the home the user must click on a pawn in the home again after the alert for the game to continute. This only happen when the user have 3 pawns or less on the board.
- The user are able to push there own pawn of the field and back to the homebase.
- If the fist player is the winner the rest of the players still have one more turn.


## Deployment
 

## Credits 
 

### Content 


### Media
 

### Acknowledgements 

