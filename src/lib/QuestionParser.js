class QuestionParser {
  parse(question) {
    let command = {
      username: "",
      subject: "",
      query: ""
    };

    // second to last word in array is username

    command.username = this.findUser(question);
    command.subject = this.findSubject(question);
    command.query = this.findQuery(question);
    return command;
  }
  findUser(question) {
    let splitCommand = question.split(" ");
    return splitCommand[splitCommand.length - 2];
  }
  findSubject(question) {
    let subject = "repos";
    if (question.includes("starred repos")) {
      subject = "starred repos";
    }
    return subject;
  }
  findQuery(question) {
    if (question.substring(0, 3) === "how") {
      return "count";
    }
    return "details";
  }
}

module.exports = QuestionParser;
