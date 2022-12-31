$(document).ready(function(){
    
    //최상단 팝업
    $("#header_box1_close").click(function(){
        $("#header_box1").hide();
    })
    
    //펼치기
    $("#banner_menu li:last-child").click(function(){
        $("#banner_menu li:last-child").hide();
        $("#banner_menu li:nth-child(2)").hide();
        $("#banner_menu li:nth-child(3)").hide();
        $("#banner_menu li:nth-child(4)").hide();
        $("#banner_menu li:nth-child(5)").hide();
        $("#banner_menu li:first-child").show();
    })
    $("#banner_menu li:first-child").click(function(){
        $("#banner_menu li:first-child").hide();
        $("#banner_menu li:nth-child(2)").show();
        $("#banner_menu li:nth-child(3)").show();
        $("#banner_menu li:nth-child(4)").show();
        $("#banner_menu li:nth-child(5)").show();
        $("#banner_menu li:last-child").show();
    })
    
    //티켓예매랭킹
    $("#section4_content_title li").click(function(){
        $(this).css({backgroundColor:"#fff", border:"1px solid #000", borderBottom:"none"})
        $(this).siblings().css({backgroundColor:"#f8f8f8", border:"1px solid #ddd", borderBottom:"1px solid #000"})
        $("#section4_wrap>ul").eq($(this).index()).show()
                            .siblings().hide();
    })
    
    //오른쪽 바
    right_toggle = 0;
    $("#right_bt").click(function(){
        if(right_toggle == 0 ){
        right_toggle=1;
        $("#right").animate({"right":"-110px"},400)   
        }
        else if(right_toggle == 1 ){
        rigth_toggle=0;
        $("#right").animate({"right":"0px"},400)
        }
    })
    
    
    //흘러가는배너
    $(function(){
	var dir=-1;//방향
	var speed=0.5;//속도
	var loc=1;//위치

    setTimeout(banner_ani,100);

    function banner_ani(){
        loc+=speed*dir;

        if(loc<=-930&& dir<0){loc=0}
        if(loc>=0 && dir>0){loc=-930}

        $('#bannerinner').css("left",loc)
        setTimeout(banner_ani,10)
    }

    $('#banner2').mouseenter(function(){
        speed=0.5
    })
    $('#banner2').mouseleave(function(){
        speed=0.5
    })
    $('.left').mouseenter(function(){
        dir=-1
        speed=1
    })
    $('.right').mouseenter(function(){
        dir=1
        speed=1
    })
    })

    
})  //마무리