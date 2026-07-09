import { portfolioData } from '../data/portfolioData';

export default function CertificationsSection() {
  const { certifications } = portfolioData;

  return (
    <section className="section" id="certifications">
      <div className="section-title">
        <p className="eyebrow">Certifications</p>
        <h2>Recognitions and credentials</h2>
      </div>
      <div className="cert-list">
        {certifications.map((item) => (
          <article key={item} className="card cert-card">
            <h3>{item}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}
