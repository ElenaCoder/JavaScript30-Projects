const addItems = document.querySelector('.add-items');
const itemList = document.querySelector('.plates');

// MODEL of MVC design pattern
// check the local storage, if it is empty => use the empty array as a default
const items = JSON.parse(localStorage.getItem('items')) || [];

function addItem(e) {
    e.preventDefault();
    const text = this.querySelector('[name="item"]').value;
    const item = {
        text: text,
        done: false,
    };
    this.reset();
    items.push(item);

    populateList(items, itemList);
    localStorage.setItem('items', JSON.stringify(items));
}

// VIEW of MVC design pattern
function populateList(plates = [], platesList) {
    platesList.innerHTML = plates
        .map((plate, i) => {
            return `
            <li >
                <input type="checkbox" data-index=${i} id="item${i}" ${
                plate.done ? 'checked' : ''
            }>
                <label for="item${i}">${plate.text}</label>
            </li>
        `;
        })
        .join('');
}

function tuggleCheckbox(e) {
    // checks if the target element of the event e matches the specified CSS selector 'input'
    if (!e.target.matches('input')) return;
    const element = e.target;
    const index = element.dataset.index;
    items[index].done = !items[index].done;
    localStorage.setItem('items', JSON.stringify(items));
    // populateList(items, itemList);
}

addItems.addEventListener('submit', addItem);
itemList.addEventListener('click', tuggleCheckbox);

populateList(items, itemList);