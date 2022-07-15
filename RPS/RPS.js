

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
    return temp;

}


const rock = document.getElementById("rock");
const info = document.querySelector(".info");
const player = document.querySelector(".left");
const npc = document.querySelector(".right");
const Again = document.getElementById("playAgain")
player.textContent = 0;
npc.textContent = 0;

Again.addEventListener('click', () => {
    player.textContent = 0;
    npc.textContent = 0;
    info.textContent = "First to 5 wins!";
    document.getElementById("scissor").disabled = false;
    document.getElementById("rock").disabled = false;
    document.getElementById("paper").disabled = false;
    Again.style.display = "none";


});





rock.addEventListener('click', () => {
    rock.classList.add("playing");
    let result = playRound("rock", computerPlay());
    info.textContent = result;
    if (result[4] === "W"){
        player.textContent++;
    }
    else if(result[4] === "L"){
        npc.textContent++;
    }

});



const paper = document.getElementById("paper");

paper.addEventListener('click', () => {
    paper.classList.add("playing");
    let result = playRound("paper", computerPlay());
    info.textContent = result;
    if (result[4] === "W"){
        player.textContent++;
    }
    else if(result[4] === "L"){
        npc.textContent++;
    }
});



const scissor = document.getElementById("scissor");

scissor.addEventListener('click', () => {
    scissor.classList.add("playing");
    let result = playRound("scissors", computerPlay());
    info.textContent = result;
    if (result[4] === "W"){
        player.textContent++;
    }
    else if(result[4] === "L"){
        npc.textContent++;
    }
});

function removeTransition(e){
    if(e.propertyName !== "transform"){
        return;
    }
    else{
        e.target.classList.remove("playing");
    }
}

window.addEventListener('click', () =>{
    
    if (player.textContent == 5 || npc.textContent ==5){
        document.getElementById("scissor").disabled = true;
        document.getElementById("rock").disabled = true;
        document.getElementById("paper").disabled = true;
    }
    if(player.textContent == 5){
        info.textContent = "Congrats you Win!"
        Again.style.display = "flex";
    }
    else if (npc.textContent == 5){
        info.textContent = "Sorry, you lose."
        Again.style.display = "flex";
    }

});





const boxes = document.querySelectorAll(".box");

 boxes.forEach(box => box.addEventListener('transitionend', removeTransition));


