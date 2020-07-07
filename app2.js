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
    const choices = ['ح' , 'و' , 'م'];
    const randomNumber = Math.floor(Math.random() *3);
    return choices[randomNumber];
}

function convert(letter){
    if(letter === "ح") return "حجر";
    if(letter === "و") return "ورق";
    if(letter === "م") return "مقص";
}

function win(user , computer){
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smalluserWord = "[اللاعب]".fontsize(3).sup();
    const smallucompWord = "[الكمبيوتر]".fontsize(3).sup();
    result_p.innerHTML = ` ${convert(user)} ${smalluserWord}  ${convert(computer)} ${smallucompWord}  لقد فزت! 🔥`;
    
    
}

function lose(user , computer){
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smalluserWord = "[اللاعب]".fontsize(3).sup();
    const smallucompWord = "[الكمبيوتر]".fontsize(3).sup();
    result_p.innerHTML = ` ${convert(user)} ${smalluserWord}  ${convert(computer)} ${smallucompWord}  لقد خسرت! 💩`;
    
   
}
function draw(user , computer){
    const smalluserWord = "[اللاعب]".fontsize(3).sup();
    const smallucompWord = "[الكمبيوتر]".fontsize(3).sup();
    result_p.innerHTML = ` ${convert(user)} ${smalluserWord}  ${convert(computer)} ${smallucompWord}  تعادل! `;
    
}

function game(userChoice){
const computerChoice = getComputerChoice();
switch(userChoice + computerChoice){
    case "حم":
    case "وح":
    case "مو":
        win(userChoice , computerChoice);
        
        break;
    case "حو":
    case "وم":
    case "مح":
        lose(userChoice , computerChoice);
        
        break;
    case "حح":
    case "وو":
    case "مم":
        draw(userChoice , computerChoice);
        
        break;

}
//tester 
//console.log('computer choice is '+computerChoice);
//console.log('user choice is '+userChoice);

}


function main(){
    rock_div.addEventListener('click' ,function(){
    game('ح');
    })
    paper_div.addEventListener('click' ,function(){
      game('و');
    })
    scissor_div.addEventListener('click' ,function(){
        game('م');
    })
    
}

main();