//select all the DOM items needed


const quoteTxt = document.querySelector('.quote');
const authorName = document.querySelector(".name");
quoteBtn = document.querySelector('button');
soundBtn = document.querySelector('.sound');
copyBtn = document.querySelector('.copy');
tweetBtn = document.querySelector('.twitter');


//add all event listeners

quoteBtn.addEventListener("click", randomQuote);
soundBtn.addEventListener("click", textSpeech);
copyBtn.addEventListener("click", copyText);
tweetBtn.addEventListener("click", tweetText);

//random quote function
function randomQuote() {
    quoteBtn.innerText = "Loading Quote...";
    quoteBtn.classList = ('loading')
    //to fetch random quotes/data from API and parsing it into Javascript Object
    fetch("https://api.quotable.io/random").then(res => res.json()).then(result => {

        quoteTxt.innerText = result.content;
        authorName.innerText = result.author;
        quoteBtn.innerText = "New Quote";
        quoteBtn.classList.remove('loading')

    });

}




function textSpeech() {
    let speech = new SpeechSynthesisUtterance(`${quoteTxt.innerText} by ${authorName.innerText}`);
    speechSynthesis.speak(speech);
}

function copyText() {
    navigator.clipboard.writeText(quoteTxt.innerText);

}

function tweetText() {
    let tweetUrl = `https://twitter.com/intent/tweet?url=${quoteTxt.innerText}`;
    window.open(tweetUrl, "_blank")

}