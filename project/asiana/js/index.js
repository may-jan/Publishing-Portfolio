$(document).ready(function(){
    
    var timer=setInterval(function(){       // 일정시간 반복
    var now=new Date();                     //
    var hr=now.getHours();                  //시 추출
    var min=now.getMinutes();               //분 추출
    var sec=now.getSeconds();               //초 추출
        
        
    //hr이 10이상이면 hr 그대로 표현, 아니라면 hr 앞에 0 붙여서 표현
    if(hr>=10){hNum=hr;} else {hNum="0"+hr;}
    
    //min이 10이상이면 hr 그대로 표현, 아니라면 min 앞에 0 붙여서 표현
    if(min>=10){mNum=min;} else {mNum="0"+min;}
        
    //sec가 10이상이면 hr 그대로 표현, 아니라면 sec 앞에 0 붙여서 표현
    if(sec>=10){sNum=sec;} else {sNum="0"+sec;}
        
    
    $("p span").eq(0).text(hNum)        //p의 첫번째 span=시
    $("p span").eq(1).text(mNum)        //p의 두번째 span=분
    $("p span").eq(2).text(sNum)        //p의 세번째 span=초
    },1000)
    
    
    var now=new Date();                    
    var hr=now.getHours();                  //시 추출
    
    
    if(hr>=5 && hr<11){                     //hr이 5시~10시이면
        $("#wrap").removeClass();           //#wrap 삭제
        $("#wrap").addClass("spring");      //#wrap에 spring 삽입(임의클래스)
        $("nav li").removeClass();          //nav li 삭제
        $("nav li").eq(0).addClass("on");   //nav li 1에 on 삽입(임의클래스)
        }
        
    
    else if(hr>=11 && hr<16){               //hr이 11시~15시이면
        $("#wrap").removeClass();           //#wrap 삭제
        $("#wrap").addClass("summer");      //#wrap 에 summer 삽입(임의클래스)
        $("nav li").removeClass();          //nav li 삭제
        $("nav li").eq(1).addClass("on");   //nav li 2에 on 삽입(임의클래스)
        }
    
    else if(hr>=16 && hr<20){               //hr이 16시~19시이면
        $("#wrap").removeClass();           //#wrap 삭제
        $("#wrap").addClass("fall");        //#wrap 에 fall 삽입(임의클래스)
        $("nav li").removeClass();          //nav li 삭제
        $("nav li").eq(2).addClass("on");   //nav li 3에 on 삽입(임의클래스)
        }
    
    else if(hr>=20 && hr<25){               //hr이 20시~24시이면
        $("#wrap").removeClass();           //#wrap 삭제
        $("#wrap").addClass("winter");      //#wrap 에 winter 삽입(임의클래스)
        $("nav li").removeClass();          //nav li 삭제
        $("nav li").eq(3).addClass("on");   //nav li 4에 on 삽입(임의클래스)
        }
    
    $("nav li").on("click", function(){         //nav li를 클릭했을 떄
    var className=$(this).children("a").text(); //변수설정 (선택한 li의 a 속 텍스트)
    $("nav li").removeClass();                  //nav li에서 모두 삭제
    $(this).addClass("on");                     //클릭하는 곳에 임의클래스 on 삽입
    $("#wrap").removeClass();                   //#wrap에서 모두 삭제
    $("#wrap").addClass(className);             //#wrap에 변수(선택한 li의 a 속 텍스트) 삽입
    })
    })