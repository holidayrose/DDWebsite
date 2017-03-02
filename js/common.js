'use strict'
/**
 * Created by Administrator on 2017/2/25.
 */

    var oLogin = document.getElementById('login');
    var oLoginBox = document.getElementById('login_box');
    var lock = false;
    oLogin.onclick = function(){
        lock = !lock;
        if(lock){
            oLoginBox.style.display = 'block';
        }else{
            oLoginBox.style.display = 'none';
        }
    };
    //nav
    (function(){
        //弹性运动
        var oNav = document.getElementById('nav');
        var oHover = oNav.children[0];
        var aLi = oNav.children[1].children;
        var aA = oNav.querySelectorAll('ul li a');
        var iNow = 0;
        function getIndex(){
            for(var i=0;i<aA.length;i++){
                aA[i].index = i;
                if(aA[i].className =='flag'){
                    return aA[i].index;
                }
            }

        };
        iNow=getIndex();
        oHover.style.left = aLi[0].offsetWidth*iNow+30+'px';
        var left = 0;
        var iSpeed = 0;
        function move(obj,iTarget){
            clearInterval(obj.timer);
            obj.timer = setInterval(function(){
                iSpeed+=(iTarget-left)/5;
                iSpeed*=0.75;
                left+=iSpeed;
                obj.style.left = left+'px';
                if(Math.round(iSpeed)==0&&Math.round(left)==iTarget){
                    clearInterval(obj.timer);
                }
            },30);
        };
        for(var i=0;i<aLi.length;i++){

            (function(index){
                aA[i].onmouseover = function(){
                    move(oHover,aLi[0].offsetWidth*index+30);
                };
                aA[i].onmouseout = function(){
                    move(oHover,aLi[0].offsetWidth*iNow+30);
                };
                aA[i].onclick = function(){
                    iNow=index;
                };
            })(i);
        }

    })();