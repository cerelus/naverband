import { qnaData, resultData } from "./data/mbtiData.js";
import { getPercent } from "./common.js";

/* 모임유형 테스트 */
const testCont = document.querySelector(".test_content");
const qnaWrap = document.createElement("div");
qnaWrap.className = "qna_wrap";
const resultWrap = document.createElement("div");
resultWrap.className = "result_wrap";

// 초기 설정
const qCnt = 12; // 질문 개수
const typeCnt = [
    { type: "E", cnt: 1 }, // 초기값: 1, 최대값: 5
    { type: "N", cnt: 1 },
    { type: "T", cnt: 1 },
    { type: "P", cnt: 1 },
];
qnaWrap.innerHTML = `<div class="progress">
<span class="progress_bar"></span>
                          <span class="pagination"></span>
</div>
                     <div class="question"></div>
                     <div class="answer"></div>`;
testCont.append(qnaWrap);

const progressBar = document.querySelector(".progress_bar");
const pagination = document.querySelector(".pagination")
const question = document.querySelector(".question");
const answer = document.querySelector(".answer");

// 다음 질문으로 변경
function goNextQ(qIdx) {
    // 초기화
    if (qIdx === 0) {
        for (let x of typeCnt) x.cnt = 1;
        resultWrap.remove();
        qnaWrap.style.display = "block";
    }
    // 결과 표시
    if (qIdx === qCnt) {
        setResult();
        return;
    }
    setProgress(qIdx + 1);
    // 화면에 표시할 질문과 답변 선택
    let currentQna = qnaData[qIdx];
    // 질문 변경
    question.innerHTML = `<span class="question_num">Q${qIdx + 1}</span>
    <strong class="question_txt">${currentQna.q}</strong>`;
    
    setAnswer(currentQna.a, qIdx);
} ////// goNextQ

// 현재 진행상태 변경
function setProgress(currentSeq) {
    const percent = getPercent(currentSeq, qCnt);
    progressBar.style.width = `${percent}%`;
    pagination.innerText = `${currentSeq}/${qCnt}`;

    if (currentSeq === qCnt) {
        progressBar.style.borderRadius = 0;
    } else {
        progressBar.style.borderRadius = "0 7px 7px 0";
    }
} ////// setProgress

// 질문에 대한 답변 설정
function setAnswer(currentA, qIdx) {
    let answers = "";
    currentA.forEach((ans) => {
        answers += `<button type="button" class="btn_answer">${ans.txt}</button>`;
    });
    answer.innerHTML = answers;

    question.style.opacity = 1;
    answer.style.opacity = 1;

    let answerBtns = document.querySelectorAll(".answer .btn_answer");
    answerBtns.forEach((btn, bIdx) => {
        btn.addEventListener("click", function () {
            btn.style.backgroundColor = "#0dcb67";
            btn.style.color = "#fff";

            for (let x of answerBtns) {
                x.style.cursor = "default";
                x.disabled = true;
            }
            // 선택한 질문에 대한 type의 count 더하기
            let selectedType = currentA[bIdx].type;
            typeCnt.forEach((obj) => {
                if (obj.type === selectedType[0]) obj.cnt += selectedType[1];
            });

            question.style.opacity = 0;
            answer.style.opacity = 0;

            // 다음 질문 표시
            setTimeout(() => {
                goNextQ(++qIdx);
                
            }, 300);
        }); //// click
    });
} ////// setAnswer

// 최종타입 반환
function getType() {
    let type = "";

    typeCnt[0].cnt > 3 ? (type += "E") : (type += "I");
    typeCnt[1].cnt > 3 ? (type += "N") : (type += "S");
    typeCnt[2].cnt > 3 ? (type += "T") : (type += "F");
    typeCnt[3].cnt > 3 ? (type += "P") : (type += "J");

    return type;
}

// 테스트 결과 표시
function setResult() {
    let type = getType();
    let result;
    resultData.forEach((obj) => {
        if (obj.type === type) result = obj;
    });

    resultWrap.innerHTML = `
    <h2 class="result_title" style="color:${result.color}">${result.title}</h2>
    <p class="result_desc">${result.desc}</p>
    <div class="result_img">
        <img src="${result.img}" alt="${result.type}">
    </div>
    <ul class="result_graph">
        <li>
            <span>에너지력</span>
            <div class="progress">
                <div class="seperator">
                    ${
                        Array.from(Array(4), x => `<span class="seperator"></span>`).join('')
                    }
                </div>
                <span class="progress_bar"></span>
            </div>
        </li>
    </ul>
    <ul class="result_info"></ul>
    <div class="b">
    `;
    qnaWrap.style.display = "none";

    testCont.append(resultWrap);
    resultWrap.style.opacity = 0;
    setTimeout(() => {
        resultWrap.style.opacity = 1;
    }, 500);
    
} ////// goResult

export default goNextQ;
