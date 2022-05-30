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
            message: 'Please enter your email',
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
            const manager = new Manager(answers.name, answers.employeeNumber, answers.email, answers.officeNumber)
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
const promptEngineer = () => {
    console.log('Add Engineer');

    return inquirer.prompt([
        {
            type: 'input',
            message: 'Would you like to add an Engineer?',
            name: 'name',
            validate:  value => { if (value) { return true } else { return 'Please enter your name.'}}
        },
        {
            type: 'input',
            message: 'What is your Employee number?',
            name: 'employeeNumber',
            validate: value => { if (value) { return true } else { return 'Please enter your Employee number.' } }
        },
        {
            type: 'input',
            message: 'Please enter your email',
            name: 'email',
            validate: value => { if (value) { return true } else { return 'Please enter your email.' } }
        },
        {
            type: 'input',
            message: 'Please enter your Github username',
            name: 'gitHub',
            validate: value => { if (value) { return true } else { return 'Please enter your Github usrename.' } }
        }


    ])
    .then (answers => {
        console.log(answers);
        const engineer = new Engineer(answers.name, answers.employeeNumber, answers.email, answers.gitHub)
        teamMember.push(engineer);
        choiceMenu(); 
    })    
};

const promptIntern = () => {
    console.log('Add Intern');

    return inquirer.prompt([
        {
            type: 'input',
            message: 'Would you like to add an Intern?',
            name: 'name',
            validate:  value => { if (value) { return true } else { return 'Please enter your name.'}}
        },
        {
            type: 'input',
            message: 'What is your Employee number?',
            name: 'employeeNumber',
            validate: value => { if (value) { return true } else { return 'Please enter your Employee number.' } }
        },
        {
            type: 'input',
            message: 'Please enter your email',
            name: 'email',
            validate: value => { if (value) { return true } else { return 'Please enter your email.' } }
        },
        {
            type: 'input',
            message: 'Please enter your School name',
            name: 'school',
            validate: value => { if (value) { return true } else { return 'Please enter your school name.' } }
        }
    ])
    .then (answers => {
        console.log(answers);
        const intern = new Intern(answers.name, answers.employeeNumber, answers.email, answers.school)
        teamMember.push(intern);
        choiceMenu(); 
    })    

};

const teamBuilder = () => {
    console.log('Team Completed')
};
//How do I code for the output???

