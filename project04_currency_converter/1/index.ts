import inquirer from "inquirer";

let currency = {
  USD: {
    USD: 1,
    PKR: 226.55,
    CAD: 1.36,
  },
  CAD: {
    CAD: 1,
    PKR: 166.96,
    USD: 1.36,
  },
  PKR: {
    PKR: 1,
    USD: 0.0044,
    CAD: 0.006,
  },
};
// console.log(currency.CAD.PKR);
let answer: {
  from: "USD" | "CAD" | "PKR";
  to: "USD" | "CAD" | "PKR";
  amount: number;
} = await inquirer.prompt([
  {
    name: "from",
    type: "list",
    choices: ["USD", "CAD", "PKR"],
    message: "Please Select Your Currency",
  },
  {
    name: "to",
    type: "list",
    choices: ["USD", "CAD", "PKR"],
    message: "Please Select the currency to Convert",
  },
  {
    name: "amount",
    type: "number",
    message: "Please Enter the amount to convert",
  },
]);
let { from, to, amount } = answer;
// console.log(answer);
if (from && to && amount) {
  var cAmount = currency[from][to] * amount;
  console.log(
    `You conversion is from ${amount} ${from} to ${to}, which is equal to ${cAmount} ${to} `
  );
} else {
  console.log("Your enter the invalid inputs");
}
// console.log(currency[from][to] * amount);
