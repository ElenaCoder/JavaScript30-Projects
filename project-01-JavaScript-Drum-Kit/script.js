function keyDownHandler(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div.key[data-key="${e.keyCode}"]`);

    // for those keys, which are not supported stop running the function
    if(!audio) return;

    // rewind to the start
    audio.currentTime = 0;
    audio.play();

    key.classList.add("play");
};

function removeTransitionHandler(e){
    // skip it if it's not a transform
    if(e.propertyName !== "transform") return;
    this.classList.remove("play");
}


const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransitionHandler));
window.addEventListener('keydown', keyDownHandler);



