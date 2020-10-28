const inquirer = require("inquirer");

async function askDeleteRole(connection) {
    
    const res= await connection.asyncquery("select title from role") 
       
        var title = [];
        for (var i = 0; i < res.length; i++) {
            var eachtitle = res[i].title;
            title.push(eachtitle);
        }
    return inquirer.prompt([
        {
            type: "list",
            message: "Which role you want to delete?",
            choices:title,
            name: "name"
        },
    ])
}

module.exports = askDeleteRole;