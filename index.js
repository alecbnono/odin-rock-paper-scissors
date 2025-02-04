"use strict";

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choice = Math.floor(Math.random() * 3);

  switch (choice) {
    case 0:
      return "ROCK";
    case 1:
      return "PAPER";
    case 2:
      return "SCISSORS";
  }
}

console.log(getComputerChoice());

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

console.log(getHumanChoice());
