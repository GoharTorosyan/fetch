import { BASE_URL } from "./constants.js";

const div = document.querySelector(".breed-div");


const state = {
    name: "",
    subname: "",
};


const selectBreed = document.querySelector(".dog-breed");


selectBreed.addEventListener("change", (event) => {
    if (event.target.value) {
        state.name = event.target.value.toLowerCase().split(" ")[1];
        state.subname = event.target.value.toLowerCase().split(" ")[0];
        render(state.name, state.subname);
    } else {
        div.innerHTML = "select a bread";
    }
});



const render = (name, subname) => {
    const url =
        name === undefined
            ? `${BASE_URL}/${subname}/images/random`
            : `${BASE_URL}/${name}/${subname}/images/random`;
    getBreedImg(url);
};


const getBreedImg = (url) => {
    fetch(url)
        .then((r) => r.json())
        .then((result) => {
            div.innerHTML = "";
            const img = document.createElement("img");
            img.src = result.message;
            img.width = 300;
            div.append(img);
        });
};