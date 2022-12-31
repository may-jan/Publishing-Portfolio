$(document).ready(function(){
    
    /*----------------------------- header ----------------------------*/
    /*-- 메인메뉴 호버 --*/
    $(".mainmenu>li").mouseenter(function(){
        $(this).find(".submenu").stop().show();
        $(".menu_bg").stop().slideDown("fast");
        $(".dim").show();
    });
    
    $(".mainmenu>li").mouseleave(function(){
        $(this).find(".submenu").stop().hide();
        $(".menu_bg").stop().slideUp("fast");
        $(".dim").hide();
    });
    
    /*-- 서브메뉴 호버 --*/
    $(".submenu li").hover(function(){
        $(this).find("a").css({color:"red"});
    }, function(){
        $(this).find("a").css({color:"inherit"});
    });
    
    
    
    
    
    /*----------------------------- section1 - box1 ----------------------------*/
    /*-- 첫 화면에서 상태 --*/
    $(".img_banner a:eq(1), .img_banner a:eq(2), .img_banner a:eq(3), .img_banner a:eq(4)").hide();
    
    /*-- 자동재생 --*/
    var box1_play;
    
    function img_banner_slide(){
    $(".img_banner a:eq(0)").fadeOut(500,function(){
        $(this).appendTo(".img_banner");
    });
    $(".img_banner a:eq(1)").fadeIn(500);
    };
    
    var box1_play = setInterval(img_banner_slide,3000);
    
    
    
    
    
    /*----------------------------- section1 - box2 ----------------------------*/
    /*-- 첫 화면에서 상태 --*/
    $(".box2_article a:eq(1), .box2_article a:eq(2), .box2_article a:eq(3), .box2_article a:eq(4)").hide();
    
    $(".box2_tab a:eq(0)").addClass("active");
    
    
    /*-- 탭 클릭시 --*/
    $(".box2_tab a").click(function(e){
        e.preventDefault();
        var box2_index = $(this).index();
        $(".box2_article a").fadeOut(300);
        $(".box2_article a").eq(box2_index).fadeIn(300);
        $(".box2_tab a").removeClass("active");
        $(this).addClass("active");
    });
    
    
    /*-- 자동재생 --*/
    var box2_n=0;
    var box2_total=5;
    var box2_play;

    function box2_moving(){
    if(box2_n<(box2_total-1)){
    box2_n=box2_n+1;
    }else{
    box2_n=0;
    };
    $(".box2_article a").fadeOut(500);
    $(".box2_article a").eq(box2_n).fadeIn(500);
    $(".box2_tab a").removeClass("active");
    $(".box2_tab a").eq(box2_n).addClass("active");
    };
    
    var box2_play=setInterval(box2_moving,3000);
   
    
    
   
    
    /*----------------------------- section1 - box3 ----------------------------*/
    /*-- hover 옵션 --*/
    $(".box3").hover(function(){
        $(".box3_hover_bg").fadeIn(100);
        $(".box3_hover_text, .box3_hover_img").show();
    }, function(){
        $(".box3_hover_bg").fadeOut(100);
        $(".box3_hover_text, .box3_hover_img").hide();
    });
    
    
    
    
    
    /*----------------------------- section1 - box4 ----------------------------*/
    /*-- 첫 화면에서 상태 --*/
    $(".box4_tab a:eq(0)").addClass("active");
    

    /*-- hover 옵션 --*/
    $(".box4_article a").hover(function(){
        $(this).find(".box4_hover_bg").fadeIn(100);
        $(this).find(".box4_hover_text, .box4_hover_img").show();
    }, function(){
        $(this).find(".box4_hover_bg").fadeOut(100);
        $(this).find(".box4_hover_text, .box4_hover_img").hide();
    });
    
    
    /*-- 탭 클릭시 --*/
    $(".box4_tab a").click(function(e){
        e.preventDefault();
        var box4_index = $(this).index();
        $(".box4_article").animate({marginLeft:box4_index*"-280"});
        $(".box4_tab a").removeClass("active");
        $(this).addClass("active");
    });
    
    
    /*-- 자동재생 --*/
    var box4_n=0;
    var box4_total=5;
    var box4_play;
    
    function box4_moving(){
    if(box4_n<(box4_total-1)){
    box4_n=box4_n+1;
    }else{
    box4_n=0;
    };        
    $(".box4_article").animate({marginLeft:box4_n*"-280"});
    $(".box4_tab a").removeClass("active");
    $(".box4_tab a").eq(box4_n).addClass("active");
    };
    
    var box4_play=setInterval(box4_moving,3000);
    
 
    
    
    
    /*----------------------------- section1 - box5 ----------------------------*/
    /*-- 첫 화면에서 상태 --*/
    $(".box5_article a:eq(1), .box5_article a:eq(2), .box5_article a:eq(3), .box5_article a:eq(4), .box5_article a:eq(5)").hide();
    
    $(".box5_tab a:eq(0)").addClass("active");
    

    /*-- hover 옵션 --*/
    $(".box5_article a").hover(function(){
        $(this).find(".box5_hover_bg").fadeIn(100);
        $(this).find(".box5_hover_text, .box5_hover_img").show();
    }, function(){
        $(this).find(".box5_hover_bg").fadeOut(100);
        $(this).find(".box5_hover_text, .box5_hover_img").hide();
    });
    
    
    /*-- 탭 클릭시 --*/
    $(".box5_tab a").click(function(e){
        e.preventDefault();
        var box5_index = $(this).index();
        $(".box5_article a").fadeOut(300);
        $(".box5_article a").eq(box5_index).fadeIn(300);
        $(".box5_tab a").removeClass("active");
        $(this).addClass("active");
    });
    
    
    /*-- 자동재생 --*/
    var box5_n=0;
    var box5_total=6;
    var box5_play;

    function box5_moving(){
    if(box5_n<(box5_total-1)){
    box5_n=box5_n+1;
    }else{
    box5_n=0;
    };
    $(".box5_article a").fadeOut(500);
    $(".box5_article a").eq(box5_n).fadeIn(500);
    $(".box5_tab a").removeClass("active");
    $(".box5_tab a").eq(box5_n).addClass("active");
    };
    
    var box5_play=setInterval(box5_moving,3000);
    
    
    
    
    
    /*----------------------------- section1 - box8 ----------------------------*/
    /*-- 첫 화면에서 상태 --*/
    $(".box8_article a:eq(1), .box8_article a:eq(2), .box8_article a:eq(3)").hide();
    
    $(".box8_tab a:eq(0)").addClass("active");
    

    /*-- hover 옵션 --*/
    $(".box8_article a").hover(function(){
        $(this).find(".box8_hover_bg").fadeIn(100);
        $(this).find(".box8_hover_text, .box8_hover_img").show();
    }, function(){
        $(this).find(".box8_hover_bg").fadeOut(100);
        $(this).find(".box8_hover_text, .box8_hover_img").hide();
    });
    
    
    /*-- 탭 클릭시 --*/
    $(".box8_tab a").click(function(e){
        e.preventDefault();
        var box8_index = $(this).index();
        $(".box8_article a").fadeOut(300);
        $(".box8_article a").eq(box8_index).fadeIn(300);
        $(".box8_tab a").removeClass("active");
        $(this).addClass("active");
    });
    
    
    /*-- 자동재생 --*/
    var box8_n=0;
    var box8_total=4;
    var box8_play;

    function box8_moving(){
    if(box8_n<(box8_total-1)){
    box8_n=box8_n+1;
    }else{
    box8_n=0;
    };
    $(".box8_article a").fadeOut(500);
    $(".box8_article a").eq(box8_n).fadeIn(500);
    $(".box8_tab a").removeClass("active");
    $(".box8_tab a").eq(box8_n).addClass("active");
    };
    
    var box8_play=setInterval(box8_moving,3000);
    
    
    
    
    
    /*----------------------------- section1 - box9 ----------------------------*/
    $(".box9_article a:eq(1), .box9_article a:eq(2), .box9_article a:eq(3)").hide();
    
    $(".box9_tab a:eq(0)").addClass("active");
    

    /*-- hover 옵션 --*/
    $(".box9_article a").hover(function(){
        $(this).find(".box9_hover_bg").fadeIn(100);
        $(this).find(".box9_hover_text, .box9_hover_img").show();
    }, function(){
        $(this).find(".box9_hover_bg").fadeOut(100);
        $(this).find(".box9_hover_text, .box9_hover_img").hide();
    });
    
    
    /*-- 탭 클릭시 --*/
    $(".box9_tab a").click(function(e){
        e.preventDefault();
        var box9_index = $(this).index();
        $(".box9_article a").fadeOut(300);
        $(".box9_article a").eq(box9_index).fadeIn(300);
        $(".box9_tab a").removeClass("active");
        $(this).addClass("active");
    });
    
    
    /*-- 자동재생 --*/
    var box9_n=0;
    var box9_total=7;
    var box9_play;

    function box9_moving(){
    if(box9_n<(box9_total-1)){
    box9_n=box8_n+1;
    }else{
    box9_n=0;
    };
    $(".box9_article a").fadeOut(500);
    $(".box9_article a").eq(box9_n).fadeIn(500);
    $(".box9_tab a").removeClass("active");
    $(".box9_tab a").eq(box9_n).addClass("active");
    };
    
    var box9_play=setInterval(box9_moving,3000);
    
    
    
    
    
    /*----------------------------- section2 ----------------------------*/
    /*-- 첫 화면에서 상태 --*/
    $(".sec2_pro>ul").hide();
    $(".sec2_pro>ul:eq(0)").show();
    $(".sec2_bg>div").hide();
    $(".sec2_bg>div:eq(0)").show();
    $(".sec2_tab a:eq(0)").css({"border-bottom":"2px solid #fff"});
    
    /*-- 탭 클릭시 --*/
    $(".sec2_tab a").click(function(e){
        e.preventDefault();
        var sec2_index = $(this).index();
        
        $(".sec2_tab a").css({"border-bottom":"none"});
        $(this).css({"border-bottom":"2px solid #fff"});
        
        $(".sec2_bg>div").fadeOut();
        $(".sec2_bg>div").eq(sec2_index).fadeIn();
        
        $(".sec2_pro>ul").hide();
        $(".sec2_pro>ul").eq(sec2_index).show();
    });
    
}); 
