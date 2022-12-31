$(document).ready(function(){
    $(".btn_menu").on("click",function(){   //.btn_menu를 클릭했을 때
        $(this).fadeOut();                  //.btn_memu가 fadeout으로 사라짐
        $("section").addClass("on");        //section에 임의클래스 on 추가
        $("nav").addClass("on");            //nav에 임의클래스 on 추가
    })
    
    $("nav li").on("click",function(){          //nav li를 클릭했을 때
        $(".btn_menu").fadeIn();                //.btn_menu fadein으로 나타남
        $("section").removeClass("on");         //section에서 임의클래스 on 삭제
        $("nav").removeClass("on");             //nav에서 임의클래스 on 삭제
        var i=$(this).index();                  //변수 i 설정
        $("section>div").removeClass("on");     //section div에서 임의클래스 on 삭제
        $("section>div").eq(i).addClass("on");  //section div에서 변수i에 임의클래스 on 추가
    })
        
    $("#front>.click").click(function(){        //#front>.click를 클릭했을 때
        $("#front").hide();                     //#front가 hide로 인해 숨겨짐(인트로 창)
    })

})//마무리