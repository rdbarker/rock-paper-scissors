function getInput(text){     //returns prompt in lowercase only
    const input = window.prompt(text,"");
    return input.toLowerCase();
}

function validateInput(){  //returns only a valid answer, keeps prompting until one is given.
    let notValidated = true;
    let answer = getInput("Rock, Paper or Scissors?");
    while(notValidated){
        switch(answer){
            case "rock":
                notValidated = false;
                break;
            case "scissors":
                notValidated = false;
                break;
            case "paper":
                notValidated = false;
                break;
            default:
                answer = getInput("Sorry! Only pick Rock, Paper or Scissors!");
        }
        return answer;
    }
}

function getRandomInt(max) {  //return random int to max number
    return Math.floor(Math.random() * max);
  }

function getComputerChoice(){  //return rock paper or scissors based on a random number
    const number = getRandomInt(3);
    switch(number){
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;
        default:
            return "paper";
            console.log("computer pick error");
    }
}

function getWinner(humanChoice,computerChoice){  //return a winner, output is either "computer", "human" or "tie"
    switch (humanChoice){
        case "rock":
            if (computerChoice==="scissors") return "human";
            if (computerChoice==="paper") return "computer";
            if (computerChoice==="rock") return "tie";
        case "paper":
            if (computerChoice==="rock") return "human";
            if (computerChoice==="scissors") return "computer";
            if (computerChoice==="paper") return "tie";
        case "scissors":
            if (computerChoice==="rock") return "human";
            if (computerChoice==="paper") return "computer";
            if (computerChoice==="scissors") return "tie";    
        default:
            console.log("error comparing results");       
    }
}

function game(){
    const humanChoice = validateInput();
    const computerChoice = getComputerChoice();
    const winner = getWinner(humanChoice,computerChoice);
    if (winner === "computer") ++computerScore;
    else if (winner === "human") ++humanScore;
    console.log(`${humanChoice} vs ${computerChoice}....${winner}! ${humanScore}-${computerScore}` ) 
}

let humanScore = 0;
let computerScore = 0;
game()
game()
game()
game()
game()