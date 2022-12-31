import inquirer from "inquirer";
let answer = await inquirer.prompt([
    {
        name: "para",
        type: "input",
        message: "Please Enter Your Paragraph",
    },
]);
let { para } = answer;
let numberOfWords = para.split(" ").length;
console.log(numberOfWords);
