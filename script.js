// function to randomly return rock, paper or scissors
function getComputerChoice() {
    let randomNum = Math.random()
    
    if (randomNum < 0.33) return "rock";
    else if (randomNum > 0.66) return "scissors";
    else return "paper";
}


function playGame() {
    //declare the players' score initializing with 0
    let humanScore = 0;
    let computerScore = 0;
    
    //logic to play a single round
    function playRound(playerSelection, computerChoice) {
        
        playerSelection = playerSelection.toLowerCase(); //human's choice to lowercase for case insensitivity of user input
        
        // Determine if it's a draw and return msg
        if (playerSelection == computerChoice) {
            roundResult.textContent = "It's a draw!";
            humanScoreSpan.textContent = humanScore;
            computerScoreSpan.textContent = computerScore;
        }
        // else determine if user wins with success message returned
        else if ((playerSelection == "rock" && computerChoice == "scissors") || (playerSelection == "paper" && computerChoice == 'rock') || (playerSelection =="scissors" && computerChoice == "paper")) {
            humanScore++;
            roundResult.textContent =`You win the round! ${playerSelection} beats ${computerChoice}`; 
            humanScoreSpan.textContent = humanScore;
            computerScoreSpan.textContent = computerScore;
        }
        //else user loses with failure message returned
        else {
            computerScore++;
            roundResult.textContent = `You lose the round! ${computerChoice} beats ${playerSelection}`;
            humanScoreSpan.textContent = humanScore;
            computerScoreSpan.textContent = computerScore;
        }   
    }
    
    // add event listener to the button group to play a round on each user option click
    // announce the winner at 5 points
    buttonGroup.addEventListener("click", (e) => {
        switch(e.target.className) {
            case "button-rock":
                playRound("rock", getComputerChoice());
                break;
                case "button-paper":
                    playRound("paper", getComputerChoice());
                    break;
                case "button-scissors":
                    playRound("scissors", getComputerChoice());
                    break;
                    };        
                    //check if one of the players won the game with 5 points and update DOM
                    if (humanScore === 5) {
                        buttonGroup.previousSibling.remove();
                        buttonGroup.previousSibling.remove();
                        buttonGroup.remove();
                        winningResult.textContent = "Human wins the game!";
                    }
                    else if (computerScore === 5) {
                        buttonGroup.previousSibling.remove();
                        buttonGroup.previousSibling.remove();
                        buttonGroup.remove();
                        winningResult.textContent = "Computer wins the game!";
                    }
                })             
}
            

// get button group div reference
const buttonGroup = document.querySelector(".button-group");

// get the .round-result <p> reference
const roundResult =  document.querySelector(".round-result");
// get the .human-score <span> reference
const humanScoreSpan =  document.querySelector(".human-score span");
// get the .computer-score <span> reference
const computerScoreSpan =  document.querySelector(".computer-score span");
// get the .winning-result <p> reference
const winningResult =  document.querySelector(".winning-result");

// start game
console.log(playGame());
