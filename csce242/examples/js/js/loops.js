document.getElementById("btn-display").onclick = () => {
    const displaySection = document.getElementById("loop-result");
    const ul = document.createElement("ul");
    displaySection.append(ul);


    for (let i = 1; i < 11; ++i) {
        const li = document.createElement("li");
        li.innerHTML = `iterations: ${i}`;
        ul.append(li);
    }
}

document.getElementById("btn-count").onclick = () => {
    const error = document.getElementById("error-number");
    error.innerHTML = "";

    const start = parseInt(document.getElementById("text-start").value);
    const end = parseInt(document.getElementById("text-end").value);

    const result = document.getElementById("div-count");
    result.innerHTML = "";

    if (start > end) {
        error.innerHTML = "* The start must be smaller than the end";
        return;
    }


}