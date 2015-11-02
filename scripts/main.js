// scroll to an element within an element
jQuery.fn.scrollTo = function(elem, speed) {
    $(this).animate({
        scrollTop:  $(this).scrollTop() - $(this).offset().top + $(elem).offset().top
    }, speed == undefined ? 1000 : speed);
    return this;
};

$('a[href*=#]:not([href=#])').click(function(e) {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
      || location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
         if (target.length) {
           $('#parallax-box').scrollTo(target);
          return false;
      }
    }
    e.preventDefault();
  });

$('.navbar-collapse a').click(function(){
    $(".navbar-collapse").collapse('hide');
});

$('.twitter-link').click(function(e){
  window.open('http://twitter.com/'+this.id);
});

$('.tickets-box table').click(function(){
  window.open('https://codemania-2016.lilregie.com/');
});
