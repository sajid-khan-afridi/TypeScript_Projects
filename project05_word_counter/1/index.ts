import inquirer from "inquirer";

let answer: { para: string } = await inquirer.prompt([
  {
    name: "para",
    type: "input",
    message: "Enter a Paragraph:",
  },
]);
let { para } = answer;

let numberOfWords = para.trim().split(" ").length;
let numberOfCharacter = para.replace(/ /g, "").length;

console.log(`
Total number of words= ${numberOfWords} words
Total number of characters= ${numberOfCharacter} characters
`);
