
// 设置鼠标移入的方法

function yzdhl() {
    var mina = document.getElementsByClassName('mina');
    var index = 1;
    // 遍历mina里面的所有元素
    for (var i = 0; i < mina.length; i++) {
        //设置鼠标移入事件
        mina[i].onmouseover = function() {
            //鼠标移入的时候class为mina active不做任何事情
            if (this.className == 'mina active') {
                return;
            } else {
                // 遍历mina里面的所有元素，如果有元素的class为mina active的时候改为mina
                for (var i = 0; i < mina.length; i++) {
                    if (mina[i].className == 'mina active') {
                        mina[i].className = 'mina'
                    }
                }
                // 在清除默认的样式设置鼠标移入的样式
                mina[0].className = 'mina';
                this.className = 'mina active';
            }
        }
        //设置一个鼠标移出的方法,当鼠标移出去的时候给所有的节点清除样式,设置默认样式
        mina[i].onmouseout = function() {
            function amouseout() {
                for (var i = 0; i < mina.length; i++) {
                    if (i == 0) {
                        mina[0].className = 'mina active';
                    } else {
                        mina[i].className = 'mina';
                    }
                }
            }
            //1秒后执行
            setTimeout(amouseout, 1000)
        }
    }
};
yzdhl();
// 给右边的图片设置高度的方法。高度为屏幕课件宽度
function descItem(ev) {
    var body = document.getElementsByTagName('body')[0];
    var descitem = document.getElementsByClassName('desc-item');

    function item() {
        // 获取屏幕高度减去导航栏的高度
        var Y = document.documentElement.clientHeight - 51;
        descitem[0].style.height = Y + 'px';
        descitem[1].style.height = Y + 'px';
        descitem[2].style.height = Y + 'px';
        descitem[3].style.height = Y + 'px';
        descitem[4].style.height = Y + 'px';
        descitem[5].style.height = Y + 'px';
        descitem[6].style.height = Y + 'px';
    }
    setInterval(item, 10);
    console.log(descitem[0].style.height)
}
descItem()

