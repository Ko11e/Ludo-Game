let NameofPlayers = getPlayerNameFromURL();
const Playerstat = createBoard (NameofPlayers);
firstTurn (Playerstat);


//Functions
function main(){
    let NameofPlayers = getPlayerNameFromURL();
    const Playerstat = createBoard (NameofPlayers);


}

/**
 * 
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
                let nameText = document.getElementById(`playerText${i+1}`);
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
        let activeplayer = document.getElementById(`markerP${i+1}D`);
        activeplayer.style.border = '2px solid black'

        let pathWay = ArrayPlayers[i].Pathway;
        let pawns = ArrayPlayers[i].Pawn;
        let rolls = 0;
        console.log(pawns);
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
        moveMarker(i+1);
    }
}

function rollDice() {
   let number = Math.floor(Math.random() *6);
   let dicedisplay = dicesides ();
   document.getElementById('dice').innerHTML = dicedisplay[number];
   return number+1;
}

function movePawns() {

}

function dicesides (){
    let dice =['<i class="fa-solid fa-dice-one"></i>', '<i class="fa-solid fa-dice-two"></i>', '<i class="fa-solid fa-dice-three"></i>',
   '<i class="fa-solid fa-dice-four">','</i><i class="fa-solid fa-dice-five"></i>','<i class="fa-solid fa-dice-six"></i>'];
   return dice;
}

function moveMarker(number){
    let activeplayer = document.getElementById(`markerP${number}D`);
    let comingplayer = document.getElementById(`markerP${number+1}D`);

    activeplayer.style.removeProperty('border');
    comingplayer.style.border = '2px solid black';
}


function waitForDieToBeRolled(ElementId) {
    return new Promise(resolve => {
        document.getElementById(ElementId).addEventListener("click", () => {
            resolve();
        });
    });
}