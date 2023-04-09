function getComputerChoice() {
    return Math.floor(Math.random() * 3)
}

function getPlayerChoice() {
    let answer = prompt('Whats your choice (Rock/Paper/Scissors)?')
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
}

function round() {
    playerSelection = getPlayerChoice()
    computerSelection = getComputerChoice()

    console.log('Computer: ' + computerSelection)
    console.log('Player: ' + playerSelection)

    if (playerSelection === computerSelection) {
        return "It's a tie!"
    } else if (playerSelection === 0) {
        return computerSelection === 1 ? 'You lose! Paper beats rock' : 'You win! Rock beats scissors'
    } else if (playerSelection === 1) {
        return computerSelection === 2 ? 'You lose! Scissors beat paper' : 'You win! Paper beats rock'
    } else if (playerSelection === 2) {
        return computerSelection === 0 ? 'You lose! Rock beats Scissors' : 'You win! Scissors beat paper'
    }
}
console.log(round())