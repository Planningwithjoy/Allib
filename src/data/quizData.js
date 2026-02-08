export const OX_QUESTIONS = [
    {
        id: 1,
        category: "지식·이해",
        question: "AI가 학습한다는 것은 모델 내부의 파라미터 값이 최적으로 변경되는 과정을 말한다.",
        answer: true,
        explanation: "학습 데이터로부터 최적의 판단 기준을 찾아 숫자로 된 파라미터 값을 조정하는 것이 AI 학습의 본질이랍니다."
    },
    {
        id: 2,
        category: "지식·이해",
        question: "파라미터 수가 많은 초대형 모델은 어떤 작업에서든 항상 가장 효율적인 선택이다.",
        answer: false,
        explanation: "파라미터가 너무 많으면 응답 속도가 느려지고 비용이 많이 들 수 있어요. 작업 목적에 맞는 최적의 크기를 선택하는 것이 훨씬 더 효율적이죠."
    },
    {
        id: 3,
        category: "지식·이해",
        question: "임베딩 기술을 사용하면 표현은 달라도 뜻이 같은 문장을 AI가 동일하게 인식할 수 있다.",
        answer: true,
        explanation: "문장의 의미를 숫자로 바꾸어 거리를 계산하기 때문에, '배고파'와 '식사하고 싶어'처럼 뜻이 비슷한 말을 잘 이해할 수 있답니다."
    },
    {
        id: 4,
        category: "지식·이해",
        question: "청크(Chunk)는 문서를 나눌 때 의미와 상관없이 일정한 글자 수로만 나누는 것이 가장 좋다.",
        answer: false,
        explanation: "청크는 그 자체로 하나의 질문에 대답할 수 있는 의미 단위여야 해요. 단순히 글자 수로만 자르면 문맥이 깨져서 AI가 오답을 낼 확률이 높아지죠."
    },
    {
        id: 5,
        category: "지식·이해",
        question: "벡터 DB는 텍스트를 단순 저장하는 용도보다 의미적 유사성을 고속으로 탐색하기 위해 사용된다.",
        answer: true,
        explanation: "수만 개의 문서 중에서 질문과 가장 비슷한 뜻을 가진 정보를 빠르게 찾아내기 위한 특수한 지식 저장소랍니다."
    },
    {
        id: 6,
        category: "지식·이해",
        question: "AI 모델이 텍스트를 처리하는 기본 단위를 '토큰(Token)'이라고 하며, 이는 항상 단어 하나와 일치한다.",
        answer: false,
        explanation: "토큰은 단어보다 작은 조각일 수도 있고, 공백을 포함할 수도 있어요. 영어는 보통 단어 0.75개 정도의 크기랍니다."
    },
    {
        id: 7,
        category: "지식·이해",
        question: "모델에게 새로운 지식을 실시간으로 업데이트하려면 RAG보다 파인튜닝이 더 효과적이다.",
        answer: false,
        explanation: "파인튜닝은 AI의 말투나 성격을 길들이는 데 적합하고, 새로운 지식이나 자주 바뀌는 정보를 반영할 때는 RAG가 훨씬 유리하답니다."
    },
    {
        id: 8,
        category: "처리·실행",
        question: "에이전트 구조에서 루프(Loop)는 정보가 부족할 때 작업을 반복하여 정확도를 높이는 역할을 한다.",
        answer: true,
        explanation: "한 번에 해결되지 않는 복잡한 과업을 수행할 때, 결과가 만족스러울 때까지 과정을 반복하며 품질을 높이는 핵심적인 장치랍니다."
    },
    {
        id: 9,
        category: "처리·실행",
        question: "상태(State)는 AI가 작업을 수행하는 동안 현재 단계와 남은 목표를 기억하는 이정표 역할을 한다.",
        answer: true,
        explanation: "상태 정보가 있어야 AI가 길을 잃지 않고 '지금 내가 무엇을 했고 다음에는 무엇을 해야 할지' 정확히 판단할 수 있답니다."
    },
    {
        id: 10,
        category: "UX·운영",
        question: "스트리밍(Streaming)은 AI가 답변을 다 만든 뒤에 한 번에 보여주는 방식이다.",
        answer: false,
        explanation: "스트리밍은 AI가 답변을 생성하는 즉시 한 글자씩 실시간으로 보여주는 방식이에요. 덕분에 사용자는 기다리는 느낌을 덜 받게 되죠."
    },
    {
        id: 11,
        category: "처리·실행",
        question: "라우터(Router)는 질문의 의도를 분석해 가장 적절한 처리 경로로 안내하는 시스템의 교통 정리원이다.",
        answer: true,
        explanation: "질문의 쉬운지 어려운지에 따라 다른 모델을 쓰거나, 검색이 필요한지 아닌지를 판단해서 리소스를 아껴주는 역할을 하죠."
    },
    {
        id: 12,
        category: "처리·실행",
        question: "아웃파서(Output Parser)는 AI의 답변 형식을 JSON이나 마크다운 등 시스템이 이해하기 좋은 데이터로 변환한다.",
        answer: true,
        explanation: "AI의 서술형 답변을 서비스 시스템과 연동하기 위해 정해진 형식에 맞춰 예쁘게 깎아주는 정제 단계라고 보시면 된답니다."
    },
    {
        id: 13,
        category: "지식·이해",
        question: "리랭킹(Reranking)은 검색된 결과들을 다시 분석해 질문에 가장 적합한 순서로 재정렬하는 품질 최적화 단계다.",
        answer: true,
        explanation: "1차로 가져온 자료들 중에서 질문과 정말로 관련이 깊은 것을 제일 위로 올려서 AI가 더 정확한 답을 하게 도와주죠."
    },
    {
        id: 14,
        category: "지식·이해",
        question: "멀티모달 AI는 텍스트만 처리할 수 있으며 이미지나 음성 등의 데이터는 동시에 다루지 못한다.",
        answer: false,
        explanation: "멀티모달은 텍스트는 물론 이미지, 음성, 영상 등 여러 형태의 정보를 한꺼번에 받아들여서 하나의 통합된 판단을 내릴 수 있는 기술이에요."
    },
    {
        id: 15,
        category: "처리·실행",
        question: "랭체인(LangChain)은 AI의 복잡한 행동 순서와 도구 사용 흐름을 연결하고 설계하는 프레임워크다.",
        answer: true,
        explanation: "AI가 단순히 말만 하는 게 아니라 검색도 하고 파일도 읽는 등 다양한 행동을 순서대로 할 수 있게 해주는 뼈대 같은 역할이죠."
    },
    {
        id: 16,
        category: "지식·이해",
        question: "과적합(Overfitting)은 AI가 데이터의 규칙을 이해하지 못하고 특정 정답 사례만을 그대로 외워버린 상태다.",
        answer: true,
        explanation: "문제를 외워버리면 연습 문제에서는 백 점을 맞지만, 실전에서 만나는 조금만 다른 질문에는 엉뚱한 대답을 내놓게 된답니다."
    },
    {
        id: 17,
        category: "지식·이해",
        question: "컨텍스트(Context) 정보는 AI 호출이 한 번 끝나더라도 서버 데이터베이스에 영구적으로 남게 된다.",
        answer: false,
        explanation: "컨텍스트는 AI가 답변을 만들기 위해 보고 있는 '입력 묶음'이라서, 답변이 끝난 뒤 따로 저장하지 않으면 사라지는 일회성 정보예요."
    },
    {
        id: 18,
        category: "지식·이해",
        question: "스니펫(Snippet)은 방대한 문서 중에서 질문의 핵심과 가장 맞닿아 있는 부분만 발췌한 최소 참고 조각이다.",
        answer: true,
        explanation: "필요한 부분만 딱 잘라 보여주기 때문에 답변의 정확도를 높이고 속도도 빠르게 만들어주는 영리한 참고 방식이죠."
    },
    {
        id: 19,
        category: "지식·이해",
        question: "리트리버(Retriever)는 질문과 관련 있는 자료를 방대한 저장소에서 찾아서 AI에게 전달하는 역할을 한다.",
        answer: true,
        explanation: "'수색 담당' 부품이라고 생각하시면 돼요. AI가 답변하기 전에 필요한 지식을 쏙쏙 골라내어 전달해주는 관문 같은 기술이죠."
    },
    {
        id: 20,
        category: "처리·실행",
        question: "랭그래프(LangGraph)는 직선적인 순차 실행보다는 복잡한 반복(Loop)이나 상태 중심의 흐름을 설계하는 데 유리하다.",
        answer: true,
        explanation: "상황에 따라 이전으로 가거나 길을 선택해야 하는 복합적인 에이전트 구조를 짤 때 아주 강력한 힘을 발휘한답니다."
    },
    {
        id: 21,
        category: "UX·운영",
        question: "사용자 워크쓰루와 에이전트 워크쓰루는 대상만 다를 뿐 목적은 동일하므로 문서를 작성할 때 혼용해서 사용해도 무방하다.",
        answer: false,
        explanation: "사용자 워크쓰루는 '성공 경험'이 목적이고, 에이전트 워크쓰루는 '신뢰와 디버깅'이 목적이에요. 대상과 목적이 모두 다르므로 절대 혼용하면 안 된답니다."
    },
    {
        id: 22,
        category: "UX·운영",
        question: "SSE 기술을 사용하면 실제 AI 모델의 답변 생성 속도가 빨라진다.",
        answer: false,
        explanation: "SSE는 속도를 높이는 게 아니라, 만들어지는 대로 즉시 보여줘서 지루함을 덜어주는 '체감 속도' 개선 기술이에요."
    },
    {
        id: 23,
        category: "UX·운영",
        question: "'스트리밍'과 'SSE'는 동일한 개념이므로 기획서에서 구분 없이 사용해도 개발자가 알아서 이해한다.",
        answer: false,
        explanation: "스트리밍은 '보여주는 방식(UX)'이고, SSE는 그걸 구현하는 '통신 기술'이에요. 기획서에서는 '보여주고 싶은 경험'과 '구현 기술'을 명확히 구분해서 적어야 한답니다."
    },
    {
        id: 24,
        category: "UX·운영",
        question: "스트리밍은 사용자가 대기하는 지루함을 줄여주므로, '예/아니오' 같은 짧은 답변이나 정확성이 중요한 법률 답변 등 모든 상황에 적용하는 것이 좋다.",
        answer: false,
        explanation: "답변이 짧거나(예/아니오), 중간 과정 노출이 신뢰를 떨어뜨리는 경우(법률/의료)에는 스트리밍이 오히려 방해가 됩니다."
    },
    {
        id: 25,
        category: "UX·운영",
        question: "AI 답변을 단순히 실시간으로 보여주기만 하면 되는 상황에서도, 양방향 통신이 가능한 웹소켓(WebSocket)을 사용하는 것이 무조건 좋다.",
        answer: false,
        explanation: "단순히 서버에서 데이터를 받기만 하면 되는 경우(스트리밍)는 SSE가 훨씬 가볍고 효율적이에요. 웹소켓은 채팅처럼 '서로' 주고받아야 할 때 쓰는 게 적합합니다."
    },
    {
        id: 26,
        category: "UX·운영",
        question: "웹소켓을 도입하기만 하면, 별도의 설계 없이도 AI가 사용자의 발언을 인식하여 답변 생성을 자동으로 중단한다.",
        answer: false,
        explanation: "웹소켓은 '말을 걸 수 있는 통로'일 뿐이에요. AI가 말을 듣고 멈추게 하려면 별도의 '중단 로직'을 설계해야 합니다."
    },
    {
        id: 27,
        category: "UX·운영",
        question: "사용자가 답변 생성을 취소(Stop)했을 때, 이를 서버에 즉각적으로 전달하여 리소스를 아끼는 용도로 웹소켓이 활용될 수 있다.",
        answer: true,
        explanation: "맞아요! SSE는 듣기만 가능해서 별도 요청을 보내야 하지만, 웹소켓은 연결된 선으로 '멈춰!' 신호를 쏘면 서버가 즉시 알아들을 수 있답니다."
    },
    {
        id: 28,
        category: "UX·운영",
        question: "여러 사용자가 같은 AI 화면을 공유하며 협업하는 서비스에서는 단방향인 SSE보다 웹소켓이 더 유리하다.",
        answer: true,
        explanation: "SSE는 혼자 받는 것에는 좋지만, 내 행동을 다른 사람에게도 알려주는(브로드캐스트) 협업 기능에는 양방향 통신인 웹소켓이 필수적이에요."
    },
    {
        id: 29,
        category: "UX·운영",
        question: "CoT(생각의 사슬) 과정을 사용자에게 모두 보여주는 것은 AI의 투명성을 높이기 위해 권장되는 원칙이다.",
        answer: false,
        explanation: "CoT는 AI가 더 똑똑한 답을 내기 위한 '속생각' 과정이에요. 사용자에게는 너무 복잡할 수 있어서, 보통은 결론과 정리된 이유만 보여주는 게 좋답니다."
    },
    {
        id: 30,
        category: "UX·운영",
        question: "AI의 '생각(CoT)'과 '행동(Walkthrough)'은 투명성을 위해 모두 사용자에게 그대로 노출하는 것이 좋다.",
        answer: false,
        explanation: "행동(도구 사용 등)은 신뢰를 위해 보여줘도 좋지만, 날것의 생각(CoT)은 혼란을 줄 수 있어 숨기는 게 일반적이에요. '결과'와 '행동'만 보여주세요!"
    },
    {
        id: 31,
        category: "지식·이해",
        question: "온톨로지는 초기에 최대한 상세하고 복잡하게 모든 예외 케이스를 정의해야 나중에 수정할 일이 없다.",
        answer: false,
        explanation: "초기에 너무 세밀하면 운영이 어려워져요. 핵심 개념부터 잡고 점진적으로 확장하는 것이 좋습니다."
    },
    {
        id: 32,
        category: "지식·이해",
        question: "시멘틱 레이어는 데이터베이스의 물리적 구조를 사용자에게 그대로 보여주기 위한 투명성 도구이다.",
        answer: false,
        explanation: "시멘틱 레이어는 복잡한 데이터 구조를 '사용자의 언어(의미)'로 번역해 주는 중간 번역기 역할이에요. 있는 그대로 보여주는 게 아니랍니다."
    },
    {
        id: 33,
        category: "연결·확장",
        question: "Elastic Search는 AI 모델처럼 문서의 의미를 깊게 이해하고 추론하여 정답을 생성하는 도구이다.",
        answer: false,
        explanation: "Elastic Search는 '검색'을 엄청 빠르게 잘하는 도구이지, AI처럼 내용을 이해하거나 생성하는 도구가 아니에요. 찾는 건 얘가 하고, 읽는 건 AI가 합니다."
    },
    {
        id: 34,
        category: "처리·실행",
        question: "GraphRAG는 모든 RAG 시스템에서 Vector Search보다 훌륭한 성능을 내므로 무조건 도입하는 것이 좋다.",
        answer: false,
        explanation: "GraphRAG는 비용이 비싸고 구축이 어려워요. 단순 질문은 Vector Search가 훨씬 빠르고 싸답니다. 관계가 복잡할 때만 쓰세요!"
    },
    {
        id: 35,
        category: "처리·실행",
        question: "답이 하나의 문서 안에 명확히 있는 단순 정보 검색 질문(예: '환불 규정 알려줘')에는 GraphRAG가 일반 RAG보다 훨씬 효율적이다.",
        answer: false,
        explanation: "답이 한 문서에 있으면 일반 RAG(벡터 검색)가 훨씬 싸고 빠르고 정확해요. GraphRAG는 여러 문서를 연결해서 추론해야 할 때 쓰는 '고비용' 도구입니다."
    },
    {
        id: 36,
        category: "연결·확장",
        question: "Elastic Search가 있으면 Retriever는 필요 없다.",
        answer: false,
        explanation: "Elastic Search는 '검색 엔진(도구)'이고, Retriever는 '어떻게 검색할지 결정하는 전략(두뇌)'이에요. 도구가 있어도 사용법을 아는 두뇌가 필요하겠죠?"
    }
];

