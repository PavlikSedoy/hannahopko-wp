
// Biography image slider
$(document).ready(function() {
	$('.img-slider').owlCarousel({
	    loop:true,
	    nav:true,
	    items: 1,
    	navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
	})
	
});

// Preloader

$(window).load(function() {
	$('#before-load').find('preload-icon').fadeOut().end().delay(400).fadeOut('slow');
});

$(document).ready(function(){

    // Language toggle

	$('.ukr-lang').click(function(){
		$('.rus-lang').removeClass('active-lang');
		$('.ukr-lang').addClass('active-lang');
	});

	$('.rus-lang').click(function(){
		$('.ukr-lang').removeClass('active-lang');
		$('.rus-lang').addClass('active-lang');
	});

    // XS SM MNU 

	$('#nav-icon').click(function(){
		$(this).toggleClass('animate-icon');
		$('#xs-sm-mnu-overlay').fadeToggle();
	});

	$('.animate-icon').click(function(){
 		$('#nav-icon').removeClass('animate-icon');
		$('#xs-sm-mnu-overlay').toggle();
	});


	// Contact form

	$(".contacts-link").click(function() {
		$(".contacts-info-wrap").fadeIn(600);
	});

	$(".contacts-close-button").click(function() {
		$(".contacts-info-wrap").fadeOut(600);
	});

	// Scroll to top

    $("#scroll-to-top-wrap").hide();
    
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('#scroll-to-top-wrap').fadeIn();
            } else {
                $('#scroll-to-top-wrap').fadeOut();
            }
        });

        $('#scroll-to-top-wrap a').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
    });


	// Bootstrap validator

	$(function () { $("input,select,textarea").not("[type=submit]").jqBootstrapValidation(); } );

});