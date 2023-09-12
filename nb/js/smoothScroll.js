// Smooth Scroll JS Verson 2020.12
// 부드러운 스크롤 2020.12 버전
// arranged by Tom Brace Parker

// setSmoothScroll()함수를 호출하여 사용
function setSmoothScroll() {
    new SmoothScroll(document, 90, 10)
    // SmoothScroll(스크롤대상, 스피드, 부드러운정도)
}

// 전역변수 스크롤 위치값
let pos;

// 스크롤 위치 업데이트
function updateScrollPos(val){
    pos = val;
}

// mbti 팝업창
const popupMbti = document.querySelector(".popup_mbti");

function SmoothScroll(target, speed, smooth) {
    if (target === document)
        target = (document.scrollingElement ||
            document.documentElement ||
            document.body.parentNode ||
            document.body) // cross browser support for document scrolling

    var moving = false
    pos = target.scrollTop
    var frame = target === document.body &&
        document.documentElement ?
        document.documentElement :
        target // safari is the new IE

    target.addEventListener('mousewheel', scrolled, {
        passive: false
    })
    target.addEventListener('DOMMouseScroll', scrolled, {
        passive: false
    })

    function scrolled(e) {
        // mbti 팝업창에는 기본 스크롤 사용
        if(popupMbti.classList.contains("on")) return;
        
        e.preventDefault(); // disable default scrolling

        var delta = normalizeWheelDelta(e)

        pos += -delta * speed
        pos = Math.max(0, Math.min(pos, target.scrollHeight - frame.clientHeight)) // limit scrolling

        if (!moving) update()
    }

    function normalizeWheelDelta(e) {
        if (e.detail) {
            if (e.wheelDelta)
                return e.wheelDelta / e.detail / 40 * (e.detail > 0 ? 1 : -1) // Opera
            else
                return -e.detail / 3 // Firefox
        } else
            return e.wheelDelta / 120 // IE,Safari,Chrome
    }

    function update() {
        moving = true

        var delta = (pos - target.scrollTop) / smooth

        target.scrollTop += delta

        if (Math.abs(delta) > 0.5)
            requestFrame(update)
        else
            moving = false
    }

    var requestFrame = function () { // requestAnimationFrame cross browser
        return (
            window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function (func) {
                window.setTimeout(func, 1000 / 50);
            }
        );
    }()
}

export {setSmoothScroll, updateScrollPos};