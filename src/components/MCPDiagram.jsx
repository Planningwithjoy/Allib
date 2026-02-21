import React from 'react';
import * as Icons from 'lucide-react';
import './MCPDiagram.css';

const MCPDiagram = () => {
    return (
        <div className="mcp-diagram-wrapper">
            <div className="mcp-diagram-container">
                {/* 1. MCP Host Section */}
                <div className="mcp-column host">
                    <div className="mcp-label">MCP Host</div>
                    <div className="mcp-box-group">
                        <div className="mcp-box">
                            <Icons.Monitor size={24} />
                            <span>Claude Desktop</span>
                        </div>
                        <div className="mcp-box">
                            <Icons.Code2 size={24} />
                            <span>IDE</span>
                        </div>
                        <div className="mcp-box">
                            <Icons.Box size={24} />
                            <span>AI Tools</span>
                        </div>
                    </div>
                </div>

                {/* Flow 1 */}
                <div className="mcp-flow-separator">
                    <div className="mcp-flow-line active">
                        <div className="mcp-particle"></div>
                    </div>
                </div>

                {/* 2. MCP Client Section */}
                <div className="mcp-column client">
                    <div className="mcp-label">MCP Client</div>
                    <div className="mcp-client-block-wrapper">
                        <div className="mcp-box single highlight">
                            <Icons.Zap size={24} />
                            <span>MCP Client</span>
                        </div>
                    </div>
                </div>

                {/* Flow 2 */}
                <div className="mcp-flow-separator">
                    <div className="mcp-flow-line active">
                        <div className="mcp-particle delay-1"></div>
                    </div>
                </div>

                {/* 3. MCP Server Section */}
                <div className="mcp-column server">
                    <div className="mcp-label">MCP Server</div>
                    <div className="mcp-box-group">
                        <div className="mcp-box secondary">
                            <Icons.Server size={20} />
                            <span>Server A</span>
                        </div>
                        <div className="mcp-box secondary">
                            <Icons.Server size={20} />
                            <span>Server B</span>
                        </div>
                        <div className="mcp-box secondary">
                            <Icons.Server size={20} />
                            <span>Server C</span>
                        </div>
                    </div>
                </div>

                {/* Flow 3 */}
                <div className="mcp-flow-separator">
                    <div className="mcp-flow-line active dashed">
                        <div className="mcp-particle delay-2"></div>
                    </div>
                </div>

                {/* 4. Resources Section */}
                <div className="mcp-column resources">
                    <div className="mcp-label">Resources</div>
                    <div className="mcp-resources-grid">
                        <div className="resource-item">
                            <Icons.Github size={20} />
                            <span>Github</span>
                        </div>
                        <div className="resource-item">
                            <Icons.Slack size={20} />
                            <span>Slack</span>
                        </div>
                        <div className="resource-item">
                            <Icons.Database size={20} />
                            <span>Database</span>
                        </div>
                        <div className="resource-item">
                            <Icons.FolderTree size={20} />
                            <span>Filesystem</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mcp-diagram-legend">
                <span className="legend-item"><span className="dot active"></span> Data Flow / Protocol</span>
                <span className="legend-item"><span className="dot standard"></span> Standard Interface</span>
            </div>
        </div>
    );
};

export default MCPDiagram;
