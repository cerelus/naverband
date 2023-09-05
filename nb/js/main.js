import reportData from "./data/reportData.js";
import keywordData from "./data/keywordData.js";
import noticeData from "./data/noticeData.js";
import { updateScrollPos, setSmoothScroll } from "./smoothScroll.js";
import { fixGnb, showTopBtn, getPercent } from "./common.js";

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

    /* report5 */
    const r5TabContent = document.querySelector(".report5 .tab_content");
    const r5TabWrap = document.createElement("div");
    r5TabWrap.className = "canvas_wrap";
    r5TabContent.append(r5TabWrap);

    // 캔버스 생성
    const r5Canvas = document.createElement("canvas");
    const ctx5 = r5Canvas.getContext("2d");
    r5TabWrap.append(r5Canvas);
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

    const r5TabBtns = document.querySelectorAll(".tab_list ul li");
    // 가속도
    const accel = 0.2;
    // 튕겨지는 정도
    const bounceRate = -0.3;
    // 이미지가 튕겨진 횟수
    let bounceCnt = [0, 0, 0, 0, 0];
    let animationId;
    const keywordSize = [410, 330, 260, 190, 120];

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
    let r7Code = "";
    r7Data.forEach((obj) => {
        r7Code += `<li><button type="button">${obj.txt}</button></li>`;
    }); //// forEach
    tabList.innerHTML = r7Code;
    r7Tab.prepend(tabList);

    // 탭 슬라이드 넣기
    r7Code = `<div class="tab_content swiper report7Slide">
                    <ul class="swiper-wrapper">
                        ${r7Data
                            .map((obj) => `<li class="swiper-slide"><img src="${obj.img}" alt="지역 모임"></li>`)
                            .join("")}
                    </ul>
                </div>`;
    r7Tab.innerHTML += r7Code;

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
    const tabBtns = r7Tab.querySelectorAll(".tab_list button");
    tabBtns[0].parentElement.classList.add("on");

    // 버튼에 슬라이드 연결
    tabBtns.forEach((btn, idx) => {
        btn.addEventListener("click", () => {
            for (let x of tabBtns) x.parentElement.classList.remove("on");
            btn.parentElement.classList.add("on");

            r7Swiper.slideToLoop(idx);
        });
    }); //// forEach

    // 슬라이드에 버튼 연결
    r7Swiper.on("realIndexChange", () => {
        setTimeout(() => {
            let currentIdx = r7Swiper.realIndex;
            for (let x of tabBtns) x.parentElement.classList.remove("on");
            tabBtns[currentIdx].parentElement.classList.add("on");
        }, 100);
    });

    /* report10 */
    const report10 = document.querySelector(".report10");
    const r10VideoWrap = document.createElement("div");
    r10VideoWrap.className = "video_wrap";

    // 동영상 넣기
    for (let x = 0; x < 3; x++) {
        r10VideoWrap.innerHTML += `<video autoplay muted loop playsinline class="heart${x + 1}">
                <source src="./video/heart0${x + 1}.mp4" />
            </video>`;
    }
    report10.append(r10VideoWrap);

    /* notice */
    const noticeInner = document.querySelector(".notice .inner");
    const noticeWrap = document.createElement("ul");
    noticeWrap.className = "notice_wrap";

    // 리스트 넣기
    noticeData.forEach((ele) => {
        const content = ele.content.split("^");
        let code = `<li>
                        <span class="notice_title">${ele.title}</span>
                        <div class="notice_list">
                            <ul>
                            ${content.map((val) => `<li>${val}</li>`).join("")}
                            </ul>
                        </div>
                    </li>`;
        noticeWrap.innerHTML += code;
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
