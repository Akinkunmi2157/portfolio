import { profile } from '../data/profile.js'

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container">
        <p className="status"><span className="status__dot" aria-hidden="true" />{profile.availability}</p>
        <h1 className="hero__title">{profile.headline}</h1>
        <p className="hero__intro">{profile.intro}</p>
        <div className="hero__actions">
          <a href="#work" className="btn btn--dark">View my work</a>
          <a href={`mailto:${profile.email}`} className="btn btn--ghost">Email me</a>
        </div>
        <ul className="hero__meta">
          <li>{profile.role}</li>
          <li>{profile.location}</li>
          <li>{profile.lookingFor}</li>
          <li>Open to remote</li>
        </ul>
      </div>
    </section>
  )
}
