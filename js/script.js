$(document).ready(function(){
	$('.header_burger').click(function(event){
		$('.header_burger,.header_menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
	$(window).scroll(function(){
    if ( $(this).scrollTop() > 1 ) {
      $('.header').addClass('affix');
    } else {
      $('.header').removeClass('affix');
    }
    });
});
