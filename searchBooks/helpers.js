export const createList = (bookArr) => {
    const ul = document.createElement("ul");
    bookArr.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item;
        ul.append(li);
    });
    ul.className="info-item"
    return ul;
};


