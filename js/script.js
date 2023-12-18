


$(document).ready(function () {
    AOS.init();
    $(document).mouseup(function(e) {
        var container = $(".menu_box");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            $('.menu_box').removeClass('active');
            $('.header__burger').show();
        }
    });
//     burger & mobile menu
    $('.header__burger').click(function () {
        $('.menu_box').addClass('active');
        $(this).hide()
    })
    $('.page-overlay__close_menu').click(function () {
        $('.header__burger').show();
        $('.menu_box').removeClass('active');
    })
    $('.galery_holder').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        closeBtnInside: false,
        fixedContentPos: true,
        gallery: {
            enabled: true
        },
        mainClass: 'mfp-no-margins mfp-with-zoom',
        image: {
            verticalFit: true
        },
        zoom: {
            enabled: true,
            duration: 400,
            easing: 'ease-in-out',
        },
        callbacks: {
            open: function() {

            }
        }
    });
    SmoothScroll({
    // Время скролла 400 = 0.4 секунды
        animationTime    : 1000,
    // Размер шага в пикселях 
        stepSize         : 75,

    // Дополнительные настройки:

    // Ускорение 
        accelerationDelta : 30,  
    // Максимальное ускорение
        accelerationMax   : 2,   

    // Поддержка клавиатуры
        keyboardSupport   : true,  
    // Шаг скролла стрелками на клавиатуре в пикселях
        arrowScroll       : 50,

    // Pulse (less tweakable)
    // ratio of "tail" to "acceleration"
        pulseAlgorithm   : true,
        pulseScale       : 4,
        pulseNormalize   : 1,

    // Поддержка тачпада
        touchpadSupport   : true,
    })
})

