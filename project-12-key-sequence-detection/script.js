const pressedArray = [];
const secretCode = 'secret';

document.addEventListener('keyup', (e) => {
    pressedArray.push(e.key);
    pressedArray.splice(
        -secretCode.length - 1,
        pressedArray.length - secretCode.length,
    );

    if (pressedArray.join('').includes(secretCode)) {
        cornify_add({ younicorns: '12,957,826,716,386' });
    }
    // console.log(pressedArray);
});
