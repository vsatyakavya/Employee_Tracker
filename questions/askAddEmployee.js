const inquirer = require("inquirer");
 async function askAddEmployee(connection){

    try{
        const res = await  connection.asyncquery("select title from role") 
        var title = [];
        for (var i = 0; i < res.length; i++) {
            var eachtitle = res[i].title;
            title.push(eachtitle);


         }  
        

 const managers =await connection.asyncquery("select  CONCAT(e.first_name,' ' ,e.last_name) AS manager_name from(employee e  INNER JOIN role ON e.role_id = role.id and role.title = 'Manager')");
 var managersList = [];

 for (var i = 0; i < managers.length; i++) {
    var eachmanager = managers[i].manager_name;
    managersList.push(eachmanager);

}
    managersList.push("No Manager");
    }
 catch (err){
     throw err;
 }
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
            choices:title,
            name: "title1"
        },
        {
            type: "list",
            message: "Who is the employee's manager?",
            choices:managersList,
            name: "managerName"

        }
    ])

 }

 module.exports = askAddEmployee;

