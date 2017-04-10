const { getRepos } = require("../src/lib/GitHub");
let git;
describe("the Github class return an array", function() {
  beforeEach(function() {
    git = {
      repos: {
        getForUser: function() {
          return {};
        }
      }
    };

    spyOn(git.repos, "getForUser");
  });

  it("", done => {
    let user = "throw22";
    getRepos(user);
    expect(git.repos.getForUser).toHaveBeenCalled();
    done();
  });
});
