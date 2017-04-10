const runner = require('./lib/runner');
const parser = require('./lib/parser');
const formatter = require('./lib/formatter');

class GitWitch {
  constructor(config = {}) {
    this.parser = config.parser || parser;
    this.runner = config.runner || runner;
    this.formatter = config.formatter || formatter;
  }

  process(input) {
    return new Promise((resolve, reject) => {
      let parsedObj = this.parser.parse(input);

      this.runner.run(parsedObj).then(response => {
        resolve(this.formatter.format(response));
      });
    });
  }
}

module.exports = GitWitch;
