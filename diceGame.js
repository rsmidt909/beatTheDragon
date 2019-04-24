

 // this logic works

// so write pickWeapon() + playerArmor() + blank +blank = total

//player total vs dragon total.
// if player total > dragon total, than player win
//else dragon win.

let gameContinue = true;
let playerBaseAttack = 2;
let playerBaseHealth = 2;
let dragonBaseAttack = 5;
let dragonBaseHealth = 5;

let numOfSides=''

function diceRoll(numOfSides){
let roll = Math.floor(Math.random() * numOfSides)+1;
return roll;
}

pickPlayer();


function pickPlayer(){
    let player = document.getElementById('player');
    let img;
    player.innerHTML = '<img src="'+ img + '"/>';
    switch(diceRoll(6)) {
        case 1:
        document.getElementById("playerText").innerHTML ='Toilet plunger + 1';
        img = "images/zombie2.png"
        break;
        case 2:
        document.getElementById("playerText").innerHTML ='Toilet plunger + 1';
        img = "images/pajamaSam.png"
        break; 
        case 3:
        document.getElementById("playerText").innerHTML ='Toilet plunger + 1';
        img
        break; 
        case 4:
        document.getElementById("playerText").innerHTML ='Toilet plunger + 1';
        img
        break; 
        case 5:
        document.getElementById("playerText").innerHTML ='Toilet plunger + 1';
        img
        break; 
        case 6:
        document.getElementById("playerText").innerHTML ='Toilet plunger + 1';
        img
        break;
        default: 0;
        break;}
        return img;
}

function pickDragon(){
    let dragon = document.getElementById('dragon');
    let img;
    dragon.innerHTML = '<img src="'+ img + '"/>';
    switch(diceRoll(6)) {
        case 1:
        document.getElementById("dragonText").innerHTML ='Toilet plunger + 1';
        img 
        break;
        case 2:
        document.getElementById("dragonText").innerHTML ='Toilet plunger + 1';
        img
        break; 
        case 3:
        document.getElementById("dragonText").innerHTML ='Toilet plunger + 1';
        img
        break; 
        case 4:
        document.getElementById("dragonText").innerHTML ='Toilet plunger + 1';
        img
        break; 
        case 5:
        document.getElementById("dragonText").innerHTML ='Toilet plunger + 1';
        img
        break; 
        case 6:
        document.getElementById("dragonText").innerHTML ='Toilet plunger + 1';
        img
        break;
        default: 0;
        break;}
        return img;
}




function playerHealthNA (){
    let totalPlayerHealth = pickPlayerHealth()*playerBaseHealth
    
    return totalPlayerHealth;
}

function playerHealthTotal (playerHealth){
    let totalPlayerHealth = pickArmor()*playerHealth
    return totalPlayerHealth;
}

function playerAttackOWep (){
    let totalPlayerAttack = pickWeapon()*playerBaseAttack
    return totalPlayerAttack;
}

function playerAttackTotal (playerAttack){
    let totalPlayerAttack = pickPlayerAttack()*playerAttack
    
    return totalPlayerAttack;
}

function dragonAttackTotal (dragonBaseAttack){
    let totalDragonAttack = pickDragonsAttack()*dragonBaseAttack
    return totalDragonAttack;
}

function dragonHealthTotal (dragonBaseHealth){
    let totalDragonHealth = pickDragHealth()*dragonBaseHealth
    return totalDragonHealth;
}

function dragonAttackCheck(playerHealth,dragonAttack){
    if(dragonAttack>=playerHealth){
        gameContinue = false
        document.getElementById("lose").innerHTML ='YOU DIED';
    } else document.getElementById("tWin").innerHTML ='You lived!';
}

function playerAttackCheck(playerAttack,dragonHealth){
    if ((gameContinue === true)&&
    (playerAttack>=dragonHealth)){
        gameContinue = false
        document.getElementById("win").innerHTML ='You beat the dragon!';
    } else { gameContinue = false
        document.getElementById("dLose").innerHTML ='You didnt beat the Dragon, and he ate you!!!'};
}


function masterFunc(){
    
    if (gameContinue ===true){
       let playerHealth = playerHealthNA(playerBaseHealth);
       playerHealth = playerHealthTotal(playerHealth);
       let playerAttack = playerAttackOWep();
       playerAttack = playerAttackTotal(playerAttack);
       //maybe affinity here
       //maybe type of dragon here
       document.getElementById("totalAttack").innerHTML = "Total Attack " + playerAttack;
       document.getElementById("totalHealth").innerHTML = "Total Health " + playerHealth;
       let dragonHealth = dragonHealthTotal(dragonBaseHealth);
       let dragonAttack = dragonAttackTotal(dragonBaseAttack);
       document.getElementById("totalDragAttack").innerHTML = "Total Attack " + dragonAttack;
       document.getElementById("totalDragHealth").innerHTML = "Total Health " + dragonHealth;
       dragonAttackCheck(playerHealth,dragonAttack,gameContinue);
       if(gameContinue === false){
           return;
       } else{ 
       playerAttackCheck(playerAttack,dragonHealth,gameContinue);
}}           gameContinue = true;
};


