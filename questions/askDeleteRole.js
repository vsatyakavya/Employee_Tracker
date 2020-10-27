const inquirer = require("inquirer");

function askDeleteRole() {
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
            message: "Which role you want to delete?",
            name: "name"
        },
    ])
}

module.exports = askDeleteRole;