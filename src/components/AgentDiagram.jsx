import React from 'react';
import * as Icons from 'lucide-react';
import './AgentDiagram.css';

const MovingArrow = ({ pathId, dur }) => (
    <polygon points="-4,-4 5,0 -4,4" className="agent-particle">
        <animateMotion dur={dur} repeatCount="indefinite" rotate="auto">
            <mpath href={`#${pathId}`} />
        </animateMotion>
    </polygon>
);

const AgentDiagram = () => {
    return (
        <div className="agent-diagram-wrapper">
            <div className="agent-layout-grid">
                {/* SVG Overlay for Connections */}
                <svg className="agent-svg-overlay" viewBox="0 0 800 520" preserveAspectRatio="xMidYMid meet">
                    {/* Paths */}
                    <path id="path_human_auto" d="M 150 115 L 150 225" className="agent-line" />
                    <path id="path_agent_auto" d="M 360 260 L 185 260" className="agent-line" />
                    <path id="path_agent_delegate" d="M 400 220 L 400 115" className="agent-line" />
                    <path id="path_agent_memory" d="M 425 240 L 620 110" className="agent-line" />
                    <path id="path_agent_tools" d="M 440 260 L 525 260" className="agent-line" />
                    <path id="path_env_agent" d="M 625 410 Q 550 350 430 280" className="agent-line" />
                    <path id="path_reactivity_env" d="M 435 440 L 615 440" className="agent-line" />
                    <path id="path_agent_reactivity" d="M 400 295 L 400 405" className="agent-line" />
                    <path id="path_reasoning_auto" d="M 280 440 Q 340 440 400 350" className="agent-line" />

                    {/* Animated Particles */}
                    <MovingArrow pathId="path_human_auto" dur="2s" />
                    <MovingArrow pathId="path_agent_auto" dur="2s" />
                    <MovingArrow pathId="path_agent_delegate" dur="2s" />
                    <MovingArrow pathId="path_agent_memory" dur="2.5s" />
                    <MovingArrow pathId="path_agent_tools" dur="2s" />
                    <MovingArrow pathId="path_env_agent" dur="3s" />
                    <MovingArrow pathId="path_reactivity_env" dur="2s" />
                    <MovingArrow pathId="path_agent_reactivity" dur="2s" />
                    <MovingArrow pathId="path_reasoning_auto" dur="2.5s" />

                    {/* SVG Labels */}
                    <text x="160" y="170" className="agent-line-label">자율성 수준</text>
                    <text x="510" y="150" className="agent-line-label" transform="rotate(-32, 510, 150)">접근 및 저장</text>
                    <text x="450" y="250" className="agent-line-label">도구 호출</text>
                    <text x="500" y="430" className="agent-line-label">실제 행동</text>
                    <text x="540" y="340" className="agent-line-label" transform="rotate(-25, 540, 340)">관찰 및 결과 인식</text>
                </svg>

                {/* 1. Human Control */}
                <div className="agent-node" style={{ left: '150px', top: '80px' }}>
                    <div className="agent-icon-circle primary-stroke">
                        <Icons.User size={24} />
                    </div>
                    <span className="agent-label">인간 통제(목표부여)</span>
                </div>

                {/* 2. Autonomous Action */}
                <div className="agent-node" style={{ left: '150px', top: '260px' }}>
                    <div className="agent-icon-circle primary-stroke">
                        <Icons.RotateCw size={24} />
                    </div>
                    <span className="agent-label">자율 단계별 목표 처리</span>
                </div>

                {/* 3. AI Agent */}
                <div className="agent-node" style={{ left: '400px', top: '260px' }}>
                    <div className="agent-icon-circle agent-bot-icon">
                        <Icons.Bot size={36} />
                    </div>
                    <span className="agent-label title">AI Agent</span>
                </div>

                {/* 4. Delegate Tasks */}
                <div className="agent-node" style={{ left: '400px', top: '80px' }}>
                    <div className="agent-icon-circle primary-stroke">
                        <Icons.Network size={24} />
                    </div>
                    <span className="agent-label">작업 분해 및 위임</span>
                </div>

                {/* 5. Memory */}
                <div className="agent-node" style={{ left: '650px', top: '80px' }}>
                    <div className="agent-icon-circle primary-stroke">
                        <Icons.Brain size={24} />
                    </div>
                    <span className="agent-label">과거 대화 기억</span>
                </div>

                {/* 6. Reactivity */}
                <div className="agent-node" style={{ left: '400px', top: '440px' }}>
                    <div className="agent-icon-circle primary-stroke">
                        <Icons.Settings size={24} />
                    </div>
                    <span className="agent-label">상황 인지 및 분석 (Reactivity)</span>
                </div>

                {/* 7. Environment */}
                <div className="agent-node" style={{ left: '650px', top: '440px' }}>
                    <div className="agent-icon-circle" style={{ background: 'var(--primary)', color: 'white', borderColor: 'var(--primary)' }}>
                        <Icons.Cloud size={24} />
                    </div>
                    <span className="agent-label">주변 환경 및 시스템</span>
                </div>

                {/* 8. Tools Box */}
                <div className="agent-box tools-box" style={{ left: '650px', top: '260px' }}>
                    <div className="tools-badge">Tools</div>
                    <div className="tools-grid">
                        <div className="tool-item">
                            <Icons.CloudCog size={20} color="var(--primary)" />
                            <span>API Calls</span>
                        </div>
                        <div className="tool-item">
                            <Icons.Globe size={20} color="var(--primary)" />
                            <span style={{ textAlign: 'center' }}>인터넷 검색</span>
                        </div>
                        <div className="tool-item wide">
                            <Icons.CodeXml size={20} color="var(--primary)" />
                            <span style={{ textAlign: 'center' }}>코드 파싱 및 실행</span>
                        </div>
                    </div>
                </div>

                {/* 9. Reasoning Box */}
                <div className="agent-box reasoning-box" style={{ left: '200px', top: '440px' }}>
                    추론 및 자율 액션 루프<br />(ReAct, Plan-and-Solve)
                </div>

            </div>
        </div>
    );
};

export default AgentDiagram;
