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
        return "Tie"
    } else if (playerSelection === 0) {
        return computerSelection === 1 ? false : true // 'You lose! Paper beats rock' : 'You win! Rock beats scissors'
    } else if (playerSelection === 1) {
        return computerSelection === 2 ? false : true // 'You lose! Scissors beat paper' : 'You win! Paper beats rock'
    } else if (playerSelection === 2) {
        return computerSelection === 0 ? false : true // 'You lose! Rock beats Scissors' : 'You win! Scissors beat paper'
    }
}

function game() {
    let computerScore = 0
    let playerScore = 0

    for (i = 0; playerScore < 3 && computerScore < 3; i++) {
        let result = round()
        
        console.log(result)

        if (result !== 'Tie') {
            result ? playerScore++ : computerScore++
        }

        console.log('Computer Score: ' + computerScore)
        console.log('Player Score: ' + playerScore)
    }

    console.log(playerScore > computerScore ? 'You win!' : 'You lose!')
}

game()