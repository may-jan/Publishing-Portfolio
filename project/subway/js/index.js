$(document).ready(function(){
var imgs="";

for(var i=0; i<0471; i++){
    if(i<10){
    imgs+="<img src='images/pic/pic000"+i+".jpg'/>"   
    }
    if(i>=10 && i<100){
    imgs+="<img src='images/pic/pic00"+i+".jpg'/>"   
    }
    if(i>=100){
    imgs+="<img src='images/pic/pic0"+i+".jpg'/>"   
    }
}
    
$("#pic").html(imgs);   
    
    
$("body").on("mousemove",function(e){
var wid=$(window).width();
var posX=e.pageX;
var percent=Math.floor((posX/wid)*250)

$("h3").text(percent);
$("#pic>img").hide();
$("#pic>img").eq(percent).show();
})
    
})