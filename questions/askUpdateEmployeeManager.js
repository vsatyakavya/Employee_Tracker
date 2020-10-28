const inquirer = require("inquirer");
async function askUpdateEmployeeManager(connection){
  
    
    const res= await connection.asyncquery("select * from employee order by id") 
     var employeeNames = [];
        for (var i = 0; i < res.length; i++) {
            var firstAndLastName = (res[i].first_name + " " + res[i].last_name);
            employeeNames.push(firstAndLastName);
        }
    const managers =await connection.asyncquery("select  CONCAT(e.first_name,' ' ,e.last_name) AS manager_name from(employee e  INNER JOIN role ON e.role_id = role.id and role.title = 'Manager')");
        var managersList = [];
       
        for (var i = 0; i < managers.length; i++) {
           var eachmanager = managers[i].manager_name;
           managersList.push(eachmanager);
       
       }
       

 return   inquirer.prompt([
        {
            type: "list",
            message: "which employee's manager you want to update?",
            choices: employeeNames,
            name: "employeeName"
        },
        {
            type: "list",
            message: "select the manager",
            choices: managersList,
            name: "manager"
        }


    ])

}

module.exports = askUpdateEmployeeManager;
