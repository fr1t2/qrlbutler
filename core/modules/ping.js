/**
 * Demo Module
 * 
 * Making things easy and peasy.
 */

module.exports = {
	ping:function(message, subcommand, config) {
		message.channel.send("pong");
		return "Hello";
	},
	echo: function(message, subcommand, config) {
		
			message.channel.send(string);

	}
}