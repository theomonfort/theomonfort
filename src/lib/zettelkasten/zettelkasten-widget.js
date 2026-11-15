import { GraphView, getGroupColor } from './graph-view.js';
import { escapeHtml, renderNoteHtml, slugify } from './parser.js';
import { NoteStore } from './store.js';

const ICONS = {
  graph: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="square" stroke-linejoin="miter"><circle cx="6" cy="6" r="2.5"/><circle cx="18" cy="7" r="2.5"/><circle cx="11" cy="18" r="2.5"/><path d="M8.2 7.2l7.4 0.6M7.3 8.2l2.6 7.5M16.5 9.1l-4.1 6.8"/></svg>`,
  search: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="square"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.8-3.8"/></svg>`,
  plus: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="square"><path d="M12 5v14M5 12h14"/></svg>`,
  fit: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="square"><path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/></svg>`,
  zoomIn: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="square"><path d="M12 6v12M6 12h12"/></svg>`,
  zoomOut: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="square"><path d="M6 12h12"/></svg>`,
  panelClose: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="square"><rect x="3" y="4" width="18" height="16"/><path d="M15 4v16M9 9l3 3-3 3"/></svg>`,
  panelOpen: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="square"><rect x="3" y="4" width="18" height="16"/><path d="M15 4v16M12 9l-3 3 3 3"/></svg>`,
  download: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="square"><path d="M12 4v11M8 11l4 4 4-4M4 19h16"/></svg>`,
  trash: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="square"><path d="M4 7h16M9 7V4h6v3M7 7l1 13h8l1-13"/></svg>`,
  reset: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="square"><path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5"/></svg>`,
};

function computeDrawerWidth() {
  if (typeof window === 'undefined') return 470;
  if (window.innerWidth <= 900) return 0;
  return Math.min(510, Math.max(390, Math.round(window.innerWidth * 0.34)));
}

