import { profile } from '../data/profile.js'

function Row({ item }) {
  return (
    <li className="row">
      <div className="row__head">
        <div>
          <h3 className="row__title">{item.title}</h3>
          <p className="row__org">{item.org}</p>
        </div>
        <span className="row__period">{item.period}</span>
      </div>
      {item.points && (
        <ul className="row__points">
          {item.points.map((p) => <li key={p}>{p}</li>)}
        </ul>
      )}
    </li>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container split">
        <header>
          <p className="label">Experience & education</p>
          <h2 className="section__title">Where I’ve been building.</h2>
        </header>
        <div>
          <h3 className="label">Experience</h3>
          <ul className="rows">{profile.experience.map((e) => <Row key={e.title} item={e} />)}</ul>
          <h3 className="label label--spaced">Education</h3>
          <ul className="rows">{profile.education.map((e) => <Row key={e.title} item={e} />)}</ul>
        </div>
      </div>
    </section>
  )
}
