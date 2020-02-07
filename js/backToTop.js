// Hide the button in the beginning.
$('#backToTop').hide();

// Where the magic happens.
$(window).scroll(function() {
	if ($(this).scrollTop() > 200) {
		$('#backToTop').fadeIn();
	} else { $('#backToTop').fadeOut()};
});

// Offset from footer so no overlapping.
function checkOffset() {
	if($('#backToTop').offset().top + $('#backToTop').height() 
	                                       >= $('#footerEx').offset().top - 10)
    $('#backToTop').css({'position': 'fixed', 'margin-bottom': '6em'});

    if($(document).scrollTop() + window.innerHeight < $('#footerEx').offset().top)
    $('#backToTop').css({'position': 'fixed', 'margin-bottom': '0'});
};

// Self-explanatory.
$(document).scroll(function() {
    checkOffset();
});

// The actual work.
$('#backToTop').click(function() {
	$('html, body').animate({
		scrollTop: 0
	}, 500);
	return false;
});