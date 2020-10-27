const inquirer = require("inquirer");

function askAddRole(){
    // connection.query("select name from department", function (err, res) {
    //     if (err) {
    //         throw (err)
    //     }
    //     var departmentNames = [];
    //     for (var i = 0; i < res.length; i++) {
    //         var name = res[i].name;
    //         departmentNames.push(name);
    //         console.log(departmentNames);
    //     }
      return  inquirer.prompt([
            {
                type: "input",
                message: "What is the new Role?",
                name: "newRole"
            }, {
                type: "input",
                message: "How much is the salary?",
                name: "salary"
            },
            {
                type: "list",
                message: "which department?",
                choices : ["sales","Engineering","Finance","Legal","HR"],
                name: "department"
            }
        ])
    //  });
    
}

module.exports = askAddRole;