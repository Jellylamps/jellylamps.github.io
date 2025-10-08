setInterval(()=>{
    const current = document.querySelector("#slideshow :not(.hidden)");
    const next = current.nextElementSibling ? current.nextElementSibling : document.querySelector("#slideshow img");

    current.classList.add("hidden");
    next.classList.remove("hidden");
}, 2000);