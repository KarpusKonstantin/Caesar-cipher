const argv = require('minimist');
const path = require('path');
const fs = require('fs');
const argvObject = argv(process.argv.slice(2));

const checkArgs = () => {

  let checkArgsReturnObj = {
    action: '',
    shift: 0,
    output: '',
    input: '',
    actionNum: 0
  };

  if (!argvObject.a && !argvObject.action) {
    process.stderr.write('-- Не задан параметр -a или --action');
    process.exit(1);
  } else {
    checkArgsReturnObj.action = argvObject.action || argvObject.a;

    if ((checkArgsReturnObj.action !== 'encode') && (checkArgsReturnObj.action !== 'decode')) {
      process.stderr.write('-- Не верно указано значение для параметра -a или --action');
      process.exit(1);
    }
  }

  if (!argvObject.s && !argvObject.shift) {
    process.stderr.write('-- Не задан параметр -s или --shift');
    process.exit(1);

  } else {
    checkArgsReturnObj.shift = argvObject.shift || argvObject.s;
    if (!Number.isInteger(checkArgsReturnObj.shift)) {
      process.stderr.write(`-- Значение параметра -s или --shift должно быть целое, положительное число, а не ${checkArgsReturnObj.shift}`);
      process.exit(1);

    }
  }

  if (!argvObject.o && !argvObject.output && !argvObject.i && !argvObject.input) {
    checkArgsReturnObj.actionNum = 1;

    return checkArgsReturnObj;
  }

  if ((argvObject.i || argvObject.input) && (!argvObject.o && !argvObject.output)) {
    const input = argvObject.i || argvObject.input;
    const inputPath = path.resolve(__dirname, input);

    if (!fs.existsSync(inputPath)) {
      process.stderr.write(`-- Не найден файл ${inputPath}`);
      process.exit(1);
    }

    checkArgsReturnObj.input = inputPath;
    checkArgsReturnObj.actionNum = 2;

    return checkArgsReturnObj;
  }

  if ((argvObject.o || argvObject.output) && (!argvObject.i && !argvObject.input)) {
    const output = argvObject.o || argvObject.output;
    const outputPath = path.resolve(__dirname, output);

    if (!fs.existsSync(outputPath)) {
      process.stderr.write(`-- Не найден файл ${outputPath}`);
      process.exit(1);
    }

    checkArgsReturnObj.output = outputPath;
    checkArgsReturnObj.actionNum = 3;

    return checkArgsReturnObj;
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

    checkArgsReturnObj.output = outputPath;
    checkArgsReturnObj.input = inputPath;
    checkArgsReturnObj.actionNum = 4;

    return checkArgsReturnObj;
  }
};

module.exports = checkArgs;