function solution() {
    var flag = true;

    var buttons = document.getElementsByClassName('buttons');
    // 获取滚动条的高度
    var Height = document.documentElement.scrollTop;
    //Y为屏幕高度
    var Y = document.documentElement.clientHeight - 51;

    for (var i = 0; i < buttons.length; i++) {
        // 遍历buttons的节点设置点击事件
        buttons[i].onclick = function() {
            var index = null;
            // 如果点击的class为mina active则不做任何操作
            if (this.className == 'mina active') {
                return;
            } else {
                //否则遍历节点清除class为buttons active的名字这只class为buttons
                for (var i = 0; i < buttons.length; i++) {
                    if (buttons[i].className == 'buttons active') {
                        buttons[i].className = 'buttons'
                    }
                }
                // 清除默认节点1的样式;
                // 设置相对应点击的借点样式
                buttons[0].className = 'buttons';
                this.className = 'buttons active';
                //获取点击借点的index值。
                //并赋值给index
                index = this.getAttribute('index');
            }
            //点击获取的index值去乘以屏幕的高度，并把这个值赋值给滚动条
            //让滚动条滚动到相对应的位置
            Height = 2900 + Y * (index - 1);
            document.documentElement.scrollTop = Height;
            console.log(index)
        }
    }

    window.onscroll = function() {
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        var mini = document.getElementsByClassName('yz_mini')[0];
        var left = document.getElementsByClassName('solution_lf')[0];
        var solution_rt = document.getElementsByClassName('solution_rt')[0];
        // 获取盒子的高度
        var boxHeight = solution_rt.offsetHeight;
        var Height = null;


        // 数字滚动变量
        var num = document.getElementsByClassName('num');
        var text_nub0 = 0;
        var text_nub1 = 0;
        var text_nub2 = 0;
        var text_nub3 = 0;
        var text_nub4 = 0;
        // 设置5个数字变动的方法
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


        // 当滚动条小于71的时候顶部导航栏的定位为相对定位
        if (scrollTop <= 71) {
            mini.style.position = 'relative';
            mini.style.zIndex = '0'
        }
        // 当滚动条大于71的时候顶部导航栏的定位为固定定位
        if (scrollTop > 71) {
            mini.style.position = 'fixed';
            mini.style.zIndex = '1000'
            mini.style.borderBottom = '1px solid #e5e5e5';
        }
        if (scrollTop < 2900) {
            //当滚动条的高度小于2900的时候左边的盒子为相对因为
            left.style.position = 'relative';
        }
        if (scrollTop > 2900) {
            // 当滚动条大于2900的时候左边的盒子为固定定位 
            left.style.position = 'fixed';
            // 并设置top为0，因为滚动到后面会设置为bottom 0 ；这里就可以让其进行覆盖
            left.className = "solution_lf top"
            // 设置滚动到相对应的高度对应相对应左边节点的样式
            if (scrollTop > 2900 && scrollTop < 2900 + Y / 2) {
                for (var i = 0; i < buttons.length; i++) {
                    if (i == 0) {
                        buttons[0].className = 'buttons active';
                    } else {
                        buttons[i].className = 'buttons';
                    }
                }
            }
            if (scrollTop > 2900 + Y / 2 && scrollTop < 2900 + Y + Y / 2) {
                for (var i = 0; i < buttons.length; i++) {
                    if (i == 1) {
                        buttons[1].className = 'buttons active';
                    } else {
                        buttons[i].className = 'buttons';
                    }
                }
            }
            if (scrollTop > 2900 + Y + Y / 2 && scrollTop < 2900 + Y * 2 + Y / 2) {
                for (var i = 0; i < buttons.length; i++) {
                    if (i == 2) {
                        buttons[2].className = 'buttons active';
                    } else {
                        buttons[i].className = 'buttons';
                    }
                }
            }
            if (scrollTop > 2900 + Y * 2 + Y / 2 && scrollTop < 2900 + Y * 3 + Y / 2) {
                for (var i = 0; i < buttons.length; i++) {
                    if (i == 3) {
                        buttons[3].className = 'buttons active';
                    } else {
                        buttons[i].className = 'buttons';
                    }
                }
            }
            if (scrollTop > 2900 + Y * 3 + Y / 2 && scrollTop < 2900 + Y * 4 + Y / 2) {
                for (var i = 0; i < buttons.length; i++) {
                    if (i == 4) {
                        buttons[4].className = 'buttons active';
                    } else {
                        buttons[i].className = 'buttons';
                    }
                }
            }
            if (scrollTop > 2900 + Y * 4 + Y / 2 && scrollTop < 2900 + Y * 5 + Y / 2) {
                for (var i = 0; i < buttons.length; i++) {
                    if (i == 5) {
                        buttons[5].className = 'buttons active';
                    } else {
                        buttons[i].className = 'buttons';
                    }
                }
            }
            if (scrollTop > 2900 + Y * 5 + Y / 2 && scrollTop < 2900 + Y * 6 + Y / 2) {
                for (var i = 0; i < buttons.length; i++) {
                    if (i == 6) {
                        buttons[6].className = 'buttons active';
                    } else {
                        buttons[i].className = 'buttons';
                    }
                }
            }
        }
        //滚动到一定高度盒子为绝对定位，高度为整个盒子的高度减去屏幕高度
        if (scrollTop > 2900 + boxHeight - Y) {
            left.style.position = 'absolute';
            left.className = "solution_lf"
            left.style.bottom = 0;
        }
        //当滚动条滚动到相对应的位置运行滚动数字的方法
        if (scrollTop > 7709 && flag) {
            number0();
            number1();
            number2();
            number3();
            number4();
            flag = false;
        }
        console.log(scrollTop);
        console.log(Y)
        console.log(2900 + boxHeight)
    }
}
solution()