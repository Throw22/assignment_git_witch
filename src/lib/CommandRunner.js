const GitHub = "./GitHub";

class CommandRunner {
  constructor() {}

  run(cmd) {
    return new Promise((resolve, reject) => {
      GitHub.getReposForUser(cmd, results => {
        resolve(results);
      });
    });
  }
}

module.exports = CommandRunner;
