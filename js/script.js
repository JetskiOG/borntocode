$(document).ready(function(){
	$('.header_burger').click(function(event){
		$('.header_burger,.header_menu').toggleClass('active');
		$('body').toggleClass('lock');
	});

	$('.header_link').click(function(event){
		$('.header_burger,.header_menu').removeClass('active');
		$('body').removeClass('lock');
	});

	$(window).scroll(function(){
    if ( $(this).scrollTop() > 1 ) {
      $('.header').addClass('affix');
    } else {
      $('.header').removeClass('affix');
    }
    });
	});

$(document).ready(function(){
	$('.slider').slick({
		arrows:true,
		dots:true,
		slidesToShow:1,
		autoplay:true,
		speed:1000,
		autoplaySpeed:2500,
		
	});
});
function plus(n) {
 var cena=document.getElementById("cena_"+n);
 var col=document.getElementById("col_"+n);
 var itog=document.getElementById("itog");
 
 col.innerHTML=1+Number(col.innerHTML);
 itog.innerHTML=Number(itog.innerHTML)+Number(cena.innerHTML);
}
function minus(n) {
 var cena=document.getElementById("cena_"+n);
 var col=document.getElementById("col_"+n);
 var itog=document.getElementById("itog");
 
 if(col.innerHTML!="0") {
  col.innerHTML=Number(col.innerHTML)-1;
  itog.innerHTML=Number(itog.innerHTML)-Number(cena.innerHTML);
 }
}
 


