import {
  drag as d3Drag,
  forceCenter,
  forceCollide,
  forceLink,
  forceManyBody,
  forceSimulation,
  forceX,
  forceY,
  select,
  zoom as d3Zoom,
  zoomIdentity,
} from './vendor.js';

export const PHOSPHOR_GROUP_COLORS = {
  // Root & core platform — Phosphor Cosmos Telemetry Palette
  root: '#fcd34d',
  platform: '#5eead4',
  sdlc: '#86efac',
  pillars: '#93a8ff',
  'trust-arch': '#67e8f9',

  // Overall Extended domain groups (aligned with Playbook category accents)
  intro: '#5eead4',
  plan: '#86efac',
  develop: '#93a8ff',
  review: '#fcd34d',
  secure: '#67e8f9',
  operate: '#86efac',
  admin: '#c4b5fd',

  // Introduction & Copilot
  copilot: '#5eead4',
  fusion: '#93a8ff',

  // Plan vault groups
  collaboration: '#5eead4',
  instructions: '#86efac',
  skills: '#fcd34d',
  plugins: '#c4b5fd',
  mcp: '#67e8f9',
  agents: '#93a8ff',
  hooks: '#fb7185',
  context: '#5eead4',

  // Develop vault groups
  vscode: '#5eead4',
  cli: '#86efac',
  'cloud-agent': '#93a8ff',
  'copilot-app': '#c4b5fd',
  'models-partners': '#fcd34d',
  environments: '#67e8f9',
  bridge: '#5eead4',

  // Review vault groups
  'pr-workflow': '#5eead4',
  'human-review': '#86efac',
  stacking: '#c4b5fd',
  'copilot-review': '#93a8ff',
  'pr-rulesets': '#fcd34d',
  'pr-checks': '#67e8f9',

  // Test & Secure vault groups
  actions: '#5eead4',
  suite: '#93a8ff',
  product: '#c4b5fd',
  secret: '#fcd34d',
  scanning: '#67e8f9',
  dependabot: '#86efac',
  quality: '#5eead4',
  governance: '#fb7185',

  // Administration vault groups
  deployment: '#5eead4',
  iam: '#67e8f9',
  licensing: '#86efac',
  billing: '#fcd34d',
  migrations: '#fb7185',

  // Fallbacks
  unresolved: '#4b6478',
  general: '#728fa3',
};

export const RETRO_GROUP_COLORS = {
  // Root & core platform — Retro JRPG / Neon Cyberpunk Palette
  root: '#ffb000',
  platform: '#00f0ff',
  sdlc: '#9bbc0f',
  pillars: '#ff2e88',
  'trust-arch': '#38bdf8',

  // Overall Extended domain groups (aligned with Playbook category accents)
  intro: '#00f0ff',
  plan: '#9bbc0f',
  develop: '#ff2e88',
  review: '#ffb000',
  secure: '#38bdf8',
  operate: '#a3e635',
  admin: '#bd93f9',

  // Introduction & Copilot
  copilot: '#00f0ff',
  fusion: '#ff2e88',

  // Plan vault groups
  collaboration: '#00f0ff',
  instructions: '#9bbc0f',
  skills: '#ffb000',
  plugins: '#bd93f9',
  mcp: '#38bdf8',
  agents: '#ff2e88',
  hooks: '#ff6e67',
  context: '#2dd4bf',

  // Develop vault groups
  vscode: '#00f0ff',
  cli: '#9bbc0f',
  'cloud-agent': '#ff2e88',
  'copilot-app': '#bd93f9',
  'models-partners': '#ffb000',
  environments: '#38bdf8',
  bridge: '#2dd4bf',

  // Review vault groups
  'pr-workflow': '#00f0ff',
  'human-review': '#9bbc0f',
  stacking: '#bd93f9',
  'copilot-review': '#ff2e88',
  'pr-rulesets': '#ffb000',
  'pr-checks': '#38bdf8',

  // Test & Secure vault groups
  actions: '#00f0ff',
  suite: '#ff2e88',
  product: '#bd93f9',
  secret: '#ffb000',
  scanning: '#38bdf8',
  dependabot: '#9bbc0f',
  quality: '#e8f4ff',
  governance: '#ff6e67',

  // Administration vault groups
  deployment: '#00f0ff',
  iam: '#38bdf8',
  licensing: '#9bbc0f',
  billing: '#ffb000',
  migrations: '#ff6e67',

  // Fallbacks
  unresolved: '#4a5578',
  general: '#8ba4c7',
};

export const GROUP_COLORS = PHOSPHOR_GROUP_COLORS;

export function isRetroTheme() {
  return typeof document !== 'undefined' && document.documentElement.dataset.theme === 'retro';
}

const PHOSPHOR_PALETTE = {
  bgBase: '#060b12',
  bgDeep: '#04080e',
  nebulaCore: 'rgba(94, 234, 212, 0.08)',
  nebulaAmbient: 'rgba(94, 234, 212, 0.045)',
  gridLine: 'rgba(94, 234, 212, 0.03)',
  gridDot: 'rgba(94, 234, 212, 0.14)',

  // Monochrome telemetry node tones (when Groups toggle is off)
  nodeLeaf: '#5c7c93',
  nodeMid: '#8eb4cc',
  nodeHub: '#ecf7fb',
  nodeRoot: '#fcd34d',
  nodeUnresolved: '#3d5568',
  nodeDimmed: '#0f1c2b',
  nodeCoreStroke: 'rgba(4, 8, 14, 0.82)',
  unresolvedStrokeFocus: 'rgba(94, 234, 212, 0.55)',
  unresolvedStrokeDim: 'rgba(114, 143, 163, 0.16)',

  // Primary focus / Seafoam Aqua (#5eead4) + Solar Champagne reticle (#fcd34d)
  primary: '#5eead4',
  primaryBright: '#67e8f9',
  primaryGlow: 'rgba(94, 234, 212, 0.30)',
  primaryEdge: 'rgba(94, 234, 212, 0.88)',
  selectRing: '#fcd34d',
  selectGlow: 'rgba(252, 211, 77, 0.28)',
  activeRing: 'rgba(94, 234, 212, 0.72)',
  haloOuterStop: 'rgba(6, 11, 18, 0)',

  // Secondary hover (when another node is already pinned) = Starlight Periwinkle (#93a8ff)
  secondary: '#93a8ff',
  secondaryBright: '#c4b5fd',
  secondaryGlow: 'rgba(147, 168, 255, 0.32)',
  secondaryEdge: 'rgba(147, 168, 255, 0.88)',

  // Search hit = Solar Champagne (#fcd34d)
  search: '#fcd34d',
  searchGlow: 'rgba(252, 211, 77, 0.34)',

  // Edges
  edgeIdle: 'rgba(94, 234, 212, 0.16)',
  edgeIdleSubtle: 'rgba(94, 234, 212, 0.10)',
  edgeDimmed: 'rgba(114, 143, 163, 0.045)',

  // Typography & crisp obsidian label framing
  labelActive: '#ecf7fb',
  labelNeighbor: '#bad0de',
  labelNormal: '#bad0de',
  labelDim: '#728fa3',
  labelHalo: '#04080e',
  labelBg: 'rgba(4, 8, 14, 0.92)',
  labelBorderSelect: 'rgba(252, 211, 77, 0.68)',
  labelBorderHover: 'rgba(94, 234, 212, 0.62)',
  labelBorderSecondary: 'rgba(147, 168, 255, 0.65)',
  labelBorderNeighbor: 'rgba(94, 234, 212, 0.24)',
};

