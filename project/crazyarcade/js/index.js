$(document).ready(function(){
    
    var ht=$(window).height()   //변수 ht에 윈도우의 높이값 저장
    $("section").height(ht);     //section에 윈도우의 높이값 지정
    
    $(window).on("resize",function(){   //윈도우를 리사이징 했을 때
    var ht=$(window).height()           //변수 ht에 윈도우의 높이값 저장
    $("section").height(ht)             //section에 윈도우의 높이값 지정
    });
    
    $("section").on("mousemove",function(e){    //section에서 마우스를 움직일 때
    var posX=e.pageX;                           //posX에 마우스 X좌표 저장
    var posY=e.pageY;                           //posY에 마우스 Y좌표 저장
    
    //마우스를 움직일때의 설정
    $(".p11").css({left:10-(posX/50),bottom:10+(posY/50)}) 
    $(".p21").css({left:10-(posX/40)}) 
    $(".p31").css({left:10-(posX/40)}) 
    $(".p41").css({left:10-(posX/40)}) 
    $(".p51").css({left:10-(posX/40)}) 
    $(".p61").css({left:10-(posX/40)}) 
    });
    
    $(".list li").on("click", function(e){   //list li를 클릭했을 때
    e.preventDefault();                     //넘어가는 것을 방지
    
    var ht=$(window).height()     //변수 ht에 윈도우의 높이값 저장
    var i=$(this).index()         //변수 i에 클릭한 li 순서값 저장
    var nowTop=i*ht;              //li순서값*윈도우높이값=현재 박스의 스크롤 위치값과 동일
    
        
        
        
    //여기부터 복습하기
    $("html,body").stop().animate({"scrollTop":nowTop},1400) //해당 스크롤 위치값으로 문서를 이동 
    }); 
    
    $(window).on("scroll",function(){   //윈도우에서 스크롤 했을 때
    var ht=$(window).height()           //변수 ht에 윈도우의 높이값 저장
    var scroll=$(window).scrollTop()    //변수 scroll에 현재 윈도우가 스크롤 된 거리 저장
    });
    
    for(var i=0; i<5; i++){
        if(scroll>ht*i && scroll<ht*(i+1)){
            $(".list li").removeClass("on")
            $(".list li").eq(i).addClass("on")
        }
    }
    
    $("section").on("mousewheel",function(event,delta){
        if(delta>0){
            var prev=$(this).prev().offset().top;
            $("html,body").stop().animate({"scrollTop":prev},1000,"easeOutBounce")
        }
        else if(delta<0){
            var next=$(this).next().offset().top;
            $("html,body").stop().animate({"scrollTop":next},1000, "easeOutBounce")
        }
    });
    
    

})  //마무리