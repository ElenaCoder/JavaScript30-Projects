const speed = document.querySelector('.speed');
const bar = speed.querySelector('.speed-bar');
const video = document.querySelector('.flex');
const minSpeed = 0.4;
const maxSpeed = 4;


function calculatePlaybackRate(event) {
    // event.pageY - provides the position relative to the entire document
    // this.offsetTop - provides the distance relative to the offset parent
    // this.offsetHeight - retrieves the height of the current element in pixels

    const y = event.pageY - speed.offsetTop;
    const speedHeight = speed.offsetHeight;
    const percentage = y / speedHeight;
    const playbackRate = percentage * (maxSpeed - minSpeed) + minSpeed;

    return playbackRate;
}

function renderPlaybackRate(playbackRate) {

    const heightPercentage = (playbackRate - minSpeed) / (maxSpeed - minSpeed) * 100;
    const height = `${heightPercentage}%`;

    bar.style.height = height;
    bar.textContent = `${playbackRate.toFixed(1)}x`;
    video.playbackRate = playbackRate;
}

function handleMove(event) {
    const playbackRate = calculatePlaybackRate(event);
    renderPlaybackRate(playbackRate);
}

speed.addEventListener('mousemove', handleMove);
