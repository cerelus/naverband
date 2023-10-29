import slideData from '../assets/data/slideData.js';
import { getPercent } from './common.js';

/* report2 */
const report2 = document.querySelector('.report2');
const background = report2.querySelector('.scroll_before');

// 배경 clip-path 변경
function updateBgPos() {
  // 스크롤 시작점: -window.innerHeight의 2/3
  // 스크롤 종료점: report2.offsetHeight + window.innerHeight 1/3
  // 전체 스크롤 높이: 종료점 - 시작점
  // -> report2.offsetHeight + window.innerHeight
  // 스크롤 한계 높이: 전체 스크롤 높이 - window.innerHeight
  // -> report2.offsetHeight
  const scrollHeight = report2.offsetHeight;
  // report2 기준 스크롤 위치
  const r2ScrollTop = -report2.getBoundingClientRect().top;
  // 실제 스크롤 위치 : report2 기준 스크롤 위치 + 시작점
  const currentScrollTop = r2ScrollTop + (window.innerHeight / 3) * 2;
  // clipPath값
  let clipPathValue = getPercent(currentScrollTop, scrollHeight);
  background.style.clipPath = `inset(0px 0px ${clipPathValue}% )`;
} ////// updateBgPos

/* report3 */
const report3 = document.querySelector('.report3');
const r3TextWrap = report3.querySelectorAll('.slide_container .text_wrap');

r3TextWrap.forEach((ele, idx) => {
  let seq = idx + 1;
  ele.innerHTML += `
    <img src='./assets/images/tooltip0${seq}.png' alt='말풍선' class='text_tooltip tooltip${seq}'>
    `;
});
// 모든 이미지 선택
const r3Imgs = report3.querySelectorAll('.text_tooltip, .face');
// 이미지가 y축으로 이동할 거리
let posY = 100;
for (let x of r3Imgs) x.style.transform = `translateY(${posY}px)`;

// 이미지 위치 이동
function moveImg() {
  const scrollHeight = report3.offsetHeight - window.innerHeight / 3;
  const r3ScrollTop = -report3.getBoundingClientRect().top;
  const currentScrollTop = r3ScrollTop + (window.innerHeight / 3) * 2;
  const currentScrollRatio = getPercent(currentScrollTop, scrollHeight) / 100;
  // translateY값
  let translateValue = posY * (1 - currentScrollRatio);
  for (let y of r3Imgs) y.style.transform = `translateY(${translateValue}px)`;
} ////// moveImg

// swiper slide
let r3Swiper = new Swiper('.report3Slide', {
  slidesPerView: 1,
  speed: 800,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
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
const report4 = document.querySelector('.report4');
const r4Scroll = document.createElement('div');
r4Scroll.className = 'scroll_wrap';

// 텍스트 넣기
const r4Data = slideData['report4'];
let r4Code = '<ul>';
r4Data.forEach((arr) => {
  r4Code += '<li>';
  for (let x = 0; x < 3; x++) {
    for (let y of arr) {
      r4Code += `<span class='item_${y.name}'>${y.content}</span>`;
    }
  }
  r4Code += '</li>';
}); //// forEach
r4Code += '</ul>';
r4Scroll.innerHTML += r4Code;
report4.append(r4Scroll);

const r4TxtTop = report4.querySelector('.scroll_wrap ul li:nth-child(1)');
const r4TxtBottom = report4.querySelector('.scroll_wrap ul li:nth-child(2)');

// 텍스트 이동단위
let step = 5;

// 텍스트 위치 이동
function moveTxt() {
  const scrollHeight = report4.offsetHeight + window.innerHeight;
  const r4ScrollTop = -report4.getBoundingClientRect().top;
  const currentScrollTop = r4ScrollTop + window.innerHeight;
  // position값
  let posValue = getPercent(currentScrollTop, scrollHeight);
  r4TxtTop.style.left = `-${posValue * step}px`;
  r4TxtBottom.style.right = `-${posValue * step}px`;
} ////// moveTxt

export { updateBgPos, moveImg, moveTxt };
