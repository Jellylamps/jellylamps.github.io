class Dog {
    constructor(title, breed, color, age, size, pic) {
        this.title = title;
        this.breed = breed;
        this.color = color;
        this.age = age;
        this.size = size;
        this.pic = pic;
    };

    get item() {
        const section = document.createElement("section");
        section.classList.add("dog");

        const h3 = document.createElement("h3");
        h3.innerHTML = this.title;
        section.append(h3);
        const arrow = document.createElement("a");
        arrow.href = "#";
        arrow.innerHTML = "&#x2964";
        h3.append(arrow);

        const div = document.createElement("div");
        div.classList.add("columns");
        section.append(div);

        const img = document.createElement("img");
        img.src = `images/classes/${this.pic}`;
        div.append(img);

        const subdiv = document.createElement("div");
        subdiv.classList.add("transparent");
        div.append(subdiv);

        subdiv.append(this.info(`Breed: ${this.breed}`));
        subdiv.append(this.info(`Color: ${this.color}`));
        subdiv.append(this.info(`Age: ${this.age}`));

        arrow.onclick = (event) => {
            event.preventDefault();
            subdiv.classList.toggle("transparent");
        };

        return section;
    };

    info(stuff) {
        const p = document.createElement("P");
        p.innerHTML = stuff;
        return p;
    }
};

const dogs = [];
dogs.push(new Dog("Fred", "yorkie", "brown", 1, "small", "yorkie.jpg"));
dogs.push(new Dog("Manny", "goldie", "gold", 1, "med", "golden-retriever.jpg"));
dogs.push(new Dog("Susie", "pittie", "black", 1, "small", "pitt-bull.jpg"));

const dogListDiv = document.getElementById("dog-list");

dogs.forEach((dog) => {
    dogListDiv.append(dog.item);
});