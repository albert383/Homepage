{
    const bodyToggle = (body) => {
        body.classList.toggle("body--black");
    };

    const updateButtonSpanText = (body) => {
        const buttonSpan = document.querySelector(".buttonSpan");
        buttonSpan.innerText = body.classList.contains("body--black") ? "jasny" : "ciemny";
    };

    const init = () => {
        const button = document.querySelector(".button");
        const body = document.querySelector(".body");
        button.addEventListener("click", () => {
            bodyToggle(body);
            updateButtonSpanText(body);
        });
    };

    init();
}