const RETRO_PALETTE = {
  bgInner: '#1a0b2e',
  bgMid: '#0a0e27',
  bgOuter: '#05060f',
  gridMinor: 'rgba(0, 240, 255, 0.038)',
  gridMajor: 'rgba(255, 46, 136, 0.068)',

  // Monochrome tactical node tones (when Groups toggle is off)
  nodeLeaf: '#6b8db5',
  nodeMid: '#9ec5eb',
  nodeHub: '#d9eeff',
  nodeRoot: '#ffb000',
  nodeUnresolved: '#3d4870',
  nodeDimmed: '#151b38',
  nodeCoreStroke: 'rgba(5, 6, 15, 0.68)',
  unresolvedStrokeFocus: 'rgba(0, 240, 255, 0.55)',
  unresolvedStrokeDim: 'rgba(138, 164, 199, 0.14)',

  // Primary focus = Neon Magenta (#ff2e88)
  primary: '#ff2e88',
  primaryBright: '#ff8ec0',
  primaryGlow: 'rgba(255, 46, 136, 0.42)',
  primaryEdge: 'rgba(255, 46, 136, 0.92)',
  selectRing: '#ff8ec0',
  selectGlow: 'rgba(255, 46, 136, 0.42)',
  activeRing: 'rgba(0, 240, 255, 0.72)',
  haloOuterStop: 'rgba(5, 6, 15, 0)',

  // Secondary hover (when another node is already pinned) = Neon Cyan (#00f0ff)
  secondary: '#00f0ff',
  secondaryBright: '#a5f8ff',
  secondaryGlow: 'rgba(0, 240, 255, 0.40)',
  secondaryEdge: 'rgba(0, 240, 255, 0.88)',

  // Search hit = CRT Amber (#ffb000)
  search: '#ffb000',
  searchGlow: 'rgba(255, 176, 0, 0.42)',

  // Edges
  edgeIdle: 'rgba(0, 240, 255, 0.16)',
  edgeIdleSubtle: 'rgba(0, 240, 255, 0.09)',
  edgeDimmed: 'rgba(138, 164, 199, 0.035)',

  // Typography & crisp pixel label framing
  labelActive: '#e8f4ff',
  labelNeighbor: '#cde6ff',
  labelNormal: 'rgba(232, 244, 255, 0.82)',
  labelDim: 'rgba(232, 244, 255, 0.24)',
  labelHalo: '#05060f',
  labelBg: 'rgba(5, 6, 15, 0.88)',
  labelBorderSelect: 'rgba(255, 46, 136, 0.78)',
  labelBorderHover: 'rgba(255, 46, 136, 0.78)',
  labelBorderSecondary: 'rgba(0, 240, 255, 0.75)',
  labelBorderNeighbor: 'rgba(0, 240, 255, 0.24)',
};

export function getGroupColor(group, retro = isRetroTheme()) {
  const colorMap = retro ? RETRO_GROUP_COLORS : PHOSPHOR_GROUP_COLORS;
  if (!group) return colorMap.general;
  const clean = String(group).toLowerCase();
  if (colorMap[clean]) return colorMap[clean];

  let hash = 0;
  for (let i = 0; i < clean.length; i += 1) {
    hash = clean.charCodeAt(i) + ((hash << 5) - hash);
  }
  const palette = retro
    ? ['#00f0ff', '#ff2e88', '#ffb000', '#9bbc0f', '#bd93f9', '#ff6e67', '#e8f4ff']
    : ['#5eead4', '#86efac', '#93a8ff', '#fcd34d', '#67e8f9', '#c4b5fd', '#fb7185'];
  return palette[Math.abs(hash) % palette.length];
}

function clamp(val, min, max) {
  return Math.max(min, Math.min(max, val));
}

function truncateLabel(text, maxChars = 28) {
  const s = String(text || '');
  return s.length > maxChars ? `${s.slice(0, maxChars - 1)}…` : s;
}

export class GraphView {
  constructor(options) {
    this.canvas = options.canvas;
    this.ctx = this.canvas.getContext('2d');
    this.onSelectNode = options.onSelectNode || (() => {});
    this.onSelectionChange = options.onSelectionChange || (() => {});
    this.onHoverNode = options.onHoverNode || (() => {});
    this.rightInset = options.rightInset ?? 0;

    this.width = 800;
    this.height = 600;
    this.dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.transform = zoomIdentity;

    this.rawGraph = { nodes: [], links: [], adjacency: new Map() };
    this.nodes = [];
    this.links = [];
    this.nodeById = new Map();

    this.activeSlug = null;
    this.selectedSlug = null;
    this.hoverSlug = null;
    this.searchQuery = '';
    this.searchMatches = new Set();
    this.localDepth = 0;
    this.showUnresolved = true;
    this.colorByGroup = options.colorByGroup !== false;

    this.pointerDownPos = null;
    this.isDraggingNode = false;
    this.needsRender = true;
    this.destroyed = false;

    this.simulation = null;
    this.zoomBehavior = null;

    this.handleThemeChange = () => {
      for (const node of this.nodes) {
        if (node.exists) {
          node.color = getGroupColor(node.group);
        }
      }
      this.requestRender();
    };
    if (typeof window !== 'undefined') {
      window.addEventListener('akq:theme-change', this.handleThemeChange);
    }

    this.setupInteractions();
    this.setupResizeObserver();
    this.startRenderLoop();
  }

