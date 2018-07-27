window.onload=function () {
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

}