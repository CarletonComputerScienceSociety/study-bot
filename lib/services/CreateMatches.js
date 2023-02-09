const { Match, User } = require("../models");

class CreateMatchesService {
  async execute() {
    // TODO: implement this

    // fetch all users who are active
    // const users = User.find({ active: true }) (all?)

    // fetch all existing matches
    // const previousMatches = Match.find() (all?)

    // match users who have not previosuly been matched
    // matches = this.generateMatches(users, previousMatches)

    // for each pair of users, create a match record so that they are not matched again
    // matches.forEach((match) => {
    //   const newMatch = new Match({
    //     userOne: match[0],
    //     userTwo: match[1],
    //   });
    //   newMatch.save();
    // });

    return { message: "Command not implemented yet.", matches: [] };
  }

  async generateMatches(users, previousMatches) {
    // TODO: implement this

    // should return pairs of users who have not been matched before
    // should also take into account if users have similar courses
    return [];
  }
}

module.exports.CreateMatchesService = CreateMatchesService;
