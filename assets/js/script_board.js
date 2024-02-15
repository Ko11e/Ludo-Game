main();

//Functions
function main(){
    let NameofPlayers = getPlayerNameFromURL();
    const Playerstat = createBoard (NameofPlayers);
    rounds(Playerstat);

    
}

/**
 * Gets the Names given in the first pages and give a list of the names
 * @returns A list with the playersname.
 */
function getPlayerNameFromURL() {
    const urlString = window.location.href;
    let url = new URL(urlString);
    let list = [];

    const player1FromUrl = url.searchParams.get('player1');
    player1FromUrl !== '' ? list.push(player1FromUrl) : list.push('Player 1');
    const player2FromUrl = url.searchParams.get('player2');
    player2FromUrl !== '' ? list.push(player2FromUrl) : list.push('Player 2');
    
    let player3FromUrl = '';
    let player4FromUrl = '';
    try {
        player3FromUrl = url.searchParams.get('player3');
        if (player3FromUrl !== null){
            player3FromUrl !== '' ? list.push(player3FromUrl) : list.push('Player 3');
        }
        player4FromUrl = url.searchParams.get('player4');
        if (player4FromUrl !== null){
            player4FromUrl !== '' ? list.push(player4FromUrl) : list.push('Player 4');
        }
    } catch(e){};

    return list;
}

/**
 * Creats the number of players on the field and take away the pawn that are not selected.
 * @param {*} Listplayers 
 * @returns 
 */
function createBoard(Listplayers) {

    let listLenght = Listplayers.length;

    removenonplayers(listLenght);
    let statPlayers = createplayerobject(Listplayers);

    return statPlayers;
}

/**
 * Removes the players that are not selected
 * @param {} Numberofplayers 
 */
function removenonplayers(Numberofplayers) {
    for (let i = Numberofplayers + 1; i <= 4; i++) {
        let pawns = document.getElementsByClassName(`markerP${i}`)
        while (pawns[0]) {
            pawns[0].parentNode.removeChild(pawns[0]);
        }
    }
}

