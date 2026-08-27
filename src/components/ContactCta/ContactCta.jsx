import { useState } from 'react';
import './ContactCta.css';

function ContactCta() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
    setEmail('');
  };

  return (
    <section id="contact" className="section contact-cta">
      <div className="container contact-cta__box">
        <div className="contact-cta__text">
          <h2>Ready for your next adventure?</h2>
          <p>Subscribe for exclusive deals and travel inspiration delivered to your inbox.</p>
        </div>

        <form className="contact-cta__form" onSubmit={handleSubmit}>
          <input
            type="email"
            required
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit" className="btn btn-primary">
            {submitted ? 'Subscribed ✓' : 'Subscribe'}
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactCta;
