const argv = require('minimist');
const path = require('path');
const fs = require('fs');
const argvObject = argv(process.argv.slice(2));

const checkArgs = () => {

  if (!argvObject.a && !argvObject.action) {
    process.stderr.write('-- Не задан параметр -a или --action');
    process.exit(1);
  }

  if (!argvObject.s && !argvObject.shift) {
    process.stderr.write('-- Не задан параметр -s или --shift');
    process.exit(1);
  }

  if (!argvObject.o && !argvObject.output && !argvObject.i && !argvObject.input) {
    return 1;
  }

  if ((argvObject.i || argvObject.input) && (!argvObject.o && !argvObject.output)) {
    const input = argvObject.i || argvObject.input;
    const inputPath = path.resolve(__dirname, input);

    if (!fs.existsSync(inputPath)) {
      process.stderr.write(`-- Не найден файл ${inputPath}`);
      process.exit(1);
    }

    return 2;
  }

  if ((argvObject.o || argvObject.output) && (!argvObject.i && !argvObject.input)) {
    const output = argvObject.o || argvObject.output;
    const outputPath = path.resolve(__dirname, output);

    if (!fs.existsSync(outputPath)) {
      process.stderr.write(`-- Не найден файл ${outputPath}`);
      process.exit(1);
    }

    return 3;
  }

  if ((argvObject.o || argvObject.output) && (!argvObject.i || !argvObject.input)) {
    const input = argvObject.i || argvObject.input;
    const inputPath = path.resolve(__dirname, input);

    const output = argvObject.o || argvObject.output;
    const outputPath = path.resolve(__dirname, output);

    if (!fs.existsSync(inputPath)) {
      process.stderr.write(`-- Не найден файл ${inputPath}`);
      process.exit(1);
    }

    if (!fs.existsSync(outputPath)) {
      process.stderr.write(`-- Не найден файл ${outputPath}`);
      process.exit(1);
    }

    return 4;
  }
};

module.exports = checkArgs;



