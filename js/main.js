/* ========================================================================= */
/*  Preloader Script
/* =========================================================================

window.onload = function () {
    document.getElementById('loading-mask').style.display = 'none';
} */

$(function(){
    /* ========================================================================= */
    /*  Menu item highlighting
    /* ========================================================================= */

    jQuery(window).scroll(function () {
        if (jQuery(window).scrollTop() > 400) {
            jQuery("#navigation").css("background-color","rgba(248, 3, 3, 0.8)");
            jQuery("#navigation").addClass("animated-nav");
        } else {
            jQuery("#navigation").css("background-color","transparent");
            jQuery("#navigation").removeClass("animated-nav");
        }
    });

    $('#nav').onePageNav({
        filter: ':not(.external)',
        scrollSpeed: 950,
        scrollThreshold: 1
    });

    // Slider Height
    var slideHeight = $(window).height();
    $('#home-carousel .carousel-inner .item, #home-carousel .video-container').css('height',slideHeight);

    $(window).resize(function(){'use strict',
        $('#home-carousel .carousel-inner .item, #home-carousel .video-container').css('height',slideHeight);
    });

    // portfolio filtering

    $("#projects").mixItUp();

    //fancybox

    $(".fancybox").fancybox({
        padding: 0,

        openEffect : 'elastic',
        openSpeed  : 650,

        closeEffect : 'elastic',
        closeSpeed  : 550,
    });


    /* ========================================================================= */
    /*  Facts count
    /* ========================================================================= */

    "use strict";
    $(".fact-item").appear(function () {
        $(".fact-item [data-to]").each(function () {
            var e = $(this).attr("data-to");
            $(this).delay(6e3).countTo({
                from: 50,
                to: e,
                speed: 3e3,
                refreshInterval: 50
            })
        })
    });

/* ========================================================================= */
/*  On scroll fade/bounce fffect
/* ========================================================================= */

    $("#testimonial").owlCarousel({
        pagination : true, // Show bullet pagination
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem:true
    });

});

/* ========================================================================= */
/*  On scroll fade/bounce fffect
/* ========================================================================= */

    wow = new WOW({
        animateClass: 'animated',
        offset: 100,
        mobile: false
    });
    wow.init();

/* ---------------------------------------------------------------------- */
/*      Progress Bars
/* ---------------------------------------------------------------------- */

initProgress('.progress');

function initProgress(el){
    jQuery(el).each(function(){
        var pData = jQuery(this).data('progress');
        progress(pData,jQuery(this));
    });
}


            
function progress(percent, $element) {
    var progressBarWidth = 0;
    
    (function myLoop (i,max) {
        progressBarWidth = i * $element.width() / 100;
        setTimeout(function () {   
        $element.find('div').find('small').html(i+'%');
        $element.find('div').width(progressBarWidth);
        if (++i<=max) myLoop(i,max);     
        }, 10)
    })(0,percent);  
}   


// Al cargar la página
document.addEventListener('DOMContentLoaded', function () {
    if (window.innerWidth <= 880) {
        document.getElementById('h-02').classList.remove('wow');
    }
});

// Al redimensionar la pantalla
window.addEventListener('resize', function () {
    if (window.innerWidth <= 800) {
        document.getElementById('h-02').classList.remove('wow');
    } else {
        document.getElementById('h-02').classList.add('wow'); // Rehabilita en pantallas grandes
    }
});



new WOW({
    mobile: false // Desactiva WOW en móviles
}).init();


// slide version mobile
document.addEventListener("DOMContentLoaded", function () {
    if (window.innerWidth <= 768) {
        document.querySelectorAll(".carousel-inner .item").forEach((item, index) => {
            const mobileImages = [
                "img/slider/bg0m.jpg", // Imagen para el primer slide en móvil
                "img/slider/bg1m.jpg", // Imagen para el primer slide en móvil
                "img/slider/bg2m.jpg", // Imagen para el segundo slide en móvil
                "img/slider/bg3m.jpg"  // Imagen para el tercer slide en móvil
            ];
            
            item.style.backgroundImage = `url(${mobileImages[index]})`;
        });
    }
});
