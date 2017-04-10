const Git = require('github');
var gitHubPackage = new Git();
const token = '26f195b49f1cae4e67118673f7006795d144d760';
// gitHubPackage.authenticate({
//   type: 'token',
//   token: token
// });

class GitHub {
  constructor(git) {
    this.gitHubPackage = git || gitHubPackage;
  }

  getStarredRepos(user) {
    //return Git.activity.getStarredReposForUser(user);
  }

  getRepos(user) {
    //return git.repos.get({ owner: user });
    // let p = new Promise((resolve, reject) =>)
    //return git.repos.getAll({ affiliation: user });
    //return
    return gitHubPackage.repos.getForUser({ username: user });
  }

  // getRepos(user).then(function(results) {
  //   console.log(results);
  // });
}

module.exports = GitHub;
