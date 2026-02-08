import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import * as Icons from 'lucide-react';
import './Home.css';
import { KNOWLEDGE_DATA, CATEGORIES } from '../data/knowledge';
import FloatingScrollButton from '../components/FloatingScrollButton';

const Home = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const categoryFilter = query.get('category');

    // 카테고리 순서대로 정렬하기 위한 맵 생성 ({ "지식·이해": 0, "처리·실행": 1, ... })
    const categoryOrder = CATEGORIES.reduce((acc, cat, idx) => {
        acc[cat.name] = idx;
        return acc;
    }, {});

    const baseData = categoryFilter
        ? KNOWLEDGE_DATA.filter(item => item.mainTheme === categoryFilter)
        : KNOWLEDGE_DATA;

    const filteredData = [...baseData].sort((a, b) => {
        return (categoryOrder[a.mainTheme] ?? 99) - (categoryOrder[b.mainTheme] ?? 99);
    });

    return (
        <div className="home-container">
            <header className="home-header">
                <h1>AIlib</h1>
                <p>필요한 AI 지식을 한곳에 모은 라이브러리</p>
            </header>

            <div className="card-grid">
                {filteredData.map((item) => {
                    const Icon = Icons[item.icon] || Icons.HelpCircle;
                    return (
                        <div
                            key={item.id}
                            className="concept-card"
                            onClick={() => navigate(`/detail/${item.id}`)}
                        >
                            <div className="card-inner">
                                <div className="card-header">
                                    <span className="card-category">{item.mainTheme}</span>
                                    <h2 className="card-en-title">{item.enTitle}</h2>
                                    <p className="card-ko-title">{item.koTitle}</p>
                                </div>

                                <div className="card-footer-icon">
                                    <Icon size={48} strokeWidth={1.5} />
                                </div>

                                <div className="hover-state">
                                    <div className="hover-text">"{item.hoverText}"</div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            <FloatingScrollButton />
        </div>
    );
};

export default Home;
