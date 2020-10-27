const inquirer = require("inquirer");
function askUpdateEmployeeRole(){
       // connection.query("select first_name , last_name from employee ", function (err, res) {

    //     var employeeNames = [];
    //     for (var i = 0; i < res.length; i++) {
    //         var firstAndLastName = (res[i].first_name + " " + res[i].last_name);
    //         employeeNames.push(firstAndLastName);
    //     } })
     // connection.query("select title from role", function (err, res) {
    //     console.log(res);
    //     var title = [];
    //     for (var i = 0; i < res.length; i++) {
    //         var eachtitle = res[i].title;
    //         title.push(eachtitle);
    //     }  })

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
