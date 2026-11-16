export type ZettelkastenVaultId =
  | 'introduction'
  | 'plan'
  | 'develop'
  | 'review'
  | 'security'
  | 'administration'
  | 'extended';

export interface ZettelkastenVaultConfig {
  id: ZettelkastenVaultId;
  label: string;
  title: string;
  accent?: string;
  retroAccent?: string;
  loadSeedNotes: () => Promise<{ default: Record<string, string> }>;
  apiBaseUrl: null;
  storageKey: string;
  initialNote: string;
}

export const ZETTELKASTEN_VAULTS: ZettelkastenVaultConfig[] = [
  {
    id: 'introduction',
    label: 'Introduction',
    title: 'Introduction',
    accent: '#5eead4',
    retroAccent: '#00f0ff',
    loadSeedNotes: () => import('./vault-loaders/introduction'),
    apiBaseUrl: null,
    storageKey: 'akq:zk:v1:introduction',
    initialNote: 'github',
  },
  {
    id: 'plan',
    label: 'Plan',
    title: 'Plan',
    accent: '#86efac',
    retroAccent: '#9bbc0f',
    loadSeedNotes: () => import('./vault-loaders/plan'),
    apiBaseUrl: null,
    storageKey: 'akq:zk:v1:plan',
    initialNote: 'github',
  },
  {
    id: 'develop',
    label: 'Develop',
    title: 'Develop',
    accent: '#93a8ff',
    retroAccent: '#ff2e88',
    loadSeedNotes: () => import('./vault-loaders/develop'),
    apiBaseUrl: null,
    storageKey: 'akq:zk:v1:develop',
    initialNote: 'github',
  },
  {
    id: 'review',
    label: 'Review',
    title: 'Review',
    accent: '#fcd34d',
    retroAccent: '#ffb000',
    loadSeedNotes: () => import('./vault-loaders/review'),
    apiBaseUrl: null,
    storageKey: 'akq:zk:v1:review',
    initialNote: 'github',
  },
  {
    id: 'security',
    label: 'Test & Secure',
    title: 'Test & Secure',
    accent: '#67e8f9',
    retroAccent: '#38bdf8',
    loadSeedNotes: () => import('./vault-loaders/security'),
    apiBaseUrl: null,
    storageKey: 'akq:zk:v1:security',
    initialNote: 'github',
  },
  {
    id: 'administration',
    label: 'Administration',
    title: 'Administration',
    accent: '#c4b5fd',
    retroAccent: '#bd93f9',
    loadSeedNotes: () => import('./vault-loaders/administration'),
    apiBaseUrl: null,
    storageKey: 'akq:zk:v1:administration',
    initialNote: 'github',
  },
  {
    id: 'extended',
    label: 'Overall Extended',
    title: 'Overall Extended',
    accent: '#5eead4',
    retroAccent: '#00f0ff',
    loadSeedNotes: () => import('./vault-loaders/extended'),
    apiBaseUrl: null,
    storageKey: 'akq:zk:v1:extended',
    initialNote: 'github',
  },
];
