//Write a function that grabs a random number between 1-3 inclusive and assign rock/paper/scissor


function getComputerChoice(computerChoice){
    computerChoice = Math.floor(Math.random() * 4);
    if (computerChoice === 0){
        computerChoice = "rock"
    }else if(computerChoice === 1){
        computerChoice = "paper"
    }else{
        computerChoice = "scissor"
    }
    return computerChoice
};

//takes the players input and the computers input to decide who wins
function gameRound(playerSelection,computerSelection){
    playerScore = 0;
    computerScore = 0;
    
    function handleClick(selection){
        playerSelection = selection;
        computerSelection = getComputerChoice();
        playerChoice = document.querySelector("div.player-choice")
        computerChoice = document.querySelector("div.cpu-choice")
        results = document.querySelector("p.results")
        scoreBox = document.querySelector("div.scoreBox");

        console.log(computerScore)
        if (playerScore < 5 && computerScore < 5 ){
            if (playerSelection === computerSelection){
                playerChoice.innerHTML = `${playerSelection}`;
                computerChoice.innerHTML = `${computerSelection}`;
                return results.innerHTML =`Its a tie! you chose ${playerSelection} \n CPU choose: ${computerSelection}` //alert("its a tie");
                //Checks for rock 
            } if (playerSelection === "rock"){
                if (computerSelection === "scissor") {
                    playerChoice.innerHTML = `${playerSelection}`;
                    computerChoice.innerHTML = `${computerSelection}`;
                    //console.log(`you chose ${playerSelection} \n CPU choose: ${computerSelection}`)
                    results.innerHTML = `Player Wins`;
                    playerScore += 1 ;
                    scoreBox.innerHTML = `Player: ${playerScore} CPU: ${computerScore}`;
                    return
                } else {
                    playerChoice.innerHTML = `${playerSelection}`;
                    computerChoice.innerHTML = `${computerSelection}`;
                    results.innerHTML = `Computer Wins`;
                    computerScore += 1;
                    scoreBox.innerHTML = `Player: ${playerScore} CPU: ${computerScore}`;
                    return
                }
                //checks for paper
            } if (playerSelection === "paper"){
                if (computerSelection === "rock"){
                    playerChoice.innerHTML = `${playerSelection}`;
                    computerChoice.innerHTML = `${computerSelection}`;
                    results.innerHTML = `Player Wins`
                    playerScore += 1 ;
                    scoreBox.innerHTML = `Player: ${playerScore} CPU: ${computerScore}`;
                    return
                } else {
                    playerChoice.innerHTML = `${playerSelection}`;
                    computerChoice.innerHTML = `${computerSelection}`;
                    results.innerHTML = `Computer Wins`
                    computerScore += 1;
                    scoreBox.innerHTML = `Player: ${playerScore} CPU: ${computerScore}`;
                    return
                }
                //checks for scissor
            } if (playerSelection === "scissor"){
                if (computerSelection === "paper"){
                    playerChoice.innerHTML = `${playerSelection}`;
                    computerChoice.innerHTML = `${computerSelection}`;
                    results.innerHTML = `Player Wins`
                    playerScore += 1 ;
                    scoreBox.innerHTML = `Player: ${playerScore} CPU: ${computerScore}`;
                    return
                } else{
                    playerChoice.innerHTML = `${playerSelection}`;
                    computerChoice.innerHTML = `${computerSelection}`;
                    results.innerHTML = `Computer Wins`
                    computerScore += 1;
                    scoreBox.innerHTML = `Player: ${playerScore} CPU: ${computerScore}`;
                    return
                }
            }}else if (playerScore === 5){
                disableButtons();
                console.log("Game over player won")
            } else {
                disableButtons()
                console.log("You lost computer won")
            }
    } 

    let rock = document.querySelector("button.rock").addEventListener('click', () =>{
        selection = "rock"
        handleClick(selection)
    });


    let paper = document.querySelector("button.paper").addEventListener('click', () =>{
        selection = "paper"
        handleClick(selection)
    });


    let scissor = document.querySelector("button.scissor").addEventListener('click', () =>{
        selection = "scissor"
        handleClick(selection)
    });
}

const gameButtons = [
    rockButton = document.querySelector("button.rock"),
    paperButton = document.querySelector("button.paper"),
    scissorButton = document.querySelector("button.scissor"),
]


function disableButtons(){
    gameButtons.forEach((elem) => {
        elem.disabled = true
    })
}

function enableButtons(){
    gameButtons.forEach((elem) => {
        elem.disabled = false
    })
}


 

    //converting the users selection to lowercase so it can read any variation of keystroke

    // -- let playerSelection = playerSelection.toLowerCase();

    //making the parameter equal to the actual computer choice
    /* computerSelection = getComputerChoice();

    if (playerSelection === computerSelection){
        console.log(`you chose ${playerSelection} \n CPU choose: ${computerSelection}`)
        return alert("its a tie");
        //Checks for rock 
    } if (playerSelection === "rock"){
        if (computerSelection === "scissor") {
            console.log(`you chose ${playerSelection} \n CPU choose: ${computerSelection}`)
            return alert("Player Wins")
        } else {
            console.log(`you chose ${playerSelection} \n CPU choose: ${computerSelection}`)
            return alert("Computer Wins")
        }
        //checks for paper
    } if (playerSelection === "paper"){
        if (computerSelection === "rock"){
            console.log(`you chose ${playerSelection} \n CPU choose: ${computerSelection}`)
            return alert("Player Wins")
        } else {
            console.log(`Computer choose: ${computerSelection} \n You choose: ${playerSelection}`)
            return alert("Computer Wins")
        }
        //checks for scissor
    } if (playerSelection === "scissor"){
        if (computerSelection === "paper"){
            console.log(`you chose ${playerSelection} \n CPU choose: ${computerSelection}`)
            return alert("Player Wins")
        } else{
            console.log(`you chose ${playerSelection} \n CPU choose: ${computerSelection}`)
            return alert("Computer Wins")
        }
    } */


gameRound();

/* function game(rounds){
    rounds = parseInt(prompt("How many rounds do you wanna play?: "))
    for(let i = 0; i < rounds; i++){
        alert(`Your on round ${i + 1}`);
        gameRound();
        if ( i === rounds - 1){
            return alert(`game over you played ${rounds} rounds`);
        }
    }
} */


//game();

//assign each number to either rock,paper or scissor
//ask the user to input the words rock/paper/scissor
//compare the strings to the numbers assigned to each element
//write comparisons between the users and the computers  to determine the hiarchy to see who wins the game
//display the winner and after the game ends ask if they would like to retry