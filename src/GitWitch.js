class GitWitch {
  constructor(config = {}) {
    this.parser = config.parser || parser;
    this.runner = config.runner || runner;
    this.formatter = config.formatter || formatter;
  }

  process(input) {
    return new Promise((resolve, reject) => {
      let parsedInput = this.parser.parse(input);
      this.runner.run(parsedInput).then(response => {
        resolve(this.formatter.format(response));
      });
    });
  }
}

module.exports = GitWitch;
