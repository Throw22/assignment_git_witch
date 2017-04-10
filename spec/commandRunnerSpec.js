const CommandRunner = require('../src/lib/CommandRunner');

let commandRunner;
let mockCmd;
let processedMockCmd;
let GitHub;

describe('commandRunner', function() {
  beforeEach(() => {
    Github = {
      //Remember that this will happen async
      let getResults = function(cmd) {
        return processedMockCmd
      }
    };

    mockCmd = {
      username: 'griselda',
      subject: 'repos',
      query: 'details'
    };

    processedMockCmd = {
      username: 'griselda',
      subject: 'repos',
      query: 'details',
      results: 'this is a list of results?'
    };

    commandRunner = new CommandRunner();
  });

  it('returns an object', function() {
    expect(commandRunner.run(mockCmd)).toEqual(processedMockCmd);
  });

  //it('')


});
