import './TestimonialCard.css';

function TestimonialCard({ testimonial }) {
  const { name, location, avatar, quote, rating } = testimonial;

  return (
    <figure className="testimonial-card">
      <div className="testimonial-card__rating">{'★'.repeat(rating)}{'☆'.repeat(5 - rating)}</div>
      <blockquote className="testimonial-card__quote">"{quote}"</blockquote>
      <figcaption className="testimonial-card__author">
        <img src={avatar} alt={name} />
        <div>
          <p className="testimonial-card__name">{name}</p>
          <p className="testimonial-card__location">{location}</p>
        </div>
      </figcaption>
    </figure>
  );
}

export default TestimonialCard;
