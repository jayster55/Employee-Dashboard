(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $('.collapsible').collapsible();
    $('.tap-target').tapTarget();
    $('.modal').modal();
    $('.modal').modal('open');
    $('.carousel').carousel();
//    $('.tabs').tabs();
    $('.sidenav').sidenav();

    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if( target.length ) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 40
            }, 1000);
        }
    });



  }); // end of document ready
})(jQuery); // end of jQuery name space
