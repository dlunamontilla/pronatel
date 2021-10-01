const toggles = document.querySelectorAll(".toggle-button");

toggles.forEach((toggle) => {
    toggle.onclick = function () {
        this.classList.toggle("toggle-button--activo");
    };
});
export {};
