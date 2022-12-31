$(document).ready(function(){
    
//// 메인메뉴 호버
    $(".m_menu>li").hover(function(){
        $(this).children("a").css({color:"darkgreen"});
        $(".s_menu").stop().slideDown(400);
        $(".menu_bg1").stop().slideDown(400);
    },function(){
        $(this).children("a").css({color:"inherit"});
        $(".s_menu").stop().slideUp(400);
        $(".menu_bg1").stop().slideUp(400);
    });    
    
    
    
    
    
//// 서브메뉴 호버
    $(".s_menu>li>a").hover(function(){
        $(this).css({fontWeight:"bold", color:"darkgreen"});
    },function(){
        $(this).css({fontWeight:"inherit", color:"inherit"});
    });
    
    
    
    
    
//// sec_tab (new, event)
    // 첫화면
    $(".sec_tab>ul>li:eq(0)").addClass("newon")
    
    // new_tab 클릭
    $(".sec_tab>ul>li:eq(0)").click(function(){
        $(".sec_tab>ul>li").removeClass("eventon");
        $(this).addClass("newon");
        $(".num_tab").stop().animate({left:"10%"},500);
        $(".sec1").stop().animate({left:"0%"},500);
        $(".event_wrap2").fadeOut(200);
        $(".sec2").stop().animate({left:"100%"},500,function(){
            $(".new_wrap2").fadeIn(800);
        });
    });
    
    // event_tab 클릭
    $(".sec_tab>ul>li:eq(1)").click(function(){
        $(".sec_tab>ul>li").removeClass("newon");
        $(this).addClass("eventon");
        $(".num_tab").stop().animate({left:"-100%"},500);
        $(".sec1").stop().animate({left:"-100%"},500);
        $(".new_wrap2").fadeOut(200);
        $(".sec2").stop().animate({left:"0%"},500,function(){
            $(".event_wrap2").fadeIn(800);
        });
    });
    
    
    
    
    
//// num_tab 클릭
    // 첫화면
    $(".num_tab>li").eq(0).addClass("bright");
    $(".new1_wrap").fadeIn(800);
    
    // tab 변화
    $(".num_tab>li").click(function(){
        $(".num_tab>li.bright").removeClass("bright");
        $(this).addClass("bright");
    });
    
    // wrap 변화
     $(".num_tab>li").click(function(){
         
        var idx = $(this).index();
        var bg_height = $(".new_wrap>li").height();
         
        $(".new_wrap2>li").fadeOut(200);
        $(".new_wrap").stop().animate({top:(-bg_height*idx)},800,function(){
            $(".new_wrap2>li").eq(idx).fadeIn(800);
        });
    });
    
    
    
    
    
//// 자동재생
    var bg_height = $(".new_wrap>li").height();
    var play_n = 0;
    var play_total = 5;
    var play;
    
    function moving(){             //moving 변수
       
    // 클릭부분부터
    $(".num_tab>li").click(function(){
        play_n= $(this).index();
    });     
        
    if(play_n<(play_total-1)){     //n이 (5-1)보다 작으면
    play_n=play_n+1;               //n이 하나씩 증가
    }else{                         //그렇지 않으면->n이 4가되면
    play_n=0;	                   //0이 되어서 다시 진행
    };
         
    // num_tab 변화        
    $(".num_tab>li.bright").removeClass("bright");
    $(".num_tab>li").eq(play_n).addClass("bright");    
      
    // bg, wrap 변화
    $(".new_wrap2>li").fadeOut(200);
    $(".new_wrap").stop().animate({top:(-bg_height*play_n)},800,function(){
        $(".new_wrap2>li").eq(play_n).fadeIn(800);
    });   
    };
        
    var play = setInterval(moving, 6000);
    
    
    
    
    
//// btn_tab 상세보기 호버이벤트  
    $(".btn_tab>a").hover(function(){
        $(".btn_tab>a>span").stop().animate({"width":"100%"});
    },function(){
        $(".btn_tab>a>span").stop().animate({"width":"70px"});
    });
    
});