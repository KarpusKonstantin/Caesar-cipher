const checkArgs = require('./app/checkArgs');

const checkArgsValue = checkArgs();

console.log(checkArgsValue);

// process.stdin.setEncoding('utf8');
//
// process.stdin.on('readable', () => {
//   let chunk = process.stdin.read();
//   if (chunk !== null) {
//     process.stdout.write(`data: ${chunk}`);
//   }
// });
//
// process.stdin.on('end', () => {
//   process.stdout.write('end');
// });

