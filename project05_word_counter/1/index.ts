import inquirer from "inquirer";

(async () => {
    // let condition:boolean=false;
    // console.log("checking");
    let answer=await inquirer.prompt([{
        name:"para",
        type:"input",
        message:"Please Enter Your Paragraph"
    }])
})()