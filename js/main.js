(function() {
    "use strict";

    // Preloader animation
    window.addEventListener("load", function() {

        // Fade out .preloader element
        $(".preloader").fadeOut();

    }, false);     

    // jQuery document ready function
    $(document).ready(function() {

        // Grab .nav-toggler element
        var $navToggler = $(".nav-toggler");

        // Attach click event to $navToggler
        $navToggler.click(function() {

            // Toggle .site-nav element on and off
            $(".site-nav").toggleClass("show");

            // Alternate $navToggler aria-expanded attribute value
            if ($navToggler.attr("aria-expanded") == "false") {
                $navToggler.attr("aria-expanded", "true");
            } else {
                $navToggler.attr("aria-expanded", "false");
            }

        });

        // Validate newsletter forms on keyup and submit
        $(".newsletter-form").validate({

            // Set form validation rules
            rules: {
                newsletteremail: {
                    required: true,
                    email: true
                }
            },

            // Set validation error messages
            messages: {
                newsletteremail: {
                    required: "Please enter your email address.",
                    email: "Please enter a valid email address."
                }
            },

            // Set error messages element
            errorElement: "div",

            // Set placement position for error messages element
            errorPlacement: function (error, element) {
                // Check for element name attribute value
                if (element.prop("name") === "newsletteremail") {
                    error.insertAfter(element.next("button"));
                } else {
                    error.insertAfter(element);
                }
            },

            // Highlight error element when input is invalid after submission attempt
            highlight: function (element, errorClass, validClass) {
					       $(element).addClass("is-invalid").removeClass("is-valid");
				    },

            // Highlight error element when input is valid after submission attempt
				    unhighlight: function (element, errorClass, validClass) {
					       $(element).addClass("is-valid").removeClass("is-invalid");
				    }

        }); // jQuery validation function

    }); // jQuery document ready function

})(); // Immediately Invoked Function Expression (IIFE)
