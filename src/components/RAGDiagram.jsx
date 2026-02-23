import React from 'react';
import * as Icons from 'lucide-react';
import './RAGDiagram.css';

const RAGDiagram = () => {
    return (
        <div className="rag-diagram-wrapper">
            <div className="rag-layout-grid">
                {/* Left: User */}
                <div className="rag-section section-user">
                    <div className="rag-label">User</div>
                    <div className="rag-user-node">
                        <Icons.User size={32} />
                    </div>
                </div>

                {/* Arrow 1: User -> Center */}
                <div className="rag-arrow-horizontal">
                    <div className="rag-arrow-label">
                        <span className="rag-step-badge">1</span>
                        User Query
                    </div>
                    <div className="rag-arrow-line active">
                        <div className="rag-particle horizontal"></div>
                    </div>
                </div>

                {/* Center: Retriever + KB */}
                <div className="rag-section section-center">

                    {/* Retriever Box */}
                    <div className="rag-box highlight retriever-box">
                        <Icons.Search size={22} strokeWidth={2} />
                        <span>Retriever</span>
                    </div>

                    {/* Vertical Flow (Steps 2 & 3) */}
                    <div className="rag-vertical-flow">
                        <div className="rag-vertical-arrow down">
                            <span className="rag-step-badge">2</span>
                            <div className="arrow-line active">
                                <div className="rag-particle vertical-down"></div>
                            </div>
                            <span className="arrow-text">Retriever fetches info</span>
                        </div>
                        <div className="rag-vertical-arrow up">
                            <span className="rag-step-badge">3</span>
                            <div className="arrow-line active">
                                <div className="rag-particle vertical-up delay-1"></div>
                            </div>
                            <span className="arrow-text">Return documents</span>
                        </div>
                    </div>

                    {/* Knowledge Base Box */}
                    <div className="rag-box secondary kb-box">
                        <div className="rag-kb-header">
                            <Icons.Database size={16} />
                            <span>Knowledge Base</span>
                        </div>
                        <div className="rag-kb-icons">
                            <Icons.FileText size={14} />
                            <Icons.Code size={14} />
                            <Icons.Table size={14} />
                        </div>
                    </div>
                </div>

                {/* Arrow 4: Center -> LLM */}
                <div className="rag-arrow-horizontal">
                    <div className="rag-arrow-label">
                        <span className="rag-step-badge">4</span>
                        Query + Docs
                    </div>
                    <div className="rag-arrow-line active">
                        <div className="rag-particle horizontal delay-2"></div>
                    </div>
                </div>

                {/* Right: LLM */}
                <div className="rag-section section-llm">
                    <div className="rag-label">LLM</div>
                    <div className="rag-box highlight llm-box">
                        <Icons.Bot size={28} strokeWidth={2} />
                        <span>LLM Generation</span>
                        <div className="llm-subtext">GPT / Gemini / Claude</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RAGDiagram;
