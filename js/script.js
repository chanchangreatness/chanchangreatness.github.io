$(document).ready(function(){
    $('.nav-item').on('click', function(){
        $('.nav-item').each(function(){
            $(this).removeClass('active');
        });

        $(this).addClass('active');            
    });
});