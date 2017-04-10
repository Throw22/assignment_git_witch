const CommandRunner = require('../src/lib/CommandRunner');

let commandRunner;
let user;
let GitHub;

describe('commandRunner', function() {
  GitHub = {
    getReposForUser: function(user) {
      return ['item1', ['item2']];
    }
  };

  commandRunner = new CommandRunner();
  beforeEach(() => {
    user = 'griselda';
    commandRunner = {
      getReposForUser: function(user) {
        return ['first repo', 'second repo'];
      },
      getStarredRepos: function(user) {
        return ['first starred repo', 'second starred repo'];
      }
    };
  });

  describe('gets repos list', function() {
    let repoList = ['first repo', 'second repo'];

    //mock github module, spy on function that calls github module

    // xit("returns a list of the users repos", done => {
    //   //expect(commandRunner.getReposForUser(user)).toEqual(repoList);
    //   //expect(commandRunner.run().toEqual(repoList);
    //   done();
    // });
  });

  describe('gets count of repos list', function() {
    let cmd = {
      username: 'griselda',
      subject: 'repos',
      query: 'count'
    };

    let repoList = ['first repo', 'second repo'];

    it('returns a list of the users repos', done => {
      expect(commandRunner.getStarredReposForUser(user)).toEqual(repoList);
      done();
    });
  });

  describe('gets starred repos list', function() {
    let cmd = {
      username: 'griselda',
      subject: 'starred repos',
      query: 'details'
    };
    let starredRepoList = ['first starred repo', 'second starred repo'];
    //  expect(commandRunner.GitHub.getStarredRepos(user)).toEqual(starredRepoList);
  });

  describe('gets count of starred repos list', function() {
    let cmd = {
      username: 'griselda',
      subject: 'starred repos',
      query: 'count'
    };
    let starredRepoList = ['first starred repo', 'second starred repo'];
    //  expect(commandRunner.GitHub.getStarredRepos(user)).toEqual(starredRepoList);
  });
});
