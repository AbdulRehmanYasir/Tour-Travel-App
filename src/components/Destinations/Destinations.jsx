import DestinationCard from '../DestinationCard/DestinationCard';
import './Destinations.css';

function Destinations({ destinations, onSelectDestination }) {
  return (
    <section id="destinations" className="section destinations">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Top Picks</p>
          <h2>Popular Destinations</h2>
          <p>Hand-picked locations loved by thousands of travelers every year.</p>
        </div>

        <div className="destinations__grid">
          {destinations.map((destination) => (
            <DestinationCard key={destination.id} destination={destination} onSelect={onSelectDestination} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Destinations;
