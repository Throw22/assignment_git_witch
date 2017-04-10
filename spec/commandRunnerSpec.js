const CommandRunner = require("../src/lib/CommandRunner");

let commandRunner;
let mockCmd;
let processedMockCmd;
let GitHub;

describe("commandRunner", function() {
  beforeEach(() => {
    Github = {
      //Remember that this will happen async
      getReposForUser: function(cmd) {
        return mockPromise;
      }
    };

    mockCmd = {
      username: "griselda",
      subject: "repos",
      query: "details"
    };

    mockPromise = [];

    commandRunner = new CommandRunner();
  });

  it("returns a promise", done => {
    expect(GitHub.getResults).toHaveBeenCalledWith(this.command);
    done();
  });

  //it('')
});
