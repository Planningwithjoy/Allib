import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { CATEGORIES, KNOWLEDGE_DATA } from '../data/knowledge';
import './GNB.css';
import { Sparkles, ChevronRight, Search, X, Clock, Menu, Trophy } from 'lucide-react';

const GNB = ({ isMenuOpen, setIsMenuOpen }) => {
    const [activeCategory, setActiveCategory] = useState(null);
    const [isSearchFocused, setIsSearchFocused] = useState(false);
    const searchRef = useRef(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [recentSearches, setRecentSearches] = useState(() => {
        const saved = localStorage.getItem('recentSearches');
        return saved ? JSON.parse(saved) : [];
    });
    const navigate = useNavigate();
    const location = useLocation();

    // 외부 클릭 감지 및 경로 변경 시 검색 닫기
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setIsSearchFocused(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // 페이지 이동(경로 변경) 시 검색 상태 초기화
    useEffect(() => {
        setIsSearchFocused(false);
        setSearchTerm('');
    }, [location.pathname]);

    const filteredResults = searchTerm.trim()
        ? KNOWLEDGE_DATA.filter(item =>
            item.enTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.koTitle.includes(searchTerm)
        ).slice(0, 5)
        : [];

    const handleSearchSelect = (item) => {
        addRecentSearch(item.koTitle); // 검색어 완성 저장 (부분 입력값 대신 완성된 타이틀 저장)
        navigate(`/detail/${item.id}`);
        setSearchTerm('');
        setIsSearchFocused(false);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && filteredResults.length > 0) {
            handleSearchSelect(filteredResults[0]);
        }
    };

    const addRecentSearch = (text) => {
        const updated = [text, ...recentSearches.filter(s => s !== text)].slice(0, 5);
        setRecentSearches(updated);
        localStorage.setItem('recentSearches', JSON.stringify(updated));
    };

    const removeRecentSearch = (e, text) => {
        e.stopPropagation();
        const updated = recentSearches.filter(s => s !== text);
        setRecentSearches(updated);
        localStorage.setItem('recentSearches', JSON.stringify(updated));
    };

    return (
        <header className="gnb" onMouseLeave={() => setActiveCategory(null)}>
            <div className="gnb-container">
                <div className="gnb-left-group">
                    <button className="menu-toggle-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>

                    <NavLink to="/" className="gnb-logo" onClick={() => {
                        setActiveCategory(null);
                        setIsSearchFocused(false);
                        setSearchTerm('');
                    }}>
                        <Sparkles fill="var(--primary)" color="var(--primary)" size={18} />
                        <span>AIlib</span>
                    </NavLink>
                </div>

                <nav className="gnb-nav">
                    {CATEGORIES.map((cat) => (
                        <div
                            key={cat.id}
                            className="gnb-item-wrapper"
                            onMouseEnter={() => setActiveCategory(cat.name)}
                        >
                            <NavLink
                                to={`/?category=${cat.name}`}
                                className={({ isActive }) => `gnb-link ${isActive ? 'active' : ''}`}
                                onClick={() => {
                                    setActiveCategory(null);
                                    setIsSearchFocused(false);
                                    setSearchTerm('');
                                }}
                            >
                                {cat.name}
                            </NavLink>
                        </div>
                    ))}
                </nav>

                <div className="gnb-right-group">
                    <div ref={searchRef} className={`gnb-search-area ${isSearchFocused ? 'is-focused' : ''}`}>
                        <div className="search-input-wrapper">
                            <Search size={16} className="search-icon" />
                            <input
                                type="text"
                                placeholder="궁금한 키워드를 검색해보세요!"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                onFocus={() => setIsSearchFocused(true)}
                                onKeyDown={handleKeyDown}
                            />
                            {searchTerm && (
                                <button className="search-clear" onClick={() => setSearchTerm('')}>
                                    <X size={14} />
                                </button>
                            )}
                        </div>

                        {isSearchFocused && (
                            <div className="search-dropdown">
                                {searchTerm.trim() ? (
                                    <div className="search-results">
                                        <div className="dropdown-label">검색 결과</div>
                                        {filteredResults.length > 0 ? (
                                            filteredResults.map(item => (
                                                <div
                                                    key={item.id}
                                                    className="search-result-item"
                                                    onClick={() => handleSearchSelect(item)}
                                                >
                                                    <span className="result-en">{item.enTitle}</span>
                                                    <span className="result-ko">{item.koTitle}</span>
                                                </div>
                                            ))
                                        ) : (
                                            <div className="search-empty">검색 결과가 없습니다.</div>
                                        )}
                                    </div>
                                ) : (
                                    <div className="recent-searches">
                                        <div className="dropdown-label">최근 검색어</div>
                                        {recentSearches.length > 0 ? (
                                            recentSearches.map((text, idx) => (
                                                <div key={idx} className="recent-item" onClick={() => {
                                                    setSearchTerm(text);
                                                    setIsSearchFocused(true);
                                                }}>
                                                    <div className="recent-item-left">
                                                        <Clock size={14} className="clock-icon" />
                                                        <span>{text}</span>
                                                    </div>
                                                    <button
                                                        className="delete-btn"
                                                        onClick={(e) => removeRecentSearch(e, text)}
                                                    >
                                                        <X size={14} />
                                                    </button>
                                                </div>
                                            ))
                                        ) : (
                                            <div className="search-empty">최근 검색어가 없습니다.</div>
                                        )}
                                    </div>
                                )}
                            </div>
                        )}
                    </div>

                    <div className="gnb-quiz-btn-container">
                        <button
                            className="gnb-quiz-btn"
                            onClick={() => navigate('/quiz')}
                            title="AI Quiz"
                        >
                            <Trophy size={20} strokeWidth={1.5} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Mega Menu Flyout */}
            <div className={`gnb-mega-menu ${activeCategory ? 'is-active' : ''}`}>
                <div className="mega-menu-container">
                    <div className="mega-menu-content">
                        {activeCategory && (
                            KNOWLEDGE_DATA
                                .filter(item => item.mainTheme === activeCategory)
                                .map(item => (
                                    <div
                                        key={item.id}
                                        className="mega-menu-link"
                                        onClick={() => {
                                            navigate(`/detail/${item.id}`);
                                            setActiveCategory(null);
                                            setIsSearchFocused(false); // 메가 메뉴에서 이동 시 검색창 닫기
                                            setSearchTerm('');
                                        }}
                                    >
                                        <span className="mega-link-en">{item.enTitle}</span>
                                        <span className="mega-link-ko">{item.koTitle}</span>
                                    </div>
                                ))
                        )}
                        {/* 해당 카테고리에 데이터가 없을 경우 안내 */}
                        {activeCategory && KNOWLEDGE_DATA.filter(item => item.mainTheme === activeCategory).length === 0 && (
                            <div className="mega-menu-empty">아직 준비중이에요!</div>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default GNB;
