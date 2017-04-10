const GitHub = require("../src/lib/GitHub");

describe("the Github class return an array", function() {
  it("gets starred repos", done => {
    expect(GitHub.getStarredRepos()).toEqual();
    done();
  });
});
