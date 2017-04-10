const Git = require('github');
var git = new Git();

//const token = process.env.GITHUB_API_KEY;
const token = '26f195b49f1cae4e67118673f7006795d144d760';
git.authenticate({
  type: 'token',
  token: token
});

let user = 'throw22';

// function getStarredRepos(user) {
//   return Git.activity.getStarredReposForUser(user);
// }

function getRepos(user) {
  //return git.repos.get({ owner: user });
  // let p = new Promise((resolve, reject) =>)
  //return git.repos.getAll({ affiliation: user });
  //return
  return git.repos.getForUser({ username: user });
}

getRepos(user).then(function(results) {
  console.log(results);
});

//console.log(getRepos(user));

module.exports = { getRepos };
