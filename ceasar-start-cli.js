const checkArgs = require('./app/checkArgs');
const caesarCode = require('./app/ceasarCode');

const checkArgsValue = checkArgs();

if (checkArgsValue.actionNum === 1) {
  process.stdin.setEncoding('utf8');

  process.stdin
    .on('data', (chunk) => {

      chunk = caesarCode(checkArgsValue.action, chunk, checkArgsValue.shift);
      process.stdout.write(`data: ${chunk}`);
  })
    .on('end', () => {
    process.stdout.write('end');
  });
}

