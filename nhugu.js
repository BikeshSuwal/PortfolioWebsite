$(document).ready(function(){
    $("#magnifier").click(function(){
        $(this).hide();
		$(".Search-box").fadeIn();
        $("#cross").fadeIn();
        
    });
	
	$("#cross").click(function(){
        $(this).hide();
		$(".Search-box").fadeOut();
        $("#magnifier").fadeIn();
        
    });
	
});