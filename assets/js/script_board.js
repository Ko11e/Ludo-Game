let NameofPlayers = getPlayerNameFromURL();
const Playerstat = createBoard (NameofPlayers);
//let NewPlaystat = firstTurn (Playerstat);
//rounds(NewPlaystat);

rounds(Playerstat);

//Functions
function main(){
    let NameofPlayers = getPlayerNameFromURL();
    const Playerstat = createBoard (NameofPlayers);
    firstTurn (Playerstat);

    




}

/**
 * Gets the Names given in the first pages and give a list of the names
 * @returns A list with the playersname.
 */
function getPlayerNameFromURL() {
    const urlString = window.location.href;
    let url = new URL(urlString);
    const player1FromUrl = url.searchParams.get('player1');
    const player2FromUrl = url.searchParams.get('player2');
    let player3FromUrl = '';
    let player4FromUrl = '';

    let list = [player1FromUrl, player2FromUrl]

    try {
        player3FromUrl = url.searchParams.get('player3');
        if (player3FromUrl !== null){
            list.push(player3FromUrl);
        }
        player4FromUrl = url.searchParams.get('player4');
        if (player4FromUrl !== null){
            list.push(player4FromUrl);
        }
    } catch(e){};
    console.log(list);
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
    if (listLenght)

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

            //if (Listplayers[i] === '');
                //Listplayers[i] = `Player${i+1}`;
            nameText.innerHTML = array[i];
            let stat = {Name: array[i], Nest: 0, Pathway: pathways[i], Pawn: colors[i]};
            statPlayers.push(stat);
        }
    }
    return statPlayers

}

/**
 * this is the first turn for every player.
 * @param {} ArrayPlayers 
 */
async function firstTurn(ArrayPlayers) {
    for (let i=0; i<ArrayPlayers.length; i++){
        let activeplayer = document.getElementsByClassName('activemarker')[i];
        activeplayer.style.border = '2px solid black';

        let pathWay = ArrayPlayers[i].Pathway;
        let pawns = ArrayPlayers[i].Pawn;
        let rolls = 0;
        while (rolls !== 3){
            await waitForDieToBeRolled('dice');
            dice = rollDice();
            console.log(dice);

            if (dice === 1){              
                let pawn = document.getElementById(pawns[1][0]);
                let stop = document.getElementById(pathWay[0]);
                pawns[0][1] = stop;
                stop.append(pawn);
                console.log(pawns);
                break;
            } else if (dice == 6){
                let pawn = document.getElementById(pawns[1][0]);
                let stop = document.getElementById(pathWay[5]);
                pawns[0][1] = stop;
                stop.append(pawn);
                console.log(pawns);
                break;
            } else {
                rolls +=1
            }

        
        }
        activeplayer.style.removeProperty('border');
    }
    return ArrayPlayers
}

async function rounds(ArrayPlayers){
    let nest = 0;

    while (nest !==4){
        for (let i=0; i<ArrayPlayers.length; i++){
            let activeplayer = document.getElementsByClassName('activemarker')[i];
            activeplayer.style.border = '2px solid black';
            
            let pathWay = ArrayPlayers[i].Pathway;
            let pawns = ArrayPlayers[i].Pawn;
            let roll = 2;
            //showPawnswhenhover(pawns)
            await waitForDieToBeRolled('dice');
            //dice = rollDice();
            dice = 6;
            let clickedPawnId = await waitForSelectecPawn([pawns[0][0], pawns[1][0], pawns[2][0], pawns[3][0]]);
            console.log(clickedPawnId);
            let possible = false;
            while (dice === 6){
                possible = false;
                while (possible === false);
                    possible = movePawns(pathWay, pawns, clickedPawnId, dice);
                    if (possible === 'nest'){
                        ArrayPlayers[i].Nest += 1;
                        nest = ArrayPlayers[i].Nest;
                    } else (possible == true){
                        roll -= 1;
                        if (roll === 0){
                            break;
                        }
                        await waitForDieToBeRolled('dice');
                        dice = rollDice();
                        clickedPawnId = await waitForSelectecPawn([pawns[0][0], pawns[1][0], pawns[2][0], pawns[3][0]]);    
                }
            }
            possible = movePawns(pathWay, pawns, PawnId1, dice);
            console.log(PawnId1);

            activeplayer.style.removeProperty('border')
            
        }
    }
}

function rollDice() {
   let number = Math.floor(Math.random() *6);
   let dicedisplay = dicesides ();
   document.getElementById('dice').innerHTML = dicedisplay[number];
   return number+1;
}

function movePawns(pathWay, pawns, PawnId, dice) {
    let pawnindex, pathindex = findpawnindex(pathWay,pawns,pawnid);
    //showPawnswhenhover(pawns)
    if (pathindex === null){
        if (dice === 1 || dice === 6){
            let pawn = document.getElementById(PawnId);
            let stop = document.getElementById(pathWay[dice-1]);
            pawns[pawnindex][1] = stop;
            stop.append(pawn);
            console.log(pawns);
            return true
        } else {
            alert('You can only move this piece as you roll a 1 or a 6')
            return false
        }

    } else {
        let pawn = document.getElementById(PawnId);
        if (pathindex+dice > pathway){
            pawn.remove()
            return 'nest'
        } else {
            let stop = document.getElementById(pathWay[pathindex+dice]);
            pawns[pawnindex][1] = stop;
            stop.append(pawn);
            console.log(pawns);
            return true
        }
        
    }

}

function dicesides (){
    let dice =['<i class="fa-solid fa-dice-one"></i>', '<i class="fa-solid fa-dice-two"></i>', '<i class="fa-solid fa-dice-three"></i>',
   '<i class="fa-solid fa-dice-four">','</i><i class="fa-solid fa-dice-five"></i>','<i class="fa-solid fa-dice-six"></i>'];
   return dice;
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

function showPawnswhenhover(Pawnslist) {
    for (let i = 0; i < Pawnslist; i++){
        let pawn = document.getElementById(Pawnslist[i][0])
        pawn.addEventListener('mouseenter', () =>
            pawn.style.background = 'lightgreen');
        pawn.addEventListener('mouseleave', () => 
            pawn.style.background = null);
    }
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
        if (pawns[i][0]===pawnid){;
            let pathindex = pathWay.indexOf(pawns[i][1]);
            let indexNumber = i;
            if (pathindex === -1){
                return indexNumber , null
            } else {
                return indexNumber , pathindex
            }
        } 
    }
}
