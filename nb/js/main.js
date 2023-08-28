import noticeData from "./data/noticeData.js";

window.addEventListener("load", () => {
    window.addEventListener("scroll", () => {
        fixGnb();
        showTopBtn();
        getPercent();
    }); /////// scroll

    /* gnb */
    const header = document.getElementById("header");
    const report1 = document.querySelector(".report1");
    // gnb_상단고정
    function fixGnb() {
        const report1Pos = report1.getBoundingClientRect().top;
        report1Pos <= 0 ? header.classList.add("fixed") : header.classList.remove("fixed");
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
    function getPercent() {
        const report2 = document.querySelector(".report2");
        const scrollBefore = report2.querySelector(".scroll_before");
        // 스크롤 한계값: 타겟의 offsetHeight - window의 innerHeight
        // 스크롤 시작위치: report2 - innerHeight*3/5, 스크롤 종료위치: report2 + innerHeight*1/5
        let scrollHeight = report2.offsetHeight - window.innerHeight / 5;
        // 현재 스크롤 위치
        let currentHeight = -(report2.getBoundingClientRect().top - window.innerHeight / 5 * 3);

        let scrollPercent = Math.floor(currentHeight / scrollHeight * 100);
        if (scrollPercent >= 0 && scrollPercent <= 100) {
            scrollBefore.style.clipPath = `inset(0px 0px ${scrollPercent}% )`;
        }
    } ////// getPercent

    /* report3 */
    const report3 = document.querySelector(".report3");
    const textBallon = report3.querySelectorAll(".slide_wrap .text_wrap");
    textBallon.forEach((ele, idx) => {
        let seq = idx + 1;
        ele.innerHTML += `
            <img src="./img/ballon0${seq}.png" alt="말풍선" class="text_ballon ballon${seq}">
        `;
    });

    /* report4 */
    const report4 = document.querySelector(".report4");
    const scrollStart = report3.getBoundingClientRect().t;
    const scrollBox = report4.querySelectorAll("li");
    // scrollBox.forEach((e)=>{

    // });
    // report6 - 롤링이미지
    const report6Slide = $(".report6 .slide_wrap");
    for (let i = 0; i < 3; i++) {
        report6Slide.append(`<img src="./img/history.png" alt="밴드 히스트리">`);
    }
    report6Slide
        .find("img")
        .last()
        .on("load", () => {
            moveItem(report6Slide);
        });

    function moveItem(itemBox) {
        let itemPos = 0;
        let itemWidth = itemBox.find("img").width();
        setInterval(() => {
            itemPos--;
            if (itemPos < -itemWidth) {
                itemPos = 0;
                itemBox.append(itemBox.find("img").first());
            }
            itemBox.css({ left: itemPos + "px" });
        }, 11);
    }

    /* notice */
    const noticeWrap = document.querySelector(".notice_wrap");

    // 리스트 넣기
    noticeData.forEach((ele) => {
        const content = ele.content.split("^");
        let code = `<li>
                        <span class="notice_title">${ele.title}</span>
                        <div class="notice_list">
                            <ul>
                            ${content.map((x) => `<li>${x}</li>`).join("")}
                            </ul>
                        </div>
                    </li>`;
        noticeWrap.innerHTML += code;
    }); //// forEach

    // click-slideUp/Down
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
    }); //// forEach
}); ///////// load
