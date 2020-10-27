const inquirer = require("inquirer");

function askDeleteEmployee() {
    return inquirer.prompt([
        {
            type: "input",
            message: "Which employee you want to delete?",
            name: "name"
        },
    ])
}

module.exports = askDeleteEmployee;