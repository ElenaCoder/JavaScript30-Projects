const arrow = document.querySelector('.arrow');
const speed = document.querySelector('.speed-value');

navigator.geolocation.watchPosition(
    (data) => {
        // console.log(data);
        speed.textContent = data.coords.speed;
        arrow.style.transform = `rotate(${data.coords.heading}deg)`;
    },
    (err) => {
        console.error(err);
    },
);

const successCallback = (position) => {
    const latitude = position.coords.latitude.toFixed(2);
    const longitude = position.coords.longitude.toFixed(2);
    document.getElementById('latitude').textContent = latitude;
    document.getElementById('longitude').textContent = longitude;
};

const errorCallback = (error) => {
    if (error.code === 1) {
        alert('Please enable location access to use this feature');
    }
};

if (navigator.geolocation) {
    navigator.geolocation.watchPosition(successCallback, errorCallback);
} else {
    alert('Geolocation is not supported by your browser');
}
