const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const context = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');
const takePhotoBtn = document.querySelector('button.takePhoto');

function getVideo() {
    navigator.mediaDevices
        .getUserMedia({ video: true, audio: false })
        .then((localMediaStream) => {
            console.log(localMediaStream);
            // video.src = window.URL.createObjectURL(localMediaStream); //depricated
            video.srcObject = localMediaStream;
            video.play();
        })
        .catch((err) => {
            console.error('Oh no!', err);
        });
}

function paintToCanvas(filterCallback) {
    const width = video.videoWidth;
    const height = video.videoHeight;
    canvas.width = width;
    canvas.height = height;

    setInterval(() => {
        context.drawImage(video, 0, 0, width, height);

        // take the pixel out
        let pixels = context.getImageData(0, 0, width, height);

        // mess with them
        // pixels = redEffect(pixels);
        // pixels = rgbSplit(pixels);
        // pixels = greenScreen(pixels);
        // pixels = grayscale(pixels);
        pixels = filterCallback(pixels);

        // put them back
        context.putImageData(pixels, 0, 0);
    }, 16);
}

function noEffect(pixels) {
    return pixels;
}
function redEffect(pixels) {
    for (let i = 0; i < pixels.data.length; i += 4) {
        pixels.data[i + 0] = pixels.data[i + 0] + 100; // red
        pixels.data[i + 1] = pixels.data[i + 1] - 50; // green
        pixels.data[i + 2] = pixels.data[i + 2] * 0.5; // blue
    }
    return pixels;
}

function rgbSplit(pixels) {
    for (let i = 0; i < pixels.data.length; i += 4) {
        pixels.data[i - 150] = pixels.data[i + 0]; // red
        pixels.data[i + 400] = pixels.data[i + 1]; // green
        pixels.data[i - 400] = pixels.data[i + 2]; // blue
    }
    return pixels;
}

function greenScreen(pixels) {
    const levels = {};

    document.querySelectorAll('.rgb input').forEach((input) => {
        levels[input.name] = input.value;
    });

    for (i = 0; i < pixels.data.length; i = i + 4) {
        red = pixels.data[i + 0];
        green = pixels.data[i + 1];
        blue = pixels.data[i + 2];
        alpha = pixels.data[i + 3];

        if (
            red >= levels.rmin &&
            green >= levels.gmin &&
            blue >= levels.bmin &&
            red <= levels.rmax &&
            green <= levels.gmax &&
            blue <= levels.bmax
        ) {
            // take it out!
            pixels.data[i + 3] = 0;
        }
    }

    return pixels;
}

function takePhoto() {
    // played thesound
    snap.currentTime = 0;
    snap.play();

    // take the data out of the canvas
    const data = canvas.toDataURL('image/jpeg');
    const link = document.createElement('a');
    link.href = data;
    link.setAttribute('target', '_blank');
    link.setAttribute('download', 'pretty');
    // link.textContent = 'Download Image';
    link.innerHTML = `<img src='${data}' alt='Pretty Woman'/>`;
    strip.insertBefore(link, strip.firstChild);
}

getVideo();

video.addEventListener('canplay', () => paintToCanvas(noEffect));
takePhotoBtn.addEventListener('click', takePhoto);
