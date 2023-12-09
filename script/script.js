let time = 10.0;
let interval = 10;
console.log('the file loaded lmao');
const update = () => {
    time = Math.round((time - 0.01) * 100) / 100;
    let clockNum;
    if (Math.round(time * 100) % 100 == 0) {
        clockNum = "00:00:0" + time + ".00";
    } else if (Math.round(time * 100) % 10 == 0) {
        clockNum = "00:00:0" + time + "0";
    } else {
        clockNum = "00:00:0" + time;
    }
    console.log(clockNum);
    document.getElementById("countdownText").innerHTML = clockNum;
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