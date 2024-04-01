#! /usr/bin/env node
import inquirer from "inquirer";
console.log(" Welcome to the Number-Guessing-Game created by REHAN KHAN.");
const randomNumber = Math.floor(Math.random() * 10);
const Number = await inquirer.prompt([
    {
        name: "yourGuessedNumber",
        type: "number",
        message: "Guess a Number (0 to 9) "
    }
]);
// Here using Conditional Statements.
if (Number.yourGuessedNumber === randomNumber) {
    console.log(`Congratulations! You have guessed the right number.`);
}
else {
    console.log(`Sorry! you are wrong. Do it again.`);
}
