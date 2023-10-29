import slideData from '../assets/data/slideData.js';
import noticeData from '../assets/data/noticeData.js';
import { updateScrollPos, setSmoothScroll } from './plugins/smoothScroll.js';
import { fixGnb, showTopBtn } from './common.js';
import { updateImg, resizeCanvas, setInitialCanvas } from './canvasAni.js';
import { updateBgPos, moveImg, moveTxt } from './scrollAni.js';
import goNextQ from './mbti.js';

window.addEventListener('scroll', () => {
  showElement();
  fixGnb();
  showTopBtn();
  updateImg();
  updateBgPos();
  moveImg();
  moveTxt();
}); /////// scroll

window.addEventListener('resize', () => {
  resizeCanvas();
}); ////// resize

// 스크롤 현재 위치 업데이트
window.addEventListener('keyup', () => {
  setTimeout(() => {
    updateScrollPos(window.pageYOffset);
  }, 300);
});
window.addEventListener('mouseup', () => {
  updateScrollPos(window.pageYOffset);
});

/* visual */
const visual = document.querySelector('.visual');
const viewBtn = visual.querySelector('.btn_view-video');
const popupVid = document.querySelector('.popup_video');
const vlVideoWrap = popupVid.querySelector('.video_wrap');
const vidCloseBtn = popupVid.querySelector('.btn_close');

// 팝업 비디오 넣기
viewBtn.addEventListener('click', () => {
  vlVideoWrap.innerHTML = `<iframe src='https://tv.naver.com/embed/28397077?autoPlay=true' 
            frameborder='0' allow='autoplay' allowfullscreen></iframe>`;
  popupVid.classList.add('on');
  document.body.classList.add('hidden');
});

vidCloseBtn.addEventListener('click', () => {
  vlVideoWrap.innerHTML = '';
  popupVid.classList.remove('on');
  document.body.classList.remove('hidden');
});

/* report6 */
const r6SlideWrap = document.querySelector('.report6 .slide_wrap');
const r6Slide = document.createElement('ul');
r6Slide.className = 'slide_container';

// 슬라이드에 이미지 넣기
for (let x = 0; x < 3; x++) {
  r6Slide.innerHTML += `<li><img src='./assets/images/history.png' alt='밴드 히스토리'></li>`;
}
r6SlideWrap.append(r6Slide);

let isSlideActive = false;

// 슬라이드 위치 변경
function moveSlide() {
  if (isSlideActive) return;
  isSlideActive = true;
  const r6Slide = document.querySelector('.report6 .slide_container');
  let firstSlide = r6Slide.querySelectorAll('li')[0];
  let slidePos = 0;
  let slideWidth = firstSlide.offsetWidth;
  setInterval(() => {
    slidePos--;
    if (slidePos < -slideWidth) {
      slidePos = 0;
      firstSlide = r6Slide.querySelectorAll('li')[0];
      r6Slide.append(firstSlide);
    }
    r6Slide.style.left = slidePos + 'px';
  }, 11);
} ////// moveSlide

/* report7 */
const report7 = document.querySelector('.report7');
const r7Tab = report7.querySelector('.tab_wrap');
const tabList = document.createElement('ul');
tabList.classList = 'tab_list';

// 탭 버튼 넣기
const r7Data = slideData['report7'];
r7Data.forEach((obj) => {
  tabList.innerHTML += `<li><button type='button'>${obj.content}</button></li>`;
}); //// forEach
r7Tab.prepend(tabList);

// 탭 슬라이드 넣기
r7Tab.innerHTML += `<div class='tab_content swiper report7Slide'>
                    <ul class='swiper-wrapper'>
                        ${r7Data
                          .map((obj) => `<li class='swiper-slide'><img src='${obj.image}' alt='지역 모임'></li>`)
                          .join('')}
                    </ul>
                </div>`;

