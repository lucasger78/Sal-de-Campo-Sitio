// BOTÓN CATÁLOGO

document.addEventListener("DOMContentLoaded", function () {
    const botonCatalogo = document.querySelector(".boton-catalogo");

    if (botonCatalogo) {
        botonCatalogo.addEventListener("click", function () {
            // Crear un enlace temporal
            const link = document.createElement("a");
            link.href = "01-Catalogo_Sal_de_Campo-ESP.pdf";
            link.download = "Catalogo_Sal_de_Campo.pdf"; // Nombre del archivo al descargar
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    }
});
