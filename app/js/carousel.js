// Depende Splide JS para funcionar.
const opciones = {
    type: "loop",
    perPage: 2,
    height: "9rem",
    cover: true,
    breakpoins: {
        640: {
            height: "6rem",
        },
    },
};

const banner = {
    ...opciones,
};

banner.perPage = 1;

new Splide("#splide-images", banner).mount();

export {};
