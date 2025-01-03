jQuery(window).scroll(function () {
    if (jQuery(window).scrollTop() > 40) {
        jQuery("#navigation").css("background-color","rgba(248, 3, 3, 0.8)");
        jQuery("#navigation").addClass("animated-nav");
        jQuery("#navigation .nav a").css("color", "rgb(255, 255, 255)");
        jQuery(".ig").attr("src", "img/icons/icons-instagram.png");
        jQuery(".tk").attr("src", "img/icons/icons-tik-tok.png");
        jQuery(".wts").attr("src", "img/icons/icons-whatsapp.png");
        jQuery(".text-btn img").attr("src", "img/carritoLogo.png");
        
    } else {
        jQuery("#navigation").css("background-color","transparent");
        jQuery("#navigation").removeClass("animated-nav");
        jQuery("#navigation .nav a").css("color", "rgb(248, 3, 3)");
        jQuery(".ig").attr("src", "img/icons/icons-instagram-recetas.png");
        jQuery(".tk").attr("src", "img/icons/icons-tik-tok-recetas.png");
        jQuery(".wts").attr("src", "img/icons/icons-whatsapp-recetas.png");
        jQuery(".text-btn img").attr("src", "img/carritoLogo-Recetas.png");
    }
});