  nodeRadius(node) {
    if (!node.exists) return 3.6;
    const deg = node.degree || 0;
    if (node.group === 'root') return clamp(7.5 + Math.sqrt(deg) * 1.45, 9, 14.5);
    return clamp(4.2 + Math.sqrt(deg) * 1.45, 4.4, 13.0);
  }

  getMonochromeNodeFill(node, palette = isRetroTheme() ? RETRO_PALETTE : PHOSPHOR_PALETTE) {
    if (!node.exists) return palette.nodeUnresolved;
    if (node.group === 'root') return palette.nodeRoot;
    const deg = node.degree || 0;
    if (deg >= 7) return palette.nodeHub;
    if (deg >= 3) return palette.nodeMid;
    return palette.nodeLeaf;
  }

  refreshSize() {
    if (!this.canvas || !this.canvas.parentElement) return;
    const rect = this.canvas.parentElement.getBoundingClientRect();
    if (rect.width < 10 || rect.height < 10) return;

    const nextW = Math.max(320, rect.width);
    const nextH = Math.max(240, rect.height);
    const nextDpr = Math.min(window.devicePixelRatio || 1, 2);
    if (
      nextW === this.width &&
      nextH === this.height &&
      nextDpr === this.dpr &&
      this.canvas.width === Math.round(nextW * nextDpr)
    ) {
      return;
    }

    this.width = nextW;
    this.height = nextH;
    this.dpr = nextDpr;

    this.canvas.width = Math.round(this.width * this.dpr);
    this.canvas.height = Math.round(this.height * this.dpr);
    this.canvas.style.width = `${this.width}px`;
    this.canvas.style.height = `${this.height}px`;

    if (this.simulation) {
      const cx = this.visualCenterX();
      const cy = this.height / 2;
      this.simulation.force('center', forceCenter(cx, cy).strength(0.05));
      this.simulation.force('x', forceX(cx).strength(0.036));
      this.simulation.force('y', forceY(cy).strength(0.036));
      this.simulation.alpha(0.18).restart();
    }
    this.requestRender();
  }

  setupResizeObserver() {
    const updateSize = () => this.refreshSize();
    updateSize();
    this.resizeObserver = new ResizeObserver(updateSize);
    if (this.canvas.parentElement) {
      this.resizeObserver.observe(this.canvas.parentElement);
    }
  }

  visualCenterX() {
    const usable = Math.max(280, this.width - this.rightInset);
    return usable / 2;
  }

  setRightInset(px) {
    if (this.rightInset === px) return;
    this.rightInset = px;
    if (this.simulation) {
      const cx = this.visualCenterX();
      const cy = this.height / 2;
      this.simulation.force('center', forceCenter(cx, cy).strength(0.05));
      this.simulation.force('x', forceX(cx).strength(0.036));
      this.simulation.force('y', forceY(cy).strength(0.036));
      this.simulation.alpha(0.22).restart();
    }
    this.requestRender();
  }

  screenToWorld(clientX, clientY) {
    const rect = this.canvas.getBoundingClientRect();
    const sx = clientX - rect.left;
    const sy = clientY - rect.top;
    return {
      x: (sx - this.transform.x) / this.transform.k,
      y: (sy - this.transform.y) / this.transform.k,
      sx,
      sy,
    };
  }

  findNodeAt(worldX, worldY) {
    const hitPad = 6 / Math.max(0.55, this.transform.k);
    for (let i = this.nodes.length - 1; i >= 0; i -= 1) {
      const node = this.nodes[i];
      if (node.x == null || node.y == null) continue;
      const r = this.nodeRadius(node) + hitPad;
      const dx = worldX - node.x;
      const dy = worldY - node.y;
      if (dx * dx + dy * dy <= r * r) {
        return node;
      }
    }
    return null;
  }

