import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import * as Icons from 'lucide-react';
import { KNOWLEDGE_DATA } from '../data/knowledge';
import NodeEdgeFlowchart from '../components/NodeEdgeFlowchart';
import './Detail.css';
import MCPDiagram from '../components/MCPDiagram';
import RAGDiagram from '../components/RAGDiagram';
import AgentDiagram from '../components/AgentDiagram';
import RerankingDiagram from '../components/RerankingDiagram';
import ElasticDiagram from '../components/ElasticDiagram';

const COMPONENT_REGISTRY = {
    'NodeEdgeFlowchart': NodeEdgeFlowchart,
    'MCPDiagram': MCPDiagram,
    'RAGDiagram': RAGDiagram,
    'AgentDiagram': AgentDiagram,
    'RerankingDiagram': RerankingDiagram,
    'ElasticDiagram': ElasticDiagram
};

const CodeBlock = ({ content }) => {
    const [isCopied, setIsCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(content);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
    };

    return (
        <div className="faq-answer-code-block">
            <div className="code-header">
                <span>코드</span>
                <button
                    className="code-copy-btn"
                    onClick={handleCopy}
                    title="Copy code"
                >
                    {isCopied ? <Icons.Check size={16} color="#10B981" /> : <Icons.Copy size={16} />}
                </button>
            </div>
            <pre>{content}</pre>
        </div>
    );
};

