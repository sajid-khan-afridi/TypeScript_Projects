import inquirer from "inquirer";
(async () => {
    let userLogin = await inquirer.prompt([
        {
            name: "userName",
            type: "input",
            message: "Enter your User Name: ",
            validate: (input) => {
                if (input == "") {
                    return "Enter valid Name";
                }
                return true;
            },
        },
        {
            name: "userPass",
            type: "password",
            message: "Enter 4 character pin: ",
            validate: (input) => {
                if (input.length !== 4) {
                    return "Pin should be 4 Character";
                }
                return true;
            },
        },
    ]);
    const userData = {
        userId: userLogin.userName,
        userPin: userLogin.userPass,
        userAmount: Math.floor(Math.random() * 100000 + 1),
    };
    // console.log(userData);
    let atmOption = await inquirer.prompt({
        name: "option",
        type: "list",
        choices: ["Balance Inquiry", "Cash Withdrawl", "Transfer Money", "Exit"],
        message: "Select any option ",
    });
    switch (atmOption.option) {
        case "Balance Inquiry":
            console.log(`Your Current balance is ${userData.userAmount}`);
            break;
        case "Cash Withdrawl":
            console.log(`Your Current balance is ${userData.userAmount}`);
            let withdraw = await inquirer.prompt({
                name: "amount",
                type: "number",
                message: "Enter the amount to withdraw: ",
                validate: (input) => {
                    if (input > userData.userAmount) {
                        return "Insufficient Balance";
                    }
                    return true;
                },
            });
            userData.userAmount -= withdraw.amount;
            console.log(`Your remaining Balance: ${userData.userAmount}`);
            break;
        case "Transfer Money":
            break;
        case "Exit":
            break;
        default:
            break;
    }
})();