  setupInteractions() {
    const sel = select(this.canvas);

    this.zoomBehavior = d3Zoom()
      .scaleExtent([0.2, 5])
      .filter((event) => {
        if (event.type === 'wheel') return true;
        if (event.type === 'dblclick') return false;
        const { x, y } = this.screenToWorld(event.clientX, event.clientY);
        const hit = this.findNodeAt(x, y);
        return !hit;
      })
      .on('zoom', (event) => {
        this.transform = event.transform;
        this.requestRender();
      });

    const dragBehavior = d3Drag()
      .container(this.canvas)
      .subject((event) => {
        const srcEvent = event.sourceEvent || event;
        const { x, y } = this.screenToWorld(srcEvent.clientX, srcEvent.clientY);
        const hit = this.findNodeAt(x, y);
        if (!hit) return null;
        return hit;
      })
      .on('start', (event) => {
        const srcEvent = event.sourceEvent;
        this.pointerDownPos = srcEvent ? { x: srcEvent.clientX, y: srcEvent.clientY } : null;
        this.isDraggingNode = false;
        if (!event.active && this.simulation) {
          this.simulation.alphaTarget(0.28).restart();
        }
        event.subject.fx = event.subject.x;
        event.subject.fy = event.subject.y;
        this.canvas.style.cursor = 'grabbing';
      })
      .on('drag', (event) => {
        const srcEvent = event.sourceEvent;
        if (srcEvent && this.pointerDownPos) {
          const dist = Math.hypot(
            srcEvent.clientX - this.pointerDownPos.x,
            srcEvent.clientY - this.pointerDownPos.y,
          );
          if (dist > 4) this.isDraggingNode = true;
        }
        const { x, y } = this.screenToWorld(srcEvent.clientX, srcEvent.clientY);
        event.subject.fx = x;
        event.subject.fy = y;
        this.requestRender();
      })
      .on('end', (event) => {
        if (!event.active && this.simulation) {
          this.simulation.alphaTarget(0);
        }
        event.subject.fx = null;
        event.subject.fy = null;
        this.canvas.style.cursor = this.hoverSlug ? 'pointer' : 'grab';

        if (!this.isDraggingNode && event.subject) {
          this.setSelectedSlug(event.subject.id);
          this.onSelectNode(event.subject);
        }
        this.isDraggingNode = false;
      });

    sel.call(dragBehavior).call(this.zoomBehavior);

    this.handlePointerMove = (e) => {
      if (this.isDraggingNode) return;
      const { x, y } = this.screenToWorld(e.clientX, e.clientY);
      const hit = this.findNodeAt(x, y);
      const nextSlug = hit ? hit.id : null;
      if (nextSlug !== this.hoverSlug) {
        this.hoverSlug = nextSlug;
        this.canvas.style.cursor = hit ? 'pointer' : 'grab';
        this.onHoverNode(hit || null);
        this.requestRender();
      }
    };

    this.handlePointerLeave = () => {
      if (this.hoverSlug) {
        this.hoverSlug = null;
        this.onHoverNode(null);
        this.requestRender();
      }
    };

    this.handlePointerDown = (e) => {
      this.pointerDownPos = { x: e.clientX, y: e.clientY };
    };

    this.handlePointerUp = (e) => {
      if (!this.pointerDownPos || this.isDraggingNode) return;
      const dist = Math.hypot(e.clientX - this.pointerDownPos.x, e.clientY - this.pointerDownPos.y);
      if (dist < 5) {
        const { x, y } = this.screenToWorld(e.clientX, e.clientY);
        const hit = this.findNodeAt(x, y);
        if (!hit && this.selectedSlug) {
          this.setSelectedSlug(null);
        }
      }
    };

    this.handleDoubleClick = (e) => {
      const { x, y } = this.screenToWorld(e.clientX, e.clientY);
      const hit = this.findNodeAt(x, y);
      if (hit) {
        this.setSelectedSlug(hit.id);
        this.focusOnNode(hit.id, { scale: 1.55 });
        this.onSelectNode(hit);
      } else {
        this.fitView();
      }
    };

    this.canvas.addEventListener('pointermove', this.handlePointerMove);
    this.canvas.addEventListener('pointerleave', this.handlePointerLeave);
    this.canvas.addEventListener('pointerdown', this.handlePointerDown);
    this.canvas.addEventListener('pointerup', this.handlePointerUp);
    this.canvas.addEventListener('dblclick', this.handleDoubleClick);
  }

  getNeighborhoodSet(centerSlug, depth) {
    const visited = new Set();
    if (!centerSlug || !this.rawGraph.adjacency.has(centerSlug)) return visited;

    let frontier = new Set([centerSlug]);
    visited.add(centerSlug);

    for (let step = 0; step < depth; step += 1) {
      const next = new Set();
      for (const id of frontier) {
        const neighbors = this.rawGraph.adjacency.get(id);
        if (!neighbors) continue;
        for (const nb of neighbors) {
          if (!visited.has(nb)) {
            visited.add(nb);
            next.add(nb);
          }
        }
      }
      frontier = next;
    }
    return visited;
  }

  setGraph(graph, { resetLayout = false } = {}) {
    this.rawGraph = graph;
    this.recomputeGraph({ resetLayout });
  }

  recomputeGraph({ resetLayout = false } = {}) {
    const prevPositions = new Map();
    if (!resetLayout) {
      for (const n of this.nodes) {
        if (n.x != null && n.y != null) {
          prevPositions.set(n.id, { x: n.x, y: n.y, vx: n.vx || 0, vy: n.vy || 0 });
        }
      }
    }

    const scopeCenter = this.selectedSlug || this.activeSlug;
    let allowedIds = null;
    if (this.localDepth > 0 && scopeCenter) {
      allowedIds = this.getNeighborhoodSet(scopeCenter, this.localDepth);
    }

    const cx = this.visualCenterX();
    const cy = this.height / 2;

    const filteredNodes = this.rawGraph.nodes
      .filter((n) => (this.showUnresolved ? true : n.exists))
      .filter((n) => (allowedIds ? allowedIds.has(n.id) : true))
      .map((n, idx, arr) => {
        const prev = prevPositions.get(n.id);
        const angle = (idx / Math.max(1, arr.length)) * Math.PI * 2;
        const ring = n.group === 'root' ? 12 : 95 + (idx % 5) * 34;
        return {
          ...n,
          x: prev ? prev.x : cx + Math.cos(angle) * ring,
          y: prev ? prev.y : cy + Math.sin(angle) * ring,
          vx: prev ? prev.vx : 0,
          vy: prev ? prev.vy : 0,
        };
      });

    const visibleSet = new Set(filteredNodes.map((n) => n.id));
    const filteredLinks = this.rawGraph.links
      .filter((l) => visibleSet.has(l.source) && visibleSet.has(l.target))
      .map((l) => ({ ...l }));

    this.nodes = filteredNodes;
    this.links = filteredLinks;
    this.nodeById = new Map(filteredNodes.map((n) => [n.id, n]));

    if (this.selectedSlug && !this.nodeById.has(this.selectedSlug)) {
      this.selectedSlug = null;
    }

    this.updateSearchMatches();

    if (this.simulation) {
      this.simulation.stop();
    }

    const nodeCount = this.nodes.length;
    const isDense = nodeCount > 90;

    this.simulation = forceSimulation(this.nodes)
      .force(
        'link',
        forceLink(this.links)
          .id((d) => d.id)
          .distance((l) => {
            const sDeg = typeof l.source === 'object' ? l.source.degree : 1;
            const tDeg = typeof l.target === 'object' ? l.target.degree : 1;
            const base = isDense ? 66 : 80;
            return base + Math.min(58, (sDeg + tDeg) * 2.5);
          })
          .strength(isDense ? 0.38 : 0.44),
      )
      .force(
        'charge',
        forceManyBody()
          .strength((d) => (isDense ? -160 - d.degree * 16 : -220 - d.degree * 24))
          .distanceMax(isDense ? 520 : 620),
      )
      .force(
        'collide',
        forceCollide()
          .radius((d) => this.nodeRadius(d) + (isDense ? 11 : 15))
          .iterations(2),
      )
      .force('center', forceCenter(cx, cy).strength(0.05))
      .force('x', forceX(cx).strength(0.038))
      .force('y', forceY(cy).strength(0.038))
      .alpha(resetLayout || prevPositions.size === 0 ? 0.92 : 0.35)
      .alphaDecay(0.026)
      .on('tick', () => this.requestRender());

    if (resetLayout || prevPositions.size === 0) {
      // Pre-settle initial constellation so frame 1 is immediately readable and focusOnNode is accurate.
      this.simulation.tick(68);
      this.simulation.alpha(0.24).restart();
    }

    this.requestRender();
  }

