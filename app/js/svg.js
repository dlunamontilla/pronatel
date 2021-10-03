const obtener = async () => {
    const svgs = document.querySelectorAll("[data-svg$='.svg']");
    const promises = [];

    svgs.forEach((svg) => {
        const path = svg.dataset.svg;
        const respuesta = fetch(path)
            .then((response) => response.text())
            .then((data) => {
                svg.insertAdjacentHTML("beforeend", data);
            });
    });
};

// Obtener las SVGs:
obtener();

export {};
