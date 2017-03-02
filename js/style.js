/**
 * Created by Administrator on 2017/2/25.
 */
function rnd(n,m){
    return parseInt(Math.random()*(m-n))+n;
}
    //首页banner
    (function(){
        var oBanner = document.querySelector('.banner');
        var aLi = oBanner.querySelectorAll('ol li');
        var oSliderBox = document.querySelector('.slider_box');
        var oNext = document.querySelector('.next');
        var C = 7;
        var R = 4;
        var iNow = 0;
        for(var i=0;i<C;i++){
            for(var j=0;j<R;j++){
                var oSpan = document.createElement('span');
                oSpan.style.width = oSliderBox.offsetWidth/C+'px';
                oSpan.style.height = oSliderBox.offsetHeight/R+'px';
                oSliderBox.appendChild(oSpan);
                oSpan.style.left = oSpan.offsetWidth*i+'px';
                oSpan.style.top = oSpan.offsetHeight*j+'px';
                oSpan.style.backgroundImage='url(img/banner'+(iNow%4+1)+'.png)';
                oSpan.style.backgroundPosition = '-'+oSpan.offsetWidth*i+'px -'+oSpan.offsetHeight*j+'px';
            }
        };

        var aS = oSliderBox.children;
        var lock = false;
        var timer = null;
        function slider(){
            for(var i=0;i<aS.length;i++){
                //aS[i].style.backgroundImage = 'url(../img/banner'+(iNow%4+1)+'.png)';
                aS[i].style.webkitTransition = '.8s ease all';
                var x = aS[i].offsetWidth/2+aS[i].offsetLeft-oSliderBox.offsetWidth/2;
                var y = aS[i].offsetHeight/2+aS[i].offsetTop-oSliderBox.offsetHeight/2;
                aS[i].style.webkitTransform = 'perspective(800px) translate('+x+'px,'+y+'px) rotateX('+rnd(-360,360)+'deg) rotateY('+rnd(-360,360)+'deg)';
                aS[i].style.opacity = 0;
            }
            function TranEnd(){
                aS[aS.length-1].removeEventListener('transitionend',TranEnd,false);
                for(var i=0;i<aS.length;i++){
                    aS[i].style.webkitTransition = 'none';
                    aS[i].style.backgroundImage = 'url(img/banner'+(iNow%4+1)+'.png)';
                    oSliderBox.style.backgroundImage = 'url(img/banner'+((iNow+1)%4+1)+'.png)';
                    aS[i].style.webkitTransform = 'perspective(800px) translate(0,0) rotateX(0deg) rotateY(0deg)';
                    aS[i].style.opacity = 1;
                    lock = false;
                }
            };
            aS[aS.length-1].addEventListener('transitionend',TranEnd,false);

        };
        function tab(){
            for(var i=0;i<aLi.length;i++){
                aLi[i].className = '';
            }
            aLi[iNow%4].className = 'active';
        };
        oNext.onclick = function(){
            clearInterval(timer);
            if(lock)return;
            lock = true;
            iNow++;
            tab();
            slider();
        };
        function clock(){
            timer = setInterval(function(){
                iNow++;
                tab();
                slider();
            },3000);
        };
        clock();
        oNext.onmouseout = function(){
            clock();
        };
    })();
    //首页趣事分享
    (function(){
        var oUl = document.querySelector('.sub_banner ul');
        var left = 0;
        oUl.innerHTML+=oUl.innerHTML;
        oUl.style.width = oUl.children[0].offsetWidth*oUl.children.length+'px';
        setInterval(function(){
            left-=3;
            if(left<=-896)left=0;
            oUl.style.left = left+'px';
        },30);
    })();
    //新闻资讯:趣事分享
    (function(){
        var oShare_Btn = document.getElementById('share_btn');
        var oCover = document.getElementById('cover');
        var oForm = document.getElementById('form');
        var oClose = document.getElementById('close');
        var oMar = document.getElementById('marquee');
        var oUl = oMar.children[0];
        var aLi = oUl.children;
        var top=0;
        var timer = null;
        oShare_Btn.onclick = function(){
            oCover.style.display ='block';
            oForm.style.display ='block';
        };
        oClose.onclick = function(){
            oCover.style.display ='none';
            oForm.style.display ='none';
        };
        function clock(){
            timer=setInterval(function(){
                top-=2;
                if(top<=oMar.offsetHeight - oUl.offsetHeight){
                    top=0;
                }
                oUl.style.top = top+'px';
            },30);
        };
        clock();
        for(var i=0;i<aLi.length;i++){
            aLi[i].onmouseover = function(){
                clearInterval(timer);
            };
            aLi[i].onmouseout = function(){
                clock();
            };
        };
    })();
