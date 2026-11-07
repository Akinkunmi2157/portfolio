export default function ProjectCase({ project, index }) {
  const { title, type, summary, image, problem, solution, highlights, role, stack, live, code } = project
  const host = live ? new URL(live).host : ''

  return (
    <article className="case">
      <div className="case__media">
        <div className="browser">
          <div className="browser__bar" aria-hidden="true">
            <i /><i /><i />
            <span>{host}</span>
          </div>
          <a href={live} target="_blank" rel="noreferrer" tabIndex={-1} aria-hidden="true">
            <img src={image} alt="" width="1440" height="764" />
          </a>
        </div>
      </div>

      <div className="case__content">
        <div className="case__meta">
          <span className="pill">{type}</span>
          <span className="case__role">{role}</span>
        </div>
        <h3 className="case__title">{title}</h3>
        <p className="case__summary">{summary}</p>

        <div className="case__grid">
          <div>
            <h4 className="label">The problem</h4>
            <p>{problem}</p>
          </div>
          <div>
            <h4 className="label">What I built</h4>
            <p>{solution}</p>
          </div>
        </div>

        <h4 className="label">Highlights</h4>
        <ul className="case__list">
          {highlights.map((h) => <li key={h}>{h}</li>)}
        </ul>

        <div className="case__foot">
          <ul className="chips" aria-label="Tech stack">
            {stack.map((s) => <li key={s}>{s}</li>)}
          </ul>
          <div className="case__links">
            {live && <a className="btn btn--dark" href={live} target="_blank" rel="noreferrer">Visit site <span aria-hidden="true">↗</span></a>}
            {code && <a className="btn btn--ghost" href={code} target="_blank" rel="noreferrer">View code <span aria-hidden="true">↗</span></a>}
          </div>
        </div>
      </div>
    </article>
  )
}
