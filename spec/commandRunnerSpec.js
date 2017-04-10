const CommandRunner = require("../src/lib/CommandRunner");

describe("commandRunner", function() {
  beforeEach(() => {
    let mockCmd = {
      username: "griselda",
      subject: "repos",
      query: "details"
    };
    this.commandRunner = new CommandRunner(mockCmd);
  });

  it("returns an object", function() {
    expect(commandRunner.run()).toEqual({});
  });
});
