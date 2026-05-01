export type CategoryId =
  | 'introduction'
  | 'plan'
  | 'develop'
  | 'review'
  | 'secure'
  | 'operate';

export interface Category {
  id: CategoryId;
  labelJa: string;
  labelEn: string;
  icon: string;
  color: 'magenta' | 'cyan' | 'amber' | 'green';
  actor?: string;
  avatar?: string;
  description?: string;
}

export const categories: Category[] = [
  {
    id: 'introduction',
    labelJa: 'はじめに',
    labelEn: 'Introduction',
    icon: '📘',
    color: 'cyan',
    description: '<strong class="text-neon-cyan">GitHub</strong> と <strong class="text-neon-cyan">GitHub Copilot</strong> ── プラットフォーム全体像。',
  },
  {
    id: 'plan',
    labelJa: '企画',
    labelEn: 'Plan',
    icon: '📋',
    color: 'green',
    actor: 'チームマネージャー',
    avatar: '/theomonfort/octocat-plan.png',
    description: '<strong class="text-gb-green">Issues</strong> と <strong class="text-gb-green">Projects</strong> で計画。<strong class="text-gb-green">MCP サーバー</strong>、<strong class="text-gb-green">Instruction ファイル</strong>、<strong class="text-gb-green">Agent Skills</strong>、<strong class="text-gb-green">Custom Agent</strong> を設定し AI のハーネスを整備。',
  },
  {
    id: 'develop',
    labelJa: '開発',
    labelEn: 'Develop',
    icon: '💻',
    color: 'magenta',
    actor: 'ジュニア開発者',
    avatar: '/theomonfort/avatar-12.jpg',
    description: '<strong class="text-neon-magenta">Codespaces</strong> でチーム共通の環境を使い、<strong class="text-neon-magenta">Plan / Agent モード</strong>や <strong class="text-neon-magenta">Copilot Chat</strong>・<strong class="text-neon-magenta">CLI</strong> でコーディング。<strong class="text-neon-magenta">Cloud Agent</strong> にタスクを委譲して並列開発。',
  },
  {
    id: 'review',
    labelJa: 'レビュー',
    labelEn: 'Review',
    icon: '🔍',
    color: 'amber',
    actor: 'シニア開発者',
    avatar: '/theomonfort/avatar-13.jpg',
    description: '<strong class="text-crt-amber">Copilot</strong> が自動で <strong class="text-crt-amber">Code Review</strong>。PR のレビュー時間を削減し、最終レビューに集中。',
  },
  {
    id: 'secure',
    labelJa: 'テスト & 品質保証',
    labelEn: 'Test & Secure',
    icon: '🛡️',
    color: 'cyan',
    actor: 'シニア開発者',
    avatar: '/theomonfort/avatar-13.jpg',
    description: '<strong class="text-neon-cyan">GitHub Actions</strong> でテストを自動化。<strong class="text-neon-cyan">Code Scanning</strong>・<strong class="text-neon-cyan">Secret Scanning</strong>・<strong class="text-neon-cyan">Dependabot</strong> を有効化してセキュリティを担保。',
  },
  {
    id: 'operate',
    labelJa: '監視',
    labelEn: 'Operate',
    icon: '📊',
    color: 'green',
    actor: 'チーム全体',
    avatar: '/theomonfort/avatar-68.jpg',
    description: '<strong class="text-gb-green">Agentic Workflow</strong> で運用自動化。<strong class="text-gb-green">Copilot Metrics</strong> で AI 利用状況を可視化、<strong class="text-gb-green">Memory</strong> で知識を蓄積。',
  },
];

