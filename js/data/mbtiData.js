/* 
    E:에너지력, N:모험력, T:팩폭력, P:번개력
*/
const qnaData = [
    {
        q: "일주일 동안<br>내 모임 약속은 …",
        a: [
            { desc: "하루 놀면 하루 휴식! 징검다리 필수", type: ["E", 1] },
            { desc: "3일 연속 약속도 거뜬", type: ["E", 2] },
            { desc: "일주일에 한 번도 고민", type: ["E", 0] },
        ],
    },
    {
        q: "선호하는<br>약속 장소는?",
        a: [
            { desc: "웨이팅, 두렵지 않아! 핫플로", type: ["E", 1] },
            { desc: "조용한 곳이 좋아! 한적한 골목길로", type: ["E", 0] },
        ],
    },
    {
        q: "장소가 정해졌다!<br>그럼 나는",
        a: [
            { desc: "주변 맛집 놀거리 모두 탐색 완료!", type: ["P", 0] },
            { desc: "당일에 알아보고 바로 출발", type: ["P", 2] },
            { desc: "얼마나 걸리지? 가는 길 미리 체크", type: ["P", 1] },
        ],
    },
    {
        q: "내일은 약속 날!<br>단체 그룹방은 잠잠한데..",
        a: [
            { desc: "누가 말 꺼내기 전까지 기다리기", type: ["E", 0] },
            { desc: "어디서 볼래? 먼저 연락하기", type: ["E", 1] },
        ],
    },
    {
        q: "약속 장소에<br>늦게 도착했을 때 나는",
        a: [
            { desc: "왜 늦었는지 설명부터", type: ["T", 1] },
            { desc: "일단 사과부터", type: ["T", 0] },
        ],
    },
    {
        q: "가기로 했던 식당이 닫았다!<br>어디로 가지?",
        a: [
            { desc: "바로 옆에 있는 새로운 식당", type: ["N", 1] },
            { desc: "가본 적 있는 식당", type: ["N", 0] },
        ],
    },
    {
        q: "가고 싶었던 카페 도착!<br>아무도 없이 휑한 분위기에 나는",
        a: [
            { desc: "다른 카페를 검색한다", type: ["N", 0] },
            { desc: "감각을 믿고 우선 들어간다", type: ["N", 1] },
        ],
    },
    {
        q: "카페에서 메뉴 선택 중<br>어떤 걸 마셔볼까?",
        a: [
            { desc: "사장님 추천! 랜덤 음료", type: ["N", 2] },
            { desc: "카페 시그니처 메뉴", type: ["N", 1] },
            { desc: "무난하게 아메리카노", type: ["N", 0] },
        ],
    },
    {
        q: "친구가 고민을<br>털어놓을 때, 나는",
        a: [
            { desc: "진짜 힘들었겠다. 기분은 괜찮아?", type: ["T", 0] },
            { desc: "그래서 지금은 해결된 거야?", type: ["T", 1] },
        ],
    },
    {
        q: "친구와 의견이<br>갈릴 때 나는",
        a: [
            { desc: "‘음, 그럴 수 있지’ 마인드 장착", type: ["T", 1] },
            { desc: "‘난 다르게 생각해’ 토론 모드 돌입", type: ["T", 2] },
            { desc: "‘네 말이 맞는 거 같아’ 100% 끄덕끄덕", type: ["T", 0] },
        ],
    },
    {
        q: "친구가 ‘우리 이제 뭐 하지?’<br>라고 물었을 때",
        a: [
            { desc: "일단 나가서 뭐 있는지 보고 정할까?", type: ["P", 1] },
            { desc: "이다음은 여기! 플랜대로 이동!", type: ["P", 0] },
        ],
    },
    {
        q: "한가로운 주말, 친구가<br>집 근처로 나오라고 한다면?",
        a: [
            { desc: "편안한 차림으로 바로 나간다", type: ["P", 1] },
            { desc: "지금…? 급작스러운 제안에 당황한다", type: ["P", 0] },
        ],
    },
];

