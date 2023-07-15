const fs = require('fs/promises');
const path = require('path');
const chalk = require('chalk');
const helper = require('./helprs/dataValidator');
const checkExtension = require('./helprs/checkExtentions');

const creatFile = async (fileName, content) => {
    const file = {
        fileName,
        content
    }
    const result = dataValidator(file);
    // console.log(result.error.details[0]);
    if (result.error) {
        const test = chalk.red(`Please specify ${result.error.details[0].path} parameter`)
        console.log(test);
        return;
    }

}

module.exports = {
    creatFile,
}
