// scroll to an element within an element
jQuery.fn.scrollTo = function(elem, speed) {
    $(this).animate({
        scrollTop:  $(this).scrollTop() - $(this).offset().top + $(elem).offset().top
    }, speed == undefined ? 1000 : speed);
    return this;
};

$('.navbar-collapse a').click(function(){
    $(".navbar-collapse").collapse('hide');
});
