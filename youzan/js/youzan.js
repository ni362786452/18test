
function carousel() {
    // 图片轮播JS
    //设置图片大小为页面大小
    var banner_box = document.getElementsByClassName('banner_box')[0];
    var banner_img1 = document.getElementsByClassName('banner_img1');
    var banner_img2 = document.getElementsByClassName('banner_img2')[0];
    var banner_img3 = document.getElementsByClassName('banner_img3')[0];
    var banner_img4 = document.getElementsByClassName('banner_img4');
    var body = document.getElementsByTagName('body')[0];
    var index = 1;
    var imgPlay = null;
    var banner_container = document.getElementsByClassName('banner-container')[0];


    function imgWidth() {
        banner_box.style.width = body.clientWidth * 6 + 'px';
        banner_img1[0].style.width = body.clientWidth + 'px';
        banner_img2.style.width = body.clientWidth + 'px';
        banner_img3.style.width = body.clientWidth + 'px';
        banner_img4[0].style.width = body.clientWidth + 'px';
        banner_img1[1].style.width = body.clientWidth + 'px';
        banner_img4[1].style.width = body.clientWidth + 'px';
    }
    setInterval(imgWidth, 10);

    var prev = document.getElementById('prev');
    var next = document.getElementById('next');

    prev.onclick = function() {
        left();
    }

    function left() {
        index--;
        // 点击的时候index+1
        if (index <= 0) {
            index = 4
            // 取消图片动画的时间马上跳到预留用的图片标签里面
            // 看上去是第一张图片，实际上已经跳到最后一张上面了
            
            banner_box.style.transition = 'all 0s linear';
            banner_box.style.marginLeft = -500 + '%';
            //为了防止计算器计算太快设置一次性定时器给元素加上动画时间
            //并滚动
            setTimeout(function() {
                banner_box.style.transition = 'all 0.4s linear';
                banner_box.style.marginLeft = -400 + '%';
            }, 20)
        } else {
            banner_box.style.marginLeft = index * (-100) + '%';
        }
        // 传参进入小圆点的方法让其相对应的横条高亮
        bltClass(index)
    }
    next.onclick = function() {
        right()
    }

    function right() {
        index++;
        if (index >= 5) {
            index = 1
            banner_box.style.transition = 'all 0s linear';
            banner_box.style.marginLeft = -0 + '%';
            setTimeout(function() {
                banner_box.style.transition = 'all 0.4s linear';
                banner_box.style.marginLeft = -100 + '%';
            }, 20)
        } else {
            banner_box.style.marginLeft = index * (-100) + '%';
        }
        // 传参进入小圆点的方法让其相对应的横条高亮
        bltClass(index)

    }
    //滚动圆点的方法
    var imgblt = document.getElementsByClassName('imgblt')

    function bltClass(index) {
        for (var i = 0; i < imgblt.length; i++) {
            if (imgblt[i].className == 'imgblt op') {
                imgblt[i].className = 'imgblt'
            }
            imgblt[index - 1].className = 'imgblt op';
        }
    }
    for (var i = 0; i < imgblt.length; i++) {
        imgblt[i].onmouseover = function() {
            if (this.className == 'imgblt op') {
                return
            } else {
                // 滚动到相对应的图片
                var myIndex = this.getAttribute('index');
                index = myIndex;
                banner_box.style.marginLeft = index * (-100) + '%';
            }
            bltClass(myIndex)
        }
    }
    // 滚动的方法
    function play() {
        imgPlay = setInterval(function() {
            next.onclick();
        }, 2000)
    }
    //停止的方法
    function stop() {
        clearInterval(imgPlay);
    }
    banner_container.onmouseover = stop;
    banner_container.onmouseout = play;
    // 鼠标拖动时间
    banner_container.onmousedown = function(ev) {
        var event = ev || window.event;
        // 设置一个参数获取点击时候的值并储存下来
        var down = event.clientX;
        // 鼠标移动的时候运行这个方法
        banner_container.onmousemove = mouseMove;
        // 设置鼠标拖动的一个方法
        function mouseMove(ev) {
            var event = ev || window.event;
            // 设置一个参数为拖动的位置的值减去点击时候的值
            var move = event.clientX - down;
            //让这个值去除以页面的宽度再乘以100；这个值就为你移动的百分比
            var pct = parseInt((move / body.clientWidth) * 100);
            // console.log(pct)
            // 图片偏移的值为index+上这个值
            banner_box.style.marginLeft = index * (-100) +pct + '%';
            // 返回这个值
            return pct;
        }
        banner_container.onmouseup = function(){
            // 当鼠标抬起来的时候运行鼠标移动的方法
        	var imgmove = mouseMove()
            // 当鼠标移动等于负数的时候的条件
        	if(imgmove<0){
                // 数值大于-20的时候不进行改变
        		if(imgmove>-20){
        			banner_box.style.marginLeft = index * (-100) + '%';
        		}
                // 小于-20的时候将运行一次有翻页方法
        		else{
        			right();
        		}
        	}
        	else if(imgmove>0){
        		if(imgmove<20){
        			banner_box.style.marginLeft = index * (-100) + '%';
        		}
        		else{
        			left();
        		}
        	}
        	console.log(index)
        	banner_container.onmousemove = null;
        	banner_container.onmouseup = null;
        }
    }
}
carousel();
//数字滚动
function nub_roll() {
    var flag = true;
    window.onscroll = function() {
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        var num = document.getElementsByClassName('num');
        var text_nub0 = 0;
        var text_nub1 = 0;
        var text_nub2 = 0;
        var text_nub3 = 0;
        var text_nub4 = 0;

        function number0() {
            if (text_nub0 == 300) {
                num[0].innerHTML = 300 + '万'
            } else {
                num[0].innerHTML = text_nub0 + '万';
                text_nub0++;
                set = setTimeout(function() {
                    number0();
                }, 6);
            }
        }

        function number1() {
            if (text_nub1 == 150) {
                num[1].innerHTML = 150 + '万'
            } else {
                num[1].innerHTML = text_nub1 + '万';
                text_nub1++
                set = setTimeout(function() {
                    number1();
                }, 13);
            }
        }

        function number2() {
            if (text_nub2 == 25) {
                num[2].innerHTML = 2.5 + '亿'
            } else {
                num[2].innerHTML = (text_nub2 / 10).toFixed(1) + '亿';
                text_nub2++;
                set = setTimeout(function() {
                    number2();
                }, 80);
            }
        }

        function number3() {
            if (text_nub3 == 200) {
                num[3].innerHTML = 200 + '亿'
            } else {
                num[3].innerHTML = text_nub3 + '亿';
                text_nub3++;
                set = setTimeout(function() {
                    number3();
                }, 10);
            }
        }

        function number4() {
            if (text_nub4 == 50) {
                num[4].innerHTML = 5 + '万/秒'
            } else {
                num[4].innerHTML = (text_nub4 / 10).toFixed(1) + '万/秒';
                text_nub4++;
                set = setTimeout(function() {
                    number4();
                }, 40);
            }
        }
        if (scrollTop >= 3670 && flag) {
            number0();
            number1();
            number2();
            number3();
            number4();
            flag = false;
        }
    }
}
nub_roll()

$(document).ready(function() {
    // 点击play_video标签的时候，视频显示出来
    $('.play_video').click(function() {
        $('.video').show(400);
    });
    // 点击close的时候视频隐藏并且暂停视频播放
    $('.close').click(function() {
        $('.video').hide(400);
        // vidio视频播放标签的方法 pause()
        // $('#video1')[0] 把jQuery对象转为原声的DOM对象
        $('#video1')[0].pause();
    });
});