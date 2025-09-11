/*
const sayHello = () => {
    console.log("Hi");
}

document.getElementById("btn-click-me").onclick = sayHello;
*/

document.getElementById("btn-click-me").onclick = (event) => {
    document.getElementById("p-welcome").innerHTML = "Hi";
    event.currentTarget.classList.add("clicked");
};

document.getElementById("btn-happy").onclick = (event) => {
    document.getElementById("p-feelings").innerHTML = "Yay!";
    event.currentTarget.classList.add("happy");
    document.getElementById("btn-sad").classList.remove("sad");
};

document.getElementById("btn-sad").onclick = (event) => {
    document.getElementById("p-feelings").innerHTML = "aw man";
    event.currentTarget.classList.add("sad");
    document.getElementById("btn-happy").classList.remove("happy");
};

document.getElementById("btn-clear").onclick = (event) => {
    document.getElementById("p-feelings").innerHTML = null;
    document.getElementById("btn-sad").classList.remove("sad");
    document.getElementById("btn-happy").classList.remove("happy");
};

document.getElementById("txt-emotion").onkeyup = (event) => {
    document.getElementById("p-emotion").innerHTML = `You are feeling ${event.currentTarget.value}.`;
};