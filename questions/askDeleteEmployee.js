const inquirer = require("inquirer");

async function askDeleteEmployee(connection) {

    const res = await connection.asyncquery("select first_name , last_name from employee ")
      var employeeNames = [];
        for (var i = 0; i < res.length; i++) {
            var firstAndLastName = (res[i].first_name + " " + res[i].last_name);
            employeeNames.push(firstAndLastName);
        } 
    return inquirer.prompt([
        {
            type: "list",
            message: "Which employee you want to delete?",
            choices:employeeNames,
            name: "name"
        },
    ])
}

module.exports = askDeleteEmployee;