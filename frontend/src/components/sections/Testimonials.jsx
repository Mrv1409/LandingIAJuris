import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import { testimonialsData } from '../../data/mock';

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            O que nossos 
            <span className="title-accent"> Clientes Dizem</span>
          </h2>
          <p className="section-description">
            Descubra como advogados e escritórios de todo o Brasil estão revolucionando 
            sua prática jurídica com o IAJuris.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonialsData.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-item">
              <Card className="testimonial-card">
                <CardContent className="testimonial-content">
                  <div className="quote-icon">
                    <Quote className="quote" />
                  </div>
                  
                  <div className="rating">
                    {[...Array(testimonial.rating)].map((_, idx) => (
                      <Star key={idx} className="star-filled" />
                    ))}
                  </div>
                  
                  <blockquote className="testimonial-text">
                    "{testimonial.testimonial}"
                  </blockquote>
                  
                  <div className="testimonial-author">
                    <div className="author-image">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        loading="lazy"
                      />
                    </div>
                    <div className="author-info">
                      <div className="author-name">{testimonial.name}</div>
                      <div className="author-role">{testimonial.role}</div>
                      <div className="author-company">{testimonial.company}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <div className="testimonials-stats">
          <div className="stat">
            <div className="stat-number">4.9/5</div>
            <div className="stat-label">Avaliação Média</div>
          </div>
          <div className="stat">
            <div className="stat-number">98%</div>
            <div className="stat-label">Satisfação</div>
          </div>
          <div className="stat">
            <div className="stat-number">1000+</div>
            <div className="stat-label">Advogados Satisfeitos</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;