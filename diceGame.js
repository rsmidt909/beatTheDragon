

console.log(pickWeapon())

let numOfSides=''

function diceRoll(numOfSides){
let roll = Math.floor(Math.random() * numOfSides)+1;
return roll;
}



function pickWeapon (){
    
     switch(diceRoll(6)) {
         case 1:
         return'Toilet Punger'
         break;
         case 2:
         return'Wooden Sword'
         break;
         case 3:
         return'Aluminum Bat'
         break;
         case 4:
         return'Short Sword'
         break;
         case 5:
         return'Flail'
         break;
         case 6:
         return 'Excalibur'
         break;
         default:
         return 'Well.....Something Broke.'
}
}

function pickArmor(){

    switch(diceRoll(4)){
        case 1:
        return '';
        case 2:
        return '';
        case 3:
        return '';
        case 4:
        return '';
        default:
        return 'Well.....Something Broke.'
    }
}

function pickDragHealth(){

    switch(diceRoll()){
        case 1:
        return '';
        case 2:
        return '';
        case 3:
        return '';
        case 4:
        return '';
        case 5:
        return '';
        case 6:
        return '';
        case 7:
        return '';
        case 8:
        return '';
        default:
        return 'Well.....Something Broke.'
    }
}


function pickPlayerHealth(){

    switch(diceRoll(10)){
        case 1:
        return '';
        case 2:
        return '';
        case 3:
        return '';
        case 4:
        return '';
        case 5:
        return '';
        case 6:
        return '';
        case 7:
        return '';
        case 8:
        return '';
        case 9:
        return '';
        case 10:
        return '';
        default:
        return 'Well.....Something Broke.'
    }
}


function pickDragonsAttack(){

    switch(diceRoll(12)){
        case 1:
        return '';
        case 2:
        return '';
        case 3:
        return '';
        case 4:
        return '';
        case 5:
        return '';
        case 6:
        return '';
        case 7:
        return '';
        case 8:
        return '';
        case 9:
        return '';
        case 10:
        return '';
        case 11:
        return '';
        case 12:
        return '';
        default:
        return 'Well.....Something Broke.'
    }
}


function pickPlayerAttack(){

    switch(diceRoll(20)){
        case 1:
        return '';
        case 2:
        return '';
        case 3:
        return '';
        case 4:
        return '';
        case 5:
        return '';
        case 6:
        return '';
        case 7:
        return '';
        case 8:
        return '';
        case 9:
        return '';
        case 10:
        return '';
        case 11:
        return '';
        case 12:
        return '';
        case 13:
        return '';
        case 14:
        return '';
        case 15:
        return '';
        case 16:
        return '';
        case 17:
        return '';
        case 18:
        return '';
        case 19:
        return '';
        case 20:
        return '';
        default:
        return 'Well.....Something Broke.'
    }
}