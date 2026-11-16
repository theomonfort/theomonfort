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
  harness: '#fcd34d',

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
  code: '#67e8f9',
  dependabot: '#86efac',
  supply: '#fcd34d',
  quality: '#5eead4',
  governance: '#fb7185',

  // Administration vault groups
  deployment: '#5eead4',
  iam: '#67e8f9',
  licensing: '#86efac',
  billing: '#fcd34d',
  migrations: '#fb7185',

  // Fallbacks
  concept: '#9fb8c9',
  unresolved: '#4b6478',
  general: '#8faab9',
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
  harness: '#ffb000',

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
  code: '#38bdf8',
  dependabot: '#9bbc0f',
  supply: '#ffb000',
  quality: '#e8f4ff',
  governance: '#ff6e67',

  // Administration vault groups
  deployment: '#00f0ff',
  iam: '#38bdf8',
  licensing: '#9bbc0f',
  billing: '#ffb000',
  migrations: '#ff6e67',

  // Fallbacks
  concept: '#9fb6d8',
  unresolved: '#4a5578',
  general: '#8ba4c7',
};

export const GROUP_COLORS = PHOSPHOR_GROUP_COLORS;

export function isRetroTheme() {
  return typeof document !== 'undefined' && document.documentElement.dataset.theme === 'retro';
}

const PHOSPHOR_PALETTE = {
  bgBase: '#060b12',
  nebulaTop: 'rgba(94, 234, 212, 0.045)',
  nebulaMid: 'rgba(94, 234, 212, 0.022)',
  gridLine: 'rgba(94, 234, 212, 0.015)',
  gridDot: 'rgba(94, 234, 212, 0.055)',

  // Calm monochrome seafoam-slate nodes when Groups toggle is OFF (default)
  nodeDefault: '#8faab9',
  nodeHub: '#c2dae6',
  nodeUnresolved: '#485e70',
  nodeDimmed: '#152231',
  nodeNeighbor: '#daedf6',
  nodeSecondaryNeighbor: '#dce4ff',
  nodeSharedNeighbor: '#f4fbff',

  // Primary focus = Seafoam Aqua (#5eead4)
  primary: '#5eead4',
  primaryRgb: '94, 234, 212',
  primaryGlow: 'rgba(94, 234, 212, 0.34)',
  selectRingRgb: '186, 250, 236',

  // Secondary hover (while another node is pinned) = Starlight Periwinkle (#93a8ff)
  secondary: '#93a8ff',
  secondaryRgb: '147, 168, 255',

  // Search match = Solar Champagne (#fcd34d)
  searchMatch: '#fcd34d',
  searchGlow: 'rgba(252, 211, 77, 0.36)',

  // Edges
  edgeIdleRgb: '196, 228, 242',
  edgeIdleAlpha: 0.135,
  edgeUnresolvedAlpha: 0.072,
  edgeDimAlpha: 0.026,

  // High-legibility floating unboxed typography
  labelHighlightRgb: '255, 255, 255', // #ffffff
  labelNeighborRgb: '242, 249, 253', // #f2f9fd
  labelSecNeighborRgb: '232, 240, 255', // #e8f0ff
  labelDefaultRgb: '230, 242, 248', // #e6f2f8
  labelDimRgb: '148, 172, 190',
  haloRgb: '6, 11, 18',
};

const RETRO_PALETTE = {
  bgInner: '#150b26',
  bgMid: '#0a0e27',
  bgOuter: '#05060f',
  gridMinor: 'rgba(0, 240, 255, 0.020)',
  gridMajor: 'rgba(255, 46, 136, 0.034)',

  // Calm monochrome arcade-slate nodes when Groups toggle is OFF (default)
  nodeDefault: '#8fa7cb',
  nodeHub: '#c4ddfb',
  nodeUnresolved: '#48527a',
  nodeDimmed: '#171d3a',
  nodeNeighbor: '#dcecff',
  nodeSecondaryNeighbor: '#cff9ff',
  nodeSharedNeighbor: '#f5fbff',

  // Primary focus = Neon Magenta (#ff2e88)
  primary: '#ff2e88',
  primaryRgb: '255, 46, 136',
  primaryGlow: 'rgba(255, 46, 136, 0.36)',
  selectRingRgb: '255, 174, 212',

  // Secondary hover (while another node is pinned) = Neon Cyan (#00f0ff)
  secondary: '#00f0ff',
  secondaryRgb: '0, 240, 255',

  // Search match = CRT Amber (#ffb000)
  searchMatch: '#ffb000',
  searchGlow: 'rgba(255, 176, 0, 0.38)',

  // Edges
  edgeIdleRgb: '196, 224, 255',
  edgeIdleAlpha: 0.135,
  edgeUnresolvedAlpha: 0.072,
  edgeDimAlpha: 0.026,

  // High-legibility floating unboxed typography
  labelHighlightRgb: '255, 255, 255', // #ffffff
  labelNeighborRgb: '244, 248, 255', // #f4f8ff
  labelSecNeighborRgb: '222, 250, 255', // #defaff
  labelDefaultRgb: '232, 244, 255', // #e8f4ff
  labelDimRgb: '164, 184, 214',
  haloRgb: '7, 10, 24',
};

const LABEL_FONT_STACK =
  '"IBM Plex Sans JP", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';

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

