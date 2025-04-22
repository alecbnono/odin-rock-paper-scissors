"use strict";

let humanScore = 0;
let computerScore = 0;



function getComputerChoice() {
  const choice = Math.floor(Math.random() * 3);

  switch (choice) {
    case 0:
      console.log("ROCK");
      return "ROCK";
    case 1:
      console.log("PAPER");
      return "PAPER";
    case 2:
      console.log("SCISSORS");
      return "SCISSORS";
  }
}

function getHumanChoice() {
  let input;

  do {
    input = prompt("What will you throw?").toUpperCase();

    if (input !== "ROCK" && input !== "PAPER" && input !== "SCISSORS") {
      alert("Please enter a proper input");
    }
  } while (input !== "ROCK" && input !== "PAPER" && input !== "SCISSORS");

  return input;
}

function playRound(choice) {
    let humanChoice = choice;
    let computerChoice = getComputerChoice();
    if (humanChoice === computerChoice) {
      console.log("Its a Tie!");
    } else if (
      (humanChoice === "ROCK" && computerChoice === "SCISSORS") ||
      (humanChoice === "SCISSORS" && computerChoice === "PAPER") ||
      (humanChoice === "PAPER" && computerChoice === "ROCK")
    ) {
      console.log("You Win!");
      humanScore++;
    } else if (
      (computerChoice === "ROCK" && humanChoice === "SCISSORS") ||
      (computerChoice === "SCISSORS" && humanChoice === "PAPER") ||
      (computerChoice === "PAPER" && humanChoice === "ROCK")
    ) {
      console.log("You Lose!");
      computerScore++;
    }
    console.log(`Your Score: ${humanScore} \nComputer Score: ${computerScore}`);
}

const selections = document.querySelector(".selections");
const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");

selections.addEventListener("click", (e) => {

    let target = e.target;

    switch(target.class) {
        case "rock":
            playRound("ROCK");
            break;

        case "paper":
            playRound("PAPER");
            break;

        case "scissors":
            playRound("SCISSORS");
            break;
    }
})

if (humanScore === computerScore) {
console.log("Its an Overall Draw!");
} else if (humanScore > computerScore) {
console.log("You win the entire game!");
} else if (humanScore < computerScore) {
console.log("You lost the entire game.");
}

