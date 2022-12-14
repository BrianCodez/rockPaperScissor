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
    playerSelection = prompt("Rock Paper or Scissor?");
    //converting the users selection to lowercase so it can read any variation of keystroke
    let lowerPlayerSelection = playerSelection.toLowerCase();
    //making the parameter equal to the actual computer choice
    computerSelection = getComputerChoice();

    if (lowerPlayerSelection === computerSelection){
        console.log(`you chose ${lowerPlayerSelection} \n CPU choose: ${computerSelection}`)
        return alert("its a tie");
        //Checks for rock 
    } if (lowerPlayerSelection === "rock"){
        if (computerSelection === "scissor") {
            console.log(`you chose ${lowerPlayerSelection} \n CPU choose: ${computerSelection}`)
            return alert("Player Wins")
        } else {
            console.log(`you chose ${lowerPlayerSelection} \n CPU choose: ${computerSelection}`)
            return alert("Computer Wins")
        }
        //checks for paper
    } if (lowerPlayerSelection === "paper"){
        if (computerSelection === "rock"){
            console.log(`you chose ${lowerPlayerSelection} \n CPU choose: ${computerSelection}`)
            return alert("Player Wins")
        } else {
            console.log(`Computer choose: ${computerSelection} \n You choose: ${lowerPlayerSelection}`)
            return alert("Computer Wins")
        }
        //checks for scissor
    } if (lowerPlayerSelection === "scissor"){
        if (computerSelection === "paper"){
            console.log(`you chose ${lowerPlayerSelection} \n CPU choose: ${computerSelection}`)
            return alert("Player Wins")
        } else{
            console.log(`you chose ${lowerPlayerSelection} \n CPU choose: ${computerSelection}`)
            return alert("Computer Wins")
        }
    }
}


function game(rounds){
    rounds = parseInt(prompt("How many rounds do you wanna play?: "))
    for(let i = 0; i < rounds; i++){
        alert(`Your on round ${i + 1}`);
        gameRound();
        if ( i === rounds - 1){
            return alert(`game over you played ${rounds} rounds`);
        }
    }
}

game();

//assign each number to either rock,paper or scissor
//ask the user to input the words rock/paper/scissor
//compare the strings to the numbers assigned to each element
//write comparisons between the users and the computers  to determine the hiarchy to see who wins the game
//display the winner and after the game ends ask if they would like to retry