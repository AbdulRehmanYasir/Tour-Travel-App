import './PackageCard.css';

function PackageCard({ pkg }) {
  const { title, price, tagline, features, highlighted } = pkg;

  return (
    <div className={`package-card ${highlighted ? 'package-card--highlighted' : ''}`}>
      {highlighted && <span className="package-card__tag">Most Popular</span>}
      <h3 className="package-card__title">{title}</h3>
      <p className="package-card__tagline">{tagline}</p>

      <div className="package-card__price">
        <span className="package-card__amount">${price}</span>
        <span className="package-card__unit">/ person</span>
      </div>

      <ul className="package-card__features">
        {features.map((feature, index) => (
          <li key={index}>
            <span className="package-card__check">✓</span> {feature}
          </li>
        ))}
      </ul>

      <a href="#contact" className={`btn ${highlighted ? 'btn-primary' : 'btn-outline'} package-card__cta`}>
        Choose Plan
      </a>
    </div>
  );
}

export default PackageCard;
