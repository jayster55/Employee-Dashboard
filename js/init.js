(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();



  }); // end of document ready

    $(document).ready(function(){
      $('.collapsible').collapsible();
    });

      $(document).ready(function(){
        $('.tap-target').tapTarget();
      });

        $(document).ready(function(){
          $('.modal').modal();
          $('.modal').modal('open');
        });

        $(document).ready(function(){
            $('.carousel').carousel();
          });

})(jQuery); // end of jQuery name space
