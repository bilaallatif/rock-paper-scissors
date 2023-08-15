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

let playerSelection = prompt('Choose your weapon: Rock, Paper or Scissors?').toLowerCase();
let computerSelection = getComputerChoice();
console.log('Player: ' + playerSelection);
console.log('Computer: ' + weapon[computerSelection]);
console.log(desicion(round(computerSelection, weapon.indexOf(playerSelection))));

