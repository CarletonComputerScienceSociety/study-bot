# Study Bot

Study Bot is a Discord bot that will help students find partners to study with.
Students will be able to find other students looking for people to work with,
then have a Discord channel created for them to work together.

## Setup instructions

### 1. Create the Discord bot

First, we'll need to create a Discord bot and get a token for it. For this, we
can follow the Discord.js guide [found
here](https://discordjs.guide/preparations/setting-up-a-bot-application.html#creating-your-bot).

### 2. Invite the bot to your server

Next, we'll need to invite the bot to our server. For this, we can follow the
guide on the Discord.js website [found
here](https://discordjs.guide/preparations/adding-your-bot-to-servers.html#creating-and-using-your-invite-link)

### 3. Set up the config.json file

Next, we'll need to set up the `config.json` file. In the terminal, run the
following commands:

```bash
cp example.config.json config.json
```

This created a copy of the `example.config.json` file. Now, we can open
`config.json` in VS Code and replace the fields there with our values.

```json
{
    "token": "",
    "clientId": "",
    "guildId": ""
}
```

There are three fields in the `config.json` file.

- The `token` field is the token from the Discord bot.
- The `clientId` field is the client ID from the Discord bot. This can be found
by right-clicking on the bot, and clicking "Copy ID".
- The `guildId` field is the ID of the server that the bot is in. This can be
found by right-clicking on the server, and clicking "Copy ID".

### 4. Run the bot

Now, we can run the bot. In the terminal, run the following command:

```bash
npm install
```

This will install all of the dependencies for the bot. Next, we'll need to
deploy the slash commands to the server. In the terminal, run the following:

```bash
node deploy-commands.js
```

Now, we can run the bot:

```bash
node index.js
```
