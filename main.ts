import inquirer from "inquirer";
import { left } from "inquirer/lib/utils/readline.js";

const answer = await inquirer.prompt([
    {
        message: "Enter first Number: ",
        type: "number",
        name: "firstNumber"
    },
    {
        message: "Enter second Number: ",
        type: "number",
        name: "secondNumber"
    },
    {
        message: "Select one of the operator to perform action: ",
        type: "list",
        name: "operator",
        choices: ["addition", "subtraction", "multiplication", "division", "reminder", "exponent"]
    },
]);

if(answer.operator === "addition"){
    console.log(answer.firstNumber + answer.secondNumber); 
}
else if(answer.operator === "subtraction"){
    console.log(answer.firstNumber - answer.secondNumber); 
}
else if(answer.operator === "multiplication"){
    console.log(answer.firstNumber * answer.secondNumber); 
}
else if(answer.operator === "division"){
    console.log(answer.firstNumber / answer.secondNumber); 
}
else if(answer.operator === "reminder"){
    console.log(answer.firstNumber % answer.secondNumber); 
}
else if(answer.operator === "exponent"){
    console.log(answer.firstNumber ** answer.secondNumber); 
}
else{
    console.log("Please select valid operator.");
}
