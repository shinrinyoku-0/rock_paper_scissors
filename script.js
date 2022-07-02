const body = document.querySelector('body')
let result = document.createElement('p');
body.append(result)
result.classList.add('result')

let yourScoreSpan = document.querySelector('.yourScoreSpan')
let compScoreSpan = document.querySelector('.compScoreSpan')

console.log(yourScoreSpan.innerText, compScoreSpan.innerText)
 
function incrementScore(scoreSpan) {
    scoreSpan.innerText = "" + (parseInt(scoreSpan.innerText) + 1)
    // console.log(yourScoreSpan.innerText, compScoreSpan.innerText)
    console.log(scoreSpan)
}

function computerPlay() {
    let random = ["rock", "paper", "scissors"];
    return random[Math.floor(Math.random() * 3)]
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) { return "It's a tie!"}

    if (playerSelection == "rock")
        if (computerSelection == "paper") { incrementScore(compScoreSpan); return "You lose! Paper beats rock."}
        else { incrementScore(yourScoreSpan); return "You win! Rock beats scissors."}

    if (playerSelection == "paper")
        if (computerSelection == "scissors") { incrementScore(compScoreSpan); return "You lose! Scissors beats paper."}
        else { incrementScore(yourScoreSpan); return "You win! Paper beats rock."}       

    if (playerSelection == "scissors")
        if (computerSelection == "rock") { incrementScore(compScoreSpan); return "You  lose! Rock beats scissors."}
        else { incrementScore(yourScoreSpan); return "You win! Scissors beats paper."}
}


const images = document.querySelectorAll(".image")
images.forEach((image) => image.addEventListener('click', startGame))




function startGame(e) {
    let computerMove = computerPlay();
    result.textContent = playRound(e.target.id, computerMove)
    console.log(result, computerMove)
}

