// Contact Form Scripts

$(function() {
    $("#contactForm input, #contactForm textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
            // additional error messages or events
        },
        submitSuccess: function($form, event) {
            event.preventDefault(); // prevent default submit behaviour
           
            // get values from FORM
            var name = $("input#name-contactus").val();
            var email = $("input#email-contactus").val();
            var mobile = $("input#mobile-contactus").val();
            var message = $("textarea#message-contactus").val();
 
            var firstName = name; // For Success/Failure Message
 
            // Check for white space in name for Success/Fail message
            if (firstName.indexOf(' ') >= 0) {
                firstName = name.split(' ').slice(0, -1).join(' ');
            }
            $.ajax({
                url: "././mail/contact-us.php",
                type: "POST",
                data: {
                    name: name,
                    mobile: mobile,
                    email: email,
                    message: message
                },
                cache: false,
                success: function() {
                    // Success message
                    $('#success').html("<div class='alert alert-success'>");
                    $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-success')
                        .append("<strong>Your message has been sent. </strong>");
                    $('#success > .alert-success')
                        .append('</div>');

                    //clear all fields
                    $('#contactForm').trigger("reset");
                },
                error: function() {
                    // Fail message
                    $('#success').html("<div class='alert alert-danger'>");
                    $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-danger').append("<strong>Sorry " + firstName + ", it seems that my mail server is not responding. Please try again later!");
                    $('#success > .alert-danger').append('</div>');
                    //clear all fields
                    $('#contactForm').trigger("reset");
                },
            });
        },
        filter: function() {
            return $(this).is(":visible");
        },
    });

    $("a[data-toggle=\"tab\"]").click(function(e) {
        e.preventDefault();
        $(this).tab("show");
    });
});


/*When clicking on Full hide fail/success boxes */
$('#name-contactus').focus(function() {
    $('#success').html('');
});

$(function() {
    $("#enquireForm input, #enquireForm textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
            // additional error messages or events
        },
        submitSuccess: function($form, event) {
            event.preventDefault(); // prevent default submit behaviour
           
            // get values from FORM
            var name = $("input#name-enquiry").val();
            var email = $("input#email-enquiry").val();
            var mobile = $("input#mobile-enquiry").val();
 
            var firstName = name; // For Success/Failure Message
 
            // Check for white space in name for Success/Fail message
            if (firstName.indexOf(' ') >= 0) {
                firstName = name.split(' ').slice(0, -1).join(' ');
            }
            $.ajax({
                url: "././mail/contact-us.php",
                type: "POST",
                data: {
                    name: name,
                    mobile: mobile,
                    email: email,
                    message: 'This is an enquiry.'
                },
                cache: false,
                success: function() {
                    // Success message
                    $('#success-enquiry').html("<div class='alert alert-success'>");
                    $('#success-enquiry > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success-enquiry > .alert-success')
                        .append("<strong>Your message has been sent. </strong>");
                    $('#success-enquiry > .alert-success')
                        .append('</div>');

                    //clear all fields
                    $('#enquireForm').trigger("reset");
                },
                error: function() {
                    // Fail message
                    $('#success-enquiry').html("<div class='alert alert-danger'>");
                    $('#success-enquiry > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success-enquiry > .alert-danger').append("<strong>Sorry " + firstName + ", it seems that my mail server is not responding. Please try again later!");
                    $('#success-enquiry > .alert-danger').append('</div>');
                    //clear all fields
                    $('#enquireForm').trigger("reset");
                },
            });
        },
        filter: function() {
            return $(this).is(":visible");
        },
    });

    $("a[data-toggle=\"tab\"]").click(function(e) {
        e.preventDefault();
        $(this).tab("show");
    });
});

