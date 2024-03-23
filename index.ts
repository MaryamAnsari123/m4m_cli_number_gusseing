#! /usr/bin/env node 

import inquirer from "inquirer";

// 1) computer will generate a random number

// 2) user input for gusseing number

// 3)compare user input with computer generated number and show result

const randomNumber = Math.floor(Math.random() * 6 + 1);

const answers = await inquirer.prompt([
    {
        name : "userGuessedNumber",
        type : "number",
        message :"please guess a number 1 to 6:",
    },
]);

if(answers.userGuessedNumber === randomNumber) {
    console.log("congratulatios! you guessed correct number.");
} else {
    console.log("ohhhh! you guessed wrong number.");
}
