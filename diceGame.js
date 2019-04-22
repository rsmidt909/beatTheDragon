

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



function playerAttackOWep (playerBaseAttack){
    let totalPlayerAttack = pickWeapon()*playerBaseAttack
    return totalPlayerAttack
}

function playerAttackTotal (playerBaseAttack){
    let totalPlayerAttack = pickPlayerAttack()*(pickWeapon()*playerBaseAttack)
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



function pickArmor(){

    switch(diceRoll(4)){
        case 1:
        console.log('Hide armor + 1')
        return 1; 
        case 2:
        console.log('Plate Armor + 2')
        return 2;
        case 3:
        console.log('Mitheral Armor + 3')
        return 3;
        case 4:
        console.log('King Gilgamesh\'s Armor + 4')
        return 4;
        default:
        return 'Well.....Something Broke.'
    }
}



function pickDragHealth(){

    switch(diceRoll(8)){
        case 1:
        console.log('The Dragons health resembles a dying animal + 3')
        return 1;
        case 2:
        console.log('Youre not sure how the Dragon got this far considering its health + 2')
        return 2;
        case 3:
        console.log('This Dragon uses the handicapped automatic doors + 3')
        return 3;
        case 4:
        console.log('This Dragon uses the treadmill sometimes + 4')
        return 4;
        case 5:
        console.log('This Dragon drinks protein for a snack + 5')
        return 5;
        case 6:
        console.log('This Dragon Lifts. + 6')
        return 6;
        case 7:
        console.log('This Dragon took your lunch money in another life. + 7')
        return 7;
        case 8:
        console.log('This Dragon eats Dragons. + 8')
        return 8;
        default:
        return 'Well.....Something Broke.'
    }
}



function pickPlayerHealth(){

    switch(diceRoll(10)){
        case 1:
        console.log('Frogs have better health than you + 1')
        return 1;
        case 2:
        console.log('Youre just a bean pole + 2')
        return 2;
        case 3:
        console.log('Lord Farquad like health + 3')
        return 3;
        case 4:
        console.log('Youve seen an apple BEFORE type health + 4')
        return 4;
        case 5:
        console.log('You eat an orange a day. + 5')
        return 5;
        case 6:
        console.log('You eat your Wheaties before you eat your Wheaties. + 6')
        return 6;
        case 7:
        console.log('People try not to make eye contact from your masculanity + 7')
        return 7;
        case 8:
        console.log('Just a gym rat + 8')
        return 8;
        case 9:
        console.log('Youre on par with Superman + 9')
        return 9;
        case 10:
        console.log('GOD-LIKE + 10')
        return 10;
        default:
        return 'Well.....Something Broke.'
    }
}



function pickDragonsAttack(){

    switch(diceRoll(12)){
        case 1:
        console.log('Was that a spark? + 1')
        return 1;
        case 2:
        console.log('Was that a zippo? + 2')
        return 2;
        case 3:
        console.log('Im pretty sure that was fire + 3')
        return 3;
        case 4:
        console.log('Fire kinda like a fireplace + 4')
        return 4;
        case 5:
        console.log('Fire like the song /"drop it like its hot"/" + 5')
        return 5;
        case 6:
        console.log('You should take a step back, kind of fire + 6')
        return 6;
        case 7:
        console.log('OUCH kind of fire + 7')
        return 7;
        case 8:
        console.log('Youre going to feel that tomorrow kind of fire + 8')
        return 8;
        case 9:
        console.log('Get out of the room kind of fire + 9')
        return 9;
        case 10:
        console.log('Its so hot you can feel it through your moniter + 10')
        return 10;
        case 11:
        console.log('Hahahaha, dont touch that. You will die kind of fire. + 11')
        return 11;
        case 12:
        console.log('Its too hot for Satan. + 12')
        return 12;
        default:
        return 'Well.....Something Broke.'
    }
}



function pickPlayerAttack(){

    switch(diceRoll(20)){
        case 1:
        console.log('You forgot how to swing + 1')
        return 1;
        case 2:
        console.log('You somewhat remembered how to swing + 2')
        return 2;
        case 3:
        console.log('You attempt to swing + 3')
        return 3;
        case 4:
        console.log('You do a thing that resembles a swing + 4')
        return 4;
        case 5:
        console.log('You swing accidently + 5')
        return 5;
        case 6:
        console.log('You swing like a baby + 6')
        return 6;
        case 7:
        console.log('You swing like an old lady + 7')
        return 7;
        case 8:
        console.log('You swing for the first time in your life + 8')
        return 8;
        case 9:
        console.log('You swing abnormally + 9')
        return 9;
        case 10:
        console.log('You swing normally + 10')
        return 10;
        case 11:
        console.log('You step forward and swing + 11')
        return 11;
        case 12:
        console.log('You lunge and swing + 12')
        return 12;
        case 13:
        console.log('You run and swing + 13')
        return 13;
        case 14:
        console.log('You run then jump and swing + 14')
        return 14;
        case 15:
        console.log('You jump and do a circle swing + 15')
        return 15;
        case 16:
        console.log('You swing like a champion + 16')
        return 16;
        case 17:
        console.log('You do a backflip and then swing + 17')
        return 17;
        case 18:
        console.log('You swing like a Master Jedi + 18')
        return 18;
        case 19:
        console.log('You swing perfectly with your eyes closed + 19')
        return 19;
        case 20:
        console.log('BANKAI + 20')
        return 20;
        default:
        return 'Well.....Something Broke.'
    }
}