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
        console.log('It\'s a tie!')
        return 'Tie'
    } else if (playerSelection === 0) {
        if (computerSelection === 1) {
            console.log('Paper beats rock')
            return false
        } else {
            console.log('Rock beats scissors')
            return true
        }
    } else if (playerSelection === 1) {
        if (computerSelection === 2) {
            console.log('Scissors beat paper')
            return false
        } else {
            console.log('Paper beats rock')
            return true
        }
    } else if (playerSelection === 2) {
        if (computerSelection === 0) {
            console.log('Rock beats scissors')
            return false
        } else {
            console.log('Scissors beat paper')
            return true
        }
    }
}

function game() {
    let computerScore = 0
    let playerScore = 0

    for (i = 1; playerScore < 3 && computerScore < 3; i++) {
        console.log('Round ' + i + ' -------------')

        let result = round()

        if (result !== 'Tie') {
            result ? playerScore++ : computerScore++
        }

        console.log('Computer Score: ' + computerScore)
        console.log('Player Score: ' + playerScore)
    }

    console.log(playerScore > computerScore ? 'You win!' : 'You lose!')
}

game()