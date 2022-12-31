$(document).ready(function(){

var numAc=$("article").size();		//article의 갯수 저장
var widSec=220*numAc;				//widSec에 (220*article의갯수) 저장 -> 모든 article의 총 넓이
var widTotal=widSec+600;			//widTotal에 (article의 총 넓이+600) 저장 -> 패널이 하나 열렸을 때의 넓이
	
$("section").width(widTotal);		//section의 넓이에 widTotal(article의 총 넓이+600) 값 대입
$("body").height(widSec);			//body의 높이에 widSec(200*article의갯수) 값 대입
$("html,body").animate({"scrollTop":widSec},2000);		//문서의 스크롤 거리를 widSec(200*article의 갯수)으로 변경
	
	
$(window).on("scroll",function(){		//브라우저를 스크롤 했을 때
var scroll=$(this).scrollTop();			//scroll에 현재 스크롤 한 만큼의 거리 저장
$("section").stop().animate({"left":-scroll},500);		//section의 left값을 스크롤한 거리만큼 마이너스로 이동
})
	

$("article h2").on("click",function(e){		//article h2 클릭시
e.preventDefault();							//화면 넘어가는 것 방지
var parindex=$(this).parent().index();			//index에 현재 클릭한 h2의 부모(article)의 인덱스값 저장
var src=$(this).children("a").attr("href");	//src에 현재 클릭한 h2의 자식(a)의 href속성(big img) 값 저장
var posAc=220*parindex;						//posAc에 현재 클릭한 article의 순서*220 값 저장
$("article").removeClass("on");				//모든 article의 on 클래스 삭제
$(this).parent().addClass("on");			//현재 클릭한 것의 부모(article)에게만 on 클래스 추가
$("article p img").attr({"src":""});		//모든 article p img의 src 속성값 삭제
$(this).siblings("p").children("img").attr({"src":src});	//현재 클릭한 것의 형제(p)의 자식(img)의 src속성을 src로 변경
$("html, body").scrollTop(posAc);			//문서의 스크롤위치 값을 posAc로 설정
});
	
	
$("span").on("click",function(){		//span 클릭시(닫기버튼)
$("article").removeClass("on");			//모든 article에서 on 클래스 삭제
});
	

//상단 네비 4개
$("#navi li").on("click",function(){	//navi li 클릭시
var i=$(this).index();					//i에 현재 클릭한 li의 순서값 저장
var posNavi=1000*i;						//posNavi에 1000*현재 클릭한 li의 순서값  저장
$("#navi li, article").removeClass();	//모든 navi li와 article에서 모든 값 삭제
$(this).addClass("on");					//현재 클릭한 navi li에만 on 클래스 추가
$("html,body").scrollTop(posNavi);		//문서의 스크롤거리를 (1000*클릭한 것의 인덱스값) 으로 변경
})	

})//end