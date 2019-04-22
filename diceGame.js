

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