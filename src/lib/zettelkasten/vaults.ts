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
    loadSeedNotes: () => import('./vault-loaders/introduction'),
    apiBaseUrl: null,
    storageKey: 'akq:zk:v1:introduction',
    initialNote: 'github',
  },
  {
    id: 'plan',
    label: 'Plan',
    title: 'Plan',
    loadSeedNotes: () => import('./vault-loaders/plan'),
    apiBaseUrl: null,
    storageKey: 'akq:zk:v1:plan',
    initialNote: 'github',
  },
  {
    id: 'develop',
    label: 'Develop',
    title: 'Develop',
    loadSeedNotes: () => import('./vault-loaders/develop'),
    apiBaseUrl: null,
    storageKey: 'akq:zk:v1:develop',
    initialNote: 'github',
  },
  {
    id: 'review',
    label: 'Review',
    title: 'Review',
    loadSeedNotes: () => import('./vault-loaders/review'),
    apiBaseUrl: null,
    storageKey: 'akq:zk:v1:review',
    initialNote: 'github',
  },
  {
    id: 'security',
    label: 'Test & Secure',
    title: 'Test & Secure',
    loadSeedNotes: () => import('./vault-loaders/security'),
    apiBaseUrl: null,
    storageKey: 'akq:zk:v1:security',
    initialNote: 'github',
  },
  {
    id: 'administration',
    label: 'Administration',
    title: 'Administration',
    loadSeedNotes: () => import('./vault-loaders/administration'),
    apiBaseUrl: null,
    storageKey: 'akq:zk:v1:administration',
    initialNote: 'github',
  },
  {
    id: 'extended',
    label: 'Overall Extended',
    title: 'Overall Extended',
    loadSeedNotes: () => import('./vault-loaders/extended'),
    apiBaseUrl: null,
    storageKey: 'akq:zk:v1:extended',
    initialNote: 'github',
  },
];
