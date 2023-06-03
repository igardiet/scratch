require('colors');
const { inquirerMenu } = require('./helpers/inquirer');

console.clear();

const main = async () => {
  console.log('Start');
  let opt = '';

  do {
    opt = await inquirerMenu();
    console.log({ opt });
  } while (opt !== '0');
};

main();
