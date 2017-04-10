const Git = require("github");

const token = process.env.GITHUB_API_KEY;
github.authenticate({
  type: "token",
  token: token
});

class GitHub {
  constructor() {}

  getStarredRepos(){
    Git.activity.getStarredReposForUser({ ... });
    return Git.activity.
  }
}



module.exports = GitHub;