export async function mountZettelkasten(container, options = {}) {
  const root = typeof container === 'string' ? document.querySelector(container) : container;
  if (!root) throw new Error('mountZettelkasten: container element not found');

  const rawVaults =
    Array.isArray(options.vaults) && options.vaults.length > 0
      ? options.vaults
      : [
          {
            id: 'default',
            label: options.title || 'Zettelkasten',
            title: options.title || 'Zettelkasten',
            seedNotes: options.seedNotes || {},
            loadSeedNotes: options.loadSeedNotes || null,
            apiBaseUrl: options.apiBaseUrl ?? null,
            storageKey: options.storageKey || 'akq:zk:vault:v1',
            initialNote: options.initialNote || 'github',
            persistLocalStorage: options.persistLocalStorage !== false,
          },
        ];

  const vaultConfigs = rawVaults.map((v, idx) => ({
    id: String(v.id || `vault-${idx + 1}`),
    label: v.label || v.title || `Vault ${idx + 1}`,
    title: v.title || v.label || 'Zettelkasten',
    seedNotes: v.seedNotes || null,
    loadSeedNotes: typeof v.loadSeedNotes === 'function' ? v.loadSeedNotes : null,
    apiBaseUrl: v.apiBaseUrl !== undefined ? v.apiBaseUrl : null,
    storageKey: v.storageKey || `akq:zk:v1:${v.id || idx + 1}`,
    initialNote: v.initialNote || 'github',
    persistLocalStorage: v.persistLocalStorage !== false,
  }));

  let activeVaultIdx = Math.max(
    0,
    options.initialVault
      ? vaultConfigs.findIndex((v) => v.id === options.initialVault)
      : 0,
  );
  if (activeVaultIdx < 0) activeVaultIdx = 0;

  let activeVault = vaultConfigs[activeVaultIdx];
  const readOnly = Boolean(options.readOnly);
  const onActiveChange = typeof options.onActiveChange === 'function' ? options.onActiveChange : null;

  const vaultStoreCache = new Map();
  const vaultLastSlug = new Map();

  async function resolveVaultStore(vault) {
    if (vaultStoreCache.has(vault.id)) {
      return vaultStoreCache.get(vault.id);
    }
    let seedNotes = vault.seedNotes || {};
    if (!vault.seedNotes && vault.loadSeedNotes) {
      const loaded = await vault.loadSeedNotes();
      seedNotes = loaded?.default || loaded || {};
      vault.seedNotes = seedNotes;
    }
    const vaultStore = new NoteStore({
      seedNotes,
      apiBaseUrl: vault.apiBaseUrl,
      storageKey: vault.storageKey,
      persistLocalStorage: vault.persistLocalStorage,
    });
    await vaultStore.init();
    vaultStoreCache.set(vault.id, vaultStore);
    return vaultStore;
  }

  let store = await resolveVaultStore(activeVault);

  const state = {
    activeSlug: null,
    mode: 'read',
    drawerCollapsed: Boolean(options.defaultCollapsed),
    localDepth: 0,
    colorByGroup: options.colorByGroup !== false,
    searchQuery: '',
    dirty: false,
    saveTimer: null,
    switchingVault: false,
  };

  root.classList.add('zk-host');
  root.innerHTML = `
    <div class="zk-root ${state.drawerCollapsed ? 'is-drawer-collapsed' : ''}">
      <div class="zk-canvas-stage">
        <canvas class="zk-canvas" aria-label="Zettelkasten knowledge graph"></canvas>
      </div>

      <header class="zk-hud-left">
        <div class="zk-brand-row">
          <div class="zk-brand">
            <span class="zk-brand-icon">${ICONS.graph}</span>
            <div>
              <div class="zk-brand-title">${escapeHtml(activeVault.title)}</div>
              <div class="zk-brand-stats"></div>
            </div>
          </div>
          <div class="zk-hud-badges">
            <span class="zk-storage-badge"></span>
            ${
              !readOnly
                ? `<button type="button" class="zk-btn zk-btn-primary zk-new-note-btn" title="Create new note">
                     ${ICONS.plus}<span>New</span>
                   </button>`
                : ''
            }
          </div>
        </div>

        ${
          vaultConfigs.length > 1
            ? `<div class="zk-vault-switcher" role="tablist" aria-label="Knowledge vaults">
                 ${vaultConfigs
                   .map(
                     (v, idx) =>
                       `<button type="button" role="tab" class="zk-vault-tab ${idx === activeVaultIdx ? 'is-active' : ''}" aria-selected="${idx === activeVaultIdx}" data-vault-id="${escapeHtml(v.id)}">${escapeHtml(v.label)}</button>`,
                   )
                   .join('')}
               </div>`
            : ''
        }

        <div class="zk-search-wrap">
          <span class="zk-search-icon">${ICONS.search}</span>
          <input
            type="search"
            class="zk-search-input"
            placeholder="Search notes, #tags, [[links]]… ( / )"
            autocomplete="off"
            spellcheck="false"
          />
          <button type="button" class="zk-search-clear" hidden aria-label="Clear search">&times;</button>
        </div>

        <div class="zk-search-results" hidden></div>

        <div class="zk-scope-bar">
          <div class="zk-segmented" role="group" aria-label="Graph scope">
            <button type="button" class="zk-seg-btn is-active" data-depth="0">Global</button>
            <button type="button" class="zk-seg-btn" data-depth="1">1-Hop</button>
            <button type="button" class="zk-seg-btn" data-depth="2">2-Hop</button>
          </div>
          <button
            type="button"
            class="zk-chip-toggle zk-color-groups-btn ${state.colorByGroup ? 'is-active' : ''}"
            aria-pressed="${state.colorByGroup}"
            title="Toggle neon category group colors"
          >
            Groups
          </button>
        </div>

        <div class="zk-selection-pill" hidden>
          <span class="zk-selection-dot"></span>
          <span class="zk-selection-label"></span>
          <button type="button" class="zk-selection-clear" title="Clear graph focus">&times;</button>
        </div>
      </header>

      <div class="zk-bottom-left">
        <div class="zk-zoom-bar">
          <button type="button" class="zk-icon-btn" data-action="zoom-in" title="Zoom in">${ICONS.zoomIn}</button>
          <button type="button" class="zk-icon-btn" data-action="zoom-out" title="Zoom out">${ICONS.zoomOut}</button>
          <button type="button" class="zk-icon-btn" data-action="fit" title="Fit graph to view">${ICONS.fit}</button>
        </div>
        <div class="zk-legend" ${state.colorByGroup ? '' : 'hidden'}></div>
      </div>

      <button
        type="button"
        class="zk-drawer-reopen"
        title="Open note panel"
        ${state.drawerCollapsed ? '' : 'hidden'}
      >
        ${ICONS.panelOpen}
        <span>Open Note</span>
      </button>

      <aside class="zk-drawer" aria-label="Selected note">
        <div class="zk-drawer-topbar">
          <div class="zk-mode-tabs">
            <button type="button" class="zk-tab is-active" data-mode="read">Read</button>
            ${!readOnly ? `<button type="button" class="zk-tab" data-mode="edit">Edit .md</button>` : ''}
          </div>
          <div class="zk-drawer-actions">
            <span class="zk-save-indicator"></span>
            <button type="button" class="zk-icon-btn" data-action="download-md" title="Download current note (.md)">
              ${ICONS.download}
            </button>
            ${
              !readOnly
                ? `<button type="button" class="zk-icon-btn zk-danger-hover" data-action="delete-note" title="Delete note">
                     ${ICONS.trash}
                   </button>`
                : ''
            }
            <button type="button" class="zk-icon-btn" data-action="collapse-drawer" title="Collapse note panel">
              ${ICONS.panelClose}
            </button>
          </div>
        </div>

        <div class="zk-drawer-scroll">
          <div class="zk-note-header">
            <div class="zk-note-meta-top">
              <span class="zk-group-pill"></span>
              <span class="zk-slug-code"></span>
              <span class="zk-degree-pill"></span>
            </div>
            <h1 class="zk-note-title"></h1>
            <div class="zk-note-tags"></div>
          </div>

          <article class="zk-read-pane zk-markdown-body"></article>

          <div class="zk-edit-pane" hidden>
            <div class="zk-editor-help">
              <span>Markdown + YAML frontmatter. Type <code>[[</code> to link notes.</span>
            </div>
            <div class="zk-textarea-wrap">
              <textarea class="zk-editor-textarea" spellcheck="false"></textarea>
              <div class="zk-autocomplete" hidden></div>
            </div>
          </div>

          <section class="zk-connections">
            <div class="zk-conn-block">
              <h3 class="zk-conn-heading">
                <span>Linked Mentions (Backlinks)</span>
                <span class="zk-conn-count zk-backlink-count">0</span>
              </h3>
              <div class="zk-backlinks-list"></div>
            </div>

            <div class="zk-conn-block">
              <h3 class="zk-conn-heading">
                <span>Outgoing Links</span>
                <span class="zk-conn-count zk-outgoing-count">0</span>
              </h3>
              <div class="zk-outgoing-list"></div>
            </div>
          </section>
        </div>

        <footer class="zk-drawer-footer">
          <button type="button" class="zk-footer-btn" data-action="export-zip">
            ${ICONS.download}<span>Vault .zip</span>
          </button>
          <button type="button" class="zk-footer-btn zk-reset-seed-btn" data-action="reset-seed" hidden>
            ${ICONS.reset}<span>Reset</span>
          </button>
        </footer>
      </aside>

      <div class="zk-hover-tooltip" hidden></div>
    </div>
  `;

  const el = {
    zkRoot: root.querySelector('.zk-root'),
    canvas: root.querySelector('.zk-canvas'),
    brandTitle: root.querySelector('.zk-brand-title'),
    stats: root.querySelector('.zk-brand-stats'),
    storageBadge: root.querySelector('.zk-storage-badge'),
    vaultSwitcher: root.querySelector('.zk-vault-switcher'),
    newNoteBtn: root.querySelector('.zk-new-note-btn'),
    searchInput: root.querySelector('.zk-search-input'),
    searchClear: root.querySelector('.zk-search-clear'),
    searchResults: root.querySelector('.zk-search-results'),
    colorGroupsBtn: root.querySelector('.zk-color-groups-btn'),
    selectionPill: root.querySelector('.zk-selection-pill'),
    selectionLabel: root.querySelector('.zk-selection-label'),
    selectionClear: root.querySelector('.zk-selection-clear'),
    legend: root.querySelector('.zk-legend'),
    reopenBtn: root.querySelector('.zk-drawer-reopen'),
    drawer: root.querySelector('.zk-drawer'),
    saveIndicator: root.querySelector('.zk-save-indicator'),
    groupPill: root.querySelector('.zk-group-pill'),
    slugCode: root.querySelector('.zk-slug-code'),
    degreePill: root.querySelector('.zk-degree-pill'),
    noteTitle: root.querySelector('.zk-note-title'),
    noteTags: root.querySelector('.zk-note-tags'),
    readPane: root.querySelector('.zk-read-pane'),
    editPane: root.querySelector('.zk-edit-pane'),
    textarea: root.querySelector('.zk-editor-textarea'),
    autocomplete: root.querySelector('.zk-autocomplete'),
    backlinkCount: root.querySelector('.zk-backlink-count'),
    backlinksList: root.querySelector('.zk-backlinks-list'),
    outgoingCount: root.querySelector('.zk-outgoing-count'),
    outgoingList: root.querySelector('.zk-outgoing-list'),
    resetSeedBtn: root.querySelector('.zk-reset-seed-btn'),
    tooltip: root.querySelector('.zk-hover-tooltip'),
  };

  function isVisible() {
    return Boolean(root.isConnected && root.offsetParent !== null);
  }

  function notifyActiveChange() {
    if (!onActiveChange) return;
    const note = state.activeSlug ? store.getNote(state.activeSlug) : null;
    onActiveChange({
      vaultId: activeVault.id,
      vaultLabel: activeVault.label,
      slug: state.activeSlug,
      title: note ? note.title : state.activeSlug || '',
    });
  }

  const graphView = new GraphView({
    canvas: el.canvas,
    rightInset: state.drawerCollapsed ? 0 : computeDrawerWidth(),
    colorByGroup: state.colorByGroup,
    onSelectNode: (node) => {
      handleNodeClick(node);
    },
    onSelectionChange: (selectedNode) => {
      if (selectedNode) {
        el.selectionPill.hidden = false;
        el.selectionLabel.textContent = selectedNode.title;
      } else {
        el.selectionPill.hidden = true;
      }
    },
    onHoverNode: (node) => {
      if (!node) {
        el.tooltip.hidden = true;
        return;
      }
      el.tooltip.hidden = false;
      el.tooltip.innerHTML = node.exists
        ? `<strong>${escapeHtml(node.title)}</strong><span>${node.degree} links / ${escapeHtml(node.group)}</span>`
        : `<strong>${escapeHtml(node.title)}</strong><span class="is-warn">Uncreated note / click to create</span>`;
    },
  });

  graphView.setGraph(store.graph, { resetLayout: true });

  function updateHudStats() {
    const totalNotes = store.notes.size;
    const totalLinks = store.graph.links.length;
    el.stats.textContent = `${totalNotes} notes / ${totalLinks} links`;

    const hasSavedEdits =
      store.persistLocalStorage &&
      typeof localStorage !== 'undefined' &&
      Boolean(localStorage.getItem(store.storageKey));

    if (store.mode === 'fs') {
      el.storageBadge.textContent = 'Vault .md';
      el.storageBadge.title = 'Synced directly with markdown files on disk';
      el.resetSeedBtn.hidden = true;
    } else if (hasSavedEdits) {
      el.storageBadge.textContent = 'Local Edit';
      el.storageBadge.title = 'Modified notes saved in browser localStorage';
      el.resetSeedBtn.hidden = readOnly;
    } else {
      el.storageBadge.textContent = 'Static Vault';
      el.storageBadge.title = 'Bundled Playbook Zettelkasten vault';
      el.resetSeedBtn.hidden = true;
    }
  }

  function renderLegend() {
    el.legend.hidden = !state.colorByGroup;
    if (!state.colorByGroup) return;

    const groups = new Map();
    for (const n of store.graph.nodes) {
      if (!n.exists) continue;
      groups.set(n.group, (groups.get(n.group) || 0) + 1);
    }
    const sorted = [...groups.entries()].sort((a, b) => b[1] - a[1]).slice(0, 8);
    el.legend.innerHTML = sorted
      .map(
        ([group, count]) =>
          `<button type="button" class="zk-legend-item" data-group="${escapeHtml(group)}" title="Filter by ${escapeHtml(group)}">` +
          `<span class="zk-legend-dot" style="background:${getGroupColor(group)}"></span>` +
          `<span>${escapeHtml(group)}</span>` +
          `<em>${count}</em>` +
          `</button>`,
      )
      .join('');
  }

  function setDrawerCollapsed(collapsed) {
    state.drawerCollapsed = collapsed;
    el.zkRoot.classList.toggle('is-drawer-collapsed', collapsed);
    el.reopenBtn.hidden = !collapsed;
    graphView.setRightInset(collapsed ? 0 : computeDrawerWidth());
  }

  function setMode(nextMode) {
    if (readOnly && nextMode === 'edit') return;
    state.mode = nextMode;
    for (const tab of root.querySelectorAll('.zk-mode-tabs .zk-tab')) {
      tab.classList.toggle('is-active', tab.dataset.mode === nextMode);
    }
    el.readPane.hidden = nextMode !== 'read';
    el.editPane.hidden = nextMode !== 'edit';
    if (nextMode === 'edit') {
      const note = store.getNote(state.activeSlug);
      if (note && el.textarea.value !== note.raw) {
        el.textarea.value = note.raw;
      }
      el.textarea.focus();
    } else {
      el.autocomplete.hidden = true;
    }
  }

  function renderActiveNote() {
    const note = store.getNote(state.activeSlug);
    if (!note) return;

    const nodeMeta = store.graph.nodes.find((n) => n.id === note.slug);
    const groupColor = getGroupColor(note.group);

    el.groupPill.textContent = note.group;
    el.groupPill.style.setProperty('--pill-color', groupColor);
    el.slugCode.textContent = `${note.slug}.md`;
    el.degreePill.textContent = nodeMeta ? `${nodeMeta.degree} connections` : '0 connections';
    el.noteTitle.textContent = note.title;

    el.noteTags.innerHTML = note.tags
      .map(
        (t) =>
          `<button type="button" class="zk-tag-chip" data-tag="${escapeHtml(t)}">#${escapeHtml(t)}</button>`,
      )
      .join('');

    el.readPane.innerHTML = renderNoteHtml(note, store.graph.resolveTarget);

    if (state.mode === 'edit' && document.activeElement !== el.textarea) {
      el.textarea.value = note.raw;
    } else if (state.mode !== 'edit') {
      el.textarea.value = note.raw;
    }

    const backlinks = store.graph.backlinks.get(note.slug) || [];
    el.backlinkCount.textContent = String(backlinks.length);
    if (backlinks.length === 0) {
      el.backlinksList.innerHTML = `<p class="zk-empty-muted">No incoming links yet. Reference this note with <code>[[${escapeHtml(note.title)}]]</code>.</p>`;
    } else {
      el.backlinksList.innerHTML = backlinks
        .map(
          (b) => `
          <button type="button" class="zk-backlink-card" data-open-slug="${escapeHtml(b.sourceSlug)}">
            <div class="zk-backlink-title">${escapeHtml(b.sourceTitle)}</div>
            <div class="zk-backlink-snippet">${escapeHtml(b.snippet)}</div>
          </button>`,
        )
        .join('');
    }

    const outgoingIds = [...(store.graph.outgoing.get(note.slug) || [])];
    el.outgoingCount.textContent = String(outgoingIds.length);
    if (outgoingIds.length === 0) {
      el.outgoingList.innerHTML = `<p class="zk-empty-muted">No outgoing <code>[[wikilinks]]</code> in this note.</p>`;
    } else {
      el.outgoingList.innerHTML = outgoingIds
        .map((id) => {
          const targetNode = store.graph.nodes.find((n) => n.id === id);
          if (!targetNode) return '';
          return `
            <button
              type="button"
              class="zk-outgoing-chip ${targetNode.exists ? '' : 'is-unresolved'}"
              data-open-slug="${escapeHtml(targetNode.exists ? targetNode.id : '')}"
              data-create-title="${escapeHtml(targetNode.exists ? '' : targetNode.title)}"
            >
              <span class="zk-legend-dot" style="background:${getGroupColor(targetNode.group)}"></span>
              <span>${escapeHtml(targetNode.title)}</span>
            </button>`;
        })
        .join('');
    }
  }

  function selectNote(
    slugOrTarget,
    { focusGraph = false, openDrawer = true, switchToRead = false, pinGraph = true } = {},
  ) {
    let note = store.getNote(slugOrTarget) || store.resolveNote(slugOrTarget);
    if (!note) {
      const first = store.getAllNotes()[0];
      if (!first) return;
      note = first;
    }

    state.activeSlug = note.slug;
    vaultLastSlug.set(activeVault.id, note.slug);
    if (switchToRead) setMode('read');
    if (openDrawer && state.drawerCollapsed) {
      setDrawerCollapsed(false);
    }

    graphView.setActiveSlug(note.slug, { focus: focusGraph, pin: pinGraph });
    renderActiveNote();
    notifyActiveChange();
    if (typeof options.onNavigate === 'function') {
      options.onNavigate(note);
    }
  }

  async function handleNodeClick(node) {
    if (node.exists) {
      selectNote(node.id, { openDrawer: true, pinGraph: true });
      return;
    }
    if (readOnly) return;
    const title = node.rawTarget || node.title;
    const created = await store.createNote({
      title,
      group: 'general',
      tags: ['fleeting'],
    });
    selectNote(created.slug, { focusGraph: true, openDrawer: true, pinGraph: true });
    setMode('edit');
  }

  async function flushPendingSave() {
    if (!state.dirty || readOnly) return;
    clearTimeout(state.saveTimer);
    state.saveTimer = null;
    state.dirty = false;
    if (state.activeSlug && store.getNote(state.activeSlug)) {
      await store.saveNote(state.activeSlug, el.textarea.value);
      el.saveIndicator.textContent = 'Saved';
    }
  }

  let unsubscribeStore = null;
  function bindStoreSubscription(targetStore) {
    if (unsubscribeStore) unsubscribeStore();
    unsubscribeStore = targetStore.subscribe((evt) => {
      updateHudStats();
      renderLegend();
      graphView.setGraph(targetStore.graph, { resetLayout: evt.type === 'reset' });
      if (state.activeSlug && targetStore.getNote(state.activeSlug)) {
        renderActiveNote();
      } else {
        selectNote(activeVault.initialNote, { openDrawer: false });
      }
    });
  }

  async function switchVault(vaultId, { targetNote = null, pinGraph = false, focusGraph = false } = {}) {
    const nextIdx = vaultConfigs.findIndex((v) => v.id === vaultId);
    if (nextIdx < 0) return;

    if (nextIdx === activeVaultIdx && !state.switchingVault) {
      if (targetNote) {
        selectNote(targetNote, {
          openDrawer: true,
          switchToRead: true,
          pinGraph,
          focusGraph,
        });
      }
      return;
    }

    if (state.switchingVault) return;
    state.switchingVault = true;

    try {
      await flushPendingSave();

      if (state.activeSlug) {
        vaultLastSlug.set(activeVault.id, state.activeSlug);
      }

      activeVaultIdx = nextIdx;
      activeVault = vaultConfigs[activeVaultIdx];

      if (el.vaultSwitcher) {
        for (const btn of el.vaultSwitcher.querySelectorAll('.zk-vault-tab')) {
          const active = btn.dataset.vaultId === activeVault.id;
          btn.classList.toggle('is-active', active);
          btn.setAttribute('aria-selected', String(active));
        }
      }

      el.brandTitle.textContent = activeVault.title;

      store = await resolveVaultStore(activeVault);
      bindStoreSubscription(store);

      state.searchQuery = '';
      el.searchInput.value = '';
      el.searchClear.hidden = true;
      el.searchResults.hidden = true;
      graphView.setSearchQuery('', null);

      state.localDepth = 0;
      for (const b of root.querySelectorAll('.zk-seg-btn')) {
        b.classList.toggle('is-active', Number(b.dataset.depth) === 0);
      }
      graphView.localDepth = 0;

      graphView.setSelectedSlug(null);
      el.selectionPill.hidden = true;

      updateHudStats();
      renderLegend();
      graphView.setGraph(store.graph, { resetLayout: true });

      const desiredSlug = targetNote || vaultLastSlug.get(activeVault.id) || activeVault.initialNote;
      selectNote(desiredSlug, {
        openDrawer: targetNote ? true : !state.drawerCollapsed,
        switchToRead: true,
        pinGraph,
        focusGraph: false,
      });

      requestAnimationFrame(() => {
        if (focusGraph && state.activeSlug) {
          graphView.focusOnNode(state.activeSlug);
        } else {
          graphView.fitView();
        }
      });
    } finally {
      state.switchingVault = false;
    }
  }

  function runSearch(query) {
    state.searchQuery = query;
    const clean = query.trim().toLowerCase();
    el.searchClear.hidden = clean.length === 0;

    if (!clean) {
      el.searchResults.hidden = true;
      graphView.setSearchQuery('', null);
      return;
    }

    const tagFilter = clean.startsWith('#') ? clean.slice(1) : null;
    const matches = [];
    const matchSet = new Set();

    for (const note of store.notes.values()) {
      let score = 0;
      if (tagFilter) {
        if (note.tags.some((t) => t.includes(tagFilter))) score = 10;
      } else {
        const titleL = note.title.toLowerCase();
        if (titleL === clean) score = 30;
        else if (titleL.startsWith(clean)) score = 22;
        else if (titleL.includes(clean)) score = 16;
        else if (note.tags.some((t) => t.includes(clean))) score = 12;
        else if (note.group.toLowerCase().includes(clean)) score = 10;
        else if (note.body.toLowerCase().includes(clean)) score = 6;
      }

      if (score > 0) {
        matches.push({ note, score });
        matchSet.add(note.slug);
      }
    }

    matches.sort((a, b) => b.score - a.score || a.note.title.localeCompare(b.note.title));
    graphView.setSearchQuery(clean, matchSet);

    if (matches.length === 0) {
      el.searchResults.hidden = false;
      el.searchResults.innerHTML = `
        <div class="zk-search-empty">
          <span>No matching notes for "${escapeHtml(query)}"</span>
          ${
            !readOnly
              ? `<button type="button" class="zk-btn zk-btn-primary zk-create-from-search" data-title="${escapeHtml(query.replace(/^#/, ''))}">
                   Create "${escapeHtml(query.replace(/^#/, ''))}"
                 </button>`
              : ''
          }
        </div>`;
      return;
    }

    el.searchResults.hidden = false;
    el.searchResults.innerHTML = matches
      .slice(0, 8)
      .map(
        ({ note }) => `
        <button type="button" class="zk-search-item" data-open-slug="${escapeHtml(note.slug)}">
          <span class="zk-legend-dot" style="background:${getGroupColor(note.group)}"></span>
          <span class="zk-search-item-title">${escapeHtml(note.title)}</span>
          <span class="zk-search-item-group">${escapeHtml(note.group)}</span>
        </button>`,
      )
      .join('');
  }

  function scheduleAutosave() {
    if (readOnly || !state.activeSlug) return;
    state.dirty = true;
    el.saveIndicator.textContent = 'Saving…';
    clearTimeout(state.saveTimer);
    state.saveTimer = setTimeout(async () => {
      try {
        await store.saveNote(state.activeSlug, el.textarea.value);
        state.dirty = false;
        el.saveIndicator.textContent = 'Saved';
        setTimeout(() => {
          if (!state.dirty && el.saveIndicator.textContent === 'Saved') {
            el.saveIndicator.textContent = '';
          }
        }, 1400);
      } catch (err) {
        el.saveIndicator.textContent = 'Save error';
        console.error(err);
      }
    }, 320);
  }

  function updateWikilinkAutocomplete() {
    const ta = el.textarea;
    const cursor = ta.selectionStart;
    const before = ta.value.slice(0, cursor);
    const openIdx = before.lastIndexOf('[[');
    if (openIdx === -1) {
      el.autocomplete.hidden = true;
      return;
    }
    const between = before.slice(openIdx + 2);
    if (between.includes(']]') || between.includes('\n')) {
      el.autocomplete.hidden = true;
      return;
    }

    const q = between.split('|')[0].trim().toLowerCase();
    const candidates = store
      .getAllNotes()
      .filter((n) => !q || n.title.toLowerCase().includes(q) || n.slug.includes(q))
      .slice(0, 7);

    if (candidates.length === 0) {
      el.autocomplete.hidden = true;
      return;
    }

    el.autocomplete.hidden = false;
    el.autocomplete.innerHTML = candidates
      .map(
        (n, idx) => `
        <button type="button" class="zk-ac-item ${idx === 0 ? 'is-selected' : ''}" data-insert-title="${escapeHtml(n.title)}" data-open-idx="${openIdx}">
          <span>${escapeHtml(n.title)}</span>
          <code>${escapeHtml(n.slug)}</code>
        </button>`,
      )
      .join('');
  }

  function insertAutocompleteTitle(title, openIdx) {
    const ta = el.textarea;
    const cursor = ta.selectionStart;
    const after = ta.value.slice(cursor);
    const closingAlready = after.startsWith(']]') ? 2 : 0;
    const replacement = `[[${title}]]`;
    ta.value = ta.value.slice(0, openIdx) + replacement + ta.value.slice(cursor + closingAlready);
    const nextPos = openIdx + replacement.length;
    ta.focus();
    ta.setSelectionRange(nextPos, nextPos);
    el.autocomplete.hidden = true;
    scheduleAutosave();
  }

  el.searchInput.addEventListener('input', (e) => runSearch(e.target.value));

  el.searchClear.addEventListener('click', () => {
    el.searchInput.value = '';
    runSearch('');
    el.searchInput.focus();
  });

  if (el.vaultSwitcher) {
    el.vaultSwitcher.addEventListener('click', (e) => {
      const tab = e.target.closest('[data-vault-id]');
      if (!tab) return;
      switchVault(tab.dataset.vaultId, { pinGraph: false, focusGraph: false });
    });
  }

  if (el.newNoteBtn) {
    el.newNoteBtn.addEventListener('click', async () => {
      const title = window.prompt('New Zettelkasten note title:');
      if (!title || !title.trim()) return;
      const current = store.getNote(state.activeSlug);
      const body =
        `Atomic note connected to [[${current ? current.title : 'GitHub'}]].\n\n` +
        `## Key Idea\n- \n`;
      const created = await store.createNote({
        title: title.trim(),
        group: current ? current.group : 'general',
        tags: [],
        body,
      });
      selectNote(created.slug, { focusGraph: true, openDrawer: true, pinGraph: true });
      setMode('edit');
    });
  }

  root.querySelectorAll('.zk-seg-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const depth = Number(btn.dataset.depth) || 0;
      state.localDepth = depth;
      root.querySelectorAll('.zk-seg-btn').forEach((b) => b.classList.toggle('is-active', b === btn));
      graphView.setLocalDepth(depth);
    });
  });

  el.colorGroupsBtn.addEventListener('click', () => {
    state.colorByGroup = !state.colorByGroup;
    el.colorGroupsBtn.classList.toggle('is-active', state.colorByGroup);
    el.colorGroupsBtn.setAttribute('aria-pressed', String(state.colorByGroup));
    graphView.setColorByGroup(state.colorByGroup);
    renderLegend();
  });

  el.selectionClear.addEventListener('click', () => {
    graphView.setSelectedSlug(null);
  });

  root.querySelectorAll('.zk-mode-tabs .zk-tab').forEach((tab) => {
    tab.addEventListener('click', () => setMode(tab.dataset.mode));
  });

  el.reopenBtn.addEventListener('click', () => setDrawerCollapsed(false));

  el.textarea.addEventListener('input', () => {
    scheduleAutosave();
    updateWikilinkAutocomplete();
  });

  el.textarea.addEventListener('keydown', (e) => {
    if (!el.autocomplete.hidden && (e.key === 'Enter' || e.key === 'Tab')) {
      const first = el.autocomplete.querySelector('.zk-ac-item');
      if (first) {
        e.preventDefault();
        insertAutocompleteTitle(first.dataset.insertTitle, Number(first.dataset.openIdx));
      }
    } else if (!el.autocomplete.hidden && e.key === 'Escape') {
      e.preventDefault();
      e.stopPropagation();
      el.autocomplete.hidden = true;
    }
  });

  el.canvas.addEventListener('pointermove', (e) => {
    if (el.tooltip.hidden) return;
    const rect = root.getBoundingClientRect();
    el.tooltip.style.left = `${e.clientX - rect.left + 14}px`;
    el.tooltip.style.top = `${e.clientY - rect.top + 14}px`;
  });

  root.addEventListener('click', async (e) => {
    const wl = e.target.closest('.zk-wikilink');
    if (wl) {
      e.preventDefault();
      const target = wl.dataset.wikilink;
      const resolved = wl.dataset.resolved;
      if (resolved && store.getNote(resolved)) {
        selectNote(resolved, { focusGraph: true, openDrawer: true, pinGraph: true });
      } else if (!readOnly && target) {
        const created = await store.createNote({
          title: target,
          group: 'general',
          tags: ['fleeting'],
          body: `Linked from [[${store.getNote(state.activeSlug)?.title || 'GitHub'}]].\n`,
        });
        selectNote(created.slug, { focusGraph: true, openDrawer: true, pinGraph: true });
        setMode('edit');
      }
      return;
    }

    const openBtn = e.target.closest('[data-open-slug]');
    if (openBtn) {
      const slug = openBtn.dataset.openSlug;
      const createTitle = openBtn.dataset.createTitle;
      if (slug) {
        el.searchResults.hidden = true;
        selectNote(slug, { focusGraph: true, openDrawer: true, switchToRead: true, pinGraph: true });
      } else if (!readOnly && createTitle) {
        const created = await store.createNote({ title: createTitle });
        selectNote(created.slug, { focusGraph: true, openDrawer: true, pinGraph: true });
        setMode('edit');
      }
      return;
    }

    const createFromSearch = e.target.closest('.zk-create-from-search');
    if (createFromSearch && !readOnly) {
      const created = await store.createNote({ title: createFromSearch.dataset.title });
      el.searchInput.value = '';
      runSearch('');
      selectNote(created.slug, { focusGraph: true, openDrawer: true, pinGraph: true });
      setMode('edit');
      return;
    }

    const tagBtn = e.target.closest('[data-tag]');
    if (tagBtn) {
      const q = `#${tagBtn.dataset.tag}`;
      el.searchInput.value = q;
      runSearch(q);
      return;
    }

    const groupBtn = e.target.closest('[data-group]');
    if (groupBtn) {
      const g = groupBtn.dataset.group;
      const next = el.searchInput.value === g ? '' : g;
      el.searchInput.value = next;
      runSearch(next);
      return;
    }

    const acBtn = e.target.closest('.zk-ac-item');
    if (acBtn) {
      insertAutocompleteTitle(acBtn.dataset.insertTitle, Number(acBtn.dataset.openIdx));
      return;
    }

    const actionBtn = e.target.closest('[data-action]');
    if (actionBtn) {
      const action = actionBtn.dataset.action;
      if (action === 'zoom-in') graphView.zoomBy(1.28);
      else if (action === 'zoom-out') graphView.zoomBy(1 / 1.28);
      else if (action === 'fit') graphView.fitView();
      else if (action === 'collapse-drawer') setDrawerCollapsed(true);
      else if (action === 'download-md') {
        const note = store.getNote(state.activeSlug);
        if (!note) return;
        const blob = new Blob([note.raw], { type: 'text/markdown;charset=utf-8' });
        triggerDownload(blob, `${note.slug}.md`);
      } else if (action === 'export-zip') {
        const blob = await store.exportZipBlob();
        triggerDownload(blob, `zettelkasten-${slugify(activeVault.id)}.zip`);
      } else if (action === 'delete-note' && !readOnly) {
        const note = store.getNote(state.activeSlug);
        if (!note) return;
        if (store.notes.size <= 1) {
          window.alert('Cannot delete the last remaining note in the vault.');
          return;
        }
        if (window.confirm(`Delete "${note.title}" (${note.slug}.md)?`)) {
          await store.deleteNote(note.slug);
          selectNote(activeVault.initialNote, { focusGraph: true });
        }
      } else if (action === 'reset-seed' && !readOnly) {
        if (window.confirm('Reset local browser edits back to the original Playbook vault?')) {
          await store.resetToSeed();
          selectNote(activeVault.initialNote, { focusGraph: true });
        }
      }
    }
  });

  const onKeyDown = (e) => {
    if (!isVisible()) return;
    const inField = ['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName);
    if (e.key === '/' && !inField && !e.metaKey && !e.ctrlKey && !e.altKey) {
      e.preventDefault();
      el.searchInput.focus();
      el.searchInput.select();
    }
  };
  window.addEventListener('keydown', onKeyDown);

  const onWindowResize = () => {
    if (!state.drawerCollapsed) {
      graphView.setRightInset(computeDrawerWidth());
    }
  };
  window.addEventListener('resize', onWindowResize);

  bindStoreSubscription(store);

  updateHudStats();
  renderLegend();

  const pinInitial = Boolean(options.pinInitialNote);
  selectNote(activeVault.initialNote, {
    openDrawer: !state.drawerCollapsed,
    switchToRead: true,
    pinGraph: pinInitial,
    focusGraph: false,
  });

  requestAnimationFrame(() => {
    if (pinInitial && state.activeSlug) {
      graphView.focusOnNode(state.activeSlug);
    } else {
      graphView.fitView();
    }
  });

  return {
    store,
    graphView,
    selectNote,
    switchVault,
    async openVaultAndNote(vaultId, noteTarget, { pinGraph = true, focusGraph = true } = {}) {
      graphView.refreshSize();
      if (!state.drawerCollapsed) {
        graphView.setRightInset(computeDrawerWidth());
      }
      await switchVault(vaultId, {
        targetNote: noteTarget,
        pinGraph,
        focusGraph,
      });
    },
    fitView: () => graphView.fitView(),
    hasOpenPopup: () =>
      !el.autocomplete.hidden ||
      (!el.searchResults.hidden && document.activeElement === el.searchInput),
    dismissPopup: () => {
      if (!el.autocomplete.hidden) {
        el.autocomplete.hidden = true;
        return true;
      }
      if (!el.searchResults.hidden && document.activeElement === el.searchInput) {
        el.searchResults.hidden = true;
        el.searchInput.blur();
        return true;
      }
      return false;
    },
    destroy() {
      clearTimeout(state.saveTimer);
      if (unsubscribeStore) unsubscribeStore();
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('resize', onWindowResize);
      graphView.destroy();
      root.innerHTML = '';
    },
  };
}

function triggerDownload(blob, filename) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
