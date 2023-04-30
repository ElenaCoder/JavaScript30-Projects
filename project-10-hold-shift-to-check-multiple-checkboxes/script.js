const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
let lastChecked;
// console.log(checkboxes);

function checkHandler(e) {
    let inBetween = false;
    if (e.shiftKey && this.checked) {
        checkboxes.forEach((checkbox) => {
            console.log(checkbox);
            if (checkbox === this || checkbox === lastChecked) {
                inBetween = !inBetween;
                // console.log('Item between');
            }
            if (inBetween) {
                checkbox.checked = true;
            }
        });
    }
    lastChecked = this;
}

checkboxes.forEach((checkbox) =>
    checkbox.addEventListener('click', checkHandler),
);
