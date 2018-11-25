module.exports = {
	ping:function(message, subcommand, config) {
		message.channel.send("pong");

	},
	echo: function(message, subcommand, config) {
		message.channel.send("echo");
	}
}