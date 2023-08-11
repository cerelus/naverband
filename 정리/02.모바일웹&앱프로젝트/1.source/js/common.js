//////////////////////////////////////
//// 상단/하단/사이드 js
/////////////////////////////////////

// 이벤트 함수
import {qs, hoverCont, toggleCont} from "./eventFn.js";
import store from "./vuexStore.js";

window.addEventListener("DOMContentLoaded", () => {
    
    /*////// 1.상단 //////*/
    // gnb 왼쪽 - 오버시 서브메뉴
    hoverCont(".gnb_menu > div > ul > li");

    // gnb 오른쪽 - 오버시 툴팁
    hoverCont(".btn-util > li");

    /*////// 2.하단 //////*/
    // 소셜링크 - 오버시 툴팁
    hoverCont(".link-social > ul > li");

    let swiper = new Swiper(".noticeSlide", {
        direction: "vertical",
        speed: 500,
        loop: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
    });

    /*////// 3.사이드 //////*/
    // 최근본목록 - 클릭시 토글
    toggleCont(".side >.side_history");

    

    const sideTop = qs(".side_top");

// 상단이동버튼
sideTop.onclick = (e) => {

        e.preventDefault();
        window.scrollTo(0,0);
    };

window.addEventListener("scroll",()=>{
    let a = qs(".cont2").getBoundingClientRect().top;

    if(a < 0) {sideTop.style.display = "block";}
    else {sideTop.style.display = "none";}
});
    hoverCont(".sub_tab2-cont li");

}); //////// load ////////


//////////////////////////////////////
//// 상단/하단/사이드 구역 뷰 컴포넌트
/////////////////////////////////////

// 템플릿 데이터
import comData from "./data/comData.js";

// 1.상단 컴포넌트 - 메인
Vue.component("mgnb-area",{
    template: comData.mgnb,
    store,
});
// 1.상단 컴포넌트 - 서브
Vue.component("sgnb-area",{
    template: comData.sgnb,
    store,
});
// 2.하단 컴포넌트
Vue.component("info-area",{
    template: comData.info
});
// 3.사이드 컴포넌트
Vue.component("side-area",{
    template: comData.side
});


// 뷰 인스턴스 생성
// 1.상단 인스턴스
new Vue({
    el:"#gnb",
    mounted:function(){

        // 메인페이지로 이동
        const logo = qs(".gnb_logo a");
        logo.onclick = (e) => {
            // e.preventDefault();
            location.href = "index.html";
        }
    }
});
// 2.하단 인스턴스
new Vue({
    el:"#info",
});
// 3.사이드 인스턴스
new Vue({
    el:"#side",
});