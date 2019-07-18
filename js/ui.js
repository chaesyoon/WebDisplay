$(window).on('scroll', function(){

	console.log( $(this).scrollTop() );

	if($(this).scrollTop() > 800 ){
		$('#header_container').addClass('show');
	} else {
		$('#header_container').removeClass('show');
	}

	
});



$(window).scroll(function () {
  if($(window).scrollTop() == 0) {
   $('.icon').show();
  } else {
   $('.icon').hide();
  }
 });