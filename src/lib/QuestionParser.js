class QuestionParser {
  parse(question) {
    let command = {
      username: '',
      subject: '',
      query: ''
    };

    // second to last word in array is username
    let splitCommand = question.split(' ');
    command.username = splitCommand[];
    return command;
  }
}

module.exports = QuestionParser;
