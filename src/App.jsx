import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import GNB from './components/GNB';
import LNB from './components/LNB';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Detail from './pages/Detail';
import Quiz from './pages/Quiz';
import OXQuiz from './pages/OXQuiz';
import ShortQuiz from './pages/ShortQuiz';
import RandomQuiz from './pages/RandomQuiz';
import Map from './pages/Map';
import './index.css';

const AppContent = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    // 경로 변경 시 모바일 메뉴 닫기
    useEffect(() => {
        setIsMenuOpen(false);
    }, [location.pathname]);

    return (
        <div className={`app-container ${isMenuOpen ? 'menu-open' : ''}`}>
            <ScrollToTop />
            <GNB isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            {/* 오버레이를 최상위 레벨로 이동하여 GNB 위/LNB 아래(z-index:900)에 확실히 위치시킴 */}
            {isMenuOpen && <div className="menu-overlay" onClick={() => setIsMenuOpen(false)} />}

            <div className="content-wrapper">
                <LNB isMenuOpen={isMenuOpen} />
                <main className="main-layout">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/detail/:id" element={<Detail />} />
                        <Route path="/quiz" element={<Quiz />} />
                        <Route path="/quiz/short" element={<ShortQuiz />} />
                        <Route path="/quiz/ox" element={<OXQuiz />} />
                        <Route path="/quiz/random" element={<RandomQuiz />} />
                        <Route path="/map" element={<Map />} />
                    </Routes>
                </main>
            </div>
        </div>
    );
};

function App() {
    return (
        <Router>
            <AppContent />
        </Router>
    );
}

export default App;
