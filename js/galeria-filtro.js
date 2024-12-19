document.addEventListener("DOMContentLoaded", function () {
    // Obtén todos los botones de filtro
    const filterButtons = document.querySelectorAll(".filter");
    // Obtén todas las figuras de la galería
    const portfolioItems = document.querySelectorAll(".portfolio-item");

    // Agrega un evento de clic a cada botón de filtro
    filterButtons.forEach(button => {
        button.addEventListener("click", function () {
            // Obtén el filtro seleccionado (clase)
            const filter = this.getAttribute("data-filter");

            // Si el filtro es "all", muestra todo
            if (filter === "all") {
                portfolioItems.forEach(item => {
                    item.style.display = "block"; // Mostrar todos
                });
            } else {
                // Filtra y muestra solo los elementos que coincidan
                portfolioItems.forEach(item => {
                    if (item.classList.contains(filter.substring(1))) {
                        item.style.display = "block"; // Mostrar coincidencia
                    } else {
                        item.style.display = "none"; // Ocultar
                    }
                });
            }

            // Actualiza el estado activo del menú
            filterButtons.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");
        });
    });
});
