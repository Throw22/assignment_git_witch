const GitHub = require("../src/lib/GitHub");
let gitMock;
let gitHub;

describe("GitHub", function() {
  beforeEach(function() {
    gitMock = {
      repos: {
        getForUser: function(user) {
          console.log("---------This has been called----------");
          return Promise.resolve(1);
        }
      }
    };
    gitHub = new GitHub(gitMock);

    spyOn(gitMock.repos, "getForUser");
    //spying on a github object, with repos.getForUser inside
  });

  it("returns a list of repos", done => {
    let user = "throw22";
    gitHub.getRepos(user);
    expect(gitMock.repos.getForUser).toHaveBeenCalled();
    done();
  });
});
