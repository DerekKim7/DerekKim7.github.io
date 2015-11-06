//javascript
$(document). ready(function(){
$("#start").click(function(){
	$("#balls").css("background-image", "url('http://images6.alphacoders.com/310/310337.jpg')");
$("#start").hide();
$("#b-bounce").hide();
$("#platform").css("display", "block");
$("#ball").hide();
$("#shadow").hide();
$("#platform2").show();
$("#platform3").show();
$("#platform4").show();
$("#platform5").show();
$("#platform6").show();
$("#yellowball").show();
$("#rightbutton").show();
$("#leftbutton").show();
$("#bean").show();
$("#bean1").show();
$("#bean2").show();
	});
	$("#rightbutton").click(function(){
		$("#yellowball").css("left", "50%");
	});

});