const GitHub = require('../src/lib/GitHub');
let gitMock;
let gitHub;
let user;

describe('GitHub', function() {
  beforeEach(function() {
    user = { username: 'throw22' };
  });

  it('returns a list of repos', done => {
    gitMock = {
      repos: {
        getForUser: function(user) {
          return Promise.resolve(1);
        }
      }
    };

    gitHub = new GitHub(gitMock);
    spyOn(gitMock.repos, 'getForUser');

    gitHub.getRepos(user);
    expect(gitMock.repos.getForUser).toHaveBeenCalled();
    done();
  });

  it('returns a list of starred repos', done => {
    gitMock = {
      activity: {
        getStarredReposForUser: function(user) {
          return Promise.resolve(1);
        }
      }
    };

    gitHub = new GitHub(gitMock);

    spyOn(gitMock.activity, 'getStarredReposForUser');

    gitHub.getStarredRepos(user);
    expect(gitMock.activity.getStarredReposForUser).toHaveBeenCalled();
    done();
  });
});
