const getShoes = async() => {
    const url = "https://portiaportia.github.io/json/shoes.json";

    try {
        const response = await fetch(url);
        return response.json();
    }
    catch (error) {
        console.log("whoops");
    }
};

const showShoes = async() => {
    const shoes = await getShoes();
    const list = document.getElementById("shoe-list");

    shoes.forEach((shoe) => {
        const section = document.createElement("section");
        list.append(section);
        const ul = document.createElement("ul");
        section.append(ul);
        ul.append(li(`Name: ${shoe.name}`));
        ul.append(li(`Brand: ${shoe.brand}`));
        ul.append(li(`Price: ${shoe.price}`));
        ul.append(li(`Material: ${shoe.material}`));
        ul.append(li(`Rating: ${shoe.rating}`));
        ul.append(li("Reviews:"));
        const reviewList = document.createElement("ul");
        ul.append(reviewList);
        const reviews = shoe.reviews;
        reviews.forEach((review) => {
            const li = document.createElement("li");
            li.innerHTML = review;
            reviewList.append(li);
        })
    });
};

const li = (component) => {
    const li = document.createElement("li");
    li.innerHTML = component;
    return li;
}

showShoes();