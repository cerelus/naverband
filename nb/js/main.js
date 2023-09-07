import reportData from "./data/reportData.js";
import keywordData from "./data/keywordData.js";
import noticeData from "./data/noticeData.js";
import { updateScrollPos, setSmoothScroll } from "./smoothScroll.js";
import { fixGnb, showTopBtn, getPercent } from "./common.js";
import { updateBgPos, moveImg, moveTxt } from "./scrollAni.js";

window.addEventListener("load", () => {
    window.addEventListener("scroll", () => {
        fixGnb();
        showTopBtn();
        updateImg(); // report1
        updateBgPos(); // report2
        moveImg(); // report3
        moveTxt(); // report4
    }); /////// scroll

    let winWidth = window.innerWidth;

    window.addEventListener("resize", () => {
        winWidth = window.innerWidth;
        resizeCanvas();
    }); ////// resize

    // 스크롤 현재 위치 업데이트
    window.addEventListener("keyup", () => {
        setTimeout(() => {
            updateScrollPos(window.pageYOffset);
        }, 300);
    });
    window.addEventListener("mouseup", () => {
        updateScrollPos(window.pageYOffset);
    });

    /* visual */
    const visual = document.querySelector(".visual");
    const viewBtn = visual.querySelector(".btn_view-video");
    const popupVid = document.querySelector(".popup_video");
    const vlVideoWrap = popupVid.querySelector(".video_wrap");
    const closeBtn = popupVid.querySelector(".btn_close");

    // 비디오 넣기
    viewBtn.addEventListener("click", () => {
        vlVideoWrap.innerHTML = `<iframe src="https://tv.naver.com/embed/28397077?autoPlay=true" 
                frameborder="0" allow="autoplay" allowfullscreen></iframe>`;
        popupVid.classList.add("on");
        document.body.classList.add("hidden");
    });
    closeBtn.addEventListener("click", () => {
        vlVideoWrap.innerHTML = "";
        popupVid.classList.remove("on");
        document.body.classList.remove("hidden");
    });

    /* report1 */
    const report1 = document.querySelector(".report1");
    const r1Inner = report1.querySelector(".report1 .inner");
    const r1CanvasWrap = document.createElement("div");
    r1CanvasWrap.className = "canvas_wrap";
    r1Inner.append(r1CanvasWrap);

    // 캔버스 생성
    const r1Canvas = document.createElement("canvas");
    const ctx1 = r1Canvas.getContext("2d");
    r1CanvasWrap.append(r1Canvas);

    // 이미지 추가
    const phoneImgs = [];
    // 이미지 갯수
    const r1ImgLength = 60;
    let r1LoadedImg = 0;

    for (let x = 1; x <= r1ImgLength; x++) {
        let img = new Image();
        img.src = `./img/phone/phone${x}.png`;
        phoneImgs.push(img);

        img.onload = function () {
            r1LoadedImg++;
            if (r1LoadedImg === r1ImgLength) {
                resizeCanvas();
            }
        };
    }

    // 캔버스 가로크기
    let r1CanvasWidth = [320, 244, 220];
    // 캔버스 이동거리
    let canvasMoveDist = 50;

    // 캔버스 이미지 변경
    function updateImg() {
        // 스크롤 이동 한계값
        let scrollHeight = report1.offsetHeight + (window.innerHeight / 10) * 9;
        let scrollStart = report1.getBoundingClientRect().top - window.innerHeight;
        let currentHeight = -scrollStart;
        let currentPercent = getPercent(currentHeight, scrollHeight) / 100;
        let currentImg = Math.floor(r1ImgLength * currentPercent);

        // 이미지 순번
        let imgSeq = Math.min(r1ImgLength - 1, Math.max(0, currentImg));

        ctx1.clearRect(0, 0, r1Canvas.width, r1Canvas.height);
        ctx1.drawImage(phoneImgs[imgSeq], 0, 0, r1Canvas.width, r1Canvas.height);

        // 캔버스 위치 이동
        if (imgSeq > 19) {
            let transformValue = Math.floor(currentPercent * canvasMoveDist);
            r1CanvasWrap.style.transform = `translate(-50%, -${transformValue}%)`;
        } else {
            r1CanvasWrap.style.transform = `translate(-50%, 0%)`;
        }
    } ////// updateImg

    // 캔버스 사이즈 변경
    function resizeCanvas() {
        if (winWidth >= 1440) {
            r1Canvas.width = r1CanvasWidth[0];
        } else if (winWidth >= 1024) {
            r1Canvas.width = r1CanvasWidth[1];
        } else {
            r1Canvas.width = r1CanvasWidth[2];
        }
        r1Canvas.height = r1Canvas.width * 2;
        // 캔버스 재렌더링
        updateImg();
    }

    /* report5 */
    // 탭 버튼 넣기
    const r5TabList = document.querySelector(".report5 .tab_list");
    const tabBtnWrap = document.createElement("ul");
    for (let x in keywordData) {
        tabBtnWrap.innerHTML += `<li><button type="button">${x}</button></li>`;
    }
    r5TabList.append(tabBtnWrap);

    // 캔버스 생성
    const r5TabContent = document.querySelector(".report5 .tab_content");
    const r5CanvasWrap = document.createElement("div");
    r5CanvasWrap.className = "canvas_wrap";
    r5TabContent.append(r5CanvasWrap);

    const r5Canvas = document.createElement("canvas");
    const ctx5 = r5Canvas.getContext("2d");
    r5CanvasWrap.append(r5Canvas);
    r5Canvas.width = 1440;
    r5Canvas.height = 610;

    // 키워드 객체 배열 리스트
    let keywordList = [];
    // 이미지 객체 배열 리스트
    let keywordImgList = [];
    // 이미지 갯수
    const r5ImgLength = 10;
    let r5LoadedImg = 0;

    for (let x in keywordData) {
        let keywords = keywordData[x];
        let imgs = [];

        keywordData[x].forEach((obj) => {
            const image = new Image();
            image.src = obj.src;
            imgs.push(image);

            // 이미지 전부 로드시 캔버스에 그리기
            image.onload = function () {
                r5LoadedImg++;
                if (r5LoadedImg === r5ImgLength) {
                    drawKeywordImg(selectedList, selectedImgList);
                }
            };
        });
        // 키워드 객체 배열을 리스트 배열에 저장
        keywordList.push(keywords);
        // 이미지 객체 배열을 리스트 배열에 저장
        keywordImgList.push(imgs);
    } //// for in

    // 초기 키워드 리스트 선택
    let selectedList = keywordList[0];
    let selectedImgList = keywordImgList[0];

    // 선택된 리스트의 y, speed값을 배열에 저장
    // -> 원본 데이터 변경X
    let listY = [];
    let listSpeed = [];
    selectedList.forEach((item) => {
        listY.push(item.y);
        listSpeed.push(item.speed);
    });

    // 가속도
    const accel = 0.2;
    // 튕겨지는 정도
    const bounceRate = -0.3;
    // 이미지가 튕겨진 횟수
    let bounceCnt = [0, 0, 0, 0, 0];
    let animationId;
    const keywordSize = [410, 330, 260, 190, 120];

    const r5TabBtns = document.querySelectorAll(".tab_list ul li");
    r5TabBtns[0].classList.add("on");

    r5TabBtns.forEach((btn, idx) => {
        btn.addEventListener("click", () => {
            for (let x of r5TabBtns) x.classList.remove("on");
            btn.classList.add("on");

            selectedList = keywordList[idx];
            selectedImgList = keywordImgList[idx];

            // 초기화
            listY = [];
            listSpeed = [];
            bounceCnt = [0, 0, 0, 0, 0];

            // 선택된 키워드 리스트의 y, speed값 배열에 저장
            selectedList.forEach((item) => {
                listY.push(item.y);
                listSpeed.push(item.speed);
            });

            cancelAnimationFrame(animationId);
            drawKeywordImg(selectedList, selectedImgList);
        });
    }); //// forEach

    function drawKeywordImg(list, img) {
        ctx5.clearRect(0, 0, r5Canvas.width, r5Canvas.height);

        list.forEach((item, idx) => {
            ctx5.drawImage(img[idx], item.x, listY[idx], keywordSize[idx], keywordSize[idx]);

            listSpeed[idx] += accel;
            listY[idx] += listSpeed[idx];

            // 키워드 이미지가 캔버스를 벗어날때
            if (listY[idx] + keywordSize[idx] > r5Canvas.height) {
                listY[idx] = r5Canvas.height - keywordSize[idx];
                // 반대방향으로 튕기기
                listSpeed[idx] *= bounceRate;
                bounceCnt[idx]++;
            }
        });
        // 키워드 이미지가 모두 3번 튀겨지면 애니메이션 종료
        if (bounceCnt.every((cnt) => cnt > 3)) {
            cancelAnimationFrame(animationId);
        } else {
            animationId = requestAnimationFrame(() => drawKeywordImg(selectedList, selectedImgList));
        }
    }

    /* report6 */
    const r6SlideWrap = document.querySelector(".report6 .slide_wrap");
    const r6Slide = document.createElement("ul");
    r6Slide.className = "slide_container";

    // 슬라이드에 이미지 넣기
    for (let x = 0; x < 3; x++) {
        r6Slide.innerHTML += `<li><img src="./img/history.png" alt="밴드 히스토리"></li>`;
    }
    r6SlideWrap.append(r6Slide);

    // 슬라이드 위치 변경
    function moveSlide() {
        const r6Slide = document.querySelector(".report6 .slide_container");
        let firstSlide = r6Slide.querySelectorAll("li")[0];
        let slidePos = 0;
        let slideWidth = firstSlide.offsetWidth;
        setInterval(() => {
            slidePos--;
            if (slidePos < -slideWidth) {
                slidePos = 0;
                firstSlide = r6Slide.querySelectorAll("li")[0];
                r6Slide.append(firstSlide);
            }
            r6Slide.style.left = slidePos + "px";
        }, 11);
    } ////// moveSlide

    /* report7 */
    const report7 = document.querySelector(".report7");
    const r7Tab = report7.querySelector(".tab_wrap");
    const tabList = document.createElement("ul");
    tabList.classList = "tab_list";

    // 탭 버튼 넣기
    const r7Data = reportData["report7"];
    r7Data.forEach((obj) => {
        tabList.innerHTML += `<li><button type="button">${obj.txt}</button></li>`;
    }); //// forEach
    r7Tab.prepend(tabList);

    // 탭 슬라이드 넣기
    r7Tab.innerHTML += `<div class="tab_content swiper report7Slide">
                    <ul class="swiper-wrapper">
                        ${r7Data
                            .map((obj) => `<li class="swiper-slide"><img src="${obj.img}" alt="지역 모임"></li>`)
                            .join("")}
                    </ul>
                </div>`;

    // swiper slide
    let r7Swiper = new Swiper(".report7Slide", {
        effect: "fade",
        speed: 800,
        allowTouchMove: false,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
    });

    // 버튼과 슬라이드 연결
    const r7TabBtns = r7Tab.querySelectorAll(".tab_list button");
    r7TabBtns[0].parentElement.classList.add("on");

    // 버튼에 슬라이드 연결
    r7TabBtns.forEach((btn, idx) => {
        btn.addEventListener("click", () => {
            for (let x of r7TabBtns) x.parentElement.classList.remove("on");
            btn.parentElement.classList.add("on");

            r7Swiper.slideToLoop(idx);
        });
    }); //// forEach

    // 슬라이드에 버튼 연결
    r7Swiper.on("realIndexChange", () => {
        setTimeout(() => {
            let currentIdx = r7Swiper.realIndex;
            for (let x of r7TabBtns) x.parentElement.classList.remove("on");
            r7TabBtns[currentIdx].parentElement.classList.add("on");
        }, 100);
    });

    /* report8 */
    const r8Switch = document.getElementById("switch");
    const r8Videos = document.querySelectorAll(".report8 video");

    r8Switch.addEventListener("click", function(){
        if(this.checked) {
            r8Videos[0].style.visibility = "hidden";
            r8Videos[1].currentTime = 0;
            r8Videos[1].style.visibility = "visible";
        } else{
            r8Videos[1].style.visibility = "hidden";
            r8Videos[0].currentTime = 0;
            r8Videos[0].style.visibility = "visible";
        }
    }); //// click

    /* notice */
    const noticeInner = document.querySelector(".notice .inner");
    const noticeWrap = document.createElement("ul");
    noticeWrap.className = "notice_wrap";

    // 리스트 넣기
    noticeData.forEach((ele) => {
        const content = ele.content.split("^");
        noticeWrap.innerHTML += `<li>
                        <span class="notice_title">${ele.title}</span>
                        <div class="notice_list">
                            <ul>
                            ${content.map((val) => `<li>${val}</li>`).join("")}
                            </ul>
                        </div>
                    </li>`;
    }); //// forEach
    noticeInner.append(noticeWrap);

    // 리스트 클릭시 슬라이드 효과 주기
    const noticeTit = noticeWrap.querySelectorAll(".notice_title");

    noticeTit.forEach((ele) => {
        const noticeList = ele.nextElementSibling;
        const listHeight = noticeList.querySelector("ul").offsetHeight;

        ele.addEventListener("click", function () {
            if (noticeList.offsetHeight === 0) {
                noticeList.style.height = listHeight + "px";
                ele.classList.add("on");
            } else {
                noticeList.style.height = "0px";
                ele.classList.remove("on");
            }
        }); //// click
    }); ////// forEach

    // 초기화
    function init() {
        setSmoothScroll();
        updateBgPos();
        moveImg();
        moveTxt();
        moveSlide();
    }

    init();
}); ///////// load
