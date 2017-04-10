const GitHub = 'GitHub';

class CommandRunner {
  constructor() {}
  run(cmd) {
    cmd.results = GitHub.getResults(cmd);

    return cmd;
  }
}

module.exports = CommandRunner;
