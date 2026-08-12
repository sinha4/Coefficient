import Link from "next/link";

const departments = [
  { name: "Product & Engineering", spend: "$142k", adoption: 88, value: "3.8×", tone: "indigo" },
  { name: "Go-to-market", spend: "$96k", adoption: 71, value: "2.4×", tone: "blue" },
  { name: "Operations", spend: "$61k", adoption: 64, value: "1.9×", tone: "mint" },
  { name: "People & Legal", spend: "$48k", adoption: 43, value: "1.2×", tone: "sand" },
];

const workflows = [
  { name: "Customer research synthesis", team: "Product", potential: "High", balance: 76 },
  { name: "RFP response drafting", team: "Sales", potential: "High", balance: 68 },
  { name: "Contract risk review", team: "Legal", potential: "Augment", balance: 42 },
];

const tools = [
  { initials: "C", name: "Claude Enterprise", users: "438 / 500", change: "+18%", roi: "4.2×", color: "violet" },
  { initials: "G", name: "GitHub Copilot", users: "184 / 210", change: "+9%", roi: "3.6×", color: "dark" },
  { initials: "O", name: "ChatGPT Enterprise", users: "612 / 800", change: "+23%", roi: "2.8×", color: "green" },
  { initials: "M", name: "Gemini for Workspace", users: "229 / 620", change: "−4%", roi: "0.9×", color: "blue" },
];

function Mark() {
  return <span className="brand-mark" aria-hidden="true"><i /><i /><i /></span>;
}

function Trend({ children }: { children: React.ReactNode }) {
  return <span className="trend">↗ {children}</span>;
}

const pageTitles: Record<string, { eyebrow: string; title: string }> = {
  overview: { eyebrow: "WORKSPACE OVERVIEW", title: "Good morning, Alex." },
  workflows: { eyebrow: "WORKFLOW INTELLIGENCE", title: "Where work creates value" },
  tools: { eyebrow: "AI PORTFOLIO", title: "Tools earning their place" },
  people: { eyebrow: "HUMAN ADVANTAGE", title: "Where judgment matters most" },
  recommendations: { eyebrow: "RECOMMENDATIONS", title: "Your next best actions" },
  data: { eyebrow: "CONNECTED INTELLIGENCE", title: "Data sources and coverage" },
  settings: { eyebrow: "WORKSPACE", title: "Measurement settings" },
};

