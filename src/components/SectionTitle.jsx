export default function SectionTitle({ eyebrow, title, align = 'center' }) {
  return (
    <div className={`section-title ${align === 'left' ? 'section-title-left' : ''}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <div className="title-line" />
    </div>
  );
}
