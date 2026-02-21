import React, { useEffect, useRef, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { KNOWLEDGE_DATA, CATEGORIES } from '../data/knowledge';
import './Map.css';

// ─── 봄 테마 카테고리 색상 ────────────────────────────────────────
const CATEGORY_COLORS = {
    '지식·이해': { node: '#00B5CC', glow: 'rgba(0,181,204,0.28)', label: '#0094AB' },
    '처리·실행': { node: '#5DBB63', glow: 'rgba(93,187,99,0.28)', label: '#3E9E44' },
    '연결·확장': { node: '#FF7E6B', glow: 'rgba(255,126,107,0.28)', label: '#E85D48' },
    'UX·운영': { node: '#BA6FCB', glow: 'rgba(186,111,203,0.28)', label: '#9B4DB0' },
};

// ─── 그래프 데이터 빌드 ────────────────────────────────────────────
function buildGraph() {
    const nodes = KNOWLEDGE_DATA.map((item) => ({
        id: item.id,
        label: item.enTitle,
        koLabel: item.koTitle,
        category: item.mainTheme,
        relatedKeywords: item.relatedKeywords || [],
        connections: 0,
        x: 0, y: 0, vx: 0, vy: 0,
        pinned: false,
    }));

    const nodeMap = {};
    nodes.forEach((n) => (nodeMap[n.id] = n));

    const edgeSet = new Set();
    const edges = [];
    const adjacency = {};

    KNOWLEDGE_DATA.forEach((item) => {
        if (!item.relatedKeywords) return;
        adjacency[item.id] = adjacency[item.id] || new Set();
        item.relatedKeywords.forEach((targetId) => {
            if (!nodeMap[targetId]) return;
            const key = [item.id, targetId].sort().join('--');
            if (!edgeSet.has(key)) {
                edgeSet.add(key);
                edges.push({ source: item.id, target: targetId });
                nodeMap[item.id].connections++;
                nodeMap[targetId].connections++;
            }
            adjacency[item.id].add(targetId);
            adjacency[targetId] = adjacency[targetId] || new Set();
            adjacency[targetId].add(item.id);
        });
    });

    return { nodes, edges, nodeMap, adjacency };
}

// ─── 초기 레이아웃 (강한 반발력으로 충분한 간격 확보) ──────────────
function initLayout(nodes, edges, nodeMap, W, H) {
    const cx = W / 2, cy = H / 2;
    const catList = CATEGORIES.map((c) => c.name);
    nodes.forEach((n) => {
        const idx = catList.indexOf(n.category);
        const angle = (idx / catList.length) * Math.PI * 2 + Math.random() * 1.0;
        const r = 80 + Math.random() * 240;
        n.x = cx + Math.cos(angle) * r;
        n.y = cy + Math.sin(angle) * r;
        n.vx = n.vy = 0;
    });

    // 더 넓게 퍼지도록 강한 반발력 + 긴 자연 거리
    const REPULSION = 5500;
    const LINK_DIST = 190;
    const LINK_STR = 0.04;
    const GRAVITY = 0.015;
    const DAMPING = 0.80;

    for (let iter = 0; iter < 350; iter++) {
        for (let i = 0; i < nodes.length; i++) {
            for (let j = i + 1; j < nodes.length; j++) {
                const a = nodes[i], b = nodes[j];
                const dx = b.x - a.x || 0.01, dy = b.y - a.y || 0.01;
                const dist = Math.sqrt(dx * dx + dy * dy) || 1;
                const f = REPULSION / (dist * dist);
                const fx = (dx / dist) * f, fy = (dy / dist) * f;
                a.vx -= fx; a.vy -= fy;
                b.vx += fx; b.vy += fy;
            }
        }
        edges.forEach(({ source, target }) => {
            const a = nodeMap[source], b = nodeMap[target];
            if (!a || !b) return;
            const dx = b.x - a.x, dy = b.y - a.y;
            const dist = Math.sqrt(dx * dx + dy * dy) || 1;
            const diff = (dist - LINK_DIST) * LINK_STR;
            const fx = (dx / dist) * diff, fy = (dy / dist) * diff;
            a.vx += fx; a.vy += fy;
            b.vx -= fx; b.vy -= fy;
        });
        nodes.forEach((n) => {
            n.vx += (cx - n.x) * GRAVITY;
            n.vy += (cy - n.y) * GRAVITY;
            n.vx *= DAMPING; n.vy *= DAMPING;
            n.x += n.vx; n.y += n.vy;
        });
    }

    // 초기 위치 스냅샷 저장
    return nodes.map((n) => ({ id: n.id, x: n.x, y: n.y }));
}

function nodeRadius(n) { return 5 + n.connections * 1.4; }

// ─── Map Component ────────────────────────────────────────────────
const Map = () => {
    const canvasRef = useRef(null);
    const stateRef = useRef({
        nodes: [], edges: [], nodeMap: {}, adjacency: {},
        initialPositions: [],         // 리셋용
        transform: { x: 0, y: 0, scale: 1 },
        panDrag: null,
        nodeDrag: null,
        mouseDownPos: null,
        hoveredNode: null,
        selectedNode: null,
        animFrame: null,
        dpr: 1,
    });
    const [tooltip, setTooltip] = useState(null);
    const [selectedNode, setSelectedNode] = useState(null);
    const [filterCat, setFilterCat] = useState(null);
    const filterCatRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => { filterCatRef.current = filterCat; }, [filterCat]);

    // ── Canvas 초기화 ────────────────────────────────────────────
    const initCanvas = useCallback(() => {
        const canvas = canvasRef.current;
        if (!canvas) return { W: 0, H: 0 };
        const dpr = window.devicePixelRatio || 1;
        stateRef.current.dpr = dpr;
        const W = canvas.offsetWidth, H = canvas.offsetHeight;
        canvas.width = W * dpr; canvas.height = H * dpr;
        canvas.style.width = W + 'px'; canvas.style.height = H + 'px';
        return { W, H };
    }, []);

    useEffect(() => {
        const { W, H } = initCanvas();
        if (!W) return;

        const { nodes, edges, nodeMap, adjacency } = buildGraph();
        const initialPositions = initLayout(nodes, edges, nodeMap, W, H);

        const s = stateRef.current;
        s.nodes = nodes; s.edges = edges; s.nodeMap = nodeMap; s.adjacency = adjacency;
        s.initialPositions = initialPositions;
        s.transform = { x: 0, y: 0, scale: 1 };

        // Wheel (passive: false)
        const canvas = canvasRef.current;
        const onWheel = (e) => {
            e.preventDefault();
            const rect = canvas.getBoundingClientRect();
            const cx = e.clientX - rect.left, cy = e.clientY - rect.top;
            const factor = e.deltaY > 0 ? 0.88 : 1.12;
            const ns = Math.min(5, Math.max(0.15, s.transform.scale * factor));
            s.transform.x = cx - (cx - s.transform.x) * (ns / s.transform.scale);
            s.transform.y = cy - (cy - s.transform.y) * (ns / s.transform.scale);
            s.transform.scale = ns;
        };
        canvas.addEventListener('wheel', onWheel, { passive: false });

        // Touch (passive: false → e.preventDefault() 실제 작동)
        const onTouchStart = (e) => {
            if (e.touches.length === 1) {
                const t = e.touches[0];
                const rect = canvas.getBoundingClientRect();
                const cx = t.clientX - rect.left, cy = t.clientY - rect.top;
                const { wx, wy } = toWorld(cx, cy);
                const hit = hitTest(wx, wy);
                s.mouseDownPos = { x: cx, y: cy };
                if (hit) {
                    e.preventDefault(); // 노드 터치 시 즉시 스크롤 차단
                    hit.pinned = true; hit.vx = 0; hit.vy = 0;
                    s.nodeDrag = { node: hit, moved: false };
                } else {
                    s.panDrag = { startX: cx, startY: cy, originX: s.transform.x, originY: s.transform.y };
                }
            } else if (e.touches.length === 2) {
                e.preventDefault();
                const dx = e.touches[0].clientX - e.touches[1].clientX;
                const dy = e.touches[0].clientY - e.touches[1].clientY;
                touchRef.current.lastDist = Math.sqrt(dx * dx + dy * dy);
                s.panDrag = null;
            }
        };
        const onTouchMove = (e) => {
            // 노드 드래그 또는 핀치/패닝 중엔 항상 스크롤 차단
            if (s.nodeDrag || s.panDrag || e.touches.length === 2) e.preventDefault();
            const rect = canvas.getBoundingClientRect();
            if (e.touches.length === 2) {
                const dx = e.touches[0].clientX - e.touches[1].clientX;
                const dy = e.touches[0].clientY - e.touches[1].clientY;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (touchRef.current.lastDist) {
                    const factor = dist / touchRef.current.lastDist;
                    const cx = (e.touches[0].clientX + e.touches[1].clientX) / 2 - rect.left;
                    const cy = (e.touches[0].clientY + e.touches[1].clientY) / 2 - rect.top;
                    const ns = Math.min(5, Math.max(0.15, s.transform.scale * factor));
                    s.transform.x = cx - (cx - s.transform.x) * (ns / s.transform.scale);
                    s.transform.y = cy - (cy - s.transform.y) * (ns / s.transform.scale);
                    s.transform.scale = ns;
                }
                touchRef.current.lastDist = dist;
            } else if (e.touches.length === 1) {
                const t = e.touches[0];
                const cx = t.clientX - rect.left, cy = t.clientY - rect.top;
                if (s.nodeDrag) {
                    const { wx, wy } = toWorld(cx, cy);
                    s.nodeDrag.node.x = wx; s.nodeDrag.node.y = wy;
                    s.nodeDrag.node.vx = 0; s.nodeDrag.node.vy = 0;
                    if (s.mouseDownPos) {
                        const dx = cx - s.mouseDownPos.x, dy = cy - s.mouseDownPos.y;
                        if (dx * dx + dy * dy > 16) s.nodeDrag.moved = true;
                    }
                } else if (s.panDrag) {
                    s.transform.x = s.panDrag.originX + (cx - s.panDrag.startX);
                    s.transform.y = s.panDrag.originY + (cy - s.panDrag.startY);
                }
            }
        };
        const onTouchEnd = (e) => {
            if (e.touches.length === 0) {
                if (s.nodeDrag) {
                    const nd = s.nodeDrag.node;
                    nd.pinned = false; nd.vx = 0; nd.vy = 0;
                    if (!s.nodeDrag.moved) { s.selectedNode = nd; setSelectedNode({ ...nd }); }
                    s.nodeDrag = null;
                }
                s.panDrag = null; s.mouseDownPos = null;
                touchRef.current.lastDist = null;
            }
        };
        canvas.addEventListener('touchstart', onTouchStart, { passive: false });
        canvas.addEventListener('touchmove', onTouchMove, { passive: false });
        canvas.addEventListener('touchend', onTouchEnd, { passive: true });

        // Render 루프
        const loop = () => {
            tickNeighbors();
            drawFrame();
            s.animFrame = requestAnimationFrame(loop);
        };
        s.animFrame = requestAnimationFrame(loop);

        return () => {
            if (s.animFrame) cancelAnimationFrame(s.animFrame);
            canvas.removeEventListener('wheel', onWheel);
            canvas.removeEventListener('touchstart', onTouchStart);
            canvas.removeEventListener('touchmove', onTouchMove);
            canvas.removeEventListener('touchend', onTouchEnd);
        };
    }, []);

    useEffect(() => {
        const onResize = () => initCanvas();
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, [initCanvas]);

    // ── 드래그 물리: position-based dynamics ─────────────────────
    // 매 프레임 vx/vy=0 리셋 → 속도 누적 없음 → 폭발 불가능
    const tickNeighbors = useCallback(() => {
        const s = stateRef.current;
        if (!s.nodeDrag) return;

        const nd = s.nodeDrag.node;
        const neighbors = s.adjacency[nd.id] || new Set();
        const LINK_DIST = 160;
        const SPRING_K = 0.04;
        const REPULSION = 400;   // 작은 값 — 이미 초기 배치가 잘 되어 있음
        const MAX_DISP = 1.5;   // 프레임당 최대 1.5px (hard cap)

        // ① 모든 노드 속도 리셋
        s.nodes.forEach((n) => { if (n !== nd) { n.vx = 0; n.vy = 0; } });

        // ② 이웃 spring (방향 수정: dist > LINK_DIST → 당겨옴)
        neighbors.forEach((bid) => {
            const b = s.nodeMap[bid];
            if (!b || b === nd) return;
            const dx = b.x - nd.x, dy = b.y - nd.y;
            const dist = Math.sqrt(dx * dx + dy * dy) || 1;
            const force = (dist - LINK_DIST) * SPRING_K;
            // MINUS: 멀면 당기고(negative dx 방향), 가까우면 밀어냄
            b.vx -= (dx / dist) * force;
            b.vy -= (dy / dist) * force;
        });

        // ③ 모든 비드래그 노드 쌍 반발 (180px 이내만)
        const movable = s.nodes.filter((n) => n !== nd);
        for (let i = 0; i < movable.length; i++) {
            for (let j = i + 1; j < movable.length; j++) {
                const a = movable[i], b = movable[j];
                const dx = b.x - a.x || 0.01, dy = b.y - a.y || 0.01;
                const dist = Math.sqrt(dx * dx + dy * dy) || 1;
                if (dist > 180) continue;
                const f = REPULSION / (dist * dist);
                const fx = (dx / dist) * f, fy = (dy / dist) * f;
                a.vx -= fx; a.vy -= fy;
                b.vx += fx; b.vy += fy;
            }
        }

        // ④ hard cap(1.5px) 후 위치 적용, vx/vy 재리셋
        movable.forEach((b) => {
            const spd = Math.sqrt(b.vx * b.vx + b.vy * b.vy);
            if (spd > MAX_DISP) { b.vx = b.vx / spd * MAX_DISP; b.vy = b.vy / spd * MAX_DISP; }
            b.x += b.vx; b.y += b.vy;
            b.vx = 0; b.vy = 0;
        });
    }, []);




    // ── 렌더 ─────────────────────────────────────────────────────
    const drawFrame = useCallback(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        const s = stateRef.current;
        const { nodes, edges, nodeMap, transform, hoveredNode, selectedNode: selNode, dpr } = s;
        const { x: tx, y: ty, scale } = transform;
        const fc = filterCatRef.current;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#F8FAFB';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.save();
        ctx.scale(dpr, dpr);
        ctx.translate(tx, ty);
        ctx.scale(scale, scale);

        const visNodes = fc ? nodes.filter((n) => n.category === fc) : nodes;
        const visIds = new Set(visNodes.map((n) => n.id));

        // ── Edges ──
        edges.forEach(({ source, target }) => {
            const a = nodeMap[source], b = nodeMap[target];
            if (!a || !b) return;
            if (fc && (!visIds.has(source) || !visIds.has(target))) return;

            const isHL = hoveredNode && (hoveredNode.id === source || hoveredNode.id === target);
            const isSel = selNode && (selNode.id === source || selNode.id === target);
            const dimmed = (selNode && !isSel) || (hoveredNode && !isHL && !isSel);

            ctx.globalAlpha = dimmed ? 0.08 : isHL || isSel ? 0.85 : 0.38;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = isHL || isSel ? CATEGORY_COLORS[a.category]?.node || '#00B5CC' : '#94A3B8';
            ctx.lineWidth = isHL || isSel ? 1.8 / scale : 1.0 / scale;
            ctx.stroke();
            ctx.globalAlpha = 1;
        });

        // ── Nodes (허브 우선 정렬 → 라벨 충돌 감지) ──
        const placedLabels = [];
        const sortedVis = [...visNodes].sort((a, b) => b.connections - a.connections);

        sortedVis.forEach((n) => {
            const r = nodeRadius(n);
            const col = CATEGORY_COLORS[n.category] || CATEGORY_COLORS['지식·이해'];
            const isHov = hoveredNode?.id === n.id;
            const isSel = selNode?.id === n.id;
            const dimmed = (selNode && !isSel) || (hoveredNode && !isHov && !isSel);

            ctx.globalAlpha = dimmed ? 0.2 : 1;

            // Glow
            if (isHov || isSel) {
                const grd = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, r * 3);
                grd.addColorStop(0, col.glow);
                grd.addColorStop(1, 'rgba(0,0,0,0)');
                ctx.beginPath();
                ctx.arc(n.x, n.y, r * 3, 0, Math.PI * 2);
                ctx.fillStyle = grd;
                ctx.fill();
            }

            // 원
            ctx.beginPath();
            ctx.arc(n.x, n.y, r, 0, Math.PI * 2);
            ctx.fillStyle = col.node;
            ctx.shadowColor = isHov || isSel ? col.node : 'transparent';
            ctx.shadowBlur = isHov || isSel ? 8 : 0;
            ctx.fill();
            ctx.strokeStyle = 'rgba(255,255,255,0.9)';
            ctx.lineWidth = 1.5 / scale;
            ctx.stroke();
            ctx.shadowBlur = 0;

            // 라벨: AABB 충돌 감지
            const showLabel = scale > 0.75 || isHov || isSel;
            if (showLabel) {
                const fs = Math.max(9, Math.min(12, 11 / scale));
                ctx.font = `${isSel || isHov ? '600' : '500'} ${fs}px "Pretendard","Apple SD Gothic Neo",sans-serif`;
                const lx = n.x;
                const ly = n.y + r + fs + 3;
                const lw = ctx.measureText(n.label).width + 12;
                const lh = fs + 6;

                const collides = !isHov && !isSel && placedLabels.some((p) =>
                    Math.abs(lx - p.x) < (lw + p.w) / 2 + 6 &&
                    Math.abs(ly - p.y) < (lh + p.h) / 2 + 4
                );

                if (!collides) {
                    placedLabels.push({ x: lx, y: ly, w: lw, h: lh });
                    ctx.fillStyle = isSel || isHov ? col.label : '#4B5563';
                    ctx.textAlign = 'center';
                    ctx.globalAlpha = dimmed ? 0.12 : isSel || isHov ? 1 : 0.72;
                    ctx.shadowColor = 'rgba(248,250,251,1)';
                    ctx.shadowBlur = 5;
                    ctx.fillText(n.label, lx, ly);
                    ctx.shadowBlur = 0;
                }
            }

            ctx.globalAlpha = 1;
        });

        ctx.restore();
    }, []);

    // ── 좌표 변환 / Hit Test ──────────────────────────────────────
    const toWorld = (cx, cy) => {
        const { x, y, scale } = stateRef.current.transform;
        return { wx: (cx - x) / scale, wy: (cy - y) / scale };
    };
    const hitTest = useCallback((wx, wy) => {
        const s = stateRef.current;
        const fc = filterCatRef.current;
        const pool = fc ? s.nodes.filter((n) => n.category === fc) : s.nodes;
        for (let i = pool.length - 1; i >= 0; i--) {
            const n = pool[i];
            if ((wx - n.x) ** 2 + (wy - n.y) ** 2 <= (nodeRadius(n) + 8) ** 2) return n;
        }
        return null;
    }, []);

    // ── Mouse ─────────────────────────────────────────────────────
    const handleMouseDown = (e) => {
        const rect = canvasRef.current.getBoundingClientRect();
        const cx = e.clientX - rect.left, cy = e.clientY - rect.top;
        const s = stateRef.current;
        const { wx, wy } = toWorld(cx, cy);
        const hit = hitTest(wx, wy);
        s.mouseDownPos = { x: cx, y: cy };

        if (hit) {
            hit.pinned = true;
            hit.vx = 0; hit.vy = 0;
            // 이웃 속도 초기화
            const nb = s.adjacency[hit.id] || new Set();
            s.nodes.forEach((n) => { if (nb.has(n.id)) { n.vx = 0; n.vy = 0; } });
            s.nodeDrag = { node: hit, moved: false };
            canvasRef.current.style.cursor = 'grabbing';
        } else {
            s.panDrag = { startX: cx, startY: cy, originX: s.transform.x, originY: s.transform.y };
            canvasRef.current.style.cursor = 'grabbing';
        }
    };

    const handleMouseMove = (e) => {
        const rect = canvasRef.current.getBoundingClientRect();
        const cx = e.clientX - rect.left, cy = e.clientY - rect.top;
        const s = stateRef.current;

        if (s.nodeDrag) {
            const { wx, wy } = toWorld(cx, cy);
            const nd = s.nodeDrag.node;
            nd.x = wx; nd.y = wy;
            nd.vx = 0; nd.vy = 0;
            if (s.mouseDownPos) {
                const dx = cx - s.mouseDownPos.x, dy = cy - s.mouseDownPos.y;
                if (dx * dx + dy * dy > 16) s.nodeDrag.moved = true;
            }
            setTooltip(null);
            return;
        }
        if (s.panDrag) {
            s.transform.x = s.panDrag.originX + (cx - s.panDrag.startX);
            s.transform.y = s.panDrag.originY + (cy - s.panDrag.startY);
            return;
        }
        const { wx, wy } = toWorld(cx, cy);
        const hit = hitTest(wx, wy);
        s.hoveredNode = hit;
        canvasRef.current.style.cursor = hit ? 'pointer' : 'grab';
        setTooltip(hit ? { x: e.clientX, y: e.clientY, node: hit } : null);
    };

    const handleMouseUp = (e) => {
        const s = stateRef.current;
        if (s.nodeDrag) {
            const nd = s.nodeDrag.node;
            nd.pinned = false;
            nd.vx = 0; nd.vy = 0;
            // 이웃 속도도 정리
            const nb = s.adjacency[nd.id] || new Set();
            s.nodes.forEach((n) => { if (nb.has(n.id)) { n.vx = 0; n.vy = 0; } });

            if (!s.nodeDrag.moved) {
                s.selectedNode = nd;
                setSelectedNode({ ...nd });
            }
            s.nodeDrag = null;
            canvasRef.current.style.cursor = 'grab';
        } else if (s.panDrag) {
            s.panDrag = null;
            canvasRef.current.style.cursor = 'grab';
        }
        s.mouseDownPos = null;
    };

    const handleMouseLeave = () => {
        const s = stateRef.current;
        if (s.nodeDrag) {
            s.nodeDrag.node.pinned = false;
            s.nodeDrag.node.vx = 0; s.nodeDrag.node.vy = 0;
            s.nodeDrag = null;
        }
        s.panDrag = s.hoveredNode = null;
        setTooltip(null);
        if (canvasRef.current) canvasRef.current.style.cursor = 'grab';
    };

    // ── Touch ─────────────────────────────────────────────────────
    const touchRef = useRef({});

    // ── Zoom / Reset ──────────────────────────────────────────────
    const zoom = (factor) => {
        const s = stateRef.current;
        const canvas = canvasRef.current;
        const cx = canvas.offsetWidth / 2, cy = canvas.offsetHeight / 2;
        const ns = Math.min(5, Math.max(0.15, s.transform.scale * factor));
        s.transform.x = cx - (cx - s.transform.x) * (ns / s.transform.scale);
        s.transform.y = cy - (cy - s.transform.y) * (ns / s.transform.scale);
        s.transform.scale = ns;
    };

    // 리셋: 저장된 초기 위치 복원 + transform 초기화
    const resetView = () => {
        const s = stateRef.current;
        s.initialPositions.forEach(({ id, x, y }) => {
            const n = s.nodeMap[id];
            if (n) { n.x = x; n.y = y; n.vx = 0; n.vy = 0; }
        });
        s.transform = { x: 0, y: 0, scale: 1 };
        s.selectedNode = null;
        setSelectedNode(null);
    };

    const closePanel = () => { stateRef.current.selectedNode = null; setSelectedNode(null); };

    const connectedNodes = selectedNode
        ? (KNOWLEDGE_DATA.find((d) => d.id === selectedNode.id)?.relatedKeywords || [])
        : [];

    return (
        <div className="map-page">
            <div className="map-header">
                <div className="map-header-left">
                    <h1 className="map-title">Knowledge Graph</h1>
                    <p className="map-subtitle">AI 키워드 관계도</p>
                </div>
                <div className="map-header-right">
                    <span className="map-stat">{stateRef.current.nodes.length} 노드</span>
                    <span className="map-stat">{stateRef.current.edges.length} 연결</span>
                </div>
            </div>

            <div className="map-filter-bar">
                <button className={`map-filter-btn ${!filterCat ? 'active all' : ''}`} onClick={() => setFilterCat(null)}>전체</button>
                {CATEGORIES.map((cat) => (
                    <button
                        key={cat.id}
                        className={`map-filter-btn ${filterCat === cat.name ? 'active' : ''}`}
                        style={{ '--cat-color': CATEGORY_COLORS[cat.name]?.node }}
                        onClick={() => setFilterCat(filterCat === cat.name ? null : cat.name)}
                    >
                        <span className="map-filter-dot" style={{ background: CATEGORY_COLORS[cat.name]?.node }} />
                        {cat.name}
                    </button>
                ))}
            </div>

            <div className="map-canvas-wrapper">
                <canvas
                    ref={canvasRef}
                    className="map-canvas"
                    onMouseMove={handleMouseMove}
                    onMouseDown={handleMouseDown}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseLeave}
                />

                <div className="map-zoom-controls">
                    <button className="map-zoom-btn" onClick={() => zoom(1.25)} title="확대">+</button>
                    <button className="map-zoom-btn" onClick={() => zoom(0.8)} title="축소">−</button>
                    <button className="map-zoom-btn reset" onClick={resetView} title="초기화">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                            <path d="M3 3v5h5" />
                        </svg>
                    </button>
                </div>



                <div className="map-hint">스크롤로 줌 · 드래그로 이동 · 노드 클릭으로 상세보기</div>
            </div>

            {tooltip && !selectedNode && (
                <div className="map-tooltip" style={{ left: tooltip.x + 14, top: tooltip.y - 10 }}>
                    <span className="map-tooltip-en">{tooltip.node.label}</span>
                    <span className="map-tooltip-ko">{tooltip.node.koLabel}</span>
                    <span className="map-tooltip-cat" style={{ color: CATEGORY_COLORS[tooltip.node.category]?.node }}>
                        {tooltip.node.category}
                    </span>
                </div>
            )}

            {selectedNode && (
                <div className="map-panel">
                    <button className="map-panel-close" onClick={closePanel}>✕</button>
                    <div className="map-panel-cat" style={{ color: CATEGORY_COLORS[selectedNode.category]?.node }}>
                        {selectedNode.category}
                    </div>
                    <h2 className="map-panel-title">{selectedNode.label}</h2>
                    <p className="map-panel-ko">{selectedNode.koLabel}</p>
                    <div className="map-panel-stat">연결 수 <strong>{selectedNode.connections}</strong></div>

                    {connectedNodes.length > 0 && (
                        <div className="map-panel-related">
                            <div className="map-panel-section-title">연관 키워드</div>
                            <div className="map-panel-chips">
                                {connectedNodes.map((rid) => {
                                    const rn = stateRef.current.nodeMap[rid];
                                    if (!rn) return null;
                                    return (
                                        <button
                                            key={rid}
                                            className="map-panel-chip"
                                            style={{ '--chip-color': CATEGORY_COLORS[rn.category]?.node }}
                                            onClick={() => { stateRef.current.selectedNode = rn; setSelectedNode({ ...rn }); }}
                                        >
                                            {rn.label}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    )}

                    <button className="map-panel-goto" onClick={() => navigate(`/detail/${selectedNode.id}`)}>
                        상세 페이지 보기 →
                    </button>
                </div>
            )}
        </div>
    );
};

export default Map;
