window.onload=function(){
	// 3d轮播
	var data = [
		{translateX:'-650px',translateZ:'-350px',zIndex:1},
        {translateX:'-350px',translateZ:'-150px',zIndex:3},
        {translateX:'0',translateZ:'0',zIndex:5},
        {translateX:'350px',translateZ:'-150px',zIndex:3},
        {translateX:'650px',translateZ:'-350px',zIndex:1}
	]
	var els=$('.main');
	
	var draw = function(){
		for(var i=0;i<els.length;i++){
			els[i].style.transform='translate3d('+data[i].translateX+',0,'+data[i].translateZ+')';
			els[i].style.zIndex=data[i].zIndex;
		}
		data.unshift(data.pop())
	}
	setTimeout(draw,0);
	var timeid = setInterval(draw,2000);
	$('.prev').click(function(){
		clearInterval(timeid)
		draw()
	})
	$('.prev').mouseleave(function(){
		setInterval(draw,2000)
	})
	$('.btn').hover(function(){
		$(this).find('b').animate({top:0},200)
	},function(){
		$(this).find('b').animate({top:'-200px'},200)
	})
	// 3d轮播	
	// 返回顶部
	$(window).scroll(function(){
		if($(window).scrollTop()>400){
			$('.scroll-top').fadeIn(500)
		}else{
			$('.scroll-top').fadeOut(500)
		}
	})
     $(".scroll-top").click(function(){
                $('body,html').animate({scrollTop:0},200);
                return false;
            });
     // 返回顶部

     // 下拉框
     setTimeout(function(){$('.xiala').hide()},0)
     $('.xialabox').hover(function(){
     	$(this).find('.xiala').fadeIn(20)
     },function(){
     	$(this).find('.xiala').fadeOut(20)
     });
     // 下拉框

    // 获取时间
    var d =new Date();
    var h=d.getHours();
    var m=d.getMinutes();
     $('.time').html(h+':'+m);
     $('.sbox').append($('.time'));
    // 获取时间

    // 换图片

    var imgs=['6','7','9','10','11','12','13','15'];
    var imgRandom = function(){
		    	$('.con-list img').each(function(){
		    	var index =Math.floor(imgs.length*Math.random());
		    	var img=imgs[index];
		    	$(this).attr("src","imgs/"+img+".jpg");
		    })
		}
    $('.title').click(function(){
    	imgRandom();
    })
    // 换图片


}