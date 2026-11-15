import type { PlaybookCategory } from '../playbook-categories';
import type { ZettelkastenVaultId } from './vaults';

export interface PlaybookZettelkastenTarget {
  vault: ZettelkastenVaultId;
  note: string;
  /** Optional 0-based slide index -> note slug override for multi-product umbrella decks */
  slideNotes?: Record<number, string>;
}

export const CATEGORY_TO_VAULT: Record<PlaybookCategory, ZettelkastenVaultId> = {
  introduction: 'introduction',
  plan: 'plan',
  develop: 'develop',
  review: 'review',
  secure: 'security',
  operate: 'extended',
  administration: 'administration',
};

export const PLAYBOOK_ZETTELKASTEN_MAP: Record<string, PlaybookZettelkastenTarget> = {
  // 01 Introduction -> vault: introduction
  github: { vault: 'introduction', note: 'github' },
  'github-copilot': { vault: 'introduction', note: 'github-copilot' },
  'hands-on': { vault: 'introduction', note: 'ai-developer-platform' },

  // 02 Plan -> vault: plan
  'collaboration-tools': {
    vault: 'plan',
    note: 'issues-and-sub-issues',
    slideNotes: {
      2: 'issue-fields',
      3: 'github-discussions',
      4: 'github-projects',
    },
  },
  'harness-engineering': { vault: 'plan', note: 'github' },
  mcp: { vault: 'plan', note: 'mcp-servers' },
  instructions: { vault: 'plan', note: 'custom-instructions' },
  'agent-skills': { vault: 'plan', note: 'agent-skills' },
  'custom-agent': { vault: 'plan', note: 'custom-agents' },
  hooks: { vault: 'plan', note: 'hooks' },
  'context-engineering': { vault: 'plan', note: 'subagents' },

  // 03 Develop -> vault: develop
  'copilot-chat': { vault: 'develop', note: 'copilot-in-vs-code' },
  'vscode-agents-window': { vault: 'develop', note: 'vs-code-agents-window' },
  cli: { vault: 'develop', note: 'copilot-cli' },
  'cloud-agent': { vault: 'develop', note: 'copilot-cloud-agent' },
  'partner-agent': { vault: 'develop', note: 'partner-agents' },
  'copilot-app': { vault: 'develop', note: 'github-copilot-app' },
  codespaces: { vault: 'develop', note: 'github-codespaces' },
  'github-spaces': { vault: 'develop', note: 'copilot-spaces' },

  // 04 Review -> vault: review
  'pull-requests': { vault: 'review', note: 'pull-requests' },
  'copilot-code-review': { vault: 'review', note: 'copilot-code-review' },

  // 05 Test & Secure -> vault: security ("Test & Secure")
  'github-actions': { vault: 'security', note: 'github-actions' },
  'github-advanced-security': { vault: 'security', note: 'ghas' },
  'code-scanning': { vault: 'security', note: 'code-scanning' },
  'secret-scanning': { vault: 'security', note: 'secret-protection' },
  dependabot: { vault: 'security', note: 'dependabot' },
  'code-quality': { vault: 'security', note: 'code-quality' },

  // 06 Operate -> vault: extended ("Overall Extended", where group="operate" lives)
  'agentic-workflow': { vault: 'extended', note: 'agentic-workflows' },
  'copilot-metrics': { vault: 'extended', note: 'copilot-metrics' },
  'copilot-memory': { vault: 'extended', note: 'copilot-memory' },
  'operational-tools': { vault: 'extended', note: 'packages-and-github-apps' },
  'token-optimization': { vault: 'extended', note: 'copilot-model-selection' },

  // 07 Administration -> vault: administration
  'enterprise-setup': { vault: 'administration', note: 'enterprise-trial-and-initial-setup' },
  'ghec-emu-data-residency': { vault: 'administration', note: 'github-enterprise-cloud' },
  governance: { vault: 'administration', note: 'enterprise-governance' },
  'license-management': { vault: 'administration', note: 'ghe-and-copilot-licenses' },
  'usage-based-billing': { vault: 'administration', note: 'usage-based-billing' },
  'cost-centers-and-budgets': { vault: 'administration', note: 'cost-centers' },
  migrations: { vault: 'administration', note: 'github-migrations' },
};

export function resolvePlaybookZettelkastenTarget(
  playbookSlug: string,
  category?: PlaybookCategory,
  slideIndex?: number,
): { vault: ZettelkastenVaultId; note: string } {
  const cleanSlug = String(playbookSlug || '').trim().toLowerCase();
  const mapped = PLAYBOOK_ZETTELKASTEN_MAP[cleanSlug];
  if (mapped) {
    const slideOverride =
      typeof slideIndex === 'number' && mapped.slideNotes ? mapped.slideNotes[slideIndex] : undefined;
    return {
      vault: mapped.vault,
      note: slideOverride || mapped.note,
    };
  }

  const fallbackVault: ZettelkastenVaultId =
    (category && CATEGORY_TO_VAULT[category]) || 'extended';
  return {
    vault: fallbackVault,
    note: cleanSlug || 'github',
  };
}
