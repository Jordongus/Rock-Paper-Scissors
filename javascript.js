let  player = prompt('rock, paper, or scissors?');
let computer = Math.floor(Math.random() * 3)+1;
console.log(computer);

if (computer === 1){
    console.log('cpu throws rock');
}
else if(computer === 2){
    console.log('cpu throws paper');
}
else if(computer === 3){
    console.log('cpu throws scissors');
}
if(player.toUpperCase() === 'ROCK' && computer === 1) {
    console.log('tie');
}
else if(player.toUpperCase() === 'ROCK' && computer === 2){
    console.log('you lose');
}
else if(player.toUpperCase()  === 'ROCK' && computer === 3){
    console.log('you win');
}
else if(player.toUpperCase() === 'PAPER' && computer === 1){
    console.log('you win');
}
else if(player.toUpperCase() === 'PAPER' && computer === 2){
    console.log('tie');
}
else if(player.toUpperCase() === 'PAPER' && computer === 3){
    console.log('you lose');
}
else if(player.toUpperCase() === 'SCISSORS' && computer === 1){
    console.log('you lose');
}
else if(player.toUpperCase() === 'SCISSORS' && computer === 2){
    console.log('you win');
}
else if(player.toUpperCase() === 'SCISSORS' && computer === 3){
    console.log('you win');
}