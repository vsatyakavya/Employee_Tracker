const inquirer = require("inquirer");

async function askDeleteDepartment(connection) {
      const res= await connection.asyncquery("select name from department") 
       
        var departmentNames = [];
        for (var i = 0; i < res.length; i++) {
            var name = res[i].name;
            departmentNames.push(name);
        }  

    return inquirer.prompt([
        {
            type: "list",
            message: "Which department you want to delete?",
            choices : departmentNames,
            name: "name"
        },
    ])
}

module.exports = askDeleteDepartment;