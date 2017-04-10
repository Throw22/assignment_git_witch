const GitHub = './GitHub';

class CommandRunner {
  constructor() {}

  //let user = cmd.username;

  getReposForUser(user) {
    //tell github wrapper to grab list based off user
    return [];
  }

  getStarredReposForUser(user) {}

  run(cmd) {
    let user = cmd.username;
    let subject = cmd.subject;
    let query = cmd.query;

    return new Promise((resolve, reject) => {
      if (subject === 'repos') {
        getReposForUser(user, results => {
          resolve(results);
        });
      } else if (subject === 'starred repos') {
        getStarredReposForUser(user, results => {
          resolve(results);
        });
      }
    });
  }
}

module.exports = CommandRunner;
