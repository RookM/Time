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
    } else if(time <= 0.03) {
        interval = 1000;
        clearInterval(i);
        i = setInterval(update, interval);
    } else if(time <= 0.1) {
        interval = 500;
        clearInterval(i);
        i = setInterval(update, interval);
    } else if(time <= 0.2) {
        interval = 250;
        clearInterval(i);
        i = setInterval(update, interval);
    } else if(time <= 0.5) {
        interval = 150;
        clearInterval(i);
        i = setInterval(update, interval);
    } else if (time <= 1) {
        interval = 100;
        clearInterval(i);
        i = setInterval(update, interval);
    } else if (time <= 2) {
        interval = 60;
        clearInterval(i);
        i = setInterval(update, interval);
    } else if (time <= 3) {
        interval = 20;
        clearInterval(i);
        i = setInterval(update, interval);
    }
}
let i = setInterval(update, interval);