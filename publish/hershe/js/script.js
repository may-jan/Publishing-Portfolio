$(function(){
	
	
// ----- 메인슬라이더 ----- //
var w=$(window).width();
var h;
var total=6;
var current=0;
var distance=new Array();
$(".key_control li").eq(current).addClass("active");

for(var i=0; i<total; i++){
distance.push(i*w);
}
// console.log("distance : "+distance.join(", "));

$('a[href=""]').click(function(e){
e.preventDefault();
});

var id=setInterval(function(){
rightMoving();
}, 2500);

$(window).resize(function(){
setTimeout(function(){
w=$(window).width();
h=$(".keyvisual_inner img").height();
// console.log("h : "+h);

$(".keyvisual li").animate({width:w}, 0);
$(".keyvisual").animate({height:h}, 0);

distance=new Array();

for(var i=0; i<total; i++){
distance.push(i*w);
}
// console.log("distance : "+distance.join(", "));
}, 100);
});
$(window).trigger("resize");

$("nav > ul").hover(
function(){
$(this).addClass("active");
},
function(){
$(this).removeClass("active");
}
);
$("nav > ul > li > a").hover(
function(){
$(this).addClass("active");
},
function(){
$(this).removeClass("active");
}
);
$("nav a").focusin(function(){
var parentUl=$(this).parents("nav").children("ul")
if(parentUl.hasClass("active") == false){
parentUl.addClass("active");
}
});
$("nav > ul").focusout(function(){
var parentUl=$(this).parents("nav").children("ul")
if(parentUl.hasClass("active") == true){
parentUl.removeClass("active");
}
});
$(".key_control li, .control_btn .prev, .control_btn .next").hover(
function(){
clearInterval(id);
},
function(){
id=setInterval(function(){
rightMoving();
}, 2500);
}
);

function leftMoving(){
$(".keyvisual ul li:last").clone().prependTo(".keyvisual ul");
$(".keyvisual ul").stop().animate({"margin-left":"-="+w+"px"}, 0);
$(".keyvisual ul").stop().animate({"margin-left":"+="+w+"px"}, 400, function(){
$(".keyvisual ul li:last").remove();

if(current > 0){
current--;
}else{
current=total-1;
}
// console.log("current : "+current);
$(".key_control li").removeClass("active");
$(".key_control li").eq(current).addClass("active");

var arrayData=distance.shift();
distance.push(arrayData);
// console.log("distance : "+distance.join(", "));
});
}
function rightMoving(){
$(".keyvisual ul li:first").clone().appendTo(".keyvisual ul");
$(".keyvisual ul").stop().animate({"margin-left":"-="+w+"px"}, 300, function(){
$(".keyvisual ul").css({"margin-left":"+="+w+"px"});
$(".keyvisual ul li:first").remove();

if(current < total-1){
current++;
}else{
current=0;
}
// console.log("current : "+current);
$(".key_control li").removeClass("active");
$(".key_control li").eq(current).addClass("active");

var arrayData=distance.pop();
distance.unshift(arrayData);
// console.log("distance : "+distance.join(", "));
});
}

$(".control_btn .prev").click(function(){
leftMoving();
});
$(".control_btn .next").click(function(){
rightMoving();
});
$(".key_control li").click(function(){
$(".key_control li").removeClass("active");
$(this).addClass("active");

var x=(-1)*distance[$(this).index()];
// console.log("x : "+x);
$(".keyvisual ul").stop().animate({"margin-left":x+"px"}, 300);
});
	
	
	
	
	
// ----- 하단 클릭 슬라이더 ----- //	
var slide1=$('.area ul');
var slideList1=$('.area ul li ');
var slideListWidth1=slideList1.width();
function left1(){
$('.area ul>li:last').insertBefore('.area ul>li:first');
slide1.css({left:-slideListWidth1}).stop().animate({left:0},500);
}
function right1(){
slide1.stop().animate({left:-slideListWidth1},500, function(){
$('.area ul>li:first').insertAfter('.area ul>li:last');
slide1.css({left:0});
});
}

$('.left1').click(function(){
left1();
return false;
});
$('.right1').click(function(){
right1();
return false;
});     	
		
	
	
	
	
// ----- 토글 열기 닫기 ----- //	
$(".pop li.pop_menu").toggle(function(){
	$(".pop").stop().animate({marginTop:0},200);
	$(this).find("img").attr("src","images/pop_close.png");
},function(){
	$(".pop").stop().animate({marginTop:"-253px"},200);
	$(this).find("img").attr("src","images/pop_open.png");
});
	
	
	
		
// ----- 팝업창 ----- //		
$("#popup").show();
$(".close").click(function(){
	$("#popup").hide();
});
	
	
	
		
// ----- 빠른메뉴 고정 ----- //			
$("#home").click(function(e){
	e.preventDefault();
	$(this).hide();
	$("#menu1").animate({opacity:"1", zIndex:"999px"});

	
// 이미지 반복변경
setInterval(function(){
	$("#menu1 li:eq(5)").find("img").attr("src","images/quick_06_on.jpg");
setTimeout(function(){
	$("#menu1 li:eq(5)").find("img").attr("src","images/quick_06_off.jpg");
},500)
},1000)
});	
	
	
	
	
// ----- 로고 ----- //	
$(window).scroll(function(){
	var sct=$(window).scrollTop();
	var adTop=$("#line").offset();
	
if(sct>adTop.top){
	$("#logo").slideDown(100).hide();
	$("#top>a>img").css({left:"0", top:"29px",opacity:"1"});
}else{
	$("#logo").slideDown(100).show();
	$("#top>a>img").css({opacity:"0"});
}
});
	
	
	
	
// ----- 이달의 포커스 ----- //		
$(".board1_img").mouseenter(function(){
	$(this).find("img").css({transform:"scale(1.2)",transition:"all 0.5s"})
});
$(".board1_img").mouseleave(function(){
	$(this).find("img").css({transform:"scale(1)",transition:"all 0.5s"})
});
	
	
	
	
// ----- 안티에이징 사진 호버 ----- //		
$("#banner2 .s1").mouseenter(function(){
	$(this).find("img").css({transform:"scale(1.1)", transition:"all 0.5s"})
});
$("#banner2 .s1").mouseleave(function(){
	$(this).find("img").css({transform:"scale(1)", transition:"all 0.5s"})
});
	
	

	
// ----- dr.hershe 호버 ----- //
$(".drwrap").mouseenter(function(){
	$(".z2").animate({top:"0"},500)
});
$(".drwrap").mouseleave(function(){
	$(".z2").animate({top:"1337px"},500)
});
	
	
	
	
// ----- footer 아이콘 호버 ----- //
$(".foot_icon li").mouseenter(function(){
	$(this).css({transform:"scale(0.8)", transition:"all 0.5s"});
});
$(".foot_icon li").mouseleave(function(){
	$(this).css({transform:"scale(1)", transition:"all 0.5s"});
});
	

	
	
// ----- top 버튼 ----- //
$("#page_up_btn").click(function(e){
	e.preventDefault();
	$("body,html").animate({scrollTop:"0"},1000)
});

  	
	
	

});    