const inquirer = require("inquirer");
async function askUpdateEmployeeRole(connection){
       // connection.query("select first_name , last_name from employee ", function (err, res) {

    //     var employeeNames = [];
    //     for (var i = 0; i < res.length; i++) {
    //         var firstAndLastName = (res[i].first_name + " " + res[i].last_name);
    //         employeeNames.push(firstAndLastName);
    //     } })
     // const title connection.query("select title from role")
    //     var title = [];
    //     for (var i = 0; i < res.length; i++) {
    //         var eachtitle = res[i].title;
    //         title.push(eachtitle);
    //     }  
    const res = await connection.asyncquery("select first_name , last_name from employee ")
    var employeeNames = [];
      for (var i = 0; i < res.length; i++) {
          var firstAndLastName = (res[i].first_name + " " + res[i].last_name);
          employeeNames.push(firstAndLastName);
      } 


    const alltitles = await  connection.asyncquery("select title from role") 
    var title = [];
    for (var i = 0; i < alltitles.length; i++) {
        var eachtitle = alltitles[i].title;
        title.push(eachtitle);
    }

  return   inquirer.prompt([
        {
            type: "list",
            message: "which employee role do you wanna update?",
            choices: employeeNames,
            name: "employeeName"
        },
        {
            type: "list",
            message: "what is the new role?",
            choices: title,
            name: "newRole"
        }
    ])

}

module.exports = askUpdateEmployeeRole;
