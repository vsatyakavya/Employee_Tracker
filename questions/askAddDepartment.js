const inquirer = require("inquirer");

function askAddDepartment() {
    return inquirer.prompt([
        {
            type: "input",
            message: "What is the new Department Name?",
            name: "name"
        },
    ])
}

module.exports = askAddDepartment;