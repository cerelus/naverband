import { qnaData, resultData } from '../assets/data/mbtiData.js';
import { getPercent } from './common.js';

const testCont = document.querySelector('.test_content');
const qnaWrap = document.createElement('div');
qnaWrap.className = 'qna_wrap';
const resultWrap = document.createElement('div');
resultWrap.className = 'result_wrap';
testCont.append(qnaWrap, resultWrap);

/* qna */
const qCnt = 12; // 질문 개수
// 타입별 점수
const typeScore = [
  { type: 'E', desc: '에너지력', score: 1 }, // 초기값: 1, 최대값: 5
  { type: 'N', desc: '모험력', score: 1 },
  { type: 'T', desc: '팩폭력', score: 1 },
  { type: 'P', desc: '번개력', score: 1 },
];
qnaWrap.innerHTML = `<div class='progress_bar'>
                      <span class='progress'></span>
                      <span class='pagination'></span>
                    </div>
                    <div class='question'></div>
                    <div class='answer'></div>`;
const progress = document.querySelector('.progress');
const pagination = document.querySelector('.pagination');
const question = document.querySelector('.question');
const answer = document.querySelector('.answer');

// 다음 질문 표시
function goNextQ(qIdx) {
  // 초기화
  if (qIdx === 0) {
    for (let x of typeScore) x.score = 1;
    resultWrap.style.display = 'none';
    qnaWrap.style.display = 'block';
  }
  // 결과 표시
  if (qIdx === qCnt) {
    goResult();
    return;
  }
  setProgress(qIdx + 1);
  // 현재 질문과 답변
  const { q, a } = qnaData[qIdx];
  question.innerHTML = `<span class='question_num'>Q${qIdx + 1}</span>
                          <strong class='question_desc'>${q}</strong>`;
  setAnswer(a, qIdx);
} ////// goNextQ

let barRadius;

// 현재 진행상태 변경
function setProgress(currentSeq) {
  const percent = getPercent(currentSeq, qCnt);
  progress.style.width = `${percent}%`;
  pagination.innerText = `${currentSeq}/${qCnt}`;

  currentSeq === qCnt ? (barRadius = 0) : (barRadius = '0 7px 7px 0');
  progress.style.borderRadius = barRadius;
} ////// setProgress

// 질문에 대한 답변버튼 설정
function setAnswer(currentAnswers, qIdx) {
  let btns = '';
  currentAnswers.forEach((ans) => {
    btns += `<button type='button' class='btn_answer'>${ans.desc}</button>`;
  });
  answer.innerHTML = btns;

  let answerBtns = document.querySelectorAll('.answer .btn_answer');
  answerBtns.forEach((btn, bIdx) => {
    btn.addEventListener('click', function () {
      // 답변버튼 비활성화
      for (let x of answerBtns) {
        x.style.cursor = 'default';
        x.disabled = true;
      }
      // 선택한 답변에 따른 타입점수를 typeScore에 더하기
      let selectedAnswer = currentAnswers[bIdx];
      typeScore.forEach((ele) => {
        if (ele.type === selectedAnswer.type) ele.score += selectedAnswer.score;
      });

      // 다음 질문으로 변경
      setTimeout(() => {
        goNextQ(++qIdx);
      }, 50);
    }); //// click
  });
} ////// setAnswer

// 테스트 결과 표시
function goResult() {
  let type = '';

  typeScore[0].score > 3 ? (type += 'E') : (type += 'I');
  typeScore[1].score > 3 ? (type += 'N') : (type += 'S');
  typeScore[2].score > 3 ? (type += 'T') : (type += 'F');
  typeScore[3].score > 3 ? (type += 'P') : (type += 'J');

  // 결과에 대한 데이터 저장
  const typeData = resultData.find((ele) => ele.type === type);
  setResult(typeData);

  // qna 숨기기
  qnaWrap.style.display = 'none';

  // result에 fadeIn 효과 주기
  resultWrap.style.opacity = 0;
  resultWrap.style.display = 'block';
  resultWrap.scrollTop = 0;

  setTimeout(() => {
    resultWrap.style.opacity = 1;
  }, 600);
} ////// goResult
// facebook

function setResult(result) {
  // 테스트 결과 넣기
  resultWrap.innerHTML = `
      <h2 class='result_title' style='color:${result.color}'>${result.title}</h2>
      <p class='result_desc'>${result.desc}</p>
      <div class='result_image'>
          <img src='${result.image}' alt='${result.type}'>
      </div>
      <ul class='result_graph'>
          ${typeScore
            .map(
              (ele) =>
                `<li>
                <span>${ele.desc}</span>
                <div class='progress_bar'>
                    <div class='seperator'>
                        ${Array.from(Array(5), (ele) => `<span></span>`).join('')}
                    </div>
                    <span class='progress' style='width:calc(${ele.score * 20}% - 2px); 
                      background-color: ${result.color};'></span>
                </div>
            </li>`
            )
            .join('')}
      </ul>
      <ul class='result_info'>
          ${result.info.map((ele) => `<li>${ele}</li>`).join('')}
      </ul>
      <div class='result_band'>
          <h4 class='sec_title'>
              <span style='color:${result.color}'>BAN</span>DNA
          </h4>
          <p class='sec_desc'>내 DNA를 깨워줄 밴드는?</p>
          <ul class='band_list'>
              ${result.band
                .map(
                  (ele) =>
                    `<li>
                  <a href='${ele.link}' target='_blank'>
                      <div class='band_image'>
                          <img src='${ele.image}' alt='${ele.name}'>
                      </div>
                      <div class='band_info'>
                          <p class='band_desc'>
                              <span style='color:${result.color}'>${result.title}</span>
                              DNA를 위한 모임 추천
                          </p>
                          <h4 class='band_name'>${ele.name}</h4>
                      </div>
                  </a>
              </li>`
                )
                .join('')}
          </ul>
      </div>
      <div class='result_btn'>
        <button type='button' class='btn_replay'>다시하기</button>
      </div>
    `;
  
  const replayBtn = document.querySelector('.btn_replay');
  replayBtn.addEventListener('click', () => goNextQ(0));
} ////// setResult

export default goNextQ;
