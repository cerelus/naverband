import { updateScrollPos, setSmoothScroll } from "./smoothScroll.js";
import reportData from "./data/reportData.js";
import noticeData from "./data/noticeData.js";

window.addEventListener("load", () => {
    window.addEventListener("scroll", () => {
        fixGnb();
        showTopBtn();
        updateBgPos(); // report2
        moveImg(); // report3
        moveTxt(); // report4
    }); /////// scroll

    // 스크롤 위치 업데이트
    window.addEventListener("keyup", () => {
        setTimeout(() => {
            updateScrollPos(window.pageYOffset);
        }, 300);
    });
    window.addEventListener("mouseup", () => {
        updateScrollPos(window.pageYOffset);
    });

    /* gnb */
    const header = document.getElementById("header");
    const report1 = document.querySelector(".report1");
    // gnb_상단고정
    function fixGnb() {
        const r1Pos = report1.getBoundingClientRect().top;
        r1Pos <= 0 ? header.classList.add("fixed") : header.classList.remove("fixed");
    } ////// fixGnb
    // gnb_link
    const gnbList = header.querySelectorAll(".gnb li a");
    const pgDownBtn = document.querySelector(".btn_page-down");
    const eventBtn = document.querySelector(".btn_event");

    function movePg(ele) {
        event.preventDefault();
        const secId = ele.getAttribute("href");
        // section의 절대좌표 구하기
        const secPos = document.querySelector(secId).getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top: secPos, behavior: "smooth" });
        updateScrollPos(secPos);
    } ////// movePg

    gnbList.forEach((ele) => {
        ele.addEventListener("click", () => {
            movePg(ele);
            for (let x of gnbList) x.parentElement.classList.remove("on");
            ele.parentElement.classList.add("on");
        });
    }); ////// forEach

    pgDownBtn.addEventListener("click", function () {
        movePg(this);
    });
    eventBtn.addEventListener("click", function () {
        movePg(this);
    });

    /* top button */
    const visual = document.querySelector(".visual");
    const topBtn = document.querySelector(".btn_top");
    // click-상단이동
    topBtn.addEventListener("click", (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
        updateScrollPos(0);
    });
    // top버튼 표시
    function showTopBtn() {
        const visualPos = visual.getBoundingClientRect().top;
        visualPos < -120 ? topBtn.classList.add("on") : topBtn.classList.remove("on");
    } ////// showTopBtn

    /* visual */
    const viewBtn = visual.querySelector(".btn_view-video");
    const popupVid = document.querySelector(".popup_video");
    const videoWrap = popupVid.querySelector(".video_wrap");
    const closeBtn = popupVid.querySelector(".btn_close");

    viewBtn.addEventListener("click", () => {
        videoWrap.innerHTML = `<iframe src="https://tv.naver.com/embed/28397077?autoPlay=true" 
                frameborder="0" allow="autoplay" allowfullscreen></iframe>`;
        popupVid.classList.add("on");
        document.body.classList.add("hidden");
    });
    closeBtn.addEventListener("click", () => {
        videoWrap.innerHTML = "";
        popupVid.classList.remove("on");
        document.body.classList.remove("hidden");
    });

    /* report2 */
    // 배경위치 변경
    function updateBgPos() {
        const report2 = document.querySelector(".report2");
        const scrollBefore = report2.querySelector(".scroll_before");
        // 스크롤 이동 한계값 = (report2.offsetHeight - window.innerHeight) + window.innerHeight
        // 시작위치: report2 - window.innerHeight * 2 / 3
        // 종료위치: report2 + window.innerHeight * 1 / 3
        let scrollHeight = report2.offsetHeight;
        // 현재 스크롤 위치
        let currentHeight = report2.getBoundingClientRect().top - (window.innerHeight / 3) * 2;
        // 퍼센트 업데이트
        let currentPercent = getPercent(currentHeight, scrollHeight);

        scrollBefore.style.clipPath = `inset(0px 0px ${currentPercent}% )`;
    } ////// updateBgPos

    // 퍼센트 계산
    function getPercent(current, overall) {
        if (current <= 0 && current >= -overall) {
            return Math.floor(Math.abs(current / overall) * 100);
        } else if (current > 0) {
            return 0;
        } else {
            return 100;
        }
    } ////// getPercent

    /* report3 */
    const report3 = document.querySelector(".report3");
    const textBallon = report3.querySelectorAll(".slide_wrap .text_wrap");

    // 이미지 넣기
    textBallon.forEach((ele, idx) => {
        let seq = idx + 1;
        ele.innerHTML += `
        <img src="./img/ballon0${seq}.png" alt="말풍선" class="text_ballon ballon${seq}">
        `;
    });

    // 이미지 위치 변경
    function moveImg() {
        const report3 = document.querySelector(".report3");
        const r3Imgs = report3.querySelectorAll(".text_ballon, .face");
        // 스크롤 이동 한계값
        let scrollHeight = report3.offsetHeight - window.innerHeight / 3;
        let currentHeight = report3.getBoundingClientRect().top - (window.innerHeight / 3) * 2;
        let currentPercent = 100 - getPercent(currentHeight, scrollHeight);
        r3Imgs.forEach((ele) => {
            ele.style.transform = `translateY(${currentPercent}px)`;
        });
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
    const r4Scroll = report4.querySelector(".scroll_wrap");

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

    // 텍스트 위치 변경
    function moveTxt() {
        const report4 = document.querySelector(".report4");
        const r4TxtTop = report4.querySelector(".scroll_wrap ul li:nth-child(1)");
        const r4TxtBottom = report4.querySelector(".scroll_wrap ul li:nth-child(2)");

        let scrollHeight = report4.offsetHeight + window.innerHeight;
        let currentHeight = report4.getBoundingClientRect().top - window.innerHeight;

        let currentPercent = getPercent(currentHeight, scrollHeight);
        r4TxtTop.style.left = `-${currentPercent * 5}px`;
        r4TxtBottom.style.right = `-${currentPercent * 5}px`;
    } ////// moveTxt

    /* report6 */
    const report6 = document.querySelector(".report6");
    const r6Slide = report6.querySelector(".report6 .slide_container");
    // 이미지 넣기
    for (let x = 0; x < 3; x++) {
        r6Slide.innerHTML += `<li><img src="./img/history.png" alt="밴드 히스토리"></li>`;
    }

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
                r6Slide.appendChild(firstSlide);
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
                        ${r7Data.map((obj) => `<li class="swiper-slide"><img src="${obj.img}" alt="지역 모임"></li>`)
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

    /* notice */
    const noticeWrap = document.querySelector(".notice_wrap");
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

    // 리스트 클릭시 슬라이드 효과
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
