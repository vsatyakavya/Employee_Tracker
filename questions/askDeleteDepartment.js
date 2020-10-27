const inquirer = require("inquirer");

function askDeleteDepartment() {
    return inquirer.prompt([
        {
            type: "input",
            message: "Which department you want to delete?",
            name: "name"
        },
    ])
}

module.exports = askDeleteDepartment;