const inquirer = require("inquirer");
function askUpdateEmployeeManager(){

 return   inquirer.prompt([
        {
            type: "input",
            message: "which employee's manager you want to update?",
            // choices: employeeNames,
            name: "employeeName"
        },
        {
            type: "input",
            message: "select the manager",
            // choices: managers,
            name: "manager"
        }


    ])

}

module.exports = askUpdateEmployeeManager;
