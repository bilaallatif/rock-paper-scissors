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
let run_counter = 0;

function play() {
    if (run_counter > 5) {
        return;
    }
    let playerSelection = weapon.indexOf(event.target.id);
    let computerSelection = getComputerChoice();
    let win_loss = round(computerSelection, playerSelection);
    win_loss_counter += win_loss;
    scoreboard.textContent = 'Score: ' + win_loss_counter;
    result.textContent = 'Result: ' + desicion(win_loss);

    run_counter++;
    if (run_counter == 5) {
        if (win_loss_counter > 0) {
            alert('You win the game!');
        }
        else if (win_loss_counter < 0) {
            alert('You lose the game!');
        }
        else {
            alert('Draw!');
        }
    }
};

let scoreboard = document.querySelector('#score');
let result = document.querySelector('#result');
let selectors = document.querySelectorAll('button');
scoreboard.textContent = 'Score: 0';
result.textContent = 'Result: N/A';

selectors.forEach(element => {element.addEventListener('click', play)});

