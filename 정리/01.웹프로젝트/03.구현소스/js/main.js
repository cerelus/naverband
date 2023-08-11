// 공통함수
const qs = (x) => document.querySelector(x);
const qsa = (x) => document.querySelectorAll(x);

const addCls = (x, y) => x.classList.add(y);
const removeCls = (x, y) => x.classList.remove(y);

window.addEventListener("DOMContentLoaded", () => {
    //////////////////////////////
    /////// sect1 - visual ///////
    /////////////////////////////

    /* 슬라이드 */
    const visualSlide = qs(".visual__slide");
    const slideList = qsa(".visual__slide>li");
    const visualArrow = qsa(".visual__paginate>.arrow");
    const currentPage = qs(".page span:first-child");

    let prot = 0;
    // 페이지번호 변수
    let scnt = 1;

    // 슬라이드 순번지정
    slideList.forEach((ele, idx) => {
        ele.setAttribute("data-num", idx);
    }); /// forEach ///

    const goVisual = (idx) => {
        if (prot) return;
        prot = 1;

        setTimeout(() => {
            prot = 0;
        }, 400);

        // 현재리스트 순서
        let currentList = qsa(".visual__slide>li");
        const vs = visualSlide.style;

        if (idx) {
            scnt++;

            vs.left = "-100%";
            vs.transition = "left .5s ease-out";

            setTimeout(() => {
                visualSlide.appendChild(currentList[0]);
                vs.left = 0;
                vs.transition = "none";
            }, 500);
        } //// if ////
        else {
            scnt--;

            visualSlide.insertBefore(currentList[currentList.length - 1], currentList[0]);
            vs.left = "-100%";
            vs.transition = "none";

            // 그 이후 슬라이드 이동
            setTimeout(() => {
                vs.left = "0";
                vs.transition = "left .5s ease-out";
            }, 0);
        } //// else ////

        // 한계값
        if (scnt === 0) scnt = slideList.length;
        else if (scnt === slideList.length + 1) {
            scnt = 1;
        }

        // 현재페이지 출력
        currentPage.innerHTML = "0" + scnt;
    }; //// goVisual() ////

    // 화살표버튼
    visualArrow.forEach((ele, idx) => {
        ele.onclick = () => {
            goVisual(idx);
            clearAuto();
        }; //// click ////
    }); //// forEach ////

    let autoI;
    let autoT;

    function autoSlide() {
        autoI = setInterval(() => goVisual(1), 5000);
    } //// autoSlide() ////

    // 최초호출
    autoSlide();

    function clearAuto() {
        clearInterval(autoI);
        clearTimeout(autoT);

        autoT = setTimeout(autoSlide, 5000);
    } //// clearAuto() ////

    //////////////////////////////
    /////// sect2 - menu ////////
    /////////////////////////////

    /* 슬라이드 */
    const menuBtn = qsa(".menu__tit ul li");
    const menuWrap = qs(".menu__wrap");

    
    //// 버튼 필터기능 추가 ////
    menuBtn.forEach((ele) => {
        // 최초호출
        newFilter();

        ele.onclick = () => {
            // 버튼 클릭시 텍스트 읽어오기
            let menuText = ele.innerText.toLowerCase();
            // 신제품일때
            menuText === "new" ? newFilter() : productFilter(menuText);
            
            // 클릭시 포커스
            for (let x of menuBtn) removeCls(x, "menu_on");
            addCls(ele, "menu_on");
        }; //// click ////
    }); //// forEach ////
    
    //// 신제품필터함수 ////
    function newFilter() {
        // 신제품 배열만들기
        let na = [];
        mdata.forEach((ele) => {
            for (let x of ele.product) {
                // 신제품일때
                if (x.new === "y") na.push(x);
            }
        });
        printProduct(na);
    } //// newFilter() ////

    //// 제품필터함수 ////
    function productFilter(val) {
        let pa = [];
        // 읽어온 텍스트가 포함된 값을 가지고있는 객체 불러오기
        let pf = mdata.filter((data) => data.sort.includes(val));
        pf.forEach((ele) => {
            for (let x of ele.product) {
                pa.push(x);
            }
        });
        printProduct(pa);
    } //// productFilter(); ////

    //// 제품출력함수 ////
    function printProduct(array) {
        let hcode = `<ul class="menu__slide">`;

        for (let x of array) {
            hcode += `
                <li>
                    <a href="#">
                        <div class="imgbx">
                            <img src="./images/${x.image}" alt="" />
                        </div>
                        <div class="itemtxt">
                            <strong>${x.name}</strong>
                            <span>${x.descript}</span>
                        </div>
                    </a>
                </li>
            `;
        }
        menuWrap.innerHTML = hcode + "</ul>";

        arrangeList();
    } //// printProduct() ////

    //// 리스트 배치함수 ////
    function arrangeList() {
        // li의 left값
        let leftPos = 0;
        const menuList = qsa(".menu__slide li");

        menuList.forEach((ele) => {
            ele.style.left = leftPos + "px";
            leftPos += ele.clientWidth;

            // 오버시 슬라이드 시작/멈춤
            ele.onmouseenter = () => {
                clearInterval(moveS);
                addCls(ele, "focus");
            };
            ele.onmouseleave = () => {
                goSlide();
                removeCls(ele, "focus");
            }
        });
    } //// arrangeList() ////

    // 슬라이드 이동변수
    let moveS;

    //// 슬라이드 이동함수 ////
    function goSlide() {
        moveS = setInterval(() => {
            let menuList = qsa(".menu__slide li");
            menuList.forEach((ele) => {
                ele.style.left = ele.offsetLeft - 1 + "px";
            });

            // 첫번째, 마지막 li
            let firstCont = menuList[0];
            let lastCont = menuList[menuList.length - 1];

            // li 자르기
            let listWidth = firstCont.clientWidth;
            if (Math.abs(firstCont.offsetLeft) > listWidth) {
                document.querySelector(".menu__slide").appendChild(firstCont);
                // 첫번째 li 마지막에 배치
                firstCont.style.left = lastCont.offsetLeft + lastCont.clientWidth + "px";
            }
        }, 10);
    } //// goSlide() ////

    // 최초호출
    goSlide();



    // window.addEventListener("DOMContentLoaded", () => {

        console.log("sect4");
        const outbx = document.querySelector(".wrapping");
        const inbx = document.querySelector("#brand");

        const nav = document.querySelectorAll(".brand__list li");

        window.addEventListener("scroll", () => {
            let starPoint = outbx.offsetTop;
            let endPoint = outbx.offsetTop + outbx.offsetHeight - window.innerHeight;

            const mv = inbx.querySelectorAll(".mv");
            mv.forEach((ele, idx) => {
                const part = (endPoint - starPoint) / mv.length;
                const startMove = starPoint + part * idx;
                const endMove = starPoint + part * (idx + 1);

                if (window.scrollY <= startMove) {
                    ele.style.transform = `translate3d(0, 0, 0)`;

                    for (let x of nav) x.classList.remove("brand_on");
                    nav[0].classList.add("brand_on");

                } else if (window.scrollY >= endMove) {
                    ele.style.transform = `translate3d(0, -100%, 0)`;

                    for (let x of nav) x.classList.remove("brand_on");
                    nav[idx + 1].classList.add("brand_on");
                    
                } else {
                    ele.style.transform = `translate3d(0, ${((window.scrollY - startMove) / part) * -100}%, 0)`;
                }
            });
        });
    // });





























    //////////////////////////////
    /////// sect4 - follow-us ////////
    /////////////////////////////
    const carousel = document.querySelector(".carousel");
            const cList = carousel.querySelectorAll("img");
            const arrowBtns = document.querySelectorAll(".wrapper i");

            let isDragStart = false;

            // 이전 위치값, 이전 가로스크롤값
            let prevX, lastX, diffX;

            let autoSlideF = () => {
                diffX = Math.abs(diffX);
                let firstImgWidth = cList[0].clientWidth;
                console.log("hi", carousel.scrollLeft, lastX, diffX);
                if (carousel.scrollLeft == 0 || carousel.scrollLeft < lastX) {
                    if (diffX > firstImgWidth / 3) {
                        carousel.scrollLeft = lastX - firstImgWidth;
                    } else {
                        carousel.scrollLeft = lastX;
                    }
                } else {
                    if (diffX > firstImgWidth / 3) {
                        carousel.scrollLeft = lastX + firstImgWidth;
                    } else {
                        carousel.scrollLeft = lastX;
                    }
                }
            };

            const dragStart = (e) => {
                isDragStart = true;
                prevX = e.pageX || e.changedTouches[0].pageX;
                lastX = carousel.scrollLeft;
            };

            const dragStop = () => {
                isDragStart = false;
                carousel.classList.remove("drag");
                autoSlideF();
            };

            const dragging = (e) => {
                if (!isDragStart) return;
                e.preventDefault();
                carousel.classList.add("drag");
                diffX = (e.pageX || e.changedTouches[0].pageX) - prevX;
                carousel.scrollLeft = lastX - diffX;
                showIcons();
            };
            carousel.addEventListener("mousedown", dragStart);
            carousel.addEventListener("touchstart", dragStart);

            carousel.addEventListener("mouseup", dragStop);

            carousel.addEventListener("mousemove", dragging);
            carousel.addEventListener("touchmove", dragging);

            carousel.addEventListener("mouseleave", dragStop);
            carousel.addEventListener("touchend", dragStop);

            arrowBtns.forEach((ele, idx) => {
                ele.addEventListener("click", () => {
                    carousel.scrollLeft += idx ? cList[0].clientWidth : -cList[0].clientWidth;
                    setTimeout(() => showIcons(), 60);
                });
            });

            const showIcons = () => {
                let scrollW = carousel.scrollWidth - carousel.clientWidth;
                arrowBtns[0].style.display = carousel.scrollLeft < 0 ? "none" : "block";
                arrowBtns[1].style.display = carousel.scrollLeft >= scrollW ? "none" : "block";
            };

    






}); //// load ////

