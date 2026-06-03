import { profile, projects, skills, experience, education } from "./data";
import "./App.css";

const ArrowOut = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
    <path d="M7 17L17 7M17 7H8M17 7V16" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

function Section({ id, label, children, delay = 0 }) {
  return (
    <section id={id} className="section rise" style={{ animationDelay: `${delay}s` }}>
      <div className="section-label">{label}</div>
      <div className="section-body">{children}</div>
    </section>
  );
}

export default function App() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <div className="wrap">
      <header className="hero rise">
        <div className="hero-text">
          <div className="hero-meta">
            <span className="dot" /> available for work · {profile.location}
          </div>
          <h1 className="hero-name">{profile.name}</h1>
          <p className="hero-title">
            {profile.title} <span className="slash">/</span> {profile.tagline}
          </p>
          <nav className="hero-links">
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            {profile.links.github && <a href={profile.links.github} target="_blank" rel="noreferrer">GitHub <ArrowOut /></a>}
            {profile.links.linkedin && <a href={profile.links.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowOut /></a>}
            {profile.links.website && <a href={profile.links.website} target="_blank" rel="noreferrer">Website <ArrowOut /></a>}
          </nav>
        </div>
        {profile.photo && (
          <div className="hero-image">
            <img src={profile.photo} alt={profile.photoAlt} />
          </div>
        )}
      </header>

      <Section id="about" label="01 / about" delay={0.1}>
        {profile.bio.map((line, i) => (
          <p key={i} className="bio-line">{line}</p>
        ))}
      </Section>

      <Section id="work" label="02 / selected work" delay={0.15}>
        <div className="proj-grid">
          {featured.map((p) => (
            <article key={p.name} className="proj proj-feat">
              <div className="proj-top">
                <h3>{p.name}</h3>
                {p.repo && <a className="proj-repo" href={p.repo} target="_blank" rel="noreferrer">code</a>}
              </div>
              <p className="proj-blurb">{p.blurb}</p>
              <ul className="stack">
                {p.stack.map((s) => <li key={s}>{s}</li>)}
              </ul>
              {p.live && (
                <a className="proj-live" href={p.live} target="_blank" rel="noreferrer">
                  view live <ArrowOut />
                </a>
              )}
            </article>
          ))}
        </div>

        {rest.length > 0 && (
          <div className="proj-list">
            {rest.map((p) => (
              <article key={p.name} className="proj-row">
                <div className="proj-row-main">
                  <h4>{p.name}</h4>
                  <p>{p.blurb}</p>
                  <ul className="stack stack-sm">
                    {p.stack.map((s) => <li key={s}>{s}</li>)}
                  </ul>
                </div>
                <div className="proj-row-links">
                  {p.live && <a href={p.live} target="_blank" rel="noreferrer">live <ArrowOut /></a>}
                  {p.repo && <a href={p.repo} target="_blank" rel="noreferrer">code</a>}
                </div>
              </article>
            ))}
          </div>
        )}
      </Section>

      <Section id="experience" label="03 / experience" delay={0.2}>
        {experience.map((job, i) => (
          <div key={i} className="job">
            <div className="job-head">
              <div>
                <span className="job-role">{job.role}</span>
                <span className="job-co"> · {job.company}</span>
              </div>
              <span className="job-period">{job.period}</span>
            </div>
            <ul className="job-points">
              {job.points.map((pt, j) => <li key={j}>{pt}</li>)}
            </ul>
          </div>
        ))}
      </Section>

      <Section id="skills" label="04 / skills" delay={0.25}>
        <div className="skills-grid">
          {skills.map((cat) => (
            <div key={cat.group} className="skill-cat">
              <span className="skill-group">{cat.group}</span>
              <ul>{cat.items.map((s) => <li key={s}>{s}</li>)}</ul>
            </div>
          ))}
        </div>
      </Section>

      <Section id="education" label="05 / education" delay={0.3}>
        {education.map((e, i) => (
          <div key={i} className="job">
            <div className="job-head">
              <div>
                <span className="job-role">{e.school}</span>
                <span className="job-co"> · {e.detail}</span>
              </div>
              <span className="job-period">{e.period}</span>
            </div>
          </div>
        ))}
      </Section>

      <footer className="foot rise" style={{ animationDelay: "0.35s" }}>
        <span className="foot-copy">© {new Date().getFullYear()} {profile.name}</span>
        <a href={`mailto:${profile.email}`}>{profile.email} <ArrowOut /></a>
      </footer>
    </div>
  );
}