const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');
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

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);