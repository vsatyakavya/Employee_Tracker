const inquirer = require("inquirer");
 function askAddEmployee( ){
    //  console.log();
    //  connection.query("select name from department", function (err, res) {
    //     if (err) {
    //         throw (err)
    //     }
    //     var departmentNames = [];
    //     for (var i = 0; i < res.length; i++) {
    //         var name = res[i].name;
    //         departmentNames.push(name);
    //     }   })
    // connection.query("select title from role", function (err, res) {
    //     console.log(res);
    //     var title = [];
    //     for (var i = 0; i < res.length; i++) {
    //         var eachtitle = res[i].title;
    //         title.push(eachtitle);
    //     }  })

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
            choices:["Sales Lead","Salesperson","Accountant"],
            name: "title1"
        },
        {
            type: "list",
            message: "Who is the employee's manager?",
            choices:["Ashley Rodriguez","John Doe","No Manager"],
            name: "managerName"

        }
    ])
 }

 module.exports = askAddEmployee;