  setActiveSlug(slug, { focus = false, pin = false } = {}) {
    const changed = this.activeSlug !== slug;
    this.activeSlug = slug;
    if (pin) {
      this.setSelectedSlug(slug);
    }
    if (changed && this.localDepth > 0 && !this.selectedSlug) {
      this.recomputeGraph({ resetLayout: false });
    }
    if (focus && slug) {
      this.focusOnNode(slug);
    }
    this.requestRender();
  }

  setSelectedSlug(slug) {
    const next = slug && this.nodeById.has(slug) ? slug : null;
    if (this.selectedSlug === next) return;
    this.selectedSlug = next;
    if (this.localDepth > 0) {
      this.recomputeGraph({ resetLayout: false });
    }
    this.onSelectionChange(next ? this.nodeById.get(next) || null : null);
    this.requestRender();
  }

  setColorByGroup(enabled) {
    this.colorByGroup = Boolean(enabled);
    this.requestRender();
  }

  setLocalDepth(depth) {
    const d = Number(depth) || 0;
    if (this.localDepth === d) return;
    this.localDepth = d;
    this.recomputeGraph({ resetLayout: false });
    setTimeout(() => this.fitView(), 100);
  }

  setShowUnresolved(show) {
    this.showUnresolved = Boolean(show);
    this.recomputeGraph({ resetLayout: false });
  }

  setSearchQuery(query, matchingSlugs = null) {
    this.searchQuery = String(query || '').trim().toLowerCase();
    if (matchingSlugs instanceof Set) {
      this.searchMatches = matchingSlugs;
    } else {
      this.updateSearchMatches();
    }
    this.requestRender();
  }

  updateSearchMatches() {
    this.searchMatches = new Set();
    if (!this.searchQuery) return;
    for (const node of this.nodes) {
      const hay = `${node.title} ${node.id} ${(node.tags || []).join(' ')}`.toLowerCase();
      if (hay.includes(this.searchQuery)) {
        this.searchMatches.add(node.id);
      }
    }
  }

  focusOnNode(slug, { scale = null } = {}) {
    const node = this.nodeById.get(slug);
    if (!node || node.x == null || node.y == null) return;
    const defaultScale = this.nodes.length > 100 ? 1.15 : 1.24;
    const targetK = scale || clamp(this.transform.k, defaultScale, 2.2);
    const cx = this.visualCenterX();
    const cy = this.height / 2;
    const nextTransform = zoomIdentity.translate(cx - node.x * targetK, cy - node.y * targetK).scale(targetK);
    select(this.canvas).call(this.zoomBehavior.transform, nextTransform);
  }

  zoomBy(factor) {
    const cx = this.visualCenterX();
    const cy = this.height / 2;
    const nextK = clamp(this.transform.k * factor, 0.2, 5);
    const worldX = (cx - this.transform.x) / this.transform.k;
    const worldY = (cy - this.transform.y) / this.transform.k;
    const nextTransform = zoomIdentity.translate(cx - worldX * nextK, cy - worldY * nextK).scale(nextK);
    select(this.canvas).call(this.zoomBehavior.transform, nextTransform);
  }

  fitView(padding = 68) {
    if (this.nodes.length === 0) return;
    let minX = Infinity;
    let maxX = -Infinity;
    let minY = Infinity;
    let maxY = -Infinity;

    for (const n of this.nodes) {
      if (n.x == null || n.y == null) continue;
      const r = this.nodeRadius(n) + 18;
      if (n.x - r < minX) minX = n.x - r;
      if (n.x + r > maxX) maxX = n.x + r;
      if (n.y - r < minY) minY = n.y - r;
      if (n.y + r > maxY) maxY = n.y + r;
    }

    if (!Number.isFinite(minX)) return;

    const usableW = Math.max(280, this.width - this.rightInset);
    const usableH = this.height;
    const graphW = Math.max(120, maxX - minX);
    const graphH = Math.max(120, maxY - minY);

    const k = clamp(
      Math.min((usableW - padding * 2) / graphW, (usableH - padding * 2) / graphH),
      0.32,
      1.65,
    );

    const midX = (minX + maxX) / 2;
    const midY = (minY + maxY) / 2;
    const tx = usableW / 2 - midX * k;
    const ty = usableH / 2 - midY * k;

    const nextTransform = zoomIdentity.translate(tx, ty).scale(k);
    select(this.canvas).call(this.zoomBehavior.transform, nextTransform);
  }

  requestRender() {
    this.needsRender = true;
  }

  startRenderLoop() {
    const loop = () => {
      if (this.destroyed) return;
      if (this.needsRender) {
        this.needsRender = false;
        this.render();
      }
      requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);
  }

  drawBackdrop(ctx, w, h, retro = isRetroTheme()) {
    const cx = this.visualCenterX();

    if (retro) {
      ctx.fillStyle = RETRO_PALETTE.bgOuter;
      ctx.fillRect(0, 0, w, h);

      const cy = h * 0.45;
      const outerR = Math.max(w, h) * 0.85;
      const bgGrad = ctx.createRadialGradient(cx, cy, 24, cx, cy, outerR);
      bgGrad.addColorStop(0, RETRO_PALETTE.bgInner);
      bgGrad.addColorStop(0.52, RETRO_PALETTE.bgMid);
      bgGrad.addColorStop(1, RETRO_PALETTE.bgOuter);
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, w, h);

      // Tactical neon coordinate grid in world space
      let scaledStep = 80 * this.transform.k;
      while (scaledStep < 22) scaledStep *= 2;
      while (scaledStep > 128) scaledStep /= 2;

      const startX = ((this.transform.x % scaledStep) + scaledStep) % scaledStep;
      const startY = ((this.transform.y % scaledStep) + scaledStep) % scaledStep;

      ctx.beginPath();
      ctx.strokeStyle = RETRO_PALETTE.gridMinor;
      ctx.lineWidth = 1;
      for (let x = startX; x < w; x += scaledStep) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
      }
      for (let y = startY; y < h; y += scaledStep) {
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
      }
      ctx.stroke();

