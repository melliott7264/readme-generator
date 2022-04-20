// This function renders the license badge for the top of the readme.md
function renderLicenseBadge(title, license) {

switch (license) {
  case  'GNU':
    return `
![${title}](https://img.shields.io/static/v1?label=license&message=GNU&color='success')
    `;
    break;

  case  'ISC':
    return `
![${title}](https://img.shields.io/static/v1?label=license&message=ISC&color='success')
    `;
    break;

  case  'Apache':
    return `
![${title}](https://img.shields.io/static/v1?label=license&message=Apache&color='success')
    `;
    break;

  case  'MIT':
    return `
![${title}](https://img.shields.io/static/v1?label=license&message=MIT&color='success')
    `;
    break;

    default:
      return ``;
  }

};


// This function renders the license link for the license section of the readme.md
function renderLicenseLink(license) {

switch (license) {
    case  'GNU':
      return `[GNU GPLv3 License](https://choosealicense.com/licenses/gpi-3.0/)`;
      break;

    case  'ISC':
      return `[ISC License](https://choosealicense.com/licenses/isc/)`;
      break;

    case  'Apache':
      return `[Apache 2.0 License](https://choosealicense.com/licenses/apache-2.0/)`;
      break;

    case  'MIT':
      return `[MIT License](https://choosealicense.com/licenses/mit/)`;
      break;

      default:
        return ``;
  }

}; 

// This function puts together the readme.md using the data passed from the user prompts
function generateMarkdown(data) {

  return `
${renderLicenseBadge(data.title, data.license)} 
![${data.title}](https://img.shields.io/github/languages/top/${data.gitHubUser}/${data.gitHubRepo})
  
# ${data.title}

## Description

${data.description}


* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)


## Installation

${data.install}


## Usage

${data.usage}


## Credits

${data.name} (https://github.com/${data.gitHubUser}) created this application.

      
## License

Copyright &copy; ${new Date().getFullYear()}  ${data.name}  under the ${renderLicenseLink(data.license)} 


## Contributing

${data.contribute}


## Tests

${data.testing}


## Questions

If you have questions about this application or the creator, you can get more information at the following GitHub links:

Creator GitHub Link:  https://github.com/${data.gitHubUser}

Application GitHub Repository:  https://github.com/${data.gitHubUser}/${data.gitHubRepo}

If you have more questions, you can e-mail ${data.name} at ${data.email}.

`;
}

module.exports = generateMarkdown;
