import reportData from "./data/reportData.js";
import { getPercent } from "./common.js";

/* report2 */
const report2 = document.querySelector(".report2");
const scrollBefore = report2.querySelector(".scroll_before");
// 배경위치 변경
function updateBgPos() {
    // 스크롤 이동 한계값 = (report2.offsetHeight - window.innerHeight) + window.innerHeight
    // 시작위치: report2 - window.innerHeight * 2 / 3
    // 종료위치: report2 + window.innerHeight * 1 / 3
    let scrollHeight = report2.offsetHeight;
    // 스크롤 시작 위치
    let scrollStart = report2.getBoundingClientRect().top - (window.innerHeight / 3) * 2;
    // 현재 스크롤 높이
    let currentHeight = -scrollStart;
    // 퍼센트 업데이트
    let currentPercent = getPercent(currentHeight, scrollHeight);

    scrollBefore.style.clipPath = `inset(0px 0px ${currentPercent}% )`;
} ////// updateBgPos

/* report3 */
const report3 = document.querySelector(".report3");
const r3TextWrap = report3.querySelectorAll(".slide_wrap .text_wrap");

// 이미지 넣기
r3TextWrap.forEach((ele, idx) => {
    let seq = idx + 1;
    ele.innerHTML += `
         <img src="./img/tooltip0${seq}.png" alt="말풍선" class="text_tooltip tooltip${seq}">
         `;
});

const r3Imgs = report3.querySelectorAll(".text_tooltip, .face");
// 총 이동거리
let imgMoveDist = 100;
for (let x of r3Imgs) x.style.transform = `translateY(${imgMoveDist}px)`;

// 이미지 위치 이동
function moveImg() {
    // 스크롤 이동 한계값
    let scrollHeight = report3.offsetHeight - window.innerHeight / 3;
    // 스크롤 시작 위치
    let scrollStart = report3.getBoundingClientRect().top - (window.innerHeight / 3) * 2;
    // 현재 스크롤 높이
    let currentHeight = -scrollStart;
    // 현재 이동 거리
    let currentMoveDist = Math.floor((imgMoveDist * getPercent(currentHeight, scrollHeight)) / 100);
    let transformValue = imgMoveDist - currentMoveDist;
    for (let y of r3Imgs) y.style.transform = `translateY(${transformValue}px)`;
} ////// moveImg

// swiper slide
let r3Swiper = new Swiper(".report3Slide", {
    slidesPerView: 1,
    speed: 800,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        1025: {
            slidesPerView: 3,
            spaceBetween: 0,
            allowTouchMove: false,
        },
    },
});

 /* report4 */
 const report4 = document.querySelector(".report4");
 const r4Scroll = document.createElement("div");
 r4Scroll.className = "scroll_wrap";

 // 스크롤될 텍스트 넣기
 const r4Data = reportData["report4"];
 let r4Code = "<ul>";
 r4Data.forEach((arr) => {
     r4Code += "<li>";
     for (let x = 0; x < 3; x++) {
         for (let y of arr) {
             r4Code += `<span class="item_${y.cat}">${y.txt}</span>`;
         }
     }
     r4Code += "</li>";
 }); //// forEach
 r4Code += "</ul>";
 r4Scroll.innerHTML += r4Code;
 report4.append(r4Scroll);

 // 텍스트 위치 변경
 const r4TxtTop = report4.querySelector(".scroll_wrap ul li:nth-child(1)");
 const r4TxtBottom = report4.querySelector(".scroll_wrap ul li:nth-child(2)");
 // 텍스트 이동단위
 let step = 5;

 function moveTxt() {
     let scrollHeight = report4.offsetHeight + window.innerHeight;
     let scrollStart = report4.getBoundingClientRect().top - window.innerHeight;
     let currentHeight = -scrollStart;

     let currentPercent = getPercent(currentHeight, scrollHeight);
     r4TxtTop.style.left = `-${currentPercent * step}px`;
     r4TxtBottom.style.right = `-${currentPercent * step}px`;
 } ////// moveTxt

export { updateBgPos, moveImg, moveTxt };
