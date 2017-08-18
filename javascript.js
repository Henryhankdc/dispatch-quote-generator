	var quotes = [
'We are a receiving company not a shipping company.',
'My rider got a flat tire.',
'My rider should be arriving any moment.',
'I don\'t understand the question.',
'My rider is stuck in an elevator.',
'Sorry, I cant hear you. You\'ll have to call back.',
'The police pulled my rider over. What exactly are we transporting?',
'Can you call back in five minutes? I gotta take a dump.',
'Are you sure my rider isn\'t there?',
'My rider should be there in 5,4,3,2...',
'Trust us. We are professionals.'

]

function newQuote(){
var randomNumber = Math.floor(Math.random() * (quotes.length));

document.getElementById('quoteDisplay').innerHTML = '<h2><span class="quotes">"</span>' + quotes[randomNumber] + '<span class="quotes">"</span></h2>';
}

