window.addEventListener("load", () => {
    // 영상을 처음부터 시작
    document.getElementById("report0Vid").currentTime = 0;

    // gnb 스크롤 이벤트
    const header = document.getElementById("header");
    const report1 = document.querySelector(".report1");
    window.addEventListener("scroll", () => {
        const report1Pos = report1.getBoundingClientRect().top;
        if (report1Pos <= 0) {
            header.classList.add("fixed");
        } else {
            header.classList.remove("fixed");
        }
    }); /////// scroll

    // report3 - 말풍선 넣기
    const report3 = document.querySelector(".report3");
    const textBallon = report3.querySelectorAll(".slide_wrap .text_wrap");
    textBallon.forEach((ele, idx) => {
        let seq = idx + 1;
        ele.innerHTML += `
            <img src="./img/ballon0${seq}.png" alt="말풍선" class="text_ballon ballon${seq}">
        `;
    });

    // report4 - 스크롤 이벤트
    const report4 = document.querySelector(".report4");
    const scrollStart = report3.getBoundingClientRect().t
    const scrollBx = report4.querySelectorAll("li");
    scrollBx.addEventListener("scroll",()=>{

    }); //// scroll

    // report6 - 롤링이미지
    const report6Slide = $(".report6 .slide_wrap");
    for (i = 0; i < 3; i++) {
        report6Slide.append(`<img src="./img/history.png" alt="밴드 히스트리">`);
    }
    report6Slide.find("img").last().on("load",() => {
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

    // notice
    const noticeTit = document.querySelectorAll(".notice .notice_title");
    toggleCls(noticeTit, "on");
    function toggleCls(target, classname){
        target.forEach((ele)=>{
            ele.onclick = function(){
                this.classList.toggle(classname);
            };
        });
    }
}); ///////// load