export function computeNodeRadius(
  degree,
  { minDegree = 0, maxDegree = 16, exists = true } = {},
) {
  if (!exists) return 3.4;
  const d = Math.max(0, Number(degree) || 0);
  if (d === 0) return 3.8;
  const span = Math.max(8, maxDegree - minDegree);
  const norm = Math.max(0, Math.min(1, (d - minDegree) / span));
  const extra = d > maxDegree ? Math.min(2.6, Math.sqrt(d - maxDegree) * 0.38) : 0;
  return Math.min(
    26,
    4.2 + Math.pow(norm, 1.15) * 15.2 + Math.sqrt(Math.min(d, maxDegree)) * 0.45 + extra,
  );
}

function clamp(val, min, max) {
  return Math.max(min, Math.min(max, val));
}

export class GraphView {
  constructor(options) {
    this.canvas = options.canvas;
    this.ctx = this.canvas.getContext('2d');
    this.onSelectNode = options.onSelectNode || (() => {});
    this.onSelectionChange = options.onSelectionChange || (() => {});
    this.onHoverNode = options.onHoverNode || (() => {});
    this.rightInset = Math.max(0, Number(options.rightInset) || 0);

    this.width = 800;
    this.height = 600;
    this.dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.transform = zoomIdentity;
    this.hasInitialTransform = false;

    this.rawGraph = { nodes: [], links: [], adjacency: new Map() };
    this.allNodes = [];
    this.allLinks = [];
    this.nodes = [];
    this.links = [];
    this.nodeById = new Map();
    this.nodePositions = new Map();
    this.adjacency = new Map();

    this.activeSlug = null;
    this.selectedSlug = null;
    this.hoveredNode = null;
    this.hoverSlug = null;
    this.searchQuery = '';
    this.searchMatches = new Set();
    this.localDepth = 0;
    this.showUnresolved = true;
    this.colorByGroup = Boolean(options.colorByGroup);

    // Smooth dual-focus lighting blends (matching original Zettelkasten repo)
    this.selectBlend = 0;
    this.displaySelectedId = null;
    this.hoverBlend = 0;
    this.displayFocusId = null;

    this.pointerDownPos = null;
    this.isDraggingNode = false;
    this.needsRender = true;
    this.destroyed = false;

    this.simulation = null;
    this.zoomBehavior = null;

    this.handleThemeChange = () => {
      this.requestRender();
    };
    if (typeof window !== 'undefined') {
      window.addEventListener('akq:theme-change', this.handleThemeChange);
    }

    this.setupInteractions();
    this.setupResizeObserver();
    this.startRenderLoop();
  }

