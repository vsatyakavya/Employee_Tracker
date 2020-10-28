const inquirer = require("inquirer");

async function askAddRole(connection){
   const res = await connection.asyncquery("select name from department") 
        
        var departmentNames = [];
        for (var i = 0; i < res.length; i++) {
            var name = res[i].name;
            departmentNames.push(name);
        }  
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
                choices : departmentNames,
                name: "department"
            }
        ])
   
    
}

module.exports = askAddRole;