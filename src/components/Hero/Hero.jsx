import './Hero.css';

function Hero({ title, subtitle, stats }) {
  return (
    <section id="home" className="hero">
      <div className="container hero__inner">
        <div className="hero__content">
          <p className="eyebrow">Travel the world</p>
          <h1 className="hero__title">{title}</h1>
          <p className="hero__subtitle">{subtitle}</p>

          <div className="hero__actions">
            <a href="#destinations" className="btn btn-primary">
              Explore Destinations
            </a>
            <a href="#packages" className="btn btn-outline">
              View Packages
            </a>
          </div>

          <div className="hero__stats">
            {stats.map((stat) => (
              <div className="hero__stat" key={stat.id}>
                <span className="hero__stat-value">{stat.value}</span>
                <span className="hero__stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero__media">
          <img
            src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=900&auto=format&fit=crop"
            alt="Traveler overlooking mountain landscape"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
