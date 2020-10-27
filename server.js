var mysql = require("mysql");
const{addDepartment, addRole , addEmployee ,getAllEmployees,getAllDepartments ,getAllRoles,updateEmployeeRole} = require("./model/posts");
const askUpdateEmployeeRole = require("./questions/askUpdateEmployeeRole");

const askAddEmployee = require("./questions/askAddEmployee");
const askAddRole = require("./questions/askAddRole");
const askAddDepartment = require("./questions/askAddDepartment");
const askMainMenu = require("./questions/askMainMenu");
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
     password: "kavya",
    database: "employeeTracker1"
});

async function start(){
    const {menu} = await askMainMenu();
    if(menu === "View All Employees"){
        await viewAllEmployeeFlow();
        start();
        
    }
    else if(menu ==="Add Department"){
        await addDepartmentflow();
        start();
    }
    else if(menu ==="Add Role"){
        await addRoleflow();
        start();
    }
    else if(menu ==="Add Employee"){
        await addEmployeeflow();
        start();
    }
    else if(menu ==="View Departments"){
        await viewDepartmentsflow();
        start();
    }
    else if(menu ==="View Roles"){
        await viewRolesflow();
        start();
       
    }
    else if(menu ==="Delete Department"){
        await deleteDepartmentflow();
        start();
    }
    else if(menu ==="Delete Role"){
        await deleteRoleflow();
        start();
    }
    else if(menu ==="Delete Employee"){
        await deleteEmployeeflow();
        start();
    }
    else if(menu ==="Update Employee Roles"){
        await updateEmployeeRolesflow();
        start();
    }
    //  else if(menu ==="Update Employee Managers"){
    //     await updateEmployeeManagersflow();
    //     start();
    // }
    // else if(menu ==="View Employees By  Managers"){
    //     await viewEmployeesBymanagerflow();
    //     start();
    // }
    // else if(menu ==="Department Budget"){
    //     await departmentBudgetflow();
    //     start();
    // }
    else if(menu ==="Exit"){
        console.log("Done");
        connection.end();
    }

}


//  function getRoles(){
// connection.query("select title  from  role"),function(err,res){
//     var title =[];
//     console.log("ooooo"+res);
//     for(var i=0;i<res.length;i++){
//         var eachTitle = res[i].title;
//         title.push(eachTitle);
//     }
//     console.log(title);

// }
// return title

// }



async function viewAllEmployeeFlow() {
   const allEmployees = await getAllEmployees(connection);
   console.table(allEmployees);

}

async function addDepartmentflow(){
    const answers = await askAddDepartment();
    const results = await addDepartment(connection,answers);
    console.log(`Inserted ${results.affectedRows} entries`);
}


async function addRoleflow( ){
    const answers = await askAddRole( );
     const results = await addRole(connection,answers);
     console.log(`Inserted ${results.affectedRows} entries`);

    

}

async function addEmployeeflow ( ){ 
    // const title =  await getRoles();
 const answers = await askAddEmployee();
 const results = await addEmployee(connection,answers);

}
async function viewDepartmentsflow ( ){
    const allDepartments = await getAllDepartments(connection);
    console.table(allDepartments);
 }

async function viewRolesflow() { 
    
    const allRoles = await getAllRoles(connection);
    console.table(allRoles);

}

async function deleteDepartmentflow ( ){ }

async function deleteRoleflow ( ){ }

async function deleteEmployeeflow ( ){ }

async function updateEmployeeRolesflow ( ){

    const answers = await askUpdateEmployeeRole();
    const results = await updateEmployeeRole(connection,answers);
   

 }
// async function viewEmployeesBymanagerflow ( ){ }

// async function departmentBudgetflow ( ){ }




connection.connect(async()=>{
    // getRoles();
    start();
})