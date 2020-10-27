const inquirer = require("inquirer");

const array = ["View All Employees", "Add Department", "Add Role", "Add Employee", "View Departments", "View Roles", "Delete Department","Delete Role","Delete Employee","Update Employee Role", "Update Employee Manager","View Employees By Manager","Department Budget","Exit"]

function askMainMenu(){
    return  inquirer.prompt([
        {

        type: "list",
        message: "What would you like to do?",
        name: "menu",
        choices: array
    }
]);
}


module.exports = askMainMenu;