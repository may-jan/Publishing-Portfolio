$(document).ready(function(){
    
$(window).scroll(function(){
var sc=$(window).scrollTop();
    
$("#scroll_text").text(sc);
})
    
$("#navi li:nth-child(1)").click(function(){
$("body,html").animate({scrollTop:2800},1000);
})
    
$("#navi li:nth-child(2)").click(function(){
$("body,html").animate({scrollTop:4500},1000);
})
$("#navi li:nth-child(3)").click(function(){
$("body,html").animate({scrollTop:6000},1000);
})

    
/* scrolltop 위트. 펠롱, 거멍 */
$(window).scroll(function(){
    
var num=$(window).scrollTop();
 
if(num>300){
$(".dd img").stop().animate({left:"0"},100);
}
if(num>1588){
$(".vid").slideDown(800);   
$("#slidewrap0").delay(1400).animate({marginTop:"0"},700);
}    
    
if(num>2400){
    $("#page2 .name1 img").animate({marginTop:"80"},700);
    $("#page2 .beer1 img").delay(700).animate({marginTop:"100"},700);
    $("#page2 .beer1 p").delay(700).animate({marginTop:"100"},700);
    $("#slidewrap1").delay(1400).animate({marginTop:"0"},700);
}
if(num>4000){
    $("#page3 .name2 img").animate({marginTop:"0"},700);
    $("#page3 .beer2 img").delay(700).animate({marginTop:"0"},700);
    $("#page3 .beer2 p").delay(700).animate({marginTop:"0"},700);
    $("#slidewrap2").delay(1400).animate({marginTop:"0"},700);
}

if(num>5500){
    $("#page4 .name3 img").animate({marginTop:"0"},700);
    $("#page4 .beer3 img").delay(700).animate({marginTop:"0"},700);
    $("#page4 .beer3 p").delay(700).animate({marginTop:"0"},700);
    $("#slidewrap3").delay(1400).animate({marginTop:"0"},700);
}
    
if(num>6800){
    $(".mint,.banner_wraper").animate({left:"0"},800);
    $("#page5 footer").animate({right:"0"},800);
}
})//scroll end
    
    

/*  하단 배너  */
window.onload = function() {
var bannerLeft=0;
var first=1;
var last;
var imgCnt=0;
var $img = $(".banner_wraper img");
var $first;
var $last;
$img.each(function(){   
$(this).css("left",bannerLeft);
bannerLeft += $(this).width()+100;
$(this).attr("id", "banner"+(++imgCnt));  
});

            
if( imgCnt > 9){               
last = imgCnt;
setInterval(function() {
$img.each(function(){
$(this).css("left", $(this).position().left-1); 
});
$first = $("#banner"+first);
$last = $("#banner"+last);
if($first.position().left < -200) {    
$first.css("left", $last.position().left + $last.width()+5 );
first++;
last++;
if(last > imgCnt) { last=1; }   
if(first > imgCnt) { first=1; }
}
}, 30);        
}
};
  
    
      
    
/* top btn */
$("#top_btn").click(function(e){
    e.preventDefault();
    $("body,html").animate({scrollTop:"0"},1000);
})    
    
    
    
    
    
})