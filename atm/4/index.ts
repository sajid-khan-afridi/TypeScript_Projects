import inquirer from "inquirer";

let userInfo = [
  {
    name: "Alex",
    accNum: "112233",
    balance: 20000,
    password: "112233",
  },
  {
    name: "Lee",
    accNum: "112233",
    balance: 10000,
    password: "112233",
  },
  {
    name: "David",
    accNum: "112233",
    balance: 30000,
    password: "112233",
  },
];

async function atm() {
  let login1 = await inquirer.prompt([
    {
      name: "UserName",
      type: "input",
      message: "Enter User Name?",
    },
  ]);

  let login2 = await inquirer.prompt([
    {
      name: "UserPass",
      type: "password",
      message: "Enter Password?",
    },
  ]);

  var userExit = userInfo.findIndex((obj) => obj.name == login1.UserName);
  console.log(userExit);

  let passExit;

  if (userExit != -1) {
    passExit = userInfo[userExit].password == login2.UserPass;
  }

  if (userExit != -1 && passExit == true) {
    mainMenu(userInfo[userExit], userExit);
  } else {
    console.log(`Invalid User Name or Password`);
    await atm();
  }
}
atm();
async function mainMenu(param1: any, param2: number) {
  let menu = await inquirer.prompt([
    {
      name: "optionSelected",
      type: "list",
      message: "What is Your option",
      choices: ["Balance Inquiry", "Withdrawal", "Transfer Money"],
    },
  ]);

  switch (menu.optionSelected) {
    case "Balance Inquiry":
      // console.log("Your current balance is Rs.", userInfo.balance);
      console.log(`Your Balance is ${param1["balance"]} Rupees`);
      again(param1, param2);
      break;
    case "Withdrawal":
      await withdrawal(param1, param2);
      again(param1, param2);
      break;
    case "Transfer Money":
      transferMoney(param1, param2);

    default:
      break;
  }
}

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

async function again(param1: any, param2: number) {
  let result = await inquirer.prompt({
    name: "yn",
    type: "confirm",
    message: "Do you want another transaction ",
  });
  if (result.yn) await mainMenu(param1, param2);
}
