const fs = require('fs');

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        // synchronously check for a ./dist directory and create it if it doesn't exist
        if (!fs.existsSync('./dist')) {
            fs.mkdirSync('./dist');
        }
        // write the README.md file in the ./dist directory
        fs.writeFile('./dist/README.md', fileContent, err => {
            // if there's an error, reject the Promise and send the error to the Promise's .catch() method
            if (err) {
                reject(err);
                // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
                return;
            }

            // if everything went well, resolve the Promise and send the successful data to the .then() method
            resolve({
                ok: true,
                message: "README.md file has been created in ./dist!"
            });
        });
    });
};

module.exports = writeFile;
