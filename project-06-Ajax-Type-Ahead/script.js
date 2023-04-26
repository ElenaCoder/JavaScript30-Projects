const endpointURL =
    'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];
const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

fetch(endpointURL)
    .then((rawData) => rawData.json())
    .then((data) => cities.push(...data));

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
    // console.log(this.value);
    const matchArray = findMatches(this.value, cities);
    // console.log(matchArray);
    const regex = new RegExp(this.value, 'gi');

    let html = matchArray
        .map((place) => {
            const cityName = place.city.replace(
                regex,
                `<span class='highlight'>${this.value}</span>`,
            );
            const cityState = place.state.replace(
                regex,
                `<span class='highlight'>${this.state}</span>`,
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

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);