function pickWeapon (){
    let weapon;
     switch(diceRoll(6)) {
         case 1:
         document.getElementById("wep").innerHTML ='Toilet plunger + 1';
         weapon = 1;
         break;      
         case 2:
         document.getElementById("wep").innerHTML ='Wooden Sword + 2';
         weapon = 2;
         break;
         case 3:
         document.getElementById("wep").innerHTML = 'Aluminum Bat + 3';
         weapon = 3;
         break;
         case 4:
         document.getElementById("wep").innerHTML ='Short Sword + 4';
         weapon = 4;
         break;
         case 5:
         document.getElementById("wep").innerHTML ='Flail + 5';
         weapon = 5;
         break;
         case 6:
         document.getElementById("wep").innerHTML ='Excalibur + 6';
         weapon = 6;
         break;
         default: weapon = 0;
         break;
} return weapon;
}



function pickArmor(){
let armor;
    switch(diceRoll(4)){
        case 1:
        document.getElementById("armor").innerHTML='Hide armor + 1';
        armor = 1;
        break; 
        case 2:
        document.getElementById("armor").innerHTML='Plate Armor + 2';
        armor = 2;
        break;
        case 3:
        document.getElementById("armor").innerHTML='Mitheral Armor + 3';
        armor = 3;
        break;
        case 4:
        document.getElementById("armor").innerHTML='King Gilgamesh\'s Armor + 4';
        armor = 4;
        break;
        default: armor = 0;
        break;
    } return armor;
}



function pickDragHealth(){
  let dragHealth
    switch(diceRoll(8)){
        case 1:
        document.getElementById("dragHealth").innerHTML ='The Dragons health resembles a dying animal + 3';
        dragHealth = 1;
        break;
        case 2:
        document.getElementById("dragHealth").innerHTML ='Youre not sure how the Dragon got this far considering its health + 2';
        dragHealth = 2;
        break;
        case 3:
        document.getElementById("dragHealth").innerHTML ='This Dragon uses the handicapped automatic doors + 3';
        dragHealth = 3;
        break;
        case 4:
        document.getElementById("dragHealth").innerHTML ='This Dragon uses the treadmill sometimes + 4';
        dragHealth = 4;
        break;
        case 5:
        document.getElementById("dragHealth").innerHTML ='This Dragon drinks protein for a snack + 5';
        dragHealth = 5;
        break;
        case 6:
        document.getElementById("dragHealth").innerHTML ='This Dragon Lifts. + 6';
        dragHealth = 6;
        break;
        case 7:
        document.getElementById("dragHealth").innerHTML ='This Dragon took your lunch money in another life. + 7';
        dragHealth = 7;
        break;
        case 8:
        document.getElementById("dragHealth").innerHTML ='This Dragon eats Dragons. + 8';
        dragHealth = 8;
        break;
        default: dragHealth = 0;
        break;
    } return dragHealth
}



function pickPlayerHealth(){
 let playerHealth;
    switch(diceRoll(10)){
        case 1:
        document.getElementById("pHealth").innerHTML ='Frogs have better health than you + 1';
        playerHealth = 1;
        break;
        case 2:
        document.getElementById("pHealth").innerHTML ='Youre just a bean pole + 2';
        playerHealth = 2;
        break;
        case 3:
        document.getElementById("pHealth").innerHTML ='Lord Farquad like health + 3';
        playerHealth = 3;
        break;
        case 4:
        document.getElementById("pHealth").innerHTML ='Youve seen an apple BEFORE type health + 4';
        playerHealth = 4;
        break;
        case 5:
        document.getElementById("pHealth").innerHTML ='You eat an orange a day. + 5';
        playerHealth = 5;
        break;
        case 6:
        document.getElementById("pHealth").innerHTML ='You eat your Wheaties before you eat your Wheaties. + 6';
        playerHealth = 6;
        break;
        case 7:
        document.getElementById("pHealth").innerHTML ='People try not to make eye contact from your masculanity + 7';
        playerHealth = 7;
        break;
        case 8:
        document.getElementById("pHealth").innerHTML ='Just a gym rat + 8';
        playerHealth = 8;
        break;
        case 9:
        document.getElementById("pHealth").innerHTML ='Youre on par with Superman + 9';
        playerHealth = 9;
        break;
        case 10:
        document.getElementById("pHealth").innerHTML ='GOD-LIKE + 10';
        playerHealth = 10;
        break;
        default: playerHealth = 0;
        break;
    }
    return playerHealth;
}