      const majorStep = scaledStep * 4;
      const majorStartX = ((this.transform.x % majorStep) + majorStep) % majorStep;
      const majorStartY = ((this.transform.y % majorStep) + majorStep) % majorStep;
      ctx.beginPath();
      ctx.strokeStyle = RETRO_PALETTE.gridMajor;
      ctx.lineWidth = 1;
      for (let x = majorStartX; x < w; x += majorStep) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
      }
      for (let y = majorStartY; y < h; y += majorStep) {
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
      }
      ctx.stroke();
      return;
    }

    ctx.fillStyle = PHOSPHOR_PALETTE.bgBase;
    ctx.fillRect(0, 0, w, h);

    // Soft top & constellation-center seafoam nebula glows
    const topGlowR = Math.max(w, h) * 0.68;
    const topGrad = ctx.createRadialGradient(cx, -h * 0.06, 12, cx, -h * 0.06, topGlowR);
    topGrad.addColorStop(0, PHOSPHOR_PALETTE.nebulaCore);
    topGrad.addColorStop(0.55, 'rgba(94, 234, 212, 0.025)');
    topGrad.addColorStop(1, 'rgba(6, 11, 18, 0)');
    ctx.fillStyle = topGrad;
    ctx.fillRect(0, 0, w, h);

    const midGlowR = Math.max(w, h) * 0.56;
    const midGrad = ctx.createRadialGradient(cx, h * 0.48, 16, cx, h * 0.48, midGlowR);
    midGrad.addColorStop(0, PHOSPHOR_PALETTE.nebulaAmbient);
    midGrad.addColorStop(1, 'rgba(6, 11, 18, 0)');
    ctx.fillStyle = midGrad;
    ctx.fillRect(0, 0, w, h);

    // Subtle 28px Phosphor coordinate blueprint grid + intersection dots
    let scaledStep = 28 * this.transform.k;
    while (scaledStep < 20) scaledStep *= 2;
    while (scaledStep > 56) scaledStep /= 2;

    const startX = ((this.transform.x % scaledStep) + scaledStep) % scaledStep;
    const startY = ((this.transform.y % scaledStep) + scaledStep) % scaledStep;

    ctx.beginPath();
    ctx.strokeStyle = PHOSPHOR_PALETTE.gridLine;
    ctx.lineWidth = 1;
    for (let x = startX; x < w; x += scaledStep) {
      ctx.moveTo(x, 0);
      ctx.lineTo(x, h);
    }
    for (let y = startY; y < h; y += scaledStep) {
      ctx.moveTo(0, y);
      ctx.lineTo(w, y);
    }
    ctx.stroke();

    ctx.beginPath();
    for (let x = startX; x < w; x += scaledStep) {
      for (let y = startY; y < h; y += scaledStep) {
        ctx.rect(x - 0.65, y - 0.65, 1.3, 1.3);
      }
    }
    ctx.fillStyle = PHOSPHOR_PALETTE.gridDot;
    ctx.fill();
  }

  render() {
    const ctx = this.ctx;
    const w = this.width;
    const h = this.height;
    const retro = isRetroTheme();
    const palette = retro ? RETRO_PALETTE : PHOSPHOR_PALETTE;

    ctx.save();
    ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
    this.drawBackdrop(ctx, w, h, retro);

    ctx.translate(this.transform.x, this.transform.y);
    ctx.scale(this.transform.k, this.transform.k);

    const selectedId = this.selectedSlug;
    const hoverId = this.hoverSlug;
    const isSecondaryHover = Boolean(selectedId && hoverId && hoverId !== selectedId);

    const selectedAdj = selectedId ? this.rawGraph.adjacency.get(selectedId) || new Set() : null;
    const hoverAdj = hoverId ? this.rawGraph.adjacency.get(hoverId) || new Set() : null;

    const hasSelection = Boolean(selectedId);
    const hasSoloHover = Boolean(!selectedId && hoverId);
    const hasSearch = this.searchQuery.length > 0;
    const invK = 1 / Math.max(0.45, this.transform.k);

    const idleEdges = [];
    const selectedEdges = [];
    const secondaryEdges = [];
    const bridgeEdges = [];

    for (const link of this.links) {
      const s = typeof link.source === 'object' ? link.source : this.nodeById.get(link.source);
      const t = typeof link.target === 'object' ? link.target : this.nodeById.get(link.target);
      if (!s || !t || s.x == null || t.x == null) continue;

      const touchesSelected = selectedId && (s.id === selectedId || t.id === selectedId);
      const touchesHover = hoverId && (s.id === hoverId || t.id === hoverId);

      if (touchesSelected && touchesHover && isSecondaryHover) {
        bridgeEdges.push({ s, t });
      } else if (touchesSelected) {
        selectedEdges.push({ s, t });
      } else if (touchesHover) {
        secondaryEdges.push({ s, t });
      } else {
        idleEdges.push({ s, t });
      }
    }

    // 1. Background / non-focused edges
    if (idleEdges.length > 0) {
      const dimmed = hasSelection || hasSoloHover || hasSearch;
      ctx.beginPath();
      for (const { s, t } of idleEdges) {
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(t.x, t.y);
      }
      ctx.strokeStyle = dimmed
        ? palette.edgeDimmed
        : this.nodes.length > 100
          ? palette.edgeIdleSubtle
          : palette.edgeIdle;
      ctx.lineWidth = (dimmed ? 0.75 : 1.0) * invK;
      ctx.stroke();
    }

    const drawDirectedActiveEdges = (edges, focusId, strokeStyle, arrowFill, lineW) => {
      if (edges.length === 0) return;

      ctx.beginPath();
      for (const { s, t } of edges) {
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(t.x, t.y);
      }
      ctx.strokeStyle = strokeStyle;
      ctx.lineWidth = lineW * invK;
      ctx.stroke();

      for (const { s, t } of edges) {
        const dx = t.x - s.x;
        const dy = t.y - s.y;
        const dist = Math.hypot(dx, dy);
        if (dist < 22) continue;

        const targetR = this.nodeRadius(t) + (t.id === focusId ? 3.5 : 2);
        const ux = dx / dist;
        const uy = dy / dist;
        const ax = t.x - ux * targetR;
        const ay = t.y - uy * targetR;
        const arrowLen = 6 * invK;
        const arrowWidth = 3.2 * invK;

        ctx.beginPath();
        ctx.moveTo(ax, ay);
        ctx.lineTo(ax - ux * arrowLen - uy * arrowWidth, ay - uy * arrowLen + ux * arrowWidth);
        ctx.lineTo(ax - ux * arrowLen + uy * arrowWidth, ay - uy * arrowLen - ux * arrowWidth);
        ctx.closePath();
        ctx.fillStyle = arrowFill;
        ctx.fill();
      }
    };

    // 2. Hover edges
    if (secondaryEdges.length > 0) {
      drawDirectedActiveEdges(
        secondaryEdges,
        hoverId,
        isSecondaryHover ? palette.secondaryEdge : palette.primaryEdge,
        isSecondaryHover ? palette.secondary : palette.primary,
        isSecondaryHover ? 1.55 : 1.65,
      );
    }

    // 3. Selected edges
    if (selectedEdges.length > 0) {
      drawDirectedActiveEdges(
        selectedEdges,
        selectedId,
        palette.primaryEdge,
        palette.primary,
        1.75,
      );
    }

    // 4. Bridge edges (Selected <-> Hovered gradient)
    for (const { s, t } of bridgeEdges) {
      const grad = ctx.createLinearGradient(s.x, s.y, t.x, t.y);
      if (s.id === selectedId) {
        grad.addColorStop(0, palette.primary);
        grad.addColorStop(1, palette.secondary);
      } else {
        grad.addColorStop(0, palette.secondary);
        grad.addColorStop(1, palette.primary);
      }
      ctx.beginPath();
      ctx.moveTo(s.x, s.y);
      ctx.lineTo(t.x, t.y);
      ctx.strokeStyle = grad;
      ctx.lineWidth = (retro ? 2.25 : 2.2) * invK;
      ctx.stroke();
    }

    // 5. Nodes
    const labelCandidates = [];

    for (const node of this.nodes) {
      if (node.x == null || node.y == null) continue;
      const r = this.nodeRadius(node);

      const isSelected = node.id === selectedId;
      const isHover = node.id === hoverId;
      const isActive = node.id === this.activeSlug;
      const isSelectedNeighbor = Boolean(selectedAdj && selectedAdj.has(node.id));
      const isHoverNeighbor = Boolean(hoverAdj && hoverAdj.has(node.id));
      const isSearchHit = hasSearch && this.searchMatches.has(node.id);

      let inFocus = true;
      if (hasSelection) {
        inFocus = isSelected || isSelectedNeighbor || isHover || isHoverNeighbor;
      } else if (hasSoloHover) {
        inFocus = isHover || isHoverNeighbor;
      }
      if (hasSearch && !isSearchHit && !isSelected && !isHover) {
        inFocus = false;
      }

      // Halo / neon aura for selected, hovered, or search-matched nodes
      if (isSelected || isHover || isSearchHit) {
        const glowColor = isSelected
          ? palette.selectGlow
          : isHover && isSecondaryHover
            ? palette.secondaryGlow
            : isHover
              ? palette.primaryGlow
              : palette.searchGlow;

        const haloRadius = r + 11 * invK;
        const grad = ctx.createRadialGradient(node.x, node.y, r * 0.4, node.x, node.y, haloRadius);
        grad.addColorStop(0, glowColor);
        grad.addColorStop(1, palette.haloOuterStop);
        ctx.beginPath();
        ctx.arc(node.x, node.y, haloRadius, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();
      }

      let fill;
      if (isSelected) {
        fill = palette.primary;
      } else if (isHover && isSecondaryHover) {
        fill = palette.secondary;
      } else if (isHover) {
        fill = retro ? palette.primary : palette.primaryBright;
      } else if (isSearchHit) {
        fill = palette.search;
      } else if (!inFocus) {
        fill = palette.nodeDimmed;
      } else if (this.colorByGroup && node.exists) {
        fill = getGroupColor(node.group, retro);
      } else if (isSelectedNeighbor || isHoverNeighbor) {
        fill = palette.nodeHub;
      } else {
        fill = this.getMonochromeNodeFill(node, palette);
      }

      ctx.beginPath();
      ctx.arc(node.x, node.y, r, 0, Math.PI * 2);
      ctx.fillStyle = fill;
      ctx.fill();

      // Separation stroke on focused nodes
      if (inFocus && node.exists) {
        ctx.strokeStyle = palette.nodeCoreStroke;
        ctx.lineWidth = (retro ? 1.1 : 1.15) * invK;
        ctx.stroke();
      }

      if (!node.exists) {
        ctx.save();
        ctx.setLineDash([2.2 * invK, 2.2 * invK]);
        ctx.strokeStyle = inFocus ? palette.unresolvedStrokeFocus : palette.unresolvedStrokeDim;
        ctx.lineWidth = 1.1 * invK;
        ctx.stroke();
        ctx.restore();
      } else if (isSelected) {
        if (retro) {
          ctx.beginPath();
          ctx.arc(node.x, node.y, r + 3 * invK, 0, Math.PI * 2);
          ctx.strokeStyle = palette.selectRing;
          ctx.lineWidth = 1.85 * invK;
          ctx.stroke();
        } else {
          // Crisp Solar Champagne (#fcd34d) telemetry reticle ring + cardinal ticks
          const ringR = r + 3.1 * invK;
          ctx.beginPath();
          ctx.arc(node.x, node.y, ringR, 0, Math.PI * 2);
          ctx.strokeStyle = palette.selectRing;
          ctx.lineWidth = 1.75 * invK;
          ctx.stroke();

          const tickInner = ringR + 1.4 * invK;
          const tickOuter = ringR + 4.0 * invK;
          ctx.beginPath();
          ctx.moveTo(node.x - tickOuter, node.y);
          ctx.lineTo(node.x - tickInner, node.y);
          ctx.moveTo(node.x + tickInner, node.y);
          ctx.lineTo(node.x + tickOuter, node.y);
          ctx.moveTo(node.x, node.y - tickOuter);
          ctx.lineTo(node.x, node.y - tickInner);
          ctx.moveTo(node.x, node.y + tickInner);
          ctx.lineTo(node.x, node.y + tickOuter);
          ctx.strokeStyle = palette.selectRing;
          ctx.lineWidth = 1.35 * invK;
          ctx.stroke();
        }
      } else if (isHover) {
        ctx.beginPath();
        ctx.arc(node.x, node.y, r + (retro ? 2.6 : 2.7) * invK, 0, Math.PI * 2);
        ctx.strokeStyle = isSecondaryHover
          ? palette.secondaryBright
          : retro
            ? palette.primaryBright
            : palette.primary;
        ctx.lineWidth = (retro ? 1.6 : 1.55) * invK;
        ctx.stroke();
      } else if (isActive && !hasSelection) {
        ctx.beginPath();
        ctx.arc(node.x, node.y, r + 2.4 * invK, 0, Math.PI * 2);
        ctx.strokeStyle = palette.activeRing;
        ctx.lineWidth = 1.3 * invK;
        ctx.stroke();
      }

      const k = this.transform.k;
      const showLabel =
        isSelected ||
        isHover ||
        isSearchHit ||
        isSelectedNeighbor ||
        isHoverNeighbor ||
        node.group === 'root' ||
        (k >= 0.72 && node.degree >= 6) ||
        (k >= 0.96 && node.degree >= 3) ||
        k >= 1.25;

      if (showLabel) {
        const priority = isSelected
          ? 5
          : isHover
            ? 4
            : isSearchHit
              ? 3
              : isSelectedNeighbor || isHoverNeighbor
                ? 2
                : inFocus
                  ? 1
                  : 0;

        labelCandidates.push({
          node,
          r,
          isSelected,
          isHover,
          isActive,
          isSecondaryHover,
          isNeighbor: isSelectedNeighbor || isHoverNeighbor,
          isSearchHit,
          inFocus,
          priority,
        });
      }
    }

    // 6. Theme-aware labels (3px Phosphor HUD pills vs 0px Retro JRPG pixel frames)
    labelCandidates.sort((a, b) => a.priority - b.priority);

    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';
    ctx.lineJoin = 'round';
    ctx.miterLimit = 2;

    const labelFontFamily = retro
      ? '"DotGothic16", "IBM Plex Sans JP", monospace'
      : '"IBM Plex Sans JP", "IBM Plex Mono", sans-serif';

    for (const item of labelCandidates) {
      const {
        node,
        r,
        isSelected,
        isHover,
        isActive,
        isSecondaryHover,
        isNeighbor,
        isSearchHit,
        inFocus,
      } = item;
      const emphasized = isSelected || isHover || isSearchHit;
      const fontSize = (emphasized ? 12 : 11) * invK;
      const weight = retro
        ? emphasized
          ? '700'
          : isNeighbor
            ? '600'
            : '400'
        : emphasized
          ? '600'
          : isNeighbor
            ? '500'
            : '400';

      ctx.font = `${weight} ${fontSize}px ${labelFontFamily}`;
      const text = emphasized || isNeighbor ? node.title : truncateLabel(node.title, 26);
      const labelY = node.y + r + (retro ? 5 : 5.5) * invK;

      if (emphasized || isNeighbor) {
        const metrics = ctx.measureText(text);
        const padX = (retro ? 5.5 : 6) * invK;
        const padY = (retro ? 2.5 : 2.8) * invK;
        const bw = metrics.width + padX * 2;
        const bh = fontSize + padY * 2;
        const bx = node.x - bw / 2;
        const by = labelY - padY;

        const borderStroke = isSelected
          ? palette.labelBorderSelect
          : isHover && isSecondaryHover
            ? palette.labelBorderSecondary
            : isHover
              ? palette.labelBorderHover
              : palette.labelBorderNeighbor;

        if (retro) {
          ctx.fillStyle = palette.labelBg;
          ctx.fillRect(bx, by, bw, bh);
          ctx.strokeStyle = borderStroke;
          ctx.lineWidth = (emphasized ? 1.3 : 0.9) * invK;
          ctx.strokeRect(bx, by, bw, bh);
        } else {
          const rad = 3 * invK;
          ctx.beginPath();
          if (typeof ctx.roundRect === 'function') {
            ctx.roundRect(bx, by, bw, bh, rad);
          } else {
            ctx.rect(bx, by, bw, bh);
          }
          ctx.fillStyle = palette.labelBg;
          ctx.fill();
          ctx.strokeStyle = borderStroke;
          ctx.lineWidth = (emphasized ? 1.2 : 0.85) * invK;
          ctx.stroke();
        }
      } else {
        // Dark glyph halo stroke so ambient/dimmed labels stay razor-sharp over crossing links
        ctx.save();
        ctx.globalAlpha = inFocus ? 0.92 : 0.55;
        ctx.strokeStyle = palette.labelHalo;
        ctx.lineWidth = 3.2 * invK;
        ctx.strokeText(text, node.x, labelY);
        ctx.restore();
      }

      ctx.save();
      if (emphasized || (isActive && inFocus)) {
        ctx.fillStyle = palette.labelActive;
      } else if (!inFocus) {
        if (!retro) ctx.globalAlpha = 0.55;
        ctx.fillStyle = palette.labelDim;
      } else if (isNeighbor) {
        ctx.fillStyle = palette.labelNeighbor;
      } else {
        ctx.fillStyle = palette.labelNormal;
      }
      ctx.fillText(text, node.x, labelY);
      ctx.restore();
    }

    ctx.restore();
  }

  destroy() {
    this.destroyed = true;
    if (this.simulation) this.simulation.stop();
    if (this.resizeObserver) this.resizeObserver.disconnect();
    if (typeof window !== 'undefined') {
      window.removeEventListener('akq:theme-change', this.handleThemeChange);
    }
    this.canvas.removeEventListener('pointermove', this.handlePointerMove);
    this.canvas.removeEventListener('pointerleave', this.handlePointerLeave);
    this.canvas.removeEventListener('pointerdown', this.handlePointerDown);
    this.canvas.removeEventListener('pointerup', this.handlePointerUp);
    this.canvas.removeEventListener('dblclick', this.handleDoubleClick);
  }
}
