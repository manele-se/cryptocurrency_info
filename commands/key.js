
const inquirer = require('inquirer');
const colors = require('colors');
const KeyManager = require('../lib/KeyManager');
const { isRequired } = require('../utils/validation');


const key = {
  set() {
    const keyManager = new KeyManager();
    //key is get from user's input
    inquirer.prompt([
      {
        type: 'input',
        name: 'key',
        message: 'Enter your API key'.magenta,
        validate: isRequired
      }
    ]).then((input) => {
      const key = keyManager.setKey(input.key);
      if (key) {
        console.log('API key set'.green);
      }
    });
  },
  show() {
    try {
      const keyManager = new KeyManager();
      const key = keyManager.getKey();
      console.log(key.yellow);
    } catch (err) {
      console.error(err.message.red);
    }
  },
  delete() {
    try {
      const keyManager = new KeyManager();
      keyManager.deleteKey();
      console.log('Key deleted'.yellow);
      return;
    } catch (err) {
      console.error(err.message.red);
    }
  },
}

module.exports = key;