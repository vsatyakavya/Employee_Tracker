const inquirer = require("inquirer");

function askDeleteEmployee() {

    // connection.query("select first_name , last_name from employee ", function (err, res) {

    //     var employeeNames = [];
    //     for (var i = 0; i < res.length; i++) {
    //         var firstAndLastName = (res[i].first_name + " " + res[i].last_name);
    //         employeeNames.push(firstAndLastName);
    //     } })
    return inquirer.prompt([
        {
            type: "input",
            message: "Which employee you want to delete?",
            // choices:,
            name: "name"
        },
    ])
}

module.exports = askDeleteEmployee;