const CommandRunner = require('../src/lib/CommandRunner');

let commandRunner;
let user;
let GitHub;

describe('commandRunner', function() {
  beforeEach(() => {
    GitHub = {
      getReposForUser: function(user) {
        return ['first repo', 'second repo'];
      },
      getStarredRepos: function(user) {
        return ['first starred repo', 'second starred repo'];
      }
    };

    commandRunner = new CommandRunner();
    user = 'griselda';
  });

  describe('gets repos list', function() {
    let cmd = {
      username: 'griselda',
      subject: 'repos',
      query: 'details'
    };

    let repoList = ['first repo', 'second repo'];

    it('returns a list of the users repos', done => {
      expect(commandRunner.run(cmd)).toEqual(repoList);
      //expect(commandRunner.run().toEqual(repoList);
      done();
    });
  });

  describe('gets count of repos list', function() {
    let cmd = {
      username: 'griselda',
      subject: 'repos',
      query: 'count'
    };

    let repoList = ['first repo', 'second repo'];

    it('returns a list of the users repos', done => {
      //expect(commandRunner.run().toEqual(repoList);
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
    done();
  });

  describe('gets count of starred repos list', function() {
    let cmd = {
      username: 'griselda',
      subject: 'starred repos',
      query: 'count'
    };
    let starredRepoList = ['first starred repo', 'second starred repo'];
    //  expect(commandRunner.GitHub.getStarredRepos(user)).toEqual(starredRepoList);
    done();
  });
});
