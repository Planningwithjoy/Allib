import React from 'react';
import * as Icons from 'lucide-react';
import './RerankingDiagram.css';

const MovingParticle = ({ pathId, dur }) => (
    <polygon points="-4,-4 5,0 -4,4" className="rr-particle">
        <animateMotion dur={dur} repeatCount="indefinite" rotate="auto">
            <mpath href={`#${pathId}`} />
        </animateMotion>
    </polygon>
);

const RerankingDiagram = () => {
    return (
        <div className="rr-diagram-wrapper">
            <div className="rr-layout-grid">
                {/* SVG Overlay for Connections */}
                <svg className="rr-svg-overlay" viewBox="0 0 800 860" preserveAspectRatio="xMidYMid meet">
                    {/* Paths */}

                    {/* Documents to Chunks */}
                    <path id="path_docs_chunks" d="M 280 80 L 480 80" className="rr-line dotted" />

                    {/* Chunks to Embedding */}
                    <path id="path_chunks_emb" d="M 530 110 Q 580 160 530 210" className="rr-line" />

                    {/* Query to Embedding */}
                    <path id="path_query_emb" d="M 280 240 L 480 240" className="rr-line" />

                    {/* Query to Prompt (Long curve) */}
                    <path id="path_query_prompt" d="M 240 270 Q 240 760 480 760" className="rr-line" />

                    {/* Embedding to Vector DB */}
                    <path id="path_emb_db" d="M 530 270 Q 580 320 530 370" className="rr-line" />

                    {/* Vector DB to Retrieved Context */}
                    <path id="path_db_retrieved" d="M 560 400 Q 660 400 660 440" className="rr-line" />

                    {/* Vector DB to Reranker */}
                    <path id="path_db_reranker" d="M 530 430 L 530 520" className="rr-line" />

                    {/* Retrieved Context to Reranker */}
                    <path id="path_retrieved_reranker" d="M 660 490 Q 660 550 560 550" className="rr-line" />

                    {/* Reranker to Re-ranked Context */}
                    <path id="path_reranker_reranked" d="M 560 550 Q 660 550 660 610" className="rr-line" />

                    {/* Reranker to Prompt */}
                    <path id="path_reranker_prompt" d="M 530 580 L 530 730" className="rr-line" />

                    {/* Re-ranked Context to Prompt */}
                    <path id="path_reranked_prompt" d="M 660 660 Q 660 760 560 760" className="rr-line" />

                    {/* Prompt to Generative */}
                    <path id="path_prompt_gen" d="M 480 760 L 280 760" className="rr-line" />

                    {/* Generative to Response */}
                    <path id="path_gen_res" d="M 220 730 Q 150 600 220 580" className="rr-line" />

                    {/* Animated Particles */}
                    <MovingParticle pathId="path_docs_chunks" dur="2s" />
                    <MovingParticle pathId="path_chunks_emb" dur="2s" />
                    <MovingParticle pathId="path_query_emb" dur="2s" />
                    <MovingParticle pathId="path_query_prompt" dur="4s" />
                    <MovingParticle pathId="path_emb_db" dur="2s" />
                    <MovingParticle pathId="path_db_retrieved" dur="2s" />
                    <MovingParticle pathId="path_db_reranker" dur="2s" />
                    <MovingParticle pathId="path_retrieved_reranker" dur="2s" />
                    <MovingParticle pathId="path_reranker_reranked" dur="2s" />
                    <MovingParticle pathId="path_reranker_prompt" dur="2s" />
                    <MovingParticle pathId="path_reranked_prompt" dur="2s" />
                    <MovingParticle pathId="path_prompt_gen" dur="2s" />
                    <MovingParticle pathId="path_gen_res" dur="2s" />

                </svg>

                {/* 1. Documents */}
                <div className="rr-node doc-node" style={{ left: '240px', top: '80px' }}>
                    <div className="rr-icon-circle">
                        <Icons.FileText size={28} />
                    </div>
                    <span className="rr-label">원문 문서<br />(Documents)</span>
                </div>

                {/* 2. Chunks */}
                <div className="rr-node" style={{ left: '530px', top: '80px' }}>
                    <div className="rr-icon-circle primary-stroke">
                        <Icons.Blocks size={28} />
                    </div>
                    <span className="rr-label">문서 조각<br />(Chunks)</span>
                </div>

                {/* 3. Query */}
                <div className="rr-node query-node" style={{ left: '240px', top: '240px' }}>
                    <div className="rr-icon-circle fill-primary">
                        <Icons.User size={36} />
                    </div>
                    <span className="rr-label title">사용자 질문<br />(Query)</span>
                </div>

                {/* 4. Embedding Model */}
                <div className="rr-node" style={{ left: '530px', top: '240px' }}>
                    <div className="rr-icon-circle primary-stroke">
                        <Icons.Binary size={28} />
                    </div>
                    <span className="rr-label">임베딩 모델<br />(Embedding model)</span>
                </div>

                {/* 5. Vector Database */}
                <div className="rr-node" style={{ left: '530px', top: '400px' }}>
                    <div className="rr-icon-circle primary-stroke">
                        <Icons.Database size={32} />
                    </div>
                    <span className="rr-label title">벡터 DB<br />(Vector Database)</span>
                </div>

                {/* 6. Retrieved Context */}
                <div className="rr-box doc-box" style={{ left: '680px', top: '460px' }}>
                    <Icons.FileSearch size={24} color="var(--primary)" />
                    <span className="box-text">1차 검색 문서<br />(Retrieved context)</span>
                </div>

                {/* 7. Reranker Model */}
                <div className="rr-node" style={{ left: '530px', top: '550px' }}>
                    <div className="rr-icon-circle primary-stroke">
                        <Icons.ListOrdered size={28} />
                    </div>
                    <span className="rr-label title">리랭커 모델<br />(Reranker model)</span>
                </div>

                {/* 8. Re-ranked Context */}
                <div className="rr-box doc-box highlight" style={{ left: '680px', top: '630px' }}>
                    <Icons.CheckSquare size={24} color="var(--primary)" />
                    <span className="box-text">최적화된 문맥<br />(Re-ranked context)</span>
                </div>

                {/* 9. Prompt Template */}
                <div className="rr-node" style={{ left: '530px', top: '760px' }}>
                    <div className="rr-icon-circle primary-stroke">
                        <Icons.Terminal size={28} />
                    </div>
                    <span className="rr-label">프롬프트 템플릿<br />(Prompt template)</span>
                </div>

                {/* 10. Generative Model */}
                <div className="rr-node" style={{ left: '240px', top: '760px' }}>
                    <div className="rr-icon-circle fill-primary">
                        <Icons.Bot size={36} />
                    </div>
                    <span className="rr-label title">생성 모델<br />(Generative model)</span>
                </div>

                {/* 11. Response */}
                <div className="rr-node" style={{ left: '240px', top: '560px' }}>
                    <div className="rr-icon-circle primary-stroke">
                        <Icons.MessageSquare size={28} />
                    </div>
                    <span className="rr-label title">최종 답변<br />(Response)</span>
                </div>

            </div>
        </div>
    );
};

export default RerankingDiagram;
