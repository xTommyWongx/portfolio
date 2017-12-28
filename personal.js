$(function() {
// ------- navbar ------
	$(window).scroll(function() {
		if ($(document).scrollTop() > 100) {
			$('nav').addClass('shrink');
		} else {
			$('nav').removeClass('shrink');
		}
	});

	// ----- header h1 shadow effect ------
	function toggle() {
		$('.header h1').toggleClass('shadow')
	}
	
	setTimeout(function(){
		$('.header h1').addClass('animated jello')
		setInterval(toggle, 50)
	}, 2000)

	// ----- blog post ----
	$('.blog-share .card').mouseenter(function() {
		$(this).addClass('animated shake')
	})

	$('.blog-share .card').mouseleave(function() {
		$(this).removeClass('animated shake')
	})

	// -----photo-section------
	$('.img-thumbnail').mouseenter(function() {
		$(this).addClass('animated hinge')
	})
});


