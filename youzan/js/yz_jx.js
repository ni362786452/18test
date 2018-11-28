function bannerHg() {
    // 设置一个变量为有赞精选-发现朋友圈的好货
    var banner = document.getElementsByClassName('banner_top')[0];
    // 设置一个变量为有赞精选
    var choiceness = document.getElementsByClassName('choiceness')[0];

    function bannerH() {
        // 获取屏幕高度
        var height = document.documentElement.clientHeight;
        // 设置变量高度为屏幕高度
        banner.style.height = height - 71 + 'px';
        choiceness.style.height = height + 'px';
    }
    // 用定时器进行循环，实时获取屏幕变化并设置高度
    setInterval(bannerH, 10);
}
bannerHg()


// 滚动条事件
// 设置一个开关
var flag = true;

window.onscroll = function() {

    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    var Y = document.documentElement.clientHeight;
    var show1 = document.getElementsByClassName('phone-show1')[0];
    var show2 = document.getElementsByClassName('phone-show2')[0];
    var show3 = document.getElementsByClassName('phone-show3')[0];
    console.log(scrollTop);
    // 设置一个方法让滚动条滚动到想要的位置
    function scrollPage() {
        var Height = scrollTop;
        Height += 10;
        document.documentElement.scrollTop = Height;
    }
    // 当滚动条滚动到屏幕高度的1/3的时候开关为开
    if (scrollTop < Y / 3) {
        flag = true;
    }
    //当滚动条进入条件并且开关为开的的时候运行上面的方法
    if ((scrollTop >= Y / 3 && scrollTop < Y) && flag) {
        scrollPage()
        show1.className = 'phone-show1 play1';
        show2.className = 'phone-show2 play2'
        show3.className = 'phone-show3 play3'
    }
    //当滚动条继续往下走的时候开关关闭，所以滚动条不会进入相对应的条件
    if (scrollTop >= Y) {
        flag = false;
    }
    console.log(Y)
    console.log(flag)
}