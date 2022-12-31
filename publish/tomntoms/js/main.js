$(document).ready(function(){
	var moving = false;
	var num = 0;

	function initLayout(){
		var t = (-1)*num*(window.innerHeight);
		$('.section').css({top:t + 'px'});
		$('.section .page').css({width:window.innerWidth,height:window.innerHeight});
		$('.section .page').removeClass('loading');
		$('.aside .item').removeClass('on');
		$('.aside .item').eq(num).addClass('on');
	}
	function doLayout(){
		var t = (-1)*num*(window.innerHeight);
		$('.section').css({top:t + 'px'});
		$('.section .page').css({width:window.innerWidth,height:window.innerHeight});
	}
	initLayout();

	//resize event
	$(window).resize(function(){
		doLayout();
	});

	//click event
	$('.nav .menu a, .aside .item a').click(function(e){
		e.preventDefault();
		num = $(this).parent('li').index();
		//console.log('num : ', num);
		$('.aside .item').removeClass('on');
		$('.aside .item').eq(num).addClass('on');

		var t = (-1)*num*(window.innerHeight);
		$('.section').animate({top:t+'px'},500);

		if(num!=0){
			$('.header .nav').addClass('on');
		}else{
			$('.header .nav').removeClass('on');
		}
	});
	//keyboard event
	$(window).keydown(function(e){
		if(moving == false){
			moving = true;
			var t=$('.section').offset().top;
			var h = window.innerHeight;

			if(e.keyCode == 40){
				if(num < 5){
					num++;
					t-=h;
				}
			}else if(e.keyCode == 38){
				if(num > 0){
					num--;
					t+=h;
				}
			}
			$('.section').animate({top:t+'px'},500,function(){
				moving = false;

				if(num !=0){
					$('.header .nav').addClass('on');
				}else{
					$('.header .nav').removeClass('on');
				}
				$('.aside .item').removeClass('on');
				$('.aside .item').eq(num).addClass('on');

			});
		}
	});

	//mousewheel event
	$('html body').on('mousewheel DOMMouseScroll',function(e){
		if(moving == false){
			moving = true;
			var t = $('.section').offset().top;
			var h = window.innerHeight;
			if(e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0){
				if(num > 0){
					num--;
					t+=h;
				}
			}else if(e.originalEvent.wheelDelta < 0 || e.originalEvent.detail > 0){
				if(num < 5){
					num++;
					t-=h;
				}
			}
		}
		$('.section').animate({top:t},500,function(){
			moving = false;

			if(num != 0){
				$('.header .nav').addClass('on');
			}else{
				$('.header .nav').removeClass('on');
			}
			$('.aside .item').removeClass('on');
			$('.aside .item').eq(num).addClass('on');

		});
	});
});