const inquirer = require("inquirer");
function askUpdateEmployeeRole(){

  return   inquirer.prompt([
        {
            type: "input",
            message: "which employee role do you wanna update?",
            // choices: employeeNames,
            name: "employeeName"
        },
        {
            type: "input",
            message: "what is the new role?",
            // choices: roles,
            name: "newRole"
        }
    ])

}

module.exports = askUpdateEmployeeRole;
