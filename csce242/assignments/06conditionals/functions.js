const e1 = document.getElementById("div-e1");
const e2 = document.getElementById("div-e2");

let expanded = false;

let timeInterval;

function twoDigits(n) {
    return n < 10 ? "0"+n : n;
}

function displayTime() {
    let time = new Date();
    let hours = twoDigits(time.getHours());
    let minutes = twoDigits(time.getMinutes());
    if (12 <= hours && hours <= 23) {
        hours -= 12;
        document.getElementById("time").innerHTML = `${hours}:${minutes} pm`
    } else {
        document.getElementById("time").innerHTML = `${hours == 0 ? 12 : hours}:${minutes} am`  // "00:00 am" doesn't make much sense to many people
    }
}

document.getElementById("dropdown-arrow").onclick = (event) => {
    document.getElementById("toggle-nav").classList.toggle("hide-small");

    if (expanded) {
        expanded = false;
        event.currentTarget.innerHTML = "&#9660;";
        return;
    }
    expanded = true;
    event.currentTarget.innerHTML = "&#9650;";
}

document.getElementById("exercise-1").onclick = () => {
    e1.classList.remove("hide");
    e2.classList.add("hide");
}

document.getElementById("slider").onmouseup = document.getElementById("slider").onchange = (event) => {  // updates on releasing mouse AND on changing slider with keys
    const message = document.getElementById("plant-message");
    const value = event.currentTarget.value;
    const image = document.getElementById("plant-pic");
    document.getElementById("plant-report").innerHTML = `It's been ${value} days since watering your plant.`;
    
    if (value <=2) {
        message.innerHTML = "Your plant is healthy and happy."
        image.src = "images/healthy.png";
    } else if (value <= 5) {
        message.innerHTML = "Your plant needs watering."
        image.src = "images/fine.png";
    } else if (value <= 9) {
        message.innerHTML = "Leaves are dropping and the color is changing. Please water it soon."
        image.src = "images/rough.png";
    } else {
        message.innerHTML = "You are faced with the consequences of your actions. It's dead."
        image.src = "images/dead.png";
    }
}

document.getElementById("exercise-2").onclick = () => {
    e2.classList.remove("hide");
    e1.classList.add("hide");
    displayTime();
    timeInterval = setInterval(displayTime, 60000);
}