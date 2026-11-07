import { projects } from '../data/projects.js'
import ProjectCase from '../components/ProjectCase.jsx'

export default function Work() {
  return (
    <section id="work" className="section">
      <div className="container">
        <header className="section__head">
          <p className="label">Selected work</p>
          <h2 className="section__title">Real problems, shipped solutions.</h2>
        </header>
        <div className="cases">
          {projects.map((p, i) => <ProjectCase key={p.id} project={p} index={i} />)}
        </div>
      </div>
    </section>
  )
}
