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
    document.getElementById("countdownText").innerHTML = clockNum;
    if (time <= 0) {
        clearInterval(i);
        afterTimer();
    } else {
        interval = 64 / time;
        clearInterval(i);
        i = setInterval(update, interval);
    }
}
let i = setInterval(update, interval);

const addElementMine = (typ, clas, conten) => {
    const ele = document.createElement(typ);
    if(clas !== "") {
        ele.classList.add(clas);
    }
    ele.textContent = conten;
    return ele;
}

const afterTimer = () => {
    const body = document.getElementById("body");
    body.innerHTML = "";
    const pEl1 = addElementMine("p", "", "hi");
    body.appendChild(pEl1);
}