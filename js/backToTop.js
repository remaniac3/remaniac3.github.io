mybutton = document.getElementById("backToTop");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
	if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
		mybutton.style.display = "block";
	} else {
		mybutton.style.display = "none";
	}
}

function functionTop() {
	document.body.scrollTop = 0; //Safari
	document.documentElement.scrollTop = 0; //Everything else.
}


  //   $(document).ready(function() {		
  //     $(window).scroll(function() {
  //  //--------------------------- Lines added ------------------------//
  //      var footertotop = ($('.footer').position().top);
  //      var scrolltop = $(document).scrollTop() + window.innerHeight;
  //      var difference = scrolltop-footertotop;
  //     if (scrolltop > footertotop) {
  //       $('.go-top').css({'bottom' : difference});
  //     }else{
  //       $('.go-top').css({'bottom' : 10});
  //     };   
  // //--------------------------- end ---------------------------------//
  //     if ($(this).scrollTop() > 200) {
  //         $('.go-top').fadeIn(200);
  //     } else {
  //         $('.go-top').fadeOut(200);
  //     }
  //     });
  //     $('.go-top').click(function(event) {
  //       event.preventDefault();
  //       $('html, body').animate({scrollTop: 0}, 300);
  //     })
  //   });