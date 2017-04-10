const Git = require('github');
var gitHubPackage = new Git();

class GitHub {
  constructor(git) {
    this.gitHubPackage = git || gitHubPackage;
  }

  getStarredRepos(user) {
    return this.gitHubPackage.activity.getStarredReposForUser({
      username: user
    });
  }

  getRepos(user) {
    return this.gitHubPackage.repos.getForUser({ username: user });
  }
}

module.exports = GitHub;
