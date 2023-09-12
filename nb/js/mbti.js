import { qnaData, resultData } from "./data/mbtiData.js";
import { getPercent } from "./common.js";

const testCont = document.querySelector(".test_content");
const qnaWrap = document.createElement("div");
qnaWrap.className = "qna_wrap";
const resultWrap = document.createElement("div");
resultWrap.className = "result_wrap";

const qCnt = 12; // 질문 개수
// 타입별 점수
const typeScore = [
    { type: "E", desc: "에너지력", score: 1 }, // 초기값: 1, 최대값: 5
    { type: "N", desc: "모험력", score: 1 },
    { type: "T", desc: "팩폭력", score: 1 },
    { type: "P", desc: "번개력", score: 1 },
];
// qna 페이지 넣기
qnaWrap.innerHTML = `<div class="progress_bar">
    <span class="progress"></span>
    <span class="pagination"></span>
</div>
<div class="question"></div>
<div class="answer"></div>`;
testCont.append(qnaWrap);

const progress = document.querySelector(".progress");
const pagination = document.querySelector(".pagination");
const question = document.querySelector(".question");
const answer = document.querySelector(".answer");

// 다음 질문으로 변경
function goNextQ(qIdx) {
    // 초기화
    if (qIdx === 0) {
        for (let x of typeScore) x.score = 1;
        resultWrap.remove();
        qnaWrap.style.display = "block";
    }
    // mbti검사 결과 표시
    if (qIdx === qCnt) {
        setResult();
        return;
    }
    setProgress(qIdx + 1);
    // 화면에 표시할 질문과 답변 선택
    let currentQna = qnaData[qIdx];
    // 질문 변경
    question.innerHTML = `<span class="question_num">Q${qIdx + 1}</span>
                          <strong class="question_desc">${currentQna.q}</strong>`;

    setAnswer(currentQna.a, qIdx);
} ////// goNextQ

// 현재 진행상태 변경
function setProgress(currentSeq) {
    const percent = getPercent(currentSeq, qCnt);
    progress.style.width = `${percent}%`;
    pagination.innerText = `${currentSeq}/${qCnt}`;

    // 진행상태바 둥글게
    if (currentSeq === qCnt) {
        progress.style.borderRadius = 0;
    } else {
        progress.style.borderRadius = "0 7px 7px 0";
    }
} ////// setProgress

// 질문에 대한 답변 넣기
function setAnswer(currentA, qIdx) {
    let answers = "";
    currentA.forEach((ans) => {
        answers += `<button type="button" class="btn_answer">${ans.desc}</button>`;
    });
    answer.innerHTML = answers;

    // fadeIn 효과주기
    question.style.opacity = 1;
    answer.style.opacity = 1;

    let answerBtns = document.querySelectorAll(".answer .btn_answer");
    answerBtns.forEach((btn, bIdx) => {
        btn.addEventListener("click", function () {
            btn.style.backgroundColor = "#0dcb67";
            btn.style.color = "#fff";

            // 답변버튼 비활성화
            for (let x of answerBtns) {
                x.style.cursor = "default";
                x.disabled = true;
            }
            // 선택한 답변에 대한 타입의 점수를 typeScore에 더하기
            let selectedType = currentA[bIdx].type;
            typeScore.forEach((ele) => {
                if (ele.type === selectedType[0]) ele.score += selectedType[1];
            });

            // fadeOut 효과주기
            question.style.opacity = 0;
            answer.style.opacity = 0;

            // 다음 질문 표시
            setTimeout(() => {
                goNextQ(++qIdx);
            }, 250);
        }); //// click
    });
} ////// setAnswer

// 최종 mbti유형 리턴
function getType() {
    let type = "";

    typeScore[0].score > 3 ? (type += "E") : (type += "I");
    typeScore[1].score > 3 ? (type += "N") : (type += "S");
    typeScore[2].score > 3 ? (type += "T") : (type += "F");
    typeScore[3].score > 3 ? (type += "P") : (type += "J");

    return type;
}

// result 페이지 표시
function setResult() {
    let type = getType();
    let result;
    // 최종 mbti유형에 대한 데이터 저장
    resultData.forEach((ele) => {
        if (ele.type === type) result = ele;
    });
    // result 페이지 넣기
    resultWrap.innerHTML = `
    <h2 class="result_title" style="color:${result.color}">${result.title}</h2>
    <p class="result_desc">${result.desc}</p>
    <div class="result_img">
        <img src="${result.img}" alt="${result.type}">
    </div>
    <ul class="result_graph">
        ${typeScore
            .map(
                (ele) =>
                    `<li>
                <span>${ele.desc}</span>
                <div class="progress_bar">
                    <div class="seperator">
                        ${Array.from(Array(5), (ele) => `<span></span>`).join("")}
                    </div>
                    <span class="progress" style="width:calc(${ele.score * 20}% - 2px); background-color: ${
                        result.color
                    };"></span>
                </div>
            </li>`
            )
            .join("")}
    </ul>
    <ul class="result_info">
        ${result.info
            .map(
                (ele) => `
            <li>${ele}</li>
        `
            )
            .join("")}
    </ul>
    <div class="result_band">
        <h4 class="sec_title">
            <span style="color:${result.color}">BAN</span>DNA
        </h4>
        <p class="sec_desc">내 DNA를 깨워줄 밴드는?</p>
        <ul class="band_list">
            ${result.band
                .map(
                    (ele) =>
                        `<li>
                    <a href="${ele.link}" target="_blank">
                        <div class="band_img">
                            <img src="${ele.img}" alt="${ele.name}">
                        </div>
                        <div class="band_info">
                            <p class="band_desc">
                                <span style="color:${result.color}">${result.title}</span>
                                DNA를 위한 모임 추천
                            </p>
                            <h4 class="band_name">${ele.name}</h4>
                        </div>
                    </a>
                </li>`
                )
                .join("")}
        </ul>
    </div>
    `;
    // qna 페이지 숨기기
    qnaWrap.style.display = "none";
    testCont.append(resultWrap);
    resultWrap.style.opacity = 0;
    // result 페이지 fadeIn 효과 주기
    setTimeout(() => {
        resultWrap.style.opacity = 1;
    }, 600);
} ////// goResult

export default goNextQ;
