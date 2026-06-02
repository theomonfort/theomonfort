export const locales = ['ja', 'en'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'ja';

export function isLocale(value: string | undefined): value is Locale {
  return value === 'ja' || value === 'en';
}

export function otherLocale(locale: Locale): Locale {
  return locale === 'ja' ? 'en' : 'ja';
}

export function stripBase(pathname: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  if (base && pathname.startsWith(base)) {
    return pathname.slice(base.length) || '/';
  }
  return pathname || '/';
}

export function normalizedPath(path = '/'): string {
  if (!path.startsWith('/')) return `/${path}`;
  return path;
}

export function localizedPath(locale: Locale, path = '/'): string {
  const normalized = normalizedPath(path);
  const localePath =
    locale === defaultLocale
      ? normalized
      : normalized === '/'
        ? `/${locale}`
        : `/${locale}${normalized}`;
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  if (!base) return localePath;
  return localePath === '/' ? `${base}/` : `${base}${localePath}`;
}

export function unprefixedLocalePath(locale: Locale, path = '/'): string {
  const normalized = normalizedPath(path);
  return locale === defaultLocale
    ? normalized
    : normalized === '/'
      ? `/${locale}`
      : `/${locale}${normalized}`;
}

export function contentPathFromLocalePath(pathname: string): { locale: Locale; path: string } {
  const noBase = stripBase(pathname).replace(/\/$/, '') || '/';
  if (noBase === '/en') return { locale: 'en', path: '/' };
  if (noBase.startsWith('/en/')) return { locale: 'en', path: noBase.slice(3) || '/' };
  return { locale: defaultLocale, path: noBase };
}

export const siteCopy = {
  ja: {
    lang: 'ja',
    localeCode: 'ja_JP',
    siteTitle: 'AI KUDŌ KAIHATSU QUEST — AI駆動開発クエスト',
    siteDescription:
      'GitHub Copilot で AI 駆動開発を SDLC 全体（Plan → Code → Review → Secure → Operate）にわたって学ぶ、レトロ JRPG 風の道場。',
    brandAria: 'AI 駆動開発 QUEST — ホームへ',
    brandMiddle: '駆動開発',
    nav: {
      hub: 'HUB',
      playbook: 'PLAYBOOK',
      equipment: 'EQUIPMENT',
      philosophy: 'Q&A',
      links: 'LINKS',
      handson: 'HANDS-ON',
      hubShort: '部屋',
      playbookShort: 'プレイブック',
      equipmentShort: '装備所',
      philosophyShort: '問答',
      linksShort: '泉',
      handsonShort: 'ハンズオン',
    },
    footer: {
      end: '▮ END OF DEMO',
      tagline: ['このサイトは AI駆動開発 への愛で作られた。', 'コードは詩、AI は楽器、君の "好み" が世界を変える。'],
      languageLabel: 'LANGUAGE',
      switchTo: 'English',
      konami: '↑↑↓↓←→←→BA で何かが起こる？',
    },
    common: {
      backHome: '◀ 道場に戻る',
      translationPending: '英語版は準備中です。現在は日本語コンテンツを表示しています。',
      readDetails: '▶ 詳細を見る ↗',
      skipTypewriter: 'クリックでスキップ',
    },
    home: {
      title: 'AI 駆動開発 QUEST — レトロ道場へようこそ',
      insertCoin: '▮ INSERT COIN ▮',
      subtitle: '— with GitHub Copilot —',
      hint: ['▶ 家具をクリック', '用語を学び、スキルを装備し、自分の "好み" で世界を作れ'],
      navHint: '家具をクリック / Tabキーで移動',
    },
    playbook: {
      title: 'プレイブック — AI 開発 QUEST',
      chapter: '▮ CHAPTER 1 ▮',
      heading: 'プレイブック',
      subtitle: '— THE AI DEV PLAYBOOK —',
      intro:
        'SDLC の各フェーズで使う GitHub Copilot のツールと概念を一覧化。企画 → 開発 → レビュー → テスト & 品質保証 → 運用まで、AI 駆動開発の全体像を体系的に学べる。',
      itemCount: '項目',
      readMore: '詳細を読む',
      backToList: '◀ 用語一覧',
      officialLinks: '▮ 公式リンク',
      related: '▮ 関連用語',
      presentationMode: 'プレゼンモード',
      slides: 'スライド',
      exit: '終了',
      tocLabel: 'プレゼン目次',
    },
    handson: {
      title: 'ハンズオン — AI 開発 QUEST',
      chapter: '▮ WORKSHOP ▮',
      heading: 'ハンズオン',
      subtitle: '— HANDS-ON WORKSHOP —',
      intro:
        'プレイブックの概念を実際に手を動かして体験する勉強会。PLAN → CODE → REVIEW → TEST & SECURE → OPERATE の各フェーズで GitHub Copilot を使い、Playbook の簡易版サイトを Copilot と一緒に組み上げる。',
      stepLabel: 'STEP',
      stepCount: '全',
      stepCountSuffix: 'ステップ',
      durationSuffix: '分',
      durationLabel: '所要時間',
      start: '▶ ハンズオンを始める',
      backToIndex: '◀ ハンズオン目次',
      prev: '前のステップ',
      next: '次のステップ',
      tocLabel: 'ハンズオン目次',
      tocHeading: 'STEPS',
      open: '目次を開く',
      close: '閉じる',
      copy: 'COPY',
      copied: 'COPIED ✓',
    },
    skills: {
      title: '装備所 — AI 開発 QUEST',
      chapter: '▮ CHAPTER 2 ▮',
      heading: '装備所',
      subtitle: '— EQUIPMENT ROOM —',
      intro:
        'AI駆動開発の道具一式。スキルで型を覚え、ワークフローで技を組み、カスタムエージェントで仲間を育て、MCPで世界と繋がり、CLI / VS Code 拡張で道場を整える。',
      contentNotice: 'このセクションのカード本文はまだ日本語です。',
      sections: {
        skills: { heading: '🎴 スキル', count: '個の装備', body: '再利用可能な手順書（SKILL.md）。チェックを付けてセーブポイントで一括コピー、ターミナルに貼って装備完了。' },
        workflows: { heading: '🌀 エージェンティック・ワークフロー', count: '個の型', body: 'スキルを組み合わせた "技"。これを身につけると AI は "魔法" から "職人道具" になる。' },
        agents: { heading: '🥷 カスタムエージェント', count: '人の仲間', body: '役割・ツール・モデルを束ねた専用エージェント。仮想同僚を増やそう。' },
        mcp: { heading: '🔌 MCP サーバー', count: '個の接続', body: 'AI と外部ツールを繋ぐ Model Context Protocol。Copilot CLI に1コマンドで追加。' },
        cli: { heading: '💻 CLI 拡張', body: 'Copilot CLI / GitHub CLI を拡張する仕組み。ターミナルが "もう一人の自分" になる。' },
        vscode: { heading: '🧰 VS Code 拡張', body: 'AI駆動開発を支えるエディタ周辺装備。"提案 → 検証 → 反映" のループを最短化する。' },
      },
      tipsTitle: '▮ TIPS',
      tips: [
        'グローバルに置けば全プロジェクトで使える（個人マシン推奨）',
        'プロジェクトに置けばチームで共有できる（リポジトリにコミット）',
        'スキルのセーブポイントは何も選ばない状態で押すと全装備を一括コピー',
        'MCP server は Copilot CLI / VS Code / Claude / Cursor すべてで再利用可能',
      ],
    },
    philosophy: {
      title: '哲学の問 — AI 開発 QUEST',
      chapter: '▮ CHAPTER 3 ▮',
      heading: '哲学の問',
      subtitle: '— PHILOSOPHICAL Q&A —',
      intro: '賢者が、君の心の問いに答える。テキストをクリックでスキップ可。',
      contentNotice: 'このQ&A本文はまだ日本語です。',
    },
    links: {
      title: 'リンクの泉 — AI 開発 QUEST',
      chapter: '▮ CHAPTER 4 ▮',
      heading: 'リンクの泉',
      subtitle: '— RESOURCES —',
      intro: 'プレイブック全エントリーの公式リンク。',
      showing: 'リンク表示中',
      placeholder: '検索 / SEARCH... (label, URL, entry, group)',
      filter: 'FILTER ▸',
      all: 'ALL',
      none: 'NONE',
      openEntry: 'OPEN ENTRY ↗',
      noMatchTitle: '▮ NO MATCH ▮',
      noMatchBody: '該当するリンクが見つかりません',
    },
    manifesto: {
      title: 'マニフェスト — AI 開発 QUEST',
      chapter: '▮ FINAL CHAPTER ▮',
      heading: 'マニフェスト',
      subtitle: '— THE SCROLL OF PASSION —',
      lines: [
        '一、コードは詩である。',
        'AI は楽器だ。\n下手に弾けば騒音、心を込めれば音楽になる。',
        '僕たちは、何を作るかを知っている人間でありたい。\n速さに溺れず、流行に飲まれず、\n自分の "好み" を世界に翻訳する者でありたい。',
        'AI は道具だ。だが、道具を選ぶのも、振り下ろすのも、責任を負うのも——\nぜんぶ、君だ。',
        'だから、夢を持て。\n細部に宿る品質を愛せ。\n小さな勝ちを毎日積み上げろ。',
        '— 君の手の中に、世界を変える鍵がある。',
      ],
      author: '▮ 著・AI KUDŌ KAIHATSU QUEST ▮',
    },
    secret: {
      title: '??? — 隠し部屋',
      area: '▮ SECRET AREA ▮',
      heading: '★ KONAMI MASTER ★',
      found: '隠し部屋を発見した！',
      intro: 'ねえ、ここまで来た君に、ひとつだけ秘密を渡すよ。',
      quote: '「いちばん速く成長する人は、\n毎日小さな勝ちを集める人。」',
      body: 'AIに頼んで、自分の小さな自動化を、今日ひとつだけ書こう。\n明日もひとつ。来月にはもう、別の世界が見えてる。',
      stat: '▶ HP +∞ / EXP +999 / 装備: PASSION',
    },
    notFound: {
      title: '404 — 道に迷ったか?',
      description: 'このページは別のディメンションに存在する。',
      mascotAlt: '迷子のマスコット',
      heading: 'このページは見つからない。',
      body: '別のディメンションに飛ばされたか、まだ作られていないか、あるいは隠しエリアかもしれない。',
      home: '◀ ホームへ戻る',
      playbook: 'プレイブックを開く ▶',
    },
    room: {
      alt: '宇宙船の中の90年代日本のティーンの部屋。家具をクリックして探索できる。',
      labels: {
        playbook: '▶ プレイブック',
        equipment: '▶ 装備所',
        links: '▶ 銀河の窓',
        handson: '▶ ハンズオン',
        manifesto: '▶ ？',
        philosophy: '▶ 哲学のCRT',
        secret: '▶ ねこ？',
      },
      aria: {
        playbook: '図書室 / 用語集へ',
        equipment: '装備所 / スキルへ',
        links: '夜景の窓 / リンクへ',
        handson: '夜景の窓 / ハンズオンへ',
        manifesto: '？',
        philosophy: '哲学のCRT / 哲学の問へ',
        secret: 'ねこ？',
      },
    },
    skillGallery: {
      setupSummary: '▶ 必要環境（GitHub CLI v2.90.0 以上）',
      setupIntro: '`gh skill` は GitHub CLI v2.90.0+ に組み込まれた preview コマンド。拡張機能のインストールは不要。古い場合だけアップグレード:',
      setupAfter: 'バージョン確認: `gh --version`。その後、下のカードから装備したいスキルをコピーして実行してください。',
      global: 'ユーザー ~/',
      project: 'プロジェクト .github/',
      savePrefix: '💾 ',
      selected: '選択',
      all: '全装備',
      copySuffix: 'を コピー',
      copiedAll: '▶ コマンドをコピーしました！ターミナルに貼り付けてEnter。',
      selectAria: 'を選択',
      copiedOne: '✓ コピー完了',
      copyOne: '▶ インストール・コマンドをコピー',
    },
    mcpGallery: {
      intro: 'Copilot CLI に MCP サーバーを追加するコマンド。コピーしてターミナルで実行。',
      savePrefix: '💾 ',
      selected: '選択',
      all: '全装備',
      copySuffix: 'を コピー',
      copiedAll: '▶ コマンドをコピーしました！ターミナルに貼り付けてEnter。',
      selectAria: 'を選択',
      copiedOne: '✓ コピー完了',
      copyOne: '▶ インストール・コマンドをコピー',
      docsLink: '↗ ドキュメント',
    },
  },
  en: {
    lang: 'en',
    localeCode: 'en_US',
    siteTitle: 'AI-Driven Development Quest',
    siteDescription:
      'A retro JRPG-style dojo for learning AI-driven development across the SDLC with GitHub Copilot — Plan, Code, Review, Secure, Operate.',
    brandAria: 'AI-Driven Development Quest — home',
    brandMiddle: 'DRIVEN DEV',
    nav: {
      hub: 'HUB',
      playbook: 'PLAYBOOK',
      equipment: 'EQUIPMENT',
      philosophy: 'Q&A',
      links: 'LINKS',
      handson: 'HANDS-ON',
      hubShort: 'Home',
      playbookShort: 'Book',
      equipmentShort: 'Gear',
      philosophyShort: 'Q&A',
      linksShort: 'Links',
      handsonShort: 'Hands',
    },
    footer: {
      end: '▮ END OF DEMO',
      tagline: ['This site was built with love for AI-driven development.', 'Code is poetry, AI is an instrument, and your taste changes the world.'],
      languageLabel: 'LANGUAGE',
      switchTo: '日本語',
      konami: 'Something may happen with ↑↑↓↓←→←→BA.',
    },
    common: {
      backHome: '◀ Back to the dojo',
      translationPending: 'Translation pending. Showing the Japanese source content for now.',
      readDetails: '▶ Read more ↗',
      skipTypewriter: 'Click to skip',
    },
    home: {
      title: 'AI-Driven Development Quest — Welcome to the retro dojo',
      insertCoin: '▮ INSERT COIN ▮',
      subtitle: '— with GitHub Copilot —',
      hint: ['▶ Click the furniture', 'Learn the playbook, equip skills, and build the world with your own taste.'],
      navHint: 'Click furniture / Use Tab to move',
    },
    playbook: {
      title: 'Playbook — AI Dev Quest',
      chapter: '▮ CHAPTER 1 ▮',
      heading: 'Playbook',
      subtitle: '— THE AI DEV PLAYBOOK —',
      intro:
        'A structured map of GitHub Copilot tools and concepts across the SDLC: planning, development, review, testing, security, and operations.',
      itemCount: 'items',
      readMore: 'Read details',
      backToList: '◀ Playbook index',
      officialLinks: '▮ Official links',
      related: '▮ Related entries',
      presentationMode: 'Presentation mode',
      slides: 'Slides',
      exit: 'Exit',
      tocLabel: 'Presentation table of contents',
    },
    handson: {
      title: 'Hands-on — AI Dev Quest',
      chapter: '▮ WORKSHOP ▮',
      heading: 'Hands-on',
      subtitle: '— HANDS-ON WORKSHOP —',
      intro:
        'A walk-through workshop that turns Playbook concepts into muscle memory. Follow PLAN → CODE → REVIEW → TEST & SECURE → OPERATE and build a Playbook-flavored mini-site together with GitHub Copilot.',
      stepLabel: 'STEP',
      stepCount: '',
      stepCountSuffix: ' steps total',
      durationSuffix: ' min',
      durationLabel: 'Estimated time',
      start: '▶ Start the hands-on',
      backToIndex: '◀ Hands-on index',
      prev: 'Previous step',
      next: 'Next step',
      tocLabel: 'Hands-on table of contents',
      tocHeading: 'STEPS',
      open: 'Open contents',
      close: 'Close',
      copy: 'COPY',
      copied: 'COPIED ✓',
    },
    skills: {
      title: 'Equipment Room — AI Dev Quest',
      chapter: '▮ CHAPTER 2 ▮',
      heading: 'Equipment Room',
      subtitle: '— EQUIPMENT ROOM —',
      intro:
        'The toolkit for AI-driven development: reusable skills, workflows, custom agents, MCP servers, CLI plugins, and VS Code extensions.',
      contentNotice: 'The equipment cards are still in Japanese.',
      sections: {
        skills: { heading: '🎴 Skills', count: 'items', body: 'Reusable procedure files (SKILL.md). Select the ones you want and copy the install commands from the save point.' },
        workflows: { heading: '🌀 Agentic workflows', count: 'patterns', body: 'Composed routines that turn AI from magic into a reliable craft tool.' },
        agents: { heading: '🥷 Custom agents', count: 'companions', body: 'Dedicated agents that bundle roles, tools, and models into virtual teammates.' },
        mcp: { heading: '🔌 MCP servers', count: 'connections', body: 'Model Context Protocol bridges AI to external tools. Add to Copilot CLI with one command.' },
        cli: { heading: '💻 CLI plugins', body: 'Extensions for Copilot CLI and GitHub CLI that make the terminal feel like another version of you.' },
        vscode: { heading: '🧰 VS Code extensions', body: 'Editor-side equipment that shortens the propose, verify, and apply loop.' },
      },
      tipsTitle: '▮ TIPS',
      tips: [
        'Install globally to use tools across all projects on your machine.',
        'Install in a project to share tools with the team through the repository.',
        'The skill save point copies every item when nothing is selected.',
        'MCP servers can be reused from Copilot CLI, VS Code, Claude, and Cursor.',
      ],
    },
    philosophy: {
      title: 'Philosophical Q&A — AI Dev Quest',
      chapter: '▮ CHAPTER 3 ▮',
      heading: 'Philosophical Q&A',
      subtitle: '— PHILOSOPHICAL Q&A —',
      intro: 'The sage answers the questions in your heart. Click text to skip the typewriter.',
      contentNotice: 'The Q&A body is still in Japanese.',
    },
    links: {
      title: 'Resource Fountain — AI Dev Quest',
      chapter: '▮ CHAPTER 4 ▮',
      heading: 'Resource Fountain',
      subtitle: '— RESOURCES —',
      intro: 'Official links from every Playbook entry.',
      showing: 'links showing',
      placeholder: 'Search... (label, URL, entry, group)',
      filter: 'FILTER ▸',
      all: 'ALL',
      none: 'NONE',
      openEntry: 'OPEN ENTRY ↗',
      noMatchTitle: '▮ NO MATCH ▮',
      noMatchBody: 'No matching links found.',
    },
    manifesto: {
      title: 'Manifesto — AI Dev Quest',
      chapter: '▮ FINAL CHAPTER ▮',
      heading: 'Manifesto',
      subtitle: '— THE SCROLL OF PASSION —',
      lines: [
        'First: code is poetry.',
        'AI is an instrument.\nPlay it carelessly and it becomes noise; play it with intent and it becomes music.',
        'We should be people who know what we want to build.\nNot drunk on speed, not swallowed by hype,\nbut able to translate our own taste into the world.',
        'AI is a tool. But choosing it, swinging it, and owning the result—\nthat is all on you.',
        'So dream.\nLove the quality hidden in the details.\nStack small wins every day.',
        '— The key to changing the world is in your hands.',
      ],
      author: '▮ Written by AI-Driven Development Quest ▮',
    },
    secret: {
      title: '??? — Secret Room',
      area: '▮ SECRET AREA ▮',
      heading: '★ KONAMI MASTER ★',
      found: 'You found the secret room!',
      intro: 'Since you made it this far, here is one secret.',
      quote: '“The people who grow fastest\ncollect small wins every day.”',
      body: 'Ask AI to write one small automation for you today.\nThen one more tomorrow. Next month, you will already see a different world.',
      stat: '▶ HP +∞ / EXP +999 / EQUIP: PASSION',
    },
    notFound: {
      title: '404 — Lost your path?',
      description: 'This page exists in another dimension.',
      mascotAlt: 'Lost mascot',
      heading: 'This page was not found.',
      body: 'Maybe you were sent to another dimension, maybe it has not been built yet, or maybe it is a hidden area.',
      home: '◀ Back home',
      playbook: 'Open the Playbook ▶',
    },
    room: {
      alt: 'A 1990s Japanese teen bedroom inside a spaceship. Click furniture to explore.',
      labels: {
        playbook: '▶ Playbook',
        equipment: '▶ Equipment',
        links: '▶ Resource window',
        handson: '▶ Hands-on lab',
        manifesto: '▶ ?',
        philosophy: '▶ Philosophy CRT',
        secret: '▶ Cat?',
      },
      aria: {
        playbook: 'Bookshelf / go to Playbook',
        equipment: 'Wardrobe / go to Equipment',
        links: 'Night window / go to Links',
        handson: 'Night window / go to Hands-on',
        manifesto: 'Question mark',
        philosophy: 'Philosophy CRT / go to Q&A',
        secret: 'Cat?',
      },
    },
    skillGallery: {
      setupSummary: '▶ Requirement (GitHub CLI v2.90.0 or newer)',
      setupIntro: '`gh skill` is a preview command built into GitHub CLI v2.90.0+. No extension to install — just make sure your CLI is recent enough:',
      setupAfter: 'Check with `gh --version`, then copy install commands from the cards below.',
      global: 'User ~/',
      project: 'Project .github/',
      savePrefix: '💾 ',
      selected: 'selected',
      all: 'all equipment',
      copySuffix: ' copy',
      copiedAll: '▶ Commands copied. Paste them into your terminal and press Enter.',
      selectAria: 'select',
      copiedOne: '✓ Copied',
      copyOne: '▶ Copy install command',
    },
    mcpGallery: {
      intro: 'Commands to register an MCP server with Copilot CLI. Copy and run in your terminal.',
      savePrefix: '💾 ',
      selected: 'selected',
      all: 'all servers',
      copySuffix: ' copy',
      copiedAll: '▶ Commands copied. Paste them into your terminal and press Enter.',
      selectAria: 'select',
      copiedOne: '✓ Copied',
      copyOne: '▶ Copy install command',
      docsLink: '↗ Docs',
    },
  },
} as const;

export type SiteCopy = (typeof siteCopy)[Locale];
