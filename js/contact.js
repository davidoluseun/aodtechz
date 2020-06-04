(function() {
    "use strict";

    $(document).ready(function() {

        // Validate contact form on keyup and submit
        $(".contact-form").validate({

            // Set form validation rules
            rules: {
                firstname: "required",
                lastname: "required",
                emailaddress: {
                    required: true,
                    email: true
                },
                phonenumber: {
                    required: true,
                    digits: true
                },
                contactmessage: "required"
            },

            // Set validation error messages
            messages: {
                firstname: "Please enter your firstname.",
                lastname: "Please enter your lastname.",
                emailaddress: {
                    required: "Please enter your email address.",
                    email: "Please enter a valid email address."
                },
                phonenumber: {
                    required: "Please enter your phone number.",
                    digits: "Please enter a valid phone number."
                },
                contactmessage: "Please leave a message for us."
            },

            // Set error messages element
            errorElement: "div",

            // Set placement position for error messages element
            errorPlacement: function (error, element) {
                // Check for element name attribute value
                if (element.prop("name") === "emailaddress") {
                    error.insertAfter(element.next("small"));
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
