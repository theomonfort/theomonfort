import type { CategoryId } from './playbook-categories';

export interface GalaxyEntry {
  slug: string;
  title: string;
  subtitle: string;
  summary: string;
  icon: string;
  href: string;
  fallback: boolean;
}

export interface GalaxyCategory {
  id: CategoryId;
  name: string;
  label: string;
  color: string;
  entries: GalaxyEntry[];
}
