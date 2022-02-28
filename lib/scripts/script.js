const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./manager.js')
const Engineer = require('./engineer.js')
const Intern = require('./intern.js')
const generatePage = require('../html-template.js');

var employees = []
var counter = 0;
var employeeAmount = 0;

const employeeNumber = () => {
    console.log(`
    =================
    Select employee amount!
    =================
    `);
 
    return inquirer.prompt([
        {
            type: 'input',
            name: 'employeeCount',
            message: 'please enter the amount of employees you wish to add',
        },
    ])
    .then((answers) => {
        employeeAmount = answers.employeeCount
    }) 
};



const promptUser = () => {
    console.log(`
    =================
    Create a New Employee Summary!
    =================
    `);
 
    return inquirer.prompt([
        
        {
            type: 'list',
            name: 'employeeType',
            message: 'please select an employee type to add',
            choices: ['manager', 'intern', 'engineer'],
            default: 'manager'
        },
        
        {
            type: 'input',
            name: 'name',
            message: 'Please enter your name', 
        },

        {
            type: 'input',
            name: 'id',
            message: 'Please enter your id number',
        },

        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email address',
        },

        {
            type: 'input',
            name: 'number',
            message: 'Please enter your phone number',
            when: (answers) => {
                if(answers.employeeType === 'manager'){
                    return true
                }
                
            }
        },

        {
            type: 'input',
            name: 'github',
            message: 'Please enter your github username',
            when: (answers) => {
                if(answers.employeeType === 'engineer'){
                    return true
                }
                
            }
        },

        {
            type: 'input',
            name: 'school',
            message: 'Please enter the name of the school you attend',
            when: (answers) => {
                if(answers.employeeType === 'intern'){
                    return true
                }
                
            }
        },

       

    ])

    .then((answers => {
        if(answers.employeeType === 'manager'){
            employees[counter] = new Manager(answers.name, answers.id, answers.email, answers.number)
            counter++;
        }
        else if(answers.employeeType === 'engineer'){
            employees[counter] = new Engineer(answers.name, answers.id, answers.email, answers.github)
            counter++;
        }
        else if(answers.employeeType === 'intern'){
            employees[counter] = new Intern(answers.name, answers.id, answers.email, answers.school)
            counter++;
        }
        console.log(employees)
        console.log(employeeAmount)
        employeeAmount--;
        if(employeeAmount > 0){
            promptUser();
        }

    }))
}
employeeNumber()
    .then(promptUser)
    .then(htmlData => {

    })