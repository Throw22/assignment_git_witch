const runner = require("./runner");
const parser = require("./parser");
const formatter = require("./formatter");

class GitWitch {
  constructor() {}
  process(input) {
    return new Promise((resolve, reject) => {
      if (reject) {
        console.log("rejected");
      }
      let parsedObj = this.parser.parse();
      this.runner.run(parsedObj).then(response => {
        this.formatter.format(response);
        resolve();
      });
    });
  }
}

module.exports = GitWitch;
