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
	};
	
	setTimeout(function(){
		$('.header h1').addClass('animated jello')
		setInterval(toggle, 50)
	}, 2000);	

	// -----photo-section------
	$('.img-thumbnail').click(function() {
		$(this).addClass('animated hinge')
	});

	// ----- blog post ----
	$('.blog-share .card').mouseenter(function() {
		$(this).addClass('animated shake')
	});

	$('.blog-share .card').mouseleave(function() {
		$(this).removeClass('animated shake')
	});

	// ------learning-info-----
	$('.learning-info').mouseenter(function() {
		$('.learning-info-wrapper').addClass('animated pulse')
	});

	$('.learning-info').mouseleave(function() {
		$('.learning-info-wrapper').removeClass('animated pulse')
	});
});


