

 // this logic works

// so write pickWeapon() + playerArmor() + blank +blank = total

//player total vs dragon total.
// if player total > dragon total, than player win
//else dragon win.


let numOfSides=''

function diceRoll(numOfSides){
let roll = Math.floor(Math.random() * numOfSides)+1;
return roll;
}


let playerBaseAttack = 2

playerAttackTotal(playerBaseAttack)

function playerAttackTotal (playerBaseAttack){
    let totalPlayerAttack = pickWeapon()*playerBaseAttack
    return totalPlayerAttack
}


function pickWeapon (){
    
     switch(diceRoll(6)) {
         case 1:
         console.log('Toilet plunger + 1')
         return 1;      
         case 2:
         console.log('Wooden Sword + 2')
         return 2;
         case 3:
         console.log('Aluminum Bat + 3')
         return 3;
         case 4:
         console.log('Short Sword + 4')
         return 4;
         case 5:
         console.log('Flail + 5')
         return 5;
         case 6:
         console.log('Excalibur + 6')
         return 6;
         default:
         return 'Well.....Something Broke.';
}
}

let playerArmor = ''

function pickArmor(){

    switch(diceRoll(4)){
        case 1:
        console.log('Wooden Sword')
        return '';
        case 2:
        console.log('Wooden Sword')
        return '';
        case 3:
        console.log('Wooden Sword')
        return '';
        case 4:
        console.log('Wooden Sword')
        return '';
        default:
        return 'Well.....Something Broke.'
    }
}

let dragonHealth = ''

function pickDragHealth(){

    switch(diceRoll(8)){
        case 1:
        console.log('Wooden Sword')
        return '';
        case 2:
        console.log('Wooden Sword')
        return '';
        case 3:
        console.log('Wooden Sword')
        return '';
        case 4:
        console.log('Wooden Sword')
        return '';
        case 5:
        console.log('Wooden Sword')
        return '';
        case 6:
        console.log('Wooden Sword')
        return '';
        case 7:
        console.log('Wooden Sword')
        return '';
        case 8:
        console.log('Wooden Sword')
        return '';
        default:
        return 'Well.....Something Broke.'
    }
}

let playerHealth = ''

function pickPlayerHealth(){

    switch(diceRoll(10)){
        case 1:
        console.log('Wooden Sword')
        return '';
        case 2:
        console.log('Wooden Sword')
        return '';
        case 3:
        console.log('Wooden Sword')
        return '';
        case 4:
        console.log('Wooden Sword')
        return '';
        case 5:
        console.log('Wooden Sword')
        return '';
        case 6:
        console.log('Wooden Sword')
        return '';
        case 7:
        console.log('Wooden Sword')
        return '';
        case 8:
        console.log('Wooden Sword')
        return '';
        case 9:
        console.log('Wooden Sword')
        return '';
        case 10:
        console.log('Wooden Sword')
        return '';
        default:
        return 'Well.....Something Broke.'
    }
}

let dragonAttack = ''

function pickDragonsAttack(){

    switch(diceRoll(12)){
        case 1:
        console.log('Wooden Sword')
        return '';
        case 2:
        console.log('Wooden Sword')
        return '';
        case 3:
        console.log('Wooden Sword')
        return '';
        case 4:
        console.log('Wooden Sword')
        return '';
        case 5:
        console.log('Wooden Sword')
        return '';
        case 6:
        console.log('Wooden Sword')
        return '';
        case 7:
        console.log('Wooden Sword')
        return '';
        case 8:
        console.log('Wooden Sword')
        return '';
        case 9:
        console.log('Wooden Sword')
        return '';
        case 10:
        console.log('Wooden Sword')
        return '';
        case 11:
        console.log('Wooden Sword')
        return '';
        case 12:
        console.log('Wooden Sword')
        return '';
        default:
        return 'Well.....Something Broke.'
    }
}

let playerAttack = ''

function pickPlayerAttack(){

    switch(diceRoll(20)){
        case 1:
        console.log('You forgot how to swing + 1')
        return '';
        case 2:
        console.log('You somewhat remembered how to swing + 2')
        return '';
        case 3:
        console.log('You attempt to swing + 3')
        return '';
        case 4:
        console.log('You do a thing that resembles a swing + 4')
        return '';
        case 5:
        console.log('You swing accidently + 5')
        return '';
        case 6:
        console.log('You swing like a baby + 6')
        return '';
        case 7:
        console.log('You swing like an old lady + 7')
        return '';
        case 8:
        console.log('You swing for the first time in your life + 8')
        return '';
        case 9:
        console.log('You swing abnormally + 9')
        return '';
        case 10:
        console.log('You swing normally + 10')
        return '';
        case 11:
        console.log('You step forward and swing + 11')
        return '';
        case 12:
        console.log('You lunge and swing + 12')
        return '';
        case 13:
        console.log('You run and swing + 13')
        return '';
        case 14:
        console.log('You run then jump and swing + 14')
        return '';
        case 15:
        console.log('You jump and do a circle swing + 15')
        return '';
        case 16:
        console.log('You swing like a champion + 16')
        return '';
        case 17:
        console.log('You do a backflip and then swing + 17')
        return '';
        case 18:
        console.log('You swing like a Master Jedi + 18')
        return '';
        case 19:
        console.log('You swing perfectly with your eyes closed + 19')
        return '';
        case 20:
        console.log('Youve never seen such a great swing + 20')
        return '';
        default:
        return 'Well.....Something Broke.'
    }
}