const Detail = () => {
    const { id } = useParams();
    const currentIndex = KNOWLEDGE_DATA.findIndex(item => item.id === id);
    const data = KNOWLEDGE_DATA[currentIndex];
    const [openFaq, setOpenFaq] = useState(null); // 기본적으로 닫힌 상태 유지

    // 이전/다음 키워드
    const prevItem = currentIndex > 0 ? KNOWLEDGE_DATA[currentIndex - 1] : null;
    const nextItem = currentIndex < KNOWLEDGE_DATA.length - 1 ? KNOWLEDGE_DATA[currentIndex + 1] : null;

    // 페이지 이동 시 FAQ 상태 초기화 및 스크롤 최상단 이동
    React.useEffect(() => {
        setOpenFaq(null);
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, [id]);

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    if (!data) return <div className="detail-error">Concept not found</div>;

    const Icon = Icons[data.icon] || Icons.HelpCircle;

    return (
        <div className="detail-container">
            <header className="detail-hero">
                <div className="detail-title-group">
                    <div className="detail-head-top">
                        <Link to="/" className="back-link">
                            <Icons.ChevronLeft size={22} />
                        </Link>
                        <span className="detail-category">{data.mainTheme}</span>
                    </div>
                    <div className="detail-title-row">
                        <h1 className="detail-title">{data.enTitle}</h1>
                        <span className="detail-subtitle">{data.koTitle}</span>
                    </div>
                    <div className="detail-title-row-meta">
                        <div className="detail-icon-pill">
                            <Icon size={15} />
                            <span className="detail-hover-badge">{data.hoverText}</span>
                        </div>
                        {data.relatedKeywords && data.relatedKeywords.length > 0 && (
                            <div className="header-related-chips">
                                {data.relatedKeywords.map((relatedId, idx) => {
                                    const relatedItem = KNOWLEDGE_DATA.find(k => k.id === relatedId);
                                    if (!relatedItem) return null;
                                    const ChipIcon = Icons[relatedItem.icon] || Icons.Hash;
                                    return (
                                        <Link to={`/detail/${relatedItem.id}`} key={idx} className="related-chip-link">
                                            <div className="related-chip">
                                                <ChipIcon size={14} className="related-chip-icon" />
                                                <span className="related-chip-text">{relatedItem.enTitle}</span>
                                            </div>
                                        </Link>
                                    );
                                })}
                            </div>
                        )}
                    </div>
                </div>
            </header>

            <main className="detail-main-content">
                <section className="detail-card">
                    <h3>개념 설명</h3>
                    <div className="description-rich-text">
                        {data.description}
                    </div>
                    <div className="full-content-box">
                        {data.fullContent}
                    </div>
                </section>

                <section className="detail-card point">
                    <h3>중요 포인트</h3>
                    <ul className="point-list">
                        {data.bullets.map((bullet, idx) => (
                            <li key={idx}>
                                <Icons.CheckCircle2 size={16} className="point-icon" />
                                <span>{bullet}</span>
                            </li>
                        ))}
                    </ul>
                </section>

                {data.diagram && (
                    <section className="detail-card diagram">
                        <h3>구조도 및 데이터 흐름</h3>
                        {COMPONENT_REGISTRY[data.diagram] ? (
                            React.createElement(COMPONENT_REGISTRY[data.diagram])
                        ) : null}
                    </section>
                )}
            </main>

            {data.faqs && data.faqs.length > 0 && (
                <section className="detail-faq-section">
                    <h2 className="faq-main-title">자주 묻는 질문</h2>
                    <div className="faq-list">
                        {data.faqs.map((faq, idx) => (
                            <div key={idx} className={`faq-item ${openFaq === idx ? 'active' : ''}`}>
                                <button
                                    className="faq-question"
                                    onClick={() => toggleFaq(idx)}
                                    type="button"
                                >
                                    <span>{faq.question}</span>
                                    <Icons.ChevronDown size={20} className="faq-arrow" />
                                </button>
                                <div className="faq-answer-wrapper">
                                    <div className="faq-answer">
                                        {faq.answerBlocks && faq.answerBlocks.map((block, bIdx) => {
                                            if (block.type === 'header') return <div key={bIdx} className="faq-answer-header">{block.content}</div>;
                                            if (block.type === 'desc') return <div key={bIdx} className="faq-answer-desc">{block.content}</div>;
                                            if (block.type === 'summary') return <div key={bIdx} className="faq-answer-summary">{block.content}</div>;
                                            if (block.type === 'table') return (
                                                <div key={bIdx} className="faq-answer-table-wrapper">
                                                    <table>
                                                        <thead>
                                                            <tr>
                                                                {block.content.headers.map((h, hIdx) => <th key={hIdx}>{h}</th>)}
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {block.content.rows.map((row, rIdx) => (
                                                                <tr key={rIdx}>
                                                                    {row.map((cell, cIdx) => <td key={cIdx}>{cell}</td>)}
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            );
                                            if (block.type === 'image') return (
                                                <div key={bIdx} className="faq-answer-image-wrapper">
                                                    <img src={block.content} alt="Flowchart" className="faq-answer-image" />
                                                </div>
                                            );
                                            if (block.type === 'code') return <CodeBlock key={bIdx} content={block.content} />;
                                            if (block.type === 'component') {
                                                const Component = COMPONENT_REGISTRY[block.content];
                                                return Component ? <Component key={bIdx} /> : null;
                                            }
                                            return <div key={bIdx} className="faq-answer-text">{block.content}</div>;
                                        })}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            )}



            {/* 이전/다음 키워드 네비게이션 */}
            <nav className="keyword-nav">
                <div className="keyword-nav-inner">
                    {prevItem ? (
                        <Link to={`/detail/${prevItem.id}`} className="keyword-nav-btn keyword-nav-prev">
                            <Icons.ChevronLeft size={16} className="keyword-nav-arrow" />
                            <div className="keyword-nav-content">
                                <span className="keyword-nav-label">이전 키워드</span>
                                <span className="keyword-nav-title">{prevItem.enTitle}</span>
                            </div>
                        </Link>
                    ) : <div className="keyword-nav-empty" />}

                    {prevItem && nextItem && <div className="keyword-nav-divider" />}

                    {nextItem ? (
                        <Link to={`/detail/${nextItem.id}`} className="keyword-nav-btn keyword-nav-next">
                            <div className="keyword-nav-content">
                                <span className="keyword-nav-label">다음 키워드</span>
                                <span className="keyword-nav-title">{nextItem.enTitle}</span>
                            </div>
                            <Icons.ChevronRight size={16} className="keyword-nav-arrow" />
                        </Link>
                    ) : <div className="keyword-nav-empty" />}
                </div>
            </nav>
        </div>
    );
};

export default Detail;
