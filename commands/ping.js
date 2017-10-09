module.exports = {
     main: function(bot, msg) {
		var start = Date.now();
		var stop, diff;
		 msg.reply("Pong!").then(function(newMsg) {
			var stop = Date.now();
			var diff = (stop - start);
			newMsg.edit("Pong! `("+diff+"ms)`");
		});
    },
    help: 'Ping the bot'
};