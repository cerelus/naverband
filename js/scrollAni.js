import reportData from "./data/reportData.js";
import { getPercent } from "./common.js";

/* report2 */
const report2 = document.querySelector(".report2");
const background = report2.querySelector(".scroll_before");
// 배경 clip-path 변경
function updateBgPos() {
  // report2 시작점을 기준으로 window.innerHeight의 2/3만큼 위에서 스크롤 시작
  // report2 종료점을 기준으로 window.innerHeight 1/3만큼 아래에서 스크롤 종료
  // 실제 스크롤 높이: (report2.offsetHeight + window.innerHeight) - window.innerHeight
  const scrollHeight = report2.offsetHeight;
  // report2 스크롤 위치
  const r2ScrollTop = -report2.getBoundingClientRect().top;
  // 현재 스크롤 위치
  const currentScrollTop = r2ScrollTop + (window.innerHeight / 3) * 2;
  // 퍼센트
  const clipPathValue = getPercent(currentScrollTop, scrollHeight);

  background.style.clipPath = `inset(0px 0px ${clipPathValue}% )`;
} ////// updateBgPos

/* report3 */
const report3 = document.querySelector(".report3");
const r3TextWrap = report3.querySelectorAll(".slide_wrap .text_wrap");

r3TextWrap.forEach((ele, idx) => {
  let seq = idx + 1;
  ele.innerHTML += `
         <img src="./assets/images/tooltip0${seq}.png" alt="말풍선" class="text_tooltip tooltip${seq}">
         `;
});
// 모든 이미지 선택
const r3Imgs = report3.querySelectorAll(".text_tooltip, .face");

// 이미지가 이동할 거리
let distance = 100;
for (let x of r3Imgs) x.style.transform = `translateY(${distance}px)`;

// 이미지 위치 이동
function moveImg() {
  const scrollHeight = report3.offsetHeight - window.innerHeight / 3;
  const r3ScrollTop = -report3.getBoundingClientRect().top;
  const currentScrollTop = r3ScrollTop + (window.innerHeight / 3) * 2;
  const translateValue = distance * (1 - getPercent(currentScrollTop, scrollHeight, 1));
  if (translateValue >= 0) for (let y of r3Imgs) y.style.transform = `translateY(${translateValue}px)`;
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

// 텍스트 넣기
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

const r4TxtTop = report4.querySelector(".scroll_wrap ul li:nth-child(1)");
const r4TxtBottom = report4.querySelector(".scroll_wrap ul li:nth-child(2)");
// 텍스트 이동단위
let step = 5;

// 텍스트 위치 이동
function moveTxt() {
  const scrollHeight = report4.offsetHeight + window.innerHeight;
  const r4ScrollTop = -report4.getBoundingClientRect().top;
  const currentScrollTop = r4ScrollTop + window.innerHeight;

  let moveValue = getPercent(currentScrollTop, scrollHeight);
  r4TxtTop.style.left = `-${moveValue * step}px`;
  r4TxtBottom.style.right = `-${moveValue * step}px`;
} ////// moveTxt

export { updateBgPos, moveImg, moveTxt };
