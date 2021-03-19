const information = require('./information.js');
var cowsay = require("cowsay");

console.log(cowsay.say({
	text : information(),
	e : "oO",
	T : "U "
}));    