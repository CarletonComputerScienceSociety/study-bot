class UnregisterUserService {
  async execute(discordId) {
    // TODO: implement this

    // findAndUpdate the user in the database using discordId
    // update the user's active field to false (add this field to the User model as a required field)
    // if the user is not found, return { message: "User not found" }
    // if the user fails to be updated, return err._message

    return { message: "Command not implemented yet." };
  }
}

module.exports.UnregisterUserService = UnregisterUserService;
