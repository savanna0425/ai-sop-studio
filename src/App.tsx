import {
  ArrowRight,
  BookOpenCheck,
  Boxes,
  BrainCircuit,
  Check,
  ChevronRight,
  ClipboardList,
  Code2,
  Cpu,
  Download,
  FileCode2,
  GitBranch,
  Layers3,
  Library,
  LockKeyhole,
  PackageCheck,
  Play,
  Search,
  ShieldCheck,
  Sparkles,
  Wand2,
} from 'lucide-react'
import { useMemo, useState } from 'react'

type ExportTarget = 'codex' | 'claude'

const slices = [
  {
    name: '需求澄清',
    source: 'team/discovery.md',
    score: '92%',
    tone: 'mint',
  },
  {
    name: 'Codex 插件结构',
    source: 'public/skills',
    score: '88%',
    tone: 'blue',
  },
  {
    name: '失败恢复',
    source: 'trace/reviews',
    score: '84%',
    tone: 'violet',
  },
]

const runbookSteps = [
  '读取目标与约束',
  '检索 SOP / skill 切片',
  '编译任务 runbook',
  '生成导入配置包',
  '执行后回收 trace',
]

const commercialTracks = [
  {
    icon: Wand2,
    title: '个人 Pro',
    body: '私有 SOP 库、更多编译额度、多 harness 导出和历史版本。',
  },
  {
    icon: Library,
    title: '创作者市场',
    body: '把方法论、课程配套和行业 SOP 打包成可售卖资产。',
  },
  {
    icon: LockKeyhole,
    title: '团队 Workspace',
    body: '权限、版本、审计、内部 SOP 标准和成员导出策略。',
  },
]

const packageFiles = [
  'manifest.yaml',
  'goal.yaml',
  'runbook.yaml',
  'slices/*.md',
  'evals/*.yaml',
  'exporters/codex',
  'exporters/claude-code',
]

const targets: Record<ExportTarget, { label: string; files: string[]; command: string }> = {
  codex: {
    label: 'Codex',
    files: ['.codex-plugin/plugin.json', 'skills/ai-sop-studio/SKILL.md', 'hooks/hooks.json'],
    command: 'Install as Codex plugin package',
  },
  claude: {
    label: 'Claude Code',
    files: ['.claude-plugin/plugin.json', 'skills/ai-sop-studio/SKILL.md', 'agents/runbook-reviewer.md'],
    command: '/plugin install ai-sop-studio',
  },
}

