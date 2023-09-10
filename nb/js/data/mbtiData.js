/* 
    E:에너지력, N:모험력, T:팩폭력, P:번개력
*/
const qnaData = [
    {
        q: "일주일 동안<br>내 모임 약속은 …",
        a: [
            { txt: "하루 놀면 하루 휴식! 징검다리 필수", type: ["E", 1] },
            { txt: "3일 연속 약속도 거뜬", type: ["E", 2] },
            { txt: "일주일에 한 번도 고민", type: ["E", 0] },
        ],
    },
    {
        q: "선호하는<br>약속 장소는?",
        a: [
            { txt: "웨이팅, 두렵지 않아! 핫플로", type: ["E", 1] },
            { txt: "조용한 곳이 좋아! 한적한 골목길로", type: ["E", 0] },
        ],
    },
    {
        q: "장소가 정해졌다!<br>그럼 나는",
        a: [
            { txt: "주변 맛집 놀거리 모두 탐색 완료!", type: ["P", 0] },
            { txt: "당일에 알아보고 바로 출발", type: ["P", 2] },
            { txt: "얼마나 걸리지? 가는 길 미리 체크", type: ["P", 1] },
        ],
    },
    {
        q: "내일은 약속 날!<br>단체 그룹방은 잠잠한데..",
        a: [
            { txt: "누가 말 꺼내기 전까지 기다리기", type: ["E", 0] },
            { txt: "어디서 볼래? 먼저 연락하기", type: ["E", 1] },
        ],
    },
    {
        q: "약속 장소에<br>늦게 도착했을 때 나는",
        a: [
            { txt: "왜 늦었는지 설명부터", type: ["T", 1] },
            { txt: "일단 사과부터", type: ["T", 0] },
        ],
    },
    {
        q: "가기로 했던 식당이 닫았다!<br>어디로 가지?",
        a: [
            { txt: "가본 적 있는 식당", type:  ["N", 0] },
            { txt: "바로 옆에 있는 새로운 식당", type: ["N", 1] },
        ],
    },
    {
        q: "가고 싶었던 카페 도착!<br>아무도 없이 휑한 분위기에, 나는",
        a: [
            { txt: "다른 카페를 검색한다", type: ["N", 0] },
            { txt: "감각을 믿고 우선 들어간다", type: ["N", 1] },
        ],
    },
    {
        q: "카페에서 메뉴 선택 중<br>어떤 걸 마셔볼까?",
        a: [
            { txt: "사장님 추천! 랜덤 음료", type: ["N", 2] },
            { txt: "카페 시그니처 메뉴", type: ["N", 1] },
            { txt: "무난하게 아메리카노", type: ["N", 0] },
        ],
    },
    {
        q: "친구가 고민을<br>털어놓을 때, 나는",
        a: [
            { txt: "진짜 힘들었겠다. 기분은 괜찮아?", type: ["T", 0] },
            { txt: "그래서 지금은 해결된 거야?", type: ["T", 1] },
        ],
    },
    {
        q: "친구와 의견이<br>갈릴 때 나는",
        a: [
            { txt: "‘음, 그럴 수 있지’ 마인드 장착", type: ["T", 1] },
            { txt: "‘난 다르게 생각해’ 토론 모드 돌입", type:  ["T", 2] },
            { txt: "‘네 말이 맞는 거 같아’ 100% 끄덕끄덕", type:  ["T", 0] },
        ],
    },
    {
        q: "친구가 ‘우리 이제 뭐 하지?’<br>라고 물었을 때",
        a: [
            { txt: "이다음은 여기! 플랜대로 이동!", type: ["P", 0] },
            { txt: "일단 나가서 뭐 있는지 보고 정할까?", type: ["P", 1] },
        ],
    },
    {
        q: "한가로운 주말,<br>친구가 집 근처로 나오라고 한다면?",
        a: [
            { txt: "지금…? 급작스러운 제안에 당황한다", type: ["P", 0] },
            { txt: "편안한 차림으로 바로 나간다", type: ["P", 1] },
        ],
    },
];