function pickDragonsAttack(){
    let dragAttack;
    switch(diceRoll(12)){
        case 1:
        document.getElementById("dragAttack").innerHTML ='Was that a spark? + 1';
        dragAttack = 1;
        break;
        case 2:
        document.getElementById("dragAttack").innerHTML ='Was that a zippo? + 2';
        dragAttack = 2;
        break;
        case 3:
        document.getElementById("dragAttack").innerHTML ='Im pretty sure that was fire + 3';
        dragAttack = 3;
        break;
        case 4:
        document.getElementById("dragAttack").innerHTML ='Fire kinda like a fireplace + 4';
        dragAttack = 4;
        break;
        case 5:
        document.getElementById("dragAttack").innerHTML ='Fire like the song \"drop it like its hot\" + 5';
        dragAttack = 5;
        break;
        case 6:
        document.getElementById("dragAttack").innerHTML ='You should take a step back, kind of fire + 6';
        dragAttack = 6;
        break;
        case 7:
        document.getElementById("dragAttack").innerHTML ='OUCH kind of fire + 7';
        dragAttack = 7;
        break;
        case 8:
        document.getElementById("dragAttack").innerHTML ='Youre going to feel that tomorrow kind of fire + 8';
        dragAttack = 8;
        break;
        case 9:
        document.getElementById("dragAttack").innerHTML ='Get out of the room kind of fire + 9';
        dragAttack = 9;
        break;
        case 10:
        document.getElementById("dragAttack").innerHTML ='Its so hot you can feel it through your moniter + 10';
        dragAttack = 10;
        break;
        case 11:
        document.getElementById("dragAttack").innerHTML ='Hahahaha, dont touch that. You will die kind of fire. + 11';
        dragAttack = 11;
        break;
        case 12:
        document.getElementById("dragAttack").innerHTML ='Its too hot for Satan. + 12';
        dragAttack = 12;
        break;
        default: dragAttack = 0;
        break;
    } return dragAttack;
}



function pickPlayerAttack(){
    let playerAttack;
    switch(diceRoll(20)){
        case 1:
        document.getElementById("playerAttack").innerHTML ='You forgot how to swing + 1';
        playerAttack = 1;
        break;
        case 2:
        document.getElementById("playerAttack").innerHTML ='You somewhat remembered how to swing + 2';
        playerAttack = 2;
        break;
        case 3:
        document.getElementById("playerAttack").innerHTML ='You attempt to swing + 3';
        playerAttack = 3;
        break;
        case 4:
        document.getElementById("playerAttack").innerHTML ='You do a thing that resembles a swing + 4';
        playerAttack = 4;
        break;
        case 5:
        document.getElementById("playerAttack").innerHTML ='You swing accidently + 5';
        playerAttack = 5;
        break;
        case 6:
        document.getElementById("playerAttack").innerHTML ='You swing like a baby + 6';
        playerAttack = 6;
        break;
        case 7:
        document.getElementById("playerAttack").innerHTML ='You swing like an old lady + 7';
        playerAttack = 7;
        break;
        case 8:
        document.getElementById("totalAttack").innerHTML ='You swing for the first time in your life + 8';
        playerAttack = 8;
        break;
        case 9:
        document.getElementById("playerAttack").innerHTML ='You swing abnormally + 9';
        playerAttack = 9;
        break;
        case 10:
        document.getElementById("playerAttack").innerHTML ='You swing normally + 10';
        playerAttack = 10;
        break;
        case 11:
        document.getElementById("playerAttack").innerHTML ='You step forward and swing + 11';
        playerAttack = 11;
        break;
        case 12:
        document.getElementById("playerAttack").innerHTML ='You lunge and swing + 12';
        playerAttack = 12;
        break;
        case 13:
        document.getElementById("playerAttack").innerHTML ='You run and swing + 13';
        playerAttack = 13;
        break;
        case 14:
        document.getElementById("playerAttack").innerHTML ='You run then jump and swing + 14';
        playerAttack = 14;
        break;
        case 15:
        document.getElementById("playerAttack").innerHTML ='You jump and do a circle swing + 15';
        playerAttack = 15;
        break;
        case 16:
        document.getElementById("playerAttack").innerHTML ='You swing like a champion + 16';
        playerAttack = 16;
        break;
        case 17:
        document.getElementById("playerAttack").innerHTML ='You do a backflip and then swing + 17';
        playerAttack = 17;
        break;
        case 18:
        document.getElementById("playerAttack").innerHTML ='You swing like a Master Jedi + 18';
        playerAttack = 18;
        break;
        case 19:
        document.getElementById("playerAttack").innerHTML ='You swing perfectly with your eyes closed + 19';
        playerAttack = 19;
        break;
        case 20:
        document.getElementById("playerAttack").innerHTML ='BANKAI + 20';
        playerAttack = 20;
        break;
        default: playerAttack = 0;
        break;
    } return playerAttack;
}