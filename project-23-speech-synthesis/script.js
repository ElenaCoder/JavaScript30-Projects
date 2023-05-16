const utterance = new SpeechSynthesisUtterance();
utterance.text = document.querySelector('[name="text" ]').value;
let voices = [];
const voiceDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakBtn = document.querySelector('#speak');
const stopBtn = document.querySelector('#stop');
