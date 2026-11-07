import { profile } from '../data/profile.js'

export default function About() {
  return (
    <section id="about" className="section section--tint">
      <div className="container split">
        <header>
          <p className="label">About</p>
          <h2 className="section__title">A developer who finishes what he starts.</h2>
          <figure className="portrait">
            <img src="/daniel.jpg" alt={`Portrait of ${profile.name}`} width="800" height="1066" loading="lazy" />
          </figure>
        </header>
        <div>
          <div className="prose">
            {profile.about.map((p) => <p key={p.slice(0, 24)}>{p}</p>)}
          </div>
          <div className="skills">
            {profile.skills.map((g) => (
              <div key={g.group} className="skills__group">
                <h3 className="label">{g.group}</h3>
                <ul className="chips">
                  {g.items.map((s) => <li key={s}>{s}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
