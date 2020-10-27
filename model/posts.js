

function addDepartment(connection , data){
    return new Promise((resolve , reject)=>{
        connection.query("INSERT INTO department SET ?",data ,
        function(err , data){
            if(err) { reject(err)}
            else {resolve(data)}
            
        }
    );
    })
        
    }


function addRole(connection, data){
         return new Promise((resolve , reject)=>{
            connection.query("select id from department where ?", { name: data.department }, function (err, res) {
                if(res){
                    var deptid = res[0].id;

                }
                else{
                    console.log("No Data returned from query")
                }
                

                connection.query("INSERT into role set?",
                    {
                        title: data.newRole,
                        salary: data.salary,
                        departmant_id: deptid
                    },function(err,res){
                        if(err) {reject(err)}
                        else {resolve(data)}
                    })
            })
    
    
         })
        
            
        }


function addEmployee(connection,data){
            var d = data.managerName.split(" ");
            return new Promise((resolve,reject)=>{
                
                connection.query("select id from role where ?", { title: data.title1 }, function (err, res) {
                    var query1 = res[0].id;
                    if (data.managerName != "No Manager") {
                        connection.query("select role_id from employee where ?", { first_name: d[0] }, function (err, res) {
                            query2 = res[0].role_id;
                            connection.query(
                                "INSERT INTO employee SET?",
                                {
                                    first_name: data.fName,
                                    last_name: data.lName,
                                    role_id: query1,
                                    manager_id: query2


                                },function(err,res){
                                    if(err) {reject(err)}
                                    else {resolve(data)}
                                }
                            )

                        });
                    }
                    else {
                        connection.query(
                            "INSERT INTO employee SET?",
                            {
                                first_name: data.fName,
                                last_name: data.lName,
                                role_id: query1,
                                manager_id: null
                            },function(err,res){
                                if(err) {reject(err)}
                                else {resolve(data)}
                            }
                        )
                    }
                });


            })
        }


function getAllEmployees(connection){
    return new Promise((resolve , reject)=>{
        connection.query(" select e.id, e.first_name, e.last_name , role.title, role.salary,  CONCAT(m.first_name,' ' ,m.last_name) AS manager_name from(employee e  INNER JOIN role ON e.role_id = role.id and role.title != 'Manager') left Join  employee m on e.manager_id = m.role_id", 
        function (err, res) {
            if(err){reject(err)}
            else{resolve(res) }
            
        });
    })
}



function getAllDepartments(connection){
    return new Promise((resolve , reject)=>{
        connection.query(" select * from department", 
        function (err, res) {
            if(err){reject(err)}
            else{resolve(res) }
            
        });
    })


}
function getAllRoles(connection){
    return new Promise((resolve , reject)=>{
        connection.query(" select title from role", 
        function (err, res) {
            if(err){reject(err)}
            else{resolve(res) }
            
        });
    })


}


function updateEmployeeRole(connection , data){
    return new Promise((resolve , reject)=>{
        connection.query("select id from role where ?", { title: data.newRole }, function (err, res) {
            var query1 = res[0].id;
            var firstName = data.employeeName.split(" ");
            
            connection.query("update employee set ? where ?",
                [{
                    role_id: query1
                },
                {
                
                    last_name : firstName[1]
                }],function(err , res){
                    if(err){reject(err)}
                    else{resolve(res) }
                    
                }
            )
        })

        
    })

}


function updateEmployeeManager(connection,data){
    return new Promise((resolve , reject)=>{
        var firstName = data.manager.split(" ");
               
                connection.query("select role_id from employee where ?", { last_name: firstName[1] },
                function (err, res) {
                    if (err) {

                        throw err;
                    }


                    var newRoleManagerId = res[0].role_id;
                    var names = data.employeeName.split(" ");

                    connection.query("update employee set ? where ?",
                        [{
                            manager_id: newRoleManagerId
                        },
                        {
                            last_name: names[1]
                        }],function(err,res){
                            if(err){reject(err)}
                         else{resolve(res) }
                    
                        }
                    );

                }
            );
    })

}


    module.exports = {
        addDepartment,
        addRole,
        addEmployee,
        getAllEmployees,
        getAllDepartments,
        getAllRoles,
        updateEmployeeRole,
        updateEmployeeManager
    }
