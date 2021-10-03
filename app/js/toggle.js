const toggles = document.querySelectorAll(".toggle-button");

const toggle = (element) => {
    element.classList.toggle("toggle-button--activo");
};

toggles.forEach((toggleButton) => {
    toggleButton.addEventListener("click", function () {
        toggle(this);
    });

    toggleButton.addEventListener("keydown", function (e) {
        const tecla = e.key;

        if (tecla == "Enter" || tecla == " ") {
            e.preventDefault();
            toggle(this);
        }
    });
});

export {};
