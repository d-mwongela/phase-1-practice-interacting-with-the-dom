const counter = document.getElementById("counter");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const heart = document.getElementById("heart");
const pause = document.getElementById("pause");
const form = document.querySelector("form");
const comments = document.getElementById("list");
let clicked = false;

document.addEventListener("DOMContentLoaded", () => {
    let timer = setInterval(() => {
        if (clicked === false) {
            counter.textContent = (
                parseInt(counter.textContent, 10) + 1
            ).toString();
        }
    }, 500);

    plus.addEventListener("click", () => {
        counter.textContent = (
            parseInt(counter.textContent, 10) + 1
        ).toString();
    });
    minus.addEventListener("click", () => {
        counter.textContent = (
            parseInt(counter.textContent, 10) - 1
        ).toString();
    });
    pause.addEventListener("click", () => {
        if (clicked === false) {
            plus.disabled = true;
            minus.disabled = true;
            heart.disabled = true;
            clicked = true;
            pause.textContent = "resume";
        } else if (clicked === true) {
            plus.disabled = false;
            minus.disabled = false;
            heart.disabled = false;
            clicked = false;
            pause.textContent = "pause";
        }
    });
    form.addEventListener("submit", (event) => {
        console.log(form);
        event.preventDefault();
        comments.innerHTML += `<p>${form["comment"].value}</p>`;
    });
});