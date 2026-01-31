import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import * as Icons from 'lucide-react';
import { KNOWLEDGE_DATA } from '../data/knowledge';
import NodeEdgeFlowchart from '../components/NodeEdgeFlowchart';
import './Detail.css';

const COMPONENT_REGISTRY = {
    'NodeEdgeFlowchart': NodeEdgeFlowchart
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
    const data = KNOWLEDGE_DATA.find(item => item.id === id);
    const [openFaq, setOpenFaq] = useState(null); // 기본적으로 닫힌 상태 유지

    // 페이지 이동 시 FAQ 상태 초기화
    React.useEffect(() => {
        setOpenFaq(null);
    }, [id]);

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    if (!data) return <div className="detail-error">Concept not found</div>;

    const Icon = Icons[data.icon] || Icons.HelpCircle;

    return (
        <div className="detail-container">
            <Link to="/" className="back-link">
                <Icons.ChevronLeft size={20} />
                <span>Back to Library</span>
            </Link>

            <header className="detail-hero">
                <div className="detail-title-group">
                    <div className="detail-head-top">
                        <div className="detail-icon-box">
                            <Icon size={24} />
                        </div>
                        <div className="detail-meta-group">
                            <div className="detail-meta-top">
                                <span className="detail-category">{data.mainTheme}</span>
                            </div>
                            <div className="detail-chip-container">
                                <div className="detail-chip">
                                    <span className="chip-text">{data.hoverText}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="detail-title-row">
                        <h1 className="detail-title">{data.enTitle}</h1>
                        <span className="detail-subtitle">{data.koTitle}</span>
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
                    <h3>기획 시 적용 포인트 및 고민 지점</h3>
                    <ul className="point-list">
                        {data.bullets.map((bullet, idx) => (
                            <li key={idx}>
                                <Icons.CheckCircle2 size={16} className="point-icon" />
                                <span>{bullet}</span>
                            </li>
                        ))}
                    </ul>
                </section>
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
        </div>
    );
};

export default Detail;
