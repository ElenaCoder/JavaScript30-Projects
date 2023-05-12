window.SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

const subtitleButton = document.querySelector('.subtitle-btn');
const clearAllButton = document.querySelector('.clear-all');
const recognition = new SpeechRecognition();
recognition.interimResult = true;
recognition.lang = 'en-US';
let isListening = false;

let p = document.createElement('p');
const words = document.querySelector('.words');
words.appendChild(p);

const secretCode = 'hello';

recognition.addEventListener('result', (e) => {
    const transcript = Array.from(e.results)
        .map((result) => result[0])
        .map((result) => result.transcript)
        .join();
    // console.log(transcript);
    p.textContent = transcript;

    if (e.results[0].isFinal && isListening) {
        p = document.createElement('p');
        words.appendChild(p);
    }
    // Check if the transcript includes the secret word'
    if (transcript.includes(`${secretCode}`)) {
        document.body.style.background = 'linear-gradient(35deg, #b8d25c 0%, #a2b13e 48%, #ebe03f 100%)';
    }
});

recognition.addEventListener('end', () => {
    if (isListening) {
        recognition.start();
    }
});

// recognition.start();

function toggleSubtitles() {
    if (subtitleButton.classList.contains('selected')) {
        recognition.stop();
        isListening = !isListening;

        subtitleButton.classList.remove('selected');
        subtitleButton.style.backgroundColor = '#fff';
        subtitleButton.style.color = 'rgb(5,5,5)';
        subtitleButton.style.boxShadow = 'none';
    } else {
        recognition.start();
        isListening = !isListening;

        subtitleButton.classList.add('selected');
        subtitleButton.style.backgroundColor = 'rgb(5,5,5)';
        subtitleButton.style.color = '#fff';
        subtitleButton.style.boxShadow = '4px 4px 5px rgba(0, 0, 0, 0.8)';
    }
}


function handleClearAll() {
    const paragraphs = words.querySelectorAll('p');
    for (let i = 1; i < paragraphs.length; i++) {
      words.removeChild(paragraphs[i]);
    }
}

subtitleButton.addEventListener('click', toggleSubtitles);
clearAllButton.addEventListener('click', handleClearAll);


