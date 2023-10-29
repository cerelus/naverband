import keywordData from '../assets/data/keywordData.js';
import { getPercent, winWidth } from './common.js';

/* report1 */
const report1 = document.querySelector('.report1');
const r1Inner = report1.querySelector('.report1 .inner');
const r1CanvasWrap = document.createElement('div');
r1CanvasWrap.className = 'canvas_wrap';
r1Inner.append(r1CanvasWrap);

// 캔버스 생성
const r1Canvas = document.createElement('canvas');
const ctx1 = r1Canvas.getContext('2d');
r1CanvasWrap.append(r1Canvas);

const phoneImgs = [];
// 이미지 갯수
const r1ImgLength = 60;
let r1LoadedImg = 0;

for (let x = 1; x <= r1ImgLength; x++) {
  let img = new Image();
  img.src = `./assets/images/phone/phone${x}.png`;
  phoneImgs.push(img);

  img.onload = function () {
    r1LoadedImg++;
    if (r1LoadedImg === r1ImgLength) {
      resizeCanvas();
    }
  };
}

// 캔버스 가로크기
const canvasWidth = [320, 244, 220];
// 캔버스 이동거리
let distance = 50;

// 캔버스 이미지 변경
function updateImg() {
  // 실제 스크롤 높이
  const scrollHeight = report1.offsetHeight + (window.innerHeight / 5) * 4;
  const r1ScrollTop = -report1.getBoundingClientRect().top;
  const currentScrollTop = r1ScrollTop + window.innerHeight;
  const currentScrollRatio = getPercent(currentScrollTop, scrollHeight) / 100;
  const ImgIdxValue = Math.floor(r1ImgLength * currentScrollRatio);

  // 이미지 인덱스
  const currentImgIdx = Math.min(r1ImgLength - 1, Math.max(0, ImgIdxValue));

  ctx1.clearRect(0, 0, r1Canvas.width, r1Canvas.height);
  ctx1.drawImage(phoneImgs[currentImgIdx], 0, 0, r1Canvas.width, r1Canvas.height);

  // 캔버스 위치 이동
  if (currentImgIdx >= 20) {
    const translateValue = Math.floor(currentScrollRatio * distance);
    r1CanvasWrap.style.transform = `translate(-50%, -${translateValue}%)`;
  } else {
    r1CanvasWrap.style.transform = `translate(-50%, 0%)`;
  }
} ////// updateImg

// 캔버스 사이즈 변경
function resizeCanvas() {
  if (winWidth >= 1440) {
    r1Canvas.width = canvasWidth[0];
  } else if (winWidth >= 1024) {
    r1Canvas.width = canvasWidth[1];
  } else {
    r1Canvas.width = canvasWidth[2];
  }
  r1Canvas.height = r1Canvas.width * 2;
  // 캔버스 재렌더링
  updateImg();
}

/* report5 */
const tabList = document.querySelector('.report5 .tab_list');
const tabBtnWrap = document.createElement('ul');
// 탭 버튼 넣기
for (let x in keywordData) {
  tabBtnWrap.innerHTML += `<li><button type='button'>${x}</button></li>`;
}
tabList.append(tabBtnWrap);

// 캔버스 생성
const tabContent = document.querySelector('.report5 .tab_content');
const r5CanvasWrap = document.createElement('div');
r5CanvasWrap.className = 'canvas_wrap';
tabContent.append(r5CanvasWrap);

const r5Canvas = document.createElement('canvas');
const ctx5 = r5Canvas.getContext('2d');
r5CanvasWrap.append(r5Canvas);
r5Canvas.width = 1440;
r5Canvas.height = 630;

// 연령대별 키워드 정보
let infoList = [];
// 연령대별 키워드 이미지
let imageList = [];
// 이미지 개수
const r5ImgLength = 10;
let r5LoadedImg = 0;

function setInitialCanvas() {
  for (let x in keywordData) {
    let infos = keywordData[x];
    let images = [];

    keywordData[x].forEach((ele) => {
      const imageObj = new Image();
      imageObj.src = ele.image;
      images.push(imageObj);

      // 이미지 전부 로드시 캔버스에 그리기
      imageObj.onload = function () {
        r5LoadedImg++;
        if (r5LoadedImg === r5ImgLength) {
          changeAgeGroup(infoList[0], imageList[0]);
        }
      };
    });
    // 키워드 정보들을 배열에 저장
    infoList.push(infos);
    // 키워드 이미지들을 배열에 저장
    imageList.push(images);
  } //// for in
}

// 선택된 연령대의 정보, 이미지
let selectedInfo, selectedImg;
// 키워드 공이 튕겨진 횟수, y좌표, 속도
let bounceCnt, posY, speed;
// 떨어지는 속도 가중치
const accel = 0.45;
// 튕겨지는 정도
const bounce = -0.33;
// 키워드공의 크기
const ballSize = [430, 350, 280, 210, 130];
// 키워드공의 초기 y좌표와 속도
const ballPosY = ballSize.map((val) => val * -2);
const ballSpeed = [3, 6, 8, 1, 5];
let animationId;

// 연령대 변경
function changeAgeGroup(info, img) {
  selectedInfo = info;
  selectedImg = img;

  // 튕겨진 횟수, y좌표, 속도 초기화
  bounceCnt = [0, 0, 0, 0, 0];
  posY = [...ballPosY];
  speed = [...ballSpeed];

  drawKeywordBall(selectedInfo, selectedImg);
} ////// changeAgeGroup

const tabBtns = document.querySelectorAll('.tab_list ul li');
tabBtns[0].classList.add('on');

tabBtns.forEach((btn, idx) => {
  btn.addEventListener('click', () => {
    for (let x of tabBtns) x.classList.remove('on');
    btn.classList.add('on');
    // 이전 애니메이션 중지
    cancelAnimationFrame(animationId);
    // 연령대 변경
    changeAgeGroup(infoList[idx], imageList[idx]);
  }); //// click
}); //// forEach

function drawKeywordBall(info, image) {
  ctx5.clearRect(0, 0, r5Canvas.width, r5Canvas.height);

  info.forEach((ele, idx) => {
    ctx5.drawImage(image[idx], ele.posX, posY[idx], ballSize[idx], ballSize[idx]);

    // 가속
    speed[idx] += accel;
    posY[idx] += speed[idx];

    // 키워드가 캔버스의 바닥을 벗어날때
    if (posY[idx] + ballSize[idx] > r5Canvas.height) {
      posY[idx] = r5Canvas.height - ballSize[idx];
      // 반대방향으로 튕기기
      speed[idx] *= bounce;
      bounceCnt[idx]++;
    }
  });
  // 키워드공이 모두 3번 튀겨지면 애니메이션 종료
  if (bounceCnt.every((cnt) => cnt > 15)) {
    cancelAnimationFrame(animationId);
  } else {
    animationId = requestAnimationFrame(() => drawKeywordBall(selectedInfo, selectedImg));
  }
} ////// drawKeywordBall

export { updateImg, resizeCanvas, setInitialCanvas };
