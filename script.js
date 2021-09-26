function playGame(){
    const humanChoice = this.dataset["choice"];
    const computerChoice = getComputerChoice();
    const winner = getWinner(humanChoice,computerChoice);
    updateScore(winner,humanChoice,computerChoice);
    updateComputerChoice(computerChoice);
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
function updateScore(winner,humanChoice,computerChoice){
    if (winner==="human") {
        humanScore+=1
        winnerDiv.innerHTML=`Nice! ${humanChoice} beat ${computerChoice}`;
    }
    else{
        computerScore+=1;
    }
}
function checkForWinner(){
    if (humanScore === 5) return "human";
    else if (computerScore === 5) return "computer";
    else return false;
}
function updateComputerChoice(computerChoice){
    document.querySelectorAll(".computer-buttons button").forEach(
        button => button.classList.remove("show-button"));
    document.querySelector(`.computer-buttons button[data-choice="${computerChoice}"]`).classList.add("show-button");
}
let humanScore = 0;
let computerScore = 0;
const humanButtons = document.querySelectorAll(".human-buttons button");
const computerButtons = document.querySelectorAll(".human-buttons button");
const winnerDiv = document.querySelector("div.winner");
const humanScoreDiv = document.querySelector(".human-score");
const computerScoreDiv = document.querySelector(".computer-score");
humanButtons.forEach(button =>button.addEventListener('click',playGame));
