const endpointURL =
    'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const citiesSortedDesc = [];
let citiesSortedAsc = [];

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');
const arrow = document.querySelector('.arrow');

fetch(endpointURL)
    .then((rawData) => rawData.json())
    .then((data) => {
        citiesSortedDesc.push(...data);
        citiesSortedAsc = citiesSortedDesc
            .slice()
            .sort((a, b) => +a.population - +b.population);
    });

function findMatches(wordToMatch, cities) {
    return cities.filter((place) => {
        const regex = new RegExp(wordToMatch, 'gi');
        return place.city.match(regex) || place.state.match(regex);
    });
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function displayMatches() {
    if(searchInput.value === '') return;

    let matchArray;
    if (arrow.classList.contains('desc')) {
        matchArray = findMatches(searchInput.value, citiesSortedDesc);
    } else if (arrow.classList.contains('asc')) {
        matchArray = findMatches(searchInput.value, citiesSortedAsc);
    }

    const regex = new RegExp(searchInput.value, 'gi');

    let html = matchArray
        .map((place) => {
            const cityName = place.city.replace(
                regex,
                `<span class='highlight'>${searchInput.value}</span>`,
            );
            const cityState = place.state.replace(
                regex,
                `<span class='highlight'>${searchInput.value}</span>`,
            );

            return `
        <li>
            <span class="name">${cityName}, ${cityState}</span>
            <span class="name">${numberWithCommas(place.population)}</span>
        </li>
        `;
        })
        .join('');

    suggestions.innerHTML = html;
}

function arrowToggleHandling() {
    const currentClassName = this.className;
    if (currentClassName.includes('desc')) {
        const newClassName = currentClassName.replace('desc', 'asc');
        this.className = newClassName;
        this.innerHTML = '&#8593;';
    } else if (currentClassName.includes('asc')) {
        const newClassName = currentClassName.replace('asc', 'desc');
        this.className = newClassName;
        this.innerHTML = '&#8595;';
    }
}

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);

arrow.addEventListener('click', arrowToggleHandling);
arrow.addEventListener('click', displayMatches);
