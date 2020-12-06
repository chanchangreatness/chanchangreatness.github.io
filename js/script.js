$(document).ready(function(){
    $('.nav-item').on('click', function(event){
        $('.nav-item').each(function(){
            $(this).removeClass('active');
        });

        $(this).addClass('active');          
    });
});