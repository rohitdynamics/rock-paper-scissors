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

let getHumanChoice = () => {
    let input = String(prompt('Enter your choice : ROCK or PAPER or SCISSORS'));
    input = input.toLowerCase();
    return input;
};

let playGame = () => {
    let humanScore = 0;
    let computerScore = 0;
    let humanChoice;
    let computerChoice;
    let playRound = (humanChoice, computerChoice) => {
    let result;
    if (humanChoice == computerChoice) {
        result = 'DRAW';
        humanScore = humanScore + 1;
        computerScore = computerScore + 1;
    } 

    else if (
        (humanChoice == 'rock' && computerChoice == 'scissors') || 
        (humanChoice == 'paper' && computerChoice == 'rock') || 
        (humanChoice == 'scissors' && computerChoice == 'paper')
        )
        {
        result = 'YOU WIN! ' + humanChoice + ' beats ' + computerChoice;
        humanScore = humanScore + 1;
        } 
    else {
    result = 'YOU LOOSE! ' + computerChoice + ' beats ' + humanChoice;
    computerScore = computerScore + 1;
    }
    console.log(result);
    console.log('YOUR SCORE :' + humanScore);
    console.log('COMPUTER SCORE :' + computerScore);
    
}
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    
};

playGame();