export const SHORT_QUESTIONS = [
    {
        id: 1,
        category: "지식·이해",
        question: "텍스트나 이미지 등의 데이터를 AI가 이해할 수 있도록 숫자 형태(벡터)로 변환하는 기술은 무엇일까요?",
        answer: "Embedding(임베딩)",
        acceptedAnswers: ["임베딩", "embedding", "embeding", "임배딩"],
        explanation: "컴퓨터는 글자를 숫자로 바꿔야 이해할 수 있어요. 단어의 의미를 좌표 공간상의 위치(벡터)로 바꾸는 것을 '임베딩(Embedding)'이라고 합니다."
    },
    {
        id: 2,
        category: "UX·운영",
        question: "LLM이 텍스트를 이해하고 생성할 때 사용하는 가장 기본적인 데이터 처리 단위는 무엇일까요?",
        answer: "Token(토큰)",
        acceptedAnswers: ["토큰", "token", "tokens"],
        explanation: "AI는 문장을 통째로 읽는 게 아니라, '토큰(Token)'이라는 작은 조각으로 쪼개서 처리해요. 사용료도 이 토큰 수를 기준으로 계산되곤 하죠."
    },
    {
        id: 3,
        category: "지식·이해",
        question: "LLM이 외부 데이터(문서, 지식베이스)를 참고하여 답변의 정확도를 높이는 기술의 약자는 무엇일까요?",
        answer: "RAG(검색 증강 생성)",
        acceptedAnswers: ["rag", "검색 증강 생성", "retrieval augmented generation", "retrieval-augmented generation"],
        explanation: "검색 증강 생성(Retrieval-Augmented Generation)의 약자로, AI의 오픈북 시험과 같아요. 필요한 정보를 먼저 찾고(Retrieval) 그 내용을 바탕으로 답을 생성(Generation)하는 기술이죠."
    },
    {
        id: 4,
        category: "지식·이해",
        question: "인간의 뇌 신경망을 모방하여 만든 기계 학습 모델의 핵심 구성 요소로 숫자로 이루어진 설정값을 무엇이라고 할까요?",
        answer: "Parameter(파라미터)",
        acceptedAnswers: ["파라미터", "parameter", "parameters", "매개변수"],
        explanation: "파라미터(매개변수)는 AI 모델 내부의 설정값들이에요. 학습을 통해 이 값들이 조정되면서 AI가 똑똑해지는 것이죠."
    },
    {
        id: 5,
        category: "지식·이해",
        question: "문서나 코드 전체가 아니라, 질문에 답하기 위해 필요한 부분만 발췌한 최소 참고 조각을 무엇이라고 할까요?",
        answer: "Snippet(스니펫)",
        acceptedAnswers: ["스니펫", "snippet", "snippets"],
        explanation: "청크가 '저장된 재료'라면, 스니펫은 사용자에게 보여주기 위해 그중에서 딱 필요한 부분만 잘라낸 '결과물'이에요."
    },
    {
        id: 6,
        category: "지식·이해",
        question: "긴 문서를 AI가 처리하기 좋게 의미 단위의 작은 조각으로 나누는 과정을 무엇이라고 할까요?",
        answer: "Chunking(청킹)",
        acceptedAnswers: ["청크", "청킹", "chunk", "chunking", "chunks"],
        explanation: "너무 긴 글은 한 번에 이해하기 어려워요. AI가 이해하기 쉬운 크기(Chunk)로 문서를 자르는 과정을 '청킹(Chunking)'이라고 합니다."
    },
    {
        id: 7,
        category: "지식·이해",
        question: "텍스트뿐만 아니라 이미지, 오디오, 비디오 등 다양한 형태의 데이터를 동시에 처리할 수 있는 AI 모델을 무엇이라고 할까요?",
        answer: "Multimodal(멀티모달)",
        acceptedAnswers: ["멀티모달", "multimodal", "multi-modal"],
        explanation: "Multi(여러 가지) + Modal(양식)의 합성어예요. 눈(이미지)과 귀(소리)를 모두 사용하여 세상을 이해하는 AI를 말하죠."
    },
    {
        id: 8,
        category: "처리·실행",
        question: "AI가 작업을 수행하는 동안 현재 목표가 무엇이고 어디까지 진행되었는지를 나타내는 정보를 무엇이라고 할까요?",
        answer: "State(상태)",
        acceptedAnswers: ["상태", "state", "스테이트"],
        explanation: "AI가 길을 잃지 않으려면 '지금 내가 뭘 하고 있지?'를 아는 게 중요해요. 그 현재 상황을 담고 있는 정보를 'State'라고 합니다."
    },
    {
        id: 9,
        category: "지식·이해",
        question: "사전에 학습된 거대 모델을 특정 도메인이나 목적에 맞게 추가로 학습시켜 미세 조정하는 기법은?",
        answer: "Fine-tuning(파인튜닝)",
        acceptedAnswers: ["파인튜닝", "fine-tuning", "finetuning", "fine tuning"],
        explanation: "이미 똑똑한 AI 모델에게 우리 회사의 말투나 전문 지식을 가르쳐서 '맞춤형 인재'로 만드는 과정을 '파인튜닝(Fine-tuning)'이라고 해요."
    },
    {
        id: 10,
        category: "지식·이해",
        question: "AI가 대화를 이해하기 위해 필요한 배경 정보나 이전 대화의 맥락을 무엇이라고 할까요?",
        answer: "Context(컨텍스트)",
        acceptedAnswers: ["컨텍스트", "context", "맥락"],
        explanation: "'어제 뭐 먹었어?'라고 물으려면 '누구랑?', '언제?' 같은 배경 지식(Context)이 있어야 말이 통하겠죠? AI도 마찬가지랍니다."
    },
    {
        id: 11,
        category: "연결·확장",
        question: "AI 모델이 외부의 도구(Tool)나 시스템과 표준화된 방식으로 연결되어 상호작용할 수 있게 해주는 프로토콜은? (영어 약자)",
        answer: "MCP(Model Context Protocol)",
        acceptedAnswers: ["mcp", "model context protocol"],
        explanation: "Model Context Protocol의 약자로, AI가 다양한 앱이나 데이터에 안전하고 쉽게 접속할 수 있게 해주는 '만능 열쇠' 같은 표준 규약이에요."
    },
    {
        id: 12,
        category: "지식·이해",
        question: "검색된 문서들의 관련성을 다시 평가하여 순서를 재조정함으로써 정확도를 높이는 과정을 무엇이라고 할까요?",
        answer: "Reranking(리랭킹)",
        acceptedAnswers: ["리랭킹", "reranking", "re-ranking"],
        explanation: "1차로 찾은 자료들을 꼼꼼히 다시 읽어보고, 진짜 중요한 순서대로 줄 세우기를 다시 하는 과정(Reranking)이에요."
    },
    {
        id: 13,
        category: "처리·실행",
        question: "사용자의 질문을 분석하여 단순 답변, 검색, 도구 사용 등 가장 적절한 처리 경로로 안내하는 역할을 하는 것은?",
        answer: "Router(라우터)",
        acceptedAnswers: ["라우터", "router", "routing"],
        explanation: "문의 전화를 받으면 적절한 부서로 연결해주는 교환원처럼, 질문을 알맞은 AI 처리 경로로 보내주는 시스템을 '라우터'라고 해요."
    },
    {
        id: 14,
        category: "처리·실행",
        question: "AI의 작업 과정을 '순서'가 아닌 '상태(State)'와 '연결'로 표현하여 복잡한 흐름을 설계하는 방식을 무엇이라고 할까요?",
        answer: "LangGraph(랭그래프)",
        acceptedAnswers: ["랭그래프", "langgraph", "lang graph"],
        explanation: "순서대로만 가는 게 아니라, 상황에 따라 자유롭게 움직일 수 있도록 '지도'를 그려주는 방식이에요. 복잡한 에이전트를 만들 때 필수적이죠."
    },
    {
        id: 15,
        category: "지식·이해",
        question: "데이터의 특징을 숫자로 변환(임베딩)하여 저장하고, 의미적 유사성을 기반으로 검색할 수 있게 해주는 DB는?",
        answer: "Vector DB(벡터DB)",
        acceptedAnswers: ["벡터db", "벡터 db", "vector db", "vector database", "vectordb", "벡터디비"],
        explanation: "일반적인 DB가 텍스트를 저장한다면, 벡터 DB는 의미(좌표)를 저장해요. 그래서 '왕 - 남자 + 여자 = 여왕' 같은 의미 연산과 검색이 가능하죠."
    },
    {
        id: 16,
        category: "처리·실행",
        question: "AI의 답변을 JSON 등 프로그램이 이해하기 쉬운 구조화된 형태로 변환해주는 도구를 무엇이라고 할까요?",
        answer: "Output Parser(아웃파서)",
        acceptedAnswers: ["아웃파서", "파서", "output parser", "parser", "outputparser"],
        explanation: "AI가 줄글로 답변하면 프로그램이 쓰기 힘들어요. 이를 표나 데이터 형식으로 깔끔하게 정리(Parsing)해주는 도구가 필요하죠."
    },
    {
        id: 17,
        category: "지식·이해",
        question: "AI 모델이 학습 데이터에 없는 새로운 상황에는 대처하지 못하고, 학습 데이터만 달달 외워버린 상태를 무엇이라 할까요?",
        answer: "Overfitting(과적합)",
        acceptedAnswers: ["과적합", "overfitting", "오버피팅"],
        explanation: "공부는 안 하고 기출문제 답만 외운 학생과 같아요. 응용력이 없어서 실전에서는 틀리기 쉽죠. 이를 'Overfitting'이라고 합니다."
    },
    {
        id: 18,
        category: "연결·확장",
        question: "AI가 스스로 판단하여 검색이나 계산기 같은 외부 기능을 사용하겠다고 시스템에 요청하는 행위를 무엇이라고 할까요?",
        answer: "Tool Calling(도구실행)",
        acceptedAnswers: ["도구실행", "도구 실행", "tool calling", "tool call", "툴콜링", "툴 콜링"],
        explanation: "AI가 '이건 내가 모르는 거네, 검색해봐야겠다!' 하고 시스템에게 '검색 도구 써줘'라고 요청하는 거예요. AI에게 손발을 달아주는 셈이죠."
    },
    {
        id: 19,
        category: "처리·실행",
        question: "결과가 불충분할 때, 만족스러운 결과가 나올 때까지 같은 작업을 반복해서 수행하는 구조를 무엇이라고 할까요?",
        answer: "Loop(루프)",
        acceptedAnswers: ["루프", "loop", "반복"],
        explanation: "한 번에 안 되면 될 때까지! 원하는 결과가 나올 때까지 과정을 뱅글뱅글 돌며 다시 시도하는 구조를 말해요."
    },
    {
        id: 20,
        category: "처리·실행",
        question: "복잡한 작업을 수행하기 위해 계획 수립, 도구 사용, 기억 관리 등을 스스로 수행하는 자율적인 AI 시스템을 무엇이라고 할까요?",
        answer: "Agent(에이전트)",
        acceptedAnswers: ["에이전트", "agent", "ai agent", "ai 에이전트"],
        explanation: "시키지 않아도 스스로 목표를 달성하기 위해 생각하고 행동하는 AI를 '에이전트(Agent)'라고 불러요. AI의 최종 진화 형태라고도 하죠."
    },
    {
        id: 21,
        category: "연결·확장",
        question: "서로 다른 프로그램이 정해진 방식으로 기능을 요청하고 결과를 주고받는 공식 통로(인터페이스)의 영어 약자는?",
        answer: "API(애플리케이션 프로그래밍 인터페이스)",
        acceptedAnswers: ["api", "application programming interface", "에이피아이"],
        explanation: "내부 구조를 몰라도 문을 열고 들어가듯이 정해진 약속(Interface)대로 요청하면 기능을 수행해주는 접점이에요."
    },
    {
        id: 22,
        category: "지식·이해",
        question: "소스 코드를 AI가 검색하고 이해할 수 있도록 의미 단위로 분해하여 색인해 두는 기술은?",
        answer: "Codebase Indexing(코드 색인)",
        acceptedAnswers: ["코드 색인", "codebase indexing", "code indexing", "코드 인덱싱", "코드인덱싱"],
        explanation: "코드를 통째로 외우는 게 아니라, 필요할 때 찾아볼 수 있도록 의미 단위로 정리(Indexing)해두는 기술이에요."
    },
    {
        id: 23,
        category: "지식·이해",
        question: "사용자의 질문과 가장 관련 있는 문서를 방대한 데이터베이스에서 찾아오는 역할을 무엇이라고 할까요?",
        answer: "Retriever(리트리버)",
        acceptedAnswers: ["리트리버", "retriever", "검색기"],
        explanation: "RAG 시스템에서 '수색'을 담당하는 부품이에요. 질문에 딱 맞는 지식을 찾아와서 AI에게 전달해 주죠."
    },
    {
        id: 24,
        category: "처리·실행",
        question: "AI의 행동 순서와 도구 사용 흐름을 연결(Chain)하여 설계하는 대표적인 프레임워크는?",
        answer: "LangChain(랭체인)",
        acceptedAnswers: ["랭체인", "langchain", "lang chain"],
        explanation: "요리 레시피처럼 AI가 어떤 순서로 재료를 찾고 요리할지를 정해주는 '실행 구조' 프레임워크랍니다."
    },
    {
        id: 25,
        category: "처리·실행",
        question: "AI 워크플로우에서 실제 작업을 수행하는 하나의 처리 단위를 무엇이라고 할까요? (연결선인 Edge와 대비되는 개념)",
        answer: "Node(노드)",
        acceptedAnswers: ["노드", "node", "nodes"],
        explanation: "워크플로우가 지도라면, Node는 우리가 들러서 일을 처리해야 하는 '목적지'나 '경유지' 같은 작업 단위예요."
    },
    {
        id: 26,
        category: "처리·실행",
        question: "Node 실행 후, 결과나 상태(State) 값에 따라 다음 경로를 다르게 선택하는 분기를 무엇이라고 할까요?",
        answer: "Conditional Edge(조건 분기)",
        acceptedAnswers: ["조건 분기", "conditional edge", "조건부 엣지", "conditionaledge"],
        explanation: "'점수가 낮으면 재시험', '높으면 통과'처럼 상황에 따라 다른 길로 가게 만드는 똑똑한 연결선이에요."
    },
    {
        id: 27,
        category: "UX·운영",
        question: "AI가 답변을 다 만든 뒤에 보여주는 것이 아니라, 생성되는 즉시 실시간으로 보여주는 방식을 무엇이라고 할까요?",
        answer: "Streaming(스트리밍)",
        acceptedAnswers: ["스트리밍", "streaming", "stream"],
        explanation: "답변이 길어질 때 사용자가 지루하지 않게, 타자 치듯 글자가 나오는 대로 바로 보여주는 방식이죠."
    },
    {
        id: 28,
        category: "UX·운영",
        question: "AI가 답변을 실패하거나 모를 때를 대비해, 사용자를 위해 미리 준비해 둔 대체 응답 시나리오를 무엇이라고 할까요?",
        answer: "Fallback(폴백)",
        acceptedAnswers: ["폴백", "fallback", "fall-back", "대체", "대안"],
        explanation: "길이 막혔을 때를 대비한 '비상 도로' 같은 거예요. 에러 화면 대신 친절한 안내나 다른 선택지를 제공하는 것이죠."
    },
    {
        id: 29,
        category: "UX·운영",
        question: "사용자가 서비스를 처음 쓰거나 헷갈릴 때, 올바른 순서대로 행동을 안내하여 첫 성공 경험을 돕는 UX 장치를 무엇이라고 할까요?",
        answer: "Walkthrough(워크쓰루)",
        acceptedAnswers: ["워크쓰루", "walkthrough", "walk through"],
        explanation: "마치 옆에서 가이드가 걸어가며(Walk through) 하나씩 알려주는 것처럼, 단계별로 친절하게 안내해 주는 방식을 말해요."
    },
    {
        id: 30,
        category: "UX·운영",
        question: "서버가 클라이언트에게 연결을 유지한 채 데이터를 실시간으로 조금씩 보내주는 기술로, AI 스트리밍 답변의 기반이 되는 이것은?",
        answer: "SSE(Server-Sent Events)",
        acceptedAnswers: ["sse", "server-sent events", "server sent events"],
        explanation: "한 번 연결하면 서버가 계속 말을 걸 수 있는 방식(Server-Sent)이라서, AI가 한 글자씩 보내주는 스트리밍 구현에 딱이랍니다."
    },
    {
        id: 31,
        category: "UX·운영",
        question: "서버와 클라이언트가 한 번 연결된 상태에서, 마치 전화 통화하듯 양쪽에서 자유롭게 데이터를 주고받을 수 있는 양방향 통신 기술은?",
        answer: "WebSocket(웹소켓)",
        acceptedAnswers: ["웹소켓", "websocket", "web socket"],
        explanation: "전화기처럼 양쪽에서 언제든지 말을 할 수 있는 기술이에요. 채팅이나 실시간 게임처럼 주고받는 게 많을 때 쓰죠."
    },
    {
        id: 32,
        category: "처리·실행",
        question: "복잡한 문제를 해결하기 위해 AI가 내부적으로 단계별 추론 과정을 거치며 '속생각'을 하는 기법은 무엇일까요?",
        answer: "CoT(Chain of Thought)",
        acceptedAnswers: ["cot", "chain of thought", "생각의 사슬", "연쇄 추론"],
        explanation: "사람도 어려운 문제를 풀 때 혼잣말을 하며 단계를 밟아가죠? AI도 '단계별로 생각'하게 시키면 훨씬 더 똑똑한 대답을 내놓는답니다."
    },
    {
        id: 33,
        category: "지식·이해",
        question: "정보 시스템의 대상이 되는 자원(단어, 개념)과 그들 간의 관계를 정의하여, AI가 의미론적으로 이해할 수 있게 만든 '개념 지도'는?",
        answer: "Ontology(온톨로지)",
        acceptedAnswers: ["온톨로지", "ontology"],
        explanation: "단어의 단순 나열이 아니라, '이것과 저것은 어떤 관계인가'를 정의해 둔 구조도예요. AI에게 세상을 가르쳐주는 지도와 같죠."
    },
    {
        id: 34,
        category: "지식·이해",
        question: "사용자의 '일상 언어'와 시스템의 '데이터 언어' 사이에서 의미를 연결하고 번역해 주는 중간 계층은?",
        answer: "Semantic Layer(시멘틱 레이어)",
        acceptedAnswers: ["시멘틱 레이어", "semantic layer", "semanticlayer"],
        explanation: "데이터베이스가 아무리 복잡해도 사용자가 '내 주문 내역 보여줘'라고 말하면 찰떡같이 알아듣게 해주는 통역사 같은 존재랍니다."
    },
    {
        id: 35,
        category: "연결·확장",
        question: "문서나 데이터를 미리 저장해 두고, AI가 필요로 할 때 관련 정보를 매우 빠르게 찾아주는 '검색 허브' 시스템은?",
        answer: "Elastic Search(엘라스틱 서치)",
        acceptedAnswers: ["엘라스틱서치", "엘라스틱 서치", "elasticsearch", "elastic search"],
        explanation: "도서관의 사서처럼 책(데이터)을 엄청 잘 정리해 두고, AI가 '이런 내용 찾아줘' 하면 0.1초 만에 가져다주는 역할을 해요."
    },
    {
        id: 36,
        category: "처리·실행",
        question: "단순 텍스트 검색이 아니라, 개념(Node)과 관계(Edge)의 연결 고리를 따라가며 지식을 찾아내는 RAG 방식은?",
        answer: "GraphRAG(그래프 RAG)",
        acceptedAnswers: ["graphrag", "그래프rag", "graph rag", "그래프 랙", "그래프 rag"],
        explanation: "꼬리에 꼬리를 무는 질문처럼, 'A랑 연관된 B, B랑 연관된 C'를 따라가며 흩어진 단서를 모으는 탐정 같은 방식이에요."
    },
    {
        id: 37,
        category: "처리·실행",
        question: "질문에 대한 답이 하나의 문서에 있지 않고, 여러 지식 간의 '연관계'를 파악해야만 알 수 있을 때 가장 강력한 검색 기술은?",
        answer: "GraphRAG(그래프 RAG)",
        acceptedAnswers: ["graphrag", "그래프rag", "graph rag", "그래프 rag"],
        explanation: "단편적인 지식 검색이 아니라, '이것과 저것이 어떻게 연결되는지' 맥락을 파악해야 할 때 진가를 발휘하는 기술이에요."
    },
    {
        id: 38,
        category: "연결·확장",
        question: "사용자의 질문을 분석하여 '어떤 문서가 필요한지', '어떤 검색 방식을 쓸지'를 결정하고 가져오는 RAG의 두뇌 역할은?",
        answer: "Retriever(리트리버)",
        acceptedAnswers: ["retriever", "리트리버", "검색기"],
        explanation: "Elastic Search가 '도서관'이라면, Retriever는 책을 찾아주는 '사서'예요. 질문의 의도를 파악하고 적절한 문서를 찾아오는 역할을 하죠."
    }
];