// swiper slide
let r7Swiper = new Swiper('.report7Slide', {
  effect: 'fade',
  speed: 800,
  allowTouchMove: false,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

// 버튼과 슬라이드 연결
const r7TabBtns = r7Tab.querySelectorAll('.tab_list button');
r7TabBtns[0].parentElement.classList.add('on');

// 버튼에 슬라이드 연결
r7TabBtns.forEach((btn, idx) => {
  btn.addEventListener('click', () => {
    for (let x of r7TabBtns) x.parentElement.classList.remove('on');
    btn.parentElement.classList.add('on');

    r7Swiper.slideToLoop(idx);
  });
}); //// forEach

// 슬라이드에 버튼 연결
r7Swiper.on('realIndexChange', () => {
  setTimeout(() => {
    let currentIdx = r7Swiper.realIndex;
    for (let x of r7TabBtns) x.parentElement.classList.remove('on');
    r7TabBtns[currentIdx].parentElement.classList.add('on');
  }, 100);
});

/* report8 */
const r8Switch = document.getElementById('switch');
const r8Videos = document.querySelectorAll('.report8 video');

r8Switch.addEventListener('click', function () {
  if (this.checked) {
    r8Videos[0].style.visibility = 'hidden';
    r8Videos[1].currentTime = 0;
    r8Videos[1].style.visibility = 'visible';
  } else {
    r8Videos[1].style.visibility = 'hidden';
    r8Videos[0].currentTime = 0;
    r8Videos[0].style.visibility = 'visible';
  }
}); //// click

/* report9 */
const goTestBtn = document.querySelector('.report9 .btn_go-test');
const popupMbti = document.querySelector('.popup_mbti');
const mbtiCloseBtn = popupMbti.querySelector('.btn_close');
goTestBtn.addEventListener('click', () => {
  popupMbti.classList.add('on');
  document.body.classList.add('hidden');
  // 첫번째 질문부터 화면에 표시
  goNextQ(0);
}); //// click
mbtiCloseBtn.addEventListener('click', () => {
  popupMbti.classList.remove('on');
  document.body.classList.remove('hidden');
}); //// click

/* notice */
const noticeInner = document.querySelector('.notice .inner');
const noticeWrap = document.createElement('ul');
noticeWrap.className = 'notice_wrap';

// 리스트 넣기
noticeData.forEach((ele) => {
  noticeWrap.innerHTML += `<li>
                        <span class='notice_title'>${ele.title}</span>
                        <div class='notice_list'>
                            <ul>
                            ${ele.content.map((val) => `<li>${val}</li>`).join('')}
                            </ul>
                        </div>
                    </li>`;
}); //// forEach
noticeInner.append(noticeWrap);

// 리스트 클릭시 슬라이드 효과 주기
const noticeTit = noticeWrap.querySelectorAll('.notice_title');

noticeTit.forEach((ele) => {
  const noticeList = ele.nextElementSibling;
  const listHeight = noticeList.querySelector('ul').offsetHeight;

  ele.addEventListener('click', function () {
    if (noticeList.offsetHeight === 0) {
      noticeList.style.height = listHeight + 'px';
      ele.classList.add('on');
    } else {
      noticeList.style.height = '0px';
      ele.classList.remove('on');
    }
  }); //// click
}); ////// forEach

/* fadeIn effect */
function showElement() {
  const sections = document.querySelectorAll('section');
  const showPoint = window.innerHeight * 0.7;
  sections.forEach((sec) => {
    const scrollTop = sec.getBoundingClientRect().top;
    if (scrollTop < showPoint) {
      sec.classList.add('active');
      if(sec.classList.contains('report5'))
        setTimeout(() => setInitialCanvas(), 700);
      if (sec.classList.contains('report6'))
        setTimeout(() => moveSlide(), 600);
    }
  });
} ////// showElement

// 초기화
function init() {
  setSmoothScroll();
  showElement();
  updateBgPos();
  moveImg();
  moveTxt();
}

init();
