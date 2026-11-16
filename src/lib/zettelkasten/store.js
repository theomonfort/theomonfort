import { buildGraphData, parseNote, serializeFrontmatter, slugify } from './parser.js';
import { buildStoredZipBlob } from './zip.js';

const DEFAULT_STORAGE_KEY = 'akq:zk:vault:v1';

export class NoteStore {
  /**
   * @param {Object} options
   * @param {Record<string, string>|Map<string, string>} [options.seedNotes]
   * @param {string|null} [options.apiBaseUrl] - Null in static builds so zero /api/notes* requests occur
   * @param {string} [options.storageKey]
   * @param {boolean} [options.persistLocalStorage]
   */
  constructor(options = {}) {
    this.seedNotes = options.seedNotes || {};
    this.apiBaseUrl = options.apiBaseUrl ?? null;
    this.storageKey = options.storageKey || DEFAULT_STORAGE_KEY;
    this.persistLocalStorage = options.persistLocalStorage !== false;

    this.notes = new Map();
    this.graph = null;
    this.mode = 'memory'; // 'fs' | 'local' | 'memory'
    this.listeners = new Set();
  }

  subscribe(fn) {
    this.listeners.add(fn);
    return () => this.listeners.delete(fn);
  }

  emit(event = { type: 'change' }) {
    this.graph = buildGraphData(this.notes, { includeUnresolved: true });
    for (const fn of this.listeners) {
      fn({ ...event, notes: this.notes, graph: this.graph, mode: this.mode });
    }
  }

  getSeedEntries() {
    if (this.seedNotes instanceof Map) {
      return [...this.seedNotes.entries()];
    }
    return Object.entries(this.seedNotes || {});
  }

  async init() {
    if (this.apiBaseUrl && typeof fetch === 'function') {
      try {
        const res = await fetch(this.apiBaseUrl, {
          headers: { Accept: 'application/json' },
        });
        if (res.ok) {
          const payload = await res.json();
          if (payload && Array.isArray(payload.notes)) {
            this.notes.clear();
            for (const item of payload.notes) {
              const parsed = parseNote(item.slug, item.raw);
              this.notes.set(parsed.slug, parsed);
            }
            this.mode = 'fs';
            this.emit({ type: 'init' });
            return this;
          }
        }
      } catch {
        // Fall back to static seed notes / localStorage
      }
    }

    if (this.persistLocalStorage && typeof localStorage !== 'undefined') {
      try {
        const saved = localStorage.getItem(this.storageKey);
        if (saved) {
          const obj = JSON.parse(saved);
          if (obj && typeof obj === 'object' && Object.keys(obj).length > 0) {
            this.notes.clear();
            for (const [slug, raw] of Object.entries(obj)) {
              const parsed = parseNote(slug, raw);
              this.notes.set(parsed.slug, parsed);
            }
            this.mode = 'local';
            this.emit({ type: 'init' });
            return this;
          }
        }
      } catch {
        // Ignore storage read errors
      }
    }

    this.loadSeedIntoMap();
    this.mode = this.persistLocalStorage && typeof localStorage !== 'undefined' ? 'local' : 'memory';
    this.emit({ type: 'init' });
    return this;
  }

  loadSeedIntoMap() {
    this.notes.clear();
    for (const [key, raw] of this.getSeedEntries()) {
      const parsed = parseNote(key, raw);
      this.notes.set(parsed.slug, parsed);
    }
  }

  saveLocalFallback() {
    if (!this.persistLocalStorage || typeof localStorage === 'undefined') return;
    try {
      const out = {};
      for (const [slug, note] of this.notes.entries()) {
        out[slug] = note.raw;
      }
      localStorage.setItem(this.storageKey, JSON.stringify(out));
    } catch {
      // Ignore quota errors
    }
  }

  getNote(slug) {
    return this.notes.get(slugify(slug)) || null;
  }

  resolveNote(target) {
    if (!this.graph) {
      this.graph = buildGraphData(this.notes, { includeUnresolved: true });
    }
    const slug = this.graph.resolveTarget(target);
    return slug ? this.notes.get(slug) || null : null;
  }

  getAllNotes() {
    return [...this.notes.values()].sort((a, b) => a.title.localeCompare(b.title));
  }

  async saveNote(slug, raw) {
    const cleanSlug = slugify(slug);
    if (!cleanSlug) throw new Error('Invalid note slug');

    if (this.mode === 'fs' && this.apiBaseUrl) {
      const res = await fetch(`${this.apiBaseUrl}/${encodeURIComponent(cleanSlug)}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ raw }),
      });
      if (!res.ok) throw new Error(`Failed to save ${cleanSlug}.md`);
    }

    const parsed = parseNote(cleanSlug, raw);
    this.notes.set(cleanSlug, parsed);
    if (this.mode !== 'fs') this.saveLocalFallback();
    this.emit({ type: 'save', slug: cleanSlug });
    return parsed;
  }

  async createNote({ title, group = 'general', tags = [], body = '' }) {
    const cleanTitle = String(title || 'Untitled Note').trim();
    let baseSlug = slugify(cleanTitle) || 'untitled-note';
    let finalSlug = baseSlug;
    let counter = 2;
    while (this.notes.has(finalSlug)) {
      finalSlug = `${baseSlug}-${counter}`;
      counter += 1;
    }

    const defaultBody =
      body ||
      `Write atomic thoughts about **${cleanTitle}** and connect them with \`[[Wikilinks]]\`.\n\n## Related\n- [[GitHub]]\n`;

    const raw = serializeFrontmatter(
      {
        title: cleanTitle,
        group,
        tags,
      },
      defaultBody,
    );

    return this.saveNote(finalSlug, raw);
  }

  async deleteNote(slug) {
    const cleanSlug = slugify(slug);
    if (!this.notes.has(cleanSlug)) return false;

    if (this.mode === 'fs' && this.apiBaseUrl) {
      const res = await fetch(`${this.apiBaseUrl}/${encodeURIComponent(cleanSlug)}`, {
        method: 'DELETE',
      });
      if (!res.ok) throw new Error(`Failed to delete ${cleanSlug}.md`);
    }

    this.notes.delete(cleanSlug);
    if (this.mode !== 'fs') this.saveLocalFallback();
    this.emit({ type: 'delete', slug: cleanSlug });
    return true;
  }

  async resetToSeed() {
    if (this.persistLocalStorage && typeof localStorage !== 'undefined') {
      localStorage.removeItem(this.storageKey);
    }
    this.loadSeedIntoMap();
    this.emit({ type: 'reset' });
  }

  async exportZipBlob() {
    const entries = [];
    for (const [slug, note] of this.notes.entries()) {
      entries.push({ name: `${slug}.md`, content: note.raw });
    }
    return buildStoredZipBlob(entries);
  }
}
