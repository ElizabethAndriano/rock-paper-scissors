function getComputerChoice() {
    return Math.floor(Math.random() * 3)
}

/*function getPlayerChoice() {
    const answer = prompt('Whats your choice (Rock/Paper/Scissors)?')
    if (answer.toLowerCase() === 'rock') {
        return 0
    } else if (answer.toLowerCase() === 'paper') {
        return 1
    } else if (answer.toLowerCase() === 'scissors') {
        return 2
    } else {
        alert('Error. You must select a valid option.')
        return getPlayerChoice()
    }
}*/

function round(playerSelection) {
    const computerSelection = getComputerChoice()
    
    let result;

    const displayResult = document.querySelector("p.result");
    const pScore = document.querySelector(".player");
    const cScore = document.querySelector(".computer")

    console.log('Computer: ' + computerSelection)
    console.log('Player: ' + playerSelection)

    if (playerSelection === computerSelection) {
        displayResult.textContent = 'It\'s a tie!'
        result = 'Tie'
    } else if (playerSelection === 0) {
        if (computerSelection === 1) {
            displayResult.textContent = 'Paper beats rock'
            result = false
        } else {
            displayResult.textContent ='Rock beats scissors'
            result = true
        }
    } else if (playerSelection === 1) {
        if (computerSelection === 2) {
            displayResult.textContent = 'Scissors beat paper'
            result = false
        } else {
            displayResult.textContent = 'Paper beats rock'
            result = true
        }
    } else if (playerSelection === 2) {
        if (computerSelection === 0) {
            displayResult.textContent = 'Rock beats scissors'
            result = false
        } else {
            displayResult.textContent = 'Scissors beat paper'
            result = true
        }
    }

    if (result !== 'Tie'){
        result ? playerScore++ : computerScore ++;
    }

    pScore.textContent = playerScore
    cScore.textContent = computerScore
}

let computerScore = 0
let playerScore = 0

const keys = document.querySelectorAll(".option");  

keys.forEach( (key) => {
    key.addEventListener('click', (e) =>{
        if (key.id === 'rock') {
            result = round(0);
        } else if (key.id === 'paper'){
            result = round(1)
        } else if (key.id === 'scissors'){
            result = round(2)
        } else return;
    })
})