let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_p = document.querySelector('.result > p');
const rock_div = document.getElementById('rock');
const paper_div = document.getElementById('paper');
const scissor_div = document.getElementById('scissor');

function getComputerChoice(){
    // r = rock , p = paper , s =scissor
    const choices = ['r' , 'p' , 's'];
    const randomNumber = Math.floor(Math.random() *3);
    return choices[randomNumber];
}

function convert(letter){
    if(letter === "r") return "Rock";
    if(letter === "p") return "paper";
    if(letter === "s") return "sicssor";
}

function win(user , computer){
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smalluserWord = "[user]".fontsize(3).sup();
    const smallucompWord = "[comp]".fontsize(3).sup();
    result_p.innerHTML = ` ${convert(user)} ${smalluserWord} beats ${convert(computer)} ${smallucompWord}  you win! 🔥`;
    
    
}

function lose(user , computer){
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smalluserWord = "[user]".fontsize(3).sup();
    const smallucompWord = "[comp]".fontsize(3).sup();
    result_p.innerHTML = ` ${convert(user)} ${smalluserWord} loses to ${convert(computer)} ${smallucompWord}  you Lost! 💩`;
    
   
}
function draw(user , computer){
    const smalluserWord = "[user]".fontsize(3).sup();
    const smallucompWord = "[comp]".fontsize(3).sup();
    result_p.innerHTML = ` ${convert(user)} ${smalluserWord}  ${convert(computer)} ${smallucompWord}  it's a Tie! `;
    
}

function game(userChoice){
const computerChoice = getComputerChoice();
switch(userChoice + computerChoice){
    case "rs":
    case "pr":
    case "sp":
        win(userChoice , computerChoice);
        
        break;
    case "rp":
    case "ps":
    case "sr":
        lose(userChoice , computerChoice);
        
        break;
    case "rr":
    case "pp":
    case "ss":
        draw(userChoice , computerChoice);
        
        break;

}
//tester 
//console.log('computer choice is '+computerChoice);
//console.log('user choice is '+userChoice);

}


function main(){
    rock_div.addEventListener('click' ,function(){
    game('r');
    })
    paper_div.addEventListener('click' ,function(){
      game('p');
    })
    scissor_div.addEventListener('click' ,function(){
        game('s');
    })
    
}

main();