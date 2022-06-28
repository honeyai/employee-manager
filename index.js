const { prompt } = require("inquirer");
const inquirer = require("inquirer");
const db = require("./db");
const question = require("./Util/questions.js");
require("console.table");

const startup = async () => {
  console.log("started")
  const logo = require('asciiart-logo');
  console.log(logo({
    name: "Employee Manager",
    font: "Bolger",
    logoColor: "bold-blue"
  }
  ).render());
  //load main prompts using asciiart-logo
  try {
    let answers = await promptUser();
  } catch (error) {
    console.error(error.message);
  }
}

// function - main prompt for questions
const promptUser = async () => await prompt(question).then(res => {
  console.log("choice", res.userChoice);
  switch (res.userChoice) {
    case "ve":
      return viewEmployees();
    case "ae":
      return addEmployee();
    case "uer":
      return updateRole();
    case "vd":
      return viewDepartments();
    case "ad":
      return addDepartment();
    case "viewRoles":
      return viewRoles();
    case "addRole":
      return addRole();
    case "quit" :
      return exit();
    default:
      return exit();
  }
}
);
// OPTIONAL:
//      - in case of update employee's manager, call the update employee manager function
//      - in case of view employees by manager, call the view employees by manager function
//      - in case of view employees by department, call the view employees by department function
//      - in case of view utilized budget by department, call the function to view utilized budget by department
//      - in case of remove department, call the remove department function
//      - in case of remove role, call the remove role function
//      - in case of remve employee, call the remove employee function
//      - in default, call function to quit

// 1. call find all employees method on database connection
//    in .then callback, display returned data with console table method
// 2. call function to load main prompt for questions
//
async function viewEmployees() {
  try {
    console.log("called viewEmployees");
    promptUser();
  } catch (error) {
    console.error(error.message);
  }
}


// function - View all roles
// 1. call find all roles method on database connection
//    in .then callback, dispalay returned data with console table
// 2. call function to load main prompt for questons
//
async function viewRoles() {
  try {
    console.log("called viewRoles");
    promptUser();
  } catch (error) {
    console.error(error.message);
  }
}

// function - View all deparments
//  1. call find all departments method on database connnection
//      in .then call back, display returned data with console table
//  2. call function to load main prompt for questions
//
async function viewDepartments() {
  try {
    console.log("called viewDepartments");
    promptUser();
  } catch (error) {
    console.error(error.message);
  }
}

// Add a department
//  1. prompt user for the name of the department
//      in .then callback, call create department method on database connection, passing the returned data as input argument
//  2. call function to load main prompt for questions
//
async function addDepartment() {
  try {
    console.log("called addDepartment");
    promptUser();
  } catch (error) {
    console.error(error.message);
  }
}

// functon - Add a role
//  **prompt for user to enter the role, the salary, and what department the role belongs to
//  1. call find all departments method on database connection to get array of existing department records
//      in .then call back, create array of objects with names and ids from returned data with .map() method
//  2. prompt user for title, salary, and department choosing from the list of departmernts created above
//      in .then callback, call funcon to create role on database connection, passing returned data from prompt as input argument
//  3. call function to load main prompt for questions
//
async function addRole() {
  try {
    console.log("called addRole");
    promptUser();
  } catch (error) {
    console.error(error.message);
  }
}

// function - Add a new employee
//  1. prompt for first_name and last_name
//      in .then callback, store the first namd and the last name to variables,
//  2. call function to find all roles on database connection to get all existing roles
//      in .then callback, create array of role objects with id and title from returned array of role data with .map()
//  3. prompt user for the role for the employee choosing from a list (array) of role objecs
//      in .then callback, store the role id to a variable,
//  4. call function to find all employees on database connection
//      in .then callback, create array of managers with id, first name, last name from the returned data with .map()
//  5. prompt user for the manager from a list from the array of managers
//      in .then callback, create an employee object with variables for first name, last name, role id, manager id
//  6. call function to create employee on database connection, passing the employee object as input argument
//      in .then callback, call function to load main prompt for questions
async function addEmployee() {
  try {
    console.log("called addEmployee");
    promptUser();
  } catch (error) {
    console.error(error.message);
  }
}


// function - Update an employee's role
//  1. call function to find all employees on database connection
//      - in .then callback, take first name, last name, and id from the returned database data and create an array
//        of new employee objects with .map().
//      - new objects have two properties, name and value
//        name consists of first name and last name from the returned database data
//        value has id from the returned database data
//  2. prompt the list of choices from the new array of employee objects
//      - in .then callback, store employee id to a variable from the returned user choice
//  3. call function to find all roles on database connection
//      - in .then callback, create a new array of new role objects using .map on the returned database role data
//      - for the new role objects, assign title from returned database data to the name property and assign id to the value property
//  4. prompt user with the list of choices from the new array of new role objects
//      - in .then callback, assign returned user choice to a role id variable
//  5. call function to update employee role, passing employee id variable and role id variable as input arguments
//  6. call fucntion to load main prompt of questions

async function updateRole() {
  try {
    console.log("called updateRole");

    promptUser();
  } catch (error) {
    console.error(error.message);
  }
}

// function - Exit the application
function exit() {
  console.log("Goodbye!");
}
// ========================
//  OPTIONAL
// ========================

// fuction - View all employees that belong to a department

// function - View all employees that report to a specific manager

// function - Update an employee's manager

// function - View all departments and show their total utilized department budget

// function - Delete an employee

// function - Delete a department

// function - Delete a role

startup();