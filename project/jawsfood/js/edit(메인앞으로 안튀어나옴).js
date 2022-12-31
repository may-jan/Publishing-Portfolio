$(document).ready(function(){
    $("body,html").stop().animate({"scrollTop":0},1500,"swing");
    
    $(window).scroll(function(){
    var scroll=$(this).scrollTop();
    
    //각 박스의 현재 Z축 위치 + 스크롤한 만큼의 거리값 -> 다시 대입
    $("section>article").eq(0).css({"transform":"translateZ("+(0+scroll)+"+px)"});
    $("section>article").eq(1).css({"transform":"translateZ("+(-5000+scroll)+"+px)"});
    $("section>article").eq(2).css({"transform":"translateZ("+(-10000+scroll)+"+px)"});
    $("section>article").eq(3).css({"transform":"translateZ("+(-15000+scroll)+"+px)"});
     
    /* for 작성시
    for(var i=0; i<5; i++){
    $("section>article)>eq(i).css({transfrom:"translateZ(" + parseInt((-5000*i)+scroll) + "px)"});
    */
            
      
    //특정 스크롤 구간에서 스크롤 네비게이션과 박스 활성화
    if(scroll>=0 && scroll<5000) {
        $(".scrollNavi li").removeClass();
        $(".scrollNavi li").eq(0).addClass("on");
        $("article").removeClass();
        $("article").eq(0).addClass("on");
    }
    if(scroll>=5000 && scroll<10000) {
        $(".scrollNavi li").removeClass();
        $(".scrollNavi li").eq(1).addClass("on");
        $("article").removeClass();
        $("article").eq(1).addClass("on");
    }    
    if(scroll>=10000 && scroll<15000) {
        $(".scrollNavi li").removeClass();
        $(".scrollNavi li").eq(2).addClass("on");
        $("article").removeClass();
        $("article").eq(2).addClass("on");
    }    
    if(scroll>=15000 && scroll<20000) {
        $(".scrollNavi li").removeClass();
        $(".scrollNavi li").eq(3).addClass("on");
        $("article").removeClass();
        $("article").eq(3).addClass("on");
    } 
    });  


    /* 줄여서 쓰면
    if(scroll=>i*5000 && scroll<(i+1)*5000){
        $(".scrollNavi li").removeClass();
        $(".scrollNavi li").eq(i).addClass("on");
        $("article").removeClass();
        $("article").eq(i).addClass("on");
    };
    */     
    
    
    
    //메뉴 클릭 시 스크롤 이동
    $(".scrollNavi li").eq(0).on("click",function(){
        $("body,html").stop().animate({"scrollTop":0});
    });
    $(".scrollNavi li").eq(1).on("click",function(){
        $("body,html").stop().animate({"scrollTop":5000});
    });
    $(".scrollNavi li").eq(2).on("click",function(){
        $("body,html").stop().animate({"scrollTop":10000});
    });
    $(".scrollNavi li").eq(3).on("click",function(){
        $("body,html").stop().animate({"scrollTop":15000});
    });
    
    /* 줄여서 쓰면
    $(".scrollNavi li").on("click",function(){
    var a=$(this).index();
    $("body,html").stop().animate({"scrollTop":5000*a},1500,"swing");
    });
    */
    
    
    
    // 마우스무브 설정
    $("body").on("mousemove",function(event){
        var posX=event.pageX/100;
        var posY=event.pageY/150;
        
        $(".obj11").css({left:350-posX, bottom:70-posY})
        $(".obj12").css({left:-593+posX, bottom:-85+posY})
        $(".obj13").css({left:-100+posX, bottom:-20+posY})
        
        $(".obj21").css({right:-710-posX, bottom:-420-posY})
        $(".obj22").css({right:-50+posX, bottom:-100+posY})
        
        $(".obj31").css({right:110-posX, bottom:70-posY})
        $(".obj32").css({left:100-posX, bottom:-160+posY})  
        
        $(".obj41").css({left:350+posX, bottom:-150-posY})
        $(".obj42").css({right:167+posX, top:-255-posY})
    });   
    
}) //end