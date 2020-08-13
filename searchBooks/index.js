import { createList } from "./helpers.js";
import { BASE_URL } from "./constants.js";

const btn = document.querySelector(".btn");
const input = document.querySelector(".input");
const div = document.querySelector(".book-div");
const pagination = document.querySelector(".pagination-div");
const text = document.createElement("p");

btn.addEventListener("click", (event) => {
    div.innerHTML = "";
    pagination.innerHTML = "";
    event.preventDefault();
    if (input.value.trim()) {
        render(input.value);
    }
});

const render = (bookName) => {
    fetch(`${BASE_URL}${bookName}`)
        .then((data) => {
            return data.json();
        })
        .then((data) => {
            text.textContent = `Total count of results : ${data.numFound}`;
            div.append(text);
            createPage(data);
            const countPages = Math.round(data.numFound / 100);
            createPeginator(countPages, bookName);
        });
};

const createPage = (data) => {
    data.docs.forEach(
        ({ title, author_name, first_publish_year, subject }, index) => {
            if (subject) {
                subject = subject.slice(0, 5);
            }
            console.log(subject);
            const bookArr = [title, author_name, first_publish_year, subject].filter(
                (item) => item
            );
            const finalUlist = createList(bookArr);
            div.append(finalUlist);
        }
    );
};

const createPeginator = (countPages, bookName) => {
    if (countPages) {
        const arr = [];
        arr.length = countPages;
        arr.fill(0);
        arr.forEach((el, index) => {
            const a = document.createElement("a");
            a.className = "page-item";
            pagination.append(a);
            const pageNum = index + 1;
            a.textContent = index + 1;
            a.addEventListener("click", () => {
                div.innerHTML = "";
                fetch(`${BASE_URL}${bookName}&page=${pageNum}`)
                    .then((data) => {
                        return data.json();
                    })
                    .then((data) => {
                        createPage(data);
                    });
            });
        });
    }
};
