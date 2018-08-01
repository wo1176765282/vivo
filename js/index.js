window.onload=function () {
    //选项卡

    let nex=document.getElementsByClassName("nex")[0];
    // console.log(nex);
    let nexWrap=document.getElementsByClassName("nex-wrap")[0];

    nex.onmouseenter=function () {
        nexWrap.style.height="80px";
    }
    nex.onmouseleave=function () {
        nexWrap.style.height=0;
    }
    let x=document.getElementsByClassName("x")[0];
    let nexX=document.getElementsByClassName("x-wrap")[0];
    x.onmouseenter=function () {
        nexX.style.height="160px";
    }
    x.onmouseleave=function () {
        nexX.style.height=0;
    }

    let y=document.getElementsByClassName("y")[0];
    let nexY=document.getElementsByClassName("y-wrap")[0];
    y.onmouseenter=function () {
        nexY.style.height="180px";
    }
    y.onmouseleave=function () {
        nexY.style.height=0;
    }


    //banner开始
    let banner_bg=document.getElementById('vivo-high-wrap');
    let bannerX21=document.querySelector('.vivo-banner-x21myz-bg');
    let bannerZ1=document.querySelector('.vivo-banner-z1-bg');
    let arr=[bannerX21,bannerZ1];
    let title=document.querySelectorAll('.vivo-banner-title');
    let now=0;
    let next=0;

    let t=setInterval(move,3000);
    function move(){
        now++;
        if (now==arr.length) {
            now=0
        }
        // title[now].style.height='0';
        title.forEach(function(element){
            element.style.height=0;
            // animate(element,{height:0})
        })
        arr.forEach(function(element){
            element.style.zIndex='5'
        })
        animate(arr[now],{zIndex:9})
        animate(title[now],{height:270},1000)
    }

    banner_bg.onmouseenter=function () {
        clearInterval(t);
    }
    banner_bg.onmouseleave=function () {
        t=setInterval(move,2000);
    }



}