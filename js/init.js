(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();



  }); // end of document ready


  document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.collapsible');
      var instances = M.Collapsible.init(elems, options);
    });


    $(document).ready(function(){
      $('.collapsible').collapsible();
    });

    document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.tap-target');
        var instances = M.TapTarget.init(elems, options);
      });


      $(document).ready(function(){
        $('.tap-target').tapTarget();
      });



        // Or with jQuery

        $(document).ready(function(){
          $('.modal').modal();
          $('.modal').modal('open');
        });


        $(document).ready(function(){
            $('.carousel').carousel();
          });

})(jQuery); // end of jQuery name space
