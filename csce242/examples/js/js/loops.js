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
    const countDiv = document.getElementById("div-count");
    const ul = document.createElement("ul");
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

    for (let i = start; i <= end; ++i) {
        const li = document.createElement("li");
        li.innerHTML = i;
        console.log(li.innerHTML);
        ul.append(li);
    }

    countDiv.append(ul);
}

document.getElementById("btn-toys").onclick = () => {
    const toyList = document.getElementById("toy-list");
    toyList.innerHTML = "";

    const toys = ["ball", "frisbee", "rc car", "the horrors", "doll"];

    for (const toy in toys) {
        const li = document.createElement("li");
        li.innerHTML = toy;
        toyList.append(li);
    }
}

document.getElementById("btn-toy-prices").onclick = () => {
    const toys = [];
    toys["ball"] = "0.48";
    toys["frisbee"] = "1.30";
    toys["rc car"] = "10.99";
    toys["the horrors"] = "0.00";
    toys["doll"] = "4.90";

    const toyDiv = document.getElementById("div-toy-prices");
    toyDiv.innerHTML = "";

    for (const toy in toys) {
        const p = document.createElement("p");
        p.innerHTML = toy;
        toyDiv.append(p);

        p.onclick = () => {
            document.getElementById("info").innerHTML = `${toy} costs $${toys[toy]}.`
        }
    }
}