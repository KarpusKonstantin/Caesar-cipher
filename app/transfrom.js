const { Transform } = require('stream');
const caesarCode = require('./ceasarCode');


class CeasarTransfrom extends Transform {
  constructor(action, shift) {
    super();
    this.action = action;
    this.shift = shift;
  }

  _transform(chunk, encoding, callback) {
    try {
      const resultString = caesarCode(this.action, chunk.toString('utf-8'), this.shift);
      callback(null, resultString);
    } catch (e) {
      callback(e)
    }
  }
}

module.exports = CeasarTransfrom;
