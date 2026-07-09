import { useState } from 'react';
import { portfolioData } from '../data/portfolioData';

export default function ContactSection() {
  const { personalInfo } = portfolioData;
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Thanks for reaching out! I will get back to you soon.');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section className="section section-alt" id="contact">
      <div className="section-title">
        <p className="eyebrow">Contact</p>
        <h2>Let’s connect</h2>
      </div>
      <div className="contact-grid">
        <article className="card">
          <h3>Reach me at</h3>
          <ul className="contact-list">
            <li>Email: {personalInfo.email}</li>
            <li>Phone: {personalInfo.phone}</li>
            <li>LinkedIn: <a href={personalInfo.linkedin} target="_blank" rel="noreferrer">{personalInfo.linkedin}</a></li>
            <li>GitHub: <a href={personalInfo.github} target="_blank" rel="noreferrer">{personalInfo.github}</a></li>
          </ul>
        </article>
        <form className="card contact-form" onSubmit={handleSubmit}>
          <input placeholder="Your name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
          <input type="email" placeholder="Your email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
          <textarea rows="5" placeholder="Your message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required />
          <button className="btn btn-primary" type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}
