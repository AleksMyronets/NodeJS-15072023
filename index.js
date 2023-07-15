// index.js
const argv = require('yargs').argv;
const { creatFile } = require('./files.js');

// TODO: рефакторити
function invokeAction({ action, creatFile, content }) {
  switch (action) {
    case 'creat':
      createFile(fileName, content);
      break;

    case '':
      // ... name email phone
      break;

    case '':
      // ... id
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

invokeAction(argv);