$(document).ready(function() {
    $('.card-header').hover(
        function() {
            $(this).css('background-color', '#03fcf0'); 
            $(this).closest('.card').find('.card-body').css('background-color', '#bec40e'); 
        }, 
        function() {
            $(this).css('background-color', 'blue'); 
            $(this).closest('.card').find('.card-body').css('background-color', 'blue'); 
        }
    );

    $('.card-body').hover(
        function() {
            $(this).css('background-color', '#03fcf0'); 
            $(this).closest('.card').find('.card-header').css('background-color', '#bec40e'); 
        }, 
        function() {
            $(this).css('background-color', '03fcf0'); 
            $(this).closest('.card').find('.card-header').css('background-color', 'blue'); 
        }
    );
});
