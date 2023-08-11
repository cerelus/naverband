window.addEventListener("load", () => {
    // 영상을 처음부터 시작
    document.getElementById("report0Vid").currentTime = 0;

    // gnb 스크롤 이벤트
    const header = document.getElementById("header");
    const report1 = document.querySelector(".section_report1");
    window.addEventListener("scroll", () => {
        const report1Pos = report1.getBoundingClientRect().top;
        if (report1Pos <= 0) {
            header.classList.add("fixed");
        } else {
            header.classList.remove("fixed");
        }
    }); /////// scroll

    // report3 - 말풍선 넣기
    const report3 = document.querySelector(".section_report3");
    const textBallon = report3.querySelectorAll(".slide_wrap .text_wrap");
    textBallon.forEach((ele, idx) => {
        let seq = idx + 1;
        ele.innerHTML += `
            <img src="./img/ballon0${seq}.png" alt="말풍선" class="text_ballon ballon${seq}">
        `;
    });
}); ///////// load
