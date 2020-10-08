const fs = require('fs');
const checkArgs = require('./app/checkArgs');
const caesarCode = require('./app/ceasarCode');
const CeasarTransfrom = require('./app/transfrom');
const { pipeline } = require('stream');

const checkArgsValue = checkArgs();
const myStream = new CeasarTransfrom(checkArgsValue.action, checkArgsValue.shift);

function execute(iStream, tarns, oStream) {
  pipeline(
    iStream,
    myStream,
    oStream,
    (err) => {
      if (err) {
        console.error(`${err.code} Есть проблемы`);
        process.exit(-1);
      } else {
        console.log('Выполнено!');
      }
    }
  );

}

if (checkArgsValue.actionNum === 1) {
  const inputStream = process.stdin;
  const outputStream = process.stdout;

  execute(inputStream, myStream, outputStream);

} else if (checkArgsValue.actionNum === 2) {
  const inputStream = fs.createReadStream(checkArgsValue.input);
  const outputStream = process.stdout;

  execute(inputStream, myStream, outputStream);

} else if (checkArgsValue.actionNum === 3) {
  const inputStream = process.stdin;
  const outputStream = fs.createWriteStream(checkArgsValue.output, {flags: 'a'});

  execute(inputStream, myStream, outputStream);

} else if (checkArgsValue.actionNum === 4) {
  const inputStream = fs.createReadStream(checkArgsValue.input);
  const outputStream = fs.createWriteStream(checkArgsValue.output, {flags: 'a'});

  execute(inputStream, myStream, outputStream);
}



