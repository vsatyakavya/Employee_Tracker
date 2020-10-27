const inquirer = require("inquirer");

function askDeleteDepartment() {
      // connection.query("select name from department", function (err, res) {
    //     if (err) {
    //         throw (err)
    //     }
    //     var departmentNames = [];
    //     for (var i = 0; i < res.length; i++) {
    //         var name = res[i].name;
    //         departmentNames.push(name);
    //         console.log(departmentNames);
    //     }  });

    return inquirer.prompt([
        {
            type: "input",
            message: "Which department you want to delete?",
            // choices : 
            name: "name"
        },
    ])
}

module.exports = askDeleteDepartment;