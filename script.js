function scroll(){
	$('.menu li a').click(function () {
		elementClick = $(this).attr('href');
		destination = $(elementClick).offset().top;
		$('body,html').animate({scrollTop: destination }, 10000);
	});
}


const arrow = document.querySelector('.arrow')

arrow.addEventListener('click', function(){
	$('.menu li a').click(function () {
		elementClick = $(this).attr('href');
		destination = $(elementClick).offset().top;
		$('body,html').animate({scrollTop: destination }, 10000);
	});
})

