$(document).ready(function(){
    if($(window).innerWidth() < 960)
        $('.intro').css('margin', '0 5%');
    
    $('.menu').css('top', ($(window).innerHeight() / 2) - ($('#grid').innerHeight() / 2));
    $('.menu').css('left', ($(window).innerWidth() / 2) - ($('#grid').innerWidth() / 2));
    
    if($(window).innerWidth() < 960){
            $('.slide').css('max-width', '500');
            $('.slide').css('max-height', '350');
            $('.menu').css('top', ($(window).innerHeight() / 2) - ($('#grid').innerHeight() / 2));
            $('.menu').css('left', ($(window).innerWidth() / 2) - ($('#grid').innerWidth() / 2));
        }
    
    $(window).resize(function(){
        if($(window).innerWidth() < 960)
            $('.intro').css('margin', '0 5%');
        
        $('.menu').css('top', ($(window).innerHeight() / 2) - ($('#grid').innerHeight() / 2));
        $('.menu').css('left', ($(window).innerWidth() / 2) - ($('#grid').innerWidth() / 2));
        
        if($(window).innerWidth() < 960){
            $('.slide').css('max-width', '500');
            $('.slide').css('max-height', '350');
            $('.menu').css('top', ($(window).innerHeight() / 2) - ($('#grid').innerHeight() / 2));
            $('.menu').css('left', ($(window).innerWidth() / 2) - ($('#grid').innerWidth() / 2));
        }
    });
    
    $('#info_3250').mouseenter(function(){
        $('#courses_info_3250.courses_info').css('visibility', 'visible');
        $('#courses_info_3250.courses_info').css('top', event.pageX);
        $('#courses_info_3250.courses_info').css('left', event.pageY);
    });
    $('#info_3250').mouseleave(function(){
        $('#courses_info_3250.courses_info').css('visibility', 'hidden');
    });
    
    
    $('#info_3471').mouseenter(function(){
        $('#courses_info_3471.courses_info').css('visibility', 'visible');
        $('#courses_info_3471.courses_info').css('top', event.pageX);
        $('#courses_info_3471.courses_info').css('left', event.pageY);
    });
    $('#info_3471').mouseleave(function(){
        $('#courses_info_3471.courses_info').css('visibility', 'hidden');
    });
    
    
    $('#info_3502').mouseenter(function(){
        $('#courses_info_3502.courses_info').css('visibility', 'visible');
        $('#courses_info_3502.courses_info').css('top', event.pageX);
        $('#courses_info_3502.courses_info').css('left', event.pageY);
    });
    $('#info_3502').mouseleave(function(){
        $('#courses_info_3502.courses_info').css('visibility', 'hidden');
    });
    
    $('#info_3314').mouseenter(function(){
        $('#courses_info_3314.courses_info').css('visibility', 'visible');
        $('#courses_info_3314.courses_info').css('top', event.pageX);
        $('#courses_info_3314.courses_info').css('left', event.pageY);
    });
    $('#info_3314').mouseleave(function(){
        $('#courses_info_3314.courses_info').css('visibility', 'hidden');
    });
    
    $('#info_4353').mouseenter(function(){
        $('#courses_info_4353.courses_info').css('visibility', 'visible');
        $('#courses_info_4353.courses_info').css('top', event.pageX);
        $('#courses_info_4353.courses_info').css('left', event.pageY);
    });
    $('#info_4353').mouseleave(function(){
        $('#courses_info_4353.courses_info').css('visibility', 'hidden');
    });
    
    $('#info_3241').mouseenter(function(){
        $('#courses_info_3241.courses_info').css('visibility', 'visible');
        $('#courses_info_3241.courses_info').css('top', event.pageX);
        $('#courses_info_3241.courses_info').css('left', event.pageY);
    });
    $('#info_3241').mouseleave(function(){
        $('#courses_info_3241.courses_info').css('visibility', 'hidden');
    });
    
    $('#info_3453').mouseenter(function(){
        $('#courses_info_3453.courses_info').css('visibility', 'visible');
        $('#courses_info_3453.courses_info').css('top', event.pageX);
        $('#courses_info_3453.courses_info').css('left', event.pageY);
    });
    $('#info_3453').mouseleave(function(){
        $('#courses_info_3453.courses_info').css('visibility', 'hidden');
    });
    
    $('#stem_def').click(function(){
        $('.courses_info').css('visibility', 'visible');
        $('.courses_info').css('top', ($(window).innerHeight() / 2) - 400);
        $('.courses_info').css('left', ($(window).innerWidth() / 2) + 100);
        
        setTimeout(function(){
            $('.courses_info').css('visibility', 'hidden')
        },2000);
        
    });
});