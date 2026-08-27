import TestimonialCard from '../TestimonialCard/TestimonialCard';
import './Testimonials.css';

function Testimonials({ testimonials }) {
  return (
    <section id="testimonials" className="section testimonials">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Testimonials</p>
          <h2>What Our Travelers Say</h2>
          <p>Real feedback from travelers who booked with us.</p>
        </div>

        <div className="testimonials__grid">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