export function App() {
  const [target, setTarget] = useState<ExportTarget>('codex')
  const activeTarget = targets[target]

  const manifestPreview = useMemo(
    () => [
      'name: launch-sop-compiler',
      'format: soprun/v0',
      'goal: "Turn a product idea into an importable agent workflow"',
      `export: ${activeTarget.label}`,
      'checks:',
      '  - has_goal',
      '  - has_eval',
      '  - has_recovery_path',
    ],
    [activeTarget.label],
  )

  return (
    <main className="app-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <header className="site-header">
        <a className="brand" href="#top" aria-label="AI SOP Studio 首页">
          <span className="brand-mark"><Layers3 size={21} /></span>
          <span>AI SOP Studio</span>
        </a>
        <nav aria-label="主导航">
          <a href="#studio">Studio</a>
          <a href="#format">.soprun</a>
          <a href="#market">商业化</a>
          <a href="#waitlist">预约</a>
        </nav>
        <a className="header-action" href="#waitlist">申请内测 <ArrowRight size={15} /></a>
      </header>

      <section id="top" className="hero-section">
        <div className="hero-copy">
          <h1>AI SOP Studio</h1>
          <p className="hero-lead">
            把目标、SOP 切片、skills、evals 和导出器，编译成 Codex / Claude Code 可直接导入的工作流配置包。
          </p>
          <div className="hero-actions">
            <a className="primary-action" href="#studio">创建 SOP Runbook <Play size={17} /></a>
            <a className="secondary-action" href="#format">查看 .soprun <FileCode2 size={17} /></a>
          </div>
          <div className="hero-proof" aria-label="平台能力">
            <span><Check size={15} /> 平台中立格式</span>
            <span><Check size={15} /> Codex / Claude Code 导出</span>
            <span><Check size={15} /> 私有 SOP 工作区</span>
          </div>
        </div>

        <div className="hero-product" aria-label="AI SOP Studio 产品预览">
          <div className="product-toolbar">
            <div className="window-dots"><span /><span /><span /></div>
            <div className="search-box"><Search size={15} /> 产品发布 SOP</div>
            <button type="button">Export Package</button>
          </div>
          <div className="compiler-grid">
            <section className="goal-panel">
              <div className="panel-title"><ClipboardList size={17} /> Goal</div>
              <h2>Launch an agent workflow asset</h2>
              <p>目标清晰、边界明确、成功标准可验证。</p>
              <div className="goal-checks">
                <span>done_when: 导出包可安装</span>
                <span>risk: 不自建 harness</span>
                <span>market: Pro / Creator / Team</span>
              </div>
            </section>

            <section className="slice-panel">
              <div className="panel-title"><Boxes size={17} /> SOP Slices</div>
              <div className="slice-list">
                {slices.map((slice) => (
                  <article className={`slice-row ${slice.tone}`} key={slice.name}>
                    <div>
                      <strong>{slice.name}</strong>
                      <span>{slice.source}</span>
                    </div>
                    <em>{slice.score}</em>
                  </article>
                ))}
              </div>
            </section>

            <section className="runbook-panel">
              <div className="panel-title"><GitBranch size={17} /> Runbook Compiler</div>
              <ol>
                {runbookSteps.map((step) => <li key={step}>{step}</li>)}
              </ol>
            </section>

            <section className="export-panel">
              <div className="panel-title"><PackageCheck size={17} /> Export Targets</div>
              <div className="target-tabs" role="tablist" aria-label="导出目标">
                <button type="button" className={target === 'codex' ? 'active' : ''} onClick={() => setTarget('codex')}>Codex</button>
                <button type="button" className={target === 'claude' ? 'active' : ''} onClick={() => setTarget('claude')}>Claude Code</button>
              </div>
              <div className="export-files">
                {activeTarget.files.map((file) => <span key={file}>{file}</span>)}
              </div>
            </section>
          </div>
        </div>
      </section>

      <section id="studio" className="studio-section">
        <div className="section-copy">
          <h2>不是新的 agent harness，是外壳的外壳。</h2>
          <p>
            AI SOP Studio 不执行模型 loop，不接管终端和浏览器。它把经验资产编译成可安装配置包，让 Codex / Claude Code 负责执行。
          </p>
        </div>
        <div className="flow-rail" aria-label="产品工作流">
          {[
            ['Goal', BrainCircuit],
            ['Retrieve', Search],
            ['Compile', Cpu],
            ['Export', Download],
            ['Learn', BookOpenCheck],
          ].map(([label, Icon], index) => (
            <article key={label as string}>
              <Icon size={22} />
              <strong>{label as string}</strong>
              <span>{index < 4 ? <ChevronRight size={16} /> : <Sparkles size={16} />}</span>
            </article>
          ))}
        </div>
      </section>

      <section id="format" className="format-section">
        <div className="format-card">
          <div className="section-copy">
            <h2>.soprun 是平台资产，不是普通 prompt。</h2>
            <p>
              每个包都保留目标、切片来源、执行步骤、验证标准、失败恢复和导出适配器，后续可以售卖、版本化、团队复用。
            </p>
          </div>
          <div className="package-layout">
            <div className="package-tree">
              {packageFiles.map((file) => <span key={file}><FileCode2 size={15} /> {file}</span>)}
            </div>
            <pre aria-label="manifest preview">{manifestPreview.join('\n')}</pre>
          </div>
        </div>
      </section>

      <section id="market" className="market-section">
        <div className="section-copy centered">
          <h2>商业化围绕工作流资产展开。</h2>
          <p>个人用它提升 agent 成功率，创作者用它分发方法论，团队用它沉淀内部标准。</p>
        </div>
        <div className="track-grid">
          {commercialTracks.map((track) => (
            <article key={track.title}>
              <track.icon size={24} />
              <h3>{track.title}</h3>
              <p>{track.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="reference-section" aria-label="视觉概念">
        <div>
          <h2>从发现站升级为 Studio。</h2>
          <p>
            SkillHot 可以继续做公共 catalog，AI SOP Studio 负责把公共技能、私有 SOP 和历史 trace 变成可导入资产。
          </p>
        </div>
        <img src={`${import.meta.env.BASE_URL}assets/ai-sop-studio-concept.png`} alt="AI SOP Studio 视觉概念图" />
      </section>

      <section id="waitlist" className="cta-section">
        <ShieldCheck size={30} />
        <h2>准备把你的 SOP 变成可安装的 agent 工作流资产。</h2>
        <p>首批内测会优先开放 Codex / Claude Code 导出、私有 SOP 库和创作者包管理。</p>
        <a className="primary-action" href="mailto:hello@savs-ai.com?subject=AI%20SOP%20Studio%20内测申请">
          申请内测 <ArrowRight size={17} />
        </a>
      </section>

      <footer>
        <span>AI SOP Studio</span>
        <span>ai-sop-studio.savs-ai.com</span>
        <span>Workflow assets for agent-native work.</span>
      </footer>
    </main>
  )
}