const resultData = [
    {
        title: "배려만점",
        desc: "스윗농도 100% 배려만점 DNA",
        img: "./img/dna/type01.png",
        info: [
            "나만의 일상 루틴을 만들고 지키는 걸 좋아하는 편",
            "인정받는 건 좋지만, 과한 스포트라이트는 부담!",
            "상대방의 사소한 점을 잘 기억하는 유죄 인간",
            "참다 터지면 칼같이 관계를 끊어내는 스타일",
        ],
        band: [
            { img: "./img/dna/band15.png", name: "취미 인기 밴드" },
            { img: "./img/dna/band16.png", name: "습관 미션 인증 밴드" },
        ],
        color: "#bb58ea",
        type: "ISFJ",
    },
    {
        title: "슈퍼꼼꼼",
        desc: "빠트린 건 없지? 슈퍼꼼꼼 DNA",
        img: "./img/dna/type02.png",
        info: [
            "계획과 원칙은 나를 상징하는 단어",
            "타인에게 먼저 다가가는 것에 어려움을 느끼는 편",
            "늘 만나던 친구, 자주 가던 식당처럼 익숙한 모임 선호",
            "계획하지 않았던 번개 만남은 부담부담!",
        ],
        band: [
            { img: "./img/dna/band14.png", name: "경제/재테크 인기 밴드" },
            { img: "./img/dna/band03.png", name: "글쓰기 미션 인증 밴드" },
        ],
        color: "#bb58ea",
        type: "ISTJ",
    },
    {
        title: "복세편살",
        desc: "복잡한 세상 편하게 살자 복세편살 DNA",
        img: "./img/dna/type03.png",
        info: [
            "미루기 장인이지만, 때가 되면 누구보다 열심히!",
            "탁월한 공감 능력의 소유자",
            "약속이 갑자기 취소되면 내적 기쁨이 2배",
            "싫은 사람이 생기면 티를 내지 않고 조용히 멀어지는 편",
        ],
        band: [
            { img: "./img/dna/band11.png", name: "맛집 인기 밴드" },
            { img: "./img/dna/band21.png", name: "그림/공예 미션 인증 밴드" },
        ],
        color: "#07b53b",
        type: "ISFP",
    },
    {
        title: "척척박사",
        desc: "걸어다니는 지식iN 척척박사 DNA",
        img: "./img/dna/type04.png",
        info: [
            "여러 분야에서 다재다능한 재주꾼",
            "눈치가 빨라서 상황 파악이 빠른 편",
            "첫인상은 차가워 보여도 내 사람들에게는 정이 많은 편",
            "마음에도 없는 빈말은 굳이 No!",
        ],
        band: [
            { img: "./img/dna/band20.png", name: "IT 인기 밴드" },
            { img: "./img/dna/band09.png", name: "스터디 미션 인증 밴드" },
        ],
        color: "#07b53b",
        type: "ISTP",
    },
    {
        title: "반전매력",
        desc: "모임에 따라 180도 변신 반전매력 DNA",
        img: "./img/dna/type05.png",
        info: [
            "스스로에게 엄격한 완벽주의자",
            "외로움을 잘 타지만, 고독을 즐기기도 하는 편",
            "상대에 따라 성격이 달라져 나조차도 혼란스러운 편",
            "배려, 예의가 없는 사람과는 대화 차단",
        ],
        band: [
            { img: "./img/dna/band08.png", name: "드라마 인기 밴드" },
            { img: "./img/dna/band16.png", name: "습관 미션 인증 밴드" },
        ],
        color: "#1ba7e9",
        type: "INFJ",
    },
    {
        title: "평화지킴이",
        desc: "둥글게 둥글게 평화지킴이 DNA",
        img: "./img/dna/type06.png",
        info: [
            "아늑하고 감성적인 분위기를 선호",
            "이야기를 잘 들어주는 프로경청러",
            "다른 사람의 시선이 신경 쓰여 거절을 못 하는 편",
            "갈등이 생기는 상황은 최대한 피하고 싶어요!",
        ],
        band: [
            { img: "./img/dna/band10.png", name: "문화/예술 인기 밴드" },
            { img: "./img/dna/band01.png", name: "독서 미션 인증 밴드" },
        ],
        color: "#1ba7e9",
        type: "INFP",
    },
    {
        title: "겉바속촉",
        desc: "무심한 듯 다정한 겉바속촉 DNA",
        img: "./img/dna/type07.png",
        info: [
            "스스로에게 엄격한 완벽주의자",
            "나만의 사회생활용 부캐 소유",
            "나서는 건 싫지만, 답답한 마음에 모임을 이끌기도 하는 편",
            "과도한 관심과 참견은 불편해요",
        ],
        band: [
            { img: "./img/dna/band25.png", name: "공부 인기 밴드" },
            { img: "./img/dna/band01.png", name: "독서 미션 인증 밴드" },
        ],
        color: "#fe747e",
        type: "INTJ",
    },
    {
        title: "따끔조언",
        desc: "악의는 없어! 따끔조언 DNA",
        img: "./img/dna/type08.png",
        info: [
            "내 관심사가 나오면 수다쟁이로 변신",
            "아무도 나를 봐주지 않으면 뭔가 서운한 느낌",
            "빈말이 어려운 팩트폭격기! 해결책을 척척 제시하는 편",
            "가끔 짓궂은 장난을 치기도 해요",
        ],
        band: [
            { img: "./img/dna/band02.png", name: "인문/과학 인기 밴드" },
            { img: "./img/dna/band03.png", name: "글쓰기 미션 인증 밴드" },
        ],
        color: "#fe747e",
        type: "INTP",
    },
    {
        title: "리액션왕",
        desc: "폭풍 끄덕끄덕 리액션왕 DNA",
        img: "./img/dna/type09.png",
        info: [
            "내가 잘못한 건 없는지 여러 번 체크 또 체크",
            "말하는 사람을 기분 좋게 만드는 뛰어난 공감 능력의 소유자",
            "정이 많고 베풀기도 잘해 모두에게 휴식처 같은 존재",
            "긴 침묵이 이어지는 어색한 상황은 견디기 어려운 편",
        ],
        band: [
            { img: "./img/dna/band18.png", name: "반려동물 인기 밴드" },
            { img: "./img/dna/band19.png", name: "팬 미션 인증 밴드" },
        ],
        color: "#bb58ea",
        type: "ESFJ",
    },
    {
        title: "현생만렙",
        desc: "자기관리 끝판왕 현생만렙 DNA",
        img: "./img/dna/type10.png",
        info: [
            "효율을 중시하는 능률형 인간",
            "뭐든지 척척 해내 일잘러라는 평가를 받는 편",
            "아끼는 사람일수록 폭풍 잔소리",
            "감정에 쉽게 휘둘리는 사람을 이해하기 힘든 편",
        ],
        band: [
            { img: "./img/dna/band17.png", name: "건강/다이어트 인기 밴드" },
            { img: "./img/dna/band09.png", name: "스터디 미션 인증 밴드" },
        ],
        color: "#bb58ea",
        type: "ESTJ",
    },
    {
        title: "흥마스터",
        desc: "이 구역의 흥부자는 나야 흥마스터 DNA",
        img: "./img/dna/type11.png",
        info: [
            "천상 연예인인 당신! 관심은 언제나 짜릿",
            "노래를 흥얼흥얼, 넘치는 흥은 못 참는 편",
            "약속이 갑자기 취소되면 속으로 기뻐하는 편",
            "같이 즐거운 게 최고! 나의 흥을 전파하는 것이 곧 행복",
        ],
        band: [
            { img: "./img/dna/band24.png", name: "힙합 인기 밴드" },
            { img: "./img/dna/band05.png", name: "운동 미션 인증 밴드" },
        ],
        color: "#07b53b",
        type: "ESFP",
    },
    {
        title: "눈치백단",
        desc: "혹시 인생 N회차…? 눈치백단 DNA",
        img: "./img/dna/type12.png",
        info: [
            "꽂히는 게 있으면 주저하지 않고 움직이는 행동파",
            "나를 가두는 규율과 질서는 질색",
            "모임 분위기를 주도하는 단체활동 장인",
            "관찰력이 좋아 다른 사람들의 스타일 변화를 잘 캐치하는 편",
        ],
        band: [
            { img: "./img/dna/band22.png", name: "아이돌 팬클럽 인기 밴드" },
            { img: "./img/dna/band23.png", name: "외국어 미션 인증 밴드" },
        ],
        color: "#07b53b",
        type: "ESTP",
    },
    {
        title: "대동단결",
        desc: "이멤버! 리멤버! 대동단결 DNA",
        img: "./img/dna/type13.png",
        info: [
            "다른 사람에게는 관대하지만, 본인에게는 냉철",
            "자신의 도움으로 다른 사람이 성장할 때 큰 보람을 느끼는 편",
            "정이 많은 만큼 상처도 쉽게 받는 편",
            "부드러운 리더십으로 모두를 이끄는 타입",
        ],
        band: [
            { img: "./img/dna/band11.png", name: "맛집 인기 밴드" },
            { img: "./img/dna/band07.png", name: "미션 인증 밴드" },
        ],
        color: "#1ba7e9",
        type: "ENFJ",
    },
    {
        title: "텐션담당",
        desc: "분위기 끌어 올려! 텐션담당 DNA",
        img: "./img/dna/type14.png",
        info: [
            "재밌어 보이면 가시밭길도 걷는 열정러",
            "새로운 사람을 만나는 건 언제나 즐거운 편",
            "침묵은 거절한다. 아무 말이라도 뱉고 보는 편",
            "다른 사람과 다툼이 있을 땐 식은땀부터 나요!",
        ],
        band: [
            { img: "./img/dna/band12.png", name: "여행/캠핑 인기 밴드" },
            { img: "./img/dna/band13.png", name: "취미 미션 인증 밴드" },
        ],
        color: "#1ba7e9",
        type: "ENFP",
    },
    {
        title: "행동대장",
        desc: "나를 따르라! 행동대장 DNA",
        img: "./img/dna/type15.png",
        info: [
            "아무것도 안 하는 게 스트레스인 워커홀릭",
            "스스로에 대한 자부심 뿜뿜",
            "모두가 망설일 때, 뛰어난 결단력으로 모임을 이끄는 편",
            "시간 낭비는 질색! 불필요한 잡담은 No!",
        ],
        band: [
            { img: "./img/dna/band04.png", name: "스포츠/레저 인기 밴드" },
            { img: "./img/dna/band05.png", name: "운동 미션 인증 밴드" },
        ],
        color: "#fe747e",
        type: "ENTJ",
    },
    {
        title: "위풍당당",
        desc: "어디서든 자신 있게 위풍당당 DNA",
        img: "./img/dna/type16.png",
        info: [
            "어디에서든 자신감 넘치는 사람!",
            "낯선 환경에서도 적응하는 능력이 탁월한 편",
            "의견을 꾸밈없이 얘기하는 슈퍼 솔직러",
            "주도적으로 이끌어가는 환경을 좋아하는 편",
        ],
        band: [
            { img: "./img/dna/band06.png", name: "캠핑/백패킹 인기 밴드" },
            { img: "./img/dna/band07.png", name: "미션 인증 밴드" },
        ],
        color: "#fe747e",
        type: "ENTP",
    },
];

export { qnaData, resultData };
