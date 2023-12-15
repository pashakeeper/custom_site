


$(document).ready(function () {
    AOS.init();
    $(document).mouseup(function(e) {
        var container = $(".menu_box");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            $('.menu_box').removeClass('active');
        }
    });
//     burger & mobile menu
    $('.burger').click(function () {
        $('.menu_box').addClass('active');
    })
    $('.close').click(function () {
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

})

