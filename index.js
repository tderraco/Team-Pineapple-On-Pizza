//add input questions
const inquirer = require('inquirer');
const Manager = require('./lib.Manager.js');
const Intern = require('./Intern.js');
const Engineer = require('./Engineer.js');
const fs = require('fs');
const generatemarkdown = require('./dist.generatmarkdown.js');
const teamMember = [];

const promptManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'What is your name?',
            name: 'name',
            validate: value => { if (value) { return true } else { return 'Please enter your name.' } }

        },
        {
            type: 'input',
            message: 'What is your Employee number?',
            name: 'employeeNumber',
            validate: value => { if (value) { return true } else { return 'Please enter your Emplyoee number.' } }

        },
        {
            type: 'input',
            message: 'Please enater your email',
            name: 'email',
            validate: value => { if (value) { return true } else { return 'Please enter your email.' } }

        },
        {
            type: 'input',
            message: 'What is your office number?',
            name: 'officeNumber',
            validate: value => { if (value) { return true } else { return 'Please enter your office number.' } }

        },


    ])
        .then(answers => {
            console.log(answers);
            const manager = new Manager(answers.name, answers.employeeNumber, answers.employeeNumber, answers.email, answers.officeNumber)
            teamMember.push(manager);
            choiceMenu();
        })


};

const choiceMenu = () => {
    return inquirer.prompt([
        {
            input: 'list',
            message: 'Please choose an option from the following:',
            choices: ['Add engineer', 'Add intern', 'Done',]

        }
    ])

        .then(userChoice => {
            switch (userChoice.menu) {
                case "Add Engineer":
                    promptEngineer();
                    break;
                case "Add Intern":
                    promptIntern();
                    break;
                default:
                    doneWithTeam();


            }
        })
}