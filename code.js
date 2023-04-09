function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}

function getPlayerChoice() {
    let answer = prompt('Whats your choice (Rock/Paper/Scissors)?')
    if (answer.toLowerCase() === 'rock') {
        return 0;
    } else if (answer.toLowerCase() === 'paper') {
        return 1;
    } else if (answer.toLowerCase() === 'scissors') {
        return 2;
    } else {
        alert('Error. You must select a valid option.')
    }
}