function createplayerobject(array){
    let listLenght = array.length;
    let colors = [[['red1', 'homeRed1'], ['red2', 'homeRed2'], ['red3', 'homeRed3'], ['red4', 'homeRed4']],
    [['green1', 'homeGreen1'], ['green2', 'homeGreen2'],['green3', 'homeGreen3'],['green4', 'homeGreen4']],
    [['yellow1', 'homeYellow1'], ['yellow2', 'homeYellow2'], ['yellow3', 'homeYellow3'], ['yellow4', 'homeYellow4']],  
    [['blue1', 'homeBlue1'], ['blue2', 'homeBlue2'],['blue3', 'homeBlue3'],['blue4', 'homeBlue4']]];
    let statPlayers = new Array();
    let pathways = [['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', 
    '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '1.1', '1.2', '1.3', '1.4'],
    ['11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', 
    '32', '33', '34', '35', '36', '37', '38', '39', '40', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '2.1', '2.2', '2.3', '2.4'],
    ['21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '1', 
    '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '3.1', '3.2', '3.3', '3.4'],
    ['31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', 
    '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '4.1', '4.2', '4.3', '4.4']]
    
    for (let i = 0; i < listLenght; i++) {
        if (listLenght ===2){
            if (i===1){
                let nameText = document.getElementById(`playerText${i+2}`);
                nameText.innerHTML = array[i];
                let stat = {Name: array[i], Nest: 0, Pathway: pathways[i+1], Pawn: colors[i+1]};
                statPlayers.push(stat);
            } else {
                let nameText = document.getElementById(`playerText${i+1}`);
                nameText.innerHTML = array[i];
                let stat = {Name: array[i], Nest: 0, Pathway: pathways[i], Pawn: colors[i]};
                statPlayers.push(stat);    
            }
        
        } else {
            let nameText = document.getElementById(`playerText${i+1}`);
            nameText.innerHTML = array[i];
            let stat = {Name: array[i], Nest: 0, Pathway: pathways[i], Pawn: colors[i]};
            statPlayers.push(stat);
        }
    }
    return statPlayers

}

/**
 * this is the first turn for every player since on the first time are able to roll the die 3 time to get a 1 or a 6.
 * @param {*} ArrayPlayers 
 * @returns a new list/object 
 */
async function firstTurn(ArrayPlayers) {
    for (let i=0; i<ArrayPlayers.length; i++){
        let activeplayer = document.getElementsByClassName('activemarker')[i];
        activeplayer.style.border = '2px solid black'; // Adds a marker to the active player

        let pathWay = ArrayPlayers[i].Pathway;
        let pawns = ArrayPlayers[i].Pawn;
        let rolls = 0;
        while (rolls !== 3){ // stop the turn if the players have rolled the die 3 times
            await waitForDieToBeRolled('dice');
            dice = rollDice();
            await new Promise(resolve => setTimeout(resolve, 2000));
            document.getElementById('dice').innerHTML = '<i class="fa-solid fa-dice"></i>';

            if (dice === 1){   
                let pawn = document.getElementById(pawns[0][0]);
                let stop = document.getElementById(pathWay[0]);

                pawns[0][1] = pathWay[0];
                stop.append(pawn);
                break;
            } else if (dice == 6){
                let pawn = document.getElementById(pawns[0][0]);
                let stop = document.getElementById(pathWay[5]);

                pawns[0][1] = pathWay[5];
                stop.append(pawn);
                break;
            } else {
                rolls +=1
            }
            
        }
        activeplayer.style.removeProperty('border'); // remove the marker from the active player
    }
    return ArrayPlayers
}

async function rounds(ArrayPlayers1){
    let ArrayPlayers = await firstTurn (ArrayPlayers1);
    
    let nest = 0;

    while (nest !==4){
        for (let i=0; i<ArrayPlayers.length; i++){
            let activeplayer = document.getElementsByClassName('activemarker')[i];
            activeplayer.style.border = '2px solid black';

            let pathWay = ArrayPlayers[i].Pathway
            let pawns = ArrayPlayers[i].Pawn;
            let roll = 2;

            await waitForDieToBeRolled('dice');
            let dice = rollDice();
            let pawnslist = pawnList(pawns) // Creates a list of a the remaining pawns in the game.
            let clickedPawnId = await waitForSelectecPawn(pawnslist);
            let possible = 'false';

            while (dice === 6){
                while (possible === 'false'){
                    possible = movePawns(pathWay, pawns, clickedPawnId, dice, ArrayPlayers);
                    if (possible === 'nest'){ // if the pawn goes to the center.
                        let index = removepawned(clickedPawnId, pawns)
                        pawns.splice(index, 1); //remove the pawn fron the list.
                        ArrayPlayers[i].Pawn = pawns;
                        ArrayPlayers[i].Nest += 1; // adds a score to the Nest
                        nest = ArrayPlayers[i].Nest;
                    } else if (possible === 'true'){ 
                        roll -= 1; // counter so the player can only roll max 3 times;
                        if (roll === 0){
                            break;
                        }
                        document.getElementById('dice').innerHTML = '<i class="fa-solid fa-dice"></i>';
                        await waitForDieToBeRolled('dice');
                        dice = rollDice();
                        clickedPawnId = await waitForSelectecPawn(pawnslist);
                        console.log(clickedPawnId);
                    } else {
                        if (allpawnsHome(pawns) === 'false'){// This will and the players turn if all the pawns are home 
                            break;
                        } else {
                            clickedPawnId = await waitForSelectecPawn(pawnslist);
                        }
                    }
  
                }
            }
            while (possible === 'false'){
                possible = movePawns(pathWay, pawns, clickedPawnId, dice, ArrayPlayers);
                if (possible === 'nest'){
                    let index = removepawned(clickedPawnId, pawns)
                    pawns.splice(index, 1); //remove the pawn fron the list.
                    ArrayPlayers[i].Pawn = pawns;
                    ArrayPlayers[i].Nest += 1;
                    nest = ArrayPlayers[i].Nest;
                } else if (possible === 'false') {
                    let allpawnsathome = allpawnsHome(pawns);
                    if (allpawnsathome === false){// This will and the players turn if all the pawns are home 
                        alert('You can only move this piece as you roll a 1 or a 6\nSince all your pawns are in the Home, this is the end of your turn');
                        break;
                    } else {
                        alert('You can only move this piece as you roll a 1 or a 6');
                        clickedPawnId = await waitForSelectecPawn(pawnslist);
                    }
                }

            }
            activeplayer.style.removeProperty('border');
            document.getElementById('dice').innerHTML = '<i class="fa-solid fa-dice"></i>';
            
            if (nest === 4){
                alert(`${ArrayPlayers[i].Name} is the winner!`);
            }
        
        }
    }

}

function rollDice() {
   let number = Math.floor(Math.random() *6);
   let dicedisplay = ['<i class="fa-solid fa-dice-one"></i>', '<i class="fa-solid fa-dice-two"></i>', '<i class="fa-solid fa-dice-three"></i>',
   '<i class="fa-solid fa-dice-four">','</i><i class="fa-solid fa-dice-five"></i>','<i class="fa-solid fa-dice-six"></i>'];
   document.getElementById('dice').innerHTML = dicedisplay[number];
   return number+1;
}

function movePawns(pathWay, pawns, PawnId, dice,ArrayPlayers) {
    let indexed = findpawnindex(pathWay,pawns,PawnId);
    let pawnindex = indexed[0];
    let pathindex = indexed[1];

    if (pathindex === null){ //shows that the pawn are home and can only be play if the die is a 6 or 1
        if (dice === 1 || dice === 6){
            let pawn = document.getElementById(PawnId);
            let stop = document.getElementById(pathWay[dice-1]);
            
            possiblePush(stop, ArrayPlayers)
            pawns[pawnindex][1] = pathWay[dice-1];
            stop.append(pawn);
            return 'true';
        } else {
            return 'false';            
        }

    } else {
        let pawn = document.getElementById(PawnId);
        let pawnpositionNew = pathindex+dice

        if (pawnpositionNew >= pathWay.length){ // did checks if the pawn can enter the nest.
            pawn.remove(); // pawn are removed from the field.
            return 'nest';
        } else {
            let stop = document.getElementById(pathWay[pawnpositionNew]);

            possiblePush(stop, ArrayPlayers)
            pawns[pawnindex][1] = pathWay[pawnpositionNew];
            stop.append(pawn);
            return 'true';
        }
        
    }

}

function waitForDieToBeRolled(ElementId) {
    return new Promise(resolve => {
        document.getElementById(ElementId).addEventListener("click", () => {
            resolve();
        });
    });
}

function waitForSelectecPawn(buttonIds) {
    return new Promise(resolve => {
        buttonIds.forEach(buttonId => {
            document.getElementById(buttonId).addEventListener("click", () => {
                resolve(buttonId);
            });
        });
    });
}

function removepawned(clickedPawnId, pawns) {
    for (let i=0; i< pawns.length; ++i){
        index = pawns[i].indexOf(clickedPawnId);
        if (index !== -1){
            return i
        }
    }
}

function pawnList(pawns){
    let list = [];
    for (let i=0; i < pawns.length; i++){
        list.push(pawns[i][0])
    }
    return list
}
/**
 * 
 * @param {*} pathWay 
 * @param {*} pawns 
 * @param {*} pawnid 
 * @returns the indexnumber if the pawn and where it is
 */
function findpawnindex(pathWay,pawns,pawnid){
    for (let i = 0; i < pawns.length; i++){
        if (pawns[i][0]===pawnid){
            let pathindex = pathWay.indexOf(pawns[i][1]);//see if the pawn is home.
            let indexNumber = i;

            if (pathindex === -1){
                console.log('the number of the pawn ' + indexNumber)
                return [indexNumber , null];
            } else {
                return [indexNumber , pathindex];
            }
        } 
    }
}

function allpawnsHome(pawns) {
    let pawnsHome = 0;
    for (let i=0; i < pawns.length; i++){
        let home = 'home' + pawns[i][0].charAt(0).toUpperCase() + pawns[i][0].slice(1);
        if (pawns[i][1] === home){
            pawnsHome += 1;
        }
    }
    if (pawnsHome === 4){
        return false
    } else {
        return true
    }      
}

function possiblePush(stop, ArrayPlayers) {
    if (stop.hasChildNodes() === true) {
        let pushedPiece = stop.firstChild.id
        let homebase = 'home'+ pushedPiece.charAt(0).toUpperCase() + pushedPiece.slice(1);

        let pawn = document.getElementById(pushedPiece);
        let homeplate = document.getElementById(homebase);
            
        homeplate.append(pawn);

        for (let i = 0; i < ArrayPlayers.length; i++){
            let pawn = ArrayPlayers[i].Pawn;
            for (let j = 0; j < pawn.length; j++){
                if (pawn[j][0] === pushedPiece){
                    pawn[j][1] = homebase;
                }
            }
        }

    }
}
