const program = require('commander');
const check = require('../commands/check');


program
  .command('price')
  .description('check cryptocurrency price info')
  .option('--coin <type>', 'Add coin type', 'BTC, ETH, XRP, XMR')
  .option('--cur <currency>', 'Change the currency', 'USD')
  .action((cmd) => check.price(cmd));

program.parse(process.argv);