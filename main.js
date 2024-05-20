#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let Quiz = chalk.bold.green(`******************Type Script Quiz********************
`);
console.log(Quiz);
const quiz = await inquirer.prompt([
    {
        name: 'question_1',
        type: 'list',
        message: chalk.bold.blue(' Q # 1: What is TypeScript?'),
        choices: ['a) A superset of JavaScript that adds static types and other features.', 'b)A runtime environment for JavaScript.']
    },
    {
        name: 'question_2',
        type: 'list',
        message: chalk.bold.blue(' Q # 2: Basic Data Types: What TypeScript data type would you use to store a website URL?'),
        choices: ['a) string', 'b) number', 'c) boolean', 'd) object']
    },
    {
        name: 'question_3',
        type: "list",
        message: chalk.bold.blue(' Q # 3: Functions: How can you define a simple TypeScript function that greets someone by name?'),
        choices: ['a) Use a for loop to iterate through a greeting message.', 'b)Define a function with a name parameter and return a greeting string.', 'c) TypeScript does not support functions']
    },
    {
        name: 'question_4',
        type: 'list',
        message: chalk.bold.blue('Q # 4: Conditional Statements:  In TypeScript, how can you check if a variable age is 18 or older?'),
        choices: ['a) Use a switch statement with different cases for age values.', 'b) Write an if statement comparing age to 18', 'c) TypeScript does not support conditional statements.']
    },
    {
        name: 'question_5',
        type: 'list',
        message: chalk.bold.blue(' Q # 5: Arrays:  How can you declare a TypeScript array to hold the names of three fruits?'),
        choices: ['a) Use a string variable with comma-separated names.', 'b) Declare an array with string elements for each fruit name.']
    }
]);
let score = 0;
// for Q.# 1:
switch (quiz.question_1) {
    case 'a) A superset of JavaScript that adds static types and other features.':
        console.log(chalk.green.bold("1. Correct"));
        score++;
        break;
    default:
        console.log(chalk.red.bold("1. Incorrect"));
}
// Q # 2:
switch (quiz.question_2) {
    case 'a) string':
        console.log(chalk.green.bold("2. Correct"));
        score++;
        break;
    default:
        console.log(chalk.red.bold("2. Incorrect"));
}
// Q # 3:
switch (quiz.question_3) {
    case 'b)Define a function with a name parameter and return a greeting string.':
        console.log(chalk.green.bold("3. Correct"));
        score++;
        break;
    default:
        console.log(chalk.red.bold("3. Incorrect"));
}
// Q # 4:
switch (quiz.question_4) {
    case 'b) Write an if statement comparing age to 18':
        console.log(chalk.green.bold("4. Correct"));
        score++;
        break;
    default:
        console.log(chalk.red.bold("4. Incorrect"));
}
// Q # 5:
switch (quiz.question_5) {
    case 'b) Declare an array with string elements for each fruit name.':
        console.log(chalk.green.bold("5. Correct"));
        score++;
        break;
    default:
        console.log(chalk.red.bold("5. Incorrect"));
}
console.log(chalk.bold.greenBright(` Your Score: ${score}`));
