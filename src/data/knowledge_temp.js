export const KNOWLEDGE_DATA = [
    // ... 기존 데이터 유지 ...
    {
        id: "node-edge",
        enTitle: "Node / Edge",
        koTitle: "노드 / 엣지",
        mainTheme: "처리·실행",
        icon: "Share2",
        hoverText: "작업 / 전환",
        chipIcon: "Waypoints",
        description: "Node는 작업을 수행하고, Edge는 다음 경로를 결정하는 연결선",
        fullContent: `🧩 Node: AI가 특정 시점에 수행하는 하나의 의미 있는 작업 단위 ("여기서 무슨 일을 하는가")

🧭 Edge: 한 Node가 끝난 뒤 다음으로 이동할 경로를 결정하는 연결 ("현재 State를 기준으로 다음 Node를 선택")

📌 Node는 일을 하고 Edge는 길을 고름`,
        bullets: [
            "Node는 사용자나 업무 관점에서 의미 있는 단위로 정의",
            "Edge에는 반드시 분기 기준(State 조건)이 있어야 함",
            "반복, 실패, 종료 경로를 Edge 수준에서 명확히 설계",
            "Node/Edge 설계는 코드가 아니라 업무 흐름 설계",
            "분기가 3개 이상이면 State 정의를 먼저 점검"
        ],
        faqs: [
            {
                question: "노드/엣지를 어떻게 문서로 표현하면 좋을까요?",
                answerBlocks: [
                    { type: 'text', content: '결론부터 말씀드리면 플로우차트 + 상태 조건을 함께 쓰는 방식이 가장 안정적입니다.\n단순 다이어그램만 그리면 "왜 분기되는가?"가 빠지고, 텍스트만 쓰면 흐름이 보이지 않기 때문입니다.' },
                    { type: 'header', content: '✅ 추천 표현 방식' },
                    { type: 'desc', content: '메인 다이어그램은 흐름 중심으로 그리되, 각 요소의 역할을 명확히 합니다.\n• 사각형: Node (작업)\n• 화살표: Edge (이동)\n• 화살표 위 텍스트: 분기 조건 (State 기준)' },
                    { type: 'header', content: '🖼 플로우 차트 예시' },
                    { type: 'component', content: 'NodeEdgeFlowchart' },
                    { type: 'summary', content: '이 그림만 봐도 "어떤 Node가 있고, 어디서 분기되고, 반복이 가능한지"가 한눈에 들어와야 좋은 기획서입니다.' }
                ]
            },
            {
                question: "노드는 몇 개까지 나누는 것이 적절할까요?",
                answerBlocks: [
                    { type: 'text', content: '개수는 숫자 기준이 아니라 판단 기준으로 접근해야 합니다.\n기능이 많다고 나누는 게 아니라, State가 의미 있게 바뀌는 지점까지만 나눠야 합니다.' },
                    { type: 'header', content: '① 노드를 나눠야 하는 경우' },
                    { type: 'desc', content: '1. 판단 기준이 달라질 때 (이 시점 이후로 갈 수 있는 길이 달라짐)\n2. 성공/실패가 갈릴 때 (실패 시 다른 행동 필요)\n3. 반복 가능성이 생길 때 (다시 돌아올 수 있는 지점)\n4. 기획적으로 책임이 다른 단계일 때 ("여기까지는 검색, 여기부터는 생성")' },
                    { type: 'header', content: '② 노드를 나누면 안 되는 경우' },
                    { type: 'desc', content: '• 단순한 내부 처리 단계\n• 사용자/기획 관점에서 의미 없는 단계\n• State 변화 없이 바로 이어지는 처리\n\n(예: 문서 불러오기 -> 정렬하기 -> 자르기 등은 하나로 묶으세요)' },
                    { type: 'header', content: '③ 기획자가 스스로 점검하는 질문' },
                    { type: 'desc', content: 'Node 하나를 추가하려고 할 때, 아래 세 가지 질문을 모두 통과해야 합니다. 하나라도 "아니오"라면 굳이 나눌 필요 없습니다.\n\n1. 이 Node를 한 문장으로 설명할 수 있는가?\n2. 이 Node가 끝나면 State가 달라지는가?\n3. 이 Node를 빼면 분기나 반복 설명이 안 되는가?' },
                    { type: 'summary', content: '실무에서 가장 안정적인 개수는 단순 RAG의 경우 4~6개, Agent+재시도 구조는 6~10개 정도입니다.\n그 이상이면 상태 정의를 다시 점검해 보세요.' }
                ]
            },
            {
                question: "State를 먼저 정의하고 Node를 그리는 방식이 좋을까요, 반대가 좋을까요?",
                answerBlocks: [
                    { type: 'text', content: '문제 유형에 따라 우선순위가 달라집니다.' },
                    {
                        type: 'table',
                        content: {
                            headers: ['구분', 'State 먼저', 'Node 먼저'],
                            rows: [
                                ['언제', 'Agent, 복잡한 분기/반복', 'RAG, 명확한 절차'],
                                ['장점', '무한 루프 방지, 종료 조건 명확', '직관적, 빠른 다이어그램'],
                                ['단점', '처음엔 추상적', '분기 늘면 복잡해짐'],
                                ['적합한 문제', '흐름이 고정되지 않은 문제', '업무 절차가 정해진 문제']
                            ]
                        }
                    },
                    { type: 'header', content: '실무 권장 방식' },
                    { type: 'desc', content: '✅ State → Node → State 보정 순환\n\n1. 큰 State부터 정의 (시작, 정보 부족/충분, 실패, 종료)\n2. 각 State를 바꾸는 Node 그림 (검색, 재검색, 생성)\n3. 그려보면서 State 재정제 (정말 필요한가, 합칠 수 있나)' },
                    { type: 'summary', content: '실무에서는 State → Node → State 재정의 순환이 가장 안정적입니다.' }
                ]
            }
        ]
    }
];
