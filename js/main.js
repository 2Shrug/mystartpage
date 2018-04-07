//
//
// Random  Quote Generator
//
//
const quotes = ["Do you want to be what you are or do you want to be what continually changes what you are?@~Jordan B Peterson", "Why do dragons hoard gold? Because the things you most need is always to be found where you least want to look.@~Jordan B Peterson", "People camouflage against the herd. People aren't after happiness, they're after not hurting.@~Jordan B Peterson", "When you tell a lie often enough, you become unable to distinguish it from the truth.@~Jordan B Peterson", "Speak the truth and see what happens.@~Jordan B Peterson", "Evolution brings human beings. Human beings, through a long and painful process, bring humanity.@~Dan Simmons", "The essence of honor lay in the moment of combat between equals.@~Dan Simmons", "We are punished by our sins, not for them.@~Elbert Hubbard", "I never use a napkin on my lap at a restaurant...because I believe in myself.@~Hannibal Buress" ];
let rnum = Math.floor(Math.random() * quotes.length);
let startQuote = quotes[rnum];
let splitQuote = startQuote.split("@");
let finalQuote = splitQuote[0];
let finalAuthor = splitQuote[1];
document.getElementById('quote').innerHTML = finalQuote;
document.getElementById('author').innerHTML = finalAuthor;
