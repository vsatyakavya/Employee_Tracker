var mysql = require("mysql");
const{addDepartment, addRole , addEmployee ,getAllEmployees,getAllDepartments ,getAllRoles,updateEmployeeRole ,
     updateEmployeeManager,deleteDepartment,deleteRole,deleteEmployee} = require("./model/posts");
const askDeleteDepartment = require("./questions/askDeleteDepartment");
const askDeleteRole = require("./questions/askDeleteRole");
const askDeleteEmployee = require("./questions/askDeleteEmployee");

const askUpdateEmployeeManager = require("./questions/askUpdateEmployeeManager");
const askUpdateEmployeeRole = require("./questions/askUpdateEmployeeRole");
const askAddEmployee = require("./questions/askAddEmployee");
const askAddRole = require("./questions/askAddRole");
const askAddDepartment = require("./questions/askAddDepartment");
const askMainMenu = require("./questions/askMainMenu");
const util = require("util");
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
     password: "kavya",
    database: "employeeTracker1"

});

connection.asyncquery = util.promisify(connection.query);

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
    else if(menu ==="Update Employee Role"){
        await updateEmployeeRolesflow();
        start();
    }
     else if(menu ==="Update Employee Manager"){
        await updateEmployeeManagersflow();
        start();
    }
   
    else if(menu ==="Exit"){
        console.log("Done");
        connection.end();
    }

}






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
    const answers = await askAddRole(connection);
     const results = await addRole(connection,answers);
     console.log(`Inserted ${results.affectedRows} entries`);

    

}

async function addEmployeeflow ( ){ 
 const answers = await askAddEmployee(connection);
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

async function deleteDepartmentflow ( ){ 
    const answers = await askDeleteDepartment(connection);
   const result = await deleteDepartment(connection,answers)

}

async function deleteRoleflow ( ){ 
    const answers = await askDeleteRole(connection);
    const result = await deleteRole(connection,answers)
 
}

async function deleteEmployeeflow ( ){ 
    const answers = await askDeleteEmployee(connection);
    const result = await deleteEmployee(connection,answers)

}




async function updateEmployeeRolesflow ( ){

    const answers = await askUpdateEmployeeRole(connection);
    const results = await updateEmployeeRole(connection,answers);
   

 }

  async function updateEmployeeManagersflow(){
    const answers = await askUpdateEmployeeManager(connection);
    const results = await updateEmployeeManager(connection,answers);
 
 }




connection.connect(async()=>{
    // getRoles();
    start();
})