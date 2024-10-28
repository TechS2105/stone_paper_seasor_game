let userScore = 0;
let compScore = 0; 

let boxes = document.querySelectorAll(".choice"); 
let msg = document.querySelector("#msgPara");
let userGameScore = document.querySelector("#number1");
let compGameScore = document.querySelector("#number2");

const genComputerChoice = () => {

    let compChoice = ["rock", "paper", "seasor"];
    let randomIdx = Math.floor(Math.random() * 3);
    return compChoice[randomIdx];

}

const drawGame = () => {

    msg.innerText = `Draw The Game! Play Again`;
    msg.style.backgroundColor = "black";

}

const showWinner = (userWin) => {
    
    if (userWin) {
        
        userScore++;
        userGameScore.innerText = `${userScore}`;
        msg.innerText = `You win!`;
        msg.style.backgroundColor = "green";

    } else {
        
        compScore++;
        compGameScore.innerText = `${compScore}`;
        msg.innerText = `You lose!`
        msg.style.backgroundColor = "red";

    }

}

const playGame = (userChoice) => {

    let computerChoice = genComputerChoice();

    if (userChoice === computerChoice) {
        
        // draw game
        drawGame();

    } else {
        
        let userWin = true;

        if (userChoice === "rock") {
            
            userWin = computerChoice === "paper" ? false : true;

        } else if (userChoice === "paper") {
            
            userWin = computerChoice === "seasor" ? false : true;
            
        } else {
            
            userWin = computerChoice === "rock" ? false : true;

        }

        showWinner(userWin);  

    }

}

boxes.forEach((choices) => {

    choices.addEventListener('click', () => {

        let userChoice = choices.getAttribute("id");
        playGame(userChoice);

    })

})