import inquirer from "inquirer";
let userInfo = {
    name: "sajid",
    accNum: "112233",
    balance: 20000,
};
async function bank() {
    let ans2 = await inquirer.prompt([{
            name: "option1",
            type: "list",
            message: "What is Your option",
            choices: ["Balance Inquiry", "Withdrawal", "Transfer Money"]
        }]);
    switch (ans2.option1) {
        case "Balance Inquiry":
            console.log("Your current balance is Rs.", userInfo.balance);
            break;
        case "Withdrawal":
            break;
        case "Transfer Money":
        default:
            break;
    }
}
(async function main() {
    let ans = await inquirer.prompt([{
            name: "UserName",
            type: "input",
            message: "Please Enter Your Name?"
        }]);
    if (ans.UserName === userInfo.name) {
        bank();
    }
    console.log(ans.UserName, userInfo.name);
})();