const resultData = [
    {
        title: "배려만점",
        desc: "스윗농도 100% 배려만점 DNA",
        img: "./assets/images/dna/type01.png",
        info: [
            "나만의 일상 루틴을 만들고 지키는 걸 좋아하는 편",
            "인정받는 건 좋지만, 과한 스포트라이트는 부담!",
            "상대방의 사소한 점을 잘 기억하는 유죄 인간",
            "참다 터지면 칼같이 관계를 끊어내는 스타일",
        ],
        band: [
            {
                name: "취미 인기 밴드",
                img: "./assets/images/dna/band15.png",
                link: "https://band.us/keyword-group/%EC%B7%A8%EB%AF%B8",
            },
            {
                name: "습관 미션 인증 밴드",
                img: "./assets/images/dna/band16.png",
                link: "https://band.us/discover/recommended-mission/%EC%8A%B5%EA%B4%80",
            },
        ],
        color: "#bb58ea",
        type: "ISFJ",
    },
    {
        title: "슈퍼꼼꼼",
        desc: "빠트린 건 없지? 슈퍼꼼꼼 DNA",
        img: "./assets/images/dna/type02.png",
        info: [
            "계획과 원칙은 나를 상징하는 단어",
            "타인에게 먼저 다가가는 것에 어려움을 느끼는 편",
            "늘 만나던 친구, 자주 가던 식당처럼 익숙한 모임 선호",
            "계획하지 않았던 번개 만남은 부담부담!",
        ],
        band: [
            {
                name: "경제/재테크 인기 밴드",
                img: "./assets/images/dna/band14.png",
                link: "https://band.us/keyword-group/%EA%B2%BD%EC%A0%9C%2F%EC%9E%AC%ED%85%8C%ED%81%AC/%EA%B2%BD%EC%A0%9C%2F%EC%9E%AC%ED%85%8C%ED%81%AC",
            },
            {
                name: "글쓰기 미션 인증 밴드",
                img: "./assets/images/dna/band03.png",
                link: "https://band.us/discover/recommended-mission/%EA%B8%80%EC%93%B0%EA%B8%B0",
            },
        ],
        color: "#bb58ea",
        type: "ISTJ",
    },
    {
        title: "복세편살",
        desc: "복잡한 세상 편하게 살자 복세편살 DNA",
        img: "./assets/images/dna/type03.png",
        info: [
            "미루기 장인이지만, 때가 되면 누구보다 열심히!",
            "탁월한 공감 능력의 소유자",
            "약속이 갑자기 취소되면 내적 기쁨이 2배",
            "싫은 사람이 생기면 티를 내지 않고 조용히 멀어지는 편",
        ],
        band: [
            {
                name: "맛집 인기 밴드",
                img: "./assets/images/dna/band11.png",
                link: "https://band.us/keyword-group/%EB%A7%9B%EC%A7%91%2F%EC%9A%94%EB%A6%AC/%EB%A7%9B%EC%A7%91",
            },
            {
                name: "그림/공예 미션 인증 밴드",
                img: "./assets/images/dna/band21.png",
                link: "https://band.us/discover/recommended-mission/%EA%B7%B8%EB%A6%BC%2F%EA%B3%B5%EC%98%88",
            },
        ],
        color: "#07b53b",
        type: "ISFP",
    },
    {
        title: "척척박사",
        desc: "걸어다니는 지식iN 척척박사 DNA",
        img: "./assets/images/dna/type04.png",
        info: [
            "여러 분야에서 다재다능한 재주꾼",
            "눈치가 빨라서 상황 파악이 빠른 편",
            "첫인상은 차가워 보여도 내 사람들에게는 정이 많은 편",
            "마음에도 없는 빈말은 굳이 No!",
        ],
        band: [
            {
                name: "IT 인기 밴드",
                img: "./assets/images/dna/band20.png",
                link: "https://band.us/keyword-group/IT%2F%EC%BB%B4%ED%93%A8%ED%84%B0/IT",
            },
            {
                name: "스터디 미션 인증 밴드",
                img: "./assets/images/dna/band09.png",
                link: "https://band.us/discover/recommended-mission/%EC%8A%A4%ED%84%B0%EB%94%94",
            },
        ],
        color: "#07b53b",
        type: "ISTP",
    },
    {
        title: "반전매력",
        desc: "모임에 따라 180도 변신 반전매력 DNA",
        img: "./assets/images/dna/type05.png",
        info: [
            "스스로에게 엄격한 완벽주의자",
            "외로움을 잘 타지만, 고독을 즐기기도 하는 편",
            "상대에 따라 성격이 달라져 나조차도 혼란스러운 편",
            "배려, 예의가 없는 사람과는 대화 차단",
        ],
        band: [
            {
                name: "드라마 인기 밴드",
                img: "./assets/images/dna/band08.png",
                link: "https://band.us/keyword-group/%EB%B0%A9%EC%86%A1%2F%EC%97%B0%EC%98%88/%EB%93%9C%EB%9D%BC%EB%A7%88",
            },
            {
                name: "습관 미션 인증 밴드",
                img: "./assets/images/dna/band16.png",
                link: "https://band.us/discover/recommended-mission/%EC%8A%B5%EA%B4%80",
            },
        ],
        color: "#1ba7e9",
        type: "INFJ",
    },
    {
        title: "평화지킴이",
        desc: "둥글게 둥글게 평화지킴이 DNA",
        img: "./assets/images/dna/type06.png",
        info: [
            "아늑하고 감성적인 분위기를 선호",
            "이야기를 잘 들어주는 프로경청러",
            "다른 사람의 시선이 신경 쓰여 거절을 못 하는 편",
            "갈등이 생기는 상황은 최대한 피하고 싶어요!",
        ],
        band: [
            {
                name: "문화/예술 인기 밴드",
                img: "./assets/images/dna/band10.png",
                link: "https://band.us/keyword-group/%EB%AC%B8%ED%99%94%2F%EC%98%88%EC%88%A0/%EB%AC%B8%ED%99%94%2F%EC%98%88%EC%88%A0",
            },
            {
                name: "독서 미션 인증 밴드",
                img: "./assets/images/dna/band01.png",
                link: "https://band.us/discover/recommended-mission/%EB%8F%85%EC%84%9C",
            },
        ],
        color: "#1ba7e9",
        type: "INFP",
    },
    {
        title: "겉바속촉",
        desc: "무심한 듯 다정한 겉바속촉 DNA",
        img: "./assets/images/dna/type07.png",
        info: [
            "스스로에게 엄격한 완벽주의자",
            "나만의 사회생활용 부캐 소유",
            "나서는 건 싫지만, 답답한 마음에 모임을 이끌기도 하는 편",
            "과도한 관심과 참견은 불편해요",
        ],
        band: [
            {
                name: "공부 인기 밴드",
                img: "./assets/images/dna/band25.png",
                link: "https://band.us/keyword-group/%EA%B5%90%EC%9C%A1%2F%EA%B3%B5%EB%B6%80",
            },
            {
                name: "독서 미션 인증 밴드",
                img: "./assets/images/dna/band01.png",
                link: "https://band.us/discover/recommended-mission/%EB%8F%85%EC%84%9C",
            },
        ],
        color: "#fe747e",
        type: "INTJ",
    },
    {
        title: "따끔조언",
        desc: "악의는 없어! 따끔조언 DNA",
        img: "./assets/images/dna/type08.png",
        info: [
            "내 관심사가 나오면 수다쟁이로 변신",
            "아무도 나를 봐주지 않으면 뭔가 서운한 느낌",
            "빈말이 어려운 팩트폭격기! 해결책을 척척 제시하는 편",
            "가끔 짓궂은 장난을 치기도 해요",
        ],
        band: [
            {
                name: "인문/과학 인기 밴드",
                img: "./assets/images/dna/band02.png",
                link: "https://band.us/keyword-group/%EC%9D%B8%EB%AC%B8%2F%EA%B3%BC%ED%95%99",
            },
            {
                name: "글쓰기 미션 인증 밴드",
                img: "./assets/images/dna/band03.png",
                link: "https://band.us/discover/recommended-mission/%EA%B8%80%EC%93%B0%EA%B8%B0",
            },
        ],
        color: "#fe747e",
        type: "INTP",
    },
    {
        title: "리액션왕",
        desc: "폭풍 끄덕끄덕 리액션왕 DNA",
        img: "./assets/images/dna/type09.png",
        info: [
            "내가 잘못한 건 없는지 여러 번 체크 또 체크",
            "말하는 사람을 기분 좋게 만드는 뛰어난 공감 능력의 소유자",
            "정이 많고 베풀기도 잘해 모두에게 휴식처 같은 존재",
            "긴 침묵이 이어지는 어색한 상황은 견디기 어려운 편",
        ],
        band: [
            {
                name: "반려동물 인기 밴드",
                img: "./assets/images/dna/band18.png",
                link: "https://band.us/keyword-group/%EB%B0%98%EB%A0%A4%EB%8F%99%EB%AC%BC%2F%EB%8F%99%EB%AC%BC",
            },
            {
                name: "팬 미션 인증 밴드",
                img: "./assets/images/dna/band19.png",
                link: "https://band.us/discover/recommended-mission/%ED%8C%AC",
            },
        ],
        color: "#bb58ea",
        type: "ESFJ",
    },
    {
        title: "현생만렙",
        desc: "자기관리 끝판왕 현생만렙 DNA",
        img: "./assets/images/dna/type10.png",
        info: [
            "효율을 중시하는 능률형 인간",
            "뭐든지 척척 해내 일잘러라는 평가를 받는 편",
            "아끼는 사람일수록 폭풍 잔소리",
            "감정에 쉽게 휘둘리는 사람을 이해하기 힘든 편",
        ],
        band: [
            {
                name: "건강/다이어트 인기 밴드",
                img: "./assets/images/dna/band17.png",
                link: "https://band.us/keyword-group/%EA%B1%B4%EA%B0%95%2F%EB%8B%A4%EC%9D%B4%EC%96%B4%ED%8A%B8",
            },
            {
                name: "스터디 미션 인증 밴드",
                img: "./assets/images/dna/band09.png",
                link: "https://band.us/discover/recommended-mission/%EC%8A%A4%ED%84%B0%EB%94%94",
            },
        ],
        color: "#bb58ea",
        type: "ESTJ",
    },
    {
        title: "흥마스터",
        desc: "이 구역의 흥부자는 나야 흥마스터 DNA",
        img: "./assets/images/dna/type11.png",
        info: [
            "천상 연예인인 당신! 관심은 언제나 짜릿",
            "노래를 흥얼흥얼, 넘치는 흥은 못 참는 편",
            "약속이 갑자기 취소되면 속으로 기뻐하는 편",
            "같이 즐거운 게 최고! 나의 흥을 전파하는 것이 곧 행복",
        ],
        band: [
            {
                name: "힙합 인기 밴드",
                img: "./assets/images/dna/band24.png",
                link: "https://band.us/keyword-group/%EC%9D%8C%EC%95%85/%ED%9E%99%ED%95%A9",
            },
            {
                name: "운동 미션 인증 밴드",
                img: "./assets/images/dna/band05.png",
                link: "https://band.us/discover/recommended-mission/%EC%9A%B4%EB%8F%99",
            },
        ],
        color: "#07b53b",
        type: "ESFP",
    },
    {
        title: "눈치백단",
        desc: "혹시 인생 N회차…? 눈치백단 DNA",
        img: "./assets/images/dna/type12.png",
        info: [
            "꽂히는 게 있으면 주저하지 않고 움직이는 행동파",
            "나를 가두는 규율과 질서는 질색",
            "모임 분위기를 주도하는 단체활동 장인",
            "관찰력이 좋아 다른 사람들의 스타일 변화를 잘 캐치하는 편",
        ],
        band: [
            {
                name: "아이돌 팬클럽 인기 밴드",
                img: "./assets/images/dna/band22.png",
                link: "https://band.us/keyword-group/%ED%8C%AC%ED%81%B4%EB%9F%BD/%EC%95%84%EC%9D%B4%EB%8F%8C",
            },
            {
                name: "외국어 미션 인증 밴드",
                img: "./assets/images/dna/band23.png",
                link: "https://band.us/discover/recommended-mission/%EC%99%B8%EA%B5%AD%EC%96%B4",
            },
        ],
        color: "#07b53b",
        type: "ESTP",
    },
    {
        title: "대동단결",
        desc: "이멤버! 리멤버! 대동단결 DNA",
        img: "./assets/images/dna/type13.png",
        info: [
            "다른 사람에게는 관대하지만, 본인에게는 냉철",
            "자신의 도움으로 다른 사람이 성장할 때 큰 보람을 느끼는 편",
            "정이 많은 만큼 상처도 쉽게 받는 편",
            "부드러운 리더십으로 모두를 이끄는 타입",
        ],
        band: [
            {
                name: "맛집 인기 밴드",
                img: "./assets/images/dna/band11.png",
                link: "https://band.us/keyword-group/%EB%A7%9B%EC%A7%91%2F%EC%9A%94%EB%A6%AC/%EB%A7%9B%EC%A7%91",
            },
            {
                name: "미션 인증 밴드",
                img: "./assets/images/dna/band07.png",
                link: "https://band.us/discover/recommended-mission",
            },
        ],
        color: "#1ba7e9",
        type: "ENFJ",
    },
    {
        title: "텐션담당",
        desc: "분위기 끌어 올려! 텐션담당 DNA",
        img: "./assets/images/dna/type14.png",
        info: [
            "재밌어 보이면 가시밭길도 걷는 열정러",
            "새로운 사람을 만나는 건 언제나 즐거운 편",
            "침묵은 거절한다. 아무 말이라도 뱉고 보는 편",
            "다른 사람과 다툼이 있을 땐 식은땀부터 나요!",
        ],
        band: [
            {
                name: "여행/캠핑 인기 밴드",
                img: "./assets/images/dna/band12.png",
                link: "https://band.us/keyword-group/%EC%97%AC%ED%96%89%2F%EC%BA%A0%ED%95%91",
            },
            {
                name: "취미 미션 인증 밴드",
                img: "./assets/images/dna/band13.png",
                link: "https://band.us/discover/recommended-mission/%EC%B7%A8%EB%AF%B8",
            },
        ],
        color: "#1ba7e9",
        type: "ENFP",
    },
    {
        title: "행동대장",
        desc: "나를 따르라! 행동대장 DNA",
        img: "./assets/images/dna/type15.png",
        info: [
            "아무것도 안 하는 게 스트레스인 워커홀릭",
            "스스로에 대한 자부심 뿜뿜",
            "모두가 망설일 때, 뛰어난 결단력으로 모임을 이끄는 편",
            "시간 낭비는 질색! 불필요한 잡담은 No!",
        ],
        band: [
            {
                name: "스포츠/레저 인기 밴드",
                img: "./assets/images/dna/band04.png",
                link: "https://band.us/keyword-group/%EC%8A%A4%ED%8F%AC%EC%B8%A0%2F%EB%A0%88%EC%A0%80",
            },
            {
                name: "운동 미션 인증 밴드",
                img: "./assets/images/dna/band05.png",
                link: "https://band.us/discover/recommended-mission/%EC%9A%B4%EB%8F%99",
            },
        ],
        color: "#fe747e",
        type: "ENTJ",
    },
    {
        title: "위풍당당",
        desc: "어디서든 자신 있게 위풍당당 DNA",
        img: "./assets/images/dna/type16.png",
        info: [
            "어디에서든 자신감 넘치는 사람!",
            "낯선 환경에서도 적응하는 능력이 탁월한 편",
            "의견을 꾸밈없이 얘기하는 슈퍼 솔직러",
            "주도적으로 이끌어가는 환경을 좋아하는 편",
        ],
        band: [
            {
                name: "캠핑/백패킹 인기 밴드",
                img: "./assets/images/dna/band06.png",
                link: "https://band.us/keyword-group/%EC%97%AC%ED%96%89%2F%EC%BA%A0%ED%95%91/%EC%BA%A0%ED%95%91%2F%EB%B0%B1%ED%8C%A8%ED%82%B9",
            },
            {
                name: "미션 인증 밴드",
                img: "./assets/images/dna/band07.png",
                link: "https://band.us/discover/recommended-mission",
            },
        ],
        color: "#fe747e",
        type: "ENTP",
    },
];

export { qnaData, resultData };
