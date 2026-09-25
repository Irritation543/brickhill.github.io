document.addEventListener("DOMContentLoaded", () => {
    const pages = document.querySelectorAll(".page");
    const buttons = document.querySelectorAll(".nav-button");
    const pageButtons = document.querySelectorAll("[data-page]");

    function openPage(name) {
        const target = document.getElementById(name);

        if (!target) {
            return;
        }

        pages.forEach(page => {
            page.classList.remove("active");
        });

        buttons.forEach(button => {
            button.classList.remove("active");
        });

        target.classList.add("active");

        document.querySelectorAll(`[data-page="${name}"]`).forEach(button => {
            button.classList.add("active");
        });

        history.replaceState(null, "", "#" + name);
        window.scrollTo(0, 0);
    }

    pageButtons.forEach(button => {
        button.addEventListener("click", () => {
            openPage(button.dataset.page);
        });
    });

    window.addEventListener("hashchange", () => {
        const name = window.location.hash.slice(1) || "home";
        openPage(name);
    });

    const initial = window.location.hash.slice(1);
    openPage(initial || "home");
});
