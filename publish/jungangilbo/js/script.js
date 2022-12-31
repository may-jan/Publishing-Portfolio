$(function(){
var t;         //윈도우 상단 좌표 지정하는 변수
var distance;  //비디오 불투명도를 조절하는 변수 선언
    
$(window).scroll(function(){    //브라우저 스크롤 했을 때
var t=$(window).scrollTop();    //변수 t에 브라우저 스크롤 값 저장
    
if(t>=$(".section1").offset().top && t<$(".section2").offset().top){
//section1의 높이값 <= t < section2의 높이값
distance=(t-160)/200;   //변수 distance에 비디오의 투명도 값 저장, -160은 미리 나오게 하려고
if(distance>0){         //distance가 0보다 클 경우
$(".video").css({opacity:(1-distance)});       //.video의 투명도를 1-distance로 설정
}
cssAnimation("type1");    
}
else if(t>=$(".section2").offset().top && t<$(".section3").offset().top){
cssAnimation("type2");
}
else if(t>=$(".section3").offset().top && t<$(".section4").offset().top){
cssAnimation("type1");   
}
else if(t>=$(".section4").offset().top && t<$(".section5").offset().top){
cssAnimation("type2");   
}
else if(t>=$(".section5").offset().top && $("body").height()){
cssAnimation("type1");
}
})//scroll end

function cssAnimation(type){
if(type=="type1"){      //type이 type1이면
$("body").stop().animate({backgroundColor:"#f1f1f1"},300);      //바디 배경색
$(".textbox").stop().animate({color:"#555"},300);               //textbox 폰트 색상
$(".textbox .fontcolor").stop().animate({color:"#164778"},300); //fontcolor 폰트 색상
}else{      //type이 type2이면
$("body").stop().animate({backgroundColor:"#555"},300);         //바디 배경색
$(".textbox").stop().animate({color:"#fff"},300);               //textbox 폰트 색상
$(".textbox .fontcolor").stop().animate({color:"#aaa"},300);    //fontcolor 폰트 색상  
}   
}//변수 cssAnimation end

})//end