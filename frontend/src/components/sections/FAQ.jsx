import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';
import { faqData } from '../../data/mock';

const FAQ = () => {
  return (
    <section id="faq" className="faq-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Perguntas 
            <span className="title-accent"> Frequentes</span>
          </h2>
          <p className="section-description">
            Tire suas dúvidas sobre o IAJuris e descubra como nossa plataforma 
            pode revolucionar seu escritório.
          </p>
        </div>

        <div className="faq-content">
          <Accordion type="single" collapsible className="faq-accordion">
            {faqData.map((item) => (
              <AccordionItem key={item.id} value={`item-${item.id}`} className="faq-item">
                <AccordionTrigger className="faq-question">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="faq-answer">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="faq-cta">
          <h3 className="faq-cta-title">Ainda tem dúvidas?</h3>
          <p className="faq-cta-text">
            Nossa equipe de especialistas está pronta para esclarecer qualquer questão 
            e mostrar como o IAJuris pode transformar seu escritório.
          </p>
          <div className="faq-cta-buttons">
            <button 
              className="btn btn-primary"
              onClick={() => window.open('https://wa.me/5574999705698?text=Tenho algumas dúvidas sobre o IAJuris. Podem me ajudar?', '_blank')}
            >
              Falar com Especialista
            </button>
            <button 
              className="btn btn-secondary"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Solicitar Demonstração
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;