import inquirer from "inquirer";
let answer = await inquirer.prompt([
    {
        name: "para",
        type: "input",
        message: "Enter a Paragraph:",
    },
]);
let { para } = answer;
let numberOfWords = para.split(" ").length;
let numberOfCharacter = para.replace(/ /g, "").length;
console.log(`
Total number of words= ${numberOfWords} words
Total number of characters= ${numberOfCharacter} characters
`);
