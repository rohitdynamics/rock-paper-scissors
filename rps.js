let getComputerChoice = () => {
    let output;
    let random = Math.random();
    random = random*9;
    random = Math.floor(random);
        if (random <=2 ){
            output = 'rock'
        }
        else if (random >= 3 && random <=5){
            output = 'paper'
        }
        else if (random >= 6 && random <=8){
            output = 'scissors'
        }
    return output;   
};

const inputUsername = document.querySelector("#username");
const inputBestOf = document.querySelector("#bestof");
const startbtn = document.querySelector("#input-startgame");
const resetbtn = document.querySelector("#input-resetgame")
const inputRock = document.querySelector("#input-rock");
const inputPaper = document.querySelector("#input-paper");
const inputScissor = document.querySelector("#input-scissor");
const winner = document.querySelector("#winner");
const p1 = document.querySelector("#p1");
let gameCount;
let bestOf;
let humanScore;
let computerScore;
let p1total;
let p2total;
let startbtntoggle = false;

let playGame = () => {
    if(inputUsername.value){
        bestOf = Number(inputBestOf.value);
        if (bestOf>5){
            alert("Maximum value of Best of is 5")
            resetGame();
        } else {
        p1.textContent = inputUsername.value;
        startbtntoggle = true;
        gameCount = 1;
        humanScore = 0;
        computerScore = 0;
        p1total  = 0;
        p2total = 0;
        }
    } else {
        alert('Please enter : \n1. Player name \n2. Best of')
    }    
};

let playRound = (humanChoice, computerChoice) =>
        {
            if(startbtntoggle){
                if(gameCount <= bestOf){
                    if (humanChoice == computerChoice) {
                    humanScore = humanScore + 1;
                    computerScore = computerScore + 1;
                    document.querySelector('#p1s' + gameCount).textContent = "1";
                    document.querySelector('#p2s' + gameCount).textContent = "1";
                    } 
                    else if (
                    (humanChoice == 'rock' && computerChoice == 'scissors') || 
                    (humanChoice == 'paper' && computerChoice == 'rock') || 
                    (humanChoice == 'scissors' && computerChoice == 'paper')
                    )
                    {
                    humanScore = humanScore + 1;
                    document.querySelector('#p1s' + gameCount).textContent = "1";
                    document.querySelector('#p2s' + gameCount).textContent = "0";
                    } 
                    else {
                    computerScore = computerScore + 1;
                    document.querySelector('#p1s' + gameCount).textContent = "0";
                    document.querySelector('#p2s' + gameCount).textContent = "1";
                    }
                    
                    p1total = 0;
                    p2total = 0;

                    for ( let i=1; i <= gameCount; i++ ) {
                        p1total = Number(document.querySelector('#p1s' + i).textContent) + p1total;
                        p2total = Number(document.querySelector('#p2s' + i).textContent) + p2total;
                    }

                    gameCount = gameCount + 1;

                    document.querySelector("#p1total").textContent = "YOU: " + p1total;
                    document.querySelector("#p2total").textContent = "COMPUTER :" + p2total;

                    if(gameCount>bestOf){
                        if(p1total>p2total){ winner.textContent = "THE WINNER IS : " + p1.textContent}
                        else if(p1total<p2total){winner.textContent = "THE WINNER IS : COMPUTER"}
                        else {winner.textContent = "IT'S A DRAW !"}
                        }
                }
            } else {
            alert('Please enter : \n1. Player name \n2. Best of\n3. Click START GAME to start your match')
            }
        };   
        
let resetGame = () => {
    inputUsername.value = "";
    inputBestOf.value = "";
    p1total = 0;
    p2total = 0;
    for ( let i=1; i <= 5; i++ ) {
        document.querySelector('#p1s' + i).textContent = "";
        document.querySelector('#p2s' + i).textContent = "";
    }
    document.querySelector("#p1total").textContent = "YOU: " + p1total;
    document.querySelector("#p2total").textContent = "COMPUTER:" + p2total;
    document.querySelector('#winner').textContent = "";
    p1.textContent = 'PLAYER NAME';
}        

startbtn.addEventListener("click", playGame);
resetbtn.addEventListener("click", resetGame);
inputRock.addEventListener("click", () => {playRound("rock", getComputerChoice());});
inputPaper.addEventListener("click", () => {playRound("paper", getComputerChoice());});
inputScissor.addEventListener("click", () => {playRound("scissors", getComputerChoice());});