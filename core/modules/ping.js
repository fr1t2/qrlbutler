/**
 * Demo Module
 * 
 * Making things easy and peasy.
 */

module.exports = {
	ping:function(message, subcommand, config) {
		return "Hello";
		message.channel.send("Vote successful");
	},
	echo: function(message, subcommand, config) {
		if(config.reference) {
			if(config.reference[subcommand]) {
				message.channel.send(config.reference[subcommand])
			} else {
				message.channel.send("That doesn't appear to be in the reference");
			}
		} else {
			message.channel.send(string);
		}
	}
}