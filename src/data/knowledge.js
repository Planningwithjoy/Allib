export const CATEGORIES = [
    { id: "knowledge", name: "지식·이해", desc: "AI의 기초가 되는 지식과 이해를 다루는 영역" },
    { id: "execution", name: "처리·실행", desc: "AI가 사고하고 실행하는 과정을 설계하는 영역" },
    { id: "expansion", name: "연결·확장", desc: "외부 시스템 및 도구와 AI를 연결하는 영역" },
    { id: "ux", name: "UX·운영", desc: "사용자 인터페이스와 서비스 운영을 최적화하는 영역" }
];

export const KNOWLEDGE_DATA = [
    // 1. 지식·이해 (Knowledge) - 기초부터 심화까지
    {
        id: "parameter",
        enTitle: "Parameter",
        koTitle: "파라미터",
        mainTheme: "지식·이해",
        icon: "Sliders",
        hoverText: "판단 기준",
        chipIcon: "Activity",
        description: "AI가 내부에 만들어 둔 숫자로 된 판단 기준",
        fullContent: `🧠 수많은 파라미터 조합이 AI의 지식과 논리 구조를 형성\n\n📊 학습 데이터로부터 최적의 값을 찾아가는 과정이 곧 '학습'\n\n✨ 모델의 크기가 클수록(파라미터가 많을수록) 복잡한 과업 수행 가능\n\n🔄 모델 개발 완료 후에는 값이 고정되어 쉽게 변경되지 않음`,
        bullets: [
            "파라미터는 서비스 운영 중에 쉽게 바뀌지 않음",
            "“AI가 학습한다”는 표현은 대부분 파라미터 변경이 아님",
            "최신 정보, 내부 규칙은 파라미터가 아니라 RAG로 보완해야 함",
            "모델 선택 시 파라미터 크기는 성능, 비용, 응답 속도에 직접 영향",
            "파라미터가 큰 모델이 무조건 정답은 아니며, 우리 서비스에 딱 맞는 '최적의 크기'를 찾는 테스트 과정 필수"
        ],
        faqs: [
            {
                question: "파라미터 수가 많으면, 무조건 좋은 모델인가요? 아니면 판단 기준이 많아서 AI가 헷갈려 할까요?",
                answerBlocks: [
                    { type: 'text', content: '파라미터가 많다고 해서 무조건 좋은 것은 아닙니다. 오히려 상황에 따라서는 독이 될 수도 있어요. 중요한 이유들을 하나씩 짚어드릴게요.' },
                    { type: 'header', content: '① 데이터가 부족하면 오히려 성능이 떨어집니다' },
                    { type: 'desc', content: '• 파라미터가 많다는 건 그만큼 조절해야 할 ‘판단 기준’이 많다는 뜻입니다.\n• 이걸 제대로 조정하려면 아주 방대한 학습 데이터가 필요해요.\n• 데이터가 부족한데 파라미터만 많으면, 실제 실력보다 훈련 데이터에만 억지로 끼워 맞춘 과적합 상태가 되어 실제 서비스에서는 엉뚱한 소리를 하게 됩니다.' },
                    { type: 'header', content: '② 비용과 속도 문제가 커집니다' },
                    { type: 'desc', content: '• 파라미터 수 ↑ → 계산량 ↑ → 비용 ↑ → 응답 속도 ↓\n• 그래서 같은 성능을 낼 수 있다면, 파라미터가 적고 가벼운 모델이 훨씬 더 효율적인 선택이 됩니다.' },
                    { type: 'header', content: '③ 목적에 비해 너무 과한 모델이 될 수 있습니다' },
                    { type: 'desc', content: '• 사내 규정 Q&A나 간단한 문서 요약 같은 작업에는 초대형 모델이 필요하지 않아요.\n• 이런 경우에는 큰 모델을 써도 성능 차이는 거의 없으면서 운영 부담만 커지게 됩니다.' },
                    { type: 'header', content: '④ 그럼 파라미터 수는 언제 중요한가요?' },
                    { type: 'desc', content: '• 복잡한 언어 이해, 고도의 추론, 아주 긴 맥락의 대화, 창의적 생성이 필요한 경우에 진가를 발휘합니다.\n• 이런 고난도 작업은 작은 모델이 아예 흉내 낼 수 없는 영역이거든요.' },
                    { type: 'summary', content: '오해를 정리해 볼까요?\n• ❌ 판단 기준이 많아서 헷갈리는 것이 아닙니다.\n• ⭕ 데이터, 사용 목적, 예산과 맞지 않는 모델을 선택했을 때 비효율이 발생하는 것입니다.' }
                ]
            }
        ]
    },
    {
        id: "embedding",
        enTitle: "Embedding",
        koTitle: "임베딩",
        mainTheme: "지식·이해",
        icon: "Binary",
        hoverText: "의미의 숫자화",
        chipIcon: "Fingerprint",
        description: "글이나 문장의 뜻을 숫자로 바꾸는 방법",
        fullContent: `🔢 문장을 고차원의 숫자 묶음(벡터)으로 변환\n\n📏 숫자 사이의 거리를 계산하여 의미적 유사성 판단\n\n🧠 표현 방식이 달라도 뜻이 같으면 동일하게 인식\n\n📌 AI가 텍스트를 단순 나열이 아닌 '의미'로 처리하게 만드는 핵심 기술`,
        bullets: [
            "사용자가 질문을 매번 다르게 말해도 같은 답을 줘야 하는 서비스인지 판단",
            "단어 검색이 아니라 뜻이 비슷한 정보를 찾아야 하는지 검토",
            "“비슷한 질문”, “유사한 문서”를 묶어야 할 필요가 있는지 확인",
            "임베딩은 RAG뿐 아니라 검색, 추천, 분류 기능 전반에 사용 가능함"
        ]
    },
    {
        id: "chunk",
        enTitle: "Chunk",
        koTitle: "청크",
        mainTheme: "지식·이해",
        icon: "Puzzle",
        hoverText: "의미 조각",
        chipIcon: "Scissors",
        description: "긴 문서나 정보를 AI가 이해하고 검색하기 쉽도록 의미 단위로 나눈 최소 정보 조각",
        fullContent: `🧩 하나의 청크는 혼자서도 의미가 통하고 질문에 직접 답할 수 있어야 함\n\n📌 청크는 RAG 정확도를 좌우하는 가장 기본적인 설계 요소임\n\n📏 단순한 글자 수 분할이 아닌 의미의 경계를 나누는 작업`,
        bullets: [
            "청크를 단순 길이가 아니라 의미 경계 기준으로 분리",
            "한 질문에 하나의 청크가 답이 될 수 있는지 점검",
            "너무 작은 청크로 문맥이 깨지지 않는지 확인",
            "RAG 성능 이슈가 생기면 모델보다 먼저 청크 설계를 점검",
            "문맥 유지를 위해 청크 간 겹치는 구간(Overlap)을 어느 정도로 설정할지 파라미터 최적화 방안 검토"
        ],
        faqs: [
            {
                question: "청크의 예시가 궁금해요",
                answerBlocks: [
                    { type: 'text', content: '진짜 청크 예시를 단계별로 살펴보면서 감을 잡아보세요.' },
                    { type: 'header', content: '① 아주 짧은 문장' },
                    { type: 'desc', content: '원문: "너 밥 먹었어?"\n청크 결과: "너 밥 먹었어?"\n\n이 문장은 하나의 질문이고, 답이 가능하고, 의미가 완결되므로 그 자체로 좋은 청크입니다.' },
                    { type: 'header', content: '② 조금 긴 문장' },
                    { type: 'desc', content: '원문: "오늘은 너무 바빠서 아직 밥을 못 먹었어."\n청크 결과: "오늘은 너무 바빠서 아직 밥을 못 먹었어."\n\n이 안에는 시간 맥락, 이유, 상태가 함께 있어서 쪼개면 오히려 의미가 깨집니다.' },
                    { type: 'header', content: '③ 문단이 있는 경우' },
                    { type: 'desc', content: '원문: "나는 아침을 거르는 편이야. 점심은 보통 회사에서 먹고, 저녁은 집에서 간단히 먹어."' },
                    {
                        type: 'table',
                        content: {
                            headers: ['구분', '내용'],
                            rows: [
                                ['나쁜 청크', '• "나는 아침을 거르는 편이야." \n• "점심은 보통 회사에서 먹고," \n• "저녁은 집에서 간단히 먹어." \n(질문 "이 사람은 하루 식사 패턴이 어때?"에 하나만으로는 답이 안 됨)'],
                                ['좋은 청크', '• "나는 아침을 거르는 편이고, 점심은 회사에서 먹으며, 저녁은 집에서 간단히 먹는다." \n(하나의 식사 패턴 설명으로 완결)']
                            ]
                        }
                    },
                    { type: 'header', content: '④ RAG 기준에서의 청크 예시' },
                    { type: 'desc', content: '질문: "환불은 언제까지 가능한가요?"\n원문: "상품 수령 후 7일 이내에는 환불이 가능합니다. 단, 사용 흔적이 있는 경우 환불이 불가합니다."' },
                    {
                        type: 'table',
                        content: {
                            headers: ['구분', '내용'],
                            rows: [
                                ['나쁜 청크', '• "상품 수령 후 7일 이내에는 환불이 가능합니다." \n• "단, 사용 흔적이 있는 경우 환불이 불가합니다." \n(조건이 분리되어 오답 위험)'],
                                ['좋은 청크', '• "상품 수령 후 7일 이내에는 환불이 가능하지만, 사용 흔적이 있는 경우에는 환불이 불가합니다." \n(조건 포함된 완결된 규칙)']
                            ]
                        }
                    },
                    { type: 'header', content: '⑤ 청크를 나눌 때 쓰는 핵심 질문' },
                    { type: 'summary', content: '청크 하나를 만들 때 이 질문을 던져보세요.\n\n"이 조각 하나만 보고 질문에 답해도 되나?"\n\n• YES → 좋은 청크\n• NO → 다시 합쳐야 함' }
                ]
            }
        ]
    },
    {
        id: "vector-db",
        enTitle: "Vector Database",
        koTitle: "벡터 DB",
        mainTheme: "지식·이해",
        icon: "Database",
        hoverText: "의미 저장소",
        chipIcon: "Package",
        description: "글의 뜻을 숫자로 바꾼 결과(임베딩)를 저장해두는 데이터베이스",
        fullContent: `🔢 수만 개의 문서를 임베딩 데이터로 변환하여 보관\n\n📏 질문과 가장 가까운 의미를 가진 숫자 묶음을 고속 탐색\n\n📌 키워드가 완전히 일치하지 않아도 맥락상 유사한 문서를 반환\n\n⚡ 대규모 데이터를 실시간으로 AI가 참조하게 만드는 도구`,
        bullets: [
            "의미가 비슷한 정보를 찾아야 하는 service인지 판단",
            "어떤 문서를 벡터 DB에 넣을지 정의",
            "문서 변경 시 임베딩과 DB를 언제 갱신할지 결정",
            "검색 결과를 항상 정답으로 쓰지 않을 안전장치 고려",
            "데이터가 계속 쌓일 때 오래된 정보를 지울지, 아카이빙할지 데이터 수명 관리(Lifecycle) 정책 수립"
        ],
        faqs: [
            {
                question: "벡터 디비랑 메모리(Memory)는 정확히 어떤 차이가 있나요?",
                answerBlocks: [
                    { type: 'text', content: '핵심부터 딱 잘라 말씀드리면, 벡터 DB는 "지식 저장소"이고, Memory는 "대화와 행동의 맥락을 기억하는 장치"입니다.' },
                    { type: 'header', content: '① 먼저 감각적으로 한 번에 구분해 볼까요?' },
                    { type: 'desc', content: '사람으로 비유하면 아주 명확해집니다.\n• 벡터 DB = 책장, 문서함 (필요하면 자료를 찾아보는 자료실)\n• Memory = 머릿속 기억 (아까 무슨 얘기를 했는지 기억하는 것)\n\n즉, 벡터 DB는 ‘찾아보는 기억’이고, Memory는 ‘이어가는 기억’입니다.' },
                    { type: 'header', content: '② 왜 Memory라는 개념이 따로 필요할까요?' },
                    { type: 'desc', content: 'LLM은 기본적으로 방금 한 말도 다음 요청에서는 잊어버리는 특성이 있습니다.\n"아까 말한 조건으로 다시 정리해줘" 같은 요청을 이해하려면 이전 대화 맥락을 어딘가에 저장해야 하는데, 이게 바로 Memory의 역할입니다.' },
                    { type: 'header', content: '③ 벡터 DB vs Memory 한눈에 비교하기' },
                    {
                        type: 'table',
                        content: {
                            headers: ['구분', 'Memory', '벡터 DB'],
                            rows: [
                                ['목적', '대화·작업 맥락 유지', '지식 검색'],
                                ['저장 내용', '요약, 상태, 선호', '문서, 지식'],
                                ['사용 시점', '매 대화마다', '필요할 때'],
                                ['지속성', '짧거나 선택적', '길고 안정적'],
                                ['성격', 'UX 중심', '정확도 중심']
                            ]
                        }
                    },
                    { type: 'header', content: '④ Agent에서 Memory가 특히 중요한 이유' },
                    { type: 'desc', content: '에이전트는 목표 달성을 위해 여러 번 행동을 반복합니다. 이때 Memory가 없으면 같은 행동을 반복하거나 목표를 잊어버리게 됩니다.\n\n결국 에이전트는 [판단 + 도구 실행 + Memory]가 합쳐진 구조라고 볼 수 있습니다.' },
                    { type: 'summary', content: '임베딩을 쓴다고 다 벡터 DB인 것은 아닙니다.\n고급 Memory는 임베딩을 활용하기도 하지만, 본질적으로는 "맥락과 상태"를 동적으로 유지하기 위한 목적이라는 점이 다릅니다.' }
                ]
            }
        ]
    },
    {
        id: "context",
        enTitle: "Context",
        koTitle: "컨텍스트",
        mainTheme: "지식·이해",
        icon: "BookOpen",
        hoverText: "배경정보",
        chipIcon: "FileText",
        description: "AI가 현재 답변을 생성할 때 실제로 입력으로 보고 있는 모든 정보의 묶음",
        fullContent: `💡 컨텍스트는 AI가 현재 답변을 생성할 때,\n실제로 입력으로 보고 있는 모든 정보의 묶음\n\n• 사용자 최근 발화\n• 시스템 프롬프트(역할, 규칙)\n• 이전 대화 요약\n• RAG로 가져온 문서 청크\n• 현재 State 값\n• Tool Calling 결과\n\n이 중 이번 호출에 포함된 것만 컨텍스트가 됨`,
        bullets: [
            "컨텍스트는 저장소가 아니라 입력 구성물임",
            "State·Memory는 필요할 때만 컨텍스트로 편입",
            "너무 많은 컨텍스트는 정확도를 떨어뜨림",
            "Agent 구조에서는 컨텍스트 정리(요약·선별)가 필수",
            "모델마다 허용되는 최대 컨텍스트 길이(Context Window)가 다르므로 기획 시 반드시 확인"
        ],
        faqs: [
            {
                question: "Context vs State vs Memory가 어떻게 다른건가요?",
                answerBlocks: [
                    { type: 'header', content: '① 셋의 결정적 차이는 "시점"입니다' },
                    { type: 'desc', content: '• Context: 지금 이 순간 AI가 보고 있는 입력 정보 (사용 중)\n• State: 판단과 분기를 위해 관리하는 현재 상황 값 (판단 중)\n• Memory: 나중을 위해 저장해 둔 과거 정보 (보관 중)' },
                    { type: 'header', content: '② Context는 무엇인가' },
                    { type: 'desc', content: '이번 응답을 만들기 위해 모델 입력(prompt)에 실제로 들어간 모든 정보입니다.\n저장 개념이 아니라, 일회성 입력 스냅샷(Snapshot)입니다. 호출이 끝나면 사라집니다.' },
                    { type: 'header', content: '③ State는 무엇인가' },
                    { type: 'desc', content: 'AI 흐름을 제어하기 위해 유지하는 "현재 상황 값"입니다.\n"지금 정보가 충분한가?", "몇 번 시도했는가?" 등을 판단하기 위한 기준 데이터입니다.' },
                    { type: 'header', content: '④ Memory는 무엇인가' },
                    { type: 'desc', content: '지금 당장 쓰지 않더라도, 나중에 다시 쓰기 위해 저장해 둔 정보입니다.\n자동으로 쓰이지 않고, 필요할 때만 불러서 Context로 편입됩니다.' },
                    { type: 'header', content: '⑤ 이 셋이 어떻게 이어지는가' },
                    { type: 'code', content: '# 흐름 예시\n\n# 1. 재료 준비\nMemory_Load()    # 저장소에서 과거 정보 꺼냄\nState_Check()    # 현재 상황 확인\n\n# 2. Context 구성\nContext = [User_Input + Memory_Data + State_Info]\n\n# 3. 실행\nResponse = Model_Call(Context)\n\n# 4. 결과 반영\nState_Update(Response)  # 상황 업데이트\nMemory_Save(Response)   # 필요시 저장' },
                    { type: 'header', content: '⑥ 흔한 오해 바로잡기' },
                    { type: 'desc', content: '1) "State도 컨텍스트 아닌가요?"\n→ 될 수는 있지만 자동은 아닙니다. 필요한 State만 선별해서 Context에 넣어야 합니다.\n\n2) "Memory는 항상 컨텍스트죠?"\n→ 아닙니다. 불러오지 않으면(Retrieve하지 않으면) 컨텍스트가 아닙니다.\n\n3) "컨텍스트는 저장된다?"\n→ 아닙니다. API 호출이 끝나면 휘발됩니다.' },
                    { type: 'header', content: '⑦ 한눈에 비교하기' },
                    {
                        type: 'table',
                        content: {
                            headers: ['구분', 'Context', 'State', 'Memory'],
                            rows: [
                                ['역할', '입력', '판단 기준', '저장'],
                                ['시점', '지금', '지금', '과거'],
                                ['모델 입력', 'O', '일부만', 'X (불러와야 O)'],
                                ['자동 사용', 'O', 'X', 'X'],
                                ['수명', '1회 호출', '흐름 동안', '장기']
                            ]
                        }
                    }
                ]
            }
        ]
    },
    {
        id: "multimodal",
        enTitle: "Multimodal",
        koTitle: "멀티모달",
        mainTheme: "지식·이해",
        icon: "Layers",
        hoverText: "복합 입력",
        chipIcon: "ScanEye",
        description: "AI가 텍스트뿐 아니라 이미지·음성·영상 등 여러 형태의 정보를 함께 받아 하나의 판단으로 통합하는 방식",
        fullContent: `👀 이미지\n👂 음성\n🧾 텍스트\n\n이 정보들이\n서로 분리되지 않고\n같은 컨텍스트 안에서 해석됨`,
        bullets: [
            "멀티모달은 \"가능해서\"가 아니라 \"문제 해결에 필요한지\" 기준으로 사용",
            "입력 모달별로 어떤 정보가 판단에 기여하는지 정의",
            "컨텍스트 과부하 방지를 위해 불필요한 모달 정보는 제거",
            "멀티모달은 Agent·Loop 설계와 함께 고려",
            "각 모달 간 우선순위와 충돌 시 해결 방식을 사전에 정의"
        ]
    },
    {
        id: "code-indexing",
        enTitle: "Codebase Indexing",
        koTitle: "코드 색인",
        mainTheme: "지식·이해",
        icon: "FileCode",
        hoverText: "코드 색인",
        chipIcon: "ScanSearch",
        description: "소스 코드를 AI가 검색·이해·참조할 수 있도록 의미 단위로 분해해 색인해 두는 과정",
        fullContent: `🧩 코드를 실행하는 것이 아니라\n🧠 코드를 의미 단위로 나눠\n📦 필요할 때 꺼내 쓰게 만드는 구조\n\nAI가 코드를 “외우는 것”이 아니라\n“찾아볼 수 있게 정리해 두는 것”임`,
        bullets: [
            "코드 전체를 넣지 말고 함수·클래스 등 역할 단위로 청크화",
            "인덱싱 대상 범위 (소스/주석/문서) 명확화",
            "질문이 들어오면 관련 코드만 검색해 컨텍스트로 제한적으로 제공",
            "코드 변경 시 인덱스 갱신 전략을 함께 설계",
            "보안 코드, 비밀 키 등 인덱싱 제외 정책 필수"
        ],
        faqs: [
            {
                question: "왜 코드베이스 인덱싱이 필요한 것인가요?",
                answerBlocks: [
                    { type: 'header', content: '① 핵심 이유: AI는 코드를 통째로 읽을 수 없습니다' },
                    { type: 'desc', content: '"이 함수 어디서 쓰여?", "이 에러 왜 나?" 같은 질문을 하려면 AI가 코드를 알아야 하지만, \n전체 프로젝트 코드는 LLM 입력 한계를 초과하거나 비효율적입니다.\n\n그래서 해야 하는 게\n1. 코드를 의미 단위로 나누고\n2. 각 조각을 임베딩하고\n3. 질문과 가장 관련 있는 코드 조각만 찾아\n4. 컨텍스트로 넣는 것입니다.\n\n이 전체가 "코드베이스 인덱싱"입니다.' },
                    { type: 'header', content: '② 그냥 파일 통째로 넣으면 안 될까요?' },
                    { type: 'desc', content: '1. 파일은 너무 큽니다 (토큰 낭비, 성능 저하)\n2. 한 파일에 여러 책임이 섞여 있습니다 (검색 정확도 하락)\n3. 질문은 보통 "일부분"을 묻습니다\n\n그래서 문서 RAG처럼 "의미 단위 청크"가 필요합니다.' },
                    { type: 'header', content: '③ 코드에서의 "청크"란 무엇인가요?' },
                    { type: 'desc', content: '이 코드 조각 하나만 봐도 "무슨 역할인지 설명할 수 있는" 단위입니다.\n• 함수 단위\n• 클래스 단위\n• 메서드 단위\n• 설정 블록\n• 특정 로직 블록' },
                    { type: 'header', content: '④ 인덱싱 과정 5단계' },
                    { type: 'desc', content: '1. 코드 분석 (파일 구조, 문법 인식)\n2. 의미 단위 분해 (청크화)\n3. 메타데이터 부착 (경로, 함수명, 의존성)\n4. 임베딩 생성 (벡터 변환)\n5. 벡터 DB에 저장 (유사도 검색용)' },
                    { type: 'header', content: '⑤ 실제 검색 흐름 (중요)' },
                    { type: 'code', content: '# 사용자 질문\n"이 API에서 인증은 어디서 처리해?"\n\n# 시스템 내부 흐름\nEmbedding(Question)         # 1. 질문 벡터화\nSearch_VectorDB()           # 2. 유사한 코드 청크(인증 함수) 검색\nGet_Code_Chunk()            # 3. 인증 관련 로직 반환\nGenerate_Answer(Code_Chunk) # 4. 그 코드만 보고 설명 생성\n\n# → 코드를 다 읽는 게 아니라 관련 부분만 찾아서 설명' }
                ]
            }
        ]
    },
    {
        id: "snippet",
        enTitle: "Snippet",
        koTitle: "스니펫",
        mainTheme: "지식·이해",
        icon: "Scissors",
        hoverText: "발췌본",
        chipIcon: "Quote",
        description: "질문에 답하기 위해 필요한 부분만 발췌한 최소 참고 조각",
        fullContent: `스니펫은 문서나 코드 전체가 아니라,\n질문에 답하기 위해 필요한 부분만 발췌한 최소 참고 조각\n청크는 찾아두는 것이고, 스니펫은 실제로 보여주는 것\n\n✂️ 검색된 청크 중에서\n🎯 질문과 직접 관련된 부분만 사용\n📦 컨텍스트를 줄이고 정확도를 높임`,
        bullets: [
            "스니펫은 저장 단위가 아니라 표시·전달 단위임",
            "너무 짧으면 조건·맥락이 깨질 수 있음",
            "질문 유형에 따라 스니펫 길이·범위 정책 필요",
            "코드 스니펫은 예외·조건 누락으로 오해가 생기지 않게 주의",
            "출처를 함께 제공하여 할루시네이션 방지 및 신뢰보장"
        ],
        faqs: [
            {
                question: "스니펫과 청크를 비교해주세요.",
                answerBlocks: [
                    { type: 'header', content: '① 스니펫은 어디서 튀어나오나' },
                    { type: 'desc', content: '흐름을 보면 명확해집니다.\n1. 문서/코드가 청크로 나뉘어 저장됨\n2. 질문이 들어오면 관련 청크를 검색\n3. 그 청크 중에서도 질문과 직접 맞닿은 부분만 잘라서\n4. 그 "잘린 일부"를 스니펫으로 사용\n\n즉, 스니펫은 최종 결과물입니다.' },
                    { type: 'header', content: '② 스니펫 vs 청크' },
                    {
                        type: 'table',
                        content: {
                            headers: ['구분', '청크 (Chunk)', '스니펫 (Snippet)'],
                            rows: [
                                ['정의', '미리 나눠 둔 의미 단위', '질문에 답하는 데 필요한 일부 발췌'],
                                ['기준', '검색·저장 기준', '표시·전달 기준'],
                                ['비유', '준비물', '실제로 꺼내 쓴 조각']
                            ]
                        }
                    },
                    { type: 'header', content: '③ 코드 예시로 바로 감 잡기' },
                    { type: 'desc', content: '질문: "인증 실패 조건이 뭐야?"' },
                    { type: 'code', content: '// 1) 원래 코드 청크 (함수 전체)\nfunction authenticate(user) {\n  if (!user) return false\n  if (!user.token) return false\n  return verifyToken(user.token)\n}\n\n// 2) 스니펫 (질문 관련 부분만 발췌)\nif (!user) return false\nif (!user.token) return false' },
                    { type: 'desc', content: '함수 전체(X), 질문과 직접 관련된 부분만 발췌(O)' },
                    { type: 'header', content: '④ 문서 예시' },
                    { type: 'desc', content: '문서 청크:\n"상품 수령 후 7일 이내에는 환불이 가능합니다. 단, 사용 흔적이 있는 경우 환불이 불가합니다..."\n\n질문: "환불이 안 되는 경우는?"\n\n스니펫:\n"사용 흔적이 있는 경우 환불이 불가합니다."' },
                    { type: 'header', content: '⑤ 왜 스니펫이 중요한가' },
                    { type: 'desc', content: '• 컨텍스트 길이 절약\n• 핵심만 보여줘서 오해 감소\n• 답변 정확도 상승\n\n하지만 잘못 자르면 위험합니다(조건 누락, 맥락 손실).\n따라서 스니펫은 기계적으로 자르면 안 되며, "최소"가 아니라 "충분하지만 짧게" 가져가는 정책이 필요합니다.' }
                ]
            },
            {
                question: "지피티나 퍼플렉시티가 보여주는 출처는 스니펫인가요?",
                answerBlocks: [
                    { type: 'header', content: '가장 쉬운 답' },
                    { type: 'desc', content: '• 출처: 어디서 가져왔는지\n• 스니펫: 거기서 어느 부분을 썼는지\n\n즉, 출처는 주소고 스니펫은 문장이에요!' },
                    { type: 'header', content: '① 책으로 비유해보기' },
                    { type: 'desc', content: '상황: 리포트를 썼을 때 교수님이 “이 말 어디서 나온 거야?”라고 물어보는 상황입니다.\n\n경우 1. 출처만 말한 경우\n“국어책 53페이지요”\n이것이 출처입니다. 책 이름, 페이지 등 위치 정보를 담고 있습니다.\n하지만 교수님은 여전히 53페이지의 어느 문장을 말하는 것인지 알 수 없습니다.\n\n경우 2. 문장을 같이 보여준 경우\n“국어책 53페이지에 봄은 새로운 시작을 상징한다는 문장이 있어요”\n이때 국어책 53페이지는 출처가 되고, 봄은 새로운 시작... 문장은 스니펫이 됩니다.\n이 두 가지가 합쳐져야 완전한 설명이 됩니다.' },
                    { type: 'header', content: '② 퍼플렉시티 사례' },
                    { type: 'desc', content: '퍼플렉시티 화면을 떠올려보세요.\n• 답변 문단 아래 번호 달린 링크가 있고\n• 클릭하면 해당 원문의 문단이 하이라이트 되며 보여집니다.\n\n이때 화면에 보이는 원문 일부가 스니펫이며, 이것을 사용자에게 보여주는 것이 스니펫 기반 UX입니다.\n결과적으로 퍼플렉시티는 출처와 스니펫을 모두 보여주는 서비스입니다.' },
                    { type: 'header', content: '③ GPT 사례' },
                    { type: 'desc', content: 'GPT는 보통 “WHO에 따르면...”, “어떤 연구에서는...”과 같이 말합니다.\n내부적으로는 문서 일부(스니펫)를 참고했을 수 있지만, 사용자에게 원문 문장 자체를 직접 보여주지는 않습니다.\n그래서 사용자는 GPT가 스니펫을 쓰지 않는다고 느낄 수 있으나, 실제로는 참고하되 보여주지 않는 차이가 있습니다.' },
                    { type: 'header', content: '④ 출처와 스니펫 한눈에 보기' },
                    {
                        type: 'table',
                        content: {
                            headers: ['구분', '출처 (Source)', '스니펫 (Snippet)'],
                            rows: [
                                ['정의', '어디서 가져왔는지 알려주는 정보', '근거로 사용한 구체적인 문장'],
                                ['형태', '링크, 문서명, 사이트 이름', '원문 텍스트나 코드의 일부'],
                                ['비유', '위치 정보 (주소)', '내용 정보 (문장)']
                            ]
                        }
                    },
                    { type: 'header', content: '⑤ 스니펫 분리의 목적' },
                    { type: 'desc', content: 'AI가 잘못된 답변을 했을 때 사용자는 “참고한 원문이 정확히 뭐였는지” 궁금해합니다.\n출처 정보만 있다면 사용자가 직접 원문을 찾아야 하지만, 스니펫이 함께 제공되면 즉시 근거를 확인할 수 있습니다.\n따라서 답변의 신뢰가 중요한 서비스일수록 스니펫을 적극적으로 노출합니다.' }
                ]
            }
        ]
    },
    {
        id: "retriever",
        enTitle: "Retriever",
        koTitle: "리트리버",
        mainTheme: "지식·이해",
        icon: "Magnet",
        hoverText: "검색 담당",
        chipIcon: "Target",
        description: "사용자의 질문과 가장 관련 있는 자료를 먼저 찾아오는 역할",
        fullContent: `🔍 수천 페이지의 문서 중 질문에 답변할 핵심 조각을 추출\n\n⚡ 답변 생성 전, 참조할 지식을 필터링하는 관문\n\n📌 AI가 엉뚱한 참고 자료를 보지 않도록 정확하게 선별하는 것이 관건\n\n⚙️ 데이터 구조에 따라 다양한 검색 알고리즘 조합 가능`,
        bullets: [
            "Retriever가 어떤 기준으로 “비슷하다”고 판단할지 정의",
            "문서를 몇 개까지 가져올지 결정",
            "잘못된 문서를 가져왔을 때 답변이 어떻게 망가지는지 고려",
            "모델 성능보다 Retriever 품질이 더 중요한 경우가 많음",
            "단어 일치(키워드)와 의미 유사도(벡터)를 함께 보는 '하이브리드 검색'이 필요한 데이터인지 확인"
        ],
        faqs: [
            {
                question: "Retriver랑 RAG랑 비슷해 보이는데, 무슨 차이인가요?",
                answerBlocks: [
                    { type: 'text', content: 'Retriever랑 RAG는 이름이 비슷해서 헷갈리는데, 관계만 정확히 잡으면 오히려 구조가 또렷해집니다. 결론부터 말씀드릴게요.' },
                    { type: 'header', content: '① RAG vs Retriever 개념 정리' },
                    { type: 'desc', content: 'RAG는 전체 구조의 이름이고, Retriever는 그 안에서 ‘찾는 역할’을 맡은 부품입니다.\n\n• RAG: 찾아보고 답하는 전체 방식\n• Retriever: 그중에서 무엇을 찾아올지 결정하는 역할\n\n즉, RAG는 하나의 "팀"이라면 Retriever는 그 팀의 "수색 담당"이라고 이해하면 쉽습니다.' },
                    { type: 'header', content: '② RAG 안에서 일어나는 일' },
                    { type: 'desc', content: 'RAG를 기능 단위로 나누면 보통 이렇게 작동합니다.\n\n1. 사용자가 질문함\n2. Retriever가 관련 자료를 찾음 (바로 이 구간이 Retriever의 일!)\n3. 찾은 자료를 LLM에게 전달\n4. LLM이 그 자료를 바탕으로 답변 생성' },
                    { type: 'header', content: '③ Retriever의 정확한 과정' },
                    { type: 'desc', content: 'Retriever는 "이 질문이랑 가장 가까운 문서가 뭐지?"를 판단하기 위해 임베딩과 벡터 DB를 사용합니다.\n\n• 질문 → 임베딩(숫자로 변환)\n• 문서 → 임베딩\n• 벡터 DB에서 숫자 사이의 "거리" 계산\n• 가장 가까운 문서 N개 반환\n\n이 과정을 통째로 Retriever라고 부르는 것입니다.' },
                    { type: 'header', content: '④ Retriever 오류 유형' },
                    { type: 'desc', content: '이 부분이 정말 중요합니다. 다음과 같은 문제들의 상당수는 모델(LLM) 문제가 아니라 Retriever 문제일 가능성이 커요.\n\n• 답변이 엉뚱하다\n• 문서가 있는데도 못 찾는다\n• 항상 비슷한 답만 나온다' },
                    { type: 'summary', content: '그래서 "모델을 바꿀까요?"라고 고민하기 전에, "Retriever가 필요한 내용을 제대로 찾고 있나?"를 먼저 점검하는 것이 훨씬 더 현명한 접근입니다.' }
                ]
            }
        ]
    },
    {
        id: "reranking",
        enTitle: "Reranking",
        koTitle: "리랭킹",
        mainTheme: "지식·이해",
        icon: "ListOrdered",
        hoverText: "재정렬",
        chipIcon: "TrendingUp",
        description: "가져온 자료들 중 질문에 가장 잘 맞는 순서로 다시 정렬하는 단계",
        fullContent: `📂 1차로 걸러진 후보들 중 가장 답변에 적합한 것을 재분석\n\n🔍 세밀한 비교를 통해 답변의 정교함을 높이는 정제 과정\n\n✅ 불필요한 데이터를 뒤로 밀어내어 AI가 엉뚱한 정보에 오염되는 것을 방지\n\n📌 Retriever의 한계를 보완하여 답변 품질을 최종 최적화`,
        bullets: [
            "Retriever 결과만으로 답변 정확도가 충분한지 검토",
            "비슷한 문서가 많아 잘못된 참조 가능성이 있는지 판단",
            "Reranking을 넣으면 정확도는 올라가지만 비용과 지연은 증가함",
            "“조금 틀리면 안 되는 서비스”인지 기준으로 적용 여부를 결정",
            "재정렬 과정에서 소요되는 추가 시간(Latency)이 사용자 경험을 해치지 않는지 UX 관점에서 측정"
        ],
    },
    {
        id: "rag",
        enTitle: "RAG",
        koTitle: "검색 증강 생성",
        mainTheme: "지식·이해",
        icon: "Search",
        hoverText: "검색",
        chipIcon: "Info",
        description: "AI가 바로 대답하지 않고 먼저 자료를 찾아본 뒤 대답하게 만드는 방식",
        fullContent: `📚 질문이 입력되면 관련 문서를 먼저 탐색\n\n🔍 찾은 문서를 참고하여 답변을 생성하는 프로세스\n\n🧠 AI가 내부 기억이 아닌 외부 근거를 바탕으로 답변\n\n❗ 틀린 말이나 환각 현상(Hallucination)을 획기적으로 방지`,
        bullets: [
            "답변의 정확도가 중요한 서비스인지 판단",
            "내부 문서, 정책, 매뉴얼이 존재하는지 확인",
            "정보가 자주 바뀌는지 여부 검토",
            "“AI가 아는 것”과 “AI가 찾아봐야 하는 것”을 구분",
            "문서 품질이 곧 답변 품질이라는 점을 전제로 기획"
        ],
        faqs: [
            {
                question: "GPT·Gemini는 RAG 없이도 왜 괜찮아요?",
                answerBlocks: [
                    { type: 'text', content: 'OpenAI GPT나 Google Gemini의 "기본 대화 모드"는 애초에 목적이 일반적인 지식 전달과 자연스러운 대화에 최적화되어 있습니다.\n그래서 이런 영역에서는 RAG 없이도 충분히 만족스러운 답변을 내놓습니다.' },
                    { type: 'header', content: '① 일반 지식과 언어 패턴만으로도 충분한 경우' },
                    { type: 'desc', content: '• 넓은 범위의 일반 지식이나 아이디어 요약, 설명에는 모델 내부의 파라미터만으로 충분합니다.\n• 이 경우에는 정확한 최신 수치나 내부 규칙이 핵심이 아니기 때문이죠.\n• 오히려 RAG를 억지로 붙이면 속도가 느려지고 비용만 올라가는 역효과가 날 수 있습니다.' },
                    { type: 'header', content: '② RAG가 반드시 필요한 순간들' },
                    { type: 'desc', content: '하지만 아래 중 하나라도 해당된다면, RAG 없이 가는 것은 위험합니다.\n• 정보가 아주 조금이라도 틀리면 안 되는 경우\n• 실시간 최신 정보가 중요한 경우\n• 특정 조직, 서비스, 제품의 내부 기준이 필요한 경우\n• "답변의 출처가 어디냐"는 질문이 나올 수 있는 경우' },
                    { type: 'header', content: '③ 그래서 기획자는 이렇게 판단해야 합니다' },
                    { type: 'desc', content: '이 질문 하나를 스스로에게 던져보세요.\n\n"이 질문에 그럴듯한 답이면 충분한가, 아니면 근거 있는 정확한 답이 필요한가?"\n\n• 그럴듯해도 OK → RAG 없어도 됨\n• 틀리면 문제 발생 → RAG 필수 적용' },
                    { type: 'summary', content: '중요한 오해 정리!\n• GPT는 원래 다 RAG를 쓰는 것이 아닙니다.\n• RAG는 "기본값"이 아니라, 목적에 따라 추가하는 "선택 옵션"입니다.' }
                ]
            }
        ]
    },
    {
        id: "fine-tuning",
        enTitle: "Fine-tuning",
        koTitle: "파인튜닝",
        mainTheme: "지식·이해",
        icon: "Target",
        hoverText: "성향 고정",
        chipIcon: "Compass",
        description: "기존 AI 모델에 특정 예시들을 반복 학습시켜 답변 스타일과 판단 경향을 고정하는 방식",
        fullContent: `🎯 새로운 지식을 넣는 것이 아니라 🧭 “어떻게 반응할지”를 정해줌\n\n📌 잘 쓰면 일관성이 생기지만 잘못 쓰면 과적합이 빠르게 발생함\n\n💡 파인튜닝은 AI를 더 똑똑하게 만드는 작업이 아니라 AI의 성격을 굳히는 작업임`,
        bullets: [
            "문제의 본질이 지식 부족인지 태도 불일치인지 먼저 판단",
            "파인튜닝 데이터에 실패·경계 사례를 반드시 포함",
            "RAG·프롬프트로 해결 가능한 문제는 우선 배제",
            "파인튜닝은 되돌리기 어렵다는 점을 고려",
            "학습 이후 답변이 의도한 스타일로 고정되었는지 상시 검증할 수 있는 정성적 평가 기준 수립"
        ]
    },
    {
        id: "overfitting",
        enTitle: "Overfitting",
        koTitle: "과적합",
        mainTheme: "지식·이해",
        icon: "Cpu",
        hoverText: "외워버림",
        chipIcon: "Activity",
        description: "AI가 데이터를 통해 규칙을 이해한 것이 아니라 특정 사례를 그대로 외워버린 상태임",
        fullContent: `🧠 연습 문제에는 강하지만\n\n🧩 조금만 다른 상황에서는 제대로 대응하지 못함\n\n📌 과적합은 학습뿐 아니라 설계와 조건에서도 발생할 수 있음`,
        bullets: [
            "조건·기준이 특정 케이스에만 맞게 지나치게 정밀하지 않은지 점검",
            "Loop·conditional edge가 같은 판단만 반복하지 않는지 확인",
            "QA 시 일부러 엣지 케이스를 포함",
            "“정확함”보다 “망가지지 않음”을 우선 설계",
            "특정 패턴에만 집착하지 않고, 예상 밖의 다양한 질문에도 융통성 있게 작동하는지 점검"
        ]
    },

    // 2. 처리·실행 (Execution) - 단순 구조에서 복잡한 구조로
    {
        id: "router",
        enTitle: "Router",
        koTitle: "라우터",
        mainTheme: "처리·실행",
        icon: "Split",
        hoverText: "분기",
        chipIcon: "Compass",
        description: "사용자의 요청을 분석해서 어떤 처리 흐름으로 보낼지 경로를 결정하는 역할",
        fullContent: `🧭 질문을 보고 단순 응답, 검색, 도구 호출, Agent 중 가장 적절한 경로를 선택\n\n📂 직접 일을 처리하기보다 일을 수행할 최적의 대상을 정하는 "교통 정리" 장치\n\n📌 질문의 유형에 따라 리소스를 배분하여 시스템 전체의 효율성과 비용 절감\n\n⚡ AI를 똑똑하게 만드는 기능을 넘어 시스템을 안정적으로 운영하기 위한 핵심 설계 요소`,
        bullets: [
            "질문 유형을 몇 가지 카테고리로 명확히 분류할 수 있는지 정의",
            "어떤 요청을 복잡한(고비용) 구조로 보낼지에 대한 정교한 기준 설정",
            "라우팅 판단이 틀렸을 때를 대비한 재시도 경로 또는 기본 응답(Fallback) 고려",
            "정확도 확보뿐 아니라 서비스 운영 비용을 획기적으로 낮추는 장치로 활용",
            "라우팅 판단 기준을 사람이 직접 룰셋으로 정할지, AI에게 맡길지(LLM Router)의 신뢰도 관리"
        ]
    },
    {
        id: "output-parser",
        enTitle: "Output Parser",
        koTitle: "아웃파서",
        mainTheme: "처리·실행",
        icon: "FileJson",
        hoverText: "형식화",
        chipIcon: "SquareCheckBig",
        description: "AI의 답변을 시스템이 이해할 수 있는 정해진 구조와 형식으로 정리하고 검증하는 단계",
        fullContent: `📄 말로 된 답변을 JSON, Markdown 등 시스템 연동이 가능한 형태로 변환\n\n📦 답변 내에 필수 값이 포함되었는지, 데이터 형식이 정확한지 검증\n\n🔍 파싱 성공 시까지 재요청을 보내거나 기본값을 채워넣는 후처리 수행\n\n📌 AI 답변을 '예쁘게 만드는 것'이 아니라 서비스 연동을 위한 '데이터화'가 본질`,
        bullets: [
            "출력 결과를 사람이 직접 읽을 것인지, 시스템이 데이터로 처리할 것인지 구분",
            "반드시 포함되어야 할 필드(Key)와 데이터 구조를 사전에 명확히 정의",
            "형식이 어긋났을 때의 재요청(Retry) 로직 또는 실패 시 대응 시나리오 설계",
            "아웃파서의 기준이 명확할수록 AI 서비스의 전체 운영 안정성이 높아짐",
            "모델이 내놓는 불필요한 설명(Chatter)을 배제하고 순수하게 구조화된 데이터만 출력하도록 유도하는 프롬프트 최적화"
        ]
    },
    {
        id: "langchain",
        enTitle: "LangChain",
        koTitle: "랭체인",
        mainTheme: "처리·실행",
        icon: "Link",
        hoverText: "실행 구조",
        chipIcon: "Box",
        description: "AI의 행동 순서와 도구 사용 흐름을 설계하는 프레임워크",
        fullContent: `🧩 질문을 분해하고 정해진 순서대로 행동하게 만드는 구조\n\n📂 단순 답변이 아니라 문서 검색, 도구 사용 등 복합적인 과정 제어\n\n🔍 필요한 정보를 찾고, 선별하고, 생성하는 전체 "실행 틀"의 역할\n\n📌 AI가 "무엇을 언제 할지" 미리 정의하여 안정적인 기능을 구현함`,
        bullets: [
            "AI가 한 번의 응답으로 끝나는지, 여러 단계를 거쳐야 하는지 판단",
            "문서 검색, 조건 분기, 도구 실행 등 행동 흐름이 필요한지 검토",
            "기획 단계에서 AI의 전체 행동 순서를 명확히 정의",
            "모델 성능 향상이 아닌 기능을 안정적으로 실행시키는 구조임을 전제",
            "랭체인 버전 업데이트가 매우 빠르므로, 특정 버전에 고정할지 최신 기능을 따라갈지 개발 유지보수 전략 수립"
        ],
        faqs: [
            {
                question: "RAG랑 랭체인이 헷갈려요. 정확히 어떤 차이가 있나요?",
                answerBlocks: [
                    { type: 'header', content: '① 제일 쉬운 비유부터 시작해 볼까요?' },
                    { type: 'desc', content: '요리로 비유하면 아주 간단합니다.\n• RAG = “요리할 때 냉장고에서 재료 꺼내서 참고하는 방식”\n• 랭체인 = “요리 순서표(레시피)”\n\n즉, RAG는 무엇을 참고할지에 대한 "설계 개념"이고, 랭체인은 어떤 순서로 행동할지에 대한 "실행 구조"입니다. 역할이 완전히 다르죠.' },
                    { type: 'header', content: '② 한 줄로 딱 잘라서 구분해 드릴게요' },
                    { type: 'desc', content: '이 문장 두 개만 기억해 두셔도 좋습니다.\n• RAG는 ‘찾아보고 답한다’는 설계 방식 (아이디어)\n• 랭체인은 ‘그걸 실제로 어떤 순서로 실행할지’ 정하는 프레임워크 (실행 방법)' },
                    { type: 'header', content: '③ 실제 처리 흐름으로 보면 차이가 더 명확해집니다' },
                    { type: 'desc', content: 'RAG 관점:\n질문이 오면 → 관련 문서를 찾아서 → 참고해서 답한다. (여기까지가 RAG의 핵심 개념입니다)\n\n랭체인 관점:\n질문을 받는다 → 검색이 필요한지 판단 → Retriever 실행 → 결과 분석 및 재검색 → 상위 문서 선별 → 답변 생성.\n(이 구체적인 순서 전체를 고정하고 연결하는 것이 랭체인의 역할입니다)' },
                    { type: 'header', content: '④ 기획 단계에서 스스로에게 던질 질문' },
                    { type: 'desc', content: '이 두 가지 질문만 스스로에게 던져보면 기획의 방향이 명확해집니다.\n• RAG 질문: "이 AI는 자기 머리로만 답해도 되는가, 아니면 외부 자료를 찾아보고 답해야 하는가?"\n• 랭체인 질문: "이 AI는 한 번에 답하면 되는가, 아니면 여러 단계를 거쳐 행동해야 하는가?"' },
                    { type: 'summary', content: '결국 헷갈렸던 진짜 이유는 서비스 구축 시 RAG라는 전략을 랭체인이라는 도구로 구현하기 때문입니다.\n\n• RAG = 무엇을 할 것인가 (What)\n• 랭체인 = 어떻게 실행할 것인가 (How)\n\n이렇게 구분하시면 기술 미팅이나 기획 시 훨씬 더 명확하게 소통하실 수 있습니다.' }
                ]
            }
        ]
    },
    {
        id: "state",
        enTitle: "State",
        koTitle: "상태",
        mainTheme: "처리·실행",
        icon: "MapPin",
        hoverText: "현재 상황",
        chipIcon: "Flag",
        description: "AI가 작업을 수행하는 동안 지금 어디까지 왔는지 보여주는 현재 상태 정보",
        fullContent: `🧭 지금 목표가 무엇인지, 어떤 행동을 이미 했는지, 무엇이 부족한지를 담고 있는 정보\n\n📍 AI가 작업을 수행하는 동안 "지금 어디까지 왔는지"를 보여주는 이정표 역할\n\n📌 랭그래프는 이 State를 기준으로 다음에 어떤 행동을 할지 결정함`,
        bullets: [
            "AI 작업을 상태 단위로 나눌 수 있는지 검토",
            "각 상태에서 허용되는 행동을 명확히 정의",
            "상태 전환 조건과 종료 상태를 반드시 설계",
            "State가 없으면 Agent는 통제 불가능해짐",
            "State는 데이터가 아니라 AI 행동을 제어하는 기준점임을 인지"
        ],
        faqs: [
            {
                question: "State와 노드의 차이가 무엇인가요? 각각의 예시도 궁금해요",
                answerBlocks: [
                    { type: 'header', content: '① 한 줄 요약부터' },
                    { type: 'desc', content: '• State: 지금 상황이 어떤 상태인지 (상태 설명)\n• Node: 그 상황에서 무엇을 할지 (행동)' },
                    { type: 'header', content: '② State란 무엇인가' },
                    { type: 'desc', content: 'State는 AI가 지금 어떤 상황에 놓여 있는지를 나타내는 정보 묶음입니다.\n행동하거나 판단하지 않고, 그냥 "현재 상태(맥락 스냅샷)"를 들고 있습니다.' },
                    { type: 'code', content: 'info_status = insufficient\nretry_count = 2\nconfidence_score = 0.62' },
                    { type: 'desc', content: '이건 "지금 정보가 부족하고, 두 번 시도했고, 신뢰도가 낮다"는 상황 설명이지, 아무 일도 하지 않는 상태입니다.' },
                    { type: 'header', content: '③ Node란 무엇인가' },
                    { type: 'desc', content: 'Node는 특정 State를 입력으로 받아 실제로 어떤 일을 수행하는 실행 단위(행동의 주체)입니다.' },
                    { type: 'code', content: '# Node 예시\n• 문서 검색 Node\n• 답변 생성 Node\n• 재질문 Node\n• 종료 Node' },
                    { type: 'desc', content: 'Node는 실행되면 State를 입체적으로 바꿉니다.' },
                    { type: 'header', content: '④ State와 Node를 절대 헷갈리면 안 되는 이유' },
                    { type: 'desc', content: '이 차이를 놓치면 설계가 무너집니다.\n\n[잘못된 사고]\n"정보가 부족한 상태니까 검색을 한다"\n(말 자체는 맞지만, 주체가 틀렸습니다.)\n\n[올바른 구조]\n1. State: 정보가 부족함\n2. Node: 그래서 검색을 실행\n3. State 변경: 문서 확보됨\n\nState가 검색을 하는 게 아니라, Node가 검색을 하는 것입니다.' },
                    { type: 'header', content: '⑤ 실제 AI 흐름 예시로 한 번에 보기' },
                    { type: 'code', content: '# 예시: 질문 → 답변 AI\n\n[State]\nquestion_received = true\ninfo_status = insufficient\nretry_count = 0\n\n↓ (입력)\n\n[Node 1: 문서 검색]\n• 행동: 관련 문서 검색\n• 결과: 문서 확보\n\n↓ (변경)\n\n[State 변경]\ninfo_status = sufficient\ndocs_count = 4\n\n↓ (입력)\n\n[Node 2: 답변 생성]\n• 입력: 변경된 State\n• 행동: 답변 생성' },
                    { type: 'summary', content: 'State → Node → State → Node 이 리듬이 핵심입니다.' }
                ]
            }
        ]
    },
    {
        id: "node-edge",
        enTitle: "Node / Edge",
        koTitle: "노드 / 엣지",
        mainTheme: "처리·실행",
        icon: "Share2",
        hoverText: "작업 / 전환",
        chipIcon: "Waypoints",
        description: "Node는 작업을 수행하고, Edge는 다음 경로를 결정하는 연결선",
        fullContent: `🧩 Node: AI가 특정 시점에 수행하는 하나의 의미 있는 작업 단위 ("여기서 무슨 일을 하는가")\n\n🧭 Edge: 한 Node가 끝난 뒤 다음으로 이동할 경로를 결정하는 연결 ("현재 State를 기준으로 다음 Node를 선택")\n\n📌 Node는 일을 하고 Edge는 길을 고름`,
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
                    { type: 'text', content: '결론부터 말씀드리면 플로우차트 + 상태 조건을 함께 쓰는 방식이 가장 안정적입니다.\n단순 다이어그램만 그리면 “왜 분기되는가?”가 빠지고, 텍스트만 쓰면 흐름이 보이지 않기 때문입니다.' },
                    { type: 'header', content: '① 추천 표현 방식' },
                    { type: 'desc', content: '메인 다이어그램은 흐름 중심으로 그리되, 각 요소의 역할을 명확히 합니다.\n• 사각형: Node (작업)\n• 화살표: Edge (이동)\n• 화살표 위 텍스트: 분기 조건 (State 기준)' },
                    { type: 'header', content: '② 플로우 차트 예시' },
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
    },
    {
        id: "conditional-edge",
        enTitle: "Conditional Edge",
        koTitle: "조건 분기",
        mainTheme: "처리·실행",
        icon: "GitBranch",
        hoverText: "조건 분기",
        chipIcon: "Split",
        description: "Node 실행이 끝난 뒤 현재 State를 기준으로 다음에 이동할 Node를 선택하는 경로",
        fullContent: `🔀 같은 Node 이후라도 State 값에 따라 전혀 다른 흐름으로 갈 수 있음\n\n📌 Conditional edge는 AI 흐름에서 분기, 루프, 종료를 가능하게 만드는 핵심 요소`,
        bullets: [
            "분기 기준은 반드시 State 값으로 명시",
            "조건은 추상어가 아니라 판단 가능한 기준으로 정의",
            "모든 conditional edge에는 종료로 가는 경로를 최소 하나 포함",
            "조건이 Edge에 보이도록 다이어그램과 문서에 명확히 표기"
        ],
        faqs: [
            {
                question: "Edge와 Conditional Edge의 차이점이 무엇인가요?",
                answerBlocks: [
                    { type: 'text', content: '먼저 한 문장으로 차이점을 정리해 드립니다.\n• Edge: 다음으로 간다\n• Conditional Edge: 조건을 보고 골라서 간다\n\n모든 conditional edge는 edge지만, 모든 edge가 conditional edge는 아닙니다.' },
                    { type: 'header', content: '① Edge는 무엇인가' },
                    { type: 'desc', content: 'Edge는 Node와 Node를 단순히 연결하는 흐름입니다.\n• 판단 없음, 분기 없음\n• "이 다음은 무조건 여기"\n• 예시 : 질문 분석 > 답변 생성\n\n즉, 상황을 보지 않고 무조건 정해진 다음 단계로 이동합니다.' },
                    { type: 'header', content: '② Conditional Edge는 무엇인가' },
                    { type: 'desc', content: 'Conditional Edge는 Node 실행 후, State를 기준으로 다음 경로를 선택하는 Edge입니다.\n• 판단 있음, 분기 있음\n• 조건 충족 여부가 핵심\n• 예시 :\n[문서 검색]\n   ├─ (정보 충분) ──> [답변 생성]\n   └─ (정보 부족) ──> [재검색]\n\n같은 Node 이후라도 상태(State)에 따라 전혀 다른 길로 갈 수 있습니다.\nConditional Edge가 있어야 Loop, Agent, 실패 처리가 가능해집니다.' },
                    { type: 'header', content: '③ 한눈에 비교하기' },
                    {
                        type: 'table',
                        content: {
                            headers: ['구분', 'Edge', 'Conditional Edge'],
                            rows: [
                                ['판단', '없음', '있음'],
                                ['기준', '고정', 'State'],
                                ['분기', '불가', '가능'],
                                ['반복', '불가', '가능']
                            ]
                        }
                    },
                    { type: 'header', content: '④ 흔한 오해 2가지' },
                    { type: 'desc', content: '1. "Edge에도 조건 달 수 있지 않나?"\n→ 그 순간 그것은 이미 Conditional Edge입니다. 조건이 붙으면 더 이상 일반 Edge가 아닙니다.\n\n2. "Conditional Edge는 복잡해서 나중에 써도 되지 않나?"\n→ 나중에 붙이면 흐름이 무너집니다. 분기·종료·Loop가 필요한 순간부터, 처음부터 Conditional Edge로 설계해야 합니다.' }
                ]
            }
        ]
    },
    {
        id: "loop",
        enTitle: "Loop",
        koTitle: "루프",
        mainTheme: "처리·실행",
        icon: "RotateCw",
        hoverText: "루프",
        chipIcon: "RefreshCw",
        description: "AI가 한 번의 시도로 끝내지 않고 조건이 만족될 때까지 같은 흐름을 다시 수행하도록 만드는 구조",
        fullContent: `🔁 정보가 부족하거나 결과가 기준에 못 미치면 같은 Node로 되돌아감\n\n📌 루프는 정확도를 높이기 위한 장치이지만 종료 조건이 없으면 위험해짐\n\n⚙️ 무한 루프를 방지하기 위해 최대 루프 횟수나 탈출 조건 설계가 필수`,
        bullets: [
            "Loop가 필요한 상황과 불필요한 상황을 명확히 구분",
            "루프 조건은 반드시 State 값으로 정의",
            "루프 횟수 제한과 종료 경로를 항상 포함",
            "실패 시 사용자 안내 UX를 함께 설계",
            "루프 횟수가 늘어날수록 토큰 소모가 커지므로, 중간 단계에서 컨텍스트 요약 또는 데이터 정제 과정 검토"
        ],
        faqs: [
            {
                question: "Loop를 써도 되는 문제와 써서는 안 되는 문제를 어떻게 구분할까?",
                answerBlocks: [
                    { type: 'header', content: '① 가장 단순하고 강력한 기준' },
                    { type: 'text', content: '이 질문 하나면 70%는 걸러집니다. "이 문제는 다시 시도하면 ‘더 나아질 수 있는가’?"\n\n- YES → Loop 고려 가능\n- NO → Loop 금지\n\nLoop는 개선 가능성이 있을 때만 의미가 있습니다.' },
                    { type: 'header', content: '② Loop를 써도 되는 경우 (Do)' },
                    {
                        type: 'table',
                        content: {
                            headers: ['판단 기준', '세부 내용', '적용 예시'],
                            rows: [
                                ['정보의 점진적 보완', '다시 찾거나 물어서 결과 개선 가능', '문서 검색, 리서치, 조건 보완형 질문'],
                                ['낮은 실패 리스크', '재시도가 사용자에게 큰 피해를 주지 않음', '초안 작성, 아이디어 탐색, 문서 요약'],
                                ['명확한 종료 기준', '루프 횟수와 포기 시점을 정의 가능', '3회 실패 시 종료, 신뢰도 미달 시 종료'],
                                ['UX적 합의', '사용자가 정확도를 위한 대기를 납득함', '리서치형 AI, 전문가 보조 도구']
                            ]
                        }
                    },
                    { type: 'header', content: '③ Loop를 피해야 하는 경우 (Don\'t)' },
                    {
                        type: 'table',
                        content: {
                            headers: ['판단 기준', '세부 내용', '적용 예시'],
                            rows: [
                                ['결과의 고정성', '같은 데이터와 기준으로 결과가 불변함', '단순 Q&A, 정적 FAQ 식별'],
                                ['응답 속도 최우선', '빠른 응답이 UX의 핵심 가치인 경우', '고객센터 1차 응답, 검색 자동완성'],
                                ['비용 및 보안 위험', '호출당 비용이 크거나 권한 이슈 존재', '결제 처리, 유료 API 연동, 보안 인증'],
                                ['통제력 상실 우려', '루프 이유와 끝나는 시점이 불명확할 때', '설명 없는 반복 작업 (신뢰 하락)']
                            ]
                        }
                    },
                    { type: 'text', content: '기획할 때, 다음 세가지를 고려해보세요!' },
                    { type: 'summary', content: '- 개선 가능성이 있는가? (품질)\n- 기다릴 만한 가치가 있는가? (UX)\n- 끝낼 시점을 아는가? (안정성)' }
                ]
            }
        ]
    },
    {
        id: "langgraph",
        enTitle: "LangGraph",
        koTitle: "랭그래프",
        mainTheme: "처리·실행",
        icon: "GitGraph",
        hoverText: "상태 흐름",
        chipIcon: "Map",
        description: "AI의 작업 과정을 단계가 아닌 '상태들의 연결'로 표현하는 방식",
        fullContent: `🧭 AI의 작업 과정을 단계가 아닌 '상태들의 연결'로 표현\n\n➡️ 현재 상태를 기준으로 다음에 갈 수 있는 행동들을 정의\n\n🔁 필요하면 같은 상태를 반복하거나 이전 단계로 회귀 가능\n\n📌 AI의 행동을 자유롭게 두되 정해진 흐름 안에서만 움직이게 만드는 지도`,
        bullets: [
            "AI 작업이 직선 흐름인지 분기·반복이 많은지 판단",
            "중간 실패 시 어디로 돌아가야 하는지 명확히 정의",
            "Agent의 자유도를 어디까지 허용할지 결정",
            "단순한 문제에 과도한 구조를 쓰지 않도록 주의",
            "각 상태(State)에서 유지해야 할 데이터와 기억의 범위를 사전에 설계"
        ],
        faqs: [
            {
                question: "랭그래프랑 랭체인의 차이가 무엇인가요?",
                answerBlocks: [
                    { type: 'text', content: '랭그래프를 한 문장으로 정의하자면, AI의 행동 흐름을 ‘순서’가 아니라 ‘상태와 분기’로 설계하는 방식입니다.' },
                    { type: 'header', content: '① 비유로 이해하기' },
                    { type: 'desc', content: '• 랭체인 = 절차서 (매뉴얼)\n• 랭그래프 = 업무 흐름도 (Flowchart)\n\n랭체인이 "1번 하고 2번 해"라면, 랭그래프는 "1번 결과가 좋으면 2번으로 가고, 아니면 다시 1번해"에 가깝습니다.' },
                    { type: 'header', content: '② 왜 랭그래프가 필요해졌을까요?' },
                    { type: 'desc', content: '랭체인은 A → B → C 처럼 단순한 흐름은 잘합니다. 하지만 Agent를 쓰기 시작하면 복잡한 상황이 생깁니다.\n\n• 결과에 따라 다음 행동이 완전히 달라짐\n• 다시 이전 단계로 돌아가야 함 (Loop)\n• 작업이 언제 끝날지 고정할 수 없음\n\n이걸 랭체인(일렬 구조)으로 짜면 코드가 꼬이고 흐름이 보이지 않게 됩니다.' },
                    { type: 'header', content: '③ 그래서 나온 해결책: 흐름을 그래프로 그리자' },
                    { type: 'desc', content: '순서가 아니라 "상태(State)"와 "이동(Edge)"을 정의해서 자유롭게 움직이게 하자는 것, 이것이 랭그래프의 핵심입니다.' },
                    { type: 'header', content: '④ 랭체인 vs 랭그래프 핵심 차이표' },
                    {
                        type: 'table',
                        content: {
                            headers: ['구분', '랭체인', '랭그래프'],
                            rows: [
                                ['기본 구조', '직선 (Chain)', '그래프 (Graph)'],
                                ['흐름 방식', '정해진 순서', '상태 기반 분기'],
                                ['반복 처리', '불편함', '자연스러움 (Loop)'],
                                ['Agent 적합성', '보통', '매우 높음'],
                                ['복잡한 업무', '한계 있음', '강함']
                            ]
                        }
                    },
                    { type: 'summary', content: '한 줄 요약\n• 랭체인: “이 순서대로 해” (지시형)\n• 랭그래프: “지금 상태에서 다음은 어디로 갈까” (판단형)' }
                ]
            },
            {
                question: "언제 랭그래프가 필요한가요?",
                answerBlocks: [
                    { type: 'header', content: '① 이 중 2개 이상이면 거의 랭그래프 영역입니다' },
                    { type: 'desc', content: '• 한 번에 답이 안 나오는 문제\n• 중간 결과에 따라 재검색/재시도 해야 하는 경우\n• 성공/실패 분기가 명확함\n• 작업 상태를 계속 유지해야 함\n• Agent를 쓰고 있음' },
                    { type: 'header', content: '② 대표적인 예시' },
                    { type: 'desc', content: '• 복합 업무 자동화\n• 조사 → 요약 → 검증 → 수정\n• 고객 응대 중 재질문 반복' },
                    { type: 'header', content: '③ 이럴 때는 과한 선택입니다' },
                    { type: 'desc', content: '• 단순 Q&A\n• 한 번 검색하고 끝나는 작업\n• 반복이나 분기가 없는 경우' },
                    { type: 'summary', content: '단순한 파이프라인이라면 랭체인이 훨씬 단순하고 안정적입니다. 복잡도가 임계점을 넘을 때만 랭그래프를 고려하세요.' }
                ]
            }
        ]
    },
    {
        id: "agent",
        enTitle: "Agent",
        koTitle: "에이전트",
        mainTheme: "처리·실행",
        icon: "Brain",
        hoverText: "자율 실행",
        chipIcon: "Target",
        description: "목표 달성을 위해 어떤 행동을 할지 스스로 판단하고 도구를 사용하는 주체",
        fullContent: `🎯 목표를 확인하고 무엇이 필요한지 판단하는 자율 구조\n\n🧠 정해진 순서 없이 검색, 계산, 질문 등 필요한 행동을 직접 선택\n\n🛠 답변 생성기를 넘어 문제를 스스로 해결하려는 '주체성'이 핵심\n\n📌 AI에게 책임을 넘기고 자율성을 부여하는 고도화된 시스템 구조`,
        bullets: [
            "목표를 한 문장으로 명확히 정의할 수 있는지 검토",
            "AI가 선택해도 되는 행동과 안 되는 행동의 범위를 구분",
            "비용 폭증과 무한 반복을 막기 위한 중단 조건을 설계",
            "단순 Q&A가 아닌 복합 업무나 탐색형 문제 해결에 적용",
            "똑똑한 모델보다 '책임을 어디까지 맡길 것인가'를 결정하는 기획"
        ]
    },
    {
        id: "cot",
        enTitle: "CoT",
        koTitle: "Chain of Thought",
        mainTheme: "처리·실행",
        icon: "BrainCircuit",
        hoverText: "속생각",
        chipIcon: "Workflow",
        description: "AI가 답변을 만들기까지 내부적으로 거치는 단계적 사고 흐름",
        fullContent: `🧠 문제 해석\n🧩 조건 정리\n📐 중간 판단\n🎯 결론 도출\n\n이 과정은 답변 품질을 높이기 위한 것이며\n사용자에게 그대로 보여주는 설명이 아님`,
        bullets: [
            "복잡한 문제일수록 CoT는 내부적으로 필수",
            "CoT 노출은 기본적으로 비권장",
            "사용자에게는 결론 + 정리된 이유만 제공",
            "사고 과정이 길어지는 만큼 응답 대기 시간과 토큰 비용이 증가함",
            "환각(Hallucination)을 줄이고 정답률을 높이는 가장 확실한 방법"
        ],
        faqs: [
            {
                question: "CoT랑 에이전트 Walkthrough랑 뭐가 다른 것인가요?",
                answerBlocks: [
                    { type: 'text', content: '먼저 한 문장으로 정리해 드릴게요.\nCoT는 ‘생각’이고 에이전트 Walkthrough는 ‘행동 기록’입니다.\n\n👉 머릿속 vs 로그\n👉 보통 숨김 vs 보통 공개' },
                    { type: 'header', content: '① CoT는 무엇인가 (속생각)' },
                    { type: 'desc', content: '사람으로 치면 이런 것입니다.\n• 문제를 보자마자 머릿속에서\n• 조건 따지고, 가설 세우고, 계산하고, 결론 내리는 과정\n\n이 머릿속 흐름이 CoT입니다.\n중요한 포인트는 "사용자에게 보여주기 위한 게 아니라, AI가 잘 생각하기 위해 내부에서 쓰는 것"이라는 점입니다.' },
                    { type: 'header', content: '② 에이전트 Walkthrough는 무엇인가 (행동 일지)' },
                    { type: 'desc', content: '사람으로 치면 업무 일지입니다.\n• 무엇을 먼저 했고\n• 그 다음에 무슨 도구를 썼고\n• 어떤 순서로 움직였는지\n\n“이 사람이 한 행동을 순서대로 적은 기록”입니다.\n이건 생각이 아니라 "행동"이므로 사용자나 운영자에게 보여줄 수 있습니다.' },
                    { type: 'header', content: '③ 예시 하나로 바로 비교' },
                    { type: 'code', content: '질문: "이 문서 요약해줘"\n\n[CoT - 속생각 (내부)]\n• 문서 길이가 기네. 요약 가능할까?\n• 일단 단락부터 나눠야겠다.\n• 핵심만 뽑아서 합치자.\n👉 이건 사용자에게 안 보여줍니다.\n\n[Walkthrough - 행동 기록 (공개)]\n1. 문서 길이 확인 (Check_Length)\n2. 청크 분할 (Split_Text)\n3. 각 청크 요약 (Summarize)\n4. 요약 결과 병합 (Merge)\n👉 이건 보여줄 수 있습니다.' },
                    { type: 'header', content: '④ 왜 이 둘을 섞으면 위험한가' },
                    { type: 'desc', content: 'CoT를 노출하면 AI의 "틀린 생각"이나 "정책 로직"까지 다 보여주게 되어 신뢰가 떨어지고 공격받을 수 있습니다.\n반면 Walkthrough는 "무슨 도구를 썼는지" 객관적 사실을 보여주므로 신뢰를 높여줍니다.' },
                    { type: 'summary', content: '요즘 AI 서비스의 기본 원칙:\n• CoT → 사용하되 숨긴다 (결과 품질용)\n• 에이전트 Walkthrough → 정리해서 보여줄 수 있다 (신뢰/설명용)' }
                ]
            }
        ]
    },

    // 3. 연결·확장 (Expansion) - 기초 연결부터 표준까지
    {
        id: "api",
        enTitle: "API",
        koTitle: "Application Programming Interface",
        mainTheme: "연결·확장",
        icon: "Plug",
        hoverText: "통로",
        chipIcon: "DoorOpen",
        description: "서로 다른 프로그램이 정해진 방식으로 기능을 요청하고 결과를 주고받는 공식 통로",
        fullContent: `🚪 내부 구조를 몰라도 정해진 형식으로 요청하면 기능을 수행하는 관문\n\n📨 시스템을 통째로 여는 것이 아니라 정해진 범위만 공개하는 보안 방식\n\n📦 대부분의 AI 기능은 결국 API를 통해 외부 서비스나 시스템과 연결\n\n📌 기술적 구현을 넘어 시스템 간 상호작용의 "약속"을 설계하는 일`,
        bullets: [
            "외부에 제공할 기능의 범위를 보안 관점에서 명확히 정의",
            "잘못된 요청(에러)이 들어왔을 때의 응답 기준 및 UX 가이드 설정",
            "공개 범위와 데이터 접근 권한이 서비스 보안과 직결됨을 인지",
            "AI 기능을 외부와 연결하기 위한 가장 대중적이고 효율적인 통로로 활용",
            "API 호출 횟수 제한(Rate Limit)에 걸렸을 때 사용자에게 어떻게 안내하고 대기시킬지 UX 시나리오 설계"
        ],
        faqs: [
            {
                question: "Tool calling, MCP, API의 관계가 어떻게 되나요?",
                answerBlocks: [
                    { type: 'text', content: '현장에서는 이 세 단어가 섞여서 쓰이다 보니 헷갈리기 쉽습니다. 하지만 역할과 계층이 명확히 다릅니다.' },
                    { type: 'header', content: '① Tool calling은 API 없이는 존재할 수 없습니다' },
                    { type: 'desc', content: '• API = “이런 기능이 있다”는 통로 (도구 그 자체)\n• Tool calling = AI가 “이 API를 써야겠다”고 선택해서 호출하는 방식 (AI의 동작)\n\n즉, API는 만들어진 문이고, Tool calling은 AI가 그 문을 열고 나가는 행위입니다.' },
                    { type: 'header', content: '② API는 "문"이고, MCP는 "출입 규정"입니다' },
                    { type: 'desc', content: '• API = 개별 기능 접근 방법 (문 하나하나)\n• MCP = 여러 API를 AI가 어떻게 써도 되는지 정한 상위 규칙 (출입 규정)\n\n개통된 문(API)이 아무리 많아도, 어떤 문을 어떤 순서로 열어야 할지 정해주는 질서(MCP)가 없다면 시스템은 혼란에 빠지게 됩니다.' },
                    {
                        type: 'table',
                        content: {
                            headers: ['구분', 'API', 'Tool calling', 'MCP'],
                            rows: [
                                ['본질', '소통 관문', 'AI의 행동', '표준 규약'],
                                ['비유', '열려 있는 문', '문을 여는 행위', '출입 규칙'],
                                ['대상', '시스템 간 연결', '모델의 도구 사용', '생태계 질서']
                            ]
                        }
                    },
                    { type: 'summary', content: 'API가 소통의 기본 관문이라면,\nTool calling은 그 관문을 통과하는 AI의 액션이며,\nMCP는 이 모든 과정이 안전하고 일관되게 일어날 수 있도록 지휘하는 최상위 규약입니다.' }
                ]
            }
        ]
    },
    {
        id: "tool-calling",
        enTitle: "Tool Calling",
        koTitle: "도구 실행",
        mainTheme: "연결·확장",
        icon: "Wrench",
        hoverText: "도구 실행",
        chipIcon: "Terminal",
        description: "AI가 외부 기능을 실제로 사용하도록 시스템에 요청하는 방식",
        fullContent: `🧠 질문을 분석하여 검색·계산 등 외부 기능의 필요성을 스스로 판단\n\n🛠 AI가 직접 행동하지 않고, 시스템에 "이 도구가 필요해"라고 요청(Call)\n\n📂 실제 도구 실행 결과를 시스템에게서 전달받아 최종 답변 완성\n\n📌 답변 생성을 넘어 AI에게 실제 행동 권한을 부여하는 핵심 장치`,
        bullets: [
            "AI가 어떤 도구까지 사용해도 되는지 범위를 명확히 정의",
            "비용과 리소스 낭비를 막기 위한 호출 횟수 및 중단 조건 설계",
            "도구 실행 실패나 지연 시의 예외 처리 UX 정의",
            "단순 정보 제공을 넘어 시스템 연동이 필요한 기능에 적합",
            "똑똑한 모델을 쓰는 것보다 '어떤 무기를 쥐어줄 것인가'를 고민하는 기획"
        ],
        faqs: [
            {
                question: "MCP랑 비슷해 보이는데, 무슨 차이인가요?",
                answerBlocks: [
                    { type: 'text', content: 'Tool calling과 Agent가 늘어나면서 현장에서 도구마다 호출 방식이 다르고, 권한이 불명확하며, 문맥이 끊기는 등의 문제가 발생하기 시작했습니다.' },
                    { type: 'header', content: '① 통제와 일관성이 필요한 시점에 등장한 "공통 규칙"' },
                    { type: 'desc', content: 'AI가 할 수 있는 일은 많아졌지만, 이를 관리할 질서가 부족해진 것이죠.\n그래서 탄생한 것이 바로 표준화된 약속인 MCP(Model Context Protocol)입니다.' },
                    { type: 'header', content: '② MCP는 AI와 외부 세계 사이의 "인터페이스"입니다' },
                    { type: 'desc', content: '어떤 도구가 존재하는지, 무슨 일을 하는지, 어떤 권한이 필요한지를 표준화된 방식으로 미리 정의해두는 것입니다.\n덕분에 어떤 AI 모델을 쓰더라도 같은 규칙으로 도구를 다룰 수 있게 됩니다.' },
                    {
                        type: 'table',
                        content: {
                            headers: ['구분', 'Tool calling', 'MCP'],
                            rows: [
                                ['역할', '도구를 부르는 기능', '도구 사용 규칙'],
                                ['범위', '개별 호출', '전체 생태계'],
                                ['통제', '약함', '강함'],
                                ['확장성', '낮음', '높음'],
                                ['기획 관점', '기능 단위', '구조 단위']
                            ]
                        }
                    },
                    { type: 'summary', content: '쉽게 요약하자면, Tool calling은 실제로 도구를 사용하는 "행동"이고,\nMCP는 그 행동이 안전하고 일관성 있게 일어날 수 있도록 만드는 "질서"입니다.' }
                ]
            }
        ]
    },
    {
        id: "mcp",
        enTitle: "MCP",
        koTitle: "모델 컨텍스트 프로토콜",
        mainTheme: "연결·확장",
        icon: "ShieldCheck",
        hoverText: "사용 규칙",
        chipIcon: "ScrollText",
        description: "AI가 외부 도구와 데이터를 안전하고 일관되게 사용하도록 정한 공통 규약",
        fullContent: `📜 AI가 외부 도구와 데이터를 사용할 때 따르는 표준화된 인터페이스\n\n🧠 임의로 도구를 쓰지 않고 정해진 형식과 권한 안에서만 행동하도록 제어\n\n✅ 여러 도구와 모델을 연결할 때 일관되고 예측 가능한 결과를 보장\n\n📌 AI에게 무한한 자유를 주는 기능이 아니라, 자유를 안전하게 제한하는 통제 장치`,
        bullets: [
            "AI가 접근해도 되는 도구와 금지할 도구를 명확히 구분",
            "도구별 입력·출력 형식을 표준화하여 운영 안정성 확보",
            "에이전트 구조 도입 시 자율적 행동의 범위를 어디까지 허용할지 정의",
            "기능 향상보다 AI 통제와 시스템 운영 무결성을 최우선으로 고려하는 기획",
            "표준 규약을 따르기 위해 기존 레거시 시스템을 수정해야 한다면, 그 개발 비용이 도입 효과보다 크지 않은지 검토"
        ],
        faqs: [
            {
                question: "MCP와 Tool Calling의 차이점이 무엇인가요?",
                answerBlocks: [
                    { type: 'header', content: '① 한 줄 요약' },
                    { type: 'desc', content: '• Tool Calling: AI가 이 도구를 써도 될지 말지 결정하는 능력 (판단)\n• MCP: AI가 쓸 수 있는 도구들을 표준 방식으로 정리해 연결하는 약속 (연결 규격)' },
                    { type: 'header', content: '② Tool Calling은 무엇인가' },
                    { type: 'desc', content: 'Tool Calling은 AI가 대화 흐름 속에서 "지금은 도구를 써야 한다"고 판단하는 능력입니다.\n질문을 이해하고, 필요한 행동이 도구 사용이라고 판단하면 그 도구를 호출하겠다고 "선언"합니다.\n\n→ 핵심은 선택과 결정입니다.' },
                    { type: 'code', content: '# 사용자: "내일 서울 날씨 알려줘"\n\n# AI 내부 판단\n# • 이건 내 지식만으로는 부정확\n# • 최신 날씨 API 필요\n\n# AI 행동 (Tool Calling)\ncall weather_api(date=tomorrow, location=Seoul)\n\n# → 어떤 도구를 쓸지 고른 주체는 AI' },
                    { type: 'header', content: '③ MCP는 무엇인가' },
                    { type: 'desc', content: 'MCP는 AI가 사용할 수 있는 도구들을 일관된 방식으로 정의하고 연결하는 표준 인터페이스입니다.\n쉽게 말해 "AI야, 여기 도구들이 있는데 다 이 형식으로 써"라는 도구 설명서 규격입니다.\n\n각기 다른 회사나 시스템에 있는 도구라 해도 MCP를 쓰면 입력/출력/권한 형식이 통일됩니다.\n→ AI는 "사용법"을 다시 배울 필요가 없습니다.' },
                    { type: 'header', content: '④ 한눈에 비교하기' },
                    {
                        type: 'table',
                        content: {
                            headers: ['구분', 'Tool Calling', 'MCP'],
                            rows: [
                                ['역할', '도구 사용 결정', '도구 연결 규격'],
                                ['주체', 'AI', '시스템/플랫폼'],
                                ['질문', '"이 도구를 쓸까?"', '"이 도구를 어떻게 쓸까?"'],
                                ['위치', '실행 로직', '인프라/플랫폼'],
                                ['성격', '지능', '표준']
                            ]
                        }
                    },
                    { type: 'summary', content: 'Tool Calling 없이 MCP만 있으면 AI가 도구를 왜 써야 하는지 모르고,\nMCP 없이 Tool Calling만 있으면 도구마다 사용법이 달라 난장판이 됩니다.\n둘은 상호 보완적인 관계입니다.' }
                ]
            }
        ]
    },

    // 4. UX·운영 (UX/Ops) - 기초 단위부터 체감까지
    {
        id: "token",
        enTitle: "Token",
        koTitle: "토큰",
        mainTheme: "UX·운영",
        icon: "Hash",
        hoverText: "처리 단위",
        chipIcon: "Scissors",
        description: "AI가 글을 이해하고 답변을 만들 때 사용하는 기본 처리 단위",
        fullContent: `✂️ 문장을 AI가 처리하기 쉬운 작은 조각으로 분절\n\n🧠 분절된 토큰을 하나씩 처리하며 다음 단어를 예측\n\n📌 AI 모델의 지능과 비용이 결정되는 가장 작은 연산 기준\n\n⚠️ 언어별, 모델별로 토큰을 나누는 기준이 다름`,
        bullets: [
            "AI가 한 번에 처리할 수 있는 정보량은 토큰 개수로 제한됨",
            "긴 문서, 긴 대화가 필요한 기능인지 토큰 한계를 기준으로 검토해야 함",
            "토큰이 많아질수록 비용과 응답 시간이 함께 증가함",
            "답변 끊김, 기억 상실 같은 UX 문제는 토큰 한계에서 발생하는 경우가 많음",
            "서비스 사용자가 늘어날 경우 감당해야 할 '월간 토큰 비용'을 미리 시뮬레이션하고 예산 범위 설정"
        ],
        faqs: [
            {
                question: "토큰과 청크의 차이가 무엇인가요?",
                answerBlocks: [
                    { type: 'header', content: '① 먼저 한 줄 요약부터' },
                    { type: 'desc', content: '• 토큰: AI가 계산하려고 나눈 기계 단위\n• 청크: AI가 참고하려고 나눈 의미 단위\n\n토큰은 모델 안에서, 청크는 RAG·검색·설계에서 쓰입니다.' },
                    { type: 'header', content: '② 상세 정의 및 특징' },
                    { type: 'desc', content: '토큰은 AI가 문장을 수학적으로 처리하기 위해 쪼갠 최소 계산 단위입니다.\n• 사람이 정하지 않음\n• 모델이 내부적으로 자동 처리\n• 의미보다 계산 효율이 목적\n\n청크는 AI가 검색하고 참고하기 좋게 만든 의미 단위 정보 조각입니다.\n• 사람이 설계함\n• RAG, 벡터DB, 검색 정확도와 직결\n• 의미가 혼자서 완결돼야 함' },
                    { type: 'header', content: '③ 한눈에 비교하기' },
                    {
                        type: 'table',
                        content: {
                            headers: ['구분', '토큰', '청크'],
                            rows: [
                                ['목적', '계산', '의미 전달'],
                                ['기준', '모델 내부 규칙', '사람 판단'],
                                ['의미', '없음', '있음'],
                                ['설계 주체', '모델', '기획자'],
                                ['사용 위치', '모델 내부', 'RAG·검색'],
                                ['크기 기준', '자동', '정책/의미']
                            ]
                        }
                    },
                    { type: 'header', content: '④ 가장 중요한 오해 정리' },
                    { type: 'desc', content: '"청크를 잘게 쪼개면 토큰 아닌가요?"\n\n아닙니다.\n• 토큰: 계산 단위\n• 청크: 의미 단위\n\n아무리 작은 청크라도 의미가 있으면 청크입니다.' },
                    { type: 'summary', content: '1. 토큰은 직접 설계 대상은 아니지만 비용·속도에 영향을 줍니다.\n2. 청크는 RAG 성능을 좌우하므로 반드시 기획자가 기준을 정의해야 합니다.' }
                ]
            }
        ]
    },
    {
        id: "streaming",
        enTitle: "Streaming",
        koTitle: "스트리밍",
        mainTheme: "UX·운영",
        icon: "Zap",
        hoverText: "점진 출력",
        chipIcon: "Activity",
        description: "AI가 답변을 한 글자씩 실시간으로 보여주는 방식",
        fullContent: `⌨️ 글자가 한 번에 나오지 않고 만드는 즉시 출력\n\n🧠 AI가 실시간으로 생각하며 타이핑하는 듯한 경험 제공\n\n📌 실제 속도를 높이는 것이 아니라 '사용자의 대기 체감 시간'을 줄이는 전략\n\n⚡ 긴 답변이 예상될 때 필수적으로 고려해야 하는 UX 기번`,
        bullets: [
            "답변이 길거나 생성 시간이 긴 기능인지 판단",
            "사용자가 기다림을 불안하게 느낄 가능성이 있는지 검토",
            "중간에 끊겼을 때 어떻게 보여줄지 UX를 함께 설계",
            "기능 정확도와 무관하며 체감 속도 개선을 위한 출력 전략임을 명시",
            "답변 생성 중단 시 재시도, 이어쓰기, 실패 알림 등 구체적인 에러 대응 UX 정의"
        ],
        faqs: [
            {
                question: "랭체인이랑 개념이 비슷해 보이는데, 차이가 무엇인가요?",
                answerBlocks: [
                    { type: 'text', content: '겉으로 보면 스트리밍이랑 랭체인이 둘 다 "바로 안 나오고 뭔가 과정을 거치는 것"처럼 보여서 헷갈릴 수 있습니다.\n하지만 둘은 완전히 다른 층위의 개념이에요.' },
                    { type: 'header', content: '① 랭체인은 "실행 구조"이고, 스트리밍은 "출력 방식"입니다.' },
                    { type: 'desc', content: '안에서 어떻게 일하느냐(랭체인) vs 밖으로 어떻게 보이느냐(스트리밍)의 차이로 이해하시면 정확합니다.' },
                    { type: 'header', content: '② 스트리밍을 먼저 감각적으로 정리해 볼까요?' },
                    { type: 'desc', content: '맞습니다. "타자 치는 것처럼 쫘악 나오는 것", 그게 바로 스트리밍이에요.\n\nAI는 답을 다 만든 다음 한 번에 보내는 게 아니라, 토큰이 생성되는 즉시 조금씩 보낼 수 있습니다.\n이 과정 덕분에 사용자는 "지금 AI가 생각하며 문장을 늘려가고 있구나"라고 느끼게 되죠.' },
                    { type: 'header', content: '③ 스트리밍은 왜 쓰는 것일까요?' },
                    { type: 'desc', content: '사용자의 "체감 대기 시간"을 줄이기 위해서입니다.\n답변이 길 때 무작정 기다리는 것보다, 중간 내용이라도 먼저 보여주면 훨씬 빠르다고 느끼기 때문입니다.' },
                    {
                        type: 'table',
                        content: {
                            headers: ['구분', '랭체인', '스트리밍'],
                            rows: [
                                ['위치', '내부 실행 구조', '출력 방식'],
                                ['역할', '무엇을 어떤 순서로 할지', '언제 어떻게 보여줄지'],
                                ['목적', '기능 정확성', 'UX 체감 속도'],
                                ['사용자 체감', '거의 없음', '매우 큼']
                            ]
                        }
                    },
                    { type: 'summary', content: '중요한 건, 스트리밍은 실질적인 계산 속도를 높이는 게 아니라, \n이미 생성 중인 걸 실시간으로 노출하여 심리적 만족도를 높이는 장치라는 점입니다.' }
                ]
            },
            {
                question: "스트리밍을 켰을 때, 오히려 UX가 나빠지는 상황은 언제일까요?",
                answerBlocks: [
                    { type: 'text', content: '스트리밍은 “과정을 보여주는 게 결과 이해에 도움이 될 때만” UX가 좋아집니다.\n그 외에는 산만, 불안, 신뢰 하락으로 이어집니다.' },
                    { type: 'header', content: '① 답변이 짧고 단정해야 할 때' },
                    { type: 'desc', content: '예/아니오, 날짜, 숫자, 한 문장 결론만 필요할 때\n• 글자 하나씩 나오면 쓸데없이 길어 보입니다.\n• "왜 이걸 이렇게 질질 끌어?"라는 반응이 나옵니다.\n➡ 결론형 답변에는 스트리밍 금물' },
                    { type: 'header', content: '② 중간 내용이 "미완성 생각"일 때' },
                    { type: 'desc', content: 'AI가 가설을 세웠다가 수정하는 과정을 그대로 노출하면\n• "아까 말이랑 지금 말이 다른데?" 하며 혼란을 줍니다.\n➡ 사고 과정이 결과보다 더 눈에 띄면 UX 실패' },
                    { type: 'header', content: '③ 전문·정확성이 중요한 영역' },
                    { type: 'desc', content: '법률, 정책, 의료, 계약 등\n• 표현이 바뀌거나 문장이 덜 완성된 상태로 노출되면\n• "이거 믿어도 되는 거 맞아?" 하며 신뢰가 하락합니다.\n➡ 신뢰가 중요한 도메인에서는 완성본 제공이 더 안전' },
                    { type: 'header', content: '④ 중간에 멈춤이 잦을 때' },
                    { type: 'desc', content: '스트리밍은 "계속 나오고 있다"는 신호가 중요합니다.\n• 이유 없이 자주 멈추면 "멈춘 거야? 오류야?"라고 생각합니다.\n➡ 끊김 + 무설명 = 최악 UX' },
                    { type: 'header', content: '⑤ 사용자가 "과정"에 관심이 없을 때' },
                    { type: 'desc', content: '결과 복사, 바로 제출, 요약만 필요할 때\n• 스트리밍은 단순한 정보 소음일 뿐입니다.\n• "완성되면 알려줘"라는 반응이 나옵니다.\n➡ 속도보다 즉시성만 원하는 경우엔 OFF' },
                    { type: 'header', content: '⑥ Fallback 없이 스트리밍만 켰을 때' },
                    { type: 'desc', content: '갑자기 에러 발생으로 답변이 중단되었을 때\n• Fallback이 없으면 "그래서 된 거야, 안 된 거야?"라며 벙찌게 됩니다.\n➡ 스트리밍은 Fallback 없으면 위험' }
                ]
            }
        ]
    },
    {
        id: "fallback",
        enTitle: "Fallback",
        koTitle: "폴백",
        mainTheme: "UX·운영",
        icon: "ShieldAlert",
        hoverText: "차선책",
        chipIcon: "LifeBuoy",
        description: "AI가 정상적으로 답변하지 못하는 상황을 대비해 미리 설계해 둔 대체 사용자 경험",
        fullContent: `🚧 실패를 숨기지 않고\n🧭 사용자가 길을 잃지 않게 안내하는 장치\n\nAI가 틀릴 수 있다는 사실을\nUX로 솔직하게 인정하는 설계\n\nUX 예시\n• "지금 이 정보로는 정확한 답변이 어려워요"\n• "다음 중 하나를 선택해 주세요"\n• "요약 대신 원문을 보여드릴게요"`,
        bullets: [
            "\"AI가 실패하는 조건\"을 먼저 정의하고 UX를 설계",
            "실패 시 침묵 ❌ / 거짓 자신감 ❌ → 안내·대안 제공 ⭕",
            "운영 관점에서 장애 상황에서도 서비스가 멈추지 않게 설계",
            "Fallback은 에러 문구가 아니라 서비스 태도",
            "실패 유형별로 다른 Fallback 시나리오를 준비하여 사용자 혼란 최소화"
        ]
    },
    {
        id: "walkthrough",
        enTitle: "Walkthrough",
        koTitle: "워크쓰루",
        mainTheme: "UX·운영",
        icon: "Footprints",
        hoverText: "단계 안내",
        chipIcon: "ListOrdered",
        description: "어떤 주체가 특정 목표를 달성하기 위해 거친 과정을 단계별로 따라가며 보여주는 방식",
        fullContent: `👣 사용자 워크쓰루: 사용자가 서비스를 처음 쓰거나 헷갈릴 수 있는 순간에 “이렇게 하면 된다”를 실제 행동 순서대로 안내하는 UX\n\n🧠 에이전트 워크쓰루: AI 에이전트가 문제를 해결하기 위해 무슨 판단을 했고 어떤 도구를 사용했는지를 단계별로 다시 보여주는 기능`,
        bullets: [
            "워크쓰루라는 단어를 쓸 때 대상이 누구인지(사용자/에이전트) 반드시 명시",
            "사용자 워크쓰루는 첫 성공 경험을 만드는 데 집중",
            "에이전트 워크쓰루는 신뢰·운영·디버깅 목적",
            "두 워크쓰루는 UX에서도, 문서에서도 절대 혼용 금지",
            "복잡한 내부 로직은 사용자 이해 단위로 재구성하여 시각화"
        ]
    },
    {
        id: "sse",
        enTitle: "SSE",
        koTitle: "Server-Sent-Events",
        mainTheme: "UX·운영",
        icon: "Radio",
        hoverText: "실시간 전달",
        chipIcon: "Activity",
        description: "서버가 한 번 연결한 뒤 데이터를 조금씩 계속 보내는 방식",
        fullContent: `⌛ 다 끝난 뒤 한 번에 보내는 게 아니라\n✍️ 만들어지는 대로 바로 전달\n\n그래서 AI 답변이 타자 치듯 실시간으로 보이게 됨`,
        bullets: [
            "SSE는 처리 속도를 높이지 않음",
            "대신 기다림을 덜 지루하게 만듦",
            "길고 복잡한 AI 응답에 특히 효과적",
            "모든 화면에 쓰지 말고 UX 가치가 있는 곳에만 사용",
            "단방향 통신이므로 사용자의 도중 개입이 필요한 경우 웹소켓 등 대안 기술 검토"
        ],
        faqs: [
            {
                question: "SSE랑 스트리밍은 비슷해 보이는데, 뭐가 다른 것인가요?",
                answerBlocks: [
                    { type: 'text', content: '먼저 결론부터 말씀드리면, 스트리밍은 ‘보여주는 방식(UX)’이고 SSE는 ‘그걸 전달하는 방법(통신 기술)’입니다.\n\n스트리밍 = 무엇을 하느냐 (What)\nSSE = 어떻게 하느냐 (How)' },
                    { type: 'header', content: '① 아주 일상적인 비유로 시작하자' },
                    { type: 'desc', content: '영화로 비유해 볼까요?\n• 스트리밍: 영화를 다 다운받지 않아도 조금씩 보면서 즐기는 방식 (체험)\n• SSE: 그 영화 필름을 인터넷 선으로 끊어서 계속 보내주는 배송 방식 (전송)\n\n즉, 사용자는 "스트리밍"을 경험하고, 서버는 "SSE"로 배송하는 것입니다.' },
                    { type: 'header', content: '② AI 화면에서 벌어지는 일' },
                    { type: 'desc', content: '스트리밍 : 사용자 눈에 보이는 현상 그 자체\n• 답변이 한 번에 안 뜸\n• 글자가 타자 치듯 나옴\n• 중간에 멈췄다 이어짐\n→ 이 경험을 스트리밍이라고 부릅니다.\n\nSSE : 그 경험을 만들기 위해 뒤단에서 벌어지는 일\n• 서버가 "지금 만든 단어 먼저 보낼게!"라고 계속 신호를 쏘는 기술\n→ 사용자는 SSE를 직접 볼 수 없습니다. 결과인 스트리밍만 볼 뿐이죠.' },
                    { type: 'header', content: '③ 한눈에 비교하기' },
                    {
                        type: 'table',
                        content: {
                            headers: ['구분', '스트리밍', 'SSE'],
                            rows: [
                                ['정체', 'UX 개념', '통신 기술'],
                                ['관점', '사용자', '서버-클라이언트'],
                                ['의미', '조금씩 보여줌', '조금씩 보냄'],
                                ['눈에 보임', 'O', 'X'],
                                ['목적', '기다림 감소', '실시간 전달']
                            ]
                        }
                    },
                    { type: 'header', content: '④ 기획자가 알아야 할 포인트' },
                    { type: 'desc', content: 'SSE는 스트리밍을 구현하는 가장 단순하고 대중적인 방법일 뿐, 유일한 방법은 아닙니다.\n\n그래서 기획자는 이렇게 소통해야 합니다.\n• "사용자에게 생성 과정을 보여주고 싶어요" (스트리밍 UX 요청)\n• "구현은 가볍게 SSE로 가도 될 것 같아요" (기술 제안)' }
                ]
            }
        ]
    },
    {
        id: "websocket",
        enTitle: "WebSocket",
        koTitle: "웹소켓",
        mainTheme: "UX·운영",
        icon: "ArrowLeftRight",
        hoverText: "양방향 통신",
        chipIcon: "RefreshCw",
        description: "서버와 사용자 사이에 연결을 계속 유지하면서 서로 데이터를 자유롭게 주고받는 통신 방식",
        fullContent: `📞 실시간 대화처럼\n↔️ 요청과 응답이 즉시 오감\n\nSSE와 달리 서버뿐 아니라 사용자도 언제든 메시지를 보낼 수 있음`,
        bullets: [
            "웹소켓은 실시간 상호작용이 필요할 때만 사용",
            "단순 스트리밍에는 SSE가 더 적합",
            "웹소켓은 구현·운영 복잡도가 높음",
            "\"실시간처럼 보이는 UX\"와 \"실제 실시간 통신\"을 구분해서 판단",
            "서버 리소스 소모가 크므로 불필요한 연결 유지는 지양 (Heartbeat/Ping-Pong 관리 중요)"
        ],
        faqs: [
            {
                question: "웹소켓을 “굳이” 쓰는 진짜 이유가 무엇인가요?",
                answerBlocks: [
                    { type: 'text', content: 'AI 서비스에서 웹소켓이 꼭 필요한 순간은 명확합니다. 단순 답변 전송이 아니라, 상태와 제어가 중요할 때입니다.' },
                    { type: 'header', content: '① 답변 말고 “상태”를 실시간으로 주고받아야 할 때' },
                    { type: 'desc', content: 'AI 서비스에는 답변 텍스트 외에도 지금 처리 중인지, 몇 % 진행됐는지, 대기열 순번은 몇 번인지 같은 상태 정보가 계속 바뀝니다.\n이런 정보는 한 번 보내고 끝나는 것이 아니라 계속 변하기 때문에, 이를 실시간으로 동기화하려면 웹소켓이 훨씬 유리합니다.' },
                    { type: 'header', content: '② 답변을 즉시 “중단 / 취소”해야 할 때' },
                    { type: 'desc', content: '사용자가 질문을 잘못했거나 취소하고 싶을 때, 서버에 “지금 만드는 거 멈춰”라고 소리쳐야 합니다.\nSSE 구조는 듣는 것만 가능해서 새 요청을 따로 보내야 하지만, 웹소켓은 말할 수 있는 선이 연결되어 있어서 한 줄로 즉시 멈춤 신호를 보낼 수 있습니다.' },
                    { type: 'header', content: '③ 멀티 액션이 동시에 일어나는 화면' },
                    { type: 'desc', content: '한쪽 패널에서는 AI가 답변을 만들고, 다른 패널에서는 설정을 바꾸고, 로그창은 업데이트되는 복합 화면을 상상해 보세요.\n이건 단순한 질의응답이 아니라 실시간 앱 상태 동기화에 가깝습니다. 이때 웹소켓 하나만 열어두면 구조가 훨씬 단순해집니다.' },
                    { type: 'header', content: '④ 음성·실시간 인터랙션' },
                    { type: 'desc', content: '음성 AI는 내가 말하는 도중에 끼어들면 AI가 말을 멈춰야 합니다.\n이런 “듣고 말하고 멈추는” 티키타카는 턴제 방식 질의응답으로는 구현이 불가능하므로 양방향 통신이 필수입니다.' },
                    { type: 'header', content: '⑤ 여러 사용자가 같은 AI를 보고 있을 때' },
                    { type: 'desc', content: '협업 문서, 회의 요약, 공용 대시보드처럼 내 질문이나 행동이 다른 사람 화면에도 영향을 줘야 한다면,\n서버가 모두에게 정보를 뿌려주는 브로드캐스트가 필요하므로 웹소켓이 적합합니다.' },
                    { type: 'summary', content: '결국 “나 혼자 묻고 답만 받으면 된다”면 SSE로 충분하고, “상태를 공유하고 제어하고 협업해야 한다”면 웹소켓이 정답입니다.' }
                ]
            }
        ]
    }
];
