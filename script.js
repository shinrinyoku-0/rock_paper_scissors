function computerPlay() {
    let random = ["rock", "paper", "scissors"];
    return random[Math.floor(Math.random() * 3)]
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) { return "It's a tie!"}

    if (playerSelection == "rock")
        if (computerSelection == "paper") { return "You lose! Paper beats rock."}
        else { return "You win! Rock beats scissors."}

    if (playerSelection == "paper")
        if (computerSelection == "scissors") { return "You lose! Scissors beats paper."}
        else { return "You win! Paper beats rock."}       

    if (playerSelection == "scissors")
        if (computerSelection == "rock") { return "You lose! Rock beats scissors."}
        else { return "You win! Scissors beats paper."}
}


const computerSelection = computerPlay()
let playerSelection = prompt("What's your move? => \"rock\", \"paper\", \"scissors\" ").toLowerCase

alert(playRound(playerSelection, computerSelection))

function game() {
    for (let i = 0; i < 5; i++) {
        playRound()
    }
}