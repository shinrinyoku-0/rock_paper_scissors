const body = document.querySelector('body')
const divScore = document.createElement('div');
body.append(divScore)

let score = 0;

function computerPlay() {
    let random = ["rock", "paper", "scissors"];
    return random[Math.floor(Math.random() * 3)]
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) { return "It's a tie!"}

    if (playerSelection == "rock")
        if (computerSelection == "paper") { return "You lose! Paper beats rock."}
        else { score++; return "You win! Rock beats scissors."}

    if (playerSelection == "paper")
        if (computerSelection == "scissors") { return "You lose! Scissors beats paper."}
        else { score++; return "You win! Paper beats rock."}       

    if (playerSelection == "scissors")
        if (computerSelection == "rock") { return "You lose! Rock beats scissors."}
        else { score++; return "You win! Scissors beats paper."}
}


const images = document.querySelectorAll(".image")
images.forEach((image) => image.addEventListener('click', startGame))




function startGame(e) {
    if(divScore.firstChild) divScore.remove(divScore.firstChild)
    let result = document.createElement('p');
    divScore.appendChild(result)
    let computerMove = computerPlay();
    result.textContent = playRound(e.target.id, computerMove)
}


const scoreCount = document.createElement('div')
body.append(scoreCount)
scoreCount.classList.add('scoreCount')
scoreCount.textContent="Score Count: "