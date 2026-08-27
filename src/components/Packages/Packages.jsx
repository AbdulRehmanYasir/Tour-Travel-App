import PackageCard from '../PackageCard/PackageCard';
import './Packages.css';

function Packages({ packages }) {
  return (
    <section id="packages" className="section packages">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Pricing</p>
          <h2>Tour Packages</h2>
          <p>Choose a plan that fits your travel style and budget.</p>
        </div>

        <div className="packages__grid">
          {packages.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Packages;
