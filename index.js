#! /usr/bin/env node
import inquirer from "inquirer";
const quiz = await inquirer.prompt([
    {
        name: "question_1",
        type: "list",
        message: "wahat is the correct way to check if two are not equal in typescript?",
        choices: ["a == b", "a === b", "a = b", "a! == b"]
    },
    {
        name: "question_2",
        type: "list",
        message: "which of the following charachter is commonly allowed in variables names in typescript?",
        choices: ["$", "@", "#", "&"]
    },
    {
        name: "question_3",
        type: "list",
        message: "which operator is commonly used for string concatention in typescript?",
        choices: ["+", "-", "*", "/"]
    },
    {
        name: "question_4",
        type: "list",
        message: "in typescript which symbol is commnly use to terminate a statement",
        choices: [".", ":", ";", ","]
    },
    {
        name: "question_5",
        type: "list",
        message: "which method of inquirer.js used to start the prompt interface and receive user input",
        choices: ["start()", "prompt()", "init()", "run()"]
    }
]);
let score = 0;
switch (quiz.question_1) {
    case "a! == b":
        console.log("1.corect!");
        ++score;
        break;
    default:
        console.log("1.incorrect!");
}
switch (quiz.question_2) {
    case "$":
        console.log("2.corect!");
        ++score;
        break;
    default:
        console.log("2.incorrect!");
}
switch (quiz.question_3) {
    case "+":
        console.log("3.corect!");
        ++score;
        break;
    default:
        console.log("3.incorrect!");
}
switch (quiz.question_4) {
    case ";":
        console.log("4.corect!");
        ++score;
        break;
    default:
        console.log("4.incorrect!");
}
switch (quiz.question_5) {
    case "prompt()":
        console.log("5.corect!");
        ++score;
        break;
    default:
        console.log("5.incorrect!");
}
console.log(`score:${score}`);
