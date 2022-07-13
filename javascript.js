let  player = prompt('r, p, or s?');
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
if(player === 'r' && computer === 1) {
    console.log('tie');
}
else if(player === 'r' && computer === 2){
    console.log('you lose');
}
else if(player  === 'r' && computer === 3){
    console.log('you win');
}
else if(player === 'p' && computer === 1){
    console.log('you win');
}
else if(player === 'p' && computer === 2){
    console.log('tie');
}
else if(player === 'p' && computer === 3){
    console.log('you lose');
}
else if(player === 's' && computer === 1){
    console.log('you lose');
}
else if(player === 's' && computer === 2){
    console.log('you win');
}
else if(player === 's' && computer === 3){
    console.log('you win');
}