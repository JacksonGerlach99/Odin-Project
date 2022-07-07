
function computerPlay(){
    let npc = Math.floor(Math.random() * 3);
    
    if( npc == 0){
        npc = "rock"
    }
    else if (npc == 1){
        npc = "paper"
    }
    else{
        npc = "scissors";
    }
    return npc;
}

function playRound (playerSelection, computerSelection){
    let temp = "";
    if (playerSelection == null){
            return;
    }

    let playerChoice = playerSelection.toLowerCase()

    if (playerChoice === "rock"){
        if (computerSelection === "rock"){
            temp = "Draw!";
        }
        else if(computerSelection === "paper"){
            temp = "You Lose! Paper beats Rock";
        }
        else{
            temp = "You Win! Rock beats Scissors";
        }
    }
    else if (playerChoice === "paper"){
        if (computerSelection === "paper"){
            temp = "Draw!";
        }
        else if(computerSelection === "scissors"){
            temp = "You Lose! Scissors beats Paper";
        }
        else{
            temp = "You Win! Paper beats Rock";
        }
    }
    else if (playerChoice === "scissors"){
        if (computerSelection === "scissors"){
            temp = "Draw!";
        }
        else if(computerSelection === "rock"){
            temp = "You Lose! Rock beats Scissors";
        }
        else{
            temp = "You Win! Scissors beats Paper";
        }
    }
    else{
        console.log("please input Rock, Paper, or Scissors");
        playRound(prompt("Rock, Paper, Scissors!"), computerPlay())
        console.log("");
    }
    return temp;

}

function game(){
    let player = 0;
    let npc = 0;
    let game = false;

    console.log("First to 3 wins");
    console.log("_______________")
    while(game == false){
        let result = playRound(prompt("Rock, Paper, Scissors!"), computerPlay())

        if (result[4] === "W"){
            player+=1;
        }
        else if(result[4] === "L"){
            npc+=1;
        }
        else{
            console.log("Draw!");
        }
        console.log(`Your Score ${player}`)
        console.log(`Computer Score ${npc}`)

        if (player == 3 || npc == 3){
            game = true;
        }
        console.log("");
    }
    if(player == 3){
        console.log("You Win!")
    }
    else if(npc == 3){
        console.log("You Lose!")
    }

}
if (prompt("type in start to start RPS best of 5") == "start"){
    game();
}

