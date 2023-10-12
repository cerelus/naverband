import { qnaData, resultData } from "./data/mbtiData.js";
import { getPercent } from "./common.js";

/* popup_video */
const visual = document.querySelector(".visual");
const viewBtn = visual.querySelector(".btn_view-video");
const popupVid = document.querySelector(".popup_video");
const vlVideoWrap = popupVid.querySelector(".video_wrap");
const vidCloseBtn = popupVid.querySelector(".btn_close");

viewBtn.addEventListener("click", () => {
  vlVideoWrap.innerHTML = `<iframe src='https://tv.naver.com/embed/28397077?autoPlay=true' 
            frameborder='0' allow='autoplay' allowfullscreen></iframe>`;
  popupVid.classList.add("on");
  document.body.classList.add("hidden");
});
vidCloseBtn.addEventListener("click", () => {
  vlVideoWrap.innerHTML = "";
  popupVid.classList.remove("on");
  document.body.classList.remove("hidden");
});

/* popup_mbti */
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

// 다음 qna 표시
function goNextQ(qIdx) {
  // 초기화
  if (qIdx === 0) {
    for (let x of typeScore) x.score = 1;
    resultWrap.remove();
    qnaWrap.style.display = "block";
  }
  // result 넣기
  if (qIdx === qCnt) {
    setResult();
    return;
  }
  setProgress(qIdx + 1);

  // 다음 qna 넣기
  let currentQna = qnaData[qIdx];
  question.innerHTML = `<span class="question_num">Q${qIdx + 1}</span>
                          <strong class="question_desc">${currentQna.q}</strong>`;
  setAnswer(currentQna.a, qIdx);
} ////// goNextQ

// 현재 진행상태 변경
let barRadius;

function setProgress(currentSeq) {
  const percent = getPercent(currentSeq, qCnt);
  progress.style.width = `${percent}%`;
  pagination.innerText = `${currentSeq}/${qCnt}`;

  currentSeq === qCnt ? (barRadius = 0) : (barRadius = "0 7px 7px 0");
  progress.style.borderRadius = barRadius;
} ////// setProgress

// 질문에 대한 답변 넣기
function setAnswer(currentA, qIdx) {
  let answers = "";
  currentA.forEach((ans) => {
    answers += `<button type="button" class="btn_answer">${ans.desc}</button>`;
  });
  answer.innerHTML = answers;

  let answerBtns = document.querySelectorAll(".answer .btn_answer");
  answerBtns.forEach((btn, bIdx) => {
    btn.addEventListener("click", function () {
      // 답변버튼 비활성화
      for (let x of answerBtns) {
        x.style.cursor = "default";
        x.disabled = true;
      }
      // 선택한 답변에 따른 타입점수를 typeScore에 더하기
      let selectedType = currentA[bIdx].type;
      typeScore.forEach((ele) => {
        if (ele.type === selectedType[0]) ele.score += selectedType[1];
      });

      // 다음 질문으로 변경
      setTimeout(() => {
        goNextQ(++qIdx);
      }, 100);
    }); //// click
  });
} ////// setAnswer

// mbti유형 리턴
function getType() {
  let type = "";

  typeScore[0].score > 3 ? (type += "E") : (type += "I");
  typeScore[1].score > 3 ? (type += "N") : (type += "S");
  typeScore[2].score > 3 ? (type += "T") : (type += "F");
  typeScore[3].score > 3 ? (type += "P") : (type += "J");

  return type;
}

// result 표시
function setResult() {
  let type = getType();
  let result;

  // mbti유형의 데이터 저장
  resultData.forEach((ele) => {
    if (ele.type === type) result = ele;
  });

  // 결과 넣기
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
                    <span class="progress" style="width:calc(${ele.score * 20}% - 2px); 
                      background-color: ${result.color};"></span>
                </div>
            </li>`
          )
          .join("")}
    </ul>
    <ul class="result_info">
        ${result.info.map((ele) => `<li>${ele}</li>`).join("")}
    </ul>
    <div class="result_band">
        <h4 class="sec_title">
            <span style="color:${result.color}">BAN</span>DNA
        </h4>
        <p class="sec_desc">내 DNA를 깨워줄 밴드는?</p>
        <ul class="band_list">
            ${result.band
              .map((ele) =>
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
  // qna 숨기기
  qnaWrap.style.display = "none";
  testCont.append(resultWrap);

  // result에 fadeIn 효과 주기
  resultWrap.style.opacity = 0;
  setTimeout(() => {
    resultWrap.style.opacity = 1;
  }, 600);
} ////// goResult

export default goNextQ;
