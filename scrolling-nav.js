(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 56)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 56
  });

})(jQuery); // End of use strict


//new

$(document).ready(function () {
	
	$(".navbar-nav li a").click(function (event) {
        $(".navbar-collapse").collapse('hide');
});

    var delay = 2000;
    $('.btn-default').click(function (e) {
        e.preventDefault();
        var name = $('#name').val();
        if (name == '') {
            $('.message_box').html(
                '<span style="color:white;">Enter Your Name!</span>'
            );
            $('#name').focus();
            return false;
        }
		
		var name = $('#company').val();
                            if (name == '') {
                                $('.message_box').html(
                                    '<span style="color:white;">Enter Your Company Name!</span>'
                                );
                                $('#company').focus();
                                return false;
                            }
		
		var designation = $('#designation').val();
        if (designation == '') {
            $('.message_box').html(
                '<span style="color:white;">Enter Your Designation!</span>'
            );
            $('#designation').focus();
            return false;
        }
		

        var email = $('#email').val();
        if (email == '') {
            $('.message_box').html(
                '<span style="color:white;">Enter Email Address!</span>'
            );
            $('#email').focus();
            return false;
        }
        if ($("#email").val() != '') {
            if (!isValidEmailAddress($("#email").val())) {
                $('.message_box').html(
                    '<span style="color:white;">Provided email address is incorrect!</span>'
                );
                $('#email').focus();
                return false;
            }
        }

        var phone = $('#phone').val();
        if (phone == '') {
            $('.message_box').html(
                '<span style="color:white;">Enter Your Mobile Number</span>'
            );
            $('#phone').focus();
            return false;
        }

        var company = $('#company').val();
        if (company == '') {
            $('.message_box').html(
                '<span style="color:white;">Enter Your Company Name!</span>'
            );
            $('#company').focus();
            return false;
        }
		
		var msg = $('#msg').val();
        if (msg == '') {
            $('.message_box').html(
                '<span style="color:white;">Enter Your Message</span>'
              );
              $('#msg').focus();
              return false;
         }
		
		

        $.ajax
            ({
                type: "POST",
                url: "ajax.php",
			    async: false,
                data: "&name=" + name + "&email=" + email + "&phone=" + phone + "&company=" + company + "&designation=" + designation + "&msg=" + msg,
                beforeSend: function () {
                    $('.message_box').html(
                        '<div class="spinner-border text-light" role="status"> <span class="sr-only">Loading...</span> </div>'
                    );
                },
                success: function (data) {
                    setTimeout(function () {
                        $('.message_box').html(data);
                    }, delay);
                }
            });
		e.stopImmediatePropagation();
        return false;

    });

});

//Email Validation Function 
function isValidEmailAddress(emailAddress) {
    var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    return pattern.test(emailAddress);
}; 