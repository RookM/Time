let time = 10.0;
let interval = 10;
console.log('the file loaded lmao');
const update = () => {
    time = Math.round((time - 0.01) * 100) / 100;
    if ((time * 100) % 100 == 0) {
        document.getElementById("countdownText").innerHTML = time + ".00";
    } else if ((time * 100) % 10 == 0) {
        document.getElementById("countdownText").innerHTML = time + "0";
    } else {
        document.getElementById("countdownText").innerHTML = time;
    }
    if (time <= 0) {
        clearInterval(i);
    } else {
        interval = 64 / time;
        clearInterval(i);
        i = setInterval(update, interval);
    }
}
let i = setInterval(update, interval);

if (time == 0) {

}