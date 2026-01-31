import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        const scrollToTop = () => {
            // 1. 기본 윈도우 스크롤 초기화
            window.scrollTo(0, 0);

            // 2. 주요 HTML 요소 스크롤 초기화
            if (document.documentElement) document.documentElement.scrollTop = 0;
            if (document.body) document.body.scrollTop = 0;

            // 3. 잠재적인 레이아웃 컨테이너 스크롤 초기화
            // .main-layout, .content-wrapper 등 주요 클래스 타겟팅
            const scrollContainers = document.querySelectorAll('.main-layout, .content-wrapper, .lnb-content, .detail-container');
            scrollContainers.forEach(container => {
                container.scrollTop = 0;
            });
        };

        // 즉시 실행
        scrollToTop();

        // 렌더링 완료 후 다시 실행 (레이스 컨디션 방지)
        const timer = setTimeout(scrollToTop, 10);

        return () => clearTimeout(timer);
    }, [pathname]);

    return null;
};

export default ScrollToTop;
