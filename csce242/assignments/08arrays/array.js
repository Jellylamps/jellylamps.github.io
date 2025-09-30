const section = document.getElementById("pokemon");

const pokemon = [];
pokemon["Fomantis"] = "https://archives.bulbagarden.net/media/upload/c/cb/0753Fomantis.png";
pokemon["Pikachu"] = "https://archives.bulbagarden.net/media/upload/4/4a/0025Pikachu.png";
pokemon["Luxio"] = "https://archives.bulbagarden.net/media/upload/0/0f/0404Luxio.png";
pokemon["Vibrava"] = "https://archives.bulbagarden.net/media/upload/4/4b/0329Vibrava.png";

const evolved = [];
evolved["Fomantis"] = "https://archives.bulbagarden.net/media/upload/6/63/0754Lurantis.png";
evolved["Pikachu"] = "https://archives.bulbagarden.net/media/upload/b/b0/0026Raichu.png";
evolved["Luxio"] = "https://archives.bulbagarden.net/media/upload/f/f4/0405Luxray.png";
evolved["Vibrava"] = "https://archives.bulbagarden.net/media/upload/4/4a/0330Flygon.png";

const popup = document.getElementById("popup");

for (const poke in pokemon) {
    const div = document.createElement("div");
    const before = document.createElement("img");
    before.src = pokemon[poke];
    const label = document.createElement("label");
    label.innerHTML = `Evolve ${poke}`;
    label.classList.add("hide");
    div.append(before);
    div.append(label);
    section.append(div);

    div.onclick = () => {
        popup.innerHTML = `<span id="close">&#10006;</span>`;
        popup.classList.remove("hide");
        const after = document.createElement("img");
        after.src = evolved[poke];
        popup.append(after);
        const p = document.createElement("p");
        p.innerHTML = `${poke} evolved!`;
        popup.append(p);

        document.getElementById("close").onclick = () => {
            popup.classList.add("hide");
        };
    };
};

