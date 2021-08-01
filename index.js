// Required packages
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const fileDirectory = path.resolve(__dirname, "dist");
const filePath = path.join(fileDirectory, "index.html");

// Required module exports
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const renderHTML = require("./lib/generatehtml");

// Employee array
let teamArray = [];

// Questions array for all employees
const questions = [           
    {
        type: "input",
        name: "name",
        message: "What is the name of this employee?"
    },
    {
        type: "input",
        name: "id",
        message: "What is the ID of this employee?"
    },
    {
        type: "input",
        name: "email",
        message: "What is this employee's email?"
    },
    {
        type: "list",
        name: "role",
        message: "What role does this employee have?",
        choices: ["Engineer", "Intern", "Manager"]
    }
    ]
    managerQuestions = [
        {
            type: "input",
            name: "phone",
            message: "What is the manager's office number? (Required)",
            validate: phone => {
                if (phone) { return true;
                } else {console.log("Please enter an office number!");
                return false;}
            }
        }
    ]
    engineerQuestions = [
        {
            type: "input",
            name: "github",
            message: "What is the engineer's Github Username? (Required)",
            validate: github => {
                if (github) { return true;
                } else {
                  console.log("Please enter a GitHub username!");
                  return false;}
              }
        }
    ]
    internQuestions = [

        {
            type: "input",
            name: "school",
            message: "What school is the intern from? (Required)",
            validate: school => {
                if (school) { return true;
                } else {
                  console.log("Please enter a school name!");
                  return false;
                }
              }
        }
    ]

    // Function to initialize the application
    const init = () => {
        if (fs.existsSync(filePath)) {
            inquirer.prompt({
                type: "confirm",
                message: "It looks like the index.html file in the 'dist' folder already exists. Do you want to overwrite it?",
                name: "overwrite"
            }).then(async (response) => {
                let overwrite = response.overwrite;
                if (await overwrite === true) {
                    console.log("Please enter your team information:")
                    newEmployee()
                } else if (await overwrite === false) {
                    console.log("Your index.html file in the 'dist' folder will not be overwritten. Please move the current index.html file to another folder before restarting.")
                }
            })
        } else {
            console.log("Welcome to the team profile generator. Please enter your team information below:")
            newEmployee()
        }
    };   

    // Function to create new employees
    const newEmployee = async () => {
        await inquirer.prompt(questions).then((response) => {
            let name = response.name;
            let id = response.id;
            let email = response.email;
            let role = response.role;
            let phone;
            let github;
            let school;

            if (role === "Engineer") {
            inquirer.prompt(engineerQuestions).then((response) =>{
                github = response.github;
                let employee = new Engineer(name, id, email, github);
                teamArray.push(employee);
                addEmployee(teamArray);
                });
            }
            else if (role === "Manager") {
                inquirer.prompt(managerQuestions).then((response) =>{
                        phone = response.phone;
                        let employee = new Manager(name, id, email, phone);
                        teamArray.push(employee);
                        addEmployee(teamArray);
                    });
                }
            else if (role === "Intern") {
                inquirer.prompt(internQuestions).then((response) =>{
                        school = response.school;
                        let employee = new Intern(name, id, email, school);
                        teamArray.push(employee);
                        addEmployee(teamArray);
                    });
            }

        });    
    
    };

    const addEmployee = async (array) => {
       await inquirer
        .prompt({
            type: "confirm",
            name: "addEmployee",
            message: "Would you like to add an employee? (Required)"

        }).then(async (response) => {
            var createEmployee = response.addEmployee;
            if (await createEmployee === true) {
                newEmployee();
            } 
            else if (await createEmployee === false) {
            if (!fs.existsSync(fileDirectory)) {fs.mkdirSync(fileDirectory)}
            
            fs.writeFile(filePath, renderHTML(array), (err) => {
                if (err) {return console.log(err);}
                console.log("Your index.html file has been created in the 'dist' folder!");
            });
        }
    })
};
    // Function call to initialize app
    init();