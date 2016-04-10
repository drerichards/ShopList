$(document).ready(function () {

  $(".entry-btn").click(function () {
  	addBuyItem(); //call out to method upon btn click
  });





 function addBuyItem() {
 	var buyItem = $(".textbox").val(); //assign text value to a variable
	$(".textbox").val(""); //clear textbox
	$(".buy-list").append("<li>"+buyItem+"</li>"); //add text box item and add new line
	$("li").before('<img src="../images/basket.png"/>'); 

 }

});