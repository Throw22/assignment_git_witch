const Git = require("github");
var gitHubPackage = new Git();

class GitHub {
  constructor(git) {
    this.name = "formattednk";
    this.gitHubPackage = git || gitHubPackage;
  }

  getStarredRepos(user) {
    //return Git.activity.getStarredReposForUser(user);
  }

  getRepos(user) {
    return this.gitHubPackage.repos.getForUser({ username: user });
  }
}

module.exports = GitHub;
