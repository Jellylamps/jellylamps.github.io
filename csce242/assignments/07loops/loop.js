let hour = new Date().getHours();
let night = false;
let done = false;

if (hour < 6 || hour > 17) {
    const color = window.getComputedStyle(document.body).getPropertyValue("--night");
    document.body.style.background = color;
    night = true;
}

document.getElementById("draw").onclick = () => {
    if (done) {return;}  // don't want to duplicate if it's all there already

    if (night) {
        document.getElementById("moon").classList.remove("hide");
    } else {
        document.getElementById("sun").classList.remove("hide");
    }

    for (let i = 0; i < 6; ++i) {
        const cloud = document.createElement("section");
        cloud.classList.add("cloud");
        const left = document.createElement("div");
        const center = document.createElement("div");
        const right = document.createElement("div");
        left.classList.add("cloud-left");
        center.classList.add("cloud-center");
        right.classList.add("cloud-right");
        cloud.append(left);
        cloud.append(center);
        cloud.append(right);
        document.getElementById("clouds").append(cloud);

        const tree = document.createElement("section");
        tree.classList.add("tree");
        const trunk = document.createElement("div");
        const top = document.createElement("div");
        const middle = document.createElement("div");
        const bottom = document.createElement("div");
        const bit = document.createElement("div");
        trunk.classList.add("tree-trunk");
        top.classList.add("tree-top");
        middle.classList.add("tree-center");
        bottom.classList.add("tree-bottom");
        bit.classList.add("tree-bit");
        tree.append(trunk);
        tree.append(top);
        tree.append(middle);
        tree.append(bottom);
        tree.append(bit);
        document.getElementById("trees").append(tree);
    }

    done = true;
}