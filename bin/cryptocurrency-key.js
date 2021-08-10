//const { kMaxLength } = require('buffer');
const program = require('commander');
const key = require('../commands/key');

//set commands for key

program
  .command('set')
  .description('set API key')
  .action(key.set);

program
  .command('show')
  .description('show API key')
  .action(key.show);

program
  .command('delete')
  .description('delete API key')
  .action(key.delete);



program.parse(process.argv);