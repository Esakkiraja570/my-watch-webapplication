import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'John Doe',
      text: 'Amazing watches! Timeless quality and excellent craftsmanship.',
      rating: 5
    },
    {
      id: 2,
      name: 'Jane Smith',
      text: 'Love my new watch. Fast delivery and great customer service.',
      rating: 5
    },
    {
      id: 3,
      name: 'Mike Johnson',
      text: 'Premium feel and style. Highly recommend!',
      rating: 5
    }
  ];

  return (
    <div className="testimonials-section">
      <h2>What Our Customers Say</h2>
      <div className="testimonials-container">
        {testimonials.map(testimonial => (
          <div key={testimonial.id} className="testimonial-card">
            <div className="rating">
              {'★'.repeat(testimonial.rating)}
            </div>
            <p className="testimonial-text">"{testimonial.text}"</p>
            <p className="testimonial-name">- {testimonial.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;