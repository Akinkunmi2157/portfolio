import { profile } from '../data/profile.js'

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <p className="label label--light">Contact</p>
        <h2 className="contact__title">Let’s build something useful together.</h2>
        <p className="contact__text">
          I’m looking for junior frontend roles, internships and freelance projects, remote or on-site.
          If you have something in mind, I’d love to hear about it.
        </p>
        <a className="contact__email" href={`mailto:${profile.email}`}>{profile.email}</a>
        <div className="contact__phone">
          <a className="btn btn--light" href={`tel:${profile.phoneLink}`}>Call {profile.phone}</a>
          <a className="btn btn--outline-light" href={`https://wa.me/${profile.phoneLink.replace('+', '')}`} target="_blank" rel="noreferrer">WhatsApp me ↗</a>
        </div>
        <div className="contact__links">
          <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
          <a href={profile.github} target="_blank" rel="noreferrer">GitHub ↗</a>
        </div>
      </div>
    </section>
  )
}
