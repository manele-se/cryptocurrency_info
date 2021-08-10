//class to set, show, delete keys

const Configstore = require('configstore');
const pkg = require('../package.json');

class KeyManager {
  constructor() {
    this.config = new Configstore(pkg.name);
  }

  setKey(key) {
    this.config.set('key', key);
    return key;
  }

  getKey() {
    const key = this.config.get('key');
    if (!key) {
      throw new Error('No key found - Get an API key');
    }
    return key;
  }

  deleteKey() {
    const key = this.config.get('key');
    if (!key) {
      throw new Error('No key found');
    }
    this.config.delete('key');
    return;
  }

}

module.exports = KeyManager;