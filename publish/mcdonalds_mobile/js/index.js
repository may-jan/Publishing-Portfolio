$(document).ready(function(){

//----- 탭 버튼 -----//
$("#tab").click(function(e){
	e.preventDefault();
	$("nav").addClass("on");
	$("#all_wrap").addClass("on");
	$("#dim").addClass("on");
});



//----- 닫기버튼 -----//
$("#x_btn").click(function(e){
	e.preventDefault();
	$("nav").removeClass("on");
	$("#all_wrap").removeClass("on");
	$("#dim").removeClass("on");
	if($(".smenu").hasClass("on")){
		$(".smenu").removeClass("on");
	}
});


	
//----- 서브메뉴 -----//
$("nav>ul>li").click(function(e){
	e.preventDefault();

	if($(this).find(".smenu").hasClass("on")){
	$(this).find(".smenu").removeClass("on");
    }else{
	$(".smenu").removeClass("on");
	$(this).find(".smenu").addClass("on");
   	}
});

	

	
//----- 프로모션,이벤트/푸터 링크 방지 -----//
$("#promotion .promotion_wrap li, .footerwrap .footertop li a").click(function(e){
	e.preventDefault();
	});
	
	
});	//end