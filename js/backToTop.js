$(window).scroll(function() {
	if ($(this).scrollTop() > 200) {
		$('#backToTop').fadeIn();
	} else { $('#backToTop').fadeOut();
	}
});


function checkOffset() {
    if($('#backToTop').offset().top + $('#backToTop').height() 
                                           >= $('#footerEx').offset().top - 10)
        $('#backToTop').css({'position': 'fixed', 'margin-bottom': '6em'});
    if($(document).scrollTop() + window.innerHeight < $('#footerEx').offset().top)
        $('#backToTop').css({'position': 'fixed', 'margin-bottom': '0'});
}

$(document).scroll(function() {
    checkOffset();
});


$('#backToTop').click(function() {
	$('html, body').animate({
		scrollTop: 0
	}, 500);
	return false;
});