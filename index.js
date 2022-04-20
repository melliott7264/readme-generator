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
            message: 'Enter your name? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your name!');
                    return false;
                }
            }
         },
        {
           type:    'input',
           name:    'title',
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
        {
            type:    'input',
            name:    'gitHubUser',
            message: 'What is your GitHub username? (Required)',
            validate: gitHubInput => {
                if (gitHubInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub username!');
                    return false;
                }
            }
         },
         {
            type:    'input',
            name:    'gitHubRepo',
            message: 'What is your GitHub repository? (Required)',
            validate: gitHubRepoInput => {
                if (gitHubRepoInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub repository!');
                    return false;
                }
            }
         },
         {
            type:    'input',
            name:    'email',
            message: 'What is your e-mail address? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your e-mail address!');
                    return false;
                }
            }
         },
         {
            type:    'input',
            name:    'description',
            message: 'Please enter a desciption of the project. (Required)',
            validate: descInput => {
                if (descInput) {
                    return true;
                } else {
                    console.log('Please enter your project description!');
                    return false;
                }
            }
         },
         {
            type:    'input',
            name:    'install',
            message: 'Please enter the installation instructions. (Required)',
            validate: installInput => {
                if (installInput) {
                    return true;
                } else {
                    console.log('Please enter your project installation instructions!');
                    return false;
                }
            }
         },
         {
            type:    'input',
            name:    'usage',
            message: 'Please enter your usage instructions. (Required)',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log('Please enter your project usage instructions!');
                    return false;
                }
            }
         },
         {
            type:    'input',
            name:    'contribute',
            message: 'Please enter your contribution guidelines. (Required)',
            validate: contribInput => {
                if (contribInput) {
                    return true;
                } else {
                    console.log('Please enter your project contribution guidelines!');
                    return false;
                }
            }
         },
         {
            type:    'input',
            name:    'testing',
            message: 'Please enter your testing instructions. (Required)',
            validate: testInput => {
                if (testInput) {
                    return true;
                } else {
                    console.log('Please enter your project testing instructions!');
                    return false;
                }
            }
         },
        
    ]);
};

const mockData = {

    name:  'Mark Elliott',
    title: 'README Generator',
    license: 'MIT',
    gitHubUser: 'melliott7264',
    gitHubRepo: 'readme-generator',
    email: 'markelliottva@gmail.com',
    description: 'This applicaton creates a readme.md file.',
    install: 'Must install npm inquirer.',
    usage: 'Run node index',
    contribute: 'Not accepting contributions at this time.',
    testing: 'Answer all the user prompts and check for a valide README.md file in ./dist at the end.'

  };

// TODO: Create a function to write README file
// writeFile(data);

// TODO: Create a function to initialize app
function init() {

    promptReadme()

    .then ((readmeDataArray) => {
        console.log(readmeDataArray);
        return generateMarkdown(readmeDataArray);
    })

       .then (pageMarkdown => {
        return writeFile(pageMarkdown);
    })

    .then (writeFileResponse => {
        console.log(writeFileResponse);
    })

    .catch(err => {
        console.log(err);
    });

    // const pageMarkdown = generateMarkdown(mockData);
    // returnCode = writeFile(pageMarkdown);

};

// Function call to initialize app
init();
