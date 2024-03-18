{
    const bodyToggle = () => {
        const body = document.querySelector(".body");
        body.classList.toggle("body--black");
    };

    const updateButtonSpanText = () => {
        const body = document.querySelector(".body");
        const buttonSpan = document.querySelector(".buttonSpan");
        buttonSpan.innerText = body.classList.contains("body--black") ? "jasny" : "ciemny";
    };

    const init = () => {
        const button = document.querySelector(".button");
        button.addEventListener("click", () => {
            bodyToggle();
            updateButtonSpanText();
        });
    };

    init();
}