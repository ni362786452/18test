var img = document.getElementsByClassName('img');
var wHtml = html.getBoundingClientRect().width;
var ulimg = document.getElementsByClassName('ulimg')[0];
// 给图片轮播的图片设置与屏幕同样的宽度
for (var i = 0; i < img.length; i++) {
    img[i].style.width = wHtml + 'px'
}

var index = 1;
var timer = '';
var xyd = document.getElementsByClassName('xyd');
// 图片轮播小圆点的方法
function color() {
    for (var i = 0; i < xyd.length; i++) {
        xyd[i].className = 'xyd';
    }
    if (index > 9) {
        xyd[0].className = 'xyd xyd_b';
    } else {
        xyd[index - 1].className = 'xyd xyd_b';
    }
}
// 轮播的方法
function lunbo() {
    index++;
    if (index > 9) {
        index = 1;
        ulimg.style.transition = '0s all linear';
        ulimg.style.marginLeft = '0%';
        setTimeout(function() {
            ulimg.style.transition = '0.3s all linear';
            ulimg.style.marginLeft = '-100%';
        }, 20)
    } else {
        ulimg.style.marginLeft = index * (-100) + '%';
    }
    color()
}
// 自动播放
function play() {
    timer = setInterval(lunbo, 2500)
}
play()
// 手指按下去的方法
var lbimg = document.getElementsByClassName('lbimg')[0];
// 设置一个变量为鼠标按下去的位置
var touchstartX = "";
lbimg.ontouchstart = function(event) {
    clearInterval(timer)
    touchstartX = event.touches[0].clientX;
    console.log(touchstartX)
        // 设置一个变量来接手指移动的值
    var touchmoveX = "";
    // 手指一动时运行方法touchmove
    lbimg.ontouchmove = touchmove;
    // 设置一个方法touchmove
    function touchmove(event) {
        // 获取手指移动的数值
        touchmoveX = event.touches[0].clientX;
        var pianyiX = parseInt((touchmoveX - touchstartX) / wHtml * 100);
        ulimg.style.marginLeft = index * (-100) + pianyiX + '%';
        // 手指点击的位置减去手指移动的位置
        // 往左边移是整数
    }
    lbimg.ontouchend = function(event) {
        var pianyiX = parseInt((touchmoveX - touchstartX) / wHtml * 100);
        if (pianyiX < 0) {
            // 数值大于-20的时候不进行改变
            if (pianyiX > -20) {
                ulimg.style.marginLeft = index * (-100) + '%';
            }
            // 小于-20的时候将运行一次有翻页方法
            else {
                lunbo()
            }
        } else if (pianyiX > 0) {
            if (pianyiX < 20) {
                ulimg.style.marginLeft = index * (-100) + '%';
            } else {
                index--;
                if (index <= 0) {
                    index = 9
                    ulimg.style.transition = '0s all linear';
                    ulimg.style.marginLeft = '-1000%';
                    setTimeout(function() {
                        ulimg.style.transition = '0.3s all linear';
                        ulimg.style.marginLeft = '-900%';
                    }, 20)
                } else {
                    ulimg.style.marginLeft = index * (-100) + '%';
                }
            }
        }
        color();
        lbimg.ontouchmove = null;
        lbimg.ontouchend = null;
    }
}