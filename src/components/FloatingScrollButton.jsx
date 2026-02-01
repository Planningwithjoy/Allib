import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import './FloatingScrollButton.css';

const FloatingScrollButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    // 스크롤 위치 감지
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    // 최상단으로 부드럽게 이동
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <button
            className={`floating-scroll-btn ${isVisible ? 'visible' : ''}`}
            onClick={scrollToTop}
            aria-label="최상단으로 이동"
        >
            <ArrowUp size={24} strokeWidth={2.5} />
        </button>
    );
};

export default FloatingScrollButton;
