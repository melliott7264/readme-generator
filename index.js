// Include packages needed for this application
const inquirer = require('inquirer');

const generateMarkdown = require('./utils/generateMarkdown.js');

const writeFile = require('./utils/generate-readme.js');


// this section collects the user input through a series of questions
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

// This function processes the collected user input asynchronously and writes it out to a readme.md file
function init() {

    promptReadme()
    // collect array of user input data and send it to the function to build the readme.md file
    .then ((readmeDataArray) => {
        return generateMarkdown(readmeDataArray);
    })
    // take the output from the markdown function and pass it to a function to write it out to a file
    .then (pageMarkdown => {
        return writeFile(pageMarkdown);
    })
     //  process return codes from the file write and write them to the console
    .then (writeFileResponse => {
        console.log(writeFileResponse);
    })
    // process any uncaught errors and write them to the console
    .catch(err => {
        console.log(err);
    });

};

// This function call starts all the processes.
init();
