const inquirer = require("inquirer");

function askDeleteRole() {
    return inquirer.prompt([
        {
            type: "input",
            message: "Which role you want to delete?",
            name: "name"
        },
    ])
}

module.exports = askDeleteRole;