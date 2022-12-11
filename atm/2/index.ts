import inquirer from "inquirer";

let userInfo = [
  {
    name: "Alex",
    accNum: "112233",
    balance: 20000,
  },
  {
    name: "Lee",
    accNum: "112233",
    balance: 10000,
  },
  {
    name: "David",
    accNum: "112233",
    balance: 30000,
  },
];

async function withdrawal(param1: any, param2: number) {
  let ans3 = await inquirer.prompt({
    name: "amount",
    type: "number",
    message: "Please enter the amount to withdraw: ",
  });
  // Array_obj[upd_obj].name = "Harry";

  userInfo[param2].balance = userInfo[param2].balance - ans3.amount;
  console.log(`Your remaining balance is ${userInfo[param2].balance}`);
}

async function transferMoney(param1: any, param2: number) {
  let ans4 = await inquirer.prompt({
    name: "UserName2",
    type: "input",
    message: "Enter Account title to transfer the funds: ",
  });
  // ans4.name;
  let userExit2 = userInfo.findIndex((obj) => obj.name == ans4.UserName2);
  console.log(userInfo[userExit2]);
  let ans5 = await inquirer.prompt({
    name: "amount",
    type: "number",
    message: "Enter the amount to transfer",
  });
  console.log(
    `Are you sure to transfer amount of ${ans5.amount} to ${userInfo[userExit2].name}`
  );
  let ans6 = await inquirer.prompt({
    name: "confirmValue",
    type: "confirm",
    message: " ",
  });

  if (ans6.confirmValue) {
    console.log(param1);
    userInfo[param2].balance -= ans5.amount;
    userInfo[userExit2].balance += ans5.amount;
    console.log(userInfo[param2], userInfo[userExit2]);
  }
}

async function mainMenu(param1: any, param2: number) {
  let ans2 = await inquirer.prompt([
    {
      name: "option1",
      type: "list",
      message: "What is Your option",
      choices: ["Balance Inquiry", "Withdrawal", "Transfer Money"],
    },
  ]);

  switch (ans2.option1) {
    case "Balance Inquiry":
      // console.log("Your current balance is Rs.", userInfo.balance);
      console.log(`Your Balance is ${param1["balance"]} Rupees`);
      break;
    case "Withdrawal":
      withdrawal(param1, param2);

      break;
    case "Transfer Money":
      transferMoney(param1, param2);

    default:
      break;
  }
}

(async function atm() {
  let ans = await inquirer.prompt([
    {
      name: "UserName",
      type: "input",
      message: "Please Enter Your Name?",
    },
  ]);

  let userExit = userInfo.findIndex((obj) => obj.name == ans.UserName);
  console.log(userExit);
  if (userExit != -1) {
    mainMenu(userInfo[userExit], userExit);
  }
  // console.log(ans.UserName, userInfo.name);
})();
