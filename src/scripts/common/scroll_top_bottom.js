$(document).ready( function () {
    
    // scroll top bottom
    $(function(){

        var CurrentScroll = 0;
        $(window).scroll(function(event){
      
            var NextScroll = $(this).scrollTop();

                if(NextScroll === 0) {
                    $('.header').removeClass('header_scroll');
                }

                else{

                    if (NextScroll > CurrentScroll) {
                        $('.header').fadeOut('fast');
                        
                    }
        
                    else {
                        $('.header').fadeIn('fast');
                        $('.header').addClass('header_scroll');
                    }
                }

            CurrentScroll = NextScroll;
 
        });

    });
 
});