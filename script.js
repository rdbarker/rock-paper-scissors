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
        console.log(answer);
        return answer;
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function getComputerChoice(){
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
validateInput()