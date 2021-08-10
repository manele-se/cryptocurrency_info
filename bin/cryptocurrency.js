#!/usr/bin/env node

const program = require('commander');

program
  .version('1.0.0')
  .command('key', 'Manage API key')
  .command('check', 'check coin price info')
  .parse(process.argv)


