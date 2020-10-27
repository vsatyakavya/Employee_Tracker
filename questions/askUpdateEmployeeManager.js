const inquirer = require("inquirer");
function askUpdateEmployeeManager(){
    // connection.query("select first_name , last_name from employee ", function (err, res) {

    //     var employeeNames = [];
    //     for (var i = 0; i < res.length; i++) {
    //         var firstAndLastName = (res[i].first_name + " " + res[i].last_name);
    //         employeeNames.push(firstAndLastName);
    //     } })
    



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
