const GitHub = "./GitHub";

class CommandRunner {
  constructor() {}

  //let user = cmd.username;

  getReposForUser(user, callback) {
    //tell github wrapper to grab list based off user
    GitHub.something(user);
    return [];
  }

  getStarredReposForUser(user) {
    //tell github to grab list based off starred repos
  }

  getCountForUsersRepos(user, callback) {
    //tell github wrapper to grab list based off user
    return [];
  }

  getCountForStarredRepos(user) {
    //tell github to grab list based off starred repos
  }

  run(cmd) {
    let user = cmd.username;
    let subject = cmd.subject;
    let query = cmd.query;

    return new Promise((resolve, reject) => {
      if (subject === "repos") {
        getReposForUser(user, results => {
          resolve(results);
        });
      } else if (subject === "starred repos") {
        getStarredReposForUser(user, results => {
          resolve(results);
        });
      }
    });
  }
}

module.exports = CommandRunner;