export default function Dashboard({ view = "overview" }: { view?: string }) {
  const heading = pageTitles[view] ?? pageTitles.overview;
  return (
    <main className={`shell view-${view}`}>
      <aside className="sidebar">
        <div className="brand"><Mark /><span>Coefficient</span></div>
        <nav aria-label="Primary navigation">
          <Link className={view === "overview" ? "active" : ""} href="/"><span>⌁</span> Overview</Link>
          <Link className={view === "workflows" ? "active" : ""} href="/workflows"><span>◇</span> Workflows</Link>
          <Link className={view === "tools" ? "active" : ""} href="/tools"><span>⊞</span> AI portfolio</Link>
          <Link className={view === "people" ? "active" : ""} href="/people"><span>◎</span> Human advantage</Link>
          <Link className={view === "recommendations" ? "active" : ""} href="/recommendations"><span>↗</span> Recommendations <b>5</b></Link>
        </nav>
        <div className="sidebar-lower">
          <p className="nav-label">WORKSPACE</p>
          <Link className={view === "data" ? "active" : ""} href="/data"><span>⌘</span> Data sources <em>8</em></Link>
          <Link className={view === "settings" ? "active" : ""} href="/settings"><span>⚙</span> Settings</Link>
          <div className="profile">
            <div className="avatar">AM</div>
            <div><strong>Alex Morgan</strong><small>Northstar Labs</small></div>
            <span>···</span>
          </div>
        </div>
      </aside>

      <section className="content" id="overview">
        <header className="topbar">
          <div><p>{heading.eyebrow}</p><h1>{heading.title}</h1></div>
          <div className="top-actions"><button className="organization"><span className="org-monogram">N</span><span><small>DEMO ORGANIZATION</small>Northstar Labs</span><b>⌄</b></button><button className="period">Last 90 days⌄</button><button className="icon-button" aria-label="Notifications">◌<span /></button></div>
        </header>

        <section className="hero">
          <div className="hero-copy">
            <div className="eyebrow"><span>Coefficient score</span><span className="live-dot">● LIVE</span></div>
            <div className="score-row"><strong>72</strong><span>/ 100</span><Trend>6 pts</Trend></div>
            <h2>Your AI portfolio is creating measurable value.</h2>
            <p>Teams recovered <b>18,420 hours</b> this quarter, while quality held steady. Three opportunities could unlock another <b>$410k</b> in annual value.</p>
            <button className="primary">View recommendations <span>→</span></button>
          </div>
          <div className="value-map" aria-label="Value balance: 62 percent AI leverage and 38 percent human advantage">
            <div className="map-heading"><div><span>Human + AI balance</span><h3>Where value is created</h3></div><span className="status">HEALTHY MIX</span></div>
            <div className="orbit">
              <div className="ring ring-one" /><div className="ring ring-two" /><div className="ring ring-three" />
              <div className="core"><strong>62%</strong><small>AI leverage</small></div>
              <span className="node node-a">Analysis</span><span className="node node-b">Creation</span><span className="node node-c">Decision</span><span className="node node-d">Empathy</span>
            </div>
            <div className="balance"><span><i className="ai" /> AI leverage <b>62%</b></span><span><i className="human" /> Human advantage <b>38%</b></span></div>
          </div>
        </section>

        <section className="metric-grid" aria-label="Key performance indicators">
          <article><div className="metric-icon purple">◴</div><p>Hours returned</p><div className="metric-value">18,420</div><small><Trend>14.2%</Trend> vs. prior period</small></article>
          <article><div className="metric-icon green">$</div><p>Value realized</p><div className="metric-value">$1.84M</div><small><Trend>21.8%</Trend> vs. prior period</small></article>
          <article><div className="metric-icon orange">◈</div><p>AI adoption</p><div className="metric-value">68%</div><small><Trend>8.4%</Trend> 1,463 active users</small></article>
          <article><div className="metric-icon red">⌁</div><p>Annual waste detected</p><div className="metric-value">$286k</div><small className="warning">↓ 14 redundant licenses</small></article>
        </section>

        <section className="split-grid">
          <article className="panel" id="workflows">
            <div className="panel-title"><div><p>VALUE BY DEPARTMENT</p><h3>AI return, across the business</h3></div><button>View analysis →</button></div>
            <div className="dept-head"><span>Department</span><span>Annual spend</span><span>Adoption</span><span>Value multiple</span></div>
            {departments.map((dept) => <div className="dept-row" key={dept.name}>
              <strong><i className={`dept-dot ${dept.tone}`} />{dept.name}</strong><span>{dept.spend}</span>
              <span className="adoption"><i><b style={{ width: `${dept.adoption}%` }} /></i>{dept.adoption}%</span><em>{dept.value}</em>
            </div>)}
          </article>

          <article className="panel opportunity" id="recommendations">
            <div className="panel-title"><div><p>NEXT BEST ACTION</p><h3>Right-size Gemini licenses</h3></div><span className="priority">HIGH IMPACT</span></div>
            <p className="opportunity-copy">391 seats show little or no activity. Reallocate power users and reduce inactive licenses at renewal.</p>
            <div className="impact"><div><small>ESTIMATED SAVINGS</small><strong>$146,000 <span>/ year</span></strong></div><div><small>CONFIDENCE</small><strong>94%</strong></div></div>
            <div className="source-row"><span>Based on</span><b>↗ Usage logs</b><b>↗ License costs</b><b>↗ Role data</b></div>
            <button className="recommendation-button">Review recommendation <span>→</span></button>
          </article>
        </section>

        <section className="lower-grid">
          <article className="panel" id="tools">
            <div className="panel-title"><div><p>AI PORTFOLIO</p><h3>Tools earning their place</h3></div><button>All tools →</button></div>
            <div className="tool-head"><span>Tool</span><span>Active users</span><span>Usage</span><span>Value multiple</span></div>
            {tools.map((tool) => <div className="tool-row" key={tool.name}><span className={`tool-logo ${tool.color}`}>{tool.initials}</span><strong>{tool.name}</strong><span>{tool.users}</span><span className={tool.change.startsWith("−") ? "down" : "up"}>{tool.change}</span><em>{tool.roi}</em></div>)}
          </article>
          <article className="panel" id="people">
            <div className="panel-title"><div><p>WORKFLOW OPPORTUNITY</p><h3>Where to augment next</h3></div><button>Explore →</button></div>
            <p className="section-note">Highest-value opportunities based on repetition, data readiness, and judgment required.</p>
            {workflows.map((flow) => <div className="workflow" key={flow.name}><div><strong>{flow.name}</strong><span>{flow.team}</span></div><div className="flow-bar"><i style={{ width: `${flow.balance}%` }} /></div><em>{flow.potential}</em></div>)}
            <div className="spectrum"><span>Human-led</span><span>AI-led</span></div>
          </article>
        </section>

        <section className="workspace-grid" id="data">
          <article className="panel source-panel">
            <div className="panel-title"><div><p>DATA SOURCES</p><h3>Connected intelligence</h3></div><span className="sync-status">● ALL SYSTEMS HEALTHY</span></div>
            <p className="section-note">Usage, cost, workflow, and outcome signals are combined into one decision layer.</p>
            <div className="source-list">
              <div><span className="source-icon green">O</span><strong>OpenAI Enterprise<small>Usage and seat activity</small></strong><em>8m ago</em></div>
              <div><span className="source-icon dark">GH</span><strong>GitHub<small>Delivery and cycle time</small></strong><em>11m ago</em></div>
              <div><span className="source-icon blue">W</span><strong>Workday<small>Teams, roles, cost centers</small></strong><em>18m ago</em></div>
              <div><span className="source-icon violet">S</span><strong>Salesforce<small>Revenue and outcomes</small></strong><em>22m ago</em></div>
            </div>
          </article>
          <article className="panel coverage-panel">
            <div className="panel-title"><div><p>DATA COVERAGE</p><h3>Decision confidence</h3></div><button>Manage →</button></div>
            <div className="coverage-score"><strong>94%</strong><span>Enterprise coverage</span></div>
            {[["AI usage",98],["License costs",100],["Business outcomes",84],["Workflow mapping",91]].map(([label,value]) => <div className="coverage-row" key={label}><span>{label}</span><i><b style={{width:`${value}%`}} /></i><em>{value}%</em></div>)}
          </article>
        </section>

        <section className="settings-panel panel" id="settings">
          <div className="panel-title"><div><p>WORKSPACE SETTINGS</p><h3>Northstar Labs measurement model</h3></div><span className="saved-state">✓ Demo configuration</span></div>
          <div className="settings-grid">
            <div><small>PRIMARY OUTCOME</small><strong>Productivity &amp; quality</strong><span>Balanced scorecard</span></div>
            <div><small>REPORTING CURRENCY</small><strong>USD ($)</strong><span>Fiscal year: Jan–Dec</span></div>
            <div><small>VALUE OF TIME</small><strong>$86 / hour</strong><span>Blended knowledge-worker rate</span></div>
            <div><small>GOVERNANCE MODE</small><strong>Responsible adoption</strong><span>Human review for high-risk work</span></div>
          </div>
        </section>

        <footer><span>Coefficient intelligence updated 12 minutes ago</span><span>8 sources connected · 94% data coverage</span></footer>
      </section>
    </main>
  );
}
