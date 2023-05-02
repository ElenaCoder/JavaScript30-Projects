const player = document.querySelector('.player');
const video = player.querySelector('video.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const videoControls = player.querySelector('.player__controls');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const inputRanges = player.querySelectorAll('.player__slider');
const fullScreenButton = player.querySelector('.fullscreen');

let isFullscreen = false;
let storedControls = null;

function togglePlay() {
    video.paused ? video.play() : video.pause();
}

function updateButton() {
    const toggleIcon = this.paused ? '►' : '❚ ❚';
    toggle.textContent = toggleIcon;
}

function skip() {
    video.currentTime += parseInt(this.dataset.skip);
    video.play();
}

function handleRangeUpdate() {
    // console.log(this.name);
    // console.log(this.value);
    video[this.name] = this.value;
}

function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
    // console.log(e);
}

function toggleFullScreen() {
    if (!isFullscreen) {
        // Store the videoControls element before removing it
        storedControls = player.removeChild(videoControls);
        player.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
}

function exitFullScreen() {
    isFullscreen = false;
    // Reappend the storedControls element
    player.appendChild(storedControls);
}

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay);

skipButtons.forEach((btn) => btn.addEventListener('click', skip));

inputRanges.forEach((range) =>
    range.addEventListener('click', handleRangeUpdate),
);

let mouseDown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mouseDown && scrub(e));
progress.addEventListener('mousedown', () => (mouseDown = true));
progress.addEventListener('mouseup', () => (mouseDown = false));

fullScreenButton.addEventListener('click', toggleFullScreen);
document.addEventListener('fullscreenchange', () => {
    isFullscreen = document.fullscreenElement !== null;
    if (!isFullscreen) {
        exitFullScreen();
    }
});
