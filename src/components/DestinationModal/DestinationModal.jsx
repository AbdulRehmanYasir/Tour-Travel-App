import './DestinationModal.css';

function DestinationModal({ destination, onClose }) {
  if (!destination) return null;

  const { name, image, rating, price, duration, description } = destination;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal__close" onClick={onClose} aria-label="Close">
          ✕
        </button>
        <img src={image} alt={name} className="modal__image" />
        <div className="modal__body">
          <div className="modal__top">
            <h3>{name}</h3>
            <span>⭐ {rating}</span>
          </div>
          <p className="modal__description">{description}</p>
          <div className="modal__meta">
            <span>{duration}</span>
            <span className="modal__price">${price} / person</span>
          </div>
          <a href="#contact" className="btn btn-primary modal__cta" onClick={onClose}>
            Book This Trip
          </a>
        </div>
      </div>
    </div>
  );
}

export default DestinationModal;
