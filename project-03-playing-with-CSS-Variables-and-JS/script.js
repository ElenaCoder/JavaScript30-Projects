const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
    let suffix;
    if (this.dataset.sizing === 'px') {
        suffix = 'px';
    } else if (this.dataset.sizing === '%') {
        suffix = '%';
    } else {
        suffix = '';
    }

    // console.log(suffix);
    document.documentElement.style.setProperty(
        `--${this.name}`,
        this.value + suffix,
    );
}

inputs.forEach((input) => input.addEventListener('change', handleUpdate));
inputs.forEach((input) => input.addEventListener('mousemove', handleUpdate));
