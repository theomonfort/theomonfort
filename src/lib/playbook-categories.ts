export type CategoryId =
  | 'introduction'
  | 'plan'
  | 'develop'
  | 'review'
  | 'secure'
  | 'operate'
  | 'administration';

export interface Category {
  id: CategoryId;
  labelJa: string;
  labelEn: string;
  icon: string;
  color: 'magenta' | 'cyan' | 'amber' | 'green';
  actor?: string;
  actorEn?: string;
  avatar?: string;
  description?: string;
  descriptionEn?: string;
}

export const categories: Category[] = [
  {
    id: 'introduction',
    labelJa: 'はじめに',
    labelEn: 'Introduction',
    icon: '📘',
    color: 'cyan',
    actor: 'Mona',
    actorEn: 'Mona',
    avatar: '/theomonfort/octocat-profile-mona.png',
    description: '<strong class="text-neon-cyan">GitHub</strong> と <strong class="text-neon-cyan">GitHub Copilot</strong> ── プラットフォーム全体像。',
    descriptionEn: 'A platform-level overview of <strong class="text-neon-cyan">GitHub</strong> and <strong class="text-neon-cyan">GitHub Copilot</strong>.',
  },
  {
    id: 'plan',
    labelJa: '企画',
    labelEn: 'Plan',
    icon: '📋',
    color: 'green',
    actor: 'チームマネージャー',
    actorEn: 'Team Manager',
    avatar: '/theomonfort/octocat-profile-green.png',
    description: '<strong class="text-gb-green">Issues</strong> と <strong class="text-gb-green">Projects</strong> で計画。<strong class="text-gb-green">MCP サーバー</strong>、<strong class="text-gb-green">Instruction ファイル</strong>、<strong class="text-gb-green">Agent Skills</strong>、<strong class="text-gb-green">Custom Agent</strong> を設定し AI のハーネスを整備。',
    descriptionEn: 'Plan with <strong class="text-gb-green">Issues</strong> and <strong class="text-gb-green">Projects</strong>, then prepare the AI harness with <strong class="text-gb-green">MCP servers</strong>, <strong class="text-gb-green">instruction files</strong>, <strong class="text-gb-green">agent skills</strong>, and <strong class="text-gb-green">custom agents</strong>.',
  },
  {
    id: 'develop',
    labelJa: '開発',
    labelEn: 'Develop',
    icon: '💻',
    color: 'magenta',
    actor: 'ジュニア開発者',
    actorEn: 'Junior Developer',
    avatar: '/theomonfort/octocat-profile-red.png',
    description: '<strong class="text-neon-magenta">Codespaces</strong> でチーム共通の環境を使い、<strong class="text-neon-magenta">Plan / Agent モード</strong>や <strong class="text-neon-magenta">Copilot Chat</strong>・<strong class="text-neon-magenta">CLI</strong> でコーディング。<strong class="text-neon-magenta">Cloud Agent</strong> にタスクを委譲して並列開発。',
    descriptionEn: 'Code in shared <strong class="text-neon-magenta">Codespaces</strong> environments with <strong class="text-neon-magenta">Plan / Agent mode</strong>, <strong class="text-neon-magenta">Copilot Chat</strong>, and the <strong class="text-neon-magenta">CLI</strong>. Delegate work to <strong class="text-neon-magenta">Cloud Agent</strong> for parallel development.',
  },
  {
    id: 'review',
    labelJa: 'レビュー',
    labelEn: 'Review',
    icon: '🔍',
    color: 'amber',
    actor: 'シニア開発者',
    actorEn: 'Senior Developer',
    avatar: '/theomonfort/octocat-profile-yellow.png',
    description: '<strong class="text-crt-amber">Copilot</strong> が自動で <strong class="text-crt-amber">Code Review</strong>。PR のレビュー時間を削減し、最終レビューに集中。',
    descriptionEn: 'Let <strong class="text-crt-amber">Copilot</strong> perform automated <strong class="text-crt-amber">code review</strong> so humans can focus on final judgment.',
  },
  {
    id: 'secure',
    labelJa: 'テスト & 品質保証',
    labelEn: 'Test & Secure',
    icon: '🛡️',
    color: 'cyan',
    actor: 'DevSecOps エンジニア',
    actorEn: 'DevSecOps Engineer',
    avatar: '/theomonfort/octocat-profile-blue.png',
    description: '<strong class="text-neon-cyan">GitHub Actions</strong> でテストを自動化。<strong class="text-neon-cyan">Code Scanning</strong>・<strong class="text-neon-cyan">Secret Scanning</strong>・<strong class="text-neon-cyan">Dependabot</strong> を有効化してセキュリティを担保。',
    descriptionEn: 'Automate tests with <strong class="text-neon-cyan">GitHub Actions</strong>, and protect quality with <strong class="text-neon-cyan">Code Scanning</strong>, <strong class="text-neon-cyan">Secret Scanning</strong>, and <strong class="text-neon-cyan">Dependabot</strong>.',
  },
  {
    id: 'operate',
    labelJa: '運用',
    labelEn: 'Operate',
    icon: '📊',
    color: 'green',
    actor: 'チーム全体',
    actorEn: 'Whole Team',
    avatar: '/theomonfort/octocat-team.png',
    description: '<strong class="text-gb-green">Agentic Workflow</strong> で運用自動化。<strong class="text-gb-green">Copilot Metrics</strong> で AI 利用状況を可視化、<strong class="text-gb-green">Memory</strong> で知識を蓄積。',
    descriptionEn: 'Automate operations with <strong class="text-gb-green">agentic workflows</strong>, visualize AI usage with <strong class="text-gb-green">Copilot Metrics</strong>, and accumulate knowledge through <strong class="text-gb-green">Memory</strong>.',
  },
  {
    id: 'administration',
    labelJa: '管理',
    labelEn: 'Administration',
    icon: '🏛️',
    color: 'magenta',
    actor: 'エンタープライズ管理者',
    actorEn: 'Enterprise Admin',
    avatar: '/theomonfort/octocat-profile-admin.png',
    description: '<strong class="text-neon-magenta">ライセンス</strong>・<strong class="text-neon-magenta">ポリシー</strong>・<strong class="text-neon-magenta">課金</strong> を Enterprise / Organization レベルで統括。誰が何を使えるかを安全に管理。',
    descriptionEn: 'Govern <strong class="text-neon-magenta">licenses</strong>, <strong class="text-neon-magenta">policies</strong>, and <strong class="text-neon-magenta">billing</strong> at the Enterprise and Organization level. Decide safely who gets access to what.',
  },
];

export function localizedCategory(category: Category, locale: 'ja' | 'en') {
  return {
    ...category,
    label: locale === 'ja' ? category.labelJa : category.labelEn,
    secondaryLabel: locale === 'ja' ? category.labelEn : category.labelJa,
    actorLabel: locale === 'ja' ? category.actor : category.actorEn,
    localizedDescription: locale === 'ja' ? category.description : category.descriptionEn,
  };
}
