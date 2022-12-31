$(document).ready(function() {
$("article").on("mouseover",function(){     //article에 마우스를 올렸을 때
var vid=$(this).find("video").get(0);       //변수 vid에 비디오 찾기 설정
vid.curruntTime=0;
vid.play();                                 //비디오 재생

    $(this).stop().animate({width:"40%"},1000,function(){      //크기를 1초안에 40%로 만들고
    $(this).find("h3").stop().animate({right:"20px"},400);     //h3을 찾아서 0.4초안에 오른쪽에서 20px 움직인다
    $(this).find("p").stop().animate({right:"20px"},800);      //p를 찾아서 0.4초안에 오른쪽에서 20px 움직인다
    })
    $(this).find("video").stop().animate({opacity:"1"},1300)   //video를 찾아서 1.3초안에 투명도를 1로 만든다
});


$("article").on("mouseout",function(){      //article에서 마우스가 벗어났을 때
var vid=$(this).find("video").get(0);       //변수 vid에 비디오 찾기 설정
vid.pause();                                //비디오 정지
    
    $(this).stop().animate({width:"12%"},700);                  //크기를 0.7초안에 12%로만들고
    $(this).find("video").stop().animate({opacity:"0"},2000);   //video를 찾아서 2초안에 투명도를 1로 만든다
    $(this).find("h3").stop().animate({right:"-500px"},200);    //h3을 찾아서 0.2초안에 오른쪽으로 -500px 움직인다
    $(this).find("p").stop().animate({right:"-400px"},500);     //p를 찾아서 0.5초안에 오른쪽으로 -400px 움직인다
}) 
});