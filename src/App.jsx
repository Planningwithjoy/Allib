import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import GNB from './components/GNB';
import LNB from './components/LNB';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Detail from './pages/Detail';
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
            <div className="content-wrapper">
                <LNB isMenuOpen={isMenuOpen} />
                {/* 모바일에서 메뉴 열렸을 때 배경 흐리게 처리하는 오버레이 */}
                {isMenuOpen && <div className="menu-overlay" onClick={() => setIsMenuOpen(false)} />}
                <main className="main-layout">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/detail/:id" element={<Detail />} />
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
