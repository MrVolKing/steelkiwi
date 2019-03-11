$(document).ready( function () {
    
    //sliders
                        //services
    var swiper = new Swiper('.swiper-services', {
        navigation: {
            nextEl: '.swiper-services-button-next',
            prevEl: '.swiper-services-button-prev',
        },
        slidesPerView: 2,
        loop: true,
        spaceBetween: 120,
        breakpoints: {
            769: {
              slidesPerView: 1,
              spaceBetween: 0,
            }
        }
    });

                        //testimonials
    var swiper = new Swiper('.swiper-testimonials', {
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
          nextEl: '.swiper-testimonials-button-next',
          prevEl: '.swiper-testimonials-button-prev',
        },
        loop: true
    });
 
});