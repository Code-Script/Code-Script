let hour = document.getElementById('hour');
let min = document.getElementById('min');
let sec = document.getElementById('sec');

function clock() {
    let date = new Date();

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    let hourRotate = 30 * hours + minutes / 2;
    let minRotate = 6 * minutes;
    let secRotate = 6 * seconds;

    hour.style.transform = `rotate(${hourRotate}deg)`;
    min.style.transform = `rotate(${minRotate}deg)`;
    sec.style.transform = `rotate(${secRotate}deg)`;

}
setInterval(clock, 1000);