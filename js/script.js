const button = document.querySelector(".button");
const body = document.querySelector(".body");
const buttonSpan = document.querySelector(".buttonSpan");

const bodyToggle = () => {
    body.classList.toggle("body--black");
};

const updateButtonSpanText = () => {
    buttonSpan.innerText = body.classList.contains("body--black") ? "jasny" : "ciemny";
};

const Click = () => {
    bodyToggle();
    updateButtonSpanText();
};

button.addEventListener("click", Click);