import React from 'react';
import * as Icons from 'lucide-react';
import './ElasticDiagram.css';

const MovingArrow = ({ pathId, dur }) => (
    <polygon points="-4,-4 5,0 -4,4" className="el-particle">
        <animateMotion dur={dur} repeatCount="indefinite" rotate="auto">
            <mpath href={`#${pathId}`} />
        </animateMotion>
    </polygon>
);

const ElasticDiagram = () => {
    return (
        <div className="el-diagram-wrapper">
            <div className="el-layout-grid">
                {/* SVG Overlay for Connections */}
                <svg className="el-svg-overlay" viewBox="0 0 800 520" preserveAspectRatio="xMidYMid meet">
                    {/* Paths */}

                    {/* Query to Top/Bottom (Split) */}
                    <path id="path_query_keyword" d="M 80 260 Q 160 260 160 120 L 270 120" className="el-line" />
                    <path id="path_query_vector" d="M 80 260 Q 160 260 160 400 L 270 400" className="el-line" />

                    {/* Top/Bottom to Hybrid Search */}
                    <path id="path_keyword_hybrid" d="M 270 120 Q 360 120 360 260 L 490 260" className="el-line" />
                    <path id="path_vector_hybrid" d="M 270 400 Q 360 400 360 260 L 490 260" className="el-line" />

                    {/* Elastic DB to Retrieved Result */}
                    <path id="path_db_result" d="M 490 260 L 740 260" className="el-line" />

                    {/* Animated Particles */}
                    <MovingArrow pathId="path_query_keyword" dur="2s" />
                    <MovingArrow pathId="path_query_vector" dur="2s" />
                    <MovingArrow pathId="path_keyword_hybrid" dur="1.5s" />
                    <MovingArrow pathId="path_vector_hybrid" dur="1.5s" />
                    <MovingArrow pathId="path_db_result" dur="1.5s" />

                    {/* SVG Labels */}
                    <text x="120" y="160" className="el-line-label">단어 분석</text>
                    <text x="120" y="370" className="el-line-label">의미 분석</text>
                    <text x="360" y="170" className="el-line-label" transform="rotate(25, 360, 170)">정확도 기반</text>
                    <text x="360" y="350" className="el-line-label" transform="rotate(-25, 360, 350)">문맥 기반</text>
                    <text x="395" y="250" className="el-line-label">융합 검색</text>
                    <text x="580" y="250" className="el-line-label">밀리초 응답</text>
                </svg>

                {/* 1. User Query */}
                <div className="el-node" style={{ left: '80px', top: '260px', transform: 'translate(-50%, -32px)' }}>
                    <div className="el-icon-circle fill-primary">
                        <Icons.User size={36} />
                    </div>
                    <span className="el-label title">사용자 질문<br />(Query)</span>
                </div>

                {/* 2. Keyword Search (Top) */}
                <div className="el-node" style={{ left: '270px', top: '120px', transform: 'translate(-50%, -25px)' }}>
                    <div className="el-icon-circle primary-stroke">
                        <Icons.TextSelect size={24} />
                    </div>
                    <span className="el-label">키워드 검색<br />(BM25/TF-IDF)</span>
                </div>

                {/* 3. Vector Search (Bottom) */}
                <div className="el-node" style={{ left: '270px', top: '400px', transform: 'translate(-50%, -25px)' }}>
                    <div className="el-icon-circle primary-stroke">
                        <Icons.Network size={24} />
                    </div>
                    <span className="el-label">벡터 검색<br />(Embedding/Semantic)</span>
                </div>

                {/* 4. Elastic Search DB */}
                <div className="el-node" style={{ left: '490px', top: '260px', transform: 'translate(-50%, -32px)' }}>
                    <div className="el-icon-circle fill-primary">
                        <Icons.DatabaseZap size={36} />
                    </div>
                    <span className="el-label title">엘라스틱서치 DB<br />(Elastic Search)</span>
                </div>

                {/* 5. Retrieved Documents */}
                <div className="el-box highlight" style={{ left: '740px', top: '260px' }}>
                    <Icons.FileSearch size={24} color="var(--primary)" />
                    <span className="box-text">최적 검색 결과<br />(Retrieved Docs)</span>
                </div>

            </div>
        </div>
    );
};

export default ElasticDiagram;
