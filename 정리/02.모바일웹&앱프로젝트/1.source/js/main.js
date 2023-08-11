//////////////////////////////////////
//// 메인 페이지 js
/////////////////////////////////////

// 이벤트 함수
import {qs, qsa, timeSale} from "./eventFn.js";

window.addEventListener("DOMContentLoaded",()=>{
    
    /*////// cont1 - banner //////*/
    let bannerSlide = new Swiper(".cont1_banner", {
        speed: 800,
        effect: "fade",
        autoplay: {
            delay: 6000,
            disableOnInteraction: false,
        },
        loop: true,
    });

    /*////// roll-banner //////*/
    const rollBox = qs(".roll_box");
    let rollText = qsa(".roll_text");
    // 배너의 width값
    const textWidth = rollText[0].offsetWidth;
    // left값
    let lpos = 0;

    setInterval(()=>{
        lpos--;

    if(lpos < -textWidth){
        lpos = 0;

        rollText = qsa(".roll_text");
        rollBox.appendChild(rollText[0]);
    }
    // 슬라이드 이동
    rollBox.style.left = lpos + "px";
    }, 18);

    /*////// cont2 - saleList //////*/

    const saleList = qs(".sale_list");
    let saleBox = qsa(".sale_list li");
    // left값
    let spos = 0;
    // 상품박스의 width값
    let boxWidth = saleBox[0].offsetWidth;
    // 윈도우 리사이즈시 width값 다시 저장
    window.addEventListener("resize",()=>{
        boxWidth = saleBox[0].offsetWidth;
    });

    setInterval(()=>{

    spos--;

    if(spos < -boxWidth){
        spos = 0;

    saleBox = qsa(".sale_list li");
    saleList.appendChild(saleBox[0]);
    }
    // 슬라이드 이동
    saleList.style.left = spos + "px";
    }, 18);


setInterval(timeSale, 1000);

}); //////// load ////////