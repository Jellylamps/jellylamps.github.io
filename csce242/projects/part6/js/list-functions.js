const list = document.getElementById("list");

const getList = async() => {
    const url = "https://jellylamps.github.io/csce242/projects/json/polyhedra.json";

    try {
        const response = await fetch(url);
        return response.json();
    } catch (error) {
        console.log(error);
    }
};

const showList = async() => {
    const shapes = await getList();
    
    shapes.forEach((shape) => {
        const div = document.createElement("div");
        list.append(div);
        div.classList.add("columns");
        div.classList.add("always");
        div.classList.add("text-block");
        if (shape._id == 1) {
            div.onclick = () => {window.location.href = "info.html";};
        }

        const img = document.createElement("img");
        div.append(img);
        img.src = `json/images/${shape.img}`;

        const section = document.createElement("section");
        div.append(section);
        section.classList.add("info");

        const h2 = document.createElement("h2");
        section.append(h2);
        h2.innerHTML = shape.name;

        section.append(info(`Dihedral Angle: ${shape.angle}`));
        section.append(info(`Symmetry: ${shape.symmetry}`));
        section.append(info(`First Discovered by: ${shape.discovery}`));
    });
};

const info = (text) => {
    const p = document.createElement("p");
    p.innerHTML = text;
    return p;
};

showList();
list.firstChild.onclick = () => {
    window.location.href = "info.html";
};