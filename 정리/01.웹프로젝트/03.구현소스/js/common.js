
window.addEventListener("DOMContentLoaded", () => {

   

    // gnb
    const gnb = document.querySelector(".gnb");

    gnb.addEventListener("mouseenter", function () {
        this.classList.add("on");
    });
    gnb.addEventListener("mouseleave", function () {
        this.classList.remove("on");
    });

    // hamber btn
    const ham = document.querySelector(".ham");
    const mobile = document.querySelector(".mobile");

    ham.addEventListener("click", function () {
        this.classList.toggle("btn_on");
        mobile.classList.toggle("mbtn_on");
    });

    const gnbMenu = document.querySelectorAll(".m_gnb>ul>li");
    const gnbList = document.querySelectorAll(".m_gnb__sub");
    const gnbPlus = document.querySelectorAll(".m_gnb__menu i");

    gnbMenu.forEach((ele, idx) => {
        ele.onclick = () => {
            initMenu(idx);

            let gnbSub = ele.querySelector(".m_gnb__sub");
            let gnbSubList = gnbSub.querySelector("ul").clientHeight;
            // mobile gnb plus
            let gnbBtn = ele.querySelector("i");

            if (gnbSub.clientHeight != 0) {
                gnbSub.style.height = 0;
                gnbBtn.classList.replace("fa-minus", "fa-plus");
            } else {
                gnbSub.style.height = gnbSubList + "px";
                gnbBtn.classList.replace("fa-plus", "fa-minus");
            }
        };
    });

    function initMenu(seq) {
        gnbList.forEach((ele, idx) => {
            if (idx === seq) return;
            ele.style.height = 0;
        });

        gnbPlus.forEach((ele, idx) => {
            if (idx === seq) return;
            ele.classList.replace("fa-minus", "fa-plus");
        });
    }
    const retVal = (ele) => ele.getBoundingClientRect().top;
     const act = document.querySelectorAll(".act");

     // 화면높이값의 2/3구하기
     const hv = window.innerHeight/3*2;

     const showIt = (ele) => {
         // ele - 등장요소
         // 대상요소의 현재스크롤 위치
         let xval = retVal(ele);
 
         // 구간적용여부 검사하기
         // 0보다 크고 화면의 2/3보다 작은 구간!
         if (xval < hv && xval > 0) {
             console.log("작동!~~~~");
             // 해당요소에 클래스 넣기!
             ele.classList.add("on");
         }
     }; //////////// showIt //////////

    window.addEventListener("scroll", () => {

        for(let x of act) showIt(x);

    }); //////// scroll ///////

});



// 현재위치
let cscroll;
// 마지막위치
let lscroll = 0;
// 네비게이션 높이
const navHeight = $("#top").outerHeight();
console.log(navHeight);

$(window).scroll(function (event) {
    cscroll = $(this).scrollTop();
    if (cscroll > lscroll) {
        // 스크롤 내릴때
        $("#top").addClass("hidden");
    } else {
        // 스크롤 올릴때
        $("#top").removeClass("hidden");
    }
    // 스크롤값 업데이트
    lscroll = cscroll;
});
