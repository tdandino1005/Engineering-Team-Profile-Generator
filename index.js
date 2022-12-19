const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const generateHTML = require('./utils/generateHTML.js');
const Employee = require('./utils/employee.js')
const Manager = require('./utils/manager.js');
const Engineer = require('./utils/engineer.js');
const Intern = require('./utils/intern.js');
const managerArray = [];
const engineerArray = [];
const internArray = [];

const managerQuestions = [
    {
        name: 'managerName',
        type: 'input',
        message: 'Who manages the team?',
    },
    {
        name: 'managerId',
        type: 'input',
        message: 'What is the manager\'s Employee ID #?',
    },
    {
        name: 'managerEmail',
        type: 'input',
        message: 'What is the manager\'s email address?',
    },
    {
        name: 'managerPhone',
        type: 'input',
        message: 'What is the manager\'s office telephone number?',
    }
];

const addEmployee = [
    {
        name: 'addEmployee',
        type: 'list',
        message: 'Are there any more members of the team needing added?',
        choices: ['Yes, an Engineer', 'Indeed, an Intern', 'Nope, all team members have been added!'],
    }
];

const engineerQuestions = [
    {
        name: 'engineerName',
        type: 'input',
        message: 'What is the engineer\'s name?',
    },
    {
        name: 'engineerId',
        type: 'input',
        message: 'What is the engineer\'s Employee ID #?',
    },
    {
        name: 'engineerEmail',
        type: 'input',
        message: 'What is the engineer\'s email address?',
    },
    {
        name: 'engineerGithub',
        type: 'input',
        message: 'What is the engineer\'s Github username?',
    }
];

const internQuestions = [
    {
        name: 'internName',
        type: 'input',
        message: 'What is the intern\'s name?',
    },
    {
        name: 'internId',
        type: 'input',
        message: 'What is the intern\'s Employee ID #?',
    },
    {
        name: 'internEmail',
        type: 'input',
        message: 'What is the intern\'s email address?',
    },
    {
        name: 'internSchool',
        type: 'input',
        message: 'Which institution of higher learning does/did your intern attend?',
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
            } else if (answers.addEmployee === 'Indeed, an Intern') {
                createIntern();
            } else {
                fs.writeFileSync(path.join(__dirname, '/dist/team.html'), generateHTML(managerArray, engineerArray, internArray), "utf-8");
            }
        })
}

createManager();