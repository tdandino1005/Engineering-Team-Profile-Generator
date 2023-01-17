// node modules
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');

//generate HTML link to page
const generateHTML = require('./src/generateHTML.js');

// team profiles
const Employee = require('./lib/employee.js');
const Manager = require('./lib/manager.js');
const Engineer = require('./lib/engineer.js');
const Intern = require('./lib/intern.js');


const managerArray = [];
const engineerArray = [];
const internArray = [];

const addManager = () => {
    return inquirer.prompt([
        {

        }
    ])
}
const managerQuestions = [
    {
        name: 'managerName',
        type: 'input',
        message: 'Who is the current manager?',
    },
    {
        name: 'managerId',
        type: 'input',
        message: 'What is the managers Employee ID #?',
    },
    {
        name: 'managerEmail',
        type: 'input',
        message: 'Please provide managers email address?',
    },
    {
        name: 'managerPhone',
        type: 'input',
        message: 'What is the managers office phone number?',
    }
];

const addEmployee = [
    {
        name: 'addEmployee',
        type: 'list',
        message: 'Add another team member?',
        choices: ['Yes, an Engineer', 'Yes, an Intern', 'No, all team members have been added'],
    }
];

const engineerQuestions = [
    {
        name: 'engineerName',
        type: 'input',
        message: 'Please provide name of engineer.',
    },
    {
        name: 'engineerId',
        type: 'input',
        message: 'What is the engineers Employee ID #?',
    },
    {
        name: 'engineerEmail',
        type: 'input',
        message: 'What is the engineers email address?',
    },
    {
        name: 'engineerGithub',
        type: 'input',
        message: 'What is the engineers Github username?',
    }
];

const internQuestions = [
    {
        name: 'internName',
        type: 'input',
        message: 'Please provide the name of the intern?',
    },
    {
        name: 'internId',
        type: 'input',
        message: 'What is the interns Employee ID #?',
    },
    {
        name: 'internEmail',
        type: 'input',
        message: 'What is the interns email address?',
    },
    {
        name: 'internSchool',
        type: 'input',
        message: 'Which school did your intern attend?',
    }
];

function createManager() {
    inquirer.prompt(managerQuestions)
        .then(answers => {
            const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerPhone)
            managerArray.push(manager);
            createTeam();
        })
}

function createEngineer() {
    inquirer.prompt(engineerQuestions)
        .then(answers => {
            const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub)
            engineerArray.push(engineer);
            createTeam();
        })
}

function createIntern() {
    inquirer.prompt(internQuestions)
        .then(answers => {
            const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool)
            internArray.push(intern);
            createTeam();
        })
}


function createTeam() {
    inquirer.prompt(addEmployee)
        .then(answers => {
    if (answers.addEmployee === 'Yes, an Engineer') {
        createEngineer();
        } else if (answers.addEmployee === 'Yes, an Intern') {
            createIntern();
            } else {
fs.writeFileSync(path.join(__dirname, '/dist/team.html'), generateHTML(managerArray, engineerArray, internArray), "utf-8");
            }
        })
}

createManager();