document.getElementById("btn-click-me").onclick = (event) => {
    document.getElementById("p-welcome").innerHTML = "Hi";
    event.currentTarget.classList.add("clicked");
}

document.getElementById("btn-happy").onclick = (event) => {
    document.getElementById("p-feelings").innerHTML = "Yay!";
    event.currentTarget.classList.add("happy");
    document.getElementById("btn-sad").classList.remove("sad");
}

document.getElementById("btn-sad").onclick = (event) => {
    document.getElementById("p-feelings").innerHTML = "aw man";
    event.currentTarget.classList.add("sad");
    document.getElementById("btn-happy").classList.remove("happy");
}

document.getElementById("btn-clear").onclick = (event) => {
    document.getElementById("p-feelings").innerHTML = null;
    document.getElementById("btn-sad").classList.remove("sad");
    document.getElementById("btn-happy").classList.remove("happy");
}

document.getElementById("txt-emotion").onkeyup = (event) => {
    document.getElementById("p-emotion").innerHTML = `You are feeling ${event.currentTarget.value}.`;
}

document.getElementById("btn-mood-ring").onclick = () => {
    const color = document.getElementById("txt-color").value.toLowerCase().trim();
    const p = document.getElementById("p-mood");
    document.getElementById("error-color").innerHTML = ""

    if(color == "") {
        document.getElementById("error-color").innerHTML = "* blank"
        p.innerHTML = ""
        return;
    } else if(color == "red") {
        p.innerHTML = "You are feeling disgruntled."
    } else if(color == "blue") {
        p.innerHTML = "You are feeling dissatisfied."
    } else if(color == "green") {
        p.innerHTML = "You are feeling discontent or disgusted."
    } else if(color == "black") {
        p.innerHTML = "Woah."
    } else {
        p.innerHTML = `${color}?`;
    }
}

document.getElementById("btn-ball").onclick = (event) => {
    const ball = document.getElementById("ball");

    if (ball.classList.contains("bounce")) {
        event.currentTarget.innerHTML = "Start"
    } else {
        event.currentTarget.innerHTML = "Stop"
    }

    ball.classList.toggle("bounce");
}

/* Counter */
let running = false;
let counter = 0;
let counterInterval;
const countP = document.getElementById("p-count");

document.getElementById("btn-count-start").onclick = (event) => {
    event.currentTarget.disabled = true;
    document.getElementById("btn-count-stop").disabled = false;
    document.getElementById("btn-count-stop").innerHTML = "Stop";
    counterInterval = setInterval(()=>{
        ++counter;
        countP.innerHTML = counter;
        running = true;
    }, 1000);
}

document.getElementById("btn-count-stop").onclick = (event) => {
    document.getElementById("btn-count-start").disabled = false;
    if(running) {
        clearInterval(counterInterval);
        event.currentTarget.innerHTML = "Reset";
        running = false;
    } else {
        counter = 0;
        countP.innerHTML = "";
        event.currentTarget.innerHTML = "Stop";
        event.currentTarget.disabled = true;
    }
}

/* Donations */
const goal = 10000;
let total = 0;
document.getElementById("span-goal").innerHTML = goal;

document.getElementById("btn-donate").onclick = () => {
    const donation = document.getElementById("txt-donation").value;
    const errorSpan = document.getElementById("donation-error");
    errorSpan.innerHTML = "";

    if(isNaN(donation) || donation <= 0) {
        errorSpan.innerHTML = "* Donate a real amount. Please. This isn't a game.";
        return;
    }

    const intDonation = parseInt(donation);
    console.log(intDonation);
    total += intDonation;
    const percentage = (total / goal) * 100;
    document.getElementById("progress").style.width = `${percentage}%`;
}