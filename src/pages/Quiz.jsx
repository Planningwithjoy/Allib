import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import './Quiz.css';

// 에셋 경로 정의
import oxImg from '../assets/quiz/ox.png';
import shortImg from '../assets/quiz/short.png';
import randomImg from '../assets/quiz/random.png';

const QuizCard = ({ title, desc, img, color, onClick }) => {
    return (
        <div className="quiz-card" style={{ '--card-color': color }} onClick={onClick}>
            <div className="quiz-card-content">
                <div className="quiz-card-info">
                    <h3 className="quiz-card-title">{title}</h3>
                    <p className="quiz-card-desc">{desc}</p>
                </div>
            </div>
            <div className="quiz-card-illustration">
                <img src={img} alt={title} />
            </div>
            <div className="quiz-card-footer">
                <span>지금 시작하기</span>
                <ChevronRight size={16} />
            </div>
        </div>
    );
};

const Quiz = () => {
    const navigate = useNavigate();

    const quizTypes = [
        {
            id: 'ox',
            title: 'OX 퀴즈',
            desc: '단순하지만 확실하게!\n기초 지식을 O/X로 점검하세요.',
            img: oxImg,
            color: '#009CE0', /* 브랜드 키 컬러로 통일 */
            action: () => navigate('/quiz/ox')
        },
        {
            id: 'short',
            title: '주관식 퀴즈',
            desc: '개념을 정확히 이해했나요?\n직접 답을 적어보세요.',
            img: shortImg,
            color: '#009CE0',
            action: () => navigate('/quiz/short')
        },
        {
            id: 'random',
            title: '랜덤 퀴즈',
            desc: 'OX와 주관식을 섞어 도전!\n실력을 종합적으로 테스트해요.',
            img: randomImg,
            color: '#009CE0',
            action: () => navigate('/quiz/random')
        }
    ];

    return (
        <div className="quiz-page">
            <header className="quiz-header">
                <h1 className="quiz-main-title">AI Quiz</h1>
                <p className="quiz-main-desc">AI 지식을 퀴즈로 확인해요!</p>
            </header>

            <div className="quiz-grid">
                {quizTypes.map((type) => (
                    <QuizCard
                        key={type.id}
                        title={type.title}
                        desc={type.desc}
                        img={type.img}
                        color={type.color}
                        onClick={type.action}
                    />
                ))}
            </div>
        </div>
    );
};

export default Quiz;
