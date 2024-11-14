const darkModeButton = document.getElementById("dark-mode-button");

darkModeButton.addEventListener("click", () => {
    const body = document.body;
    body.classList.toggle("dark");

    body.querySelectorAll("a").forEach((li) => {
        li.classList.toggle("dark");
    });
})