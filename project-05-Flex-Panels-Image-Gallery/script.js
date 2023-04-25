const panels = document.querySelectorAll('.panel');
let currentOpenPanel = null;

function toggleOpen() {
    console.log(this);
    if (currentOpenPanel && currentOpenPanel !== this) {
        currentOpenPanel.classList.remove('open');
    }

    this.classList.toggle('open');
    currentOpenPanel = this;
}

function toggleActive(e) {
    // console.log(e.propertyName);
    if (e.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
    }
}

panels.forEach((panel) => panel.addEventListener('click', toggleOpen));
panels.forEach((panel) =>
    panel.addEventListener('transitionend', toggleActive),
);

// const openedPanels = document.querySelectorAll('.open');
// openedPanels.forEach(openPanel => openPanel.classList.remove('.open'));
// console.log(openedPanels);