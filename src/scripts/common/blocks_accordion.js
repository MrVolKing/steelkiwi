$(document).ready( function () {
    
    // blocks
    if ($(window).width() >= 769){
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
    }

    else{
        $(document).on('click', '.blockitem', function(){
            $('.blockitem__bottom').removeClass('blockitem_active');
            $(this).find('.blockitem__bottom').addClass('blockitem_active');
            $('.btn_switching').removeClass('btn_active');
            $(this).find('.btn_switching').addClass('btn_active');

        });
    }
     
});