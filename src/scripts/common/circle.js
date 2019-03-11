$(document).ready( function () {
    
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

});