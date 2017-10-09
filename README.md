# Fetbot

A  modular [discord.js](https://github.com/hydrabolt/discord.js/) bot for kinksters.

[Invite it to your server here.](https://discordapp.com/oauth2/authorize?client_id=366398630577569792&scope=bot&permissions=72704)

### Making Your Own

First, edit the `auth.json` file and fill out `OWNERID`, `PREFIX`, and `TOKEN`. 

The `OWNERID` variable should be set to your Discord ID, which you can obtain by enabling developer mode (found in the "apperance" tab in settings), right clicking your name in the online list of any server, and then clicking "Copy ID".

The `PREFIX` variable is used to tell the bot what prefix your commands should use. Most bots use `!`.

The `TOKEN` variable is your Discord bot's token. You can get this from the Discord Developer Portal.

After you've filled these out, install the [discord.js](https://github.com/hydrabolt/discord.js/) using NPM. Be sure you have node.js >=6.0.0, and then run `npm install discord.js --no-optional`. 
If you need voice support, you can run `npm install discord.js node-opus` for node-opus support, or `npm install discord.js opusscript` for opusscript support. *Note these might not work refer to [discord.js documentation](https://discord.js.org/#/docs/main/stable/general/welcome)

### Adding Commands

To add commands to the bot, create new `.js` files in the `commands` directory. After writing whatever JavaScript is neccesary for your command, add the following lines to the bottom of the file:

```javascript
module.exports = {
  main: (bot, settings) => {
	//your code goes here
  },
  args: '<string>',
  help: 'sample help text',
  hide: false
}
```
The `main` function gives you access to everything in the `bot.js` file. So, for example, to send a reply, you can just add `msg.reply("reply")` inside the `main` function, and it will run whenever the command is called.

The other three lines at the bottom help to generate the help text. If you set `hide` to true, it won't show up inside the help menu, but otherwise, you should include `args` and `help`, and fill them out to help the end user.

`args` tells the user what arguments they need to provide, and `help` is just to provide generic help text.

### Running

Finally, to run the bot, a simple `node bot.js` will usually do. However, if you want to keep your bot running, I suggest you use [forever](https://github.com/foreverjs/forever). Install it with `npm install forever -g`, and then just run `forever start bot.js` inside the same folder as the bot.

### Default Functionality

Paul provides four core commands within `bot.js` out of the box:

* `help` - Generates a help message based on loaded commands
* `load <file>` - Loads a new command from `<file>`
* `unload <file>` - Unloads `<file>`, disabling the command
* `reload` - Reloads all currently loaded commands

Alongside these, there are three commands in the `commands` folder by default. They can be removed, but they serve as good utility commands.

* `ping` - Used to test if the bot is responding.
* `setgame` - Changes the bot's status (what game they are "playing").
* `spank` - Will count number of spanks, and reply each time. Use "(prefix)spank total" to show total.

### Roadmap

* Configuration file support, and an easy way to access it.
* Better logging