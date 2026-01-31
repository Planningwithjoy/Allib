import React from 'react';
import './NodeEdgeFlowchart.css';

const NodeEdgeFlowchart = () => {
    return (
        <div className="flowchart-wrapper">
            <div className="flowchart-container">
                <div className="flowchart-main-row">
                    {/* Step 1 */}
                    <div className="flowchart-node">질문 분석</div>

                    {/* Edge */}
                    <div className="edge-container">
                        <div className="edge-line"></div>
                        <span className="edge-label">검색 필요</span>
                        <div className="arrow-right"></div>
                    </div>

                    {/* Step 2 */}
                    <div className="flowchart-node">문서 검색</div>

                    {/* Edge */}
                    <div className="edge-container">
                        <div className="edge-line"></div>
                        <span className="edge-label">정보 충분</span>
                        <div className="arrow-right"></div>
                    </div>

                    {/* Step 3 */}
                    <div className="flowchart-node">답변 생성</div>

                    {/* End Arrow */}
                    <div className="simple-arrow">➔</div>

                    {/* End */}
                    <div className="flowchart-node end">종료</div>
                </div>

                {/* Loop branch below */}
                <div className="flowchart-loop-row">
                    <div className="loop-spacer"></div>
                    <div className="loop-branch">
                        <div className="loop-line-down"></div>
                        <span className="edge-label">정보 부족</span>
                        <div className="flowchart-node loop">재검색</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NodeEdgeFlowchart;
