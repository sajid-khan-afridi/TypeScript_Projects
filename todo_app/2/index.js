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
            console.log(item.id);
            console.log(item.name);
            console.log(item.description);
            console.log("-----------------");
        });
    }
    displayTask();
    let answer = await inquirer.prompt({
        name: "option",
        type: "list",
        choices: ["Add New Task", "Delete Task"],
        message: "What action do you want to perform",
    });
    switch (answer.option) {
        case "Add New Task":
            addTask();
            break;
        case "Delete Task":
            deleteTask();
            break;
    }
    // const deleteTodo = (id: number) => {
    //   const index = tasks.findIndex((obj) => obj.id === id);
    //   tasks.splice(index, 1);
    // };
    // deleteTodo(2);
    // console.log(tasks);
    async function addTask() {
        let add = await inquirer.prompt([
            {
                name: "id",
                message: "Enter the task id",
                type: "input",
            },
            {
                name: "name",
                message: "Enter the task name",
                type: "input",
            },
            {
                name: "description",
                message: "Enter the task description",
                type: "input",
            },
        ]);
        tasks.push(add);
        displayTask();
    }
    async function deleteTask() {
        let deleteTask = await inquirer.prompt({
            name: "task",
            type: "input",
            message: "Enter the Task Name to delete",
        });
        const index = tasks.findIndex((obj) => obj.name === deleteTask.task);
        tasks.splice(index, 1);
        displayTask();
    }
})();
