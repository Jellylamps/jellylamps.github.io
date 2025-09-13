document.getElementById("reveal").onclick = () => {
    document.getElementById("beatles").classList.remove("hidden");
}

document.getElementById("colors").onclick = (event) => {
    const color = document.getElementById("picker").value;
    event.currentTarget.style.color = color;
    document.getElementById("chameleon").innerHTML = `The current color is ${color}.`
}

document.getElementById("images").onclick = ()  => {
    document.getElementById("weather").src = "images/sun.png";
}