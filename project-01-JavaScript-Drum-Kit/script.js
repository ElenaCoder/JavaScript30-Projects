window.addEventListener('keydown', function(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div.key[data-key="${e.keyCode}"]`);

    // for those keys, which are not supported stop running the function
    if(!audio) return;

    // rewind to the start
    audio.currentTime = 0;
    audio.play();

    key.classList.add("play");
});

