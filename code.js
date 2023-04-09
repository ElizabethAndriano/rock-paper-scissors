function getComputerChoice() {
    return Math.floor(Math.random() * 3)
}

function getPlayerChoice() {
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
}

function round() {
    const playerSelection = getPlayerChoice()
    const computerSelection = getComputerChoice()

    console.log('Computer: ' + computerSelection)
    console.log('Player: ' + playerSelection)

    if (playerSelection === computerSelection) {
        return "It's a tie!"
    } else if (playerSelection === 0) {
        return computerSelection === 1 ? False : True // 'You lose! Paper beats rock' : 'You win! Rock beats scissors'
    } else if (playerSelection === 1) {
        return computerSelection === 2 ? False : True // 'You lose! Scissors beat paper' : 'You win! Paper beats rock'
    } else if (playerSelection === 2) {
        return computerSelection === 0 ? False : True // 'You lose! Rock beats Scissors' : 'You win! Scissors beat paper'
    }
}

function game() {
    for (i = 0; i < 5; i++) {
        console.log(round())
    }
}

game()