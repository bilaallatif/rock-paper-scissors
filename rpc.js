const weapon = ['rock', 'paper', 'scissors'];
const gameMatrix = [[0, 1, -1], [-1, 0, 1], [1, -1, 0]];

let getComputerChoice = () => Math.floor(Math.random() * 3);
let round = (computerSelection, playerSelection) => gameMatrix[computerSelection][playerSelection];
let desicion = (round) => {
    switch (round) {
        case 1:
            return 'You Win!';
        case -1:
            return 'You Lose!';
        default:
            return 'Draw!';
    }
}

let win_loss_counter = 0;
for (let i = 0; i < 5; i++) {
    let playerSelection = prompt('Choose your weapon: Rock, Paper or Scissors?').toLowerCase();
    let computerSelection = getComputerChoice();
    console.log('Player: ' + playerSelection);
    console.log('Computer: ' + weapon[computerSelection]);
    let win_loss = round(computerSelection, weapon.indexOf(playerSelection));
    console.log(desicion(win_loss));

    win_loss_counter += win_loss;
    console.log('Current score: ' + win_loss_counter);
}

if (win_loss_counter > 0) {
    console.log('You win the game!');
}
else if (win_loss_counter < 0) {
    console.log('You lose the game!');
}
else {
    console.log('Draw!');
}

