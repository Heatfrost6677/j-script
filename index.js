const Quote = require('inspirational-quotes');
var cowsay = require("cowsay");

console.log(cowsay.say({
    text : Quote.getRandomQuote(),
    e : "$$",
    T : "V "
}));

// or cowsay.think()