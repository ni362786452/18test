var iphone = document.getElementsByClassName('iphone_box')[0];
var msg = document.getElementsByClassName('err-msg');
var iphoneInput = document.getElementsByClassName('iphone_input')[0];

iphoneInput.onfocus = function() {
    iphone.className = 'iphone_box blue';
}

iphoneInput.onblur = function() {
    var iphoneText = iphoneInput.value;
    var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
    if (iphoneText == '') {
        iphone.className = 'iphone_box';
    } else if (!myreg.test(iphoneText)) {
        iphone.className = 'iphone_box red';
        msg[0].style.visibility = 'visible';
    } else {
        msg[0].style.visibility = 'hidden';
        iphone.className = 'iphone_box';
    }

}
var pass = document.getElementsByClassName('pass_box')[0];
var passInput = document.getElementsByClassName('pass_input')[0];
passInput.onfocus = function() {
    pass.className = 'iphone_box blue';
}
passInput.onblur = function() {
    var passText = passInput.value;
    var myreg = /^[a-zA-Z]\w{5,17}$/;
    if (passText == '') {
        pass.className = 'pass_box';
        msg[1].innerHTML = '密码没有填写'
        msg[1].style.visibility = 'visible';
    } else if (!myreg.test(passText)) {
        pass.className = 'pass_box red';
        msg[1].innerHTML = '以字母开头，长度在6-18之间，只能包含字符、数字和下划线'
        msg[1].style.visibility = 'visible';
    } else {
        msg[1].style.visibility = 'hidden';
        pass.className = 'pass_box';
    }

}
var controlsInput = document.getElementsByClassName('controls_input')[0]
var arr = [2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "m", "n", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var time = 60;
var set = '';
var yzm = '';
var controls = document.getElementsByClassName('controls_box')[0];
var btn = document.getElementById('btn');

function gain() {
    yzm = '';
    for (var i = 0; i < 4; i++) {
        index = Math.floor(Math.random() * arr.length);
        yzm += arr[index];
    }
}
btn.onclick = function() {
    gain()
    btn.value = yzm;
}
controlsInput.onfocus = function() {
    controls.className = 'controls_box blue';
}
controlsInput.onblur = function() {
    var controlsText = controlsInput.value;
    if (
        (controlsText == yzm.toLowerCase()) ||
        (controlsText == yzm.toUpperCase()) ||
        (controlsText == yzm)
    ) {
        msg[2].style.visibility = 'hidden';
        controls.className = 'controls_box';
    } else {
        controls.className = 'controls_box red'
        msg[2].innerHTML = '请输入正确的验证码';
        msg[2].style.visibility = 'visible';
    }

}