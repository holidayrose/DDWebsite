/**
 * Created by Administrator on 2017/2/28.
 */
//注册
(function(){
    var oSubmit = document.querySelector('#submit');
    var oUserName = document.querySelector('.userField');
    var oPwd1 = document.querySelectorAll('.pwdField')[0];
    var oPwd2 = document.querySelectorAll('.pwdField')[1];
    var oAge = document.querySelector('.age');
    var oSex = document.getElementsByName('name');
    var oAddress = document.getElementsByTagName('select')[0];
    oSubmit.onclick = function(){
        //获取单选框的值 start
        for (var i = 0; i < oSex.length; i++) {
            if(oSex[i].checked == true){
                oSex.value=oSex[i].value;
            }
        }
    };
})();