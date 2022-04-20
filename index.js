// TODO: Include packages needed for this application
const inquirer = require('inquirer');

const generateMarkdown = require('./utils/generateMarkdown.js');

const writeFile = require('./utils/generate-readme.js');


// TODO: Create an array of questions for user input
const promptReadme = () => {

    return inquirer.prompt([
        {
           type:    'input',
           name:    'name',
           message: 'What is the title of your project? (Required)',
           validate: nameInput => {
               if (nameInput) {
                   return true;
               } else {
                   console.log('Please enter your project title!');
                   return false;
               }
           }
        },
        {
            type:   'list',
            name:   'license',
            message: 'Choose your license. (Required)',
            choices: ['MIT', 'GNU', 'ISC', 'Apache' ],
            validate: licenseInput => {
                if (licenseInput) {
                    return true;
                } else {
                    console.log('Please choose your license!');
                    return false;
                }
            }
        },
        
    ]);
};

// TODO: Create a function to write README file
writeFile(data);

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
