import inquirer from "inquirer";
(async () => {
    let tasks = [
        {
            id: 1,
            name: "Task1",
            description: "Learn HTML",
        },
        {
            id: 2,
            name: "Task2",
            description: "Learn CSS",
        },
        {
            id: 3,
            name: "Task3",
            description: "Learn JavaScipt",
        },
    ];
    function displayTask() {
        tasks.forEach((item) => {
            // console.log(item.id);
            console.log(item.name);
            console.log(item.description);
            console.log("-----------------");
        });
    }
    displayTask();
    let condition = true;
    while (condition) {
        let answer = await inquirer.prompt({
            name: "option",
            type: "list",
            choices: ["Add New Task", "Delete Task"],
            message: "What action do you want to perform",
        });
        switch (answer.option) {
            case "Add New Task":
                let add = await inquirer.prompt([
                    {
                        name: "id",
                        message: "Enter the task id",
                        type: "input",
                        // validate: (input) => {
                        //   let lastIndex = tasks.length - 1;
                        //   if (input < tasks[lastIndex].id) {
                        //     return `${lastIndex + 1}`;
                        //   }
                        //   return true;
                        default: tasks.length,
                    },
                    {
                        name: "name",
                        message: "Enter the task name",
                        type: "input",
                        validate: (input) => {
                            if (input.length)
                                return true;
                        },
                    },
                    {
                        name: "description",
                        message: "Enter the task description",
                        type: "input",
                    },
                ]);
                tasks.push(add);
                displayTask();
                break;
            case "Delete Task":
                let deleteTask = await inquirer.prompt({
                    name: "task",
                    type: "input",
                    message: "Enter the Task Name to delete",
                });
                const index = tasks.findIndex((obj) => obj.name === deleteTask.task);
                tasks.splice(index, 1);
                displayTask();
                break;
        }
        // const deleteTodo = (id: number) => {
        //   const index = tasks.findIndex((obj) => obj.id === id);
        //   tasks.splice(index, 1);
        // };
        // deleteTodo(2);
        // console.log(tasks);
        // async function addTask() {}
        // async function deleteTask() {}
        // async function again() {
        let cond = await inquirer.prompt({
            name: "yesNo",
            type: "confirm",
            message: "Do you want to continue or not?",
        });
        console.log(cond.yesNo);
        if (cond.yesNo === false)
            condition = false;
    }
})();
