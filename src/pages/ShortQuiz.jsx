import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, X, Check, Timer as ClockIcon, RotateCcw, CornerDownLeft } from 'lucide-react';
import { SHORT_QUESTIONS } from '../data/quizData';
import './ShortQuiz.css';

const ShortQuiz = () => {
    const navigate = useNavigate();
    const inputRef = useRef(null);

    // 상태 관리
    const [questions, setQuestions] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [timeLeft, setTimeLeft] = useState(20); // 주관식은 20초 제공
    const [isFinished, setIsFinished] = useState(false);
    const [userAnswers, setUserAnswers] = useState([]);
    const [score, setScore] = useState(0);
    const [showImmediateFeedback, setShowImmediateFeedback] = useState(false);
    const [lastFeedback, setLastFeedback] = useState(null);
    const [selectedExplanation, setSelectedExplanation] = useState(null);

    // 입력값 관리
    const [txtAnswer, setTxtAnswer] = useState('');

    // 퀴즈 초기화 (랜덤 10문제) - Fisher-Yates Shuffle 적용
    const initQuiz = useCallback(() => {
        const shuffled = [...SHORT_QUESTIONS];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }

        setQuestions(shuffled.slice(0, 10));
        setCurrentIndex(0);
        setTimeLeft(20);
        setIsFinished(false);
        setUserAnswers([]);
        setScore(0);
        setShowImmediateFeedback(false);
        setLastFeedback(null);
        setSelectedExplanation(null);
        setTxtAnswer('');
    }, []);

    useEffect(() => {
        initQuiz();
    }, [initQuiz]);

    // 문제 변경 시 입력창 초기화 및 오토포커스
    useEffect(() => {
        if (!showImmediateFeedback && !isFinished && questions.length > 0) {
            setTxtAnswer('');
            // 약간의 딜레이 후 포커스 (화면 전환 애니메이션 고려)
            setTimeout(() => {
                inputRef.current?.focus();
            }, 100);
        }
    }, [currentIndex, showImmediateFeedback, isFinished, questions.length]);

    // 타이머 로직
    useEffect(() => {
        if (isFinished || questions.length === 0 || showImmediateFeedback) return;

        if (timeLeft <= 0) {
            handleSubmit(null); // 타임오버 처리
            return;
        }

        const timer = setInterval(() => {
            setTimeLeft((prev) => prev - 0.1);
        }, 100);

        return () => clearInterval(timer);
    }, [timeLeft, isFinished, questions.length, showImmediateFeedback]);

    // 정답 제출 처리
    const handleSubmit = (e) => {
        if (e && e.preventDefault) e.preventDefault();

        // 이미 피드백 모달이 떠있으면 동작 안함
        if (showImmediateFeedback) return;

        const currentQuestion = questions[currentIndex];
        const isTimeout = e === null;

        let isCorrect = false;
        let submitValue = isTimeout ? '' : txtAnswer;

        if (!isTimeout) {
            // 정답 비교 로직: 공백 제거 및 소문자 변환
            const normalizedInput = submitValue.trim().toLowerCase();

            if (currentQuestion.acceptedAnswers) {
                // 다중 정답(한글/영어) 허용
                isCorrect = currentQuestion.acceptedAnswers.some(ans =>
                    ans.toLowerCase() === normalizedInput
                );
            } else {
                // 기존 단일 정답 비교 (하위 호환)
                const normalizedAnswer = currentQuestion.answer.trim().toLowerCase();
                isCorrect = normalizedInput === normalizedAnswer;
            }
        }

        if (isCorrect) setScore(prev => prev + 1);

        const feedbackData = {
            ...currentQuestion,
            userAnswer: submitValue, // 사용자가 입력한 값
            isCorrect,
            isTimeout,
            correctAnswer: currentQuestion.answer // 정답 공개용
        };

        setLastFeedback(feedbackData);
        setShowImmediateFeedback(true);
        setUserAnswers(prev => [...prev, feedbackData]);
    };

    // 다음 문제로 이동
    const moveNext = () => {
        setShowImmediateFeedback(false);
        if (currentIndex < 9) {
            setCurrentIndex(prev => prev + 1);
            setTimeLeft(20); // 시간 리셋
        } else {
            setIsFinished(true);
        }
    };

    if (questions.length === 0) return null;

    // 결과 화면 렌더링
    if (isFinished) {
        return (
            <div className="quiz-page-wrapper">
                <div className="quiz-container result-view">
                    <header className="quiz-header-minimal">
                        <button className="back-btn" onClick={() => navigate('/quiz')}>
                            <ChevronLeft size={24} strokeWidth={1.5} />
                        </button>
                        <span className="header-title result-title">퀴즈 결과</span>
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
                                        <span className="item-no">문제 {idx + 1}</span>
                                        <p className="item-q">{item.question}</p>
                                        <p className="item-answer-sub">
                                            나의 답: <span className={item.isCorrect ? 'ans-correct' : 'ans-wrong'}>
                                                {item.userAnswer || '(미입력)'}
                                            </span>
                                            {!item.isCorrect && (
                                                <span className="ans-real"> / 정답: {item.answer}</span>
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
                        <button className="restart-btn" onClick={initQuiz}>
                            다시 도전하기
                        </button>
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
                                        {selectedExplanation.isCorrect ? (
                                            <Check size={80} strokeWidth={5} className="o-icon" />
                                        ) : (
                                            <X size={80} strokeWidth={5} className="x-icon" />
                                        )}
                                    </div>
                                    <h4 className="modal-q">{selectedExplanation.question}</h4>

                                    {!selectedExplanation.isCorrect && (
                                        <div className="modal-correct-answer">
                                            정답: <span>{selectedExplanation.answer}</span>
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

    // 퀴즈 진행 화면
    const currentQ = questions[currentIndex];

    return (
        <div className="quiz-page-wrapper">
            <div className="quiz-container ing-view">
                {/* 도트 인디케이터 */}
                <div className="dot-indicator-track">
                    {[...Array(10)].map((_, i) => {
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
                        <span className="total-step">/ 10</span>
                    </div>
                </header>

                <div className="timer-area">
                    <div className="timer-bar-track">
                        <div
                            className={`timer-bar-fill ${timeLeft <= 5 ? 'warning' : ''}`}
                            style={{ width: `${(timeLeft / 20) * 100}%` }}
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

                {/* 주관식 입력 영역 */}
                <form className="short-answer-form" onSubmit={handleSubmit}>
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

                {/* 즉각적인 해설 모달 */}
                {showImmediateFeedback && lastFeedback && (
                    <div className="explanation-modal-overlay">
                        <div className="explanation-modal feedback-modal">
                            <div className="modal-content">
                                <div className={`feedback-badge ${lastFeedback.isTimeout ? 'warning' : lastFeedback.isCorrect ? 'correct' : 'wrong'}`}>
                                    {lastFeedback.isTimeout ? '시간 초과!' : lastFeedback.isCorrect ? '정답이에요!' : '아쉬워요!'}
                                </div>
                                <div className="modal-icon-wrapper">
                                    {lastFeedback.isCorrect ? (
                                        <Check size={80} strokeWidth={5} className="o-icon" />
                                    ) : (
                                        <X size={80} strokeWidth={5} className="x-icon" />
                                    )}
                                </div>
                                <h4 className="modal-q">{lastFeedback.question}</h4>

                                <div className="modal-correct-answer">
                                    정답: <span>{lastFeedback.correctAnswer || lastFeedback.answer}</span>
                                </div>

                                <div className="modal-divider" />
                                <div className="modal-explanation">
                                    <div className="modal-desc-wrapper">
                                        <p className="modal-desc">{lastFeedback.explanation}</p>
                                    </div>
                                </div>
                                <button className="modal-next-btn" onClick={moveNext}>
                                    <span>{currentIndex < 9 ? '다음 단계로' : '결과 확인하기'}</span>
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ShortQuiz;
