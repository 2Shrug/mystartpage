//
//
// Random  Quote Generator
//
//
const jpQuotes = {

quotes : ["Do you want to be what you are or do you want to be what continually changes what you are?", "Why do dragons hoard gold? Because the things you most need is always to be found where you least want to look.", "People camouflage against the herd. People aren't after happiness, they're after not hurting.", "When you tell a lie often enough, you become unable to distinguish it from the truth.", "Speak the truth and see what happens."],

author : "Jordan B Peterson"
}

const dsQuotes = {

quotes : ["Evolution brings human beings. Human beings, through a long and painful process, bring humanity.", "The essence of honor lay in the moment of combat between equals."],

author : "Dan Simmons"
}

let auth = [jpQuotes, dsQuotes];
let rngAuth = Math.floor(Math.random() * auth.length);


if (rngAuth === 0) {
    let rnum = Math.floor(Math.random() * jpQuotes.quotes.length );
    document.getElementById('quote').innerHTML = jpQuotes.quotes[rnum];
    document.getElementById('author').innerHTML = "~" + jpQuotes.author;
}

if (rngAuth === 1) {
    let rnum = Math.floor(Math.random() * dsQuotes.quotes.length );
    document.getElementById('quote').innerHTML = dsQuotes.quotes[rnum];
    document.getElementById('author').innerHTML = "~" + dsQuotes.author;
}
// let rnum = Math.floor(Math.random() * length);

// document.getElementById('quote').innerHTML = jpQuotes.quotes[rnum];

// document.getElementById('author').innerHTML = "~" + jpQuotes.author;

// console.log(rnum);
//
//


console.log(auth.length);
console.log(rngAuth);