(function() {
    "use strict"

    $(document).ready(function() {

      //  Flexslider activation
      $(".flexslider").flexslider({
          animation: "slide",
          pauseOnAction: false,
          pauseOnHover: true,
        });

        //  Owl carousel activation
        $(".owl-carousel").owlCarousel({
            loop: true,
            dots: false,
            margin: 30,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            slideBy: 2,
            responsive: {
                //  breakpoint from 0 up
                0: {
                    items: 2
                },
                //  breakpoint from 576 up
                576: {
                    items: 3
                },
                //  breakpoint from 768 up
                768: {
                    items: 4
                },
                //  breakpoint from 992 up
                992: {
                    items: 5
                },
                //  breakpoint from 1200 up
                1200: {
                    items: 7
                }
            }
        });

    }); // jQuery document ready function

})();   // Immediately Invoked Function Expression (IIFE)
