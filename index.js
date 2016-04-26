const chalk = require('chalk');
const countdown = require('countdown');

const until = countdown(new Date, new Date(2016, 6, 19), countdown.DAYS).toString();

console.log('\n', 'you now have', chalk.green(until), '\n');
