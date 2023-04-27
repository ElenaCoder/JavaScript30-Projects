const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');
const colorButton = document.querySelector('[data-color="color"]');
const clearButton = document.querySelector('[data-clear="clear"]');
const rangeButton = document.querySelector('[data-range="line-width"]');

canvas.width = window.innerWidth * 0.9;
canvas.height = window.innerHeight * 0.7;
ctx.strokeStyle = 'rgb(0,0,0)';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 2;

isDrawing = false;
let lastX = 0;
let lastY = 0;

function draw(e) {
    //stop functionfrom running whenthey are not moused
    if (!isDrawing) return;
    console.log(e);
    ctx.beginPath();
    // start from
    ctx.moveTo(lastX, lastY);
    // go to
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];
}

function colorUpdatingHandler() {
    ctx.strokeStyle = `${this.value}`;
}

function clearAllHandler() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function lineWidthHandler() {
    ctx.lineWidth = this.value;
}

// mouse event listeners
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener('mouseup', () => (isDrawing = false));
canvas.addEventListener('mouseout', () => (isDrawing = false));


// touch event listeners
canvas.addEventListener('touchmove', (e) => {
    draw(e.touches[0]); // use the first touch point
  });
  canvas.addEventListener('touchstart', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.touches[0].clientX, e.touches[0].clientY]; // use the first touch point
  });
  canvas.addEventListener('touchend', () => isDrawing = false);


colorButton.addEventListener('input', colorUpdatingHandler);
clearButton.addEventListener('click', clearAllHandler);
rangeButton.addEventListener('input', lineWidthHandler);
