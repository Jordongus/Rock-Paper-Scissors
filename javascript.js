
function getCPU(){
     return Math.floor(Math.random() * 3)+1;
}
function computerRound(computer){
if (computer === 1){
    return'cpu throws rock';
}
else if(computer === 2){
    return'cpu throws paper';
}
else if(computer === 3){
    return 'cpu throws scissors';
}
}
function playerRound(player,computer){
if (player === null){
    return 'dnf';
}
else if(player.toUpperCase() === 'ROCK' && computer === 1) {
    return 'tie';
}
else if(player.toUpperCase() === 'ROCK' && computer === 2){
    return 'you lose';
}
else if(player.toUpperCase()  === 'ROCK' && computer === 3){
    return 'you win';
}
else if(player.toUpperCase() === 'PAPER' && computer === 1){
    return 'you win';
}
else if(player.toUpperCase() === 'PAPER' && computer === 2){
    return 'tie';
}
else if(player.toUpperCase() === 'PAPER' && computer === 3){
    return'you lose';
}
else if(player.toUpperCase() === 'SCISSORS' && computer === 1){
    return 'you lose';
}
else if(player.toUpperCase() === 'SCISSORS' && computer === 2){
    return 'you win';
}
else if(player.toUpperCase() === 'SCISSORS' && computer === 3){
    return 'you win';
}
}
let playerScore = 0;
let computerScore = 0;
for (let i =0; i < 5; i++){
    let computer = getCPU();
    let  player = prompt('rock, paper, or scissors?');
    addition(player,computer);
    console.log(computerRound(computer));
    console.log(playerRound(player, computer));
    console.log('player:'+ playerScore);
    console.log('CPU:'+ computerScore);
    if(i === 4){
        console.log(winner(playerScore,computerScore));
    }
       

}
function winner(playerScore, computerScore){
    if(playerScore > computerScore){
        return 'you win!!!'
    }
    else if(playerScore < computerScore){
        return 'you lose!!!'
    }
    else{
        return 'its a tie!!!'
    }
}
function addition(player,computer){
    if (playerRound(player,computer) === 'you win'){
return playerScore++;
    }
    else if (playerRound(player,computer) === 'you lose'){
return computerScore++;
    }
}
