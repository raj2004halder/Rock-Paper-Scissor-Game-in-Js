let userScore = 0;
let compuScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userBoard = document.querySelector("#user-score");
const comBoard = document.querySelector("#com-score");

let gencompChoice = () =>{
    const options = ["rock" ,"paper", "scissores"];
   const randomIdx = Math.floor(Math.random()* 3);
   return options[randomIdx];

}

const drawGame =() =>{
    msg.innerText =`Game was Draw. Play Again`;
    msg.style.backgroundColor ="black";
}

let shoWinner = (userWin,compChoice,userChoice) =>{
    if(userWin){
       userScore++;
       userBoard.innerText = userScore;
        msg.innerText = `You Win! You ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor ="Green";
    }else{
        compuScore++;
        comBoard.innerText = compuScore;
        console.log("computer wins");
        msg.innerText = `You lost. ${compChoice} Beats ${userChoice}`;
        msg.style.backgroundColor ="red";
    }
}

const playGame = (userChoice) =>{
    const compChoice = gencompChoice();
    console.log("computer choice is",compChoice);

    if(userChoice === compChoice){
        drawGame();
    }else{
        userWin = true
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false :true;
        }else if(userChoice === "paper"){
           userWin = compChoice === "scissores" ? false : true;
        }else{
            userWin = compChoice === "rock" ? false : true;

        }
        shoWinner(userWin,compChoice,userChoice);
    }


}
choices.forEach((choice) =>{
    choice.addEventListener("click",() =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice)
    });
});