  visualCenterX() {
    const usableRight = Math.max(280, this.width - this.rightInset);
    const leftHudBias = this.width >= 1120 ? 84 : 0;
    return (leftHudBias + usableRight) / 2;
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

    const prevW = this.width;
    const prevH = this.height;
    this.width = nextW;
    this.height = nextH;
    this.dpr = nextDpr;

    this.canvas.width = Math.round(this.width * this.dpr);
    this.canvas.height = Math.round(this.height * this.dpr);
    this.canvas.style.width = `${this.width}px`;
    this.canvas.style.height = `${this.height}px`;

    if (!this.hasInitialTransform) {
      this.hasInitialTransform = true;
      const scale =
        this.allNodes.length > 140 ? 0.38 : this.allNodes.length > 48 ? 0.78 : 0.84;
      const initialTransform = zoomIdentity
        .translate(this.visualCenterX(), this.height / 2)
        .scale(scale);
      select(this.canvas).call(this.zoomBehavior.transform, initialTransform);
    } else if (prevW > 0 && prevH > 0) {
      const dx = (this.width - prevW) / 2;
      const dy = (this.height - prevH) / 2;
      const shifted = zoomIdentity
        .translate(this.transform.x + dx, this.transform.y + dy)
        .scale(this.transform.k);
      select(this.canvas).call(this.zoomBehavior.transform, shifted);
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

  setRightInset(px) {
    const next = Math.max(0, Number(px) || 0);
    const prev = this.rightInset;
    if (prev === next) return;
    this.rightInset = next;
    if (this.hasInitialTransform) {
      const shiftX = (prev - next) / 2;
      const nextTransform = zoomIdentity
        .translate(this.transform.x + shiftX, this.transform.y)
        .scale(this.transform.k);
      select(this.canvas).call(this.zoomBehavior.transform, nextTransform);
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
    const hitPad = 5 / Math.max(0.45, this.transform.k);
    for (let i = this.nodes.length - 1; i >= 0; i -= 1) {
      const node = this.nodes[i];
      if (!Number.isFinite(node.x) || !Number.isFinite(node.y)) continue;
      const r = (node.radius || 5) + hitPad;
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
      .scaleExtent([0.22, 4.5])
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
        return hit || null;
      })
      .on('start', (event) => {
        const srcEvent = event.sourceEvent;
        this.pointerDownPos = srcEvent ? { x: srcEvent.clientX, y: srcEvent.clientY } : null;
        this.isDraggingNode = false;
        if (!event.active && this.simulation) {
          this.simulation.alphaTarget(0.25).restart();
        }
        event.subject.fx = event.subject.x;
        event.subject.fy = event.subject.y;
        this.canvas.style.cursor = 'grabbing';
        this.requestRender();
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
        this.canvas.style.cursor = this.hoveredNode ? 'pointer' : 'grab';

        if (!this.isDraggingNode && event.subject) {
          this.setSelectedSlug(event.subject.id);
          this.onSelectNode(event.subject);
        }
        this.isDraggingNode = false;
        this.requestRender();
      });

    sel.call(dragBehavior).call(this.zoomBehavior).on('dblclick.zoom', null);

    this.handlePointerMove = (e) => {
      if (this.isDraggingNode) return;
      const { x, y } = this.screenToWorld(e.clientX, e.clientY);
      const hit = this.findNodeAt(x, y);
      const nextSlug = hit ? hit.id : null;
      if (nextSlug !== this.hoverSlug) {
        this.hoveredNode = hit || null;
        this.hoverSlug = nextSlug;
        if (hit) {
          this.displayFocusId = hit.id;
        }
        this.canvas.style.cursor = hit ? 'pointer' : 'grab';
        this.onHoverNode(hit || null);
        this.requestRender();
      }
    };

    this.handlePointerLeave = () => {
      if (this.hoveredNode || this.hoverSlug) {
        this.hoveredNode = null;
        this.hoverSlug = null;
        this.canvas.style.cursor = 'grab';
        this.onHoverNode(null);
        this.requestRender();
      }
    };

    this.handlePointerDown = (e) => {
      if (e.button !== 0) return;
      this.pointerDownPos = { x: e.clientX, y: e.clientY };
    };

    this.handlePointerUp = (e) => {
      if (e.button !== 0 || !this.pointerDownPos || this.isDraggingNode) return;
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
        this.focusOnNode(hit.id, { scale: 1.42 });
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

  setGraph(graph, { resetLayout = false } = {}) {
    this.rawGraph = graph || { nodes: [], links: [], adjacency: new Map() };

    if (resetLayout) {
      this.nodePositions.clear();
      this.nodes = [];
      this.hoveredNode = null;
      this.hoverSlug = null;
      this.selectedSlug = null;
      this.displaySelectedId = null;
      this.selectBlend = 0;
      this.displayFocusId = null;
      this.hoverBlend = 0;
    } else {
      for (const existing of this.nodes) {
        if (Number.isFinite(existing.x) && Number.isFinite(existing.y)) {
          this.nodePositions.set(existing.id, {
            x: existing.x,
            y: existing.y,
            vx: existing.vx || 0,
            vy: existing.vy || 0,
          });
        }
      }
    }

    this.allNodes = (this.rawGraph.nodes || []).map((n) => ({ ...n }));
    this.allLinks = (this.rawGraph.links || []).map((l) => ({
      id: l.id,
      source: typeof l.source === 'object' ? l.source.id : l.source,
      target: typeof l.target === 'object' ? l.target.id : l.target,
      unresolved: Boolean(l.unresolved),
    }));

    this.recomputeGraph({ resetLayout });
  }

  recomputeGraph({ resetLayout = false } = {}) {
    if (!resetLayout && this.nodes.length > 0) {
      for (const existing of this.nodes) {
        if (Number.isFinite(existing.x) && Number.isFinite(existing.y)) {
          this.nodePositions.set(existing.id, {
            x: existing.x,
            y: existing.y,
            vx: existing.vx || 0,
            vy: existing.vy || 0,
          });
        }
      }
    }

    // Build bidirectional full adjacency across all nodes for local-hop filtering
    const fullAdj = new Map();
    for (const n of this.allNodes) {
      fullAdj.set(n.id, new Set());
    }
    for (const l of this.allLinks) {
      fullAdj.get(l.source)?.add(l.target);
      fullAdj.get(l.target)?.add(l.source);
    }

    const scopeCenter = this.selectedSlug || this.activeSlug;
    let allowedIds = null;
    if (this.localDepth > 0 && scopeCenter && fullAdj.has(scopeCenter)) {
      allowedIds = new Set([scopeCenter]);
      let frontier = [scopeCenter];
      for (let hop = 0; hop < this.localDepth; hop += 1) {
        const nextFrontier = [];
        for (const id of frontier) {
          for (const nb of fullAdj.get(id) || []) {
            if (!allowedIds.has(nb)) {
              allowedIds.add(nb);
              nextFrontier.push(nb);
            }
          }
        }
        frontier = nextFrontier;
      }
    }

    const filteredSourceNodes = this.allNodes
      .filter((n) => (this.showUnresolved ? true : n.exists))
      .filter((n) => (allowedIds ? allowedIds.has(n.id) : true));

    const visibleSet = new Set(filteredSourceNodes.map((n) => n.id));
    const filteredLinks = this.allLinks
      .filter((l) => visibleSet.has(l.source) && visibleSet.has(l.target))
      .map((l) => ({ ...l }));

    const existingDegrees = this.allNodes
      .filter((n) => n.exists)
      .map((n) => n.degree || 0)
      .sort((a, b) => b - a);
    const minDegree = existingDegrees.length ? existingDegrees[existingDegrees.length - 1] : 0;
    const maxDegree = existingDegrees.length
      ? existingDegrees.length > 80
        ? Math.max(16, (existingDegrees[1] || existingDegrees[0]) + 2)
        : existingDegrees[0]
      : 16;

    const hadSavedPositions = !resetLayout && this.nodePositions.size > 0;
    const isLargeGraph = filteredSourceNodes.length > 140;

    // Seed unpositioned nodes along a golden-angle spiral around world origin (0, 0)
    const seededNodes = filteredSourceNodes.map((n, idx) => {
      const saved = hadSavedPositions ? this.nodePositions.get(n.id) : null;
      const angle = idx * 2.399963229728653;
      const isCenterHub = n.id === 'github' || n.group === 'root';
      const ring = isCenterHub
        ? 0
        : isLargeGraph
          ? 95 + Math.sqrt(idx) * 38
          : 72 + Math.sqrt(idx) * 44;
      return {
        ...n,
        radius: computeNodeRadius(n.degree, { minDegree, maxDegree, exists: n.exists }),
        x: saved ? saved.x : Math.cos(angle) * ring,
        y: saved ? saved.y : Math.sin(angle) * ring,
        vx: saved ? saved.vx : 0,
        vy: saved ? saved.vy : 0,
      };
    });

    // Sort small-to-large so leaf nodes draw first and hub nodes draw cleanly on top
    seededNodes.sort((a, b) => a.radius - b.radius);

    this.nodes = seededNodes;
    this.links = filteredLinks;
    this.nodeById = new Map(this.nodes.map((n) => [n.id, n]));

    // Undirected/bidirectional subgraph adjacency (including self, matching original repo)
    this.adjacency.clear();
    for (const n of this.nodes) {
      this.adjacency.set(n.id, new Set([n.id]));
    }
    for (const l of this.links) {
      this.adjacency.get(l.source)?.add(l.target);
      this.adjacency.get(l.target)?.add(l.source);
    }

    if (this.hoveredNode) {
      this.hoveredNode = this.nodeById.get(this.hoveredNode.id) || null;
      this.hoverSlug = this.hoveredNode ? this.hoveredNode.id : null;
    }
    if (this.selectedSlug && !this.nodeById.has(this.selectedSlug)) {
      this.selectedSlug = null;
      this.onSelectionChange(null);
    }

    this.updateSearchMatches();

    if (this.simulation) {
      this.simulation.stop();
    }

    // Spacious d3-force parameters ported directly from original Zettelkasten repo
    this.simulation = forceSimulation(this.nodes)
      .alphaDecay(0.024)
      .velocityDecay(0.36)
      .force(
        'link',
        forceLink(this.links)
          .id((d) => d.id)
          .distance((l) => {
            const sObj = typeof l.source === 'object' ? l.source : this.nodeById.get(l.source);
            const tObj = typeof l.target === 'object' ? l.target : this.nodeById.get(l.target);
            const degA = Math.min(36, (sObj && sObj.degree) || 1);
            const degB = Math.min(36, (tObj && tObj.degree) || 1);
            return 80 + Math.sqrt(degA + degB) * 17;
          })
          .strength((l) => {
            const sObj = typeof l.source === 'object' ? l.source : this.nodeById.get(l.source);
            const tObj = typeof l.target === 'object' ? l.target : this.nodeById.get(l.target);
            const minDeg = Math.min((sObj && sObj.degree) || 1, (tObj && tObj.degree) || 1);
            return minDeg <= 2 ? 0.68 : isLargeGraph ? 0.3 : 0.36;
          }),
      )
      .force(
        'charge',
        forceManyBody()
          .strength((d) => -400 - Math.min(d.degree || 0, 34) * 54)
          .distanceMax(isLargeGraph ? 1380 : 860),
      )
      .force('center', forceCenter(0, 0).strength(0.05))
      .force(
        'x',
        forceX(0).strength((d) =>
          d.id === 'github' || d.group === 'root' ? 0.32 : isLargeGraph ? 0.028 : 0.038,
        ),
      )
      .force(
        'y',
        forceY(0).strength((d) =>
          d.id === 'github' || d.group === 'root' ? 0.32 : isLargeGraph ? 0.03 : 0.042,
        ),
      )
      .force(
        'collide',
        forceCollide()
          .radius((d) => d.radius + 32)
          .iterations(3),
      )
      .on('tick', () => this.requestRender());

    if (!hadSavedPositions) {
      // Pre-settle spacious constellation so initial fitView / focusOnNode is immediately spacious
      this.simulation.alpha(0.96);
      this.simulation.tick(95);
      this.simulation.alpha(0.22).restart();

      if (this.hasInitialTransform && this.zoomBehavior) {
        const scale =
          this.nodes.length > 140 ? 0.38 : this.nodes.length > 48 ? 0.78 : 0.84;
        select(this.canvas).call(
          this.zoomBehavior.transform,
          zoomIdentity.translate(this.visualCenterX(), this.height / 2).scale(scale),
        );
      }
    } else {
      this.simulation.alpha(0.35).restart();
    }

    this.requestRender();
  }

  setActiveSlug(slug, { focus = false, center = false, pin = false } = {}) {
    const changed = this.activeSlug !== slug;
    this.activeSlug = slug;
    if (pin && slug) {
      this.setSelectedSlug(slug);
    }
    if (changed && this.localDepth > 0 && !this.selectedSlug) {
      this.recomputeGraph({ resetLayout: false });
    }
    if ((focus || center) && slug) {
      this.focusOnNode(slug);
    } else {
      this.requestRender();
    }
  }

  setSelectedSlug(slug) {
    const next = slug && this.nodeById.has(slug) ? slug : null;
    if (next) {
      this.displaySelectedId = next;
    }
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
    const clean = this.searchQuery.startsWith('#') ? this.searchQuery.slice(1) : this.searchQuery;
    for (const node of this.nodes) {
      const hay = `${node.title} ${node.id} ${node.group || ''} ${(node.tags || []).join(' ')}`.toLowerCase();
      if (hay.includes(clean)) {
        this.searchMatches.add(node.id);
      }
    }
  }

  focusOnNode(slug, optionsOrScale = null) {
    const node = this.nodeById.get(slug);
    if (!node || !Number.isFinite(node.x) || !Number.isFinite(node.y)) return;

    const explicitScale =
      typeof optionsOrScale === 'number'
        ? optionsOrScale
        : optionsOrScale && typeof optionsOrScale === 'object'
          ? optionsOrScale.scale || null
          : null;

    const minFocusScale =
      this.nodes.length > 140 ? 0.62 : this.nodes.length > 52 ? 0.80 : 0.86;
    const targetK = explicitScale || clamp(Math.max(this.transform.k, minFocusScale), 0.55, 1.35);

    const cx = this.visualCenterX();
    const cy = this.height / 2;
    const nextTransform = zoomIdentity
      .translate(cx - node.x * targetK, cy - node.y * targetK)
      .scale(targetK);
    select(this.canvas).call(this.zoomBehavior.transform, nextTransform);
  }

  zoomBy(factor) {
    const cx = this.visualCenterX();
    const cy = this.height / 2;
    const nextK = clamp(this.transform.k * factor, 0.22, 4.5);
    const worldX = (cx - this.transform.x) / this.transform.k;
    const worldY = (cy - this.transform.y) / this.transform.k;
    const nextTransform = zoomIdentity
      .translate(cx - worldX * nextK, cy - worldY * nextK)
      .scale(nextK);
    select(this.canvas).call(this.zoomBehavior.transform, nextTransform);
  }

  fitView(padding = 72) {
    if (this.nodes.length === 0) return;
    let minX = Infinity;
    let maxX = -Infinity;
    let minY = Infinity;
    let maxY = -Infinity;

    for (const n of this.nodes) {
      if (!Number.isFinite(n.x) || !Number.isFinite(n.y)) continue;
      minX = Math.min(minX, n.x - n.radius - 28);
      maxX = Math.max(maxX, n.x + n.radius + 28);
      minY = Math.min(minY, n.y - n.radius - 24);
      maxY = Math.max(maxY, n.y + n.radius + 32);
    }

    if (!Number.isFinite(minX)) return;

    const usableW = Math.max(240, this.width - this.rightInset);
    const usableH = this.height;
    const boxW = Math.max(120, maxX - minX);
    const boxH = Math.max(120, maxY - minY);

    const k = clamp(
      Math.min((usableW - padding * 2) / boxW, (usableH - padding * 2) / boxH),
      0.3,
      1.35,
    );

    const midX = (minX + maxX) / 2;
    const midY = (minY + maxY) / 2;
    const cx = this.visualCenterX();
    const cy = usableH / 2;

    const nextTransform = zoomIdentity.translate(cx - midX * k, cy - midY * k).scale(k);
    select(this.canvas).call(this.zoomBehavior.transform, nextTransform);
  }

  requestRender() {
    this.needsRender = true;
  }

  scheduleRender() {
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

      const cy = h * 0.46;
      const outerR = Math.max(w, h) * 0.86;
      const bgGrad = ctx.createRadialGradient(cx, cy, 24, cx, cy, outerR);
      bgGrad.addColorStop(0, RETRO_PALETTE.bgInner);
      bgGrad.addColorStop(0.54, RETRO_PALETTE.bgMid);
      bgGrad.addColorStop(1, RETRO_PALETTE.bgOuter);
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, w, h);

      // Subtle tactical grid that stays whisper-quiet behind floating node labels
      let scaledStep = 84 * this.transform.k;
      while (scaledStep < 26) scaledStep *= 2;
      while (scaledStep > 136) scaledStep /= 2;

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

    // Whisper-subtle Phosphor cosmos glow + delicate coordinate grid
    const topGlowR = Math.max(w, h) * 0.68;
    const topGrad = ctx.createRadialGradient(cx, -h * 0.06, 12, cx, -h * 0.06, topGlowR);
    topGrad.addColorStop(0, PHOSPHOR_PALETTE.nebulaTop);
    topGrad.addColorStop(0.55, 'rgba(94, 234, 212, 0.014)');
    topGrad.addColorStop(1, 'rgba(6, 11, 18, 0)');
    ctx.fillStyle = topGrad;
    ctx.fillRect(0, 0, w, h);

    const midGlowR = Math.max(w, h) * 0.56;
    const midGrad = ctx.createRadialGradient(cx, h * 0.48, 16, cx, h * 0.48, midGlowR);
    midGrad.addColorStop(0, PHOSPHOR_PALETTE.nebulaMid);
    midGrad.addColorStop(1, 'rgba(6, 11, 18, 0)');
    ctx.fillStyle = midGrad;
    ctx.fillRect(0, 0, w, h);

    let scaledStep = 34 * this.transform.k;
    while (scaledStep < 22) scaledStep *= 2;
    while (scaledStep > 64) scaledStep /= 2;

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
        ctx.rect(x - 0.55, y - 0.55, 1.1, 1.1);
      }
    }
    ctx.fillStyle = PHOSPHOR_PALETTE.gridDot;
    ctx.fill();
  }

  render() {
    const ctx = this.ctx;
    const w = this.width;
    const h = this.height;
    const transform = this.transform;
    const retro = isRetroTheme();
    const palette = retro ? RETRO_PALETTE : PHOSPHOR_PALETTE;

    // Smooth pinned-selection transition blend (0.28 lerp, matching original repo)
    const targetSelectBlend =
      this.selectedSlug && this.adjacency.has(this.selectedSlug) ? 1 : 0;
    const selectDiff = targetSelectBlend - this.selectBlend;
    if (Math.abs(selectDiff) > 0.015) {
      this.selectBlend += selectDiff * 0.28;
      this.requestRender();
    } else {
      this.selectBlend = targetSelectBlend;
      if (targetSelectBlend === 0) {
        this.displaySelectedId = null;
      }
    }

    // Smooth hover transition blend (0.28 lerp)
    const targetHoverBlend = this.hoveredNode ? 1 : 0;
    const hoverDiff = targetHoverBlend - this.hoverBlend;
    if (Math.abs(hoverDiff) > 0.015) {
      this.hoverBlend += hoverDiff * 0.28;
      this.requestRender();
    } else {
      this.hoverBlend = targetHoverBlend;
      if (targetHoverBlend === 0) {
        this.displayFocusId = null;
      }
    }

    const selId = this.selectedSlug
      ? this.selectedSlug
      : this.selectBlend > 0.01
        ? this.displaySelectedId
        : null;
    const selNeighbors = selId ? this.adjacency.get(selId) : null;
    const hasSelection = Boolean(selId && this.selectBlend > 0.01);

    const hovId = this.hoveredNode
      ? this.hoveredNode.id
      : this.hoverBlend > 0.01
        ? this.displayFocusId
        : null;
    const hovNeighbors = hovId ? this.adjacency.get(hovId) : null;
    const hasHover = Boolean(hovId && this.hoverBlend > 0.01);

    // Dual-focus lighting: when selId is pinned, hovering a different node illuminates BOTH neighborhoods
    const isSecondaryHover = Boolean(hasHover && this.selectedSlug && hovId !== this.selectedSlug);
    const isPrimaryHover = Boolean(hasHover && !this.selectedSlug);
    const dimStrength = Math.max(
      hasSelection ? this.selectBlend : 0,
      isPrimaryHover ? this.hoverBlend : 0,
    );
    const isDimmingBg = dimStrength > 0.01;
    const hasSearch = this.searchQuery.length > 0;

    ctx.save();
    ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
    this.drawBackdrop(ctx, w, h, retro);

    ctx.translate(transform.x, transform.y);
    ctx.scale(transform.k, transform.k);

    const invK = 1 / Math.max(0.45, Math.min(2.2, transform.k));

    // Pass 1: Non-highlighted background edges (clean undirected lines, no arrowheads)
    for (const link of this.links) {
      const s = typeof link.source === 'object' ? link.source : this.nodeById.get(link.source);
      const t = typeof link.target === 'object' ? link.target : this.nodeById.get(link.target);
      if (!s || !t || !Number.isFinite(s.x) || !Number.isFinite(t.x)) continue;

      const touchesSelected = hasSelection && (s.id === selId || t.id === selId);
      const touchesHover =
        (isPrimaryHover || isSecondaryHover) && (s.id === hovId || t.id === hovId);
      if (touchesSelected || touchesHover) continue;

      ctx.beginPath();
      ctx.moveTo(s.x, s.y);
      ctx.lineTo(t.x, t.y);

      if (isDimmingBg) {
        const alpha =
          palette.edgeIdleAlpha * (1 - dimStrength) + palette.edgeDimAlpha * dimStrength;
        ctx.strokeStyle = `rgba(${palette.edgeIdleRgb}, ${alpha.toFixed(3)})`;
      } else if (hasSearch) {
        ctx.strokeStyle = `rgba(${palette.edgeIdleRgb}, 0.038)`;
      } else {
        const alpha = link.unresolved ? palette.edgeUnresolvedAlpha : palette.edgeIdleAlpha;
        ctx.strokeStyle = `rgba(${palette.edgeIdleRgb}, ${alpha.toFixed(3)})`;
      }

      if (link.unresolved) {
        ctx.setLineDash([4 * invK, 4 * invK]);
      } else {
        ctx.setLineDash([]);
      }
      ctx.lineWidth = 0.88 * invK;
      ctx.stroke();
    }
    ctx.setLineDash([]);

    // Pass 2a: Primary accent edges for selected node (or solo hover when nothing is selected)
    const primaryFocusId = hasSelection ? selId : isPrimaryHover ? hovId : null;
    const primaryStrength = hasSelection
      ? this.selectBlend
      : isPrimaryHover
        ? this.hoverBlend
        : 0;

    if (primaryFocusId && primaryStrength > 0.01) {
      for (const link of this.links) {
        const s = typeof link.source === 'object' ? link.source : this.nodeById.get(link.source);
        const t = typeof link.target === 'object' ? link.target : this.nodeById.get(link.target);
        if (!s || !t || !Number.isFinite(s.x) || !Number.isFinite(t.x)) continue;
        if (s.id !== primaryFocusId && t.id !== primaryFocusId) continue;

        // Bridge edge between pinned primary and hovered secondary is drawn as a gradient in Pass 2b
        if (
          isSecondaryHover &&
          ((s.id === primaryFocusId && t.id === hovId) ||
            (s.id === hovId && t.id === primaryFocusId))
        ) {
          continue;
        }

        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(t.x, t.y);
        const alpha = 0.18 + 0.74 * primaryStrength;
        ctx.strokeStyle = `rgba(${palette.primaryRgb}, ${alpha.toFixed(3)})`;
        ctx.lineWidth = (1.05 + 0.65 * primaryStrength) * invK;
        ctx.stroke();
      }
    }

    // Pass 2b: Secondary accent edges for hovered node when another node is already pinned
    if (isSecondaryHover) {
      for (const link of this.links) {
        const s = typeof link.source === 'object' ? link.source : this.nodeById.get(link.source);
        const t = typeof link.target === 'object' ? link.target : this.nodeById.get(link.target);
        if (!s || !t || !Number.isFinite(s.x) || !Number.isFinite(t.x)) continue;
        if (s.id !== hovId && t.id !== hovId) continue;

        const isBridgeToSelected =
          hasSelection &&
          ((s.id === selId && t.id === hovId) || (s.id === hovId && t.id === selId));

        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(t.x, t.y);

        if (isBridgeToSelected && Math.hypot(t.x - s.x, t.y - s.y) > 0.5) {
          const selEnd = s.id === selId ? s : t;
          const hovEnd = s.id === hovId ? s : t;
          const grad = ctx.createLinearGradient(selEnd.x, selEnd.y, hovEnd.x, hovEnd.y);
          grad.addColorStop(0, `rgba(${palette.primaryRgb}, 0.96)`);
          grad.addColorStop(
            1,
            `rgba(${palette.secondaryRgb}, ${(0.25 + 0.73 * this.hoverBlend).toFixed(3)})`,
          );
          ctx.strokeStyle = grad;
          ctx.lineWidth = (1.55 + 0.65 * this.hoverBlend) * invK;
        } else {
          const alpha = 0.18 + 0.78 * this.hoverBlend;
          ctx.strokeStyle = `rgba(${palette.secondaryRgb}, ${alpha.toFixed(3)})`;
          ctx.lineWidth = (1.05 + 0.72 * this.hoverBlend) * invK;
        }
        ctx.stroke();
      }
    }

    // Pass 3: Nodes + collect label descriptors so foreground labels always render above dimmed ones
    const labelItems = [];

    for (const node of this.nodes) {
      if (!Number.isFinite(node.x) || !Number.isFinite(node.y)) continue;

      const isSelected = hasSelection && node.id === selId;
      const isSelectedNeighbor =
        hasSelection && Boolean(selNeighbors && selNeighbors.has(node.id)) && !isSelected;
      const isPrimaryFocus = isPrimaryHover && node.id === hovId;
      const isPrimaryNeighbor =
        isPrimaryHover && Boolean(hovNeighbors && hovNeighbors.has(node.id)) && !isPrimaryFocus;
      const isSecFocus = isSecondaryHover && node.id === hovId;
      const isSecNeighbor =
        isSecondaryHover &&
        Boolean(hovNeighbors && hovNeighbors.has(node.id)) &&
        !isSecFocus &&
        !isSelected;
      const isSharedNeighbor = isSelectedNeighbor && isSecNeighbor;
      const isActive = node.id === this.activeSlug;
      const isSearchHit = hasSearch && this.searchMatches.has(node.id);

      let drawRadius = node.radius;
      if (isSelected) {
        const selfHoverBoost = hasHover && hovId === selId ? 1.1 * this.hoverBlend : 0;
        drawRadius += 1.6 * this.selectBlend + selfHoverBoost;
      } else if (isPrimaryFocus || isSecFocus) {
        drawRadius += 1.8 * this.hoverBlend;
      }

      // Soft outer glow on selected, primary hover, or search match
      if (isSelected || isPrimaryFocus || isSearchHit) {
        ctx.beginPath();
        ctx.arc(node.x, node.y, drawRadius + 5.6 * invK, 0, Math.PI * 2);
        ctx.fillStyle = isSearchHit && !isSelected && !isPrimaryFocus
          ? palette.searchGlow
          : palette.primaryGlow;
        ctx.fill();
      }

      // Soft outer glow on secondary hovered node while another node is pinned
      if (isSecFocus) {
        ctx.beginPath();
        ctx.arc(node.x, node.y, drawRadius + 5.6 * invK, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${palette.secondaryRgb}, ${(0.38 * this.hoverBlend).toFixed(3)})`;
        ctx.fill();
      }

      // Subtle active-drawer ring when no graph node is pinned
      if (isActive && !isSelected && !isPrimaryFocus && !isSecFocus) {
        const dimFactor =
          isDimmingBg && !isSelectedNeighbor && !isPrimaryNeighbor && !isSecNeighbor ? 0.24 : 0.85;
        ctx.beginPath();
        ctx.arc(node.x, node.y, drawRadius + 3.0 * invK, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(${palette.primaryRgb}, ${dimFactor})`;
        ctx.lineWidth = 1.5 * invK;
        ctx.stroke();
      }

      ctx.beginPath();
      ctx.arc(node.x, node.y, drawRadius, 0, Math.PI * 2);

      if (isSelected || isPrimaryFocus) {
        ctx.fillStyle = palette.primary;
      } else if (isSecFocus) {
        ctx.fillStyle = palette.secondary;
      } else if (isSharedNeighbor) {
        ctx.fillStyle = palette.nodeSharedNeighbor;
      } else if (isSecNeighbor) {
        ctx.fillStyle = this.colorByGroup && node.exists
          ? getGroupColor(node.group, retro)
          : palette.nodeSecondaryNeighbor;
      } else if (isSelectedNeighbor || isPrimaryNeighbor) {
        ctx.fillStyle = this.colorByGroup && node.exists
          ? getGroupColor(node.group, retro)
          : palette.nodeNeighbor;
      } else if (isDimmingBg) {
        ctx.fillStyle = palette.nodeDimmed;
      } else if (hasSearch) {
        ctx.fillStyle = isSearchHit ? palette.searchMatch : palette.nodeDimmed;
      } else if (!node.exists) {
        ctx.fillStyle = palette.nodeUnresolved;
      } else if (this.colorByGroup) {
        ctx.fillStyle = getGroupColor(node.group, retro);
      } else {
        ctx.fillStyle = node.degree >= 6 ? palette.nodeHub : palette.nodeDefault;
      }

      ctx.fill();

      // Crisp selection ring on locked node or shared neighbor
      if (isSelected) {
        ctx.beginPath();
        ctx.arc(node.x, node.y, drawRadius + 2.2 * invK, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(${palette.selectRingRgb}, ${(0.90 * this.selectBlend).toFixed(3)})`;
        ctx.lineWidth = 1.5 * invK;
        ctx.stroke();
      } else if (isSharedNeighbor) {
        ctx.beginPath();
        ctx.arc(node.x, node.y, drawRadius + 2.0 * invK, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(${palette.secondaryRgb}, ${(0.84 * this.hoverBlend).toFixed(3)})`;
        ctx.lineWidth = 1.4 * invK;
        ctx.stroke();
      } else if (
        !node.exists &&
        (!isDimmingBg || isSelectedNeighbor || isPrimaryNeighbor || isSecNeighbor)
      ) {
        ctx.strokeStyle = `rgba(${palette.edgeIdleRgb}, 0.28)`;
        ctx.lineWidth = 1 * invK;
        ctx.stroke();
      }

      const isLit =
        isSelected ||
        isSelectedNeighbor ||
        isPrimaryFocus ||
        isPrimaryNeighbor ||
        isSecFocus ||
        isSecNeighbor;

      const drawOrder = isSelected || isPrimaryFocus || isSecFocus
        ? 4
        : isSharedNeighbor || isSearchHit
          ? 3
          : isSelectedNeighbor || isPrimaryNeighbor || isSecNeighbor
            ? 2
            : !isDimmingBg && !hasSearch
              ? 1
              : 0;

      labelItems.push({
        node,
        drawRadius,
        isSelected,
        isSelectedNeighbor,
        isPrimaryFocus,
        isPrimaryNeighbor,
        isSecFocus,
        isSecNeighbor,
        isSharedNeighbor,
        isLit,
        isActive,
        isSearchHit,
        drawOrder,
      });
    }

    // Pass 4: Crisp, unboxed Obsidian-style floating labels below nodes
    labelItems.sort((a, b) => a.drawOrder - b.drawOrder || a.node.radius - b.node.radius);

    // Sub-linear zoom curve matching original repo (12 / k^0.35 clamped to [10, 14])
    const baseFontPx = Math.max(10, Math.min(14, 12 / Math.pow(transform.k, 0.35)));

    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';
    ctx.lineJoin = 'round';
    ctx.miterLimit = 2;

    for (const item of labelItems) {
      const {
        node,
        drawRadius,
        isSelected,
        isSelectedNeighbor,
        isPrimaryFocus,
        isPrimaryNeighbor,
        isSecFocus,
        isSecNeighbor,
        isSharedNeighbor,
        isLit,
        isActive,
        isSearchHit,
      } = item;

      // Progressive zoom-threshold disclosure when idle; lit & search-matched nodes are ALWAYS 100% visible
      let zoomAlpha = 1;
      if (!isLit && !isActive && !isSearchHit) {
        const isLarge = this.nodes.length > 140;
        const minK = isLarge
          ? node.degree >= 16
            ? 0.24
            : node.degree >= 10
              ? 0.42
              : node.degree >= 6
                ? 0.58
                : 0.76
          : node.degree >= 9
            ? 0.24
            : node.degree >= 5
              ? 0.42
              : node.degree >= 3
                ? 0.56
                : 0.72;
        if (transform.k < minK) {
          zoomAlpha = Math.max(0, (transform.k - (minK - 0.14)) / 0.14);
        }
      }
      if (zoomAlpha <= 0.02) continue;

      let textAlpha = 0.88 * zoomAlpha;
      let colorRgb = palette.labelDefaultRgb;
      let fontWeight = node.degree >= 8 ? '600' : '400';
      let isDimmedLabel = false;

      if (isSelected || isPrimaryFocus || isSecFocus || isSharedNeighbor) {
        textAlpha = 1;
        colorRgb = palette.labelHighlightRgb;
        fontWeight = '600';
      } else if (isSecNeighbor) {
        textAlpha = 0.96;
        colorRgb = palette.labelSecNeighborRgb;
        fontWeight = '500';
      } else if (isSelectedNeighbor || isPrimaryNeighbor) {
        textAlpha = 0.96;
        colorRgb = palette.labelNeighborRgb;
        fontWeight = '500';
      } else if (isDimmingBg) {
        textAlpha = (0.88 * (1 - dimStrength) + 0.13 * dimStrength) * zoomAlpha;
        colorRgb = palette.labelDimRgb;
        isDimmedLabel = dimStrength > 0.35;
      } else if (hasSearch) {
        if (isSearchHit) {
          textAlpha = 1;
          colorRgb = palette.labelHighlightRgb;
          fontWeight = '600';
        } else {
          textAlpha = 0.13 * zoomAlpha;
          colorRgb = palette.labelDimRgb;
          isDimmedLabel = true;
        }
      }

      const isFocusNode = isSelected || isPrimaryFocus || isSecFocus;
      const fontSize = isFocusNode ? baseFontPx * 1.07 : baseFontPx;
      ctx.font = `${fontWeight} ${fontSize.toFixed(2)}px ${LABEL_FONT_STACK}`;

      const labelY = node.y + drawRadius + (isSelected ? 6.2 : 5.5) * invK;

      // Subtle tight text halo ONLY on visible/lit labels, NEVER on dimmed background labels
      if (!isDimmedLabel && textAlpha > 0.25) {
        ctx.strokeStyle = `rgba(${palette.haloRgb}, ${(textAlpha * 0.86).toFixed(3)})`;
        ctx.lineWidth = 2.6 / Math.max(0.45, transform.k);
        ctx.strokeText(node.title, node.x, labelY);
      }

      ctx.fillStyle = `rgba(${colorRgb}, ${textAlpha.toFixed(3)})`;
      ctx.fillText(node.title, node.x, labelY);
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
