//////////////////////////////////////
//// 함수 js
/////////////////////////////////////

// 요소 선택 함수
const qs = (x) => document.querySelector(x);
const qsa = (x) => document.querySelectorAll(x);

// 클래스 추가/제거 함수
const addCls = (x,y) => x.classList.add(y);
const removeCls = (x,y) => x.classList.remove(y);

// 이벤트 함수 - 오버 
const hoverCont = (x) => {
    // 선택
    let y = qsa(x);
    // 클래스 추가/제거
    y.forEach(ele=>{
        ele.onmouseenter = ()=>{
            addCls(ele,"active");
        }
        ele.onmouseleave = ()=>{
            removeCls(ele,"active");
        }
    });
};

// 이벤트 함수 - 클릭 토글 
const toggleCont = (x) => {
    // 선택
    let y = qsa(x);
    // 클래스 추가/제거
    y.forEach(ele => {
        ele.onclick = function(){
        this.classList.toggle("active");
        }
    })
};

function timeSale(){

    let now = new Date(); //현재시간 
    const dday = new Date("2023-05-20");
    let diff = dday - now;

    if(diff > 0){
        let diffDay = Math.floor(diff / (1000*60*60*24));
        let diffHour = Math.floor((diff / (1000*60*60)) % 24);
        let diffMin = Math.floor((diff / (1000*60)) % 60);
        let diffSec = Math.floor(diff / 1000 % 60);

        if(diffHour<10) diffHour = "0" + diffHour;
        if(diffMin<10) diffMin = "0" + diffMin;
        if(diffSec<10) diffSec = "0" + diffSec;

        $(".cday").html(diffDay);
        $(".chour").html(diffHour);
        $(".cminute").html(diffMin);
        $(".csecond").html(diffSec);
    }
}

// 내보내기
export {qs, qsa, addCls, removeCls, hoverCont, toggleCont, timeSale};
