const RANDOM_QUOTE_URL_API = 'http://api.quotable.io/random';
const quoteDisplayElement = document.getElementById('quoteDisplay');
const quoteInputElement = document.getElementById('quoteInput');
const timerElement = document.getElementById('timer');
let count = 1;

quoteInputElement.addEventListener('input', () => {
    const arrayQuote = quoteDisplayElement.querySelectorAll('span');
    const arrayValue = quoteInputElement.value.split('')
    let correctSentence = true;
    if(count === 1){
        startTimer();
    }

    arrayQuote.forEach((characterSpan, index) => {
        const character = arrayValue[index];

        if(character == null){
            characterSpan.classList.remove('correct');
            characterSpan.classList.remove('incorrect');
            correctSentence = false;
        }
        else if(character === characterSpan.innerText){
            characterSpan.classList.add('correct');
            characterSpan.classList.remove('incorrect');
        }
        else {
            characterSpan.classList.remove('correct');
            characterSpan.classList.add('incorrect');
            correctSentence = false;
        }
        count++;
    })

    if(correctSentence){
        renderNewQuote();
        stopTimer();
    }
})

function getRandomQuote() {
    return fetch(RANDOM_QUOTE_URL_API)
    .then(response => response.json())
    .then(data => data.content)
}

async function renderNewQuote() {
    const quote = await getRandomQuote();
    quoteDisplayElement.innerHTML = '';
    quote.split('').forEach(character => {
        const characterSpan = document.createElement('span');
        characterSpan.innerText = character;
        quoteDisplayElement.appendChild(characterSpan);
    })

    quoteInputElement.value = null;
    console.log(quote);
}

let startTime;
let refreshIntervalId;
let totalSeconds;

function startTimer() {
    timerElement.innerText = 0;
    startTime = new Date();
    refreshIntervalId = setInterval(() => {
        timerElement.innerText = getTimerTime();
        totalSeconds = getTimerTime();
    }, 1000)
}

function getTimerTime() {
    return Math.floor((new Date() - startTime) / 1000);
}

function stopTimer() {
    clearInterval(refreshIntervalId);
    timerElement.innerText = 0;
    count = 1;
}

renderNewQuote();
