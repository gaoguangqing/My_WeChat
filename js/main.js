//记录当前页面是第几页
var nowpage=0;




$(document).ready(function(){
	//获取屏幕的宽和高
	var w=window.innerWidth;
	var h=window.innerHeight;
	//给最外层的盒子赋值
	$(".content").width(w);
	$(".content").height(h*4);
	
	$(".page").width(w);
	$(".page").height(h);
	
	$(".page1-avatar").animate({width:"70%",height:"23%"},2000);
	
	$(".content").swipe({
		swipe:function (event,direction) {
			if(direction=="up"){
				console.log("up");
				nowpage++;
			}else if(direction=="right")
			{
				console.log("right");
				nowpage++;
			}
			else if(direction=="down")
			{
				console.log("down");
				nowpage--;
			}else if(direction=="left"){
				console.log("left");
				nowpage--;
			}
			
			if(nowpage<0)
			{
				nowpage=0;
			}
			if(nowpage>3)
			{
				nowpage=3;
			}
			$(".content").animate({top:nowpage*-100+"%"},{duration:200,complete:numberPage()});
		}
	});
});
//页面中的效果
function numberPage () {
	//第二页
	if (nowpage==1) {
		$(".page2-farm").fadeIn(1000,function() {
			$(".page2-it").fadeIn(500);
		})
	}
	if(nowpage==2){
		$(".page3-title").fadeIn(1000,function(){
			$(".page3-busTitle").fadeIn(500,function(){
				$(".page3-bus").fadeIn(1000);
				$(".page3-busAvatar").fadeIn(1000,function(){
					$(".page3-bus").animate({left:"-100%"},1000);
					$(".page3-busAvatar").animate({left:"50"},{duration:1000,complete:function(){
						$(".page3-title").fadeOut(1000);
						$(".page3-busTitle").fadeOut(1000);
						$(".page3-bus").fadeOut(1000);
						$(".page3-busAvatar").fadeOut(1000);
						$(".page3-station").fadeOut(1000,function(){
							$(".page3-wall").fadeIn(1000,function(){
								$(".page3-jumpAvatar").fadeIn(1000);
								$(".page3-space").fadeIn(1000,function(){
									$(".page3-where").fadeIn(1000);
								});
							});
						});
					}});
				});
			});
		});
	}
}

//电灯点击事件
function lightClick (obj) {
	obj.src="img/lightOn.png"
	$(".page4-onBg").fadeIn(3000,function(){
		$(".page4-know").fadeIn(2000);
	})
}

//音乐按钮点击事件
function musicBtnClick(obj){
	var musicPlayer=document.getElementById("musicPlayer");
	if (musicPlayer.paused) {
		obj.src="img/musicBtn.png";
		musicPlayer.play();
		obj.style.webkitAnimationPlayState="running";
	} else{
		obj.src="img/musicBtnOff.png";
		musicPlayer.pause();
		obj.style.webkitAnimationPlayState="paused";
	}
}
