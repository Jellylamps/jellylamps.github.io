const gallery = document.getElementById("gallery");
const popup = document.getElementById("popup");

class Illustration {
    constructor(title, file, artist, framed) {
        this.title = title;
        this.file = file;
        this.artist = artist;
        this.framed = framed;
    };

    popup() {
        console.log("activated");
        popup.innerHTML = `<span id="close">&#10006;</span>`;
        popup.classList.remove("hide");

        const title = document.createElement("h2");
        title.innerHTML = this.title;
        popup.append(title);

        const author = document.createElement("p");
        author.innerHTML = this.artist;
        popup.append(`Created by: ${this.artist}`);

        const illustration = document.createElement("img");
        illustration.src = this.file;
        if (this.framed) {
            illustration.classList.add("framed");
        };
        popup.append(illustration);

        document.getElementById("close").onclick = () => {
            popup.classList.add("hide");
        };
    };

    get section() {
        const section = document.createElement("section");
        const title = document.createElement("h3");
        title.innerHTML = this.title;
        section.append(title);
        const image = document.createElement("img");
        image.src = this.file;
        section.append(image);

        image.onclick = title.onclick = () => {
            this.popup();
        };

        return section;
    };
};

const illustrations = [];
illustrations.push(new Illustration("A Grip on Reality", "images/grasp.png", "me", false));
illustrations.push(new Illustration("Flood Light", "images/deep.png", "me", true));
illustrations.push(new Illustration("Vanity", "images/skin.png", "me", true));
illustrations.push(new Illustration("The Wayfarer", "images/dunes.png", "me", false));
illustrations.push(new Illustration("Sclera", "images/ring.png", "me", true));

illustrations.forEach((illustration) => {
    gallery.append(illustration.section);
});