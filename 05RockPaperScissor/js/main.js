const userScoreVal = document.querySelector("#userScoreVal");
const compScoreVal = document.querySelector("#compScoreVal");
const result_user_stat = document.querySelector("#result-user-stat");
const result_comp_stat = document.querySelector("#result-comp-stat");
const result_final_stat = document.querySelector("#result-final-stat");
const rock = document.querySelector("#r");
const paper = document.querySelector("#p");
const scissors = document.querySelector("#s");

// For storing user and computer choice
let userChoice = '';
let compChoice = '';

// This array will help to randomly select any three for computer.
const compArr = ['rock', 'paper', "scissors"];

// Score counters
let userScore = 0;
let compScore = 0;

// Event listeners on each button to run the 'choiceFun' function and passing the argument according to the button.
rock.addEventListener("click", () => choiceFun("rock"));
paper.addEventListener("click", () => choiceFun("paper"));
scissors.addEventListener("click", () => choiceFun("scissors"));

function choiceFun(val) {
    userChoice = val;

    // Generating random number to select 'rock' 'paper' and 'scissors' for computer
    let randomNum = Math.floor(Math.random() * 3);
    compChoice = compArr[randomNum];

    // Updating user and computer choice
    result_user_stat.textContent = `User: ${userChoice}`;
    result_comp_stat.textContent = `Computer: ${compChoice}`;

    // Conditionals to find out who win the round
    if(userChoice === 'rock' && compChoice === 'scissors'){
        userScoreVal.textContent = userScore += 1;
        result_final_stat.textContent = "Winner: User";
    }
    else if(userChoice === 'scissors' && compChoice === 'rock'){
        compScoreVal.textContent = compScore += 1;
        result_final_stat.textContent = "Winner: Computer";
    }
    else if(userChoice === 'scissors' && compChoice === 'paper'){
        userScoreVal.textContent = userScore += 1;
        result_final_stat.textContent = "Winner: User";
    }
    else if(userChoice === 'paper' && compChoice === 'scissors'){
        compScoreVal.textContent = compScore += 1;
        result_final_stat.textContent = "Winner: Computer";
    }
    else if(userChoice === 'paper' && compChoice === 'rock'){
        userScoreVal.textContent = userScore += 1;
        result_final_stat.textContent = "Winner: User";
    }
    else if(userChoice === 'rock' && compChoice === 'paper'){
        compScoreVal.textContent = compScore += 1;
        result_final_stat.textContent = "Winner: Computer";
    }
    else {
        result_final_stat.textContent = "Tied"
    }
}

