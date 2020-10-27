const inquirer = require("inquirer");
 function askAddEmployee( ){
     console.log();
     return inquirer.prompt([
        {
            type: "input",
            message: "What is employee's first name?",
            name: "fName"
        },
        {
            type: "input",
            message: "what is employee's last name",
            name: "lName"

        },
        {
            type: "list",
            message: "what is employee's role?",
            choices:["Sales Lead","Salesperson","Accountant"],
            name: "title1"
        },
        {
            type: "list",
            message: "Who is the employee's manager?",
            choices:["Ashley Rodriguez","John Doe","No Manager"],
            name: "managerName"

        }
    ])
 }

 module.exports = askAddEmployee;

