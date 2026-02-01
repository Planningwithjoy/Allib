import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, X, Check, Timer as ClockIcon, RotateCcw, Circle } from 'lucide-react';
import { OX_QUESTIONS } from '../data/quizData';
import './OXQuiz.css';

const OXQuiz = () => {
    const navigate = useNavigate();

    // 상태 관리
    const [questions, setQuestions] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [timeLeft, setTimeLeft] = useState(10);
    const [isFinished, setIsFinished] = useState(false);
    const [userAnswers, setUserAnswers] = useState([]);
    const [score, setScore] = useState(0);
    const [showImmediateFeedback, setShowImmediateFeedback] = useState(false);
    const [lastFeedback, setLastFeedback] = useState(null); // { isCorrect, explanation, answer, userAnswer }
    const [selectedExplanation, setSelectedExplanation] = useState(null); // 결과 페이지 리뷰용

    // 퀴즈 초기화 (랜덤 10문제)
    const initQuiz = useCallback(() => {
        const shuffled = [...OX_QUESTIONS].sort(() => 0.5 - Math.random());
        setQuestions(shuffled.slice(0, 10));
        setCurrentIndex(0);
        setTimeLeft(10);
        setIsFinished(false);
        setUserAnswers([]);
        setScore(0);
        setShowImmediateFeedback(false);
        setLastFeedback(null);
        setSelectedExplanation(null);
    }, []);

    const retryWrongAnswers = useCallback(() => {
        // 오답만 필터링
        const wrongQuestions = userAnswers
            .filter(a => !a.isCorrect)
            .map(a => ({
                id: a.id,
                question: a.question,
                answer: a.answer,
                explanation: a.explanation
            }));

        setQuestions(wrongQuestions);
        setCurrentIndex(0);
        setTimeLeft(10);
        setIsFinished(false);
        setUserAnswers([]);
        setScore(0);
        setShowImmediateFeedback(false);
        setLastFeedback(null);
        setSelectedExplanation(null);
    }, [userAnswers]);

    useEffect(() => {
        initQuiz();
    }, [initQuiz]);

    // 타이머 로직
    useEffect(() => {
        if (isFinished || questions.length === 0 || showImmediateFeedback) return;

        if (timeLeft <= 0) {
            handleAnswer(null); // 타임오버 시 오답 처리
            return;
        }

        const timer = setInterval(() => {
            setTimeLeft((prev) => prev - 0.1);
        }, 100);

        return () => clearInterval(timer);
    }, [timeLeft, isFinished, questions.length, showImmediateFeedback]);

    // 답변 처리
    const handleAnswer = (answer) => {
        const currentQuestion = questions[currentIndex];
        const isCorrect = answer === currentQuestion.answer;

        if (isCorrect) setScore(prev => prev + 1);

        const feedbackData = {
            ...currentQuestion,
            userAnswer: answer,
            isCorrect,
            isTimeout: answer === null
        };

        setLastFeedback(feedbackData);
        setShowImmediateFeedback(true);

        // 정답 데이터 저장
        setUserAnswers(prev => [...prev, feedbackData]);
    };

    // 다음 문제로 이동
    const moveNext = () => {
        setShowImmediateFeedback(false);
        if (currentIndex < questions.length - 1) {
            setCurrentIndex(prev => prev + 1);
            setTimeLeft(10);
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
                        <div style={{ width: 40 }} /> {/* 밸런싱용 더미 */}
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
                                        {selectedExplanation.answer ? (
                                            <Circle size={80} strokeWidth={5} className="o-icon" />
                                        ) : (
                                            <X size={80} strokeWidth={5} className="x-icon" />
                                        )}
                                    </div>
                                    <h4 className="modal-q">{selectedExplanation.question}</h4>
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
                            className={`timer-bar-fill ${timeLeft <= 3 ? 'warning' : ''}`}
                            style={{ width: `${(timeLeft / 10) * 100}%` }}
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

                <div className="ox-actions">
                    <button className="ox-btn o-btn" onClick={() => handleAnswer(true)}>
                        <div className="ox-icon-circle">
                            <Circle size={80} strokeWidth={5} />
                        </div>
                        <span className="ox-label">그렇다</span>
                    </button>
                    <button className="ox-btn x-btn" onClick={() => handleAnswer(false)}>
                        <div className="ox-icon-circle">
                            <X size={80} strokeWidth={5} />
                        </div>
                        <span className="ox-label">아니다</span>
                    </button>
                </div>

                {/* 즉각적인 해설 모달 */}
                {showImmediateFeedback && lastFeedback && (
                    <div className="explanation-modal-overlay">
                        <div className="explanation-modal feedback-modal">
                            <div className="modal-content">
                                <div className={`feedback-badge ${lastFeedback.isTimeout ? 'warning' : lastFeedback.isCorrect ? 'correct' : 'wrong'}`}>
                                    {lastFeedback.isTimeout ? '시간 초과!' : lastFeedback.isCorrect ? '정답이에요!' : '아쉬워요!'}
                                </div>
                                <div className="modal-icon-wrapper">
                                    {lastFeedback.answer ? (
                                        <Circle size={80} strokeWidth={5} className="o-icon" />
                                    ) : (
                                        <X size={80} strokeWidth={5} className="x-icon" />
                                    )}
                                </div>
                                <h4 className="modal-q">{lastFeedback.question}</h4>
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

export default OXQuiz;
