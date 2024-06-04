import inquirer from "inquirer";
let answer = await inquirer.prompt([
    { message: "enter first number", type: "number", name: "firstNumber" },
    { message: "enter second number", type: "number", name: "secondNumber" },
    {
        message: "enter operator",
        type: "list",
        name: "operator",
        choices: ["+", "-", "*", "/"],
    },
]);
// console.log(answer);
if (answer.operator === "+") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "-") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "*") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "/") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else {
    console.log("invalid input");
}
