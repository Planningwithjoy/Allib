import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, X, Check, Timer as ClockIcon, RotateCcw, Circle } from 'lucide-react';
import { OX_QUESTIONS, SHORT_QUESTIONS } from '../data/quizData';
import './OXQuiz.css';
import './ShortQuiz.css';

const RandomQuiz = () => {
    const navigate = useNavigate();
    const inputRef = useRef(null);

    // 상태 관리
    const [questions, setQuestions] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [timeLeft, setTimeLeft] = useState(10);
    const [isFinished, setIsFinished] = useState(false);
    const [userAnswers, setUserAnswers] = useState([]);
    const [score, setScore] = useState(0);
    const [showImmediateFeedback, setShowImmediateFeedback] = useState(false);
    const [lastFeedback, setLastFeedback] = useState(null);
    const [selectedExplanation, setSelectedExplanation] = useState(null);
    const [txtAnswer, setTxtAnswer] = useState('');

    // 퀴즈 초기화 (OX + Short 통합 후 랜덤 10문제)
    const initQuiz = useCallback(() => {
        const oxWithTypes = OX_QUESTIONS.map(q => ({ ...q, type: 'ox' }));
        const shortWithTypes = SHORT_QUESTIONS.map(q => ({ ...q, type: 'short' }));
        const combined = [...oxWithTypes, ...shortWithTypes];

        // Fisher-Yates Shuffle
        const shuffled = [...combined];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }

        const selectedQuestions = shuffled.slice(0, 10);
        setQuestions(selectedQuestions);
        setCurrentIndex(0);

        // 첫 문제 타입에 따라 시간 설정
        if (selectedQuestions.length > 0) {
            setTimeLeft(selectedQuestions[0].type === 'ox' ? 10 : 20);
        }

        setIsFinished(false);
        setUserAnswers([]);
        setScore(0);
        setShowImmediateFeedback(false);
        setLastFeedback(null);
        setSelectedExplanation(null);
        setTxtAnswer('');
    }, []);

    const retryWrongAnswers = useCallback(() => {
        const wrongQuestions = userAnswers
            .filter(a => !a.isCorrect)
            .map(a => {
                // 원본 문제 데이터 복원
                const q = {
                    id: a.id,
                    question: a.question,
                    answer: a.answer,
                    explanation: a.explanation,
                    type: a.type
                };
                if (a.acceptedAnswers) q.acceptedAnswers = a.acceptedAnswers;
                return q;
            });

        setQuestions(wrongQuestions);
        setCurrentIndex(0);

        // 첫 문제 타입에 따라 시간 설정
        if (wrongQuestions.length > 0) {
            setTimeLeft(wrongQuestions[0].type === 'ox' ? 10 : 20);
        }

        setIsFinished(false);
        setUserAnswers([]);
        setScore(0);
        setShowImmediateFeedback(false);
        setLastFeedback(null);
        setSelectedExplanation(null);
        setTxtAnswer('');
    }, [userAnswers]);

    useEffect(() => {
        initQuiz();
    }, [initQuiz]);

    // 주관식 문제일 때 포커스 및 입력값 초기화
    useEffect(() => {
        if (!showImmediateFeedback && !isFinished && questions.length > 0) {
            const currentQ = questions[currentIndex];
            setTxtAnswer('');

            if (currentQ.type === 'short') {
                setTimeout(() => {
                    inputRef.current?.focus();
                }, 100);
            }
        }
    }, [currentIndex, showImmediateFeedback, isFinished, questions]);

    // 타이머 로직
    useEffect(() => {
        if (isFinished || questions.length === 0 || showImmediateFeedback) return;

        if (timeLeft <= 0) {
            handleTimeout();
            return;
        }

        const timer = setInterval(() => {
            setTimeLeft((prev) => Math.max(0, prev - 0.1));
        }, 100);

        return () => clearInterval(timer);
    }, [timeLeft, isFinished, questions.length, showImmediateFeedback]);

    const handleTimeout = () => {
        const currentQuestion = questions[currentIndex];

        const feedbackData = {
            ...currentQuestion,
            userAnswer: null,
            isCorrect: false,
            isTimeout: true,
            correctAnswer: currentQuestion.type === 'ox'
                ? (currentQuestion.answer ? 'O' : 'X')
                : currentQuestion.answer
        };

        setLastFeedback(feedbackData);
        setShowImmediateFeedback(true);
        setUserAnswers(prev => [...prev, feedbackData]);
    };

    // OX 답변 처리
    const handleOXAnswer = (answer) => {
        if (showImmediateFeedback) return;

        const currentQuestion = questions[currentIndex];
        const isCorrect = answer === currentQuestion.answer;

        if (isCorrect) setScore(prev => prev + 1);

        const feedbackData = {
            ...currentQuestion,
            userAnswer: answer ? 'O' : 'X',
            isCorrect,
            isTimeout: false,
            correctAnswer: currentQuestion.answer ? 'O' : 'X'
        };

        setLastFeedback(feedbackData);
        setShowImmediateFeedback(true);
        setUserAnswers(prev => [...prev, feedbackData]);
    };

    // 주관식 답변 처리
    const handleShortAnswer = (e) => {
        if (e && e.preventDefault) e.preventDefault();
        if (showImmediateFeedback) return;

        const currentQuestion = questions[currentIndex];
        const submitValue = txtAnswer;

        let isCorrect = false;
        const normalizedInput = submitValue.trim().toLowerCase();

        if (currentQuestion.acceptedAnswers) {
            isCorrect = currentQuestion.acceptedAnswers.some(ans =>
                ans.toLowerCase() === normalizedInput
            );
        } else {
            const normalizedAnswer = currentQuestion.answer.trim().toLowerCase();
            isCorrect = normalizedInput === normalizedAnswer;
        }

        if (isCorrect) setScore(prev => prev + 1);

        const feedbackData = {
            ...currentQuestion,
            userAnswer: submitValue,
            isCorrect,
            isTimeout: false,
            correctAnswer: currentQuestion.answer
        };

        setLastFeedback(feedbackData);
        setShowImmediateFeedback(true);
        setUserAnswers(prev => [...prev, feedbackData]);
    };

    // 다음 문제로 이동
    const moveNext = () => {
        setShowImmediateFeedback(false);
        if (currentIndex < questions.length - 1) {
            const nextIndex = currentIndex + 1;
            setCurrentIndex(nextIndex);

            // 다음 문제 타입에 따라 시간 설정
            const nextQ = questions[nextIndex];
            setTimeLeft(nextQ.type === 'ox' ? 10 : 20);
        } else {
            setIsFinished(true);
        }
    };

    if (questions.length === 0) return null;

    // --- 결과 화면 ---
    if (isFinished) {
        return (
            <div className="quiz-page-wrapper">
                <div className="quiz-container result-view">
                    <header className="quiz-header-minimal">
                        <button className="back-btn" onClick={() => navigate('/quiz')}>
                            <ChevronLeft size={24} strokeWidth={1.5} />
                        </button>
                        <span className="header-title result-title">랜덤 퀴즈 결과</span>
                        <div style={{ width: 40 }} />
                    </header>

                    <div className="result-hero">
                        <div className="result-score-text">
                            <span className="score-val">{score * 10}점</span>
                        </div>
                        <h2 className="result-comment">
                            {score === 10 ? '완벽해요! 🎉 AI 마스터시군요! 👑' :
                                score >= 7 ? '훌륭해요! ✨ 조금만 더 하면 완벽해질 거예요. 💪' :
                                    '좋은 시도였어요! 🌱 틀린 내용을 복습해 볼까요? 📚'}
                        </h2>
                    </div>

                    <div className="dot-summary-container">
                        <div className="dot-indicator-list">
                            {userAnswers.map((item, i) => (
                                <div
                                    key={i}
                                    className={`dot-item finished ${item.isCorrect ? 'correct' : 'wrong'}`}
                                    title={`문제 ${i + 1}`}
                                />
                            ))}
                        </div>
                        <div className="dot-legend">
                            <div className="legend-item"><span className="dot-item correct"></span><span>정답</span></div>
                            <div className="legend-item"><span className="dot-item wrong"></span><span>오답</span></div>
                        </div>
                    </div>

                    <div className="wrong-list-container">
                        <h3 className="list-title">문항별 상세 검토</h3>
                        <div className="wrong-items">
                            {userAnswers.map((item, idx) => (
                                <div
                                    key={idx}
                                    className={`result-item ${item.isCorrect ? 'correct' : 'wrong'}`}
                                    onClick={() => setSelectedExplanation(item)}
                                >
                                    <div className="result-item-info">
                                        <div className="item-header-row">
                                            <span className="item-no">문제 {idx + 1}</span>
                                            <span className={`item-type-badge ${item.type}`}>
                                                {item.type === 'ox' ? 'O/X' : '주관식'}
                                            </span>
                                        </div>
                                        <p className="item-q">{item.question}</p>

                                        {/* 결과 표시 분기: 주관식은 텍스트, OX는 O/X 값 */}
                                        <p className="item-answer-sub">
                                            나의 답: <span className={item.isCorrect ? 'ans-correct' : 'ans-wrong'}>
                                                {item.userAnswer || '(시간초과)'}
                                            </span>
                                            {!item.isCorrect && (
                                                <span className="ans-real"> / 정답: {item.correctAnswer}</span>
                                            )}
                                        </p>
                                    </div>
                                    <div className="result-status-icon">
                                        {item.isCorrect ? <Check size={20} strokeWidth={1.5} /> : <X size={20} strokeWidth={1.5} />}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="result-actions">
                        {userAnswers.some(a => !a.isCorrect) ? (
                            <div className="result-actions-group">
                                <button className="icon-restart-btn" onClick={initQuiz} title="전체 다시하기">
                                    <RotateCcw size={24} strokeWidth={1.5} />
                                </button>
                                <button className="retry-wrong-btn" onClick={retryWrongAnswers}>
                                    오답만 다시 풀기
                                </button>
                            </div>
                        ) : (
                            <button className="restart-btn" onClick={initQuiz}>
                                다시 도전하기
                            </button>
                        )}
                    </div>

                    {/* 결과 페이지 해설 모달 */}
                    {selectedExplanation && (
                        <div className="explanation-modal-overlay" onClick={() => setSelectedExplanation(null)}>
                            <div className="explanation-modal" onClick={e => e.stopPropagation()}>
                                <div className="modal-content">
                                    <div className={`feedback-badge ${selectedExplanation.isCorrect ? 'correct' : 'wrong'}`}>
                                        {selectedExplanation.isCorrect ? '맞췄어요!' : '틀렸어요!'}
                                    </div>
                                    <div className="modal-icon-wrapper">
                                        {selectedExplanation.type === 'ox' ? (
                                            // OX 문제: 정답(Fact) 아이콘 표시
                                            selectedExplanation.answer ? (
                                                <Circle size={80} strokeWidth={5} className="o-icon" />
                                            ) : (
                                                <X size={80} strokeWidth={5} className="x-icon" />
                                            )
                                        ) : (
                                            // 주관식 문제: 채점 결과(Result) 아이콘 표시
                                            selectedExplanation.isCorrect ? (
                                                <Check size={80} strokeWidth={5} className="o-icon" />
                                            ) : (
                                                <X size={80} strokeWidth={5} className="x-icon" />
                                            )
                                        )}
                                    </div>

                                    <h4 className="modal-q">{selectedExplanation.question}</h4>

                                    {!selectedExplanation.isCorrect && (
                                        <div className="modal-correct-answer">
                                            정답: <span>{selectedExplanation.correctAnswer}</span>
                                        </div>
                                    )}

                                    <div className="modal-divider" />
                                    <div className="modal-explanation">
                                        <div className="modal-desc-wrapper">
                                            <p className="modal-desc">{selectedExplanation.explanation}</p>
                                        </div>
                                    </div>
                                    <button className="modal-next-btn confirm" onClick={() => setSelectedExplanation(null)}>
                                        <span>확인</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    }

    // --- 진행 중 화면 ---
    const currentQ = questions[currentIndex];
    const maxTime = currentQ.type === 'ox' ? 10 : 20;

    return (
        <div className="quiz-page-wrapper">
            <div className="quiz-container ing-view">
                <div className="dot-indicator-track">
                    {[...Array(questions.length)].map((_, i) => {
                        let status = '';
                        if (i < userAnswers.length) {
                            status = userAnswers[i].isCorrect ? 'correct' : 'wrong';
                        } else if (i === currentIndex) {
                            status = 'current';
                        }
                        return <div key={i} className={`dot-item ${status}`} />;
                    })}
                </div>

                <header className="quiz-header-ing">
                    <button className="back-btn" onClick={() => navigate('/quiz')}>
                        <ChevronLeft size={24} strokeWidth={1.5} />
                    </button>
                    <div className="progress-info">
                        <span className="current-step">{currentIndex + 1}</span>
                        <span className="total-step">/ {questions.length}</span>
                    </div>
                </header>

                <div className="timer-area">
                    <div className="timer-bar-track">
                        <div
                            className={`timer-bar-fill ${timeLeft <= maxTime * 0.2 ? 'warning' : ''}`}
                            style={{ width: `${(timeLeft / maxTime) * 100}%` }}
                        />
                    </div>
                    <div className="timer-text">
                        <ClockIcon size={16} strokeWidth={1.5} />
                        <span>{Math.ceil(timeLeft)}초 남았어요</span>
                    </div>
                </div>

                <div key={currentIndex} className="question-card">
                    <div className="q-badge">Question {currentIndex + 1}</div>
                    <h2 className="q-text">Q. {currentQ.question}</h2>
                </div>

                {/* 문제 타입에 따른 분기 */}
                {currentQ.type === 'ox' ? (
                    <div className="ox-actions">
                        <button className="ox-btn o-btn" onClick={() => handleOXAnswer(true)}>
                            <div className="ox-icon-circle">
                                <Circle size={80} strokeWidth={5} />
                            </div>
                            <span className="ox-label">그렇다</span>
                        </button>
                        <button className="ox-btn x-btn" onClick={() => handleOXAnswer(false)}>
                            <div className="ox-icon-circle">
                                <X size={80} strokeWidth={5} />
                            </div>
                            <span className="ox-label">아니다</span>
                        </button>
                    </div>
                ) : (
                    <form className="short-answer-form" onSubmit={handleShortAnswer}>
                        <input
                            ref={inputRef}
                            type="text"
                            className="short-input"
                            placeholder="정답을 입력하세요"
                            value={txtAnswer}
                            onChange={(e) => setTxtAnswer(e.target.value)}
                            autoComplete="off"
                        />
                        <button type="submit" className="short-submit-btn" disabled={!txtAnswer.trim()}>
                            <span>정답 확인</span>
                        </button>
                    </form>
                )}

                {/* 피드백 모달 */}
                {showImmediateFeedback && lastFeedback && (
                    <div className="explanation-modal-overlay">
                        <div className="explanation-modal feedback-modal">
                            <div className="modal-content">
                                <div className={`feedback-badge ${lastFeedback.isTimeout ? 'warning' : lastFeedback.isCorrect ? 'correct' : 'wrong'}`}>
                                    {lastFeedback.isTimeout ? '시간 초과!' : lastFeedback.isCorrect ? '정답이에요!' : '아쉬워요!'}
                                </div>
                                <div className="modal-icon-wrapper">
                                    {lastFeedback.type === 'ox' ? (
                                        lastFeedback.answer ?
                                            <Circle size={80} strokeWidth={5} className="o-icon" /> :
                                            <X size={80} strokeWidth={5} className="x-icon" />
                                    ) : (
                                        lastFeedback.isCorrect ?
                                            <Check size={80} strokeWidth={5} className="o-icon" /> :
                                            <X size={80} strokeWidth={5} className="x-icon" />
                                    )}
                                </div>
                                <h4 className="modal-q">{lastFeedback.question}</h4>

                                <div className="modal-correct-answer">
                                    정답: <span>{lastFeedback.correctAnswer}</span>
                                </div>

                                <div className="modal-divider" />
                                <div className="modal-explanation">
                                    <div className="modal-desc-wrapper">
                                        <p className="modal-desc">{lastFeedback.explanation}</p>
                                    </div>
                                </div>
                                <button className="modal-next-btn" onClick={moveNext}>
                                    <span>{currentIndex < questions.length - 1 ? '다음 단계로' : '결과 확인하기'}</span>
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default RandomQuiz;
