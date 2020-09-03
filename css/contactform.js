jQuery(document).ready(function($) {

$(".ajax-contact-form").submit(function() {
var str = $(this).serialize();

$.ajax({
type: "POST",
url: "../php/contact.php",
data: str,
success: function(msg) {
if(msg == 'OK') {
result = '<div class="nofication"><p class="nofication_title"><span>Ваш заказ принят</span>Я свяжусь с вами в ближайшее время</p></div>';
$(".fields").hide();
} else {
result = msg;
}
$('.note').html(result);
}
});
return false;
});
});