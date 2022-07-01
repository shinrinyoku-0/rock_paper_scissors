const body = document.querySelector('body')

let playerScore = 0;
let compScore = 0;
let turn = 0;

function computerPlay() {
    let random = ["rock", "paper", "scissors"];
    return random[Math.floor(Math.random() * 3)]
}

function playRound(playerSelection) {
    turn++;
    let computerSelection = computerPlay();
    let result = "";

    if (playerSelection == computerSelection) { return "It's a tie!"}

    if (playerSelection == "rock")
        if (computerSelection == "paper") { compScore++; return "You lose! Paper beats rock."}
        else { playerScore++; result =  "You win! Rock beats scissors."}

    if (playerSelection == "paper")
        if (computerSelection == "scissors") { compScore++; return "You lose! Scissors beats paper."}
        else { playerScore++; result = "You win! Paper beats rock."}       

    if (playerSelection == "scissors")
        if (computerSelection == "rock") { compScore++; return "You lose! Rock beats scissors."}
        else { playerScore++; result =  "You win! Scissors beats paper."}

    if (turn == 5)
        if(playerScore > compScore) result = "You won the game!"
        else result = "You lost the game."

    let p = document.createElement('p');
    body.append(p) 
    p.textContent(result)
    
}


const images = document.querySelectorAll(".image")
images.forEach((image) => image.addEventListener('click', (e) => playRound(e.target.id)))


// function startGame(e) {
//     console.log(Boolean(result))
//     let result = document.createElement('p');
//     body.append(result)
//     result.textContent = playRound(e.target.id, computerMove)
// }


const scoreCount = document.createElement('div')
body.append(scoreCount)
scoreCount.classList.add('scoreCount')
scoreCount.textContent="Score Count: "