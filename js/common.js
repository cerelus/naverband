import { updateScrollPos } from './plugins/smoothScroll.js';

/* header */
// gnb
const header = document.getElementById('header');
const report1 = document.querySelector('.report1');
let r1Pos;

// gnb 상단 고정
function fixGnb() {
  r1Pos = report1.getBoundingClientRect().top;
  r1Pos <= 0 ? header.classList.add('fixed') : header.classList.remove('fixed');
} ////// fixGnb

const gnbList = header.querySelectorAll('.gnb li a');
const pgDownBtn = document.querySelector('.btn_page-down');
const eventBtn = document.querySelector('.btn_event');

// gnb 링크 연결
function movePg(ele) {
  event.preventDefault();
  const secId = ele.getAttribute('href');
  // section의 절대좌표
  const secPos = document.querySelector(secId).getBoundingClientRect().top + window.scrollY;
  window.scrollTo({ top: secPos, behavior: 'smooth' });
  // 현재 스크롤 위치 업데이트
  updateScrollPos(secPos);
} ////// movePg

gnbList.forEach((ele) => {
  ele.addEventListener('click', () => {
    movePg(ele);
    for (let x of gnbList) x.parentElement.classList.remove('on');
    ele.parentElement.classList.add('on');
  });
}); ////// forEach

pgDownBtn.addEventListener('click', function () {
  movePg(this);
});
eventBtn.addEventListener('click', function () {
  movePg(this);
});

// top button
const visual = document.querySelector('.visual');
const topBtn = document.querySelector('.btn_top');
let visualPos;

topBtn.addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
  updateScrollPos(0);
});

// top버튼 표시
function showTopBtn() {
  visualPos = visual.getBoundingClientRect().top;
  visualPos < -120 ? topBtn.classList.add('on') : topBtn.classList.remove('on');
} ////// showTopBtn

/* function */
// 퍼센트 계산 함수
function getPercent(current, overall) {
  if (current < 0) {
    return 0;
  } else if (current > overall) {
    return 100;
  } else {
    return Math.floor((current / overall) * 100);
  }
} ////// getPercent

/* variable */
// 윈도우 가로길이
let winWidth = window.innerWidth;

export { fixGnb, showTopBtn, getPercent, winWidth };
