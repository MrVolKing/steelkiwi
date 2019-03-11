$(document).ready( function () {
    
    // scroll top bottom
    $(function(){

        var CurrentScroll = 0;
        $(window).scroll(function(event){
      
            var NextScroll = $(this).scrollTop();

                if (NextScroll > CurrentScroll) {
                    // console.log('Scroll down');
                    $('.header').fadeOut('fast');
                    
                }
    
                else {
                    // console.log('Scroll up');
                    $('.header').fadeIn('fast');
                    $('.header').addClass('header_scroll');
                }
        
            CurrentScroll = NextScroll;

            // console.log(CurrentScroll);
            // console.log(NextScroll);
        
        });

    });

    // $(function(){

    //     var CurrentScroll = 0;
    //     $(window).scroll(function(event){
      
    //         var NextScroll = $(this).scrollTop();
      
    //         if (NextScroll > CurrentScroll){
    //            console.log('Scroll down');
    //         }
    //         else {
    //            console.log('Scroll up');
    //         }
      
    //         CurrentScroll = NextScroll;  //Updates current scroll position
    //     });
    // });

    // var lastScrollTop = 0;
    // $(window).scroll(function(event){
    // var st = $(this).scrollTop();
    // if (st > lastScrollTop){
    //     console.log('Scroll down');
    // } else {
    //     console.log('Scroll up');
    // }
    // lastScrollTop = st;
    // });



    // blocks
    $('.btn_deposition').click(function() {
        $('.blockitem').removeClass('blockitem_active');
        $('.deposition_block').addClass('blockitem_active');

        $('.btn_switching').removeClass('btn_active');
        $('.btn_deposition').addClass('btn_active');
    });

    $('.btn_arbitration').click(function() {
        $('.blockitem').removeClass('blockitem_active');
        $('.arbitration_block').addClass('blockitem_active');

        $('.btn_switching').removeClass('btn_active');
        $('.btn_arbitration').addClass('btn_active');
    });

    $('.btn_hearing').click(function() {
        $('.blockitem').removeClass('blockitem_active');
        $('.hearing_block').addClass('blockitem_active');

        $('.btn_switching').removeClass('btn_active');
        $('.btn_hearing').addClass('btn_active');
    });

    $('.btn_meeting').click(function() {
        $('.blockitem').removeClass('blockitem_active');
        $('.meeting_block').addClass('blockitem_active');

        $('.btn_switching').removeClass('btn_active');
        $('.btn_meeting').addClass('btn_active');
    });

    $('.btn_video').click(function() {
        $('.blockitem').removeClass('blockitem_active');
        $('.video_block').addClass('blockitem_active');

        $('.btn_switching').removeClass('btn_active');
        $('.btn_video').addClass('btn_active');
    });

    $('.btn_interpreting').click(function() {
        $('.blockitem').removeClass('blockitem_active');
        $('.interpreting_block').addClass('blockitem_active');

        $('.btn_switching').removeClass('btn_active');
        $('.btn_interpreting').addClass('btn_active');
    });




    //scroll circle
    if ($(window).width() >= 769) {

        $(window).scroll(function() {

            var
                cPos = $('.sect3__content').offset().top;
                topWindow = $(window).scrollTop();

            if (cPos < topWindow){
                
                $('.circles1 .circles__second').addClass('circle-25-active');
                $('.circles2 .circles__second').addClass('circle-60-active');
                $('.circles3 .circles__second').addClass('circle-45-active');
                $('.circles4 .circles__second').addClass('circle-55-active');
            }

            else{
                $('.circles1 .circles__second').removeClass('circle-25-active');
                $('.circles2 .circles__second').removeClass('circle-60-active');
                $('.circles3 .circles__second').removeClass('circle-45-active');
                $('.circles4 .circles__second').removeClass('circle-55-active');
            }

        });
    }

    else{
        $(window).scroll(function() {

            var
                cPos = $('.sect4').offset().top;
                topWindow = $(window).scrollTop();

            if (cPos < topWindow){
                
                $('.circles1 .circles__second').addClass('circle-25-active');
                $('.circles2 .circles__second').addClass('circle-60-active');
                $('.circles3 .circles__second').addClass('circle-45-active');
                $('.circles4 .circles__second').addClass('circle-55-active');
            }

            else{
                $('.circles1 .circles__second').removeClass('circle-25-active');
                $('.circles2 .circles__second').removeClass('circle-60-active');
                $('.circles3 .circles__second').removeClass('circle-45-active');
                $('.circles4 .circles__second').removeClass('circle-55-active');
            }

        });
    }



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



    // burger
    $('.burger').click(function() {
        $('.adaptmenu').addClass('adaptmenu_active');
        $('body').css('overflow', 'hidden');
    });

    $('.close').click(function() {
        $('.adaptmenu').removeClass('adaptmenu_active');
        $('body').css('overflow', 'visible');
        $('body').css('overflow-x', 'hidden');
    });

    $('.adaptmenu nav').click(function() {
        $('.adaptmenu').removeClass('adaptmenu_active');
        $('body').css('overflow', 'visible');
        $('body').css('overflow-x', 'hidden');
    });

    
});

                                                                        
// var f = (function(){
//     var oldPos = window.scrollY;
//     function fu(e) {
//         var newPos = window.scrollY;

//         if (newPos>oldPos) {
//             console.log('down');
//         } 

//         else if(newPos<oldPos) {
//             console.log('up');
//         } 

//         else {
//             console.log('same');
//         }

//         oldPos = newPos;
//     }
//     return fu;
// })();

// window.addEventListener('scroll',f);
                                                                           

                                        

