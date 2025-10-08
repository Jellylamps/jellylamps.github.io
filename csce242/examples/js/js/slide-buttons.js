document.getElementById("prev").onclick = (event) => {
    event.preventDefault;
    const current = document.querySelector("#slides img:not(.hidden)");
    const prev = current.previousElementSibling ? current.previousElementSibling : document.querySelector("#slides img:last-of-type");
    current.classList.add("hidden");
    prev.classList.remove("hidden");
};

document.getElementById("next").onclick = (event) => {
    event.preventDefault;const current = document.querySelector("#slides img:not(.hidden)");
    const next = current.nextElementSibling ? current.nextElementSibling : document.querySelector("#slides img");
    current.classList.add("hidden");
    next.classList.remove("hidden");
};