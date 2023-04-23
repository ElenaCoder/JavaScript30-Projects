const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegree = (seconds / 60) * 360 + 90;
    secondHand.style.transform = `rotate(${secondsDegree}deg)`;

    const minutes = now.getMinutes();
    const minutesDegree = (minutes / 60) * 360 + (seconds / 60) * 6 + 90;
    minuteHand.style.transform = `rotate(${minutesDegree}deg)`;

    const hours = now.getHours();
    const hoursDegree = (hours / 12) * 360 + (minutes / 60) * 30 + 90;
    hourHand.style.transform = `rotate(${hoursDegree}deg)`;

    // console.log(hours, minutes,seconds);
}

setInterval(setDate, 1000);



const audio = document.querySelector(`audio[data-sound="tink"]`);
let isPlaying = false;

function playAudio() {
    if (!isPlaying) {
      audio.currentTime = 0;
      audio.play();
      isPlaying = true;
    }
  }

const observer = new MutationObserver(mutationsList => {
  for (let mutation of mutationsList) {
    if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
      const styleValue = secondHand.style.transform;
      console.log(`Transform property changed to: ${styleValue}`);
      playAudio();
    }
  }
});

observer.observe(secondHand, { attributes: true });
document.addEventListener('click', playAudio);