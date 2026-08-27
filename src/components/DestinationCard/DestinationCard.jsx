import './DestinationCard.css';

function DestinationCard({ destination, onSelect }) {
  const { name, image, rating, price, duration, description } = destination;

  return (
    <article className="destination-card">
      <div className="destination-card__image-wrap">
        <img src={image} alt={name} loading="lazy" />
        <span className="destination-card__badge">{duration}</span>
      </div>

      <div className="destination-card__body">
        <div className="destination-card__top">
          <h3>{name}</h3>
          <span className="destination-card__rating">⭐ {rating}</span>
        </div>

        <p className="destination-card__description">{description}</p>

        <div className="destination-card__footer">
          <span className="destination-card__price">
            <strong>${price}</strong> / person
          </span>
          <button className="btn btn-outline destination-card__btn" onClick={() => onSelect(destination)}>
            View Details
          </button>
        </div>
      </div>
    </article>
  );
}

export default DestinationCard;
