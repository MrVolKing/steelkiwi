$(document).ready( function () {
    
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
                                                                           

                